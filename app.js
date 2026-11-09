// Coordinates the user interface, lesson flow, and keyboard controls.
import { createFlightScene } from './flight-scene.js';

const $ = (selector) => document.querySelector(selector);
const homeView = $('#home-view');
const simView = $('#sim-view');
const sceneRoot = $('#scene-root');
const flightScene = createFlightScene(sceneRoot);
const panel = $('#instrument-panel');
const lessonRail = $('#lesson-rail');
const controlsHelp = $('#controls-help');
const lessonTransport = $('#lesson-transport');
const difficultyPicker = $('#difficulty-picker');
const toast = $('#toast');
const playInput = { pitch: 0, roll: 0, throttle: 0 };
window.playInput = playInput;
const keyboardInput = { pitch: 0, roll: 0, throttle: 0 };
const remoteInput = { pitch: 0, roll: 0, boost: false, lastMessageAt: 0, connected: false };
const tabletDialog = $('#tablet-dialog');
const gameSocketUrl = $('#game-websocket-url');
const gameConnectionStatus = $('#game-connection-status');
let gameSocket = null;
let gameRoom = '';
const instructionInput = { pitch: 0, roll: 0, rudder: 0, spoilers: 0, reverser: 0 };
function clearInstructionInput() {
  Object.assign(instructionInput, { pitch: 0, roll: 0, rudder: 0, spoilers: 0, reverser: 0 });
  flightScene.setInstructionControls(instructionInput);
}
let mode = 'instruction';
let scene = 'idle';
const sceneHistory = [];
let suppressSceneHistory = false;
let throttle = 62;
let paused = false;
let altitude = 3200;
let heading = 36;
let speed = 146;
let aoaAngle = 4;
let turnBank = 18;
let turnDirection = 1;
let playDifficulty = 'standard';
let lessonPaused = false;
let lessonSpeed = 1;
let toastTimer;
let returnScene = 'idle';
let taxiStartTime = performance.now();
let taxiElapsed = 0;

function createRoomCode() {
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function applyPlayInput() {
  const remoteIsFresh = remoteInput.connected && performance.now() - remoteInput.lastMessageAt < 350;
  playInput.pitch = remoteIsFresh ? remoteInput.pitch : keyboardInput.pitch;
  playInput.roll = remoteIsFresh ? remoteInput.roll : keyboardInput.roll;
  playInput.throttle = remoteIsFresh ? (remoteInput.boost ? 1 : 0) : keyboardInput.throttle;
  if (!remoteIsFresh && remoteInput.connected) {
    remoteInput.connected = false;
    updateGameConnectionStatus('平板訊號中斷');
    return true;
  }
  return false;
}

function resetRemoteInput() {
  Object.assign(remoteInput, { pitch: 0, roll: 0, boost: false, lastMessageAt: 0, connected: false });
  Object.assign(keyboardInput, { pitch: 0, roll: 0, throttle: 0 });
  applyPlayInput();
}

function updateGameConnectionStatus(message, connected = false) {
  gameConnectionStatus.textContent = message;
  gameConnectionStatus.classList.toggle('is-connected', connected);
  const navButton = $('#tablet-connect-button');
  navButton.textContent = connected ? '平板已連線' : '連接平板';
  navButton.classList.toggle('is-connected', connected);
}

function updateTabletPairingLink() {
  const url = gameSocketUrl.value.trim();
  const pairing = $('#tablet-pairing');
  if (!url || !gameRoom) {
    pairing.classList.add('is-hidden');
    return;
  }
  try {
    const wsUrl = new URL(url);
    if (!['ws:', 'wss:'].includes(wsUrl.protocol)) throw new Error('網址需使用 ws:// 或 wss://');
    const controllerUrl = new URL('controller.html', window.location.href);
    controllerUrl.searchParams.set('room', gameRoom);
    controllerUrl.searchParams.set('ws', wsUrl.href);
    $('#tablet-pairing-code').textContent = gameRoom;
    $('#tablet-pairing-link').value = controllerUrl.href;
    pairing.classList.remove('is-hidden');
  } catch {
    pairing.classList.add('is-hidden');
  }
}

function openTabletDialog() {
  if (!gameRoom) gameRoom = createRoomCode();
  if (location.protocol === 'https:' && !gameSocketUrl.value.trim()) {
    gameConnectionStatus.textContent = '先部署安全的 WebSocket 接收端，再填入 wss:// 位址';
  }
  updateTabletPairingLink();
  if (!tabletDialog.open) tabletDialog.showModal();
}

function closeGameSocket() {
  if (gameSocket) {
    const socket = gameSocket;
    gameSocket = null;
    socket.close(1000, 'Play ended');
  }
  resetRemoteInput();
  updateGameConnectionStatus('尚未連線');
}

function connectGameSocket() {
  if (gameSocket && [WebSocket.CONNECTING, WebSocket.OPEN].includes(gameSocket.readyState)) {
    gameSocket.close(1000, 'Reconnect requested');
    gameSocket = null;
  }

  let url;
  try {
    url = new URL(gameSocketUrl.value.trim());
    if (!['ws:', 'wss:'].includes(url.protocol)) throw new Error('請輸入 ws:// 或 wss:// 位址');
    if (window.location.protocol === 'https:' && url.protocol !== 'wss:') {
      throw new Error('HTTPS 網頁必須連接 wss:// 安全伺服器');
    }
  } catch (error) {
    updateGameConnectionStatus(error.message);
    return;
  }

  if (!gameRoom) gameRoom = createRoomCode();
  localStorage.setItem('tablet-websocket-url', url.href);
  updateTabletPairingLink();
  updateGameConnectionStatus('連線中…');
  const socket = new WebSocket(url);
  gameSocket = socket;
  socket.addEventListener('open', () => {
    if (gameSocket !== socket) return;
    socket.send(JSON.stringify({ type: 'join', role: 'game', room: gameRoom }));
    updateGameConnectionStatus('已連線，等待平板');
  });
  socket.addEventListener('message', (event) => {
    if (gameSocket !== socket) return;
    let message;
    try {
      message = JSON.parse(event.data);
    } catch (error) {
      updateGameConnectionStatus(`伺服器訊息錯誤：${error.message}`);
      return;
    }
    if (message.type === 'peer' && message.role === 'controller') {
      if (!message.connected) {
        remoteInput.connected = false;
        remoteInput.pitch = 0;
        remoteInput.roll = 0;
        remoteInput.boost = false;
      }
      updateGameConnectionStatus(message.connected ? '平板已連線' : '等待平板', message.connected);
      applyPlayInput();
      if (mode === 'play') renderScene();
      return;
    }
    if (message.type === 'control' && Number.isFinite(message.pitch) && Number.isFinite(message.roll)) {
      Object.assign(remoteInput, {
        pitch: message.pitch,
        roll: message.roll,
        boost: message.boost === true,
        lastMessageAt: performance.now(),
        connected: true
      });
      applyPlayInput();
    }
  });
  socket.addEventListener('error', () => {
    if (gameSocket === socket) updateGameConnectionStatus('連線失敗，檢查伺服器網址');
  });
  socket.addEventListener('close', () => {
    if (gameSocket !== socket) return;
    gameSocket = null;
    resetRemoteInput();
    updateGameConnectionStatus('連線中斷');
  });
}

gameSocketUrl.value = localStorage.getItem('tablet-websocket-url')
  || (location.protocol === 'http:' ? `ws://${location.hostname}:8081` : '');

$('#tablet-connect-button').addEventListener('click', openTabletDialog);
$('#game-connect-button').addEventListener('click', connectGameSocket);
gameSocketUrl.addEventListener('input', updateTabletPairingLink);
$('#copy-tablet-link').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText($('#tablet-pairing-link').value);
    showToast('平板連結已複製');
  } catch (error) {
    updateGameConnectionStatus(`無法複製連結：${error.message}`);
  }
});
setInterval(() => {
  applyPlayInput();
}, 100);

const sceneNames = {
  idle: { title: '跑道已就緒。', label: '待命', caption: '按 1 開始滑行。', coords: '跑道 05L  ·  TPE', hint: '按 1 開始滑行' },
  taxi: { title: '跑道已就緒。', label: '01 / 滑行', caption: '滑行至起飛點，準備進入跑道。', coords: '跑道 05L  ·  TPE', hint: '下一階段  2  起飛' },
  takeoff: { title: '升力正在形成。', label: '02 / 起飛', caption: '起飛滑跑時起落架保持放下；升空後自動收起。襟翼與縫翼在低速時增加升力，左右副翼差動偏轉以控制滾轉。', coords: '爬升  ·  襟翼 15°', hint: '下一階段  3  平飛' },
  cruise: { title: '四力平衡，穩定平飛。', label: '03 / 平飛', caption: '定速平飛時，升力等於重力，推力等於阻力；高度與速度維持穩定。', coords: '升力 = 重力  ·  推力 = 阻力', hint: '下一階段  4  降落' },
  landing: { title: '進場與降落。', label: '04 / 降落', caption: '進場時放下起落架與襟翼，沿下滑道下降；機身俯仰呈現拉平動作，觸地後展開擾流板減速。副翼隨滾轉控制偏轉。', coords: '下滑道  ·  起落架 / 襟翼 / 擾流板', hint: '1  滑行  ·  3  平飛' },
  turn: { title: '坡度帶來轉彎。', label: '05 / 轉彎', caption: '轉彎時副翼一側上偏、另一側下偏，帶動機翼傾斜；升力的水平分量改變航向。', coords: '協調轉彎  ·  教學示意', hint: '調整坡度  ·  按 Q 返回' },
  engine: { title: '渦輪引擎的內部構造。', label: '引擎剖面', caption: '旁通氣流冷卻外壁，核心氣流穿越燃燒室。', coords: '渦輪風扇  ·  剖面', hint: '下一章  W  翼型氣流' },
  wing: { title: '氣流如何作用於機翼。', label: '翼型氣流', caption: '翼型壓力差、貼附氣流與下洗流共同改變飛行方向。', coords: '氣流  ·  壓力', hint: '下一章  A  迎角' },
  aoa: { title: '迎角改變升力。', label: '迎角', caption: '調整迎角，觀察升力增加，以及超過臨界角後氣流分離的失速現象。', coords: '迎角  ·  升力 / 失速', hint: 'Q  返回  ·  1  重看' },
  slats: { title: '縫翼為氣流留出通道。', label: '前緣縫翼', caption: '縫翼放出後進入高迎角，觀察氣流如何經過狹縫並沿機翼上表面流動，延緩氣流分離。', coords: '機翼前緣  ·  高升力裝置', hint: 'S  重看  ·  Q  返回' },
  elevator: { title: '升降舵控制俯仰。', label: '升降舵', caption: '尾翼升降舵上偏時，尾翼向下作用力增加，機頭抬起；下偏時則相反。', coords: '水平尾翼  ·  俯仰控制', hint: 'V  重看  ·  Q  返回' },
  flight: { title: '現在由你駕駛。', label: '自由飛行', caption: '調整油門與姿態，維持穩定飛行。', coords: '飛行模擬  ·  即時', hint: 'Esc  返回主選單' }
};

// Build the lightweight SVG illustrations used by the lesson scenes.
function planeSvg(takeoff = false) {
  const planeClass = takeoff ? 'aircraft climbing' : 'aircraft taxiing';
  const windows = Array.from({ length: 31 }, (_, index) => `<circle cx="${276 + index * 17}" cy="275" r="2.4" fill="#52748a"/>`).join('');
  const runwayMarks = Array.from({ length: 12 }, (_, index) => `<path d="M${index * 115 - 40} 477h64"/>`).join('');
  return `<svg viewBox="0 0 1000 560" role="img" aria-label="大型客機與跑道">
    <defs><linearGradient id="fuselage" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#fff"/><stop offset=".38" stop-color="#eaf1f4"/><stop offset=".72" stop-color="#cbd9e1"/><stop offset="1" stop-color="#94aaba"/></linearGradient><linearGradient id="wingPaint" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#eaf1f4"/><stop offset="1" stop-color="#91a8b8"/></linearGradient><linearGradient id="nacelle" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#f9fbfc"/><stop offset="1" stop-color="#829aaa"/></linearGradient></defs>
    <rect width="1000" height="560" fill="#86aec9"/><path d="M0 356h1000v204H0z" fill="#becbd1"/><path d="M0 356h1000" stroke="#e9eff1" stroke-width="5"/><path d="M0 389h1000" stroke="#879ca9" stroke-width="2"/><g class="runway-motion" fill="#eef2f2">${runwayMarks}</g><path d="M0 506h1000" stroke="#899da9" stroke-width="2"/>
    <g class="${planeClass}" style="--taxi-phase:-${((performance.now() - taxiStartTime) / 1000).toFixed(2)}s">
      <ellipse cx="523" cy="352" rx="349" ry="11" fill="#4b6679" opacity=".22"/>
      <path d="M254 286 L166 257 Q155 254 146 261 L221 299 L278 304Z" fill="url(#wingPaint)" stroke="#829aaa" stroke-width="2"/><path d="M247 278 L183 180 Q178 171 189 174 L301 258Z" fill="url(#fuselage)" stroke="#829aaa" stroke-width="2"/><path d="M259 294 L191 374 Q185 382 199 381 L326 319Z" fill="url(#wingPaint)" stroke="#829aaa" stroke-width="2"/><path d="M300 266 L200 183 M304 299 L204 371" fill="none" stroke="#f8fbfc" stroke-width="2" opacity=".8"/>
      <path d="M234 274 L199 235 Q194 229 203 228 L272 263Z" fill="#e8eff2" stroke="#829aaa" stroke-width="1.5"/><path d="M239 291 L194 321 Q188 326 199 329 L276 301Z" fill="#c2d1da" stroke="#829aaa" stroke-width="1.5"/>
      <g class="engine-nacelle"><path d="M405 298 Q407 280 431 279 L472 280 Q491 283 496 299 L489 314 Q474 320 429 319 Q409 316 405 298Z" fill="url(#nacelle)" stroke="#718a9a" stroke-width="1.7"/><ellipse cx="491" cy="299" rx="7" ry="14" fill="#38596d"/><ellipse cx="493" cy="299" rx="3" ry="9" fill="#d8e4e9"/><path d="M535 302 Q538 288 559 288 L590 289 Q608 292 611 305 L605 318 Q589 322 557 321 Q539 318 535 302Z" fill="url(#nacelle)" stroke="#718a9a" stroke-width="1.7"/><ellipse cx="606" cy="305" rx="6" ry="12" fill="#38596d"/><ellipse cx="608" cy="305" rx="2.5" ry="8" fill="#d8e4e9"/></g>
      <path d="M112 277 Q127 262 168 254 Q203 247 263 247 L780 250 Q840 252 891 273 Q910 281 891 291 Q839 310 780 311 L263 307 Q202 306 164 298 Q128 290 112 277Z" fill="url(#fuselage)" stroke="#6f8797" stroke-width="2"/><path d="M127 277 Q143 267 171 263 L160 282 L128 283Z" fill="#496b82"/><path d="M188 290 Q403 302 772 296" fill="none" stroke="#3e7898" stroke-width="5"/><path d="M197 294 Q420 305 746 300" fill="none" stroke="#e7a47d" stroke-width="2"/><g>${windows}</g><path d="M811 261 Q839 265 862 274 L835 280 L804 276Z" fill="#3d6076"/><path d="M877 276h14" stroke="#fff7d8" stroke-width="4"/>
      <path d="M222 259 L185 212 Q181 205 190 205 L251 253Z" fill="url(#fuselage)" stroke="#7b92a1" stroke-width="1.7"/><path d="M219 291 L183 329 Q179 336 189 337 L255 301Z" fill="#cfdae0" stroke="#7b92a1" stroke-width="1.5"/><path d="M232 253 L183 189 Q178 181 189 181 L268 247Z" fill="#edf2f3" stroke="#7b92a1" stroke-width="1.7"/>
      <path d="M361 304l-5 34 M375 305l-2 34 M655 306l-5 32 M670 306l-1 32 M826 300l-2 36" stroke="#455e70" stroke-width="4"/><g fill="#263e4c"><circle cx="352" cy="341" r="8"/><circle cx="372" cy="341" r="8"/><circle cx="643" cy="339" r="8"/><circle cx="663" cy="339" r="8"/><circle cx="816" cy="338" r="7"/><circle cx="833" cy="338" r="7"/></g><g fill="#e5ecef"><circle cx="352" cy="341" r="2.7"/><circle cx="372" cy="341" r="2.7"/><circle cx="643" cy="339" r="2.7"/><circle cx="663" cy="339" r="2.7"/><circle cx="816" cy="338" r="2.4"/><circle cx="833" cy="338" r="2.4"/></g>
      ${takeoff ? '<path d="M296 320l20 8 M318 314l19 8" stroke="#db8b67" stroke-width="4"/>' : ''}
    </g>
  </svg>`;
}

function engineSvg() {
  const stators = Array.from({ length: 8 }, (_, index) => {
    const x = 272 + index * 31;
    return `<path d="M${x} 222 l13 76 M${x} 378 l13 -76" class="engine-blade" opacity="${index % 2 ? '.66' : '.9'}"/>`;
  }).join('');
  const flameJets = Array.from({ length: 9 }, (_, index) => {
    const x = 510 + index * 17;
    return `<path class="flame" d="M${x} 268 q8 13 0 25 q-8 -12 0 -25 M${x} 327 q8 13 0 25 q-8 -12 0 -25"/>`;
  }).join('');
  const compressorFans = Array.from({ length: 7 }, (_, index) => {
    const x = 195 + index * 15;
    const scale = 1 - index * .055;
    return `<g transform="translate(${x} 300) scale(${scale})"><path d="M0 -56 Q14 -41 3 -7 L-2 -4Z" class="engine-blade"/><path d="M0 56 Q-14 41 -3 7 L2 4Z" class="engine-blade"/></g>`;
  }).join('');
  const turbineFans = Array.from({ length: 4 }, (_, index) => {
    const x = 709 + index * 23;
    return `<g transform="translate(${x} 300)"><path d="M0 -48 Q15 -34 5 -5 L-2 -2Z" class="engine-blade"/><path d="M0 48 Q-15 34 -5 5 L2 2Z" class="engine-blade"/></g>`;
  }).join('');
  return `<svg viewBox="0 0 1000 600" role="img" aria-label="渦輪風扇引擎透明側面剖面，呈現雙涵道、燃燒室、風扇與渦輪">
    <defs><linearGradient id="metal" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#c2d0bd" stop-opacity=".4"/><stop offset=".5" stop-color="#769084" stop-opacity=".12"/><stop offset="1" stop-color="#c2d0bd" stop-opacity=".28"/></linearGradient><linearGradient id="core" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#67b7c2" stop-opacity=".12"/><stop offset=".45" stop-color="#ee8758" stop-opacity=".28"/><stop offset="1" stop-color="#ec8d58" stop-opacity=".07"/></linearGradient><marker id="arrowCool" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#8ac8d0"/></marker><marker id="arrowHot" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#ee9365"/></marker></defs>
    <rect width="1000" height="600" fill="transparent"/>
    <g opacity=".85"><path d="M65 300h115" class="flow-line" marker-end="url(#arrowCool)"/><path d="M115 255 C190 178 330 177 480 194 C650 208 780 220 900 250" class="flow-line" marker-end="url(#arrowCool)"/><path d="M115 345 C190 422 330 423 480 406 C650 392 780 380 900 350" class="flow-line" marker-end="url(#arrowCool)"/><path d="M119 293 C225 288 317 289 430 292 C590 294 745 292 930 295" class="flow-line warm" marker-end="url(#arrowHot)"/></g>
    <path d="M131 208 Q141 177 186 177 L816 212 Q860 219 891 255 L891 345 Q860 381 816 388 L186 423 Q141 423 131 392Z" class="engine-shell" fill="url(#metal)"/><path d="M151 226 Q162 202 202 202 L817 233 Q844 239 865 265 L865 335 Q844 361 817 367 L202 398 Q162 398 151 374Z" class="engine-shell-inner"/>
    <path d="M152 225 Q353 206 515 220 Q720 235 860 259 L860 276 Q704 254 518 247 Q320 235 152 250Z" fill="#71b8c4" opacity=".13" stroke="#80c0c8" stroke-width="1"/><path d="M152 350 Q353 369 515 356 Q720 341 860 317 L860 334 Q704 346 518 369 Q320 385 152 375Z" fill="#71b8c4" opacity=".13" stroke="#80c0c8" stroke-width="1"/>
    <path d="M177 270 Q318 266 444 274 L478 285 L638 285 Q676 285 698 270 L825 270 L825 330 L698 330 Q676 315 638 315 L478 315 L444 326 Q318 334 177 330Z" fill="url(#core)" stroke="#b2c6b2" stroke-width="1"/><path d="M123 300 H820" class="engine-shaft"/><path d="M123 300 H820" stroke="#e3e3cc" stroke-width="2" opacity=".8"/>
    <g class="fan-spin">${compressorFans}</g><g class="fan-spin reverse">${Array.from({ length: 5 }, (_, index) => { const x = 306 + index * 18; const scale = .75 - index * .035; return `<g transform="translate(${x} 300) scale(${scale})"><path d="M0 -43 Q-14 -29 -3 -4 L2 -2Z" class="engine-blade"/><path d="M0 43 Q14 29 3 4 L-2 2Z" class="engine-blade"/></g>`; }).join('')}</g>
    ${stators}<path d="M478 270 Q504 252 526 270 L526 330 Q504 348 478 330Z" class="combustion"/><path d="M485 278 Q502 265 519 278 L519 322 Q502 335 485 322Z" fill="#e57b58" opacity=".12" stroke="#e98b62" stroke-width="1"/>${flameJets}
    ${turbineFans}<path d="M686 240 L686 360 M794 247 L794 353" stroke="#d0d7c4" stroke-width="2"/><path d="M856 266 L914 283 L914 317 L856 334" fill="rgba(197,210,192,.1)" stroke="#b8c9b8" stroke-width="2"/>
    <g fill="#b7c7b8" font-family="monospace" font-size="9" letter-spacing=".8"><text x="147" y="168">進氣口</text><text x="250" y="168">風扇級</text><text x="480" y="168">燃燒室</text><text x="686" y="168">渦輪</text><text x="843" y="168">噴嘴</text><text x="146" y="449">外層金屬機匣</text><text x="155" y="240" fill="#9bd4da">旁通 / 冷卻氣流</text><text x="315" y="291" fill="#a5d7db">核心氣流</text><text x="495" y="242" fill="#f1a079">燃油噴嘴 × 9</text><text x="709" y="390">轉子鼓筒 / 共用轉軸</text><text x="765" y="436" fill="#f2a079">推力方向</text></g>
    <text x="248" y="184" fill="#90cbd2" font-family="monospace" font-size="8" letter-spacing=".6">反向旋轉 / 動能 → 熱能</text>
    <g stroke="#82978b" stroke-width="1" fill="none"><path d="M175 173v34 M292 173v40 M510 173v75 M717 173v63 M864 173v85 M214 443v-45 M780 430l33-83"/><path d="M145 465h720" stroke-dasharray="2 6"/></g>
    <g fill="#8fc8d0" font-family="monospace" font-size="8"><text x="155" y="488">旁通氣流繞過高溫核心，冷卻燃燒室壁</text></g>
    <g transform="translate(914 300)"><path d="M0 0h48" stroke="#ed9267" stroke-width="2" marker-end="url(#arrowHot)"/><path d="M3 -12v24" stroke="#ed9267"/><text x="8" y="-21" fill="#efa47e" font-family="monospace" font-size="8">排氣</text></g>
    <g transform="translate(272 500)"><path d="M0 0h32" stroke="#91cbd1" stroke-width="2"/><text x="40" y="3" fill="#95aba0" font-family="monospace" font-size="8">冷旁通氣流</text><path d="M156 0h32" stroke="#ed9267" stroke-width="2"/><text x="196" y="3" fill="#95aba0" font-family="monospace" font-size="8">高溫核心</text></g>
    <text x="500" y="550" text-anchor="middle" fill="#72877c" font-family="monospace" font-size="8" letter-spacing="1.5">高涵道比雙轉軸渦輪風扇 / 示意剖面</text>
  </svg>`;
}

function wingSvg() {
  return `<svg viewBox="0 0 900 540" role="img" aria-label="翼型剖面與伯努利壓力差、寇恩達效應和下洗流線示意">
    <defs><marker id="wingArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill="#8cc8cf"/></marker><marker id="downArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill="#e98c64"/></marker><radialGradient id="pressure"><stop stop-color="#6cb5c1" stop-opacity=".2"/><stop offset="1" stop-color="#6cb5c1" stop-opacity="0"/></radialGradient></defs>
    <ellipse cx="410" cy="210" rx="300" ry="130" fill="url(#pressure)"/><path d="M70 140 C190 90 337 87 481 105 C617 122 734 141 831 153" class="flow-line wing-flow" marker-end="url(#wingArrow)"/><path d="M70 191 C215 174 328 166 463 174 C616 183 725 199 831 211" class="flow-line wing-flow" marker-end="url(#wingArrow)"/><path d="M70 345 C221 361 360 375 504 372 C638 369 740 350 831 331" class="flow-line wing-flow" marker-end="url(#wingArrow)"/><path d="M70 397 C215 429 351 440 490 422 C625 405 739 375 831 355" class="flow-line wing-flow" marker-end="url(#wingArrow)"/>
    <path d="M187 286 C257 221 378 211 535 245 C605 260 663 281 715 295 C583 301 430 309 294 311 C234 310 199 301 187 286Z" fill="#d0dcca" stroke="#f0ead6" stroke-width="2"/><path d="M191 286 C333 271 499 273 702 295" stroke="#e57b58" stroke-width="2" fill="none"/><circle cx="188" cy="286" r="4" fill="#f3a07c"/><path d="M188 274v-60 M188 298v60" stroke="#e57b58" stroke-width="1.5" marker-end="url(#downArrow)"/>
    <g stroke="#e9946b" stroke-width="1" opacity=".8"><path d="M703 293 C738 308 744 343 746 409" fill="none" class="wing-flow"/><path d="M719 293 C758 318 766 355 767 428" fill="none" class="wing-flow"/><path d="M735 292 C780 319 789 364 789 443" fill="none" class="wing-flow"/><path d="M748 292 C800 324 810 373 811 457" fill="none" class="wing-flow"/></g>
    <path d="M120 115h82 M161 115v65" class="scene-rule"/><text x="119" y="104" class="scene-label">低壓區</text><text x="119" y="129" class="scene-label-small">上翼面 / 氣流較快</text><path d="M121 383h74 M158 383v-50" class="scene-rule"/><text x="120" y="408" class="scene-label">高壓區</text><text x="120" y="423" class="scene-label-small">下翼面 / 氣流較慢</text>
    <path d="M426 124v52" class="scene-rule"/><text x="398" y="111" class="scene-label">白努利定律</text><text x="386" y="195" class="scene-label-small">壓力差</text><path d="M545 231v-45h90" class="scene-rule"/><text x="550" y="174" class="scene-label">寇恩達效應</text><text x="550" y="188" class="scene-label-small">氣流沿曲面貼附</text><path d="M786 455v-57h-76" class="scene-rule"/><text x="790" y="465" class="scene-label">下洗氣流</text><text x="790" y="480" class="scene-label-small">反作用力 / 升力</text>
    <path d="M235 475h450" stroke="#73887c" stroke-width="1" stroke-dasharray="3 7"/><text x="450" y="501" text-anchor="middle" fill="#f0a17c" font-family="monospace" font-size="9" letter-spacing="1">作用：氣流向下偏轉  →  反作用：機翼獲得升力</text><text x="450" y="526" text-anchor="middle" fill="#758a7e" font-family="monospace" font-size="8">翼型剖面 / 氣流線為示意</text>
  </svg>`;
}

function flightSvg() {
  const bank = Number(window.flightBank || 0);
  return `<svg viewBox="0 0 900 520" role="img" aria-label="即時飛行模擬視景">
    <defs><linearGradient id="flightSky" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#304d4a"/><stop offset=".68" stop-color="#8a9d82"/><stop offset=".69" stop-color="#536950"/><stop offset="1" stop-color="#2c4136"/></linearGradient></defs>
    <rect width="900" height="520" fill="url(#flightSky)"/><circle cx="710" cy="108" r="50" fill="#e8c78c" opacity=".4"/><g fill="#d8e0d1" opacity=".13"><path d="M60 135q70-45 133 0t145-3q54-34 104 0v45H60z"/><path d="M500 180q62-50 121-8t138-4q45-25 88 1v40H500z"/></g><path d="M0 360 L90 324 145 342 230 279 286 303 378 247 443 272 523 233 582 271 680 220 735 265 815 218 900 252 V520H0Z" fill="#49634f"/><path d="M0 405L150 355 230 379 365 325 460 361 586 298 675 338 807 286 900 316V520H0Z" fill="#354c3d"/><path d="M300 520L428 332h45L620 520" fill="#263b34" opacity=".75"/><path d="M420 520L445 334h11L481 520" fill="#d8d5b6" opacity=".55"/><g class="flight-bob" transform="translate(450 380) rotate(${bank})"><path d="M0 -75 L22 -4 L205 33 Q214 41 204 47 L47 36 L35 92 L67 119 L65 127 L9 113 L-9 113 L-65 127 L-67 119 L-35 92 L-47 36 L-204 47 Q-214 41 -205 33 L-22 -4Z" fill="#dbe2d3" stroke="#fff2dc" stroke-width="1"/><path d="M-44 29L44 29 M-8 -47V110" stroke="#728b7d" stroke-width="1"/></g>
    <path d="M450 215v46 M427 238h46 M450 222l-5 10h10z" stroke="#e9e9d6" stroke-width="1" fill="none"/><g fill="#f0eee0" font-family="monospace" font-size="10"><text x="33" y="45">高度 ${Math.round(altitude).toLocaleString()} 英尺</text><text x="33" y="62">空速 ${Math.round(speed)} 節</text><text x="33" y="79">航向 ${String(Math.round(heading)).padStart(3, '0')}°</text><text x="755" y="45">坡度 ${bank}°</text><text x="755" y="62">油門 ${throttle}%</text></g><path d="M27 95h90 M27 101h52 M747 80h124" stroke="#d6e4d5" opacity=".5"/><path d="M395 291l55 -25 55 25" stroke="#e6e4d3" opacity=".5" fill="none"/>
  </svg>`;
}

// Keep lesson and instrument panels in sync with the current scene state.
function renderPanel() {
  if (mode === 'play') {
    panel.innerHTML = `<div class="panel-kicker">飛行儀表</div><div class="instrument-title">即時飛行數據</div><div class="metric-grid"><div class="metric"><label>高度</label><strong>${Math.round(altitude).toLocaleString()}<em>英尺</em></strong></div><div class="metric"><label>空速</label><strong>${Math.round(speed)}<em>節</em></strong></div><div class="metric"><label>航向</label><strong>${String(Math.round(heading)).padStart(3, '0')}<em>°</em></strong></div><div class="metric"><label>垂直速度</label><strong>${throttle > 45 ? '+' : '−'}${Math.abs(Math.round((throttle - 45) * 28))}<em>英尺/分</em></strong></div></div><div class="control-group"><div class="control-heading"><label for="throttle">油門</label><output id="throttle-output">${throttle}%</output></div><input id="throttle" type="range" min="0" max="100" value="${throttle}" aria-label="油門"/><div class="control-row"><button class="small-control ${paused ? 'is-active' : ''}" id="pause-control">${paused ? '▶ 繼續' : 'Ⅱ 暫停'}</button><button class="small-control" id="reset-control">↺ 重設</button></div></div><div class="key-hint"><span class="keycap">Shift</span>/<span class="keycap">Ctrl</span> 調整推力 · <span class="keycap">W</span>/<span class="keycap">S</span> 或 <span class="keycap">↑</span>/<span class="keycap">↓</span> 控制俯仰 · <span class="keycap">A</span>/<span class="keycap">D</span> 或 <span class="keycap">←</span>/<span class="keycap">→</span> 控制滾轉 · <span class="keycap">空白鍵</span> 重啟</div>`;
    $('#throttle').addEventListener('input', (event) => {
      throttle = Number(event.target.value);
      speed = Math.max(90, Math.min(320, 100 + throttle * 1.05));
      altitude = Math.max(500, altitude + (throttle - 45) * 5);
      $('#throttle-output').textContent = `${throttle}%`;
      const metrics = panel.querySelectorAll('.metric strong');
      metrics[0].innerHTML = `${Math.round(altitude).toLocaleString()}<em>英尺</em>`;
      metrics[1].innerHTML = `${Math.round(speed)}<em>節</em>`;
      metrics[3].innerHTML = `${throttle > 45 ? '+' : '−'}${Math.abs(Math.round((throttle - 45) * 28))}<em>英尺/分</em>`;
      renderScene();
    });
    $('#pause-control').addEventListener('click', togglePause);
    $('#reset-control').addEventListener('click', resetFlight);
  } else {
    const panelCopy = {
      idle: ['地面作業', '跑道待命', '按 <strong>1</strong> 開始滑行。'],
      taxi: ['地面作業', '飛行流程', '<strong>1</strong>　滑行<br><strong>2</strong>　起飛<br><strong>3</strong>　平飛<br><strong>4</strong>　降落<br><strong>5</strong>　轉彎<br><strong>E / W / A / S / V</strong>　引擎、氣動與控制面教材'],
      takeoff: ['起飛構型', '襟翼展開・起落架收放', '起飛滑跑時起落架保持放下；爬升後模型內建輪艙與起落架依序收起。襟翼／縫翼增加低速升力，左右副翼差動偏轉控制滾轉；抬輪時升降舵上偏，呈現機頭抬起的俯仰控制。'],
      cruise: ['飛行原理 / 03', '四力平衡', '定速平飛時升力等於重力、推力等於阻力；四力互相抵銷，維持等高與等速。'],
      turn: ['飛行原理 / 05', '坡度轉彎', '兩側副翼反向偏轉（一側上、一側下），帶動飛機傾斜；升力向量的水平分量使航向改變。<ol class="turn-stages"><li data-turn-phase="bank"><svg viewBox="0 0 84 48" role="img" aria-label="左右副翼一側上偏一側下偏，機翼隨之傾斜"><path d="M42 7v32M18 24h48" stroke="#91a9b8" stroke-dasharray="3 3"/><path d="M23 34L59 14" stroke="#f5f8fa" stroke-width="4"/><path d="M42 24L58 8" stroke="#c6f4ff" stroke-width="2"/><path d="M55 9l4-2-1 5" fill="none" stroke="#c6f4ff" stroke-width="2"/><path d="M42 24v17" stroke="#ffd0ab" stroke-width="2"/></svg><span><b>01　傾斜與副翼</b><small>一側副翼上偏、另一側下偏，機翼開始傾斜。</small></span></li><li data-turn-phase="lift"><svg viewBox="0 0 84 48" role="img" aria-label="傾斜升力分解為向上分量和向內水平分量"><path d="M42 40V9M42 40H72" stroke="#8098a7" stroke-dasharray="3 3"/><path d="M42 40L68 12" stroke="#c6f4ff" stroke-width="2.5"/><path d="M42 40V12M42 40H67" stroke="#ffd0ab" stroke-width="1.7"/><path d="M64 13l5-3-1 6M64 37l5 3-5 2" fill="none" stroke="#ffd0ab" stroke-width="1.7"/><circle cx="42" cy="40" r="2.5" fill="#f5f8fa"/></svg><span><b>02　分解</b><small>垂直分量托住飛機；水平分量指向內側。</small></span></li><li data-turn-phase="heading"><svg viewBox="0 0 84 48" role="img" aria-label="向內的水平分力使飛機沿彎曲航跡改變航向"><path d="M18 36C25 13 54 8 68 22" fill="none" stroke="#ffd0ab" stroke-width="2" stroke-dasharray="4 3"/><path d="M64 14l5 8-9-1" fill="#ffd0ab"/><path d="M31 31l18-5 4 3-17 7-5 7-2-1 2-7-7 1-1-2z" fill="#f5f8fa"/><path d="M49 27L62 15" stroke="#ffd0ab" stroke-width="2"/><path d="M58 16l5-2-1 5" fill="none" stroke="#ffd0ab" stroke-width="2"/></svg><span><b>03　轉向</b><small>向內的力讓航跡彎曲，航向逐漸改變。</small></span></li></ol><div class="control-group"><div class="control-heading"><label for="turn-bank">坡度</label><output id="turn-bank-output">18°</output></div><input id="turn-bank" type="range" min="0" max="30" step="1" value="18" aria-label="轉彎坡度"/><div class="control-row"><button class="small-control" id="turn-left" type="button" aria-pressed="false">↶ 左轉</button><button class="small-control is-active" id="turn-right" type="button" aria-pressed="true">右轉 ↷</button></div><div class="metric-grid"><div class="metric"><label>航向</label><strong id="turn-heading">000<em>°</em></strong></div><div class="metric"><label>轉率</label><strong id="turn-rate">0.0<em>°/s</em></strong></div></div></div>'],
      landing: ['進場 / 04', '降落構型', '進場開始放下主輪與前輪，再展開襟翼／縫翼；拉平時升降舵上偏，配合機身抬頭姿態。輪胎接觸跑道後擾流板展開，破壞升力並增加阻力。'],
      engine: ['推進系統 / 01', '雙轉軸渦輪風扇', '風扇加速氣流；旁通氣流冷卻核心外壁，核心氣流則壓縮、燃燒並驅動共用轉軸上的渦輪。'],
      wing: ['氣動原理 / 02', '升力如何形成', '氣流沿曲面貼附，翼面上下壓力差形成升力；向下偏轉的氣流帶來向上的反作用力。'],
      aoa: [ '迎角與失速', '改變機翼弦線與相對風的夾角，迎角增加時升力上升；超過臨界迎角後，氣流分離、升力下降並進入失速。'],
      slats: ['氣動原理 / 03', '前緣縫翼', '縫翼放出後，翼前緣與縫翼之間形成狹縫；氣流經狹縫加速並吹向機翼上表面，幫助氣流在較高迎角時保持貼附。能延緩失速，但不能消除失速。<ol class="slat-stages"><li data-slat-phase="stowed" class="is-active"><span class="slat-diagram stowed" aria-hidden="true"><i></i><b></b></span><span><b>01　收起</b><small></small></span></li><li data-slat-phase="high-aoa"><span class="slat-diagram deployed airflow" aria-hidden="true"><i></i><b></b><em></em></span><span><b>02　高迎角</b><small>縫翼伸出形成狹縫，引導氣流貼附上表面，延後分離與失速。</small></span></li></ol>'],
      elevator: ['飛行原理 / 06', '升降舵與俯仰', '升降舵位於水平尾翼後緣，改變尾翼的氣動力矩，控制機頭俯仰。。<ol class="elevator-stages"><li data-elevator-phase="neutral" class="is-active" role="button" tabindex="0" aria-label="升降舵中立"><span class="elevator-diagram neutral" aria-hidden="true"><i></i><b></b></span><span><b>01　中立</b><small>平飛時保持基本姿態。</small></span></li><li data-elevator-phase="up" role="button" tabindex="0" aria-label="升降舵上偏，機頭抬起"><span class="elevator-diagram up" aria-hidden="true"><i></i><b></b></span><span><b>02　上偏・抬頭</b><small>起飛抬輪或降落拉平時使用。</small></span></li><li data-elevator-phase="down" role="button" tabindex="0" aria-label="升降舵下偏，機頭下壓"><span class="elevator-diagram down" aria-hidden="true"><i></i><b></b></span><span><b>03　下偏・低頭</b><small>尾翼力矩反向，機頭向下。</small></span></li></ol>']
    }[scene];
    const chapterKey = scene === 'wing' ? 'A' : scene === 'aoa' ? 'Q' : scene === 'engine' ? 'W' : scene === 'turn' ? '5' : scene === 'slats' ? 'S' : scene === 'elevator' ? 'V' : scene === 'takeoff' ? 'E' : '2';
    const chapterAction = ['aoa', 'turn', 'slats', 'elevator'].includes(scene) ? '返回課程' : '下一章';
    const panelKicker = panelCopy[0].replace(/^飛行原理\s*\/\s*/, '');
    panel.innerHTML = `<div class="panel-kicker">${panelKicker}</div><div class="instrument-title">${panelCopy[1]}</div><div class="panel-separator"></div><div class="panel-note">${panelCopy[2]}</div><div class="key-hint"><span class="keycap">${chapterKey}</span> ${chapterAction}</div>`;
    if (scene === 'turn') {
      const bankPaths = $('[data-turn-phase="bank"] svg').querySelectorAll('path');
      bankPaths[1].setAttribute('d', 'M23 14L59 34');
      bankPaths[2].setAttribute('d', 'M42 24L26 8');
      bankPaths[3].setAttribute('d', 'M29 9l-4-2 1 5');
      $('[data-turn-phase="lift"] small').textContent = '向上分力平衡重量；向內分力提供向心力。';
      document.querySelectorAll('[data-turn-phase]').forEach((step) => {
        step.setAttribute('role', 'button');
        step.setAttribute('tabindex', '0');
        step.setAttribute('aria-label', `${step.querySelector('b').textContent}，重新演示`);
        const replay = () => flightScene.replayTurnPhase(step.dataset.turnPhase);
        step.addEventListener('click', replay);
        step.addEventListener('keydown', (event) => {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.preventDefault();
          replay();
        });
      });
      $('#turn-bank').addEventListener('input', (event) => {
        turnBank = Number(event.target.value);
        $('#turn-bank-output').textContent = `${turnBank}°`;
        flightScene.setTurnControls(turnBank, turnDirection);
      });
      const setDirection = (direction) => {
        turnDirection = direction;
        $('#turn-left').classList.toggle('is-active', direction < 0);
        $('#turn-right').classList.toggle('is-active', direction > 0);
        $('#turn-left').setAttribute('aria-pressed', String(direction < 0));
        $('#turn-right').setAttribute('aria-pressed', String(direction > 0));
        $('.turn-stages').classList.toggle('is-left-turn', direction < 0);
        flightScene.setTurnControls(turnBank, turnDirection);
      };
      $('#turn-left').addEventListener('click', () => setDirection(-1));
      $('#turn-right').addEventListener('click', () => setDirection(1));
    }
    if (scene === 'slats') {
      document.querySelectorAll('[data-slat-phase]').forEach((step) => {
        const selectPhase = () => {
          const phase = step.dataset.slatPhase === 'stowed'
            ? 0
            : step.dataset.slatPhase === 'high-aoa' ? 2 : 1;
          flightScene.setSlatLessonDeployment(phase);
          document.querySelectorAll('[data-slat-phase]').forEach((item) => {
            const active = item === step;
            item.classList.toggle('is-active', active);
            item.setAttribute('aria-pressed', String(active));
          });
        };
        const label = step.querySelector('span:last-child b').textContent;
        step.setAttribute('role', 'button');
        step.setAttribute('tabindex', '0');
        step.setAttribute('aria-label', `${label}，顯示縫翼狀態`);
        step.setAttribute('aria-pressed', String(step.classList.contains('is-active')));
        step.addEventListener('click', selectPhase);
        step.addEventListener('keydown', (event) => {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.preventDefault();
          selectPhase();
        });
      });
    }
    if (scene === 'elevator') {
      const phaseDeflections = { neutral: 0, up: 1, down: -1 };
      const setPhase = (step) => {
        document.querySelectorAll('[data-elevator-phase]').forEach((item) => {
          const active = item === step;
          item.classList.toggle('is-active', active);
          item.setAttribute('aria-pressed', String(active));
        });
        flightScene.setElevatorLessonDeflection(phaseDeflections[step.dataset.elevatorPhase]);
      };
      document.querySelectorAll('[data-elevator-phase]').forEach((step) => {
        step.setAttribute('aria-pressed', String(step.classList.contains('is-active')));
        step.addEventListener('click', () => setPhase(step));
        step.addEventListener('keydown', (event) => {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.preventDefault();
          setPhase(step);
        });
      });
    }
  }
}

function updateCruisePanel(state) {
  const panel = $('#cruise-panel');
  const revealed = state.progress >= 1;
  panel.classList.toggle('is-revealed', revealed);
  panel.setAttribute('aria-hidden', String(!revealed));
}

function updateLandingPanel(state) {
  const phases = ['gear', 'throttle', 'flaps', 'glide', 'flare', 'spoilers'];
  const phaseLabels = {
    gear: '起落架放下',
    throttle: '收油門',
    flaps: '放襟翼',
    glide: '沿下滑道下降',
    flare: '拉平觸地',
    spoilers: '擾流板已展開'
  };
  const activeIndex = phases.indexOf(state.phase);
  $('#landing-phase-label').textContent = phaseLabels[state.phase];
  $('#landing-throttle').textContent = `${state.throttle}%`;
  $('#landing-glide').textContent = `${state.glideAngle.toFixed(1)}°`;
  $('#landing-flaps').textContent = state.flaps > 95 ? '全展開' : state.flaps > 0 ? '展開中' : '收起';
  $('#landing-spoilers').textContent = state.spoilers > 95 ? '已展開' : state.spoilers > 0 ? '展開中' : '待命';
  $('#landing-flap-meter').style.width = `${state.flaps}%`;
  $('#landing-spoiler-meter').style.width = `${state.spoilers}%`;
  $('#landing-progress-bar').style.width = `${state.progress * 100}%`;
  document.querySelectorAll('#landing-timeline li').forEach((step) => {
    const index = phases.indexOf(step.dataset.phase);
    step.classList.toggle('is-active', index === activeIndex);
    step.classList.toggle('is-complete', index < activeIndex);
  });
}

function renderScene() {
  flightScene.setView(scene, { mode, throttle, altitude, bank: window.flightBank || 0, turnBank, turnDirection, onLandingUpdate: updateLandingPanel, onCruiseUpdate: updateCruisePanel, onTurnUpdate: updateTurnPanel });
  flightScene.setInstructionControls(instructionInput);
}

function updateTurnPanel(state) {
  const heading = $('#turn-heading');
  const rate = $('#turn-rate');
  if (!heading || !rate) return;
  heading.innerHTML = `${String(Math.round(state.heading) % 360).padStart(3, '0')}<em>°</em>`;
  rate.innerHTML = `${state.rate.toFixed(1)}<em>°/s</em>`;
  document.querySelectorAll('[data-turn-phase]').forEach((step) => {
    const active = step.dataset.turnPhase === state.phase;
    step.classList.toggle('is-active', active);
    step.setAttribute('aria-pressed', String(active));
  });
}

function updateAoaPanel(value = aoaAngle) {
  const state = flightScene.setAngleOfAttack(value);
  aoaAngle = state.angle;
  $('#aoa-range').value = String(state.angle);
  $('#aoa-output').textContent = `${state.angle}°`;
  $('#aoa-lift-value').textContent = `${state.liftPercent}%`;
  $('#aoa-lift-bar').style.width = `${state.liftPercent}%`;
  $('#aoa-lift-track').setAttribute('aria-valuenow', String(state.liftPercent));
  $('#aoa-panel').classList.toggle('is-stalled', state.stalled);
  $('#aoa-stall-state').textContent = state.stalled ? '失速 · 顛簸 / 下沉' : '氣流貼附';
}

// Move between lesson scenes while preserving the return-history behavior.
function setScene(nextScene) {
  if (nextScene === 'turn' && scene === 'turn') return setScene('cruise');
  if (nextScene === 'slats' && scene === 'slats') flightScene.setSlatLessonDeployment(0);
  if (nextScene !== scene && mode === 'instruction' && !suppressSceneHistory) sceneHistory.push(scene);
  const zoomScenes = ['engine', 'wing', 'aoa', 'slats', 'elevator'];
  if (nextScene === 'turn' && scene !== 'turn') returnScene = scene;
  if (nextScene === 'elevator' && scene === 'elevator') flightScene.setElevatorLessonDeflection(0);
  if (zoomScenes.includes(nextScene) && !zoomScenes.includes(scene)) {
    returnScene = scene;
    if (scene === 'taxi') taxiElapsed = performance.now() - taxiStartTime;
  }
  if (nextScene === 'taxi' && scene !== 'taxi') {
    taxiStartTime = performance.now();
    taxiElapsed = 0;
  }
  if (['idle', 'taxi', 'takeoff', 'cruise', 'landing'].includes(nextScene)) returnScene = nextScene;
  scene = nextScene;
  document.body.classList.toggle('takeoff-mode', scene === 'takeoff');
  $('#bernoulli-panel').classList.toggle('is-hidden', mode !== 'instruction' || scene !== 'wing');
  document.body.classList.toggle('zoom-engine', scene === 'engine');
  document.body.classList.toggle('zoom-wing', scene === 'wing');
  document.body.classList.toggle('zoom-aoa', scene === 'aoa');
  document.body.classList.toggle('zoom-slats', scene === 'slats');
  document.body.classList.toggle('zoom-elevator', scene === 'elevator');
  document.body.classList.toggle('zoom-cruise', scene === 'cruise');
  document.body.classList.toggle('zoom-landing', scene === 'landing');
  document.body.classList.toggle('zoom-turn', mode === 'instruction' && scene === 'turn');
  const details = sceneNames[scene];
  $('#scene-heading').textContent = details.title;
  $('#stage-label').textContent = details.label;
  $('#scene-caption').textContent = details.caption;
  $('#stage-coordinates').textContent = details.coords;
  const stageIndex = ['taxi', 'takeoff', 'cruise', 'landing'].indexOf(scene) + 1;
  const studyKey = { engine: 'E', wing: 'W', aoa: 'A', slats: 'S', elevator: 'V', turn: '5' }[scene];
  $('#scene-progress').innerHTML = scene === 'flight' ? '即時 <i></i> 飛行' : studyKey ? `${studyKey} <i></i> 教材` : `${String(stageIndex).padStart(2, '0')} <i></i> 04`;
  $('#aoa-panel').classList.toggle('is-hidden', mode !== 'instruction' || scene !== 'aoa');
  $('#cruise-panel').classList.toggle('is-hidden', mode !== 'instruction' || scene !== 'cruise');
  if (scene === 'cruise') {
    $('#cruise-panel').classList.remove('is-revealed');
    $('#cruise-panel').setAttribute('aria-hidden', 'true');
  }
  $('#landing-panel').classList.toggle('is-hidden', mode !== 'instruction' || scene !== 'landing');
  lessonTransport.classList.toggle('is-hidden', mode !== 'instruction' || scene === 'idle');
  if (scene !== 'aoa' && $('#aoa-panel').contains(document.activeElement)) document.activeElement.blur();
  $('#bottom-hint').innerHTML = details.hint.replace(/([1-5EWAQSV])/g, '<b>$1</b>');
  lessonRail.classList.toggle('is-hidden', mode === 'play');
  document.querySelectorAll('.lesson-step').forEach((button) => button.classList.toggle('is-active', button.dataset.scene === scene));
  renderScene();
  renderPanel();
}

function startMode(nextMode) {
  if (mode === 'play' && nextMode !== 'play') closeGameSocket();
  mode = nextMode;
  sceneHistory.length = 0;
  const shortcuts = nextMode === 'instruction'
    ? [['1', '滑行'], ['2', '起飛'], ['3', '平飛'], ['4', '降落'], ['5', '轉彎'], ['E', '引擎'], ['W', '機翼'], ['A', '迎角'], ['S', '前緣縫翼'], ['V', '升降舵'], ['R', '引擎氣流'], ['Q', '返回上一個畫面'], ['Esc', '返回上一章／主選單']]
    : [['Shift', '加速'], ['Ctrl', '減速'], ['W', '向上'], ['S', '向下'], ['A', '向左'], ['D', '向右'], ['C', '切換駕駛艙視角'], ['Space', '重來'], ['Esc', '回上一頁']];
  controlsHelp.innerHTML = `<strong class="controls-help-title">操作快捷鍵</strong><div class="controls-help-grid${nextMode === 'instruction' ? ' instruction-shortcuts' : ''}">${shortcuts.map(([key, action]) => `<div class="controls-help-item"><kbd>${key}</kbd><span>${action}</span></div>`).join('')}</div>`;
  controlsHelp.classList.remove('is-hidden');
  controlsHelp.setAttribute('aria-label', `${nextMode === 'instruction' ? 'Instruction' : 'Play'} 操作快捷鍵`);
  returnScene = 'idle';
  taxiElapsed = 0;
  taxiStartTime = performance.now();
  homeView.classList.add('is-hidden');
  simView.classList.remove('is-hidden');
  simView.classList.toggle('play-mode', nextMode === 'play');
  document.body.classList.toggle('instruction-mode', nextMode === 'instruction');
  document.body.classList.toggle('play-mode', nextMode === 'play');
  flightScene.setDifficulty(playDifficulty);
  lessonPaused = false;
  paused = false;
  document.body.classList.remove('paused');
  document.body.classList.remove('lesson-paused');
  flightScene.setLessonPlayback({ paused: false, rate: lessonSpeed });
  $('#lesson-pause').textContent = 'Ⅱ 暫停';
  $('#lesson-pause').setAttribute('aria-label', '暫停教學');
  document.body.classList.remove('zoom-engine', 'zoom-wing', 'zoom-aoa', 'zoom-slats', 'zoom-elevator', 'zoom-cruise', 'zoom-landing', 'zoom-turn', 'takeoff-mode');
  $('#bernoulli-panel').classList.add('is-hidden');
  $('#aoa-panel').classList.add('is-hidden');
  $('#cruise-panel').classList.add('is-hidden');
  $('#landing-panel').classList.add('is-hidden');
  document.body.classList.remove('menu-active');
  clearInstructionInput();
  resetRemoteInput();
  $('#mode-kicker').textContent = nextMode === 'instruction' ? '飛行學院 / Instruction' : '飛行學院 / Play';
  $('#mode-switch-label').textContent = nextMode === 'instruction' ? 'Play' : 'Instruction';
  $('#connection-label').textContent = nextMode === 'instruction' ? '課程進行中' : '飛行進行中';
  suppressSceneHistory = true;
  setScene(nextMode === 'instruction' ? 'idle' : 'flight');
  suppressSceneHistory = false;
  difficultyPicker.classList.toggle('is-hidden', nextMode !== 'play');
  if (nextMode === 'play') {
    gameRoom = createRoomCode();
    openTabletDialog();
    if (gameSocketUrl.value.trim()) connectGameSocket();
  }
  showToast(nextMode === 'instruction' ? '教學模式已啟動 · 1–5 / E / W / A / S / V / R 切換 · Q 返回 · Esc 離開' : '自由飛行已啟動 · Shift/Ctrl 油門，W/S 俯仰，A/D 滾轉，空白鍵重啟');
}

function backHome() {
  closeGameSocket();
  homeView.classList.remove('is-hidden');
  simView.classList.add('is-hidden');
  controlsHelp.classList.add('is-hidden');
  lessonTransport.classList.add('is-hidden');
  difficultyPicker.classList.remove('is-hidden');
  document.body.classList.remove('instruction-mode', 'play-mode', 'zoom-engine', 'zoom-wing', 'zoom-aoa', 'zoom-slats', 'zoom-cruise', 'zoom-landing', 'zoom-turn', 'takeoff-mode');
  $('#bernoulli-panel').classList.add('is-hidden');
  $('#aoa-panel').classList.add('is-hidden');
  $('#cruise-panel').classList.add('is-hidden');
  $('#landing-panel').classList.add('is-hidden');
  document.body.classList.add('menu-active');
  clearInstructionInput();
  resetRemoteInput();
  $('#connection-label').textContent = '系統就緒';
  document.body.classList.remove('paused');
  document.body.classList.remove('lesson-paused');
  paused = false;
  lessonPaused = false;
  flightScene.setLessonPlayback({ paused: false, rate: lessonSpeed });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2300);
}

function togglePause() {
  paused = !paused;
  document.body.classList.toggle('paused', paused);
  showToast(paused ? '模擬已暫停' : '模擬已繼續');
  renderPanel();
}

function resetFlight() {
  throttle = 62; altitude = 3200; heading = 36; speed = 146; window.flightBank = 0;
  renderPanel(); renderScene(); showToast('飛行狀態已重設');
}

$('#instruction-button').addEventListener('click', () => startMode('instruction'));
$('#play-button').addEventListener('click', () => startMode('play'));
$('#home-button').addEventListener('click', backHome);
tabletDialog.addEventListener('click', (event) => {
  if (event.target === tabletDialog) tabletDialog.close();
});
$('#mode-switch').addEventListener('click', () => startMode(mode === 'instruction' ? 'play' : 'instruction'));
$('#lesson-replay').addEventListener('click', () => {
  lessonPaused = false;
  document.body.classList.remove('lesson-paused');
  $('#lesson-pause').textContent = 'Ⅱ 暫停';
  $('#lesson-pause').setAttribute('aria-label', '暫停教學');
  flightScene.setLessonPlayback({ paused: false, rate: lessonSpeed });
  flightScene.replayLesson(scene);
});
$('#lesson-pause').addEventListener('click', () => {
  lessonPaused = !lessonPaused;
  document.body.classList.toggle('lesson-paused', lessonPaused);
  $('#lesson-pause').textContent = lessonPaused ? '▶ 繼續' : 'Ⅱ 暫停';
  $('#lesson-pause').setAttribute('aria-label', lessonPaused ? '繼續教學' : '暫停教學');
  flightScene.setLessonPlayback({ paused: lessonPaused, rate: lessonSpeed });
});
$('#lesson-speed').addEventListener('change', (event) => {
  lessonSpeed = Number(event.target.value);
  flightScene.setLessonPlayback({ paused: lessonPaused, rate: lessonSpeed });
});
difficultyPicker.addEventListener('click', (event) => {
  const option = event.target.closest('[data-difficulty]');
  if (!option) return;
  playDifficulty = option.dataset.difficulty;
  difficultyPicker.querySelectorAll('[data-difficulty]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button === option));
  });
  flightScene.setDifficulty(playDifficulty);
});
//67676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767
//676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767
//67676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767
// 676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767
$('#aoa-range').addEventListener('input', (event) => updateAoaPanel(event.target.value));
//676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767
//676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767
//676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767
$('#aoa-return').addEventListener('click', () => setScene(returnScene));
lessonRail.addEventListener('click', (event) => {
  const button = event.target.closest('[data-scene]');
  if (button) setScene(button.dataset.scene);
});
$('#fullscreen-button').addEventListener('click', async () => {
  try {
    if (!document.fullscreenElement) await $('.stage-panel').requestFullscreen();
    else await document.exitFullscreen();
  } catch { showToast('全螢幕模式目前不可用'); }
});

// Route keyboard input to lesson navigation, playback, and flight controls.
window.addEventListener('keydown', (event) => {
  const angleSliderFocused = mode === 'instruction' && document.activeElement?.id === 'aoa-range';
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName) && !(angleSliderFocused && event.key.toLowerCase() === 'q')) return;
  if (event.key === 'Escape') {
    if (document.fullscreenElement) document.exitFullscreen();
    if (!simView.classList.contains('is-hidden')) {
      if (mode === 'instruction' && sceneHistory.length) {
        const previousScene = sceneHistory.pop();
        suppressSceneHistory = true;
        setScene(previousScene);
        suppressSceneHistory = false;
      } else backHome();
    }
    return;
  }
  if (simView.classList.contains('is-hidden')) {
    if (event.key === 'Enter' || event.key.toLowerCase() === 'i') startMode('instruction');
    if (event.key.toLowerCase() === 'p') startMode('play');
    return;
  }
  if (mode === 'instruction') {
    const key = event.key.toLowerCase();
    const mapping = { '2': 'takeoff', '3': 'cruise', '4': 'landing', '5': 'turn', e: 'engine', w: 'wing', a: 'aoa', s: 'slats', v: 'elevator' };
    if (key === '1') {
      const airborne = ['takeoff', 'cruise', 'flight'].includes(scene) || ['takeoff', 'cruise', 'flight'].includes(returnScene);
      setScene(airborne ? 'landing' : 'taxi');
    } else if (mapping[key]) setScene(mapping[key]);
    else if (key === 'r' && !event.repeat) {
      if (scene !== 'engine') setScene('engine');
      flightScene.toggleEngineAirflow();
    }     else if (key === 'q' && ['engine', 'wing', 'aoa', 'slats', 'elevator', 'turn'].includes(scene)) setScene(returnScene);
  } else {
    if (event.key.toLowerCase() === 'c' && !event.repeat) {
      flightScene.toggleCockpitView();
      return;
    }
    if (event.code === 'Space') {
      event.preventDefault();
      Object.assign(keyboardInput, { pitch: 0, roll: 0, throttle: 0 });
      resetRemoteInput();
      paused = false;
      document.body.classList.remove('paused');
      flightScene.restartPlay();
      showToast('飛行已重新開始');
      renderPanel();
      return;
    }
    const key = event.key.toLowerCase();
    if (key === 'w' || key === 'arrowup') keyboardInput.pitch = 1;
    else if (key === 's' || key === 'arrowdown') keyboardInput.pitch = -1;
    else if (key === 'a' || key === 'arrowleft') keyboardInput.roll = -1;
    else if (key === 'd' || key === 'arrowright') keyboardInput.roll = 1;
    else if (key === 'shift') keyboardInput.throttle = 1;
    else if (key === 'control') keyboardInput.throttle = -1;
    else if (event.code === 'Numpad8') keyboardInput.pitch = 1;
    else if (event.code === 'Numpad2') keyboardInput.pitch = -1;
    else if (event.code === 'Numpad4') keyboardInput.roll = -1;
    else if (event.code === 'Numpad6') keyboardInput.roll = 1;
    else return;
    applyPlayInput();
    if (key === 'control' || key.startsWith('arrow')) event.preventDefault();
    renderScene();
  }
});

window.addEventListener('keyup', (event) => {
  const key = event.key.toLowerCase();
  if (mode !== 'play') return;
  if ((key === 'w' || key === 'arrowup') && keyboardInput.pitch === 1) keyboardInput.pitch = 0;
  else if ((key === 's' || key === 'arrowdown') && keyboardInput.pitch === -1) keyboardInput.pitch = 0;
  else if ((key === 'a' || key === 'arrowleft') && keyboardInput.roll === -1) keyboardInput.roll = 0;
  else if ((key === 'd' || key === 'arrowright') && keyboardInput.roll === 1) keyboardInput.roll = 0;
  else if (key === 'shift' && keyboardInput.throttle === 1) keyboardInput.throttle = 0;
  else if (key === 'control' && keyboardInput.throttle === -1) keyboardInput.throttle = 0;
  else if (event.code === 'Numpad8' && keyboardInput.pitch === 1) keyboardInput.pitch = 0;
  else if (event.code === 'Numpad2' && keyboardInput.pitch === -1) keyboardInput.pitch = 0;
  else if (event.code === 'Numpad4' && keyboardInput.roll === -1) keyboardInput.roll = 0;
  else if (event.code === 'Numpad6' && keyboardInput.roll === 1) keyboardInput.roll = 0;
  applyPlayInput();
  renderScene();
});

document.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => {
  button.blur();
}));
