# 專題檔案導覽

這份文件說明專題原始碼、設定、第三方資產和建置資料夾的用途。可執行的原始碼已在檔案內加上精簡註解；JSON、授權原文和二進位資產不適合加入程式註解，因此在此說明。

## 專題主要檔案

- `index.html`：網頁入口與介面骨架，包含首頁、Instruction/Play 模式、教學區、儀表和各種教學面板。
- `styles.css`：整個網站的視覺樣式、動畫、不同螢幕尺寸的排版，以及 Instruction/Play 全螢幕模式。
- `app.js`：介面與教學流程控制；切換場景、更新儀表面板、處理暫停和鍵盤操作。
- `flight-scene.js`：Three.js 3D 場景；建立相機、光源、跑道與飛行視覺，載入飛機模型並呈現引擎和飛行畫面。
- `vite.config.js`：Vite 開發與建置設定；本機開發時提供網路存取，部署到 GitHub Pages 時設定專案子路徑。
- `package.json`：專案名稱、使用的 npm 套件，以及 `npm run dev`、`npm run build` 等指令。JSON 格式不支援註解。
- `package-lock.json`：鎖定完整依賴版本，讓 `npm ci` 安裝出一致的套件組合。這是 npm 自動維護的 JSON 檔，不應手動加註解。
- `README.md`：專題簡介、安裝執行方式、操作按鍵與模擬限制。
- `THIRD_PARTY_ASSETS.md`：第三方模型和程式的來源、作者、授權及本專題如何使用它們。
- `F110-LICENSE.txt`：F110 替代模型所附的 MIT 授權文字，請保留原文。

## GitHub 與 Copilot 設定

- `.github/copilot-instructions.md`：提供給 Copilot 的專題背景與修改注意事項，不會在網站執行。
- `.github/workflows/deploy.yml`：GitHub Actions 部署流程；推送到 `main` 或 `master` 時建置網站，並將 `dist` 發布至 GitHub Pages。也可從 GitHub Actions 頁面手動觸發。

## CFM56 引擎程式

- `src/third-party/cfm56/engine.js`：組合 CFM56-7B 渦輪風扇引擎的幾何與材質；來源是第三方 MIT 授權程式。
- `src/third-party/cfm56/blade.js`：建立葉片翼型截面與葉片幾何；由 `engine.js` 使用。
- `src/third-party/cfm56/LICENSE`：上述 CFM56 程式的 MIT 授權原文。第三方程式已有自己的說明註解，保留其來源與授權內容。

## 公開資產

`public/` 中的檔案會被 Vite 複製到網站建置結果，供瀏覽器載入。

- `public/models/grumman_f-14d_super_tomcat/`：Play 飛行場景使用的 F-14D glTF 模型、二進位幾何、貼圖和 CC BY 4.0 授權署名，詳見資料夾內的 `license.txt`。
- `public/models/F15_eagle.glb`：保留的 CC0 F-15 Eagle 替代模型，目前未用於作用中的場景。
- `public/models/airbus_a320_indonesian_presidential_livery.glb`：Instruction 教學場景使用的高解析度（約 97 MB）A320 rigged 模型；內含起落架／艙門、襟翼、副翼與擾流板動畫通道；沒有原生升降舵動畫，Instruction 以原平尾網格建立可動尾緣；授權署名見 `THIRD_PARTY_ASSETS.md`。
- `public/models/A350_nologo.glb`：保留的 A350 替代模型，目前未用於作用中的場景。
- `public/models/B737_nologo.glb`：保留的 B737 替代模型，目前未用於作用中的場景。
- `public/models/turbofan-cutaway.glb`：引擎教學場景使用的渦輪風扇剖面模型。
- `public/models/f110_web.glb`：保留的 F110 替代模型，目前未使用；授權見 `F110-LICENSE.txt`。
- `public/draco/draco_decoder.js`：Draco 壓縮網格的 JavaScript 解碼器。
- `public/draco/draco_wasm_wrapper.js`：JavaScript 解碼器和 WebAssembly 解碼模組之間的介接程式。
- `public/draco/draco_decoder.wasm`：Draco 網格解碼器的 WebAssembly 二進位檔。

GLB 和 WASM 是二進位檔，不能直接放入程式註解；請用 `THIRD_PARTY_ASSETS.md` 查模型來源與授權。

## 自動產生的資料夾

- `dist/`：`npm run build` 產生的正式網站檔案，部署時上傳這個資料夾；每次建置可能被覆寫，不要直接編輯裡面的檔案。
- `node_modules/`：npm 安裝的 Vite、Three.js 和其他套件，不是專題原始碼，也不應手動修改或逐檔加註解。
