# Third-party assets

## Grumman F-14D Super Tomcat fighter jet model

- Files: `public/models/grumman_f-14d_super_tomcat/scene.gltf` and its referenced binary and textures.
- Creator: KOG_THORNS, *Grumman F-14D "Super Tomcat"*.
- Source: https://sketchfab.com/3d-models/grumman-f-14d-super-tomcat-74be89a104a34caabacb25a705708097
- License: Creative Commons Attribution 4.0 International (CC BY 4.0): https://creativecommons.org/licenses/by/4.0/; see the model's `license.txt`.
- Attribution: This work is based on "Grumman F-14D "Super Tomcat"" by KOG_THORNS, licensed under CC BY 4.0.
- Changes: the model is used as the Play aircraft; runtime framing, scale, flight transforms, and layered orange-to-blue exhaust flames are controlled by this project.

## F-15 Eagle alternative fighter jet model

- File: `public/models/F15_eagle.glb` (retained, not used in the active Play scene).
- Creator/source: Innerscene, *F-15 Eagle fighter jet*
- Source: https://www.innerscene.com/tools/library/3d-parts/f-15-eagle-fighter-jet-e1d11142
- License: CC0 public domain dedication, as stated by the source page.
- Changes: the model file is unchanged.

## Airbus A320 model

- File: `public/models/airbus_a320_indonesian_presidential_livery.glb`
- Creator: drcrazzie, *AIRBUS A320 (Indonesian Presidential Livery)*
- Source: https://sketchfab.com/3d-models/airbus-a320-indonesian-presidential-livery-548d038ab9774d079d8d4e7e560a69bd
- License: Creative Commons Attribution 4.0 International (CC BY 4.0): https://creativecommons.org/licenses/by/4.0/
- Attribution: This work is based on *AIRBUS A320 (Indonesian Presidential Livery)* by drcrazzie, licensed under CC BY 4.0.
- Changes: the model file is unchanged; it is used as the Instruction aircraft. Its embedded animation channels drive the rigged flap, slat, aileron, and air-brake joints during the lesson phases.

## Airbus A350 alternative model

- File: `public/models/A350_nologo.glb`
- Creator: amvlab, *amvlab 3d Aircraft Models*
- Source: https://github.com/amvlab/aircraft-models
- License: Creative Commons Attribution 4.0 International (CC BY 4.0): https://creativecommons.org/licenses/by/4.0/
- Changes: the model file is unchanged and retained as an unused Instruction alternative.

## Boeing 737 alternative model

- File: `public/models/B737_nologo.glb`
- Creator, source, and license: the same *amvlab 3d Aircraft Models* CC BY 4.0 source above.
- Changes: the model file is unchanged and is retained as an unused alternative.

## CFM56-7B high-bypass turbofan geometry

- Source files: `src/third-party/cfm56/engine.js` and `src/third-party/cfm56/blade.js`
- Creator: jubbon, *Turbofan engine — interactive 3D model*
- Source: https://github.com/jubbon/jet-engine-3d
- License: MIT; see `src/third-party/cfm56/LICENSE`.
- Changes: the engine mesh is assembled locally; casing sectioning, camera framing, airflow colors, and animation are controlled by this project.

## Turbofan quarter cutaway

- File: `public/models/turbofan-cutaway.glb`
- Creator: Innerscene
- Source: https://www.innerscene.com/tools/library/3d-parts/turbofan-quarter-cutaway-e0184203
- License: CC0 1.0 public domain dedication.
- Changes: used as a local GLB in the E instruction scene; scaled and oriented at runtime. This is an educational visualization, not an engineering performance model.

## F110 alternative GLB

- File: `public/models/f110_web.glb` (retained, not used in the active scene)
- Creator: Keenan Casalegno, *F110-GE-129 parametric 3D model*
- Source: https://github.com/krabduke/f110-turbofan
- License: MIT; see `F110-LICENSE.txt`.
