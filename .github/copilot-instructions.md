# SKYLAB Project Notes

- This is a Vite/Three.js browser UI; serve it with `npm run dev` so local GLB assets and Draco files load over HTTP.
- Keep flight controls keyboard accessible and preserve the `1`, `2`, `E`, `W`, and `Q` instruction bindings.
- Instruction mode is a full-screen aircraft/runway view without labels or panels; keep the top-right mode switch accessible.
- The rigged A320 is the Instruction aircraft; A350 and B737 are retained third-party GLB alternatives. Preserve all aircraft attributions, and keep the CFM56 geometry modules' MIT notice. The F110 GLB is retained as an unused alternative.
- Start Instruction in a stationary runway state; `1` starts taxi and lands/continues taxi when pressed in flight. Show the Chinese Bernoulli experiment only in the W wing view.
- Airflow overlays and flight behavior are educational simulations, not validated engineering models.
- Use the flat cool-blue background, accessible top-right mode switch, full-screen Instruction scene, Three.js model framing, and responsive layout conventions.
