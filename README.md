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

開啟 `controller.html`，按「啟用感測」並將平板平放校正中心。傾斜方向會即時輸出上下左右數值；長按加速按鈕時加速，放開即停止。鍵盤可按住 Enter 或空白鍵加速。

啟動範例 WebSocket 接收端：

```sh
npm install
npm run receiver
npm run dev -- --host 0.0.0.0
```

手機與執行接收端的電腦需連上同一個可信任的區域網路。在手機瀏覽器開啟 Vite 顯示的區域網路網址並進入 `/controller.html`，把 WebSocket 位址中的主機名稱改成接收端電腦的區域網路 IP（預設埠 `8081`），再按「連線」。範例接收端會在終端機印出每個控制封包。此範例未提供身分驗證或 TLS，只適合可信任的本機網路；上線部署應使用 `wss://`、驗證與來源限制。

DeviceOrientation 在部分瀏覽器需要 HTTPS 安全來源，iOS Safari 也會在啟用按鈕後要求感測器權限。方向與加速資料每秒最多傳送 20 次；此控制器是操作示範，不是飛行或工程設備。
