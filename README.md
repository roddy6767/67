# 自主學習67 — 飛行模擬

A browser flight-learning UI with a rigged Airbus A320 for Instruction and a CC BY 4.0 F-14D Super Tomcat for Play, plus a procedurally built, high-bypass CFM56-7B turbofan. It runs with Vite and Three.js.

See [PROJECT_FILES.md](PROJECT_FILES.md) for a guide to the source files, assets, licenses, and generated folders.

## Run

Install Node.js LTS, then run:

```powershell
npm install
npm run dev
```

Open the local URL printed in the terminal. To build for production, run `npm run build`. This 3D version must be served over HTTP so the local GLB models and Draco decoder can load.
The Instruction A320 model is a high-resolution, approximately 97 MB GLB, so its first load may take longer on a slow connection.

## Controls

- Instruction: starts stationary; `1` begins taxi, `2` takes off and holds climb, `3` shows cruise, `4` lands and continues to the runway roll, and `5` shows the banked-turn lesson. Drag the aircraft/model canvas to orbit the view in every lesson; `E` opens the cutaway engine, `W` shows the wing and Bernoulli experiment, `A` opens the angle-of-attack lesson, `R` toggles engine airflow, `Q` returns from a lesson view, and `Esc` returns to the previous scene or menu.
- Instruction aircraft animations: the A320's embedded rig drives the landing gear and doors, leading-edge devices, trailing-edge flaps, differential front/rear ailerons during the banked-turn lesson, and spoilers. The ailerons visibly deflect in opposite directions (one up, one down) as the aircraft banks, and the turn camera follows from an elevated rear-quarter view; takeoff retains a side view. The gear stays down for taxi and takeoff roll, retracts during climb, extends for approach, and is placed at the runway surface on touchdown. Flaps/slats deploy for takeoff and landing; spoilers deploy at touchdown, shown from a rear chase view. The asset has no authored elevator node or animation channel, so Instruction separates the original horizontal-tail trailing-edge geometry at runtime and hinges it for takeoff rotation and landing flare. Rudder and thrust-reverser animations are not present.
- The `A` angle-of-attack lesson displays a scaled A320 below the airfoil diagram; its pitch follows the selected angle, with an illustrative nose drop and buffet motion past the stall threshold.
- Instruction aerodynamic response is intentionally illustrative: normalized dynamic pressure is `q = (V / 90)²`; the lift index uses `q × CL × (1 − stall loss) × (1 − 0.78 × spoiler)` where `CL` increases with angle of attack, flaps and slats. Slats raise the simulated stall angle; drag/deceleration increases with flaps, sideslip, spoilers and ground-only reverse thrust. A banked turn uses `g tan(bank) / V`, with a small adverse-yaw term countered by rudder. These values shape the lesson animation and are not validated engineering data.
- Play: fly an approximately 107 km canyon course with wide S-bends in a restrained, modern military-inspired atmosphere with distant smoke columns; the takeoff runway points into the first bend and checkpoints sit at the turns. The map, aircraft and motion use a fivefold world scale. Gates 8, 9 and 10 mark the climb, summit and descent; every gate scores independently. The timer starts at the first gate and stops when the runway-width seventeenth finish gate is crossed. Entering the landing runway area engages automatic alignment, descent, and touchdown from the aircraft's current position; player flight controls are ignored until landing, and `Shift` can add throttle during the landing roll. `Shift`/`Ctrl` increase/decrease throttle; `W`/`S` or `↑`/`↓` pitch up/down; `A`/`D` or `←`/`→` roll and turn; `Space` restarts the flight; `Esc` returns to the menu.
- Switch between Instruction and Play using the top-right mode button.
- Engine/airflow overlays and the flight behavior are illustrative, not engineering or flight-training instruments.
- Model sources and license notices are documented in `THIRD_PARTY_ASSETS.md`, the model's `public/models/grumman_f-14d_super_tomcat/license.txt`, and `src/third-party/cfm56/LICENSE`.

## 行動裝置控制器

在電腦開啟 Play，按「連接平板」。先部署並連接 WebSocket 接收端，遊戲會產生平板配對連結；在平板開啟該連結，按「啟用感測」並允許感測權限。平板傾斜控制俯仰和滾轉，長按「長按加速」按鈕增加推力。失去連線時遊戲會自動回到中立輸入。

DeviceOrientation 僅可在 HTTPS 安全來源使用（localhost 除外），而 GitHub Pages 只託管前端靜態頁面，無法接收 WebSocket。此專案提供 Render WebSocket Blueprint（`render.yaml`），用於部署支援 WSS 的配對與即時轉送服務：

1. 將最新專案推送至 GitHub。
2. 在 Render 選擇 **New → Blueprint**，連結此 GitHub 儲存庫並部署 `render.yaml`。完成後複製 Render 提供的 `wss://...onrender.com` 網址。
3. 在 GitHub 儲存庫的 **Settings → Pages** 將 Source 設為 **GitHub Actions**，等待 Actions 部署完成。
4. 開啟 HTTPS 網站並選擇 Play；將 Render 的 `wss://` 網址貼入「WebSocket 伺服器」欄位並連線，再於平板開啟遊戲產生的配對連結。

本機測試可啟動 WebSocket 接收端：

```sh
npm install
npm run receiver
npm run dev -- --host 0.0.0.0
```

本機連線可在 Play 選擇「連接平板」，使用預設 `ws://<此電腦>:8081` 位址，並從遊戲產生的配對連結開啟平板控制器。區域網路的 HTTP 頁面可能無法啟用裝置感測；正式感測請使用 HTTPS 網頁和 WSS 接收端。範例使用隨機配對碼區分遊戲，沒有登入或帳號驗證，不應用於敏感或安全關鍵用途。

DeviceOrientation 在部分瀏覽器需要 HTTPS 安全來源，iOS Safari 也會在啟用按鈕後要求感測器權限。方向與加速資料每秒最多傳送 20 次；此控制器是操作示範，不是飛行或工程設備。
