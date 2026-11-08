const $ = (selector) => document.querySelector(selector);
const connectionStatus = $('#connection-status');
const sensorMessage = $('#sensor-message');
const connectButton = $('#connect-button');
const sensorButton = $('#sensor-button');
const calibrateButton = $('#calibrate-button');
const boostButton = $('#boost-button');
const websocketUrl = $('#websocket-url');
const tiltPad = $('#tilt-pad');
const sensorAvailable = 'DeviceOrientationEvent' in window && window.isSecureContext;
let touchPointerId = null;

const state = {
  pitch: 0,
  roll: 0,
  boost: false,
  boostHeld: false,
  baseline: null,
  socket: null,
  lastSentAt: 0
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const angleDifference = (value, baseline) => ((value - baseline + 540) % 360) - 180;

function normalizedTilt(value) {
  const deadZone = 4;
  const maxTilt = 35;
  const magnitude = Math.abs(value);
  if (magnitude <= deadZone) return 0;
  return Math.sign(value) * clamp((magnitude - deadZone) / (maxTilt - deadZone), 0, 1);
}

function currentControl() {
  return {
    type: 'control',
    timestamp: Date.now(),
    pitch: Number(state.pitch.toFixed(3)),
    roll: Number(state.roll.toFixed(3)),
    up: Number(Math.max(0, state.pitch).toFixed(3)),
    down: Number(Math.max(0, -state.pitch).toFixed(3)),
    left: Number(Math.max(0, -state.roll).toFixed(3)),
    right: Number(Math.max(0, state.roll).toFixed(3)),
    boost: state.boost
  };
}

function render() {
  const control = currentControl();
  $('#pitch-value').textContent = control.pitch.toFixed(2);
  $('#roll-value').textContent = control.roll.toFixed(2);
  $('#pitch-meter').style.width = `${Math.abs(control.pitch) * 50}%`;
  $('#pitch-meter').style.transform = `translateX(${control.pitch < 0 ? '-100%' : '0'})`;
  $('#roll-meter').style.width = `${Math.abs(control.roll) * 50}%`;
  $('#roll-meter').style.transform = `translateX(${control.roll < 0 ? '-100%' : '0'})`;
  $('#tilt-indicator').style.left = `${50 + control.roll * 40}%`;
  $('#tilt-indicator').style.top = `${50 - control.pitch * 40}%`;
  boostButton.classList.toggle('is-active', state.boost);
  boostButton.setAttribute('aria-pressed', String(state.boost));
}

function sendControl() {
  render();
  const now = performance.now();
  if (state.socket?.readyState === WebSocket.OPEN
    && state.socket.bufferedAmount < 16_384
    && now - state.lastSentAt >= 50) {
    state.socket.send(JSON.stringify(currentControl()));
    state.lastSentAt = now;
  }
}

function setBoost() {
  const boost = state.boostHeld;
  if (state.boost === boost) return;
  state.boost = boost;
  sendControl();
}

function calibrate(event) {
  if (!Number.isFinite(event.beta) || !Number.isFinite(event.gamma)) return;
  state.baseline = { beta: event.beta, gamma: event.gamma };
  state.pitch = 0;
  state.roll = 0;
  calibrateButton.disabled = false;
  sensorMessage.textContent = '感測中';
  sendControl();
}

function onOrientation(event) {
  if (!Number.isFinite(event.beta) || !Number.isFinite(event.gamma)) return;
  if (!state.baseline) {
    calibrate(event);
    return;
  }

  state.pitch = normalizedTilt(angleDifference(event.beta, state.baseline.beta));
  state.roll = normalizedTilt(angleDifference(event.gamma, state.baseline.gamma));
  sendControl();
}

async function enableSensors() {
  if (!sensorAvailable) {
    sensorMessage.textContent = '此瀏覽器不支援裝置感測。';
    return;
  }

  sensorButton.disabled = true;
  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    try {
      const permission = await DeviceOrientationEvent.requestPermission();
      if (permission !== 'granted') {
        sensorButton.disabled = false;
        sensorMessage.textContent = '未取得感測器權限。';
        return;
      }
    } catch (error) {
      sensorButton.disabled = false;
      sensorMessage.textContent = `無法取得感測器權限：${error.message}`;
      return;
    }
  }

  window.addEventListener('deviceorientation', onOrientation);
  sensorButton.textContent = '感測已啟用';
  sensorMessage.textContent = '平放平板校正中心';
}

function setConnectionStatus(message, connected = false) {
  connectionStatus.textContent = message;
  connectionStatus.classList.toggle('is-connected', connected);
}

function disconnect() {
  if (!state.socket) return;
  const socket = state.socket;
  state.socket = null;
  socket.close(1000, 'Controller disconnected');
  connectButton.textContent = '連線';
  setConnectionStatus('已中斷');
}

function connect() {
  if (state.socket && [WebSocket.CONNECTING, WebSocket.OPEN].includes(state.socket.readyState)) {
    disconnect();
    return;
  }

  let url;
  try {
    url = new URL(websocketUrl.value.trim());
    if (!['ws:', 'wss:'].includes(url.protocol)) throw new Error('網址必須使用 ws:// 或 wss://');
  } catch (error) {
    setConnectionStatus(error.message);
    websocketUrl.focus();
    return;
  }

  setConnectionStatus('連線中…');
  connectButton.textContent = '取消連線';
  const socket = new WebSocket(url);
  state.socket = socket;

  socket.addEventListener('open', () => {
    if (state.socket !== socket) return;
    setConnectionStatus('已連線', true);
    connectButton.textContent = '中斷連線';
    sendControl();
  });
  socket.addEventListener('error', () => {
    if (state.socket === socket) setConnectionStatus('連線錯誤，請確認接收端與網路');
  });
  socket.addEventListener('close', () => {
    if (state.socket !== socket) return;
    state.socket = null;
    connectButton.textContent = '連線';
    setConnectionStatus('已中斷');
  });
}

websocketUrl.value = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.hostname || 'localhost'}:8081`;
sensorButton.disabled = !sensorAvailable;
if (!sensorAvailable) {
  sensorButton.disabled = true;
  sensorButton.textContent = '感測需 HTTPS';
  sensorMessage.textContent = window.isSecureContext
    ? '此瀏覽器不支援傾斜感測；滑動圓盤控制方向。'
    : '傾斜感測需要 HTTPS；先滑動圓盤控制方向。';
}

sensorButton.addEventListener('click', enableSensors);
function updateTouchControl(event) {
  const bounds = tiltPad.getBoundingClientRect();
  const x = clamp((event.clientX - bounds.left) / bounds.width, 0, 1);
  const y = clamp((event.clientY - bounds.top) / bounds.height, 0, 1);
  state.roll = (x - 0.5) * 2;
  state.pitch = (0.5 - y) * 2;
  sendControl();
}

tiltPad.addEventListener('pointerdown', (event) => {
  if (sensorAvailable) return;
  event.preventDefault();
  touchPointerId = event.pointerId;
  tiltPad.setPointerCapture(event.pointerId);
  updateTouchControl(event);
});
tiltPad.addEventListener('pointermove', (event) => {
  if (event.pointerId === touchPointerId) updateTouchControl(event);
});
const releaseTouchControl = (event) => {
  if (event.pointerId !== touchPointerId) return;
  touchPointerId = null;
  state.pitch = 0;
  state.roll = 0;
  sendControl();
};
tiltPad.addEventListener('pointerup', releaseTouchControl);
tiltPad.addEventListener('pointercancel', releaseTouchControl);
calibrateButton.addEventListener('click', () => {
  state.baseline = null;
  state.pitch = 0;
  state.roll = 0;
  sensorMessage.textContent = '平放平板校正中心';
  sendControl();
});
connectButton.addEventListener('click', connect);

boostButton.addEventListener('pointerdown', (event) => {
  if (event.button !== undefined && event.button !== 0) return;
  event.preventDefault();
  state.boostHeld = true;
  boostButton.setPointerCapture(event.pointerId);
  setBoost();
});
const releaseBoost = () => {
  if (!state.boostHeld) return;
  state.boostHeld = false;
  setBoost();
};
boostButton.addEventListener('pointerup', releaseBoost);
boostButton.addEventListener('pointercancel', releaseBoost);
boostButton.addEventListener('lostpointercapture', releaseBoost);
boostButton.addEventListener('keydown', (event) => {
  if ((event.code === 'Space' || event.code === 'Enter') && !event.repeat) {
    event.preventDefault();
    state.boostHeld = true;
    setBoost();
  }
});
boostButton.addEventListener('keyup', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') releaseBoost();
});
boostButton.addEventListener('blur', () => {
  state.boostHeld = false;
  setBoost();
});

setInterval(() => {
  if (state.socket?.readyState === WebSocket.OPEN) sendControl();
}, 50);
window.addEventListener('pagehide', () => {
  state.boost = false;
  state.boostHeld = false;
  if (state.socket?.readyState === WebSocket.OPEN) state.socket.send(JSON.stringify(currentControl()));
  state.socket?.close(1000, 'Page closed');
});
