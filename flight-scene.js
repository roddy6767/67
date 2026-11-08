// Creates and updates the Three.js world, aircraft, engine, and flight visuals.
import * as THREE from 'three';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/addons/utils/SkeletonUtils.js';
import { buildEngine, getAllMaterials, MATS } from './src/third-party/cfm56/engine.js';

const BACKGROUND = 0x86aec9;
const INSTRUCTION_PLANE_URL = `${import.meta.env.BASE_URL}models/airbus_a320_indonesian_presidential_livery.glb`;
const PLAY_PLANE_URL = `${import.meta.env.BASE_URL}models/grumman_f-14d_super_tomcat/scene.gltf`;
const PLAY_WORLD_SCALE = 5;
const PLAY_AIRFRAME_SCALE = 1.15;
const TAKEOFF_RUNWAY_LENGTH = 3000;
const TAKEOFF_RUNWAY_WIDTH = 72;
const TAKEOFF_ROTATION_SPEED = 80;
const INSTRUCTION_RUNWAY_SURFACE_Y = -2.51;
const LANDING_APPROACH_SPEED = 120;
const LANDING_RUNWAY_LENGTH = 3600;
const LANDING_RUNWAY_WIDTH = 120;
const LANDING_CAPTURE_DISTANCE = 450;
const PLAY_MAX_SPEED = 320;
const ENGINE_MATERIALS = {
  titanium: { color: [0.2, 0.31, 0.43], metalness: 0.92, roughness: 0.24 },
  steel: { color: [0.36, 0.42, 0.48], metalness: 0.88, roughness: 0.2 },
  casing_alloy: { color: [0.13, 0.16, 0.19], metalness: 0.9, roughness: 0.4 },
  hot_nickel: { color: [0.48, 0.23, 0.09], metalness: 0.86, roughness: 0.38 },
  thermal_barrier: { color: [0.56, 0.32, 0.15], metalness: 0.18, roughness: 0.66 },
  composite: { color: [0.12, 0.15, 0.2], metalness: 0, roughness: 0.48 },
  rubber: { color: [0.055, 0.055, 0.059], metalness: 0, roughness: 0.88 }
};

export function createFlightScene(container) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BACKGROUND);

  const playSkyCanvas = document.createElement('canvas');
  playSkyCanvas.width = 1024;
  playSkyCanvas.height = 512;
  const playSkyContext = playSkyCanvas.getContext('2d');
  const playSkyGradient = playSkyContext.createLinearGradient(0, 0, 0, playSkyCanvas.height);
  playSkyGradient.addColorStop(0, '#4c5c66');
  playSkyGradient.addColorStop(0.34, '#849196');
  playSkyGradient.addColorStop(0.48, '#d5d0c2');
  playSkyGradient.addColorStop(0.56, '#a8a89b');
  playSkyGradient.addColorStop(1, '#4b5a5e');
  playSkyContext.fillStyle = playSkyGradient;
  playSkyContext.fillRect(0, 0, playSkyCanvas.width, playSkyCanvas.height);
  const sunGlow = playSkyContext.createRadialGradient(760, 170, 12, 760, 170, 190);
  sunGlow.addColorStop(0, 'rgba(244, 211, 164, 0.52)');
  sunGlow.addColorStop(0.22, 'rgba(214, 196, 163, 0.2)');
  sunGlow.addColorStop(1, 'rgba(196, 187, 164, 0)');
  playSkyContext.fillStyle = sunGlow;
  playSkyContext.fillRect(560, 0, 400, 360);
  playSkyContext.fillStyle = 'rgba(244, 220, 179, 0.64)';
  playSkyContext.beginPath();
  playSkyContext.arc(760, 170, 23, 0, Math.PI * 2);
  playSkyContext.fill();
  for (const cloud of [
    [100, 170, 190, 22], [310, 215, 150, 18], [510, 142, 170, 20],
    [890, 235, 220, 24], [690, 260, 130, 16], [30, 270, 145, 18]
  ]) {
    const [x, y, width, height] = cloud;
    playSkyContext.fillStyle = 'rgba(220, 218, 207, 0.36)';
    playSkyContext.beginPath();
    playSkyContext.ellipse(x, y, width, height, 0, 0, Math.PI * 2);
    playSkyContext.ellipse(x - width * 0.28, y + 3, width * 0.48, height * 0.72, 0, 0, Math.PI * 2);
    playSkyContext.ellipse(x + width * 0.3, y + 2, width * 0.56, height * 0.8, 0, 0, Math.PI * 2);
    playSkyContext.fill();
  }
  const playSkyTexture = new THREE.CanvasTexture(playSkyCanvas);
  playSkyTexture.mapping = THREE.EquirectangularReflectionMapping;
  playSkyTexture.colorSpace = THREE.SRGBColorSpace;

  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 24000);
  const baseFov = camera.fov;
  let targetFov = baseFov;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(container.clientWidth || window.innerWidth, container.clientHeight || window.innerHeight, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.localClippingEnabled = true;
  renderer.domElement.className = 'flight-canvas';
  renderer.domElement.tabIndex = 0;
  renderer.domElement.setAttribute('aria-label', '互動式 3D 模型；拖曳可旋轉各課程的飛機或模型視角');
  container.replaceChildren(renderer.domElement);

  const keyLight = new THREE.DirectionalLight(0xfff4e8, 0.85);
  keyLight.position.set(-3, 5, 6);
  scene.add(keyLight);
  const rimLight = new THREE.DirectionalLight(0xbcd4e4, 0.55);
  rimLight.position.set(5, 2, -6);
  scene.add(rimLight);
  scene.add(new THREE.AmbientLight(0x9fb0bc, 0.05));
  const engineFillLight = new THREE.HemisphereLight(0xe6f4ff, 0x68727c, 1.15);
  engineFillLight.visible = false;
  scene.add(engineFillLight);
  const engineKeyLight = new THREE.DirectionalLight(0xffe4c5, 1.25);
  engineKeyLight.position.set(-4, 7, 8);
  engineKeyLight.visible = false;
  scene.add(engineKeyLight);

  const environmentCanvas = document.createElement('canvas');
  environmentCanvas.width = 512;
  environmentCanvas.height = 256;
  const environmentContext = environmentCanvas.getContext('2d');
  const environmentGradient = environmentContext.createLinearGradient(0, 0, 0, 256);
  environmentGradient.addColorStop(0, '#f4f8fa');
  environmentGradient.addColorStop(0.3, '#d8e0e6');
  environmentGradient.addColorStop(0.48, '#9aa5ad');
  environmentGradient.addColorStop(0.56, '#3a4248');
  environmentGradient.addColorStop(0.78, '#23292e');
  environmentGradient.addColorStop(1, '#171b1f');
  environmentContext.fillStyle = environmentGradient;
  environmentContext.fillRect(0, 0, 512, 256);
  for (const center of [72, 192, 320, 440]) {
    const panel = environmentContext.createLinearGradient(0, 8, 0, 92);
    panel.addColorStop(0, 'rgba(255,255,255,1)');
    panel.addColorStop(1, 'rgba(255,255,255,0)');
    environmentContext.fillStyle = panel;
    environmentContext.fillRect(center - 34, 8, 68, 84);
  }
  const environmentTexture = new THREE.CanvasTexture(environmentCanvas);
  environmentTexture.mapping = THREE.EquirectangularReflectionMapping;
  environmentTexture.colorSpace = THREE.SRGBColorSpace;
  const environmentGenerator = new THREE.PMREMGenerator(renderer);
  scene.environment = environmentGenerator.fromEquirectangular(environmentTexture).texture;
  scene.environmentIntensity = 0.62;
  environmentTexture.dispose();
  environmentGenerator.dispose();

  const runwayGroup = new THREE.Group();
  const runwayTextureCanvas = document.createElement('canvas');
  runwayTextureCanvas.width = 256;
  runwayTextureCanvas.height = 256;
  const runwayTextureContext = runwayTextureCanvas.getContext('2d');
  runwayTextureContext.fillStyle = '#686b69';
  runwayTextureContext.fillRect(0, 0, 256, 256);
  for (let grainIndex = 0; grainIndex < 900; grainIndex += 1) {
    const shade = 78 + Math.floor(Math.random() * 28);
    const alpha = 0.04 + Math.random() * 0.08;
    runwayTextureContext.fillStyle = `rgba(${shade}, ${shade}, ${shade}, ${alpha})`;
    runwayTextureContext.fillRect(Math.random() * 256, Math.random() * 256, 2 + Math.random() * 4, 1 + Math.random() * 2);
  }
  const runwayTexture = new THREE.CanvasTexture(runwayTextureCanvas);
  runwayTexture.wrapS = THREE.RepeatWrapping;
  runwayTexture.wrapT = THREE.RepeatWrapping;
  runwayTexture.repeat.set(6, 0.8);
  runwayTexture.minFilter = THREE.LinearFilter;
  runwayTexture.magFilter = THREE.LinearFilter;
  runwayTexture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
  runwayTexture.generateMipmaps = false;
  runwayTexture.colorSpace = THREE.SRGBColorSpace;
  const runwayMaterial = new THREE.MeshStandardMaterial({
    color: 0xd5d1c7,
    map: runwayTexture,
    roughness: 0.96,
    metalness: 0
  });
  const runwayMarkMaterial = new THREE.MeshStandardMaterial({ color: 0xe5e3d9, roughness: 0.88, metalness: 0 });
  const runway = new THREE.Mesh(new THREE.BoxGeometry(TAKEOFF_RUNWAY_LENGTH, 0.08, TAKEOFF_RUNWAY_WIDTH), runwayMaterial);
  runway.position.set(0, -2.55, 0);
  runwayGroup.add(runway);
  const markGroup = new THREE.Group();
  runwayGroup.add(markGroup);
  const addRunwayMarkings = (group, length, width, centerLineGroup = group) => {
    const top = -2.4;
    for (const side of [-1, 1]) {
      const edge = new THREE.Mesh(new THREE.BoxGeometry(length - 48, 0.018, 1.2), runwayMarkMaterial);
      edge.position.set(0, top, side * (width / 2 - 4));
      group.add(edge);
    }
    const centerDashCount = Math.floor((length - 120) / 90);
    for (let index = 0; index < centerDashCount; index += 1) {
      const centerDash = new THREE.Mesh(new THREE.BoxGeometry(38, 0.018, 1.1), runwayMarkMaterial);
      centerDash.position.set((index - (centerDashCount - 1) / 2) * 90, top, 0);
      centerLineGroup.add(centerDash);
    }
    for (const end of [-1, 1]) {
      const thresholdX = end * (length / 2 - 64);
      for (let index = 0; index < 8; index += 1) {
        const threshold = new THREE.Mesh(new THREE.BoxGeometry(22, 0.018, 2.4), runwayMarkMaterial);
        threshold.position.set(thresholdX, top, (index - 3.5) * (width / 10));
        group.add(threshold);
      }
      for (const side of [-1, 1]) {
        const touchdown = new THREE.Mesh(new THREE.BoxGeometry(32, 0.018, 2), runwayMarkMaterial);
        touchdown.position.set(end * (length / 2 - 210), top, side * (width * 0.27));
        group.add(touchdown);
      }
    }
  };
  addRunwayMarkings(runwayGroup, TAKEOFF_RUNWAY_LENGTH, TAKEOFF_RUNWAY_WIDTH, markGroup);
  scene.add(runwayGroup);

  const playWorld = new THREE.Group();
  playWorld.visible = false;
  playWorld.scale.setScalar(PLAY_WORLD_SCALE);
  scene.add(playWorld);
  const playFog = new THREE.Fog(0xaaa79b, 130 * PLAY_WORLD_SCALE, 1750 * PLAY_WORLD_SCALE);
  const canyonWaypoints = Array.from({ length: 18 }, (_, index) => new THREE.Vector3(
    index * 970,
    0,
    Math.sin(index * Math.PI / 2) * 800
  ));
  const canyonRoute = new THREE.CatmullRomCurve3(canyonWaypoints, false, 'catmullrom', 0.5);
  const canyonLength = canyonRoute.getLength();
  const canyonEndX = canyonWaypoints[canyonWaypoints.length - 1].x;
  const startTangent = canyonRoute.getTangentAt(0);
  const initialHeading = -Math.atan2(startTangent.z, startTangent.x);
  const cloudGeometry = new THREE.SphereGeometry(1, 12, 8);
  const cloudMaterial = new THREE.MeshStandardMaterial({ color: 0xf7fbfd, roughness: 1, transparent: true, opacity: 0.72, depthWrite: false });
  const cloudInstances = new THREE.InstancedMesh(cloudGeometry, cloudMaterial, 80);
  const cloudTransform = new THREE.Object3D();
  for (let cloudIndex = 0; cloudIndex < 16; cloudIndex += 1) {
    const progress = (cloudIndex + 0.5) / 16;
    const point = canyonRoute.getPointAt(progress);
    const tangent = canyonRoute.getTangentAt(progress).setY(0).normalize();
    const side = new THREE.Vector3(-tangent.z, 0, tangent.x);
    const sideSign = cloudIndex % 2 ? 1 : -1;
    const cloudCenter = point.clone().addScaledVector(side, sideSign * (520 + (cloudIndex * 137) % 620));
    const cloudHeight = 145 + (cloudIndex * 59) % 90;
    const cloudScale = 95 + (cloudIndex * 31) % 65;
    for (let puffIndex = 0; puffIndex < 5; puffIndex += 1) {
      cloudTransform.position.set(
        cloudCenter.x + (puffIndex - 2) * cloudScale * 0.55,
        cloudHeight + Math.sin(puffIndex * 2.1) * cloudScale * 0.1,
        cloudCenter.z + Math.cos(puffIndex * 1.7) * cloudScale * 0.16
      );
      cloudTransform.scale.set(cloudScale * (0.72 + (puffIndex % 3) * 0.13), cloudScale * (0.2 + (puffIndex % 2) * 0.07), cloudScale * 0.32);
      cloudTransform.updateMatrix();
      cloudInstances.setMatrixAt(cloudIndex * 5 + puffIndex, cloudTransform.matrix);
    }
  }
  cloudInstances.instanceMatrix.needsUpdate = true;
  playWorld.add(cloudInstances);
  const seaWidth = canyonEndX + 12000;
  const seaDepth = 8000;
  const seaSegmentsX = 260;
  const seaSegmentsZ = 72;
  const seaPositions = new Float32Array((seaSegmentsX + 1) * (seaSegmentsZ + 1) * 3);
  const seaColors = new Float32Array(seaPositions.length);
  const seaIndices = [];
  const deepWaterColor = new THREE.Color(0x405b62);
  const blueWaterColor = new THREE.Color(0x718889);
  const seaFoamColor = new THREE.Color(0xbab9aa);
  const seaColor = new THREE.Color();
  const waveAt = (x, z) => Math.sin(x * 0.011 + z * 0.008) * 0.07
    + Math.sin(z * 0.019 - x * 0.004) * 0.035
    + Math.sin((x + z) * 0.043) * 0.014;
  for (let zIndex = 0; zIndex <= seaSegmentsZ; zIndex += 1) {
    const z = (zIndex / seaSegmentsZ - 0.5) * seaDepth;
    for (let xIndex = 0; xIndex <= seaSegmentsX; xIndex += 1) {
      const x = (xIndex / seaSegmentsX - 0.5) * seaWidth;
      const vertexIndex = zIndex * (seaSegmentsX + 1) + xIndex;
      const offset = vertexIndex * 3;
      const wave = waveAt(x, z);
      seaPositions[offset] = x;
      seaPositions[offset + 1] = -3.05 + wave;
      seaPositions[offset + 2] = z;
      const swell = THREE.MathUtils.clamp(0.38 + wave * 2.8 + Math.sin(x * 0.003 + z * 0.006) * 0.12, 0, 1);
      seaColor.copy(deepWaterColor).lerp(blueWaterColor, swell);
      seaColor.lerp(seaFoamColor, Math.max(0, (wave - 0.045) * 2.2));
      seaColors[offset] = seaColor.r;
      seaColors[offset + 1] = seaColor.g;
      seaColors[offset + 2] = seaColor.b;
      if (xIndex < seaSegmentsX && zIndex < seaSegmentsZ) {
        const nextRow = vertexIndex + seaSegmentsX + 1;
        seaIndices.push(vertexIndex, nextRow, vertexIndex + 1, vertexIndex + 1, nextRow, nextRow + 1);
      }
    }
  }
  const seaGeometry = new THREE.BufferGeometry();
  seaGeometry.setAttribute('position', new THREE.BufferAttribute(seaPositions, 3));
  seaGeometry.setAttribute('color', new THREE.BufferAttribute(seaColors, 3));
  seaGeometry.setIndex(seaIndices);
  seaGeometry.computeVertexNormals();
  const sea = new THREE.Mesh(seaGeometry, new THREE.MeshPhysicalMaterial({
    vertexColors: true,
    roughness: 0.26,
    metalness: 0.12,
    clearcoat: 0.56,
    clearcoatRoughness: 0.2,
    side: THREE.DoubleSide
  }));
  sea.position.x = canyonEndX / 2;
  playWorld.add(sea);
  const seaGlints = new THREE.InstancedMesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ color: 0xf5fcff, transparent: true, opacity: 0.46, depthWrite: false, side: THREE.DoubleSide }),
    280
  );
  const glintTransform = new THREE.Object3D();
  for (let index = 0; index < 280; index += 1) {
    const progress = (index + 0.5) / 280;
    const point = canyonRoute.getPointAt(progress);
    const direction = canyonRoute.getTangentAt(progress).setY(0).normalize();
    const side = new THREE.Vector3(-direction.z, 0, direction.x);
    const seed = Math.sin(index * 127.1 + 19.7) * 43758.5453;
    const random = seed - Math.floor(seed);
    const offset = (random - 0.5) * 3400;
    const x = point.x + side.x * offset;
    const z = point.z + side.z * offset;
    glintTransform.position.set(x, -3.05 + waveAt(x, z) + 0.025, z);
    glintTransform.rotation.set(-Math.PI / 2, 0, (random - 0.5) * 0.7);
    glintTransform.scale.set(5 + random * 20, 0.35 + random * 0.6, 1);
    glintTransform.updateMatrix();
    seaGlints.setMatrixAt(index, glintTransform.matrix);
  }
  seaGlints.instanceMatrix.needsUpdate = true;
  playWorld.add(seaGlints);
  const valleySteps = 360;
  const valleyWidthSteps = 10;
  const valleyRowSize = valleyWidthSteps + 1;
  const valleyPositions = new Float32Array((valleySteps + 1) * valleyRowSize * 3);
  const valleyColors = new Float32Array(valleyPositions.length);
  const valleyIndices = [];
  const riverColor = new THREE.Color(0x788a83);
  const shoreColor = new THREE.Color(0xa99f82);
  const valleyColor = new THREE.Color();
  for (let routeIndex = 0; routeIndex <= valleySteps; routeIndex += 1) {
    const progress = routeIndex / valleySteps;
    const point = canyonRoute.getPointAt(progress);
    const direction = canyonRoute.getTangentAt(progress).setY(0).normalize();
    const side = new THREE.Vector3(-direction.z, 0, direction.x);
    for (let widthIndex = 0; widthIndex <= valleyWidthSteps; widthIndex += 1) {
      const across = widthIndex / valleyWidthSteps * 2 - 1;
      const distance = across * 70;
      const vertexIndex = routeIndex * valleyRowSize + widthIndex;
      const offset = vertexIndex * 3;
      const x = point.x + side.x * distance;
      const z = point.z + side.z * distance;
      valleyPositions[offset] = x;
      valleyPositions[offset + 1] = -2.76 + Math.sin(progress * 164 + across * 3) * 0.018;
      valleyPositions[offset + 2] = z;
      valleyColor.copy(riverColor).lerp(shoreColor, Math.pow(Math.abs(across), 2.4) * 0.72);
      const sediment = 0.94 + 0.06 * Math.sin(progress * 217 + across * 8);
      valleyColors[offset] = valleyColor.r * sediment;
      valleyColors[offset + 1] = valleyColor.g * sediment;
      valleyColors[offset + 2] = valleyColor.b * sediment;
      if (routeIndex < valleySteps && widthIndex < valleyWidthSteps) {
        const nextRow = vertexIndex + valleyRowSize;
        valleyIndices.push(vertexIndex, nextRow, vertexIndex + 1, vertexIndex + 1, nextRow, nextRow + 1);
      }
    }
  }
  const valleyGeometry = new THREE.BufferGeometry();
  valleyGeometry.setAttribute('position', new THREE.BufferAttribute(valleyPositions, 3));
  valleyGeometry.setAttribute('color', new THREE.BufferAttribute(valleyColors, 3));
  valleyGeometry.setIndex(valleyIndices);
  valleyGeometry.computeVertexNormals();
  const valleyFloor = new THREE.Mesh(valleyGeometry, new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.68,
    metalness: 0.06,
    side: THREE.DoubleSide
  }));
  playWorld.add(valleyFloor);
  const landingRunwayProgress = 0.98;
  const landingRunwayPoint = canyonRoute.getPointAt(landingRunwayProgress);
  const runwayTangent = canyonRoute.getTangentAt(landingRunwayProgress);
  const landingRunwayDirection = runwayTangent.clone().setY(0).normalize();
  const landingRunwayCenter = landingRunwayPoint.clone().addScaledVector(landingRunwayDirection, LANDING_RUNWAY_LENGTH / 2);
  const landingRunwayX = landingRunwayCenter.x;
  const landingRunwayZ = landingRunwayCenter.z;
  const landingRunway = new THREE.Mesh(new THREE.BoxGeometry(LANDING_RUNWAY_LENGTH, 0.08, LANDING_RUNWAY_WIDTH), runwayMaterial);
  landingRunway.position.set(landingRunwayX, -2.55, landingRunwayZ);
  landingRunway.rotation.y = Math.atan2(-runwayTangent.z, runwayTangent.x);
  playWorld.add(landingRunway);
  const landingRunwayMarkings = new THREE.Group();
  addRunwayMarkings(landingRunwayMarkings, LANDING_RUNWAY_LENGTH, LANDING_RUNWAY_WIDTH);
  landingRunwayMarkings.position.set(landingRunwayX, 0, landingRunwayZ);
  landingRunwayMarkings.rotation.y = landingRunway.rotation.y;
  playWorld.add(landingRunwayMarkings);
  const mountains = [];
  const ridgeHeightAt = (distance, innerDistance, outerDistance, peakHeight, progress, phase) => {
    if (distance < innerDistance || distance > outerDistance) return 0;
    const across = (distance - innerDistance) / (outerDistance - innerDistance);
    const profile = Math.pow(Math.max(0, Math.sin(across * Math.PI)), 0.72);
    const noise = 0.58 + 0.25 * Math.sin(progress * 73 + phase) + 0.17 * Math.sin(progress * 181 - phase);
    const terrain = 1
      + 0.12 * Math.sin(progress * 193 + across * 17 + phase)
      + 0.06 * Math.sin(progress * 347 - across * 39 + phase * 2)
      + 0.065 * Math.sin(progress * 577 + across * 57 + phase * 2)
      + 0.032 * Math.sin(progress * 1103 - across * 113 + phase * 3);
    return peakHeight * profile * noise * terrain;
  };
  const ridgeMaterials = [0x566a72, 0x687a7e, 0x68786f, 0x818c84].map(() =>
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.97, vertexColors: true, side: THREE.DoubleSide })
  );
  const ridgeBaseColors = [0x4b5153, 0x5b6263, 0x454d50, 0x646b6b].map((color) => new THREE.Color(color));
  const makeRidge = (sideSign, innerDistance, outerDistance, peakHeight, phase, material, baseColor) => {
    const routeSteps = 340;
    const widthSteps = 36;
    const rowSize = widthSteps + 1;
    const vertices = new Float32Array((routeSteps + 1) * rowSize * 3);
    const colors = new Float32Array(vertices.length);
    const uvs = new Float32Array((routeSteps + 1) * rowSize * 2);
    const indices = [];
    const ridgeColor = new THREE.Color();
    const strataColor = new THREE.Color(0xc8d0d1);
    const point = new THREE.Vector3();
    const tangent = new THREE.Vector3();
    const side = new THREE.Vector3();
    for (let routeIndex = 0; routeIndex <= routeSteps; routeIndex += 1) {
      const progress = routeIndex / routeSteps;
      point.copy(canyonRoute.getPointAt(progress));
      tangent.copy(canyonRoute.getTangentAt(progress)).setY(0).normalize();
      side.set(-tangent.z, 0, tangent.x).multiplyScalar(sideSign);
      const peakNoise = 0.58 + 0.25 * Math.sin(progress * 73 + phase) + 0.17 * Math.sin(progress * 181 - phase);
      for (let widthIndex = 0; widthIndex <= widthSteps; widthIndex += 1) {
        const across = widthIndex / widthSteps;
        const ridgeProfile = Math.pow(Math.max(0, Math.sin(across * Math.PI)), 0.72);
        const terrain = 1
          + 0.12 * Math.sin(progress * 193 + across * 17 + phase)
          + 0.06 * Math.sin(progress * 347 - across * 39 + phase * 2)
          + 0.065 * Math.sin(progress * 577 + across * 57 + phase * 2)
          + 0.032 * Math.sin(progress * 1103 - across * 113 + phase * 3);
        const height = peakHeight * ridgeProfile * peakNoise * terrain;
        const distance = innerDistance + (outerDistance - innerDistance) * across;
        const vertexIndex = (routeIndex * rowSize + widthIndex) * 3;
        vertices[vertexIndex] = point.x + side.x * distance;
        vertices[vertexIndex + 1] = -3.1 + height;
        vertices[vertexIndex + 2] = point.z + side.z * distance;
        const elevation = THREE.MathUtils.clamp(height / peakHeight, 0, 1);
        const strata = Math.sin(height * 0.12 + progress * 32 + phase) * 0.09;
        ridgeColor.copy(baseColor).lerp(strataColor, 0.14 + elevation * 0.68);
        ridgeColor.multiplyScalar(0.78 + strata + 0.04 * Math.sin(progress * 49 + across * 31 + phase));
        colors[vertexIndex] = ridgeColor.r;
        colors[vertexIndex + 1] = ridgeColor.g;
        colors[vertexIndex + 2] = ridgeColor.b;
        const uvIndex = (routeIndex * rowSize + widthIndex) * 2;
        uvs[uvIndex] = progress * 12;
        uvs[uvIndex + 1] = across * 4;
      }
    }
    for (let routeIndex = 0; routeIndex < routeSteps; routeIndex += 1) {
      for (let widthIndex = 0; widthIndex < widthSteps; widthIndex += 1) {
        const a = routeIndex * rowSize + widthIndex;
        const b = a + rowSize;
        indices.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    playWorld.add(new THREE.Mesh(geometry, material));
  };

  makeRidge(-1, 105, 520, 250, 0.2, ridgeMaterials[0], ridgeBaseColors[0]);
  makeRidge(1, 105, 520, 250, 1.7, ridgeMaterials[1], ridgeBaseColors[1]);
  makeRidge(-1, 560, 1450, 480, 2.6, ridgeMaterials[2], ridgeBaseColors[2]);
  makeRidge(1, 560, 1450, 480, 4.1, ridgeMaterials[3], ridgeBaseColors[3]);
  const makePeakGeometry = (radius, height, seed) => {
    const segments = 32;
    const profile = [
      [0, 0.86], [0.12, 1], [0.28, 0.87], [0.46, 0.69],
      [0.63, 0.68], [0.78, 0.64], [0.9, 0.6], [0.97, 0.57], [1, 0.54]
    ];
    const vertices = [];
    const uvs = [];
    const indices = [];
    for (let ringIndex = 0; ringIndex < profile.length; ringIndex += 1) {
      const [heightRatio, radiusRatio] = profile[ringIndex];
      for (let segment = 0; segment < segments; segment += 1) {
        const angle = segment / segments * Math.PI * 2;
        const lobes = 1 + 0.11 * Math.sin(angle * 3 + seed) + 0.045 * Math.sin(angle * 5 - seed);
        const rimNoise = 1 + 0.035 * Math.sin(angle * 4 + seed + heightRatio * 8);
        const ringRadius = radius * radiusRatio * lobes * rimNoise;
        const crownLift = Math.sin(angle * 3 + seed) * height * 0.014 * Math.sin(heightRatio * Math.PI);
        vertices.push(
          Math.cos(angle) * ringRadius,
          (heightRatio - 0.5) * height + crownLift,
          Math.sin(angle) * ringRadius
        );
        uvs.push(segment / segments * 4, heightRatio * 3);
      }
    }
    const crownIndex = vertices.length / 3;
    vertices.push(0, height * 0.5, 0);
    uvs.push(0.5, 3);
    for (let ringIndex = 0; ringIndex < profile.length - 1; ringIndex += 1) {
      for (let segment = 0; segment < segments; segment += 1) {
        const current = ringIndex * segments + segment;
        const nextSegment = ringIndex * segments + (segment + 1) % segments;
        const upper = current + segments;
        const upperNext = nextSegment + segments;
        indices.push(current, upper, nextSegment, nextSegment, upper, upperNext);
      }
    }
    const topRing = (profile.length - 1) * segments;
    for (let segment = 0; segment < segments; segment += 1) {
      indices.push(topRing + segment, crownIndex, topRing + (segment + 1) % segments);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    return geometry;
  };
  const summitMaterials = [0x9a8e78, 0xb0a18a, 0x897c68].map((color) =>
    new THREE.MeshStandardMaterial({ color, roughness: 1 })
  );
  const summitBatchSize = Math.ceil(260 / summitMaterials.length);
  const summitInstances = summitMaterials.map((material, index) => {
    const mesh = new THREE.InstancedMesh(makePeakGeometry(1, 1, index * 1.9), material, summitBatchSize);
    mesh.count = 0;
    playWorld.add(mesh);
    return mesh;
  });
  const summitInstanceCounts = summitMaterials.map(() => 0);
  const summitTransform = new THREE.Object3D();
  for (let summitIndex = 0; summitIndex < 260; summitIndex += 1) {
    const progress = (summitIndex + 0.5) / 260;
    const point = canyonRoute.getPointAt(progress);
    const tangent = canyonRoute.getTangentAt(progress).setY(0).normalize();
    const side = new THREE.Vector3(-tangent.z, 0, tangent.x);
    const sideSign = summitIndex % 2 ? 1 : -1;
    const outer = summitIndex % 5 === 0;
    const radius = (outer ? 100 : 85) + (summitIndex * 47) % (outer ? 110 : 95);
    const height = Math.min(
      (outer ? 280 : 175) + (summitIndex * 71) % (outer ? 300 : 170),
      radius * (outer ? 1.6 : 1.45)
    );
    const centerDistance = (outer ? 880 : 260) + radius * 0.35;
    const summitPosition = point.clone().addScaledVector(side, sideSign * centerDistance);
    const materialIndex = summitIndex % summitMaterials.length;
    const instanceIndex = summitInstanceCounts[materialIndex];
    summitTransform.position.set(summitPosition.x, -3 + height / 2, summitPosition.z);
    summitTransform.rotation.set(0, summitIndex * 0.63, 0);
    summitTransform.scale.set(radius, height, radius);
    summitTransform.updateMatrix();
    summitInstances[materialIndex].setMatrixAt(instanceIndex, summitTransform.matrix);
    summitInstanceCounts[materialIndex] += 1;
    summitInstances[materialIndex].count = summitInstanceCounts[materialIndex];
    mountains.push({ x: summitPosition.x, z: summitPosition.z, r: radius, h: height * 1.03, roundedCrown: true });
  }
  for (const mesh of summitInstances) mesh.instanceMatrix.needsUpdate = true;

  const summitGateProgress = 0.49;
  const summitGatePoint = canyonRoute.getPointAt(summitGateProgress);
  const hilltopHeight = 320;
  const hilltopRadius = 550;
  const hilltop = new THREE.Mesh(
    makePeakGeometry(hilltopRadius, hilltopHeight, 2.4),
    new THREE.MeshStandardMaterial({ color: 0xa79d83, roughness: 1 })
  );
  hilltop.position.set(summitGatePoint.x, -3 + hilltopHeight / 2, summitGatePoint.z);
  playWorld.add(hilltop);
  mountains.push({ x: summitGatePoint.x, z: summitGatePoint.z, r: hilltopRadius, h: hilltopHeight, roundedCrown: true });

  const gateCourse = new THREE.Group();
  playWorld.add(gateCourse);
  const gateHeights = [60, 65, 100, 135, 150, 110, 220, 360, 210, 135, 65, 45, 80, 125, 160, 100];
  const gateProgresses = [1, 2, 3, 4, 5, 6].map((waypoint) => waypoint / (canyonWaypoints.length - 1));
  const requestedSummitGateSpacing = 0.5;
  const previousGateProgress = gateProgresses[gateProgresses.length - 1];
  const nextGateProgress = 10 / 17;
  const minimumGateGap = 0.02;
  const maximumSummitGateSpacing = Math.max(
    0,
    Math.min(summitGateProgress - previousGateProgress, nextGateProgress - summitGateProgress) - minimumGateGap
  );
  const summitGateSpacing = Math.min(requestedSummitGateSpacing, maximumSummitGateSpacing);
  gateProgresses.push(summitGateProgress - summitGateSpacing, summitGateProgress, summitGateProgress + summitGateSpacing);
  gateProgresses.push(10 / 17, 11 / 17, 12 / 17, 13 / 17, 14 / 17, 0.85, 0.88);
  const gateRoute = gateHeights.map((y, index) => {
    const progress = gateProgresses[index];
    const point = canyonRoute.getPointAt(progress);
    const direction = canyonRoute.getTangentAt(progress).setY(0).normalize();
    return { x: point.x, y, z: point.z, direction };
  });
  const finishGateProgress = landingRunwayProgress;
  const finishGatePoint = canyonRoute.getPointAt(finishGateProgress);
  const finishGateDirection = canyonRoute.getTangentAt(finishGateProgress).setY(0).normalize();
  gateRoute.push({
    x: finishGatePoint.x,
    y: 0,
    z: finishGatePoint.z,
    direction: finishGateDirection,
    finish: true
  });
  const gates = [];
  const outerGateMaterial = new THREE.MeshBasicMaterial({ color: 0xffad42, transparent: true, opacity: 0.98, depthWrite: false, toneMapped: false, fog: false });
  const innerGateMaterial = new THREE.MeshBasicMaterial({ color: 0xfff1c4, transparent: true, opacity: 1, depthWrite: false, toneMapped: false, fog: false });
  const gateNormalAxis = new THREE.Vector3(0, 0, 1);
  for (let index = 0; index < gateRoute.length; index += 1) {
    const routePoint = gateRoute[index];
    const direction = routePoint.direction;
    const group = new THREE.Group();
    group.position.set(routePoint.x, routePoint.y, routePoint.z);
    group.quaternion.setFromUnitVectors(gateNormalAxis, direction);
    const finish = Boolean(routePoint.finish);
    const ringRadius = finish ? LANDING_RUNWAY_WIDTH / 2 - 0.72 : 12.5;
    const outerRing = new THREE.Mesh(new THREE.TorusGeometry(ringRadius, 0.72, 10, 56), outerGateMaterial.clone());
    const innerRing = new THREE.Mesh(new THREE.TorusGeometry(finish ? ringRadius - 0.7 : 11.8, 0.14, 8, 56), innerGateMaterial.clone());
    group.add(outerRing, innerRing);
    gateCourse.add(group);
    gates.push({ position: group.position, direction, radius: finish ? LANDING_RUNWAY_WIDTH / 2 : 15, scored: false, missed: false, finish });
  }

  const raceHud = document.createElement('div');
  raceHud.className = 'race-hud';
  raceHud.setAttribute('role', 'status');
  raceHud.setAttribute('aria-live', 'polite');
  raceHud.innerHTML = '<div class="race-hud-stat"><span class="race-hud-label">GATES</span><strong><span id="race-gate-count">00</span><span class="race-hud-total"> / 17</span></strong></div><div class="race-hud-stat"><span class="race-missed-label">未通過</span><strong class="race-missed-count" id="race-gate-missed">00</strong></div><span class="race-timer-label">TIME</span><strong class="race-timer" id="race-timer">00:00.00</strong>';
  const speedStreakOverlay = document.createElement('div');
  speedStreakOverlay.className = 'speed-streak-overlay';
  speedStreakOverlay.setAttribute('aria-hidden', 'true');
  const playFlightHud = document.createElement('aside');
  playFlightHud.className = 'play-flight-hud';
  playFlightHud.hidden = true;
  playFlightHud.setAttribute('aria-label', '即時飛行儀表');
  playFlightHud.innerHTML = '<span class="play-flight-hud-title">FLIGHT DATA</span><div><span>高度</span><strong data-play-value="altitude">0</strong><small>ft</small></div><div><span>空速</span><strong data-play-value="speed">0</strong><small>kt</small></div><div><span>航向</span><strong data-play-value="heading">000</strong><small>°</small></div><div><span>俯仰</span><strong data-play-value="pitch">0</strong><small>°</small></div><div><span>坡度</span><strong data-play-value="bank">0</strong><small>°</small></div><span class="play-assist-badge" hidden>簡易輔助</span>';
  const cockpitToggle = document.createElement('button');
  cockpitToggle.className = 'cockpit-toggle';
  cockpitToggle.type = 'button';
  cockpitToggle.hidden = true;
  cockpitToggle.setAttribute('aria-pressed', 'false');
  cockpitToggle.textContent = '駕駛艙視角';
  const crashOverlay = document.createElement('aside');
  crashOverlay.className = 'crash-overlay';
  crashOverlay.hidden = true;
  crashOverlay.setAttribute('role', 'alertdialog');
  crashOverlay.setAttribute('aria-label', '飛行中止');
  crashOverlay.innerHTML = '<div class="crash-dialog"><span class="crash-kicker">FLIGHT ENDED</span><strong id="crash-reason">飛行碰撞</strong><small>修正姿態與航線後再試一次</small><button type="button" id="crash-restart">立即重來</button></div>';
  container.append(raceHud, speedStreakOverlay, playFlightHud, cockpitToggle, crashOverlay);
  const raceGateCount = raceHud.querySelector('#race-gate-count');
  const crashReasonLabel = crashOverlay.querySelector('#crash-reason');

  const aircraftRoot = new THREE.Group();
  const slatBaseOrientation = new THREE.Quaternion();
  const slatPitchOrientation = new THREE.Quaternion();
  const aircraftModel = new THREE.Group();
  const instructionAircraftModel = new THREE.Group();
  const playAircraftModel = new THREE.Group();
  instructionAircraftModel.visible = true;
  playAircraftModel.visible = false;
  aircraftModel.add(instructionAircraftModel, playAircraftModel);
  aircraftRoot.add(aircraftModel);
  const playExhaustGroup = new THREE.Group();
  playExhaustGroup.visible = false;
  playAircraftModel.add(playExhaustGroup);
  const playExhaustFlames = [];
  const instructionControlSurfaces = { ailerons: [], rudders: [], inboardFlapsLeft: [], inboardFlapsRight: [], outboardFlaps: [], slats: [], spoilers: [], reversers: [], gear: [] };
  const instructionControls = { pitch: 0, roll: 0, rudder: 0, spoilers: 0, reverser: 0 };
  const instructionSurfacePosition = { aileron: 0, rudder: 0, inboardFlapLeft: 0, inboardFlapRight: 0, outboardFlap: 0, slat: 0, spoiler: 0, reverser: 0, gear: 0, elevator: 0 };
  const instructionElevatorUniforms = [];
  const instructionRudderUniforms = [];
  const aircraftProfiles = { instruction: null, play: null };
  const aircraftLoadsStarted = new Set();
  const playCockpitPosition = new THREE.Vector3();
  const playCockpitCameraPosition = new THREE.Vector3();
  const playCockpitForward = new THREE.Vector3(1, 0, 0);
  const playCockpitOccluders = [];
  let playCockpitPositionFound = false;
  scene.add(aircraftRoot);
  const turnPathGroup = new THREE.Group();
  const turnPath = new THREE.Mesh(
    new THREE.BufferGeometry(),
    new THREE.MeshBasicMaterial({ color: 0xffbd83, depthTest: false, depthWrite: false })
  );
  turnPath.frustumCulled = false;
  turnPath.visible = false;
  turnPath.renderOrder = 5;
  turnPathGroup.add(turnPath);
  turnPathGroup.visible = false;
  scene.add(turnPathGroup);
  const wingFlowGroup = new THREE.Group();
  aircraftRoot.add(wingFlowGroup);
  const wingFlowFocusLocal = new THREE.Vector3();
  let wingFlowFocusReady = false;
  const wingFlowSideGroups = new Map([
    [-1, new THREE.Group()],
    [1, new THREE.Group()]
  ]);
  for (const [side, group] of wingFlowSideGroups) {
    group.visible = side === -1;
    wingFlowGroup.add(group);
  }
  let wingFlowVisibleSide = -1;
  const wingFlowCameraLocalPosition = new THREE.Vector3();
  const slatFlowGroup = new THREE.Group();
  slatFlowGroup.visible = false;
  aircraftRoot.add(slatFlowGroup);
  const slatFlowStages = [new THREE.Group(), new THREE.Group()];
  const slatFlowParticles = [];
  slatFlowStages.forEach((group) => slatFlowGroup.add(group));
  const angleRoot = new THREE.Group();
  angleRoot.visible = false;
  scene.add(angleRoot);
  const stallAircraftPivot = new THREE.Group();
  stallAircraftPivot.position.set(0, -0.5, 0);
  angleRoot.add(stallAircraftPivot);
  const cruiseRoot = new THREE.Group();
  cruiseRoot.visible = false;
  scene.add(cruiseRoot);
  const cruiseForceArrows = [];
  const cruiseForceDefinitions = [
    { direction: [0, 1, 0], origin: [0, 0, 0], length: 7, color: 0xc6f4ff },
    { direction: [0, -1, 0], origin: [0, 0, 0], length: 7, color: 0xe4edf1 },
    { direction: [1, 0, 0], origin: [-30, 0, 0], length: 10, color: 0xb9e8d2 },
    { direction: [-1, 0, 0], origin: [30, 0, 0], length: 10, color: 0x9fcbd8 }
  ];
  for (const force of cruiseForceDefinitions) {
    const arrow = new THREE.ArrowHelper(new THREE.Vector3(...force.direction), new THREE.Vector3(...force.origin), force.length, force.color, 0.85, 0.52);
    cruiseRoot.add(arrow);
    cruiseForceArrows.push(arrow);
  }
  const angleDiagramGroup = new THREE.Group();
  angleDiagramGroup.position.y = 3.4;
  angleRoot.add(angleDiagramGroup);
  const angleWing = new THREE.Group();
  angleDiagramGroup.add(angleWing);
  const angleFlowGroup = new THREE.Group();
  angleDiagramGroup.add(angleFlowGroup);
  const angleFlowLines = [];
  const angleFlowMaterials = [];
  const angleLiftArrow = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1.05, 2.05), 1, 0xffd0ab, 0.35, 0.2);
  angleDiagramGroup.add(angleLiftArrow);
  const angleWindArrow = new THREE.ArrowHelper(new THREE.Vector3(-1, 0, 0), new THREE.Vector3(5.5, -1.85, 2.05), 2.1, 0xc6f4ff, 0.38, 0.22);
  angleDiagramGroup.add(angleWindArrow);
  const angleArc = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xffd0ab }));
  angleDiagramGroup.add(angleArc);

  const engineRoot = new THREE.Group();
  engineRoot.visible = false;
  scene.add(engineRoot);
  const downloadedEngineRoot = new THREE.Group();
  downloadedEngineRoot.visible = false;
  engineRoot.add(downloadedEngineRoot);
  const engineFlowGroup = new THREE.Group();
  engineRoot.add(engineFlowGroup);
  const engineRotorPivots = [];
  const downloadedEngineRotors = [];
  const downloadedEngineBladeRotors = [];
  const downloadedEngineRotationArrows = [];
  const downloadedEngineFlames = [];
  const downloadedEngineExhaust = [];
  const downloadedEngineFlowArrows = [];
  const downloadedEngineAirParticles = [];
  let downloadedEngineAirflowGroup = null;
  let engineAirflowEnabled = false;
  const airflowTemperatureStops = [
    [0, new THREE.Color(0x44caff)],
    [0.32, new THREE.Color(0x67e2d1)],
    [0.47, new THREE.Color(0xffdc55)],
    [0.58, new THREE.Color(0xff8d30)],
    [0.78, new THREE.Color(0xff4323)],
    [1, new THREE.Color(0xffa342)]
  ];
  const airflowTemperatureColor = (progress, target = new THREE.Color()) => {
    for (let index = 1; index < airflowTemperatureStops.length; index += 1) {
      const [end, endColor] = airflowTemperatureStops[index];
      if (progress <= end) {
        const [start, startColor] = airflowTemperatureStops[index - 1];
        return target.copy(startColor).lerp(endColor, (progress - start) / (end - start));
      }
    }
    return target.copy(airflowTemperatureStops[airflowTemperatureStops.length - 1][1]);
  };
  const flowParticles = [];
  const flameMeshes = [];
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(`${import.meta.env.BASE_URL}draco/`);
  dracoLoader.preload();
  loader.setDRACOLoader(dracoLoader);

  let activeView = 'idle';
  let activeMode = 'instruction';
  let cockpitView = false;
  let throttle = 62;
  let bank = 0;
  let altitude = 3200;
  let aircraftLength = 38;
  let aircraftHalfLength = 6.65;
  let aircraftHalfWidth = 4.2;
  let aircraftHalfHeight = 2.1;
  let aircraftCollisionRadius = Math.hypot(aircraftHalfLength, aircraftHalfWidth);
  let aircraftGroundY = -2.68;
  let playGroundOffset = -2.68;
  let instructionFlapSetting = 0;
  let slatLessonDeployment = 0;
  let slatLessonPhase = 0;
  let elevatorLessonDeflection = 0;
  let instructionGearTarget = 0;
  let instructionVerticalOffset = 0;
  let instructionVerticalSpeed = 0;
  let instructionRollRate = 0;
  let instructionPitchRate = 0;
  let instructionBankAngle = 0;
  let instructionPitchAngle = 0;
  let instructionLiftRatio = 0;
  let instructionDrag = 0;
  let instructionSideslip = 0;
  let instructionGroundSpeed = 1;
  let instructionWheelSpinAngle = 0;
  let instructionMainGearSupportX = null;
  let instructionNoseGearSupportX = null;
  let instructionGearContactY = 0;
  const instructionWheelSpinAxis = new THREE.Vector3(1, 0, 0);
  const instructionWheelSpinOrientation = new THREE.Quaternion();
  let takeoffProgress = 0;
  let landingProgress = 0;
  let cruiseProgress = 0;
  let landingTargetX = 0;
  let taxiDistance = 0;
  let playX = 0;
  let playY = 0;
  let playZ = 0;
  let playSpeed = 0;
  let playHeading = 0;
  let playPitch = 0;
  let playRoll = 0;
  let nextGateIndex = 0;
  let gatesPassed = 0;
  let missedGates = 0;
  let raceStartedAt = null;
  let raceElapsed = 0;
  let raceFinished = false;
  let playCrashed = false;
  let playDifficulty = 'standard';
  let playbackRate = 1;
  let lessonPlaybackPaused = false;
  let crashTime = 0;
  let playLanded = false;
  let landingAutopilot = false;
  let engineZoomProgress = 0;
  let downloadedEngineLoaded = false;
  let downloadedEngineRequested = false;
  let downloadedEngineStartTime = 0;
  let engineOrbitYaw = 0;
  let engineOrbitPitch = 0;
  let engineOrbitZoom = 1;
  let enginePointer = null;
  let wingOrbitYaw = 0;
  let wingOrbitPitch = 0;
  let wingPointer = null;
  let lessonPointer = null;
  let lessonOrbitYaw = 0;
  let lessonOrbitPitch = 0;
  let slatLessonPitch = 0;
  let finalGateAutopilot = false;
  let finalGateAutopilotElapsed = 0;
  const finalGateStart = new THREE.Vector3();
  const finalGateApproach = new THREE.Vector3();
  const finalGateExit = new THREE.Vector3();
  let angleOfAttack = 4;
  let stallMix = 0;
  let landingUpdateCallback = null;
  let cruiseUpdateCallback = null;
  let turnUpdateCallback = null;
  let turnBankAngle = 18;
  let turnDirection = 1;
  let turnHeading = 0;
  let turnStartHeading = 0;
  let turnPathRadius = 8;
  let turnElapsed = 0;
  let turnStepMode = false;
  let turnStepLimit = Infinity;
  let turnPaused = false;
  let engineLoaded = false;
  let planeLoaded = false;
  let disposed = false;
  const planeCenter = new THREE.Vector3(0, 3.2, 0);
  const desiredCameraPosition = new THREE.Vector3(0, 10, 55);
  const desiredLookAt = new THREE.Vector3(0, 3, 0);
  const currentLookAt = desiredLookAt.clone();
  const elevatorFocusLocal = new THREE.Vector3();
  const elevatorCameraOffset = new THREE.Vector3();
  const instructionElevatorFocus = new THREE.Vector3(0, 3, 0);
  let instructionElevatorLength = 38;
  const slatLessonFocus = new THREE.Vector3(0, 3, 0);
  const slatFocusWorld = new THREE.Vector3();
  const slatCameraFocus = new THREE.Vector3();
  const slatCameraOffset = new THREE.Vector3();
  const slatCameraPan = new THREE.Vector2();
  const wingCameraOffset = new THREE.Vector3();
  const lessonCameraOffset = new THREE.Vector3();
  const lessonCameraSpherical = new THREE.Spherical();
  const cameraLocalOffset = new THREE.Vector3(-52, 15, 0);
  const cameraLookOffset = new THREE.Vector3(24, 3, 0);
  const cameraUpTarget = new THREE.Vector3(0, 1, 0);
  const aircraftUp = new THREE.Vector3(0, 1, 0);
  const aircraftWorldQuaternion = new THREE.Quaternion();
  const yawOrientation = new THREE.Quaternion();
  const pitchOrientation = new THREE.Quaternion();
  const rollOrientation = new THREE.Quaternion();
  const instructionOrientation = new THREE.Quaternion();
  const worldVerticalAxis = new THREE.Vector3(0, 1, 0);
  const localPitchAxis = new THREE.Vector3(0, 0, 1);
  const localRollAxis = new THREE.Vector3(1, 0, 0);
  const previousAircraftPosition = new THREE.Vector3();
  const gateCrossingPoint = new THREE.Vector3();
  const gateOffset = new THREE.Vector3();
  const gateRight = new THREE.Vector3();
  const landingOffset = new THREE.Vector3();
  const cruiseStartPosition = new THREE.Vector3();
  const cruiseTargetPosition = new THREE.Vector3();
  const cruiseStartQuaternion = new THREE.Quaternion();
  const cruiseTargetQuaternion = new THREE.Quaternion();
  const turnStartPosition = new THREE.Vector3();
  const turnCenter = new THREE.Vector3();
  const landingStartPosition = new THREE.Vector3();
  const landingStartRotation = new THREE.Euler();
  const landingRunwaySide = new THREE.Vector3(-runwayTangent.z, 0, runwayTangent.x).normalize();
  const flowCutPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0);

  const cfm56 = buildEngine();
  for (const module of cfm56.modules) {
    module.position.set(0, 0, 0);
  }
  const engineBounds = new THREE.Box3().setFromObject(cfm56.root);
  const engineCenter = engineBounds.getCenter(new THREE.Vector3());
  cfm56.root.position.sub(engineCenter);
  engineRoot.add(cfm56.root);
  engineFlowGroup.position.x = -engineCenter.x;
  engineRoot.rotation.y = Math.PI;
  engineRoot.scale.setScalar(0.5);
  for (const rotor of cfm56.n1Rotors) engineRotorPivots.push({ group: rotor, spin: 4.3 });
  for (const rotor of cfm56.n2Rotors) engineRotorPivots.push({ group: rotor, spin: -6.7 });
  for (const material of getAllMaterials()) {
    material.clippingPlanes = [flowCutPlane];
    material.clipShadows = false;
    material.needsUpdate = true;
  }
  createEngineAirflow();
  createAngleDemo();
  setAngleOfAttack(angleOfAttack);
  engineLoaded = true;

  function loadDownloadedEngine() {
    if (downloadedEngineRequested) return;
    downloadedEngineRequested = true;
    loader.load(`${import.meta.env.BASE_URL}models/turbofan-cutaway.glb`, ({ scene: model }) => {
      const modelRoot = new THREE.Group();
      const modelOrientation = new THREE.Group();
      modelOrientation.add(model);
      modelRoot.add(modelOrientation);
      const rawBounds = new THREE.Box3().setFromObject(modelRoot);
      const rawSize = rawBounds.getSize(new THREE.Vector3());
      if (rawSize.y >= rawSize.x && rawSize.y >= rawSize.z) modelOrientation.rotation.z = -Math.PI / 2;
      else if (rawSize.z > rawSize.x && rawSize.z >= rawSize.y) modelOrientation.rotation.y = Math.PI / 2;
      modelRoot.updateMatrixWorld(true);
      const materialFinish = {
        Steel: { color: 0xa2afb8, metalness: 0.38, roughness: 0.42 },
        Aluminum: { color: 0xd2dce2, metalness: 0.64, roughness: 0.3 },
        'Black Steel': { color: 0x59636d, metalness: 0.52, roughness: 0.38 },
        White: { color: 0xe4edf2, metalness: 0.18, roughness: 0.48 },
        Brass: { color: 0xc28a42, metalness: 0.84, roughness: 0.27 }
      };
      const cutawayNormal = new THREE.Vector3(0, 0, 1).applyQuaternion(engineRoot.quaternion).normalize();
      const cutawayPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(cutawayNormal, engineRoot.position);
      const upperWindowPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(
        new THREE.Vector3(0, 1, 0),
        engineRoot.position.clone().add(new THREE.Vector3(0, 0.48, 0))
      );
      const lowerWindowPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(
        new THREE.Vector3(0, -1, 0),
        engineRoot.position.clone().add(new THREE.Vector3(0, -0.48, 0))
      );
      model.traverse((object) => {
        if (!object.isMesh) return;
        if (/^(Compressor_case|Turbine_case)$/i.test(object.name)) {
          const casingGeometry = object.geometry.clone();
          casingGeometry.computeBoundingBox();
          const casingCenter = casingGeometry.boundingBox.getCenter(new THREE.Vector3());
          const casingPosition = casingGeometry.attributes.position;
          const casingNormal = casingGeometry.attributes.normal;
          const radialScale = object.name === 'Compressor_case' ? 2.05 : 1.1;
          for (let index = 0; index < casingPosition.count; index += 1) {
            casingPosition.setXY(
              index,
              casingCenter.x + (casingPosition.getX(index) - casingCenter.x) * radialScale,
              casingCenter.y + (casingPosition.getY(index) - casingCenter.y) * radialScale
            );
            if (casingNormal) {
              const normal = new THREE.Vector3(
                casingNormal.getX(index) / radialScale,
                casingNormal.getY(index) / radialScale,
                casingNormal.getZ(index)
              ).normalize();
              casingNormal.setXYZ(index, normal.x, normal.y, normal.z);
            }
          }
          casingPosition.needsUpdate = true;
          if (casingNormal) casingNormal.needsUpdate = true;
          casingGeometry.computeBoundingBox();
          casingGeometry.computeBoundingSphere();
          object.geometry = casingGeometry;
        }
        const isCasing = /^(Nacelle|Compressor_case|Combustor_case|Turbine_case)$/i.test(object.name);
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        for (const material of materials) {
          if (isCasing) {
            material.clippingPlanes = object.name === 'Nacelle'
              ? [cutawayPlane, upperWindowPlane, lowerWindowPlane]
              : [cutawayPlane];
            material.clipIntersection = object.name === 'Nacelle';
            material.clipShadows = false;
            material.needsUpdate = true;
          }
          const finish = materialFinish[material.name];
          if (!finish) continue;
          material.color.setHex(finish.color);
          material.metalness = finish.metalness;
          material.roughness = finish.roughness;
          material.needsUpdate = true;
        }
      });
      const bounds = new THREE.Box3().setFromObject(modelRoot);
      const size = bounds.getSize(new THREE.Vector3());
      const scale = 10 / Math.max(size.x, size.y, size.z);
      modelRoot.scale.set(-scale, scale, scale);
      modelRoot.position.copy(bounds.getCenter(new THREE.Vector3())).multiply(new THREE.Vector3(scale, -scale, -scale));
      const getAlternatingBladeLayout = (geometry, bladeCount) => {
        const position = geometry.getAttribute('position');
        const index = geometry.getIndex();
        if (!position || !index || index.count % 3 !== 0) return null;

        const parents = Uint32Array.from({ length: position.count }, (_, vertex) => vertex);
        const findRoot = (vertex) => {
          while (parents[vertex] !== vertex) {
            parents[vertex] = parents[parents[vertex]];
            vertex = parents[vertex];
          }
          return vertex;
        };
        const join = (first, second) => {
          const firstRoot = findRoot(first);
          const secondRoot = findRoot(second);
          if (firstRoot !== secondRoot) parents[secondRoot] = firstRoot;
        };

        for (let triangle = 0; triangle < index.count; triangle += 3) {
          const first = index.getX(triangle);
          join(first, index.getX(triangle + 1));
          join(first, index.getX(triangle + 2));
        }

        const components = new Map();
        for (let triangle = 0; triangle < index.count; triangle += 3) {
          const first = index.getX(triangle);
          const root = findRoot(first);
          if (!components.has(root)) components.set(root, { indices: [], vertices: new Set() });
          const component = components.get(root);
          for (let corner = 0; corner < 3; corner += 1) {
            const vertex = index.getX(triangle + corner);
            component.indices.push(vertex);
            component.vertices.add(vertex);
          }
        }

        geometry.computeBoundingBox();
        const center = geometry.boundingBox.getCenter(new THREE.Vector3());
        const spacing = Math.PI * 2 / bladeCount;
        const bladeComponents = [];
        const hubIndices = [];
        for (const component of components.values()) {
          if (component.indices.length / 3 >= 100) {
            hubIndices.push(...component.indices);
            continue;
          }
          let x = 0;
          let y = 0;
          for (const vertex of component.vertices) {
            x += position.getX(vertex);
            y += position.getY(vertex);
          }
          const angle = (Math.atan2(
            y / component.vertices.size - center.y,
            x / component.vertices.size - center.x
          ) + Math.PI * 2) % (Math.PI * 2);
          bladeComponents.push({ ...component, angle });
        }

        if (!bladeComponents.length || bladeComponents.length % bladeCount !== 0) return null;
        const phases = bladeComponents
          .map(({ angle }) => ((angle % spacing) + spacing) % spacing)
          .sort((first, second) => first - second);
        let largestGap = -1;
        let boundary = 0;
        for (let phase = 0; phase < phases.length; phase += 1) {
          const next = phase === phases.length - 1 ? phases[0] + spacing : phases[phase + 1];
          const gap = next - phases[phase];
          if (gap > largestGap) {
            largestGap = gap;
            boundary = (phases[phase] + gap / 2) % spacing;
          }
        }
        const reference = (boundary + spacing / 2) % spacing;
        const blades = Array.from({ length: bladeCount }, () => []);
        const bladeComponentCounts = Array(bladeCount).fill(0);
        for (const component of bladeComponents) {
          const blade = ((Math.round((component.angle - reference) / spacing) % bladeCount) + bladeCount) % bladeCount;
          blades[blade].push(...component.indices);
          bladeComponentCounts[blade] += 1;
        }
        const componentsPerBlade = bladeComponents.length / bladeCount;
        if (bladeComponentCounts.some((count) => count !== componentsPerBlade)) return null;
        return { center, hubIndices, blades };
      };
      const extractGeometry = (source, indices) => {
        const geometry = new THREE.BufferGeometry();
        for (const [name, attribute] of Object.entries(source.attributes)) {
          const values = new attribute.array.constructor(indices.length * attribute.itemSize);
          const stride = attribute.isInterleavedBufferAttribute ? attribute.data.stride : attribute.itemSize;
          const offset = attribute.isInterleavedBufferAttribute ? attribute.offset : 0;
          for (let vertex = 0; vertex < indices.length; vertex += 1) {
            const sourceOffset = indices[vertex] * stride + offset;
            const targetOffset = vertex * attribute.itemSize;
            values.set(attribute.array.subarray(sourceOffset, sourceOffset + attribute.itemSize), targetOffset);
          }
          geometry.setAttribute(name, new THREE.BufferAttribute(values, attribute.itemSize, attribute.normalized));
        }
        geometry.computeBoundingBox();
        geometry.computeBoundingSphere();
        return geometry;
      };
      const addAlternatingRotorStage = (rotor, layout, spin, scale, materials, parent, axialOffset = 0) => {
        const stage = new THREE.Group();
        stage.position.copy(rotor.position).add(
          layout.center.clone().multiply(rotor.scale).applyEuler(rotor.rotation)
        );
        stage.position.z += axialOffset;
        stage.scale.set(scale, scale, 1);
        stage.visible = rotor.visible;
        parent.add(stage);

        const addMesh = (indices, target) => {
          const mesh = new THREE.Mesh(extractGeometry(rotor.geometry, indices), materials);
          mesh.position.copy(layout.center).negate();
          mesh.rotation.copy(rotor.rotation);
          mesh.scale.copy(rotor.scale);
          mesh.castShadow = rotor.castShadow;
          mesh.receiveShadow = rotor.receiveShadow;
          target.add(mesh);
        };
        if (layout.hubIndices.length) addMesh(layout.hubIndices, stage);
        for (let blade = 0; blade < layout.blades.length; blade += 1) {
          const pivot = new THREE.Group();
          stage.add(pivot);
          addMesh(layout.blades[blade], pivot);
          if (blade % 2 === 0) downloadedEngineBladeRotors.push({ group: pivot, spin });
        }
        return stage;
      };
      const addRotorStage = (name, spin, scale = 1, tint = 0x9ebad7) => {
        const rotor = model.getObjectByName(name);
        if (!rotor?.isMesh) return;

        rotor.geometry.computeBoundingBox();
        const center = rotor.geometry.boundingBox.getCenter(new THREE.Vector3());
        const hot = /turbine/i.test(name);
        const heat = /High_pressure/i.test(name) ? 0.42 : hot ? 0.2 : 0;
        const materials = (Array.isArray(rotor.material) ? rotor.material : [rotor.material])
          .map((material) => {
            const clone = material.clone();
            clone.color.setHex(tint);
            clone.emissive = new THREE.Color(hot ? 0xff641f : 0x000000);
            clone.emissiveIntensity = heat;
            clone.metalness = hot ? 0.82 : 0.92;
            clone.roughness = hot ? 0.25 : 0.2;
            clone.needsUpdate = true;
            return clone;
          });

        const bladeCount = name === 'Fan_20_blades'
            ? 20
            : /^Compressor_rotor_\d+$/.test(name) || hot ? 24 : 0;
        if (bladeCount) {
            const layout = getAlternatingBladeLayout(rotor.geometry, bladeCount);
            if (layout) {
              const parent = rotor.parent || model;
              if (hot) {
                const staticMate = rotor.clone();
                const staticMaterials = materials.map((material) => material.clone());
                staticMate.material = Array.isArray(rotor.material) ? staticMaterials : staticMaterials[0];
                const staticStage = addAlternatingRotorStage(
                  staticMate, layout, spin, scale, staticMate.material, parent, 0.08
                );
                const heat = /High_pressure/i.test(name) ? 0.42 : 0.2;
                downloadedEngineRotors.push({
                  group: staticStage,
                  spin: 0,
                  hot,
                  heat,
                  materials: staticMaterials,
                  phase: downloadedEngineRotors.length * 0.9
                });
              }
              const stage = addAlternatingRotorStage(rotor, layout, spin, scale, rotor.material, parent);
              rotor.removeFromParent();
              if (hot) {
                const heat = /High_pressure/i.test(name) ? 0.42 : 0.2;
                downloadedEngineRotors.push({
                  group: stage,
                  spin: 0,
                  hot,
                  heat,
                  materials,
                  phase: downloadedEngineRotors.length * 0.9
                });
              }
              return stage;
            }
            console.warn(`Could not split rotor blades for alternating rotation: ${name}`);
            if (!hot) return;
            const staticMate = rotor.clone();
            const staticPivot = new THREE.Group();
            staticPivot.position.copy(rotor.position).add(
            center.clone().multiply(rotor.scale).applyEuler(rotor.rotation)
          );
          staticPivot.position.z += 0.08;
          staticPivot.scale.set(scale, scale, 1);
          staticPivot.add(staticMate);
          staticMate.position.copy(center).negate();
          const staticMaterials = materials.map((material) => material.clone());
          staticMate.material = Array.isArray(rotor.material) ? staticMaterials : staticMaterials[0];
          (rotor.parent || model).add(staticPivot);
          downloadedEngineRotors.push({
            group: staticPivot,
            spin: 0,
            hot,
            heat,
            materials: staticMaterials,
            phase: downloadedEngineRotors.length * 0.9
          });
        }

        const pivot = new THREE.Group();
        const parent = rotor.parent || model;
        pivot.position.copy(rotor.position).add(
          center.clone().multiply(rotor.scale).applyEuler(rotor.rotation)
        );
        parent.add(pivot);
        pivot.add(rotor);
        rotor.position.copy(center).negate();
        pivot.scale.set(scale, scale, 1);
        rotor.material = Array.isArray(rotor.material) ? materials : materials[0];
        downloadedEngineRotors.push({ group: pivot, spin, hot, heat, materials, phase: downloadedEngineRotors.length * 0.9 });
        return pivot;
      };

      const lowPressureSpoolSpeed = 3.2;
      const highPressureSpoolSpeed = -4.8;
      addRotorStage('Spinner', 0, 1.0, 0x909ba5);
      addRotorStage('Fan_20_blades', lowPressureSpoolSpeed, 1.0, 0x9ebad7);
      for (let stage = 1; stage <= 7; stage += 1) {
        const spoolSpeed = stage <= 3 ? lowPressureSpoolSpeed : highPressureSpoolSpeed;
        addRotorStage(`Compressor_rotor_${stage}`, spoolSpeed, 1.0, 0x9ebad7);
      }

      const highPressureStage1 = addRotorStage('High_pressure_turbine_1', highPressureSpoolSpeed, 0.55, 0xd0925b);
      const highPressureStage2 = addRotorStage('High_pressure_turbine_2', highPressureSpoolSpeed, 0.655, 0xc48750);
      const lowPressureStage3 = addRotorStage('Low_pressure_turbine_3', lowPressureSpoolSpeed, 0.76, 0xb96c4b);
      const lowPressureStage4 = addRotorStage('Low_pressure_turbine_4', lowPressureSpoolSpeed, 0.865, 0xc57755);

      downloadedEngineAirflowGroup = new THREE.Group();
      downloadedEngineAirflowGroup.visible = engineAirflowEnabled && activeView === 'engine';
      model.add(downloadedEngineAirflowGroup);
      const flowStations = [
        [1.42, 0], [1.2, 0.045], [1.02, -0.07], [0.84, 0.07],
        [0.66, -0.07], [0.48, 0.075], [0.3, -0.06], [0.12, 0.08],
        [-0.04, 0.02], [-0.2, 0.06], [-0.36, -0.055], [-0.52, 0.06],
        [-0.68, -0.05], [-0.84, 0.04], [-1.0, 0], [-1.2, 0]
      ];
      for (let lane = -1; lane <= 1; lane += 1) {
        const curve = new THREE.CatmullRomCurve3(
          flowStations.map(([z, bend]) => new THREE.Vector3(lane * 0.075, 0.8 + lane * 0.075 + bend, z)),
          false,
          'catmullrom',
          0.32
        );
        const geometry = new THREE.TubeGeometry(curve, 180, 0.012, 6, false);
        const uv = geometry.attributes.uv;
        const colors = new Float32Array(uv.count * 3);
        for (let index = 0; index < uv.count; index += 1) {
          const color = airflowTemperatureColor(uv.getX(index));
          colors[index * 3] = color.r;
          colors[index * 3 + 1] = color.g;
          colors[index * 3 + 2] = color.b;
        }
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        const streamline = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
          vertexColors: true,
          transparent: true,
          opacity: 0.82,
          depthTest: false,
          depthWrite: false,
          toneMapped: false
        }));
        streamline.renderOrder = 10;
        downloadedEngineAirflowGroup.add(streamline);
        for (let particleIndex = 0; particleIndex < 4; particleIndex += 1) {
          const particle = new THREE.Mesh(
            new THREE.SphereGeometry(0.027, 10, 8),
            new THREE.MeshBasicMaterial({ color: airflowTemperatureColor(0), toneMapped: false })
          );
          particle.renderOrder = 11;
          downloadedEngineAirflowGroup.add(particle);
          downloadedEngineAirParticles.push({
            mesh: particle,
            curve,
            phase: (particleIndex / 4 + (lane + 1) * 0.11) % 1,
            speed: 0.12
          });
        }
      }

      const createFlameMaterial = (colors, opacity, phase) => new THREE.ShaderMaterial({
        transparent: true,
        depthTest: false,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        toneMapped: false,
        uniforms: {
          uTime: { value: 0 },
          uPhase: { value: phase },
          uOpacity: { value: opacity },
          uColorA: { value: new THREE.Color(colors[0]) },
          uColorB: { value: new THREE.Color(colors[1]) },
          uColorC: { value: new THREE.Color(colors[2]) }
        },
        vertexShader: `
          varying vec2 vUv;
          uniform float uTime;
          uniform float uPhase;
          void main() {
            vUv = uv;
            vec3 p = position;
            float flicker = sin(uv.y * 23.0 - uTime * 17.0 + uPhase) * 0.03;
            flicker += sin(uv.y * 37.0 - uTime * 27.0 + uPhase * 1.7) * 0.014;
            p.xz *= 1.0 + flicker;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          varying vec2 vUv;
          uniform float uTime;
          uniform float uPhase;
          uniform float uOpacity;
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          uniform vec3 uColorC;
          void main() {
            float t = clamp(vUv.y, 0.0, 1.0);
            float tongues = 0.5 + 0.5 * sin(vUv.x * 43.0 + t * 19.0 - uTime * 13.0 + uPhase);
            tongues = tongues * 0.58 + (0.5 + 0.5 * sin(vUv.x * 71.0 - t * 31.0 - uTime * 21.0 + uPhase * 1.9)) * 0.42;
            float body = smoothstep(0.015, 0.16, t) * (1.0 - smoothstep(0.68, 1.0, t));
            vec3 color = mix(uColorA, uColorB, smoothstep(0.2, 0.78, tongues + (1.0 - t) * 0.18));
            color = mix(color, uColorC, smoothstep(0.68, 0.98, tongues) * (1.0 - t) * 0.72);
            float alpha = body * (0.28 + tongues * 0.68) * uOpacity;
            gl_FragColor = vec4(color, alpha);
          }
        `
      });

      const makeExhaustFlame = (radius, length, color, opacity, nozzleZ) => {
        const baseColor = new THREE.Color(color);
        const material = createFlameMaterial(
          [baseColor.clone().multiplyScalar(0.72), baseColor.clone().lerp(new THREE.Color(0xffbd56), 0.55), 0xfff4d5],
          opacity,
          downloadedEngineExhaust.length * 1.7
        );
        const flame = new THREE.Mesh(new THREE.ConeGeometry(radius, length, 24, 1, true), material);
        flame.position.set(0, 0.8, nozzleZ - length / 2);
        flame.rotation.x = -Math.PI / 2;
        flame.renderOrder = 7;
        model.add(flame);
        downloadedEngineExhaust.push({ mesh: flame, phase: downloadedEngineExhaust.length * 1.7, baseOpacity: opacity });
      };
      makeExhaustFlame(0.2, 1.5, 0xff642e, 0.32, -1.62);
      makeExhaustFlame(0.13, 1.12, 0xffaa43, 0.48, -1.64);
      makeExhaustFlame(0.065, 0.82, 0xffedbd, 0.72, -1.66);

      const injectorAxis = new THREE.Vector3(0, 0, -1);
      const injectorUp = new THREE.Vector3(0, 1, 0);
      for (let index = 0; index < 6; index += 1) {
        const angle = (index / 6) * Math.PI * 2;
        const radialX = Math.cos(angle) * 0.18;
        const radialY = Math.sin(angle) * 0.18;
        const phase = index * 0.9;
        const flameMaterial = createFlameMaterial([0xff481c, 0xffa62e, 0xffedb0], 0.92, phase);
        const flameCoreMaterial = createFlameMaterial([0xffaa35, 0xffffb2, 0xffffff], 0.82, phase + 0.5);
        const flame = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.3, 16, 10), flameMaterial);
        flame.position.set(radialX, 0.78 + radialY, -0.18 + index * 0.02);
        flame.rotation.x = -Math.PI / 2;
        model.add(flame);
        const core = new THREE.Mesh(new THREE.ConeGeometry(0.024, 0.22, 12, 8), flameCoreMaterial);
        core.position.copy(flame.position);
        core.position.z -= 0.025;
        core.rotation.x = -Math.PI / 2;
        model.add(core);
        downloadedEngineFlames.push({ mesh: flame, core, phase });
      }

      const addFlowArrow = (x, y, startZ, endZ, speed, phase, color) => {
        const arrow = new THREE.Group();
        const material = new THREE.MeshBasicMaterial({
          color,
          depthTest: false,
          depthWrite: false,
          toneMapped: false
        });
        const shaftLength = 0.17;
        const headLength = 0.14;
        const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, shaftLength, 12), material);
        shaft.position.y = shaftLength / 2;
        const head = new THREE.Mesh(new THREE.ConeGeometry(0.105, headLength, 12), material);
        head.position.y = shaftLength + headLength / 2;
        arrow.add(shaft, head);
        arrow.quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          new THREE.Vector3(0, 0, -1)
        );
        arrow.renderOrder = 9;
        arrow.position.set(x, y, startZ);
        model.add(arrow);
        downloadedEngineFlowArrows.push({ arrow, x, y, startZ, endZ, speed, phase });
      };

      addFlowArrow(-0.88, 1.08, 1.15, -0.95, 0.12, 0.02, 0x087fff);
      addFlowArrow(-0.88, 1.08, 1.15, -0.95, 0.12, 0.35, 0x087fff);
      addFlowArrow(-0.88, 1.08, 1.15, -0.95, 0.12, 0.68, 0x087fff);
      addFlowArrow(-0.28, 0.82, 0.28, -0.42, 0.18, 0.12, 0xf04432);
      addFlowArrow(-0.28, 0.82, 0.28, -0.42, 0.18, 0.62, 0xf04432);
      addFlowArrow(-0.88, 0.2, 1.15, -0.95, 0.13, 0.02, 0x087fff);
      addFlowArrow(-0.88, 0.2, 1.15, -0.95, 0.13, 0.35, 0x087fff);
      addFlowArrow(-0.88, 0.2, 1.15, -0.95, 0.13, 0.68, 0x087fff);

      const rotationArrowUp = new THREE.Vector3(0, 1, 0);
      const rotationArc = new THREE.Group();
      rotationArc.position.set(0, 0.8, 1.24);
      const arcStart = -2.55;
      const arcEnd = 2.65;
      const arcRadius = 0.36;
      const arcPoints = Array.from({ length: 49 }, (_, index) => {
        const angle = arcStart + (arcEnd - arcStart) * index / 48;
        return new THREE.Vector3(Math.cos(angle) * arcRadius, Math.sin(angle) * arcRadius, 0);
      });
      const yellowRotationMaterial = new THREE.MeshBasicMaterial({
        color: 0xffbd00,
        depthTest: false,
        depthWrite: false,
        toneMapped: false
      });
      const arc = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3(arcPoints), 72, 0.018, 8, false),
        yellowRotationMaterial
      );
      rotationArc.add(arc);
      const arcDirection = new THREE.Vector3(-Math.sin(arcEnd), Math.cos(arcEnd), 0).normalize();
      const arcHead = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.16, 12), yellowRotationMaterial);
      arcHead.quaternion.setFromUnitVectors(rotationArrowUp, arcDirection);
      arcHead.position.set(
        Math.cos(arcEnd) * arcRadius + arcDirection.x * 0.045,
        Math.sin(arcEnd) * arcRadius + arcDirection.y * 0.045,
        0
      );
      rotationArc.add(arcHead);
      rotationArc.renderOrder = 13;
      rotationArc.visible = false;
      model.add(rotationArc);
      downloadedEngineRotationArrows.push(rotationArc);
      downloadedEngineRoot.add(modelRoot);
      downloadedEngineLoaded = true;
      downloadedEngineStartTime = performance.now();
      cfm56.root.visible = false;
      downloadedEngineRoot.visible = activeView === 'engine';
      engineFlowGroup.visible = false;
      updateCameraTargets();
    }, undefined, (error) => console.warn('Using built-in CFM56 engine fallback', error));
  }

  function placeEngineOnAircraft() {
    const mount = aircraftRoot.localToWorld(new THREE.Vector3(
      aircraftLength * 0.12,
      planeCenter.y - 4.8,
      aircraftLength * 0.21
    ));
    engineRoot.position.copy(mount);
    engineRoot.rotation.copy(aircraftRoot.rotation);
    engineRoot.rotateY(Math.PI);
    flowCutPlane.constant = engineRoot.position.z;
  }

  function createAngleDemo() {
    const profile = new THREE.Shape();
    profile.moveTo(4, 0);
    profile.quadraticCurveTo(1.7, 0.46, -0.5, 0.4);
    profile.quadraticCurveTo(-2.9, 0.2, -4, 0);
    profile.quadraticCurveTo(-2.9, -0.08, -0.5, -0.1);
    profile.quadraticCurveTo(2.6, -0.11, 4, 0);
    const wingGeometry = new THREE.ExtrudeGeometry(profile, { depth: 3.2, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.07, bevelThickness: 0.05, curveSegments: 16 });
    wingGeometry.translate(0, 0, -1.6);
    const wing = new THREE.Mesh(wingGeometry, new THREE.MeshStandardMaterial({ color: 0xeaf1f4, metalness: 0.14, roughness: 0.38, side: THREE.DoubleSide }));
    angleWing.add(wing);

    const chordGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(4, 0.035, 2.05), new THREE.Vector3(-4, 0.035, 2.05)]);
    const chord = new THREE.Line(chordGeometry, new THREE.LineDashedMaterial({ color: 0xffd0ab, dashSize: 0.22, gapSize: 0.12, linewidth: 2 }));
    chord.computeLineDistances();
    angleWing.add(chord);

    for (let index = 0; index < 3; index += 1) {
      const material = new THREE.LineDashedMaterial({ color: index < 2 ? 0xc6f4ff : 0xe9c88d, dashSize: 0.3, gapSize: 0.18, transparent: true, opacity: 0.95, depthWrite: false });
      const line = new THREE.Line(new THREE.BufferGeometry(), material);
      angleFlowGroup.add(line);
      angleFlowLines.push(line);
      angleFlowMaterials.push(material);
    }
  }

  function createStallAircraft() {
    const model = cloneSkeleton(instructionAircraftModel);
    model.visible = true;
    model.scale.setScalar(1);
    model.updateMatrixWorld(true);
    const sourceBounds = new THREE.Box3().setFromObject(model);
    const sourceSize = sourceBounds.getSize(new THREE.Vector3());
    const sourceLength = Math.max(sourceSize.x, sourceSize.z);
    model.scale.setScalar(Math.min(0.18, 14 / Math.max(sourceLength, 1)));
    model.updateMatrixWorld(true);
    const modelCenter = new THREE.Box3().setFromObject(model).getCenter(new THREE.Vector3());
    model.position.sub(modelCenter);
    stallAircraftPivot.add(model);
    stallAircraftPivot.visible = activeView === 'aoa';
  }

  function setAngleOfAttack(value) {
    angleOfAttack = THREE.MathUtils.clamp(Number(value) || 0, -5, 25);
    const angleRadians = THREE.MathUtils.degToRad(angleOfAttack);
    const stalled = angleOfAttack >= 15;
    const liftPercent = angleOfAttack < 0
      ? Math.round(THREE.MathUtils.clamp((angleOfAttack + 5) * 4, 0, 20))
      : angleOfAttack <= 15
        ? Math.round(20 + angleOfAttack * (80 / 15))
        : Math.round(Math.max(20, 100 - (angleOfAttack - 15) * 8));
    angleWing.rotation.z = angleRadians;

    for (let index = 0; index < angleFlowLines.length; index += 1) {
      const upper = index < 2;
      const points = [];
      for (let step = 0; step <= 64; step += 1) {
        const x = 6.5 - step * (13 / 64);
        const proximity = Math.exp(-((x - 0.1) ** 2) / 8);
        const baseY = upper ? 0.95 + index * 0.52 : -1.05;
        const liftCurve = upper ? proximity * (0.36 + Math.max(0, angleOfAttack) * 0.025) : -proximity * 0.12;
        const separation = stalled ? THREE.MathUtils.clamp((2.4 - x) / 6, 0, 1) : 0;
        const turbulence = separation * Math.sin((2.4 - x) * 4.2 + index * 1.7) * 0.46;
        points.push(new THREE.Vector3(x, baseY + liftCurve + turbulence, 2.18));
      }
      const line = angleFlowLines[index];
      line.geometry.dispose();
      line.geometry = new THREE.BufferGeometry().setFromPoints(points);
      line.computeLineDistances();
      angleFlowMaterials[index].color.set(stalled && upper ? 0xffc08b : upper ? 0xc6f4ff : 0xe9c88d);
      angleFlowMaterials[index].dashSize = stalled && upper ? 0.2 : upper ? 0.3 : 0.18;
    }

    const arcPoints = Array.from({ length: 25 }, (_, index) => {
      const angle = Math.PI + angleRadians * index / 24;
      return new THREE.Vector3(Math.cos(angle) * 0.82, Math.sin(angle) * 0.82, 2.3);
    });
    angleArc.geometry.dispose();
    angleArc.geometry = new THREE.BufferGeometry().setFromPoints(arcPoints);
    angleLiftArrow.setLength(0.35 + liftPercent / 100 * 1.8, 0.35, 0.2);
    angleLiftArrow.setColor(stalled ? 0xff936f : 0xffd0ab);
    angleLiftArrow.position.set(-0.5, 0.55, 2.3);
    return { angle: angleOfAttack, liftPercent, stalled };
  }

  function createPlaneAirflow(model) {
    aircraftRoot.updateMatrixWorld(true);
    model.updateMatrixWorld(true);
    const worldBounds = new THREE.Box3().setFromObject(model, true);
    const localBounds = new THREE.Box3();
    for (const x of [worldBounds.min.x, worldBounds.max.x]) {
      for (const y of [worldBounds.min.y, worldBounds.max.y]) {
        for (const z of [worldBounds.min.z, worldBounds.max.z]) {
          localBounds.expandByPoint(aircraftRoot.worldToLocal(new THREE.Vector3(x, y, z)));
        }
      }
    }
    const localSize = localBounds.getSize(new THREE.Vector3());
    const localCenter = localBounds.getCenter(new THREE.Vector3());
    const surfaceRaycaster = new THREE.Raycaster();
    surfaceRaycaster.far = 200;
    const rayOrigin = new THREE.Vector3();
    const rayDirection = new THREE.Vector3(0, -1, 0).applyQuaternion(aircraftRoot.quaternion);
    const aircraftLocalHit = new THREE.Vector3();
    const sampleSurface = (chord, span, searchNearby = true) => {
      const offsets = [
        [0, 0], [0.35, 0], [-0.35, 0], [0, 0.35], [0, -0.35],
        [0.7, 0], [-0.7, 0], [0, 0.7], [0, -0.7],
        [0, 1.1], [0, -1.1], [0, 1.5], [0, -1.5]
      ];
      for (const [chordOffset, spanOffset] of searchNearby ? offsets : [offsets[0]]) {
        rayOrigin.set(chord + chordOffset, 100, span + spanOffset);
        aircraftRoot.localToWorld(rayOrigin);
        surfaceRaycaster.set(rayOrigin, rayDirection);
        const hits = surfaceRaycaster.intersectObject(model, true);
        if (!hits.length) continue;
        const heights = hits
          .map((hit) => aircraftRoot.worldToLocal(aircraftLocalHit.copy(hit.point)).y)
          .sort((a, b) => b - a)
          .filter((height, index, values) => index === 0 || Math.abs(height - values[index - 1]) > 0.12);
        if (heights.length > 1) return { upper: heights[0], lower: heights[1] };
      }
      return null;
    };

    const streamlineColors = { upper: 0xc6f4ff, lower: 0xe9c88d };
    const spanTargets = [-11, 11];
    const flowOffsets = [0.12, 0.34, 0.58];

    const buildWingProfile = (span) => {
      const xRange = [localCenter.x - localSize.x * 0.3, localCenter.x + localSize.x * 0.14];
      const samples = [];
      for (let index = 0; index < 24; index += 1) {
        const chord = THREE.MathUtils.lerp(xRange[0], xRange[1], index / 23);
        const surface = sampleSurface(chord, span, true);
        if (surface) {
          samples.push({ chord, upper: surface.upper, lower: surface.lower });
        }
      }
      if (!samples.length) return null;
      const upperProfile = samples.map((sample) => ({ x: sample.chord, y: sample.upper })).sort((a, b) => a.x - b.x);
      const lowerProfile = samples.map((sample) => ({ x: sample.chord, y: sample.lower })).sort((a, b) => a.x - b.x);
      const sampleHeight = (profile, x) => {
        if (profile.length === 0) return 0;
        if (x <= profile[0].x) return profile[0].y;
        if (x >= profile[profile.length - 1].x) return profile[profile.length - 1].y;
        for (let index = 0; index < profile.length - 1; index += 1) {
          const a = profile[index];
          const b = profile[index + 1];
          if (x >= a.x && x <= b.x) {
            const amount = (x - a.x) / (b.x - a.x || 1);
            return THREE.MathUtils.lerp(a.y, b.y, amount);
          }
        }
        return profile[profile.length - 1].y;
      };
      return { upperProfile, lowerProfile, sampleHeight, xMin: xRange[0], xMax: xRange[1] };
    };

    for (const span of spanTargets) {
      const sideGroup = wingFlowSideGroups.get(Math.sign(span));
      if (!sideGroup) continue;

      const profile = buildWingProfile(span);
      if (!profile) continue;
      const { upperProfile, lowerProfile, sampleHeight, xMin, xMax } = profile;
      const leadingEdge = xMax - (xMax - xMin) * 0.18;
      const trailingEdge = xMin + (xMax - xMin) * 0.08;
      const flowStart = xMax + 3.2;
      const flowEnd = xMin - 1.6;

      if (!wingFlowFocusReady) {
        const focusX = xMin + (xMax - xMin) * 0.46;
        const focusUpper = sampleHeight(upperProfile, focusX);
        const focusLower = sampleHeight(lowerProfile, focusX);
        wingFlowFocusLocal.set(focusX, (focusUpper + focusLower) * 0.5, span);
        wingFlowFocusReady = true;
      }

      flowOffsets.forEach((offset, index) => {
        const upperPoints = [];
        const lowerPoints = [];
        for (let sampleIndex = 0; sampleIndex <= 18; sampleIndex += 1) {
          const t = sampleIndex / 18;
          const x = THREE.MathUtils.lerp(flowStart, flowEnd, t);
          const upperSurface = sampleHeight(upperProfile, x);
          const lowerSurface = sampleHeight(lowerProfile, x);
          const upperY = x >= leadingEdge
            ? THREE.MathUtils.lerp(0.62 + offset * 0.85, upperSurface + 0.08 + offset * 0.22, THREE.MathUtils.clamp((x - flowStart) / (leadingEdge - flowStart || 1), 0, 1))
            : x <= trailingEdge
              ? THREE.MathUtils.lerp(upperSurface + 0.05 + offset * 0.12, 0.1 + offset * 0.3, THREE.MathUtils.clamp((trailingEdge - x) / (trailingEdge - flowEnd || 1), 0, 1))
              : upperSurface + 0.06 + offset * 0.12;
          const lowerY = x >= leadingEdge
            ? THREE.MathUtils.lerp(-0.52 - offset * 0.8, lowerSurface - 0.08 - offset * 0.18, THREE.MathUtils.clamp((x - flowStart) / (leadingEdge - flowStart || 1), 0, 1))
            : x <= trailingEdge
              ? THREE.MathUtils.lerp(lowerSurface - 0.05 - offset * 0.12, -0.1 - offset * 0.28, THREE.MathUtils.clamp((trailingEdge - x) / (trailingEdge - flowEnd || 1), 0, 1))
              : lowerSurface - 0.05 - offset * 0.12;
          upperPoints.push(new THREE.Vector3(x, upperY, span));
          lowerPoints.push(new THREE.Vector3(x, lowerY, span));
        }
        const upperCurve = new THREE.CatmullRomCurve3(upperPoints, false, 'centripetal');
        const lowerCurve = new THREE.CatmullRomCurve3(lowerPoints, false, 'centripetal');
        const upperMaterial = new THREE.MeshBasicMaterial({
          color: streamlineColors.upper,
          transparent: true,
          opacity: 0.85,
          depthTest: true,
          depthWrite: false,
          toneMapped: false
        });
        const lowerMaterial = new THREE.MeshBasicMaterial({
          color: streamlineColors.lower,
          transparent: true,
          opacity: 0.75,
          depthTest: true,
          depthWrite: false,
          toneMapped: false
        });
        sideGroup.add(new THREE.Mesh(new THREE.TubeGeometry(upperCurve, 72, 0.028, 6, false), upperMaterial));
        sideGroup.add(new THREE.Mesh(new THREE.TubeGeometry(lowerCurve, 72, 0.024, 6, false), lowerMaterial));

        for (const phase of [0.18, 0.5, 0.8]) {
          const upperParticle = new THREE.Mesh(
            new THREE.BoxGeometry(0.26, 0.04, 0.04),
            new THREE.MeshBasicMaterial({
              color: streamlineColors.upper,
              transparent: true,
              opacity: 0.9,
              depthTest: true,
              depthWrite: false,
              toneMapped: false
            })
          );
          const lowerParticle = new THREE.Mesh(
            new THREE.BoxGeometry(0.26, 0.04, 0.04),
            new THREE.MeshBasicMaterial({
              color: streamlineColors.lower,
              transparent: true,
              opacity: 0.8,
              depthTest: true,
              depthWrite: false,
              toneMapped: false
            })
          );
          sideGroup.add(upperParticle, lowerParticle);
          flowParticles.push({ mesh: upperParticle, curve: upperCurve, phase: phase + index * 0.08, speed: 0.36 });
          flowParticles.push({ mesh: lowerParticle, curve: lowerCurve, phase: phase + index * 0.09 + 0.2, speed: 0.24 });
        }
      });
    }
    const slatReference = instructionControlSurfaces.slats
      .filter(({ object, side }) => /^FrontFlapsB[LR]/.test(object.name) && side > 0)
      .map(({ object }) => ({
        position: aircraftRoot.worldToLocal(object.getWorldPosition(new THREE.Vector3()))
      }))
      .sort((a, b) => Math.abs(b.position.z) - Math.abs(a.position.z))[0];
    const slatSpan = slatReference?.position.z ?? localBounds.max.z * 0.48;
    const slatChord = slatReference?.position.x ?? localCenter.x;
    const chordScale = THREE.MathUtils.clamp(localSize.x * 0.02, 0.65, 1.2);
    const slatChordSamples = Array.from(
      { length: 12 },
      (_, index) => slatChord + (0.7 - index * 0.45) * chordScale
    );
    const makeSlatProfile = (span) => {
      const surfaceAt = slatChordSamples.map((chord) => sampleSurface(chord, span));
      const profiles = [true, false].map((upper) => surfaceAt
        .map((surface, index) => ({ chord: slatChordSamples[index], height: surface?.[upper ? 'upper' : 'lower'] }))
        .filter(({ height }) => height !== undefined));
      return (chord, upper) => {
        const profile = profiles[upper ? 0 : 1];
        if (!profile.length) return upper ? 0.45 : -0.25;
        if (chord >= profile[0].chord) return profile[0].height;
        for (let index = 0; index < profile.length - 1; index += 1) {
          const a = profile[index];
          const b = profile[index + 1];
          if (chord <= a.chord && chord >= b.chord) {
            const amount = (chord - a.chord) / (b.chord - a.chord);
            return THREE.MathUtils.lerp(a.height, b.height, amount);
          }
        }
        return profile[profile.length - 1].height;
      };
    };
    const slatProfile = makeSlatProfile(slatSpan);
    const flowFocusChord = slatChord - chordScale * 1.55;
    const flowFocusHeight = (slatProfile(slatChord, true) + slatProfile(slatChord, false)) * 0.5;
    slatLessonFocus.set(flowFocusChord, flowFocusHeight, slatSpan);
    const flowPaths = [
      [
        [0.78, false, -0.09], [0.5, false, -0.07], [0.22, false, -0.05],
        [0.03, false, 0.02], [-0.12, true, 0.08], [-0.28, true, 0.09],
        [-0.55, true, 0.08], [-0.95, true, 0.07], [-1.5, true, 0.06],
        [-2.15, true, 0.05], [-2.75, true, 0.05], [-3.35, true, 0.05],
        [-3.9, true, 0.05]
      ],
      [
        [0.78, false, -0.11], [0.5, false, -0.09], [0.22, false, -0.06],
        [0.03, false, 0.02], [-0.12, true, 0.1], [-0.28, true, 0.11],
        [-0.55, true, 0.09], [-0.95, true, 0.08], [-1.5, true, 0.07],
        [-2.15, true, 0.06], [-2.75, true, 0.05], [-3.35, true, 0.05],
        [-3.9, true, 0.05]
      ]
    ];
    flowPaths.forEach((path, stageIndex) => {
      const stageGroup = slatFlowStages[stageIndex];
      for (const spanOffset of [-0.32, 0, 0.32]) {
        const span = slatSpan + spanOffset;
        const profileY = makeSlatProfile(span);
        const points = path.map(([offset, upper, clearance], pointIndex) => {
          const chord = slatChord + offset * chordScale;
          const laneVariation = spanOffset * 0.025;
          return new THREE.Vector3(
            chord,
            profileY(chord, upper) + clearance + laneVariation,
            span
          );
        });
        const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal');
        const centerLine = spanOffset === 0;
        const material = new THREE.MeshBasicMaterial({
          color: stageIndex === 1 ? (centerLine ? 0x55dfff : 0x85eaff) : (centerLine ? 0x58d9ff : 0x8beaff),
          transparent: true,
          opacity: centerLine ? 0.96 : 0.78,
          depthTest: false,
          depthWrite: false,
          toneMapped: false
        });
        const streamline = new THREE.Mesh(
          new THREE.TubeGeometry(curve, 96, centerLine ? 0.027 : 0.019, 7, false),
          material
        );
        streamline.renderOrder = 14;
        stageGroup.add(streamline);
        for (const particlePhase of [0.16, 0.5, 0.82]) {
          const particle = new THREE.Mesh(
            new THREE.SphereGeometry(centerLine ? 0.06 : 0.045, 10, 8),
            new THREE.MeshBasicMaterial({
              color: 0xe4fbff,
              transparent: true,
              opacity: 0.96,
              depthTest: false,
              depthWrite: false,
              toneMapped: false
            })
          );
          particle.renderOrder = 15;
          stageGroup.add(particle);
          slatFlowParticles.push({
            mesh: particle,
            curve,
            phase: particlePhase + spanOffset * 0.08,
            speed: stageIndex === 1 ? 0.23 : 0.28,
            stageIndex
          });
        }
      }
    });
  }

  function updateSlatFlowVisibility() {
    slatFlowGroup.visible = activeMode === 'instruction'
      && activeView === 'slats'
      && slatLessonPhase > 0;
    slatFlowStages.forEach((group, index) => {
      group.visible = slatLessonPhase === index + 1;
    });
  }

  function createEngineAirflow() {
    const thermalStops = [
      [-5.2, new THREE.Color(0x27bdff)],
      [-3.22, new THREE.Color(0x3b9ff2)],
      [-2.38, new THREE.Color(0x64c9f0)],
      [-1.04, new THREE.Color(0xffd45f)],
      [-0.84, new THREE.Color(0xff9f36)],
      [-0.28, new THREE.Color(0xff3217)],
      [0.12, new THREE.Color(0xff5723)],
      [1.11, new THREE.Color(0xffa33e)],
      [2.9, new THREE.Color(0xff7832)],
      [4.8, new THREE.Color(0xffc474)]
    ];
    const colorAtStation = (station, target = new THREE.Color()) => {
      for (let index = 1; index < thermalStops.length; index += 1) {
        const [end, endColor] = thermalStops[index];
        if (station <= end) {
          const [start, startColor] = thermalStops[index - 1];
          return target.copy(startColor).lerp(endColor, THREE.MathUtils.clamp((station - start) / (end - start), 0, 1));
        }
      }
      return target.copy(thermalStops[thermalStops.length - 1][1]);
    };
    const coreStations = [-4.9, -3.22, -2.86, -2.38, -2.18, -1.04, -0.84, -0.56, -0.28, -0.18, 0.12, 0.36, 1.11, 1.48];
    const coreOffsets = [[-0.58, 0], [0.58, 0], [0, -0.58], [0, 0.58]];
    const bypassStations = [-4.9, -3.22, -2.86, -1.04, 0.5, 1.16];
    const bypassRadii = [1.45, 1.45, 1.4, 1.34, 1.26, 1.18];
    const bypassOffsets = [
      [1, 0], [-1, 0], [0, 1], [0, -1],
      [0.707, 0.707], [-0.707, 0.707], [0.707, -0.707], [-0.707, -0.707]
    ];
    const paths = [
      ...coreOffsets.map(([y, z]) => ({
        points: coreStations.map((x) => [x, y, z]),
        thermal: true,
        radius: 0.032,
        speed: 0.72
      })),
      ...bypassOffsets.map(([y, z]) => ({
        points: bypassStations.map((x, index) => [x, y * bypassRadii[index], z * bypassRadii[index]]),
        color: 0x43c9ff,
        radius: 0.022,
        speed: 0.86
      }))
    ];
    for (const path of paths) {
      const curve = new THREE.CatmullRomCurve3(path.points.map(([x, y, z]) => new THREE.Vector3(x, y, z)));
      const geometry = new THREE.TubeGeometry(curve, 120, path.radius, 6, false);
      if (path.thermal) {
        const positions = geometry.attributes.position;
        const colors = new Float32Array(positions.count * 3);
        const color = new THREE.Color();
        for (let index = 0; index < positions.count; index += 1) {
          colorAtStation(positions.getX(index), color);
          colors[index * 3] = color.r;
          colors[index * 3 + 1] = color.g;
          colors[index * 3 + 2] = color.b;
        }
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      }
      const tubeMaterial = new THREE.MeshBasicMaterial({
        color: path.thermal ? 0xffffff : path.color,
        vertexColors: Boolean(path.thermal),
        transparent: true,
        opacity: path.thermal ? 0.96 : 0.82,
        depthTest: true,
        depthWrite: false
      });
      const tube = new THREE.Mesh(geometry, tubeMaterial);
      engineFlowGroup.add(tube);
      for (let index = 0; index < 10; index += 1) {
        const particle = new THREE.Mesh(
          new THREE.SphereGeometry(path.radius * 2.5, 8, 6),
          new THREE.MeshBasicMaterial({ color: path.thermal ? colorAtStation(path.points[0][0]) : path.color })
        );
        engineFlowGroup.add(particle);
        flowParticles.push({ mesh: particle, curve, phase: index / 10, speed: path.speed, thermal: Boolean(path.thermal), colorAtStation });
      }
    }

    const exhaustColors = [0xffb94f, 0xff5726, 0xff321b];
    exhaustColors.forEach((color, index) => {
        const flame = new THREE.Mesh(
          new THREE.ConeGeometry(0.62 - index * 0.1, 3.2 + index * 0.7, 24, 1, false),
          new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.76 - index * 0.16, depthWrite: false, side: THREE.DoubleSide })
        );
      flame.rotation.z = -Math.PI / 2;
        flame.position.set(4.98 + index * 0.12, 0, 0);
      flame.userData.flicker = index * 1.73;
      flame.userData.baseScale = 0.92 - index * 0.1;
      engineFlowGroup.add(flame);
      flameMeshes.push(flame);
    });
  }

  function setShellCutaway(mesh) {
    const shellName = /^(casing_|inlet_lip|fan_containment|bypass_inner_wall|turbine_blade_outer_air_seals)/i.test(mesh.name);
    if (!shellName) return;
    const originalMaterials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const clippedMaterials = originalMaterials.map((material) => {
      const clipped = material.clone();
      clipped.clippingPlanes = [flowCutPlane];
      clipped.clipShadows = false;
      clipped.needsUpdate = true;
      return clipped;
    });
    mesh.material = Array.isArray(mesh.material) ? clippedMaterials : clippedMaterials[0];
  }

  function createVisibleCoreDetails() {
    const shaftMaterial = new THREE.MeshStandardMaterial({
      color: 0xd7f0ff,
      metalness: 0.62,
      roughness: 0.24,
      emissive: 0x55a4c9,
      emissiveIntensity: 0.72
    });
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.66, 32), shaftMaterial);
    shaft.rotation.z = Math.PI / 2;
    shaft.position.set(-0.705, 0, -0.14);
    engineRoot.add(shaft);

    const innerShaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.07, 0.07, 1.39, 24),
      new THREE.MeshStandardMaterial({ color: 0xffd18a, metalness: 0.52, roughness: 0.24, emissive: 0xb66a27, emissiveIntensity: 0.52 })
    );
    innerShaft.rotation.z = Math.PI / 2;
    innerShaft.position.set(-0.47, 0, -0.18);
    engineRoot.add(innerShaft);

    const chamberShell = new THREE.MeshStandardMaterial({
      color: 0x9b2112,
      emissive: 0xf13a12,
      emissiveIntensity: 0.82,
      metalness: 0.26,
      roughness: 0.38,
      transparent: true,
      opacity: 0.72,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false
    });
    const flameMaterial = new THREE.MeshBasicMaterial({ color: 0xff5425, transparent: true, opacity: 0.9, depthTest: false, depthWrite: false, side: THREE.DoubleSide });
    for (const side of [-1, 1]) {
      const chamber = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.48, 32, 1, true), chamberShell);
      chamber.rotation.z = Math.PI / 2;
      chamber.position.set(-0.08, side * 0.29, -0.1);
      chamber.renderOrder = 4;
      engineRoot.add(chamber);

      const flame = new THREE.Mesh(new THREE.ConeGeometry(0.105, 0.4, 16), flameMaterial);
      flame.rotation.z = -Math.PI / 2;
      flame.position.set(0.02, side * 0.29, -0.12);
      flame.renderOrder = 5;
      engineRoot.add(flame);
      flameMeshes.push(flame);
    }
  }

  function applyEngineMaterial(mesh) {
    const materialName = Array.isArray(mesh.material) ? mesh.material[0]?.name : mesh.material?.name;
    const paletteKey = /augmentor_liner|nozzle_flaps|nozzle_seals/i.test(mesh.name)
      ? 'thermal_barrier'
      : materialName;
    const palette = ENGINE_MATERIALS[paletteKey];
    if (!palette) return;
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const material of materials) {
      material.color.setRGB(...palette.color, THREE.LinearSRGBColorSpace);
      material.metalness = palette.metalness;
      material.roughness = palette.roughness;
      material.envMapIntensity = 0.72;
      material.side = THREE.DoubleSide;
      material.needsUpdate = true;
    }
  }

  function installRotors(root) {
    root.updateMatrixWorld(true);
    const rotorMeshes = [];
    root.traverse((object) => {
      if (object.isMesh && /^blades_(fan|hpc|hpt|lpt|booster)_r\d+$/i.test(object.name)) rotorMeshes.push(object);
    });
    for (const mesh of rotorMeshes) {
      const bounds = new THREE.Box3().setFromObject(mesh);
      const center = engineRoot.worldToLocal(bounds.getCenter(new THREE.Vector3()));
      const pivot = new THREE.Group();
      pivot.position.set(center.x, 0, 0);
      engineRoot.add(pivot);
      pivot.attach(mesh);
      pivot.userData.spin = 0;
      engineRotorPivots.push(pivot);
    }
  }

  function activateAircraftModel(mode) {
    const profile = aircraftProfiles[mode];
    instructionAircraftModel.visible = mode === 'instruction' && Boolean(aircraftProfiles.instruction);
    playAircraftModel.visible = mode === 'play' && Boolean(aircraftProfiles.play);
    playExhaustGroup.visible = mode === 'play' && Boolean(aircraftProfiles.play);
    if (!profile) return;

    aircraftLength = profile.length;
    aircraftHalfLength = profile.halfLength;
    aircraftHalfWidth = profile.halfWidth;
    aircraftHalfHeight = profile.halfHeight;
    aircraftCollisionRadius = profile.collisionRadius;
    aircraftGroundY = profile.groundY;
    playGroundOffset = profile.playGroundOffset;
    planeCenter.copy(profile.center);
    aircraftRoot.position.y = mode === 'play'
      ? profile.playGroundOffset * PLAY_WORLD_SCALE
      : profile.groundY;
    if (mode === 'instruction') {
      cruiseForceArrows[0].position.y = planeCenter.y + 5;
      cruiseForceArrows[1].position.y = planeCenter.y - 5;
      cruiseForceArrows[2].position.y = planeCenter.y;
      cruiseForceArrows[3].position.y = planeCenter.y;
      if (engineLoaded) placeEngineOnAircraft();
    }
    updateCameraTargets();
  }

  function loadAircraft(url, mode) {
    if (aircraftLoadsStarted.has(mode)) return;
    aircraftLoadsStarted.add(mode);
    loader.load(url, (gltf) => {
      const model = gltf.scene;
      const modelRoot = mode === 'play' ? playAircraftModel : instructionAircraftModel;
      model.updateMatrixWorld(true);
      const modelSkeletons = new Set();
      model.traverse((object) => {
        if (object.isSkinnedMesh) modelSkeletons.add(object.skeleton);
      });
      for (const skeleton of modelSkeletons) skeleton.update();
      const bounds = new THREE.Box3().setFromObject(model, mode === 'instruction');
      const center = bounds.getCenter(new THREE.Vector3());
      const dimensions = bounds.getSize(new THREE.Vector3());
      const isPlayModel = mode === 'play';
      const length = Math.max(dimensions.x, dimensions.z);
      const halfLength = length * PLAY_AIRFRAME_SCALE / 2;
      const halfWidth = Math.min(dimensions.x, dimensions.z) * PLAY_AIRFRAME_SCALE / 2;
      const halfHeight = dimensions.y * PLAY_AIRFRAME_SCALE / 2;
      let groundY = isPlayModel ? -2.68 - bounds.min.y : INSTRUCTION_RUNWAY_SURFACE_Y - bounds.min.y;
      const playOffset = -2.68 - bounds.min.y * PLAY_AIRFRAME_SCALE;

      modelRoot.rotation.y = isPlayModel ? Math.PI / 2 : mode === 'instruction' ? -Math.PI / 2 : 0;
      model.position.set(-center.x, 0, -center.z);
      model.scale.setScalar(1);
      if (mode === 'instruction') {
        const animationTracks = new Map(gltf.animations.flatMap((clip) => clip.tracks.map((track) => [track.name, track])));
        const elevatorMaterials = new Map();
        model.traverse((object) => {
          if (!object.isMesh) return;
          const installElevatorShader = (sourceMaterial) => {
            if (elevatorMaterials.has(sourceMaterial)) return elevatorMaterials.get(sourceMaterial);
            const material = sourceMaterial.clone();
            const elevatorUniform = { value: 0 };
            const rudderUniform = { value: 0 };
            const previousCompile = material.onBeforeCompile;
            material.onBeforeCompile = (shader, renderer) => {
              previousCompile?.call(material, shader, renderer);
              shader.uniforms.uElevatorDeflection = elevatorUniform;
              shader.uniforms.uRudderDeflection = rudderUniform;
              const deformation = `
                float elevatorSpan = abs(position.x);
                float elevatorHingeZ = 16.1 + 0.37 * elevatorSpan;
                float elevatorSurfaceMask = step(0.7, elevatorSpan)
                  * (1.0 - step(6.5, elevatorSpan))
                  * step(4.3, position.y)
                  * (1.0 - step(5.55, position.y))
                  * smoothstep(elevatorHingeZ - 0.05, elevatorHingeZ + 0.05, position.z);
                float elevatorAngle = -uElevatorDeflection * 0.45 * elevatorSurfaceMask;
                float elevatorCos = cos(elevatorAngle);
                float elevatorSin = sin(elevatorAngle);
                vec3 elevatorPivot = vec3(0.0, 4.55 + 0.12 * elevatorSpan, elevatorHingeZ);
                float rudderSurfaceMask = (1.0 - step(0.5, abs(position.x)))
                  * step(5.1, position.y)
                  * (1.0 - step(11.9, position.y))
                  * smoothstep(16.2, 16.8, position.z);
                float rudderAngle = -uRudderDeflection * 0.42 * rudderSurfaceMask;
                float rudderCos = cos(rudderAngle);
                float rudderSin = sin(rudderAngle);
                vec3 rudderPivot = vec3(0.0, position.y, 16.4);
              `;
              shader.vertexShader = shader.vertexShader
                .replace(
                  '#include <common>',
                  '#include <common>\nuniform float uElevatorDeflection;\nuniform float uRudderDeflection;'
                )
                .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
                  ${deformation}
                  objectNormal = vec3(
                    objectNormal.x,
                    objectNormal.y * elevatorCos - objectNormal.z * elevatorSin,
                    objectNormal.y * elevatorSin + objectNormal.z * elevatorCos
                  );
                  objectNormal = vec3(
                    objectNormal.x * rudderCos + objectNormal.z * rudderSin,
                    objectNormal.y,
                    -objectNormal.x * rudderSin + objectNormal.z * rudderCos
                  );
                `)
                .replace('#include <begin_vertex>', `#include <begin_vertex>
                  vec3 elevatorOffset = transformed - elevatorPivot;
                  transformed = elevatorPivot + vec3(
                    elevatorOffset.x,
                    elevatorOffset.y * elevatorCos - elevatorOffset.z * elevatorSin,
                    elevatorOffset.y * elevatorSin + elevatorOffset.z * elevatorCos
                  );
                  vec3 rudderOffset = transformed - rudderPivot;
                  transformed = rudderPivot + vec3(
                    rudderOffset.x * rudderCos + rudderOffset.z * rudderSin,
                    rudderOffset.y,
                    -rudderOffset.x * rudderSin + rudderOffset.z * rudderCos
                  );
                `);
            };
            const previousCacheKey = material.customProgramCacheKey.bind(material);
            material.customProgramCacheKey = () => `${previousCacheKey()}:instruction-controls`;
            instructionElevatorUniforms.push(elevatorUniform);
            instructionRudderUniforms.push(rudderUniform);
            elevatorMaterials.set(sourceMaterial, material);
            return material;
          };
          object.material = Array.isArray(object.material)
            ? object.material.map(installElevatorShader)
            : installElevatorShader(object.material);
        });
        const rigSurfaces = [
          { kind: 'inboardFlapsLeft', nodePattern: /^BackFlapsA2?\.?L_/, poseTime: 8 },
          { kind: 'inboardFlapsRight', nodePattern: /^BackFlapsA2?\.?R_/, poseTime: 8 },
          { kind: 'outboardFlaps', nodePattern: /^BackFlapsB2?\.?[LR]_/, poseTime: 8 },
          { kind: 'slats', nodePattern: /^FrontFlaps[AB]/, poseTime: 8 },
          { kind: 'ailerons', nodePattern: /^BackAileron\.?[LR]_/, poseTime: 21.5 },
          { kind: 'spoilers', nodePattern: /^AirBrake2?\.?[LR]_/, poseTime: 24.667 }
        ];
        const gearNodePattern = /^(?:Wheel|NoseWheel)/;
        const samplePose = (object, property, poseTime) => {
          const track = animationTracks.get(`${object.name}.${property}`);
          if (!track) return object[property].clone();
          const time = Math.min(poseTime, track.times[track.times.length - 1]);
          const value = track.createInterpolant().evaluate(time);
          return property === 'quaternion'
            ? new THREE.Quaternion(value[0], value[1], value[2], value[3])
            : new THREE.Vector3(value[0], value[1], value[2]);
        };
        const sampleGearPose = (object, poseTime) => ({
          position: samplePose(object, 'position', poseTime),
          quaternion: samplePose(object, 'quaternion', poseTime),
          scale: samplePose(object, 'scale', poseTime)
        });
        model.traverse((object) => {
          if (gearNodePattern.test(object.name)) {
            const downPose = sampleGearPose(object, 28.166);
            const upPose = sampleGearPose(object, 0);
            object.position.copy(downPose.position);
            object.quaternion.copy(downPose.quaternion);
            object.scale.copy(downPose.scale);
            instructionControlSurfaces.gear.push({ object, downPose, upPose });
          }
          const definition = rigSurfaces.find(({ nodePattern }) => nodePattern.test(object.name));
          if (!definition) return;
          const restPosition = ['inboardFlapsLeft', 'inboardFlapsRight', 'outboardFlaps', 'slats'].includes(definition.kind)
            ? samplePose(object, 'position', 0)
            : object.position.clone();
          const restRotation = ['inboardFlapsLeft', 'inboardFlapsRight', 'outboardFlaps', 'slats'].includes(definition.kind)
            ? samplePose(object, 'quaternion', 0)
            : object.quaternion.clone();
          object.position.copy(restPosition);
          object.quaternion.copy(restRotation);
          instructionControlSurfaces[definition.kind].push({
            object,
            restPosition,
            targetPosition: samplePose(object, 'position', definition.poseTime),
            restRotation,
            targetRotation: samplePose(object, 'quaternion', definition.poseTime),
            side: /\.?R_/.test(object.name) ? 1 : -1
          });
        });
        for (const kind of ['inboardFlapsLeft', 'inboardFlapsRight', 'outboardFlaps', 'ailerons', 'spoilers']) {
          if (instructionControlSurfaces[kind].length === 0) {
            console.warn(`Instruction A320 model has no animated ${kind} surfaces`);
          }
        }
        model.updateWorldMatrix(true, true);
        for (const skeleton of modelSkeletons) skeleton.update();
        modelRoot.add(model);
        const rootPosition = aircraftRoot.position.clone();
        const rootQuaternion = aircraftRoot.quaternion.clone();
        const rootScale = aircraftRoot.scale.clone();
        aircraftRoot.position.set(0, 0, 0);
        aircraftRoot.quaternion.identity();
        aircraftRoot.scale.setScalar(1);
        model.updateWorldMatrix(true, true);
        for (const skeleton of modelSkeletons) skeleton.update();
        const aircraftBounds = new THREE.Box3().setFromObject(model, true);
        const aircraftSize = aircraftBounds.getSize(new THREE.Vector3());
        const aircraftCenter = aircraftBounds.getCenter(new THREE.Vector3());
        center.copy(aircraftCenter);
        instructionGearContactY = aircraftBounds.min.y;
        for (const { object } of instructionControlSurfaces.gear) {
          if (!/^(WheelmainTurn|NoseWheelTurn)/.test(object.name) || object.name.includes('_end_')) continue;
          const localPosition = aircraftRoot.worldToLocal(object.getWorldPosition(new THREE.Vector3()));
          if (object.name.startsWith('WheelmainTurn')) {
            instructionMainGearSupportX = instructionMainGearSupportX === null
              ? localPosition.x
              : Math.min(instructionMainGearSupportX, localPosition.x);
          } else {
            instructionNoseGearSupportX = instructionNoseGearSupportX === null
              ? localPosition.x
              : Math.max(instructionNoseGearSupportX, localPosition.x);
          }
        }
        instructionElevatorLength = aircraftSize.x;
        instructionElevatorFocus.set(
          aircraftBounds.min.x + aircraftSize.x * 0.04,
          aircraftBounds.min.y + aircraftSize.y * 0.32,
          aircraftCenter.z
        );
        groundY = INSTRUCTION_RUNWAY_SURFACE_Y - aircraftBounds.min.y;
        aircraftRoot.position.copy(rootPosition);
        aircraftRoot.quaternion.copy(rootQuaternion);
        aircraftRoot.scale.copy(rootScale);
        aircraftRoot.updateWorldMatrix(true, true);
      }
      if (isPlayModel) {
        modelRoot.add(model);
        const cockpitNode = model.getObjectByName('Cockpit');
        if (cockpitNode) {
          modelRoot.updateWorldMatrix(true, true);
          const cockpitCenter = new THREE.Box3().setFromObject(cockpitNode).getCenter(new THREE.Vector3());
          aircraftRoot.updateWorldMatrix(true, false);
          playCockpitPosition.copy(aircraftRoot.worldToLocal(cockpitCenter)).add(new THREE.Vector3(-1.3, 0.1, 0));
          playCockpitPositionFound = true;
        }
        model.traverse((object) => {
          if (!object.isMesh) return;
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          if (materials.some((material) => material.name === 'Fuselagem')) {
            playCockpitOccluders.push(object);
          }
        });
        updateCockpitOccluders();
      }

      if (isPlayModel) {
        const createFlame = () => {
          const geometry = new THREE.BufferGeometry();
          const positions = [];
          const colors = [];
          const indices = [];
          const length = 3.3;
          const maxRadius = 0.48;
          const axialSegments = 20;
          const radialLayers = 12;
          const radialSegments = 24;
          const blue = new THREE.Color(0x248cff);
          const transition = new THREE.Color(0xffc45c);
          const orange = new THREE.Color(0xff6428);
          const color = new THREE.Color();

          for (let layer = 0; layer < radialLayers; layer += 1) {
            const radialFraction = 0.18 + (layer / (radialLayers - 1)) * 0.82;
            if (radialFraction < 0.62) {
              color.copy(blue).lerp(transition, radialFraction / 0.62);
            } else {
              color.copy(transition).lerp(orange, (radialFraction - 0.62) / 0.38);
            }
            const layerStart = positions.length / 3;
            for (let step = 0; step <= axialSegments; step += 1) {
              const along = step / axialSegments;
              const radius = maxRadius * radialFraction * Math.pow(1 - along, 0.82);
              for (let segment = 0; segment <= radialSegments; segment += 1) {
                const angle = (segment / radialSegments) * Math.PI * 2;
                positions.push(Math.cos(angle) * radius, length * along, Math.sin(angle) * radius);
                colors.push(color.r, color.g, color.b);
                if (step < axialSegments && segment < radialSegments) {
                  const current = layerStart + step * (radialSegments + 1) + segment;
                  const next = current + radialSegments + 1;
                  indices.push(current, next, current + 1, next, next + 1, current + 1);
                }
              }
            }
          }

          geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
          geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
          geometry.setIndex(indices);
          geometry.computeVertexNormals();
          const material = new THREE.MeshBasicMaterial({
            vertexColors: true,
            transparent: true,
            opacity: 0.12,
            depthWrite: false,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
            toneMapped: false
          });
          const mesh = new THREE.Mesh(geometry, material);
          mesh.renderOrder = 2;
          return mesh;
        };
        for (const side of [-1, 1]) {
          const flameRoot = new THREE.Group();
          flameRoot.position.set(side * 1.55 - center.x, -0.3, -6.8 - center.z);
          flameRoot.rotation.x = -Math.PI / 2;
          const mesh = createFlame();
          flameRoot.add(mesh);
          playExhaustGroup.add(flameRoot);
          playExhaustFlames.push({ flameRoot, mesh, phase: side * 0.8 });
        }
      }

      aircraftProfiles[mode] = {
        center: center.clone(),
        length,
        halfLength,
        halfWidth,
        halfHeight,
        collisionRadius: Math.hypot(halfLength, halfWidth),
        groundY,
        playGroundOffset: playOffset
      };
      if (mode === 'instruction') {
        planeLoaded = true;
        createPlaneAirflow(model);
        createStallAircraft();
      } else {
        playExhaustGroup.visible = activeMode === 'play';
      }
      activateAircraftModel(activeMode);
      if (mode === 'instruction') {
        if (activeView === 'aoa') {
          aircraftRoot.visible = false;
          angleRoot.visible = true;
          stallAircraftPivot.visible = true;
        }
        updateCameraTargets();
      }
    }, undefined, (error) => console.error(`Could not load ${mode} aircraft model`, error));
  }

  function updateTurnPathGeometry() {
    const speed = 72;
    const bankRadians = THREE.MathUtils.degToRad(Math.max(turnBankAngle, 1));
    const turnRate = 9.81 * Math.tan(bankRadians) / speed;
    turnPathRadius = THREE.MathUtils.clamp(speed * 0.01 / turnRate, 5, 20);
    const points = Array.from({ length: 97 }, (_, index) => {
      const angle = index / 96 * Math.PI * 2;
      return new THREE.Vector3(
        turnPathRadius * Math.cos(angle),
        0,
        turnPathRadius * Math.sin(angle)
      );
    });
    const geometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points, true), 192, 0.1, 8, true);
    turnPath.geometry.dispose();
    turnPath.geometry = geometry;
  }

  function updateCameraTargets() {
    const panelWidth = activeMode === 'instruction' && ['aoa', 'turn'].includes(activeView)
      && container.clientWidth > 600
      ? Math.min(activeView === 'aoa' ? 330 : 310, container.clientWidth * 0.42)
      : 0;
    const aspect = Math.max((container.clientWidth - panelWidth) / Math.max(container.clientHeight, 1), 0.2);
    const fovScale = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const planeDistance = aircraftLength / (fovScale * aspect * 0.68);
    const centerY = planeLoaded ? planeCenter.y : 3.2;
    if (activeMode === 'play' && cockpitView) {
      if (playCockpitPositionFound) {
        playCockpitCameraPosition.copy(playCockpitPosition);
        playCockpitCameraPosition.x += 0.5;
        playCockpitCameraPosition.y += 0.25;
      } else {
        playCockpitCameraPosition.set(aircraftLength * 0.12, centerY + aircraftHalfHeight * 0.55, 0);
      }
      aircraftRoot.updateWorldMatrix(true, false);
      desiredCameraPosition.copy(aircraftRoot.localToWorld(playCockpitCameraPosition));
      aircraftRoot.getWorldQuaternion(aircraftWorldQuaternion);
      playCockpitForward.set(1, 0, 0).applyQuaternion(aircraftWorldQuaternion);
      desiredLookAt.copy(desiredCameraPosition).addScaledVector(playCockpitForward, Math.max(120, aircraftLength * 3));
    } else if (activeView === 'engine') {
      const engineBounds = downloadedEngineLoaded
        ? new THREE.Box3().setFromObject(downloadedEngineRoot)
        : null;
      const engineSize = engineBounds?.getSize(new THREE.Vector3());
      const distance = engineSize
        ? Math.max(engineSize.x / (fovScale * aspect * 0.68), engineSize.y / (fovScale * 0.7)) + engineSize.z * 0.4
        : (10 * engineRoot.scale.x) / (fovScale * aspect * 0.78);
      if (engineBounds) {
        desiredLookAt.copy(engineBounds.getCenter(new THREE.Vector3()));
        desiredLookAt.y -= engineSize.y * 0.13;
      } else desiredLookAt.copy(engineRoot.position);
      const orbitDistance = distance / engineOrbitZoom;
      const horizontalDistance = Math.cos(engineOrbitPitch) * orbitDistance;
      const cameraX = engineSize ? Math.sin(engineOrbitYaw) * horizontalDistance : 0;
      const cameraY = engineSize ? Math.sin(engineOrbitPitch) * orbitDistance : 0.35;
      const cameraZ = engineSize ? Math.cos(engineOrbitYaw) * horizontalDistance : Math.sqrt(Math.max(0.5, orbitDistance * orbitDistance - cameraY * cameraY));
      desiredCameraPosition.set(desiredLookAt.x + cameraX, desiredLookAt.y + cameraY, desiredLookAt.z + cameraZ);
    } else if (activeView === 'slats') {
      slatCameraFocus.copy(planeCenter);
      aircraftRoot.localToWorld(slatCameraFocus);
      slatFocusWorld.copy(slatLessonFocus);
      aircraftRoot.localToWorld(slatFocusWorld);
      desiredLookAt.copy(slatFocusWorld);
      slatCameraOffset.set(4, 11, Math.sign(slatLessonFocus.z || 1) * 13).applyQuaternion(slatBaseOrientation);
      desiredCameraPosition.copy(desiredLookAt).add(slatCameraOffset);
      desiredLookAt.x += slatCameraPan.x;
      desiredLookAt.y += slatCameraPan.y;
      desiredCameraPosition.x += slatCameraPan.x;
      desiredCameraPosition.y += slatCameraPan.y;
    } else if (activeView === 'elevator') {
      elevatorFocusLocal.copy(instructionElevatorFocus);
      desiredLookAt.copy(aircraftRoot.localToWorld(elevatorFocusLocal));
      elevatorCameraOffset
        .set(-instructionElevatorLength * 0.04, instructionElevatorLength * 0.05, instructionElevatorLength * 0.9)
        .applyQuaternion(aircraftRoot.quaternion);
      desiredCameraPosition.copy(desiredLookAt).add(elevatorCameraOffset);
    } else if (activeView === 'wing') {
      const aircraftCenter = planeCenter.clone();
      aircraftCenter.y = centerY;
      aircraftRoot.localToWorld(aircraftCenter);
      desiredLookAt.copy(aircraftCenter);
      const radius = Math.max(planeDistance, aircraftLength * 3);
      const baseYaw = 0;
      const basePitch = 0.14;
      const yaw = baseYaw + wingOrbitYaw;
      const pitch = THREE.MathUtils.clamp(basePitch + wingOrbitPitch, -0.35, 0.65);
      const horizontalRadius = Math.cos(pitch) * radius;
      desiredCameraPosition.set(
        desiredLookAt.x + Math.sin(yaw) * horizontalRadius,
        desiredLookAt.y + Math.sin(pitch) * radius,
        desiredLookAt.z + Math.cos(yaw) * horizontalRadius
      );
    } else if (activeView === 'cruise') {
      const shiftFraction = THREE.MathUtils.clamp(0.15 + (aspect - 0.46) * 0.2, 0.15, 0.35);
      const transitionShift = aircraftLength * shiftFraction * cruiseProgress;
      const cameraX = aircraftRoot.position.x + transitionShift;
      const cameraY = centerY + aircraftRoot.position.y;
      desiredLookAt.set(cameraX, cameraY, 0);
      desiredCameraPosition.set(cameraX + 5, cameraY + 1, planeDistance * 1.25);
    } else if (activeView === 'turn') {
      const startRightX = Math.sin(turnStartHeading);
      const startRightZ = Math.cos(turnStartHeading);
      turnCenter.set(
        turnStartPosition.x + turnDirection * startRightX * turnPathRadius,
        turnStartPosition.y + centerY - 3,
        turnStartPosition.z + turnDirection * startRightZ * turnPathRadius
      );
      turnPathGroup.position.copy(turnCenter);
      turnPathGroup.rotation.y = 0;
      desiredLookAt.copy(turnCenter);
      const chaseOffset = new THREE.Vector3(
        -planeDistance * 0.5,
        planeDistance * 0.4,
        planeDistance * 0.35
      );
      chaseOffset.multiplyScalar(0.95);
      desiredCameraPosition.copy(turnCenter).add(chaseOffset);
    } else if (activeView === 'aoa') {
      desiredLookAt.set(0, -1, 0);
      const aircraftDisplayLength = Math.min(aircraftLength * 0.18, 10);
      const aircraftDistance = aircraftDisplayLength / (fovScale * aspect * 0.58);
      const sceneDistance = 19 / fovScale;
      const distance = Math.max(aircraftDistance, sceneDistance);
      desiredCameraPosition.set(0, desiredLookAt.y + 0.6, distance);
    } else if (activeView === 'landing') {
      const landingLookAtX = aircraftRoot.position.x + aircraftLength * 0.18;
      const landingLookAtY = aircraftRoot.position.y + centerY - 1.5;
      desiredLookAt.set(landingLookAtX, landingLookAtY, 0);
      desiredCameraPosition.set(
        landingLookAtX - planeDistance * 0.82,
        landingLookAtY + planeDistance * 0.28,
        planeDistance * 0.22
      );
    } else if (activeView === 'takeoff') {
      const actionLookAtX = aircraftRoot.position.x + aircraftLength * 0.2;
      const actionLookAtY = aircraftRoot.position.y + centerY - 1.5;
      desiredLookAt.set(actionLookAtX, actionLookAtY, 0);
      desiredCameraPosition.set(
        actionLookAtX + planeDistance * 0.08,
        actionLookAtY + planeDistance * 0.12,
        planeDistance
      );
    } else {
      desiredLookAt.set(aircraftRoot.position.x, centerY + aircraftRoot.position.y - 0.2, 0);
      desiredCameraPosition.set(aircraftRoot.position.x + planeDistance * 0.08, centerY + aircraftRoot.position.y + planeDistance * 0.12, planeDistance);
    }
    if (activeMode === 'instruction' && activeView !== 'engine' && activeView !== 'wing' && activeView !== 'slats') {
      lessonCameraOffset.subVectors(desiredCameraPosition, desiredLookAt);
      lessonCameraSpherical.setFromVector3(lessonCameraOffset);
      lessonCameraSpherical.theta += lessonOrbitYaw;
      lessonCameraSpherical.phi = THREE.MathUtils.clamp(
        lessonCameraSpherical.phi - lessonOrbitPitch,
        0.08,
        Math.PI - 0.08
      );
      lessonCameraOffset.setFromSpherical(lessonCameraSpherical);
      desiredCameraPosition.copy(desiredLookAt).add(lessonCameraOffset);
    }
  }

  function toggleCockpitView() {
    if (activeMode !== 'play') return cockpitView;
    cockpitView = !cockpitView;
    updateCockpitOccluders();
    cockpitToggle.setAttribute('aria-pressed', String(cockpitView));
    cockpitToggle.textContent = cockpitView ? '追尾視角' : '駕駛艙視角';
    updateCameraTargets();
    return cockpitView;
  }

  function updateCockpitOccluders() {
    for (const mesh of playCockpitOccluders) mesh.visible = !cockpitView;
  }

  cockpitToggle.addEventListener('click', toggleCockpitView);

  function setView(view, options = {}) {
    const previousView = activeView;
    if (previousView === 'slats' && view !== 'slats') {
      aircraftRoot.quaternion.copy(slatBaseOrientation);
      slatLessonPitch = 0;
    }
    activeView = view;
    activeMode = options.mode || activeMode;
    loadAircraft(activeMode === 'play' ? PLAY_PLANE_URL : INSTRUCTION_PLANE_URL, activeMode);
    renderer.domElement.setAttribute(
      'aria-label',
      view === 'wing'
        ? '機翼與氣流近景；拖曳可旋轉視角，按 Q 返回'
        : view === 'elevator'
        ? '升降舵近景固定視角；使用課程按鈕切換狀態'
        : view === 'slats'
          ? '前緣縫翼近景；拖曳可有限度調整取景，使用課程按鈕切換狀態'
        : '互動式 3D 模型；拖曳可旋轉各課程的飛機或模型視角'
    );
    if (activeMode === 'instruction' && previousView !== view) {
      if (view === 'idle' || view === 'taxi') instructionFlapSetting = 0;
      else if (view === 'takeoff') instructionFlapSetting = Math.max(instructionFlapSetting, 2);
      else if (view === 'landing') instructionFlapSetting = Math.max(instructionFlapSetting, 2);
      else if (view === 'turn') instructionFlapSetting = 0;
      if (['idle', 'taxi', 'takeoff', 'landing'].includes(view)) instructionGearTarget = 0;
      else if (view === 'cruise' || view === 'flight') instructionGearTarget = 1;
    }
    if (view === 'wing' && previousView !== 'wing') {
      wingOrbitYaw = 0;
      wingOrbitPitch = 0;
    }
    if (view === 'slats' && previousView !== 'slats') {
      slatLessonDeployment = 0;
    slatLessonPhase = 0;
    lessonOrbitYaw = 0;
    lessonOrbitPitch = 0;
    slatCameraPan.set(0, 0);
    slatBaseOrientation.copy(aircraftRoot.quaternion);
    slatLessonPitch = 0;
    }
    if (view === 'elevator' && previousView !== 'elevator') {
      elevatorLessonDeflection = 0;
      lessonOrbitYaw = 0;
      lessonOrbitPitch = 0;
    }
    activateAircraftModel(activeMode);
    scene.fog = activeMode === 'play' ? playFog : null;
    scene.background = activeMode === 'play' ? playSkyTexture : new THREE.Color(BACKGROUND);
    raceHud.hidden = activeMode !== 'play';
    playFlightHud.hidden = activeMode !== 'play';
    cockpitToggle.hidden = activeMode !== 'play';
    if (activeMode !== 'play') {
      cockpitView = false;
      updateCockpitOccluders();
    }
    cockpitToggle.setAttribute('aria-pressed', String(cockpitView));
    cockpitToggle.textContent = cockpitView ? '追尾視角' : '駕駛艙視角';
    if (activeMode !== 'play') crashOverlay.hidden = true;
    if (activeMode !== 'play') targetFov = baseFov;
    if (Number.isFinite(options.throttle)) throttle = options.throttle;
    if (Number.isFinite(options.bank)) bank = options.bank;
    if (Number.isFinite(options.altitude)) altitude = options.altitude;
    landingUpdateCallback = options.onLandingUpdate || null;
    cruiseUpdateCallback = options.onCruiseUpdate || null;
    turnUpdateCallback = options.onTurnUpdate || null;
    if (Number.isFinite(options.turnBank)) turnBankAngle = THREE.MathUtils.clamp(options.turnBank, 0, 30);
    if (Number.isFinite(options.turnDirection)) turnDirection = Math.sign(options.turnDirection) || 1;
    if (view === 'takeoff' && previousView !== 'takeoff') {
      takeoffProgress = 0;
      aircraftRoot.position.set(0, aircraftGroundY, 0);
      aircraftRoot.rotation.set(0, 0, 0);
    }
    updateTurnPathGeometry();
    if (view === 'cruise' && previousView !== 'cruise') {
      cruiseProgress = 0;
      cruiseStartPosition.copy(aircraftRoot.position);
      cruiseStartQuaternion.copy(aircraftRoot.quaternion);
      cruiseTargetQuaternion.identity();
      aircraftRoot.scale.setScalar(1);
      cruiseRoot.scale.setScalar(0.02);
    }

    if (view === 'landing' && previousView !== 'landing') {
      landingProgress = 0;
      landingStartPosition.copy(aircraftRoot.position);
      landingStartRotation.copy(aircraftRoot.rotation);
      if (landingStartPosition.y <= aircraftGroundY + 1) landingStartPosition.y = aircraftGroundY + 8;
      landingTargetX = landingStartPosition.x + 48;
    }
    if (view === 'idle') {
      aircraftRoot.position.set(0, aircraftGroundY, 0);
      aircraftRoot.rotation.set(0, 0, 0);
    }

    const engineView = view === 'engine';
    const wingView = view === 'wing';
    const slatsView = view === 'slats';
    const angleView = view === 'aoa';
    const cruiseView = view === 'cruise';
    const landingView = view === 'landing';
    const turnView = view === 'turn';
    turnPathGroup.visible = turnView;
    if (activeMode === 'instruction' && previousView !== view) {
      lessonOrbitYaw = 0;
      lessonOrbitPitch = 0;
    }
    if (turnView && previousView !== 'turn') {
      turnElapsed = 0;
      turnStepMode = false;
      turnStepLimit = Infinity;
      turnPaused = false;
      turnHeading = aircraftRoot.rotation.y;
      turnStartHeading = turnHeading;
      turnStartPosition.copy(aircraftRoot.position);
      if (previousView !== 'cruise') {
        turnHeading = 0;
        turnStartHeading = 0;
        turnStartPosition.set(0, aircraftGroundY + 12, 0);
        aircraftRoot.position.copy(turnStartPosition);
        aircraftRoot.rotation.set(0, 0, 0);
      }
    }
    if (engineView) {
      engineAirflowEnabled = false;
      if (downloadedEngineAirflowGroup) downloadedEngineAirflowGroup.visible = false;
      engineOrbitYaw = 0;
      engineOrbitPitch = 0.28;
      engineOrbitZoom = 1.35;
      downloadedEngineStartTime = performance.now();
    }
    aircraftRoot.visible = !angleView && !engineView;
    playExhaustGroup.visible = activeMode === 'play' && view === 'flight';
    angleRoot.visible = angleView;
    stallAircraftPivot.visible = angleView && planeLoaded;
    cruiseRoot.visible = cruiseView;
    cruiseRoot.position.copy(aircraftRoot.position);
    if (engineView) {
      placeEngineOnAircraft();
      loadDownloadedEngine();
    }
    engineRoot.visible = engineView && engineLoaded;
    downloadedEngineRoot.visible = engineView && downloadedEngineLoaded;
    engineFillLight.visible = engineView;
    engineKeyLight.visible = engineView;
    runwayGroup.visible = !wingView && !slatsView && !engineView && !angleView && !turnView;
    runwayGroup.scale.setScalar(activeMode === 'play' ? PLAY_WORLD_SCALE : 1);
    runwayGroup.position.set(0, 0, 0);
    if (view === 'landing' && previousView !== 'landing') runwayGroup.scale.setScalar(0.02);
    runwayGroup.rotation.y = activeMode === 'play' ? initialHeading : 0;
    wingFlowGroup.visible = false;
    updateSlatFlowVisibility();
    engineFlowGroup.visible = engineView && engineLoaded && !downloadedEngineLoaded;
    playWorld.visible = view === 'flight';
    if (view === 'flight' && previousView !== 'flight') {
      aircraftRoot.scale.setScalar(PLAY_AIRFRAME_SCALE * PLAY_WORLD_SCALE);
      aircraftModel.scale.set(1, 1, 1);
      resetPlay();
    } else if (view !== 'flight') {
      aircraftRoot.scale.setScalar(1);
      aircraftModel.scale.set(1, 1, 1);
    }
    updateCameraTargets();
  }

  const explosionGroup = new THREE.Group();
  explosionGroup.visible = false;
  scene.add(explosionGroup);
  const explosionParticles = [];
  const explosionGeo = new THREE.SphereGeometry(0.5 * PLAY_WORLD_SCALE, 8, 6);
  for (let index = 0; index < 42; index += 1) {
    const mat = new THREE.MeshBasicMaterial({ color: index % 3 ? 0xff5a26 : 0xffc766, transparent: true });
    const mesh = new THREE.Mesh(explosionGeo, mat);
    explosionGroup.add(mesh);
    explosionParticles.push({ mesh, velocity: new THREE.Vector3() });
  }

  function crashPlay(reason = '飛行碰撞') {
    if (playCrashed) return;
    playCrashed = true;
    crashTime = performance.now();
    crashReasonLabel.textContent = reason;
    crashOverlay.hidden = false;
    explosionGroup.position.copy(aircraftRoot.position);
    explosionGroup.visible = true;
    aircraftRoot.visible = false;
    for (const p of explosionParticles) {
      p.mesh.position.set(0, 0, 0);
      p.mesh.material.opacity = 1;
      p.mesh.scale.setScalar(1);
      p.velocity.set((Math.random() - 0.5) * 30 * PLAY_WORLD_SCALE, (Math.random() * 22 + 4) * PLAY_WORLD_SCALE, (Math.random() - 0.5) * 30 * PLAY_WORLD_SCALE);
    }
  }

  function resetPlay() {
    playCrashed = false;
    explosionGroup.visible = false;
    crashOverlay.hidden = true;
    aircraftRoot.visible = true;
    aircraftRoot.scale.setScalar(PLAY_AIRFRAME_SCALE * PLAY_WORLD_SCALE);
    aircraftModel.scale.set(1, 1, 1);
    aircraftRoot.position.set(0, playGroundOffset * PLAY_WORLD_SCALE, 0);
    aircraftRoot.rotation.set(0, 0, 0);
    playX = 0;
    playY = 0;
    playZ = 0;
    playHeading = initialHeading;
    playPitch = 0;
    playRoll = 0;
    playSpeed = 0;
    playLanded = false;
    landingAutopilot = false;
    finalGateAutopilot = false;
    finalGateAutopilotElapsed = 0;
    nextGateIndex = 0;
    gatesPassed = 0;
    missedGates = 0;
    raceStartedAt = null;
    raceElapsed = 0;
    raceFinished = false;
    raceGateCount.textContent = '00';
    raceHud.querySelector('#race-gate-missed').textContent = '00';
    raceHud.querySelector('#race-timer').textContent = '00:00.00';
    for (const gate of gates) {
      gate.scored = false;
      gate.missed = false;
    }
    updatePlayInstruments();
  }

  crashOverlay.querySelector('#crash-restart').addEventListener('click', resetPlay);

  function updatePlayInstruments() {
    playFlightHud.querySelector('[data-play-value="altitude"]').textContent = Math.round(playY * 3.28084).toLocaleString();
    playFlightHud.querySelector('[data-play-value="speed"]').textContent = String(Math.round(playSpeed));
    playFlightHud.querySelector('[data-play-value="heading"]').textContent = String(Math.round(THREE.MathUtils.euclideanModulo(THREE.MathUtils.radToDeg(playHeading), 360))).padStart(3, '0');
    playFlightHud.querySelector('[data-play-value="pitch"]').textContent = String(Math.round(THREE.MathUtils.radToDeg(playPitch)));
    playFlightHud.querySelector('[data-play-value="bank"]').textContent = String(Math.round(THREE.MathUtils.radToDeg(playRoll)));
    playFlightHud.querySelector('.play-assist-badge').hidden = playDifficulty !== 'easy';
  }

  function updatePlay(delta, now) {
    if (document.body.classList.contains('paused')) return;
    const input = window.playInput || { pitch: 0, roll: 0, throttle: 0 };
    if (playCrashed) {
      const t = (now - crashTime) / 1000;
      for (const p of explosionParticles) {
        p.mesh.position.addScaledVector(p.velocity, delta);
        p.velocity.y -= 22 * PLAY_WORLD_SCALE * delta;
        p.mesh.material.opacity = Math.max(0, 1 - t / 3.2);
        p.mesh.scale.setScalar(1 + t * 1.8);
      }
      if (t > 3.2) return;
      return;
    }
    previousAircraftPosition.set(playX, playY, playZ);
    landingOffset.set(playX - landingRunwayX, 0, playZ - landingRunwayZ);
    const runwayAlongAtStart = landingOffset.dot(landingRunwayDirection);
    const runwayAcrossAtStart = landingOffset.dot(landingRunwaySide);
    const runwayDistanceAtStart = Math.hypot(
      Math.max(Math.abs(runwayAlongAtStart) - LANDING_RUNWAY_LENGTH / 2, 0),
      Math.max(Math.abs(runwayAcrossAtStart) - LANDING_RUNWAY_WIDTH / 2, 0)
    );
    if (!playLanded && raceFinished && !landingAutopilot && !finalGateAutopilot && runwayDistanceAtStart <= LANDING_CAPTURE_DISTANCE) {
      landingAutopilot = true;
    }
    if (finalGateAutopilot) {
      const alignDuration = 2.2;
      const totalDuration = 2.75;
      const finishGate = gates[gates.length - 1];
      finalGateAutopilotElapsed = Math.min(totalDuration, finalGateAutopilotElapsed + delta);
      if (finalGateAutopilotElapsed <= alignDuration) {
        const progress = finalGateAutopilotElapsed / alignDuration;
        playX = THREE.MathUtils.lerp(finalGateStart.x, finalGateApproach.x, progress);
        playY = THREE.MathUtils.lerp(finalGateStart.y, finalGateApproach.y, progress);
        playZ = THREE.MathUtils.lerp(finalGateStart.z, finalGateApproach.z, progress);
      } else {
        const progress = (finalGateAutopilotElapsed - alignDuration) / (totalDuration - alignDuration);
        playX = THREE.MathUtils.lerp(finalGateApproach.x, finalGateExit.x, progress);
        playY = THREE.MathUtils.lerp(finalGateApproach.y, finalGateExit.y, progress);
        playZ = THREE.MathUtils.lerp(finalGateApproach.z, finalGateExit.z, progress);
      }
      playHeading = Math.atan2(-finishGate.direction.z, finishGate.direction.x);
      playPitch = 0;
      playRoll = 0;
      aircraftRoot.position.set(playX * PLAY_WORLD_SCALE, (playGroundOffset + playY) * PLAY_WORLD_SCALE, playZ * PLAY_WORLD_SCALE);
      aircraftRoot.quaternion.copy(yawOrientation.setFromAxisAngle(worldVerticalAxis, playHeading));
      if (finalGateAutopilotElapsed >= totalDuration) {
        finalGateAutopilot = false;
        landingAutopilot = true;
      }
    } else if (playLanded) {
      const landingThrottle = input.throttle || 0;
      playPitch = 0;
      playRoll = 0;
      playSpeed = landingThrottle > 0
        ? Math.min(55, playSpeed + landingThrottle * 24 * delta)
        : Math.max(0, playSpeed - 34 * delta);
      playX += Math.cos(playHeading) * playSpeed * delta;
      playZ -= Math.sin(playHeading) * playSpeed * delta;
      aircraftRoot.position.set(playX * PLAY_WORLD_SCALE, playGroundOffset * PLAY_WORLD_SCALE, playZ * PLAY_WORLD_SCALE);
      aircraftRoot.rotation.y = playHeading;
      aircraftRoot.rotation.x = 0;
      aircraftRoot.rotation.z = 0;
    } else if (landingAutopilot) {
      const landingTargetAlong = THREE.MathUtils.clamp(
        runwayAlongAtStart,
        -LANDING_RUNWAY_LENGTH / 2 + 180,
        LANDING_RUNWAY_LENGTH / 2 - 180
      );
      const targetX = landingRunwayX + landingRunwayDirection.x * landingTargetAlong;
      const targetZ = landingRunwayZ + landingRunwayDirection.z * landingTargetAlong;
      const targetDx = targetX - playX;
      const targetDz = targetZ - playZ;
      const targetDistance = Math.hypot(targetDx, targetDz);
      const targetHeading = targetDistance > 80
        ? Math.atan2(-targetDz, targetDx)
        : Math.atan2(-landingRunwayDirection.z, landingRunwayDirection.x);
      const headingError = THREE.MathUtils.euclideanModulo(targetHeading - playHeading + Math.PI, Math.PI * 2) - Math.PI;
      const headingStep = THREE.MathUtils.clamp(headingError, -0.65 * delta, 0.65 * delta);
      playHeading += headingStep;
      playRoll = THREE.MathUtils.clamp(-headingStep / Math.max(delta, 0.001) / 0.95, -0.32, 0.32);
      playSpeed += THREE.MathUtils.clamp(LANDING_APPROACH_SPEED - playSpeed, -24 * delta, 24 * delta);
      playX += Math.cos(playHeading) * playSpeed * delta;
      playZ -= Math.sin(playHeading) * playSpeed * delta;

      landingOffset.set(playX - landingRunwayX, 0, playZ - landingRunwayZ);
      const runwayAlong = landingOffset.dot(landingRunwayDirection);
      const runwayAcross = landingOffset.dot(landingRunwaySide);
      const onLandingRunway = Math.abs(runwayAlong) < LANDING_RUNWAY_LENGTH / 2 - 20
        && Math.abs(runwayAcross) < LANDING_RUNWAY_WIDTH / 2 - 10;
      const descentRate = Math.min(18, Math.max(5, playY * 0.2));
      playY = onLandingRunway
        ? Math.max(0, playY - descentRate * delta)
        : Math.max(4, playY - descentRate * delta);
      if (onLandingRunway && playY <= 0.02) {
        playLanded = true;
        landingAutopilot = false;
        playPitch = 0;
        playRoll = 0;
      } else {
        playPitch = onLandingRunway ? -0.04 : -0.1;
      }

      aircraftRoot.position.set(playX * PLAY_WORLD_SCALE, (playGroundOffset + playY) * PLAY_WORLD_SCALE, playZ * PLAY_WORLD_SCALE);
      aircraftRoot.quaternion.copy(yawOrientation.setFromAxisAngle(worldVerticalAxis, playHeading));
      aircraftRoot.quaternion.multiply(pitchOrientation.setFromAxisAngle(localPitchAxis, playPitch));
      aircraftRoot.quaternion.multiply(rollOrientation.setFromAxisAngle(localRollAxis, playRoll));
    } else {
      const pitchInput = input.pitch || 0;
      const rollInput = input.roll || 0;
      const throttleInput = input.throttle || 0;
      const speedLimit = playDifficulty === 'easy' ? 250 : PLAY_MAX_SPEED;
      playSpeed = THREE.MathUtils.clamp(playSpeed + throttleInput * 20 * delta - 4.5 * delta, 0, speedLimit);
      if (throttleInput === 0) playSpeed = Math.max(0, playSpeed - 8 * delta);

      playHeading -= Math.sin(playRoll) * 0.95 * delta;
      playX += Math.cos(playHeading) * playSpeed * delta;
      playZ -= Math.sin(playHeading) * playSpeed * delta;

      const onGround = playY <= 0.02;
      const takeoffPhase = playY < 18 && playSpeed >= TAKEOFF_ROTATION_SPEED;
      const rotationProgress = THREE.MathUtils.clamp((playSpeed - TAKEOFF_ROTATION_SPEED) / 45, 0, 1);
      const pitchTarget = onGround || takeoffPhase
        ? (0.075 + Math.max(0, pitchInput) * 0.03) * rotationProgress
        : pitchInput * 0.3;
      const rollTarget = rollInput * 0.72;
      const pitchResponse = onGround ? 0.8 : takeoffPhase ? 1.2 : 3.5;
      playPitch += (pitchTarget - playPitch) * (1 - Math.exp(-delta * pitchResponse));
      playRoll += (rollTarget - playRoll) * (1 - Math.exp(-delta * 4));
      if (onGround) playPitch = Math.max(0, playPitch);
      playY = THREE.MathUtils.clamp(playY + Math.sin(playPitch) * playSpeed * delta, 0, 420);

      aircraftRoot.position.set(playX * PLAY_WORLD_SCALE, (playGroundOffset + playY) * PLAY_WORLD_SCALE, playZ * PLAY_WORLD_SCALE);
      aircraftRoot.quaternion.copy(yawOrientation.setFromAxisAngle(worldVerticalAxis, playHeading));
      aircraftRoot.quaternion.multiply(pitchOrientation.setFromAxisAngle(localPitchAxis, playPitch));
      aircraftRoot.quaternion.multiply(rollOrientation.setFromAxisAngle(localRollAxis, playRoll));

      if (playY <= -1.5) {
        crashPlay('飛行高度過低');
      }
      if (playY <= 0.02) {
        landingOffset.set(playX - landingRunwayX, 0, playZ - landingRunwayZ);
        const runwayAlong = landingOffset.dot(landingRunwayDirection);
        const runwayAcross = landingOffset.dot(landingRunwaySide);
        const onLandingRunway = Math.abs(runwayAlong) < LANDING_RUNWAY_LENGTH / 2 && Math.abs(runwayAcross) < LANDING_RUNWAY_WIDTH / 2;
        const nearLandingRunway = Math.abs(runwayAlong) < LANDING_RUNWAY_LENGTH / 2 + 400
          && Math.abs(runwayAcross) < LANDING_RUNWAY_WIDTH / 2 + 400;
        const takeoffRunwayAlong = playX * Math.cos(initialHeading) - playZ * Math.sin(initialHeading);
        const takeoffRunwayAcross = playX * Math.sin(initialHeading) + playZ * Math.cos(initialHeading);
        const onTakeoffRunway = Math.abs(takeoffRunwayAlong) < TAKEOFF_RUNWAY_LENGTH / 2
          && Math.abs(takeoffRunwayAcross) < TAKEOFF_RUNWAY_WIDTH / 2;
        const overSea = playX >= sea.position.x - seaWidth / 2
          && playX <= sea.position.x + seaWidth / 2
          && Math.abs(playZ) <= seaDepth / 2;
        if (onLandingRunway) {
          if (playSpeed <= 170) playLanded = true;
          else crashPlay('接地速度過高');
        } else if (nearLandingRunway) crashPlay('未對準跑道');
        else if (overSea && !onTakeoffRunway) crashPlay('撞上海面');
        else if (!onTakeoffRunway) crashPlay('未對準跑道');
      }
      const travelX = playX - previousAircraftPosition.x;
      const travelY = playY - previousAircraftPosition.y;
      const travelZ = playZ - previousAircraftPosition.z;
      const collisionSteps = Math.max(1, Math.ceil(Math.hypot(travelX, travelY, travelZ) / 4));
      for (const mountain of mountains) {
        for (let step = 0; step <= collisionSteps; step += 1) {
          const progress = step / collisionSteps;
          const sampleX = previousAircraftPosition.x + travelX * progress;
          const sampleY = previousAircraftPosition.y + travelY * progress;
          const sampleZ = previousAircraftPosition.z + travelZ * progress;
          const dx = sampleX - mountain.x;
          const dz = sampleZ - mountain.z;
          const relativeHeight = THREE.MathUtils.clamp((sampleY - aircraftHalfHeight + 3) / mountain.h, 0, 1);
          const mountainRadiusAtHeight = mountain.r * (1 - relativeHeight * (mountain.roundedCrown ? 0.46 : 1));
          if (dx * dx + dz * dz < (mountainRadiusAtHeight + aircraftCollisionRadius) ** 2
            && sampleY < mountain.h - 3 + aircraftHalfHeight) {
            crashPlay('撞上山體');
            break;
          }
        }
        if (playCrashed) break;
      }
      if (playCrashed) return;
      for (let step = 0; step <= collisionSteps; step += 1) {
        const progress = step / collisionSteps;
        const sampleX = previousAircraftPosition.x + travelX * progress;
        const sampleY = previousAircraftPosition.y + travelY * progress;
        const sampleZ = previousAircraftPosition.z + travelZ * progress;
        const routeProgress = THREE.MathUtils.clamp(sampleX / canyonEndX, 0, 1);
        const routeCenter = canyonRoute.getPointAt(routeProgress);
        const routeTangent = canyonRoute.getTangentAt(routeProgress).setY(0).normalize();
        const routeSide = new THREE.Vector3(-routeTangent.z, 0, routeTangent.x);
        const signedOffset = (sampleX - routeCenter.x) * routeSide.x + (sampleZ - routeCenter.z) * routeSide.z;
        let wallHeight = 0;
        for (let edge = -1; edge <= 1; edge += 1) {
          const offset = signedOffset + edge * aircraftCollisionRadius;
          const canyonSide = offset < 0 ? -1 : 1;
          const distance = Math.abs(offset);
          const nearWallHeight = ridgeHeightAt(distance, 105, 520, 250, routeProgress, canyonSide < 0 ? 0.2 : 1.7);
          const farWallHeight = ridgeHeightAt(distance, 500, 1450, 480, routeProgress, canyonSide < 0 ? 2.6 : 4.1);
          wallHeight = Math.max(wallHeight, nearWallHeight, farWallHeight);
        }
        if (sampleY + aircraftHalfHeight < wallHeight - 3) {
          crashPlay('撞上峽谷岩壁');
          break;
        }
      }
      if (playCrashed) return;
      if (playX > canyonEndX + 450 && !playLanded) crashPlay('飛出航線');
      if (playCrashed) return;
    }

    for (const gate of gates) {
      if (gate.scored || gate.missed) continue;
      gateOffset.copy(previousAircraftPosition).sub(gate.position);
      const previousSide = gateOffset.dot(gate.direction);
      gateCrossingPoint.set(playX, playY, playZ);
      gateOffset.copy(gateCrossingPoint).sub(gate.position);
      const currentSide = gateOffset.dot(gate.direction);
      if (previousSide * currentSide <= 0 && previousSide !== currentSide) {
        if (raceStartedAt === null) raceStartedAt = now;
        const crossingProgress = previousSide / (previousSide - currentSide);
        gateOffset.copy(previousAircraftPosition).lerp(gateCrossingPoint, crossingProgress).sub(gate.position);
        gateRight.set(-gate.direction.z, 0, gate.direction.x).normalize();
        const lateral = Math.abs(gateOffset.dot(gateRight));
        const gateRadius = gate.radius * (playDifficulty === 'easy' ? 1.14 : 1);
        if (Math.hypot(lateral, gateOffset.y) <= gateRadius) {
          gate.scored = true;
          gatesPassed += 1;
          raceGateCount.textContent = String(gatesPassed).padStart(2, '0');
          if (gate.finish && raceStartedAt !== null) {
            raceElapsed = now - raceStartedAt;
            raceFinished = true;
          } else if (gatesPassed >= gates.length - 1) {
            const finishGate = gates[gates.length - 1];
            finalGateStart.set(playX, playY, playZ);
            finalGateApproach.copy(finishGate.position).addScaledVector(finishGate.direction, -14);
            finalGateApproach.y = 0;
            finalGateExit.copy(finishGate.position).addScaledVector(finishGate.direction, 18);
            finalGateExit.y = 0;
            finalGateAutopilotElapsed = 0;
            finalGateAutopilot = true;
          }
        } else {
          gate.missed = true;
          missedGates += 1;
          raceHud.querySelector('#race-gate-missed').textContent = String(missedGates).padStart(2, '0');
        }
        while (nextGateIndex < gates.length && (gates[nextGateIndex].scored || gates[nextGateIndex].missed)) nextGateIndex += 1;
      }
    }

    if (cockpitView) {
      updateCameraTargets();
    } else {
      const aspect = Math.max(container.clientWidth / Math.max(container.clientHeight, 1), 0.2);
      const portraitScale = THREE.MathUtils.clamp(1 / Math.max(aspect, 0.55), 1, 1.8);
      cameraLocalOffset.set(-52 * PLAY_WORLD_SCALE * portraitScale, 22 * PLAY_WORLD_SCALE * portraitScale, 0);
      cameraLookOffset.set(24 * PLAY_WORLD_SCALE * portraitScale, 5 * PLAY_WORLD_SCALE * portraitScale, 0);
      aircraftRoot.updateMatrixWorld();
      aircraftRoot.getWorldQuaternion(aircraftWorldQuaternion);
      if (playY < 20) {
        const cameraBackX = Math.cos(playHeading) * cameraLocalOffset.x;
        const cameraBackZ = -Math.sin(playHeading) * cameraLocalOffset.x;
        desiredCameraPosition.set(
          aircraftRoot.position.x + cameraBackX,
          aircraftRoot.position.y + cameraLocalOffset.y,
          aircraftRoot.position.z + cameraBackZ
        );
        desiredLookAt.set(
          aircraftRoot.position.x + Math.cos(playHeading) * cameraLookOffset.x,
          aircraftRoot.position.y + cameraLookOffset.y,
          aircraftRoot.position.z - Math.sin(playHeading) * cameraLookOffset.x
        );
      } else {
        desiredCameraPosition.copy(cameraLocalOffset)
          .applyQuaternion(yawOrientation.setFromAxisAngle(worldVerticalAxis, playHeading))
          .add(aircraftRoot.position);
        desiredLookAt.copy(cameraLookOffset)
          .applyQuaternion(yawOrientation.setFromAxisAngle(worldVerticalAxis, playHeading))
          .add(aircraftRoot.position);
      }
    }
    const speedLimit = playDifficulty === 'easy' ? 250 : PLAY_MAX_SPEED;
    targetFov = baseFov + THREE.MathUtils.clamp(playSpeed / speedLimit, 0, 1) * 13;
    updatePlayInstruments();
  }

  function updateRaceEffects(delta, now) {
    if (raceStartedAt !== null && !raceFinished) raceElapsed = now - raceStartedAt;
    const totalCentiseconds = Math.floor(raceElapsed / 10);
    const minutes = Math.floor(totalCentiseconds / 6000);
    const seconds = Math.floor(totalCentiseconds / 100) % 60;
    const centiseconds = totalCentiseconds % 100;
    raceHud.querySelector('#race-timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`;
    for (let index = 0; index < gates.length; index += 1) {
      const gateGroup = gateCourse.children[index];
      const active = index === nextGateIndex;
      const completed = gates[index].scored;
      const missed = gates[index].missed;
      const outer = gateGroup.children[0];
      const inner = gateGroup.children[1];
      const pulse = 0.82 + Math.sin(now * 0.004 + index * 0.7) * 0.18;
      outer.material.color.setHex(completed ? 0x69e69a : missed ? 0xe96b69 : active ? (gates[index].finish ? 0xffcf72 : 0xffad42) : 0x668fa0);
      outer.material.opacity = (active ? 1 : 0.42) * pulse;
      inner.material.color.setHex(completed ? 0xc4f0d2 : missed ? 0xf5c0b9 : active ? (gates[index].finish ? 0xffffff : 0xfff1c4) : 0xc1dbe0);
      inner.material.opacity = (active ? 1 : 0.62) * pulse;
    }

    const streakIntensity = THREE.MathUtils.clamp((playSpeed - 35) / 145, 0, 0.62);
    speedStreakOverlay.hidden = activeMode !== 'play' || streakIntensity < 0.02;
    speedStreakOverlay.style.setProperty('--streak-opacity', streakIntensity.toFixed(2));
    speedStreakOverlay.style.animationDuration = `${Math.max(0.25, 1.5 - playSpeed / 250)}s`;
  }

  function resize() {
    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    updateCameraTargets();
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  window.addEventListener('resize', resize);
  resize();

  renderer.domElement.addEventListener('pointerdown', (event) => {
    if (activeView === 'engine') enginePointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
    else if (activeView === 'wing') wingPointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
    else if (activeMode === 'instruction' && activeView !== 'elevator') lessonPointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
    else return;
    event.preventDefault();
    renderer.domElement.setPointerCapture(event.pointerId);
    renderer.domElement.focus({ preventScroll: true });
    renderer.domElement.classList.add('is-dragging');
  });
  renderer.domElement.addEventListener('pointermove', (event) => {
    if (enginePointer?.id === event.pointerId) {
      engineOrbitYaw -= (event.clientX - enginePointer.x) * 0.006;
      engineOrbitPitch = THREE.MathUtils.clamp(engineOrbitPitch + (event.clientY - enginePointer.y) * 0.006, -1.25, 1.25);
      enginePointer.x = event.clientX;
      enginePointer.y = event.clientY;
    } else if (wingPointer?.id === event.pointerId) {
      wingOrbitYaw -= (event.clientX - wingPointer.x) * 0.006;
      wingOrbitPitch = THREE.MathUtils.clamp(wingOrbitPitch + (event.clientY - wingPointer.y) * 0.006, -0.8, 0.95);
      wingPointer.x = event.clientX;
      wingPointer.y = event.clientY;
    } else if (lessonPointer?.id === event.pointerId) {
      const isElevatorLesson = activeView === 'elevator';
      const isSlatLesson = activeView === 'slats';
      if (isSlatLesson) {
        slatCameraPan.x = THREE.MathUtils.clamp(slatCameraPan.x - (event.clientX - lessonPointer.x) * 0.05, -2.4, 2.4);
        slatCameraPan.y = THREE.MathUtils.clamp(slatCameraPan.y + (event.clientY - lessonPointer.y) * 0.05, -1.5, 1.5);
        lessonPointer.x = event.clientX;
        lessonPointer.y = event.clientY;
        updateCameraTargets();
        return;
      }
      lessonOrbitYaw = THREE.MathUtils.clamp(
        lessonOrbitYaw - (event.clientX - lessonPointer.x) * 0.006,
        isElevatorLesson ? -0.55 : -Infinity,
        isElevatorLesson ? 0.55 : Infinity
      );
      lessonOrbitPitch = THREE.MathUtils.clamp(
        lessonOrbitPitch + (event.clientY - lessonPointer.y) * 0.006,
        isElevatorLesson ? -0.35 : -1.1,
        isElevatorLesson ? 0.35 : 1.1
      );
      lessonPointer.x = event.clientX;
      lessonPointer.y = event.clientY;
    } else return;
    updateCameraTargets();
  });
  const finishEnginePointer = (event) => {
    if (enginePointer?.id === event.pointerId) enginePointer = null;
    if (wingPointer?.id === event.pointerId) wingPointer = null;
    if (lessonPointer?.id === event.pointerId) lessonPointer = null;
    renderer.domElement.classList.remove('is-dragging');
    if (renderer.domElement.hasPointerCapture(event.pointerId)) renderer.domElement.releasePointerCapture(event.pointerId);
  };
  renderer.domElement.addEventListener('pointerup', finishEnginePointer);
  renderer.domElement.addEventListener('pointercancel', finishEnginePointer);
  renderer.domElement.addEventListener('lostpointercapture', finishEnginePointer);
  renderer.domElement.addEventListener('wheel', (event) => {
    if (activeView !== 'engine') return;
    event.preventDefault();
    engineOrbitZoom = THREE.MathUtils.clamp(engineOrbitZoom * Math.exp(-event.deltaY * 0.001), 0.68, 1.65);
    updateCameraTargets();
  }, { passive: false });
  function updateInstructionFlight(delta) {
    if (activeMode !== 'instruction') return;
    const flightInProgress = (
      (activeView === 'takeoff' && takeoffProgress < 1)
      || (activeView === 'cruise' && cruiseProgress < 1)
      || (activeView === 'landing' && landingProgress < 1)
      || activeView === 'turn'
    );
    const groundControlAllowed = activeView === 'taxi'
      || (activeView === 'landing' && landingProgress >= 0.9);
    const bankInput = activeView === 'turn'
      ? turnDirection * THREE.MathUtils.clamp(turnBankAngle / 30, 0, 1)
      : 0;
    const rudderInput = activeView === 'turn'
      ? turnDirection * THREE.MathUtils.clamp(turnBankAngle / 30, 0, 1) * 0.45
      : instructionControls.rudder;
    const elevatorTarget = activeView === 'elevator'
      ? elevatorLessonDeflection
      : activeView === 'takeoff'
        ? THREE.MathUtils.smoothstep(takeoffProgress, 0.44, 0.62) * 0.9
        : activeView === 'landing'
          ? THREE.MathUtils.smoothstep(landingProgress, 0.68, 0.83) * 0.85
          : 0;
    const aileronInput = activeView === 'turn'
      ? -turnDirection * THREE.MathUtils.smoothstep(0, 0.55, turnElapsed)
      : 0;
    const alpha = THREE.MathUtils.clamp(4 + instructionControls.pitch * 9, -8, 28);
    const airspeed = activeView === 'takeoff'
      ? 40 + 90 * takeoffProgress
      : activeView === 'landing' ? 112 - 42 * landingProgress
        : activeView === 'taxi' ? 18 : activeView === 'turn' ? 86 : 100;
    const dynamicPressure = (airspeed / 90) ** 2;
    const flapFraction = activeView === 'landing'
      ? instructionFlapSetting / 2
      : activeView === 'takeoff' ? instructionFlapSetting / 2 : 0;
    if (activeView === 'taxi' || activeView === 'idle' || activeView === 'landing') {
      instructionGearTarget = 0;
    } else if (activeView === 'takeoff') {
      instructionGearTarget = THREE.MathUtils.clamp((takeoffProgress - 0.68) / 0.22, 0, 1);
    } else if (activeView === 'cruise' || activeView === 'flight' || activeView === 'turn') {
      instructionGearTarget = 1;
    }
    instructionSurfacePosition.gear = THREE.MathUtils.damp(
      instructionSurfacePosition.gear,
      instructionGearTarget,
      4.2,
      delta
    );
    const takeoffSlatDeployment = activeView === 'takeoff'
      ? THREE.MathUtils.smoothstep(takeoffProgress, 0.04, 0.28)
      : 0;
    const landingSlatDeployment = activeView === 'landing'
      ? THREE.MathUtils.smoothstep(landingProgress, 0.1, 0.36)
      : 0;
    const slatTarget = Math.max(
      activeView === 'slats'
        ? slatLessonDeployment
        : Math.max(
          takeoffSlatDeployment,
          landingSlatDeployment,
          ['takeoff', 'landing'].includes(activeView) ? THREE.MathUtils.clamp((alpha - 9) / 8, 0, 1) : 0
        )
    );
    const spoilerTarget = activeView === 'landing'
      ? Math.max(
        instructionControls.spoilers ? 1 : 0,
        landingProgress >= 0.93 ? THREE.MathUtils.clamp((landingProgress - 0.93) / 0.07, 0, 1) : 0
      )
      : 0;
    const reverserTarget = groundControlAllowed && instructionControls.reverser ? 1 : 0;
    const slat = THREE.MathUtils.damp(instructionSurfacePosition.slat, slatTarget, 4, delta);
    const spoiler = THREE.MathUtils.damp(instructionSurfacePosition.spoiler, spoilerTarget, 5, delta);
    const stallAngle = 15 + slat * 7;
    const stallLoss = THREE.MathUtils.clamp((alpha - stallAngle) / 12, 0, 1) * 0.65;
    const liftCoefficient = Math.max(0.08, 0.78 + alpha * 0.025 + flapFraction * 0.2 + slat * 0.1);
    instructionLiftRatio = THREE.MathUtils.clamp(
      dynamicPressure * liftCoefficient / 0.78 * (1 - stallLoss) * (1 - spoiler * 0.78),
      0,
      2
    );
    instructionDrag = dynamicPressure * (
      0.018 + flapFraction * 0.028 + spoiler * 0.22
      + Math.abs(instructionSideslip) * 0.035 + reverserTarget * 0.18
    );
    const adverseYaw = bankInput * Math.abs(bankInput) * dynamicPressure * 0.11;
    const rudderYaw = rudderInput * THREE.MathUtils.clamp(airspeed / 90, 0.2, 1.4) * 0.24;
    instructionSideslip = THREE.MathUtils.clamp(
      instructionSideslip + (adverseYaw - rudderYaw - instructionSideslip * 1.8) * delta,
      -0.8,
      0.8
    );

    const targets = {
      aileron: aileronInput,
      inboardFlapLeft: flapFraction,
      inboardFlapRight: flapFraction,
      outboardFlap: flapFraction,
      slat,
      spoiler,
      reverser: reverserTarget
    };
    for (const [key, target] of Object.entries(targets)) {
      const retractForTurn = activeView === 'turn'
        && ['inboardFlapLeft', 'inboardFlapRight', 'outboardFlap', 'slat'].includes(key);
      instructionSurfacePosition[key] = retractForTurn
        ? 0
        : THREE.MathUtils.damp(instructionSurfacePosition[key], target, 7, delta);
    }
    instructionSurfacePosition.elevator = THREE.MathUtils.damp(
      instructionSurfacePosition.elevator,
      elevatorTarget,
      7,
      delta
    );
    for (const uniform of instructionElevatorUniforms) {
      uniform.value = instructionSurfacePosition.elevator;
    }
    instructionSurfacePosition.rudder = THREE.MathUtils.damp(
      instructionSurfacePosition.rudder,
      rudderInput,
      7,
      delta
    );
    for (const uniform of instructionRudderUniforms) {
      uniform.value = instructionSurfacePosition.rudder;
    }
    updateSlatFlowVisibility();
    const applyRigPose = (surfaces, amount, differential = false) => {
      for (const surface of surfaces) {
        const sideAmount = differential
          ? surface.side
          : 1;
        const blend = THREE.MathUtils.clamp(amount * sideAmount, -1, 1);
        surface.object.position.copy(surface.restPosition).lerp(surface.targetPosition, blend);
        const deltaRotation = surface.restRotation.clone().invert().multiply(surface.targetRotation);
        if (differential) {
          if (deltaRotation.w < 0) {
            deltaRotation.set(-deltaRotation.x, -deltaRotation.y, -deltaRotation.z, -deltaRotation.w);
          }
          const axis = new THREE.Vector3(deltaRotation.x, deltaRotation.y, deltaRotation.z).normalize();
          const angle = 2 * Math.atan2(
            Math.hypot(deltaRotation.x, deltaRotation.y, deltaRotation.z),
            deltaRotation.w
          );
          deltaRotation.setFromAxisAngle(axis, angle * blend * 2.2);
          surface.object.quaternion.copy(surface.restRotation).multiply(deltaRotation);
          continue;
        }
        if (blend < 0) deltaRotation.invert();
        surface.object.quaternion.copy(surface.restRotation).multiply(
          new THREE.Quaternion().slerp(deltaRotation, Math.abs(blend))
        );
      }
    };
    applyRigPose(instructionControlSurfaces.ailerons, instructionSurfacePosition.aileron, true);
    applyRigPose(instructionControlSurfaces.inboardFlapsLeft, instructionSurfacePosition.inboardFlapLeft);
    applyRigPose(instructionControlSurfaces.inboardFlapsRight, instructionSurfacePosition.inboardFlapRight);
    applyRigPose(instructionControlSurfaces.outboardFlaps, instructionSurfacePosition.outboardFlap);
    applyRigPose(instructionControlSurfaces.slats, instructionSurfacePosition.slat);
    applyRigPose(instructionControlSurfaces.spoilers, instructionSurfacePosition.spoiler);
    const wheelsOnGround = activeView === 'taxi'
      || (activeView === 'takeoff' && takeoffProgress < 0.68)
      || (activeView === 'landing' && landingProgress >= 0.93);
    const landingRollout = activeView === 'landing'
      ? 1 - THREE.MathUtils.smoothstep(landingProgress, 0.93, 1)
      : 1;
    instructionWheelSpinAngle = (
      instructionWheelSpinAngle
      + delta * (wheelsOnGround ? 7.5 * instructionGroundSpeed * landingRollout : 0)
    ) % (Math.PI * 2);
    for (const { object, downPose, upPose } of instructionControlSurfaces.gear) {
      const amount = instructionSurfacePosition.gear;
      object.position.lerpVectors(downPose.position, upPose.position, amount);
      object.quaternion.copy(downPose.quaternion).slerp(upPose.quaternion, amount);
      if (/^(WheelmainTurn|NoseWheelTurn)/.test(object.name) && !object.name.includes('_end_')) {
        const wheelDirection = object.name.startsWith('NoseWheelTurn') ? 1 : -1;
        object.quaternion.multiply(
          instructionWheelSpinOrientation.setFromAxisAngle(
            instructionWheelSpinAxis,
            wheelDirection * instructionWheelSpinAngle
          )
        );
      }
      object.scale.lerpVectors(downPose.scale, upPose.scale, amount);
    }

    const desiredBank = instructionControls.roll * 0.42;
    const desiredPitch = instructionControls.pitch * 0.16;
    instructionRollRate += (desiredBank - instructionBankAngle - instructionRollRate * 0.8) * 2.4 * delta;
    instructionPitchRate += (desiredPitch - instructionPitchAngle - instructionPitchRate * 0.8) * 2.8 * delta;
    instructionBankAngle = THREE.MathUtils.clamp(instructionBankAngle + instructionRollRate * delta, -0.55, 0.55);
    instructionPitchAngle = THREE.MathUtils.clamp(instructionPitchAngle + instructionPitchRate * delta, -0.24, 0.24);

    if (flightInProgress) {
      instructionVerticalSpeed += (instructionLiftRatio - 1) * 0.65 * delta;
      instructionVerticalSpeed -= instructionVerticalOffset * 0.9 * delta;
      instructionVerticalSpeed = THREE.MathUtils.clamp(instructionVerticalSpeed, -2.2, 2.2);
      instructionVerticalOffset = THREE.MathUtils.clamp(instructionVerticalOffset + instructionVerticalSpeed * delta, -1.2, 1.2);
      if (activeView === 'turn') aircraftRoot.position.y = turnStartPosition.y + instructionVerticalOffset;
      else aircraftRoot.position.y += instructionVerticalOffset;
      aircraftRoot.quaternion.multiply(
        instructionOrientation.setFromAxisAngle(localPitchAxis, instructionPitchAngle)
      );
      aircraftRoot.quaternion.multiply(
        instructionOrientation.setFromAxisAngle(localRollAxis, instructionBankAngle)
      );
    } else {
      instructionVerticalSpeed = THREE.MathUtils.damp(instructionVerticalSpeed, 0, 1.8, delta);
      instructionVerticalOffset = THREE.MathUtils.damp(instructionVerticalOffset, 0, 1.8, delta);
      instructionBankAngle = THREE.MathUtils.damp(instructionBankAngle, 0, 3, delta);
      instructionPitchAngle = THREE.MathUtils.damp(instructionPitchAngle, 0, 3, delta);
      instructionRollRate = THREE.MathUtils.damp(instructionRollRate, 0, 3, delta);
      instructionPitchRate = THREE.MathUtils.damp(instructionPitchRate, 0, 3, delta);
    }
    instructionGroundSpeed = THREE.MathUtils.damp(instructionGroundSpeed, groundControlAllowed && reverserTarget ? 0.15 : 1, 1.5, delta);
    if (delta === 0) return;
  }

  let previousTime = performance.now();
  function animate(now) {
    if (disposed) return;
    const frameDelta = Math.min((now - previousTime) / 1000, 0.05);
    previousTime = now;
    const delta = activeMode === 'instruction'
      ? lessonPlaybackPaused ? 0 : frameDelta * playbackRate
      : frameDelta;

    if (['taxi', 'landing', 'takeoff'].includes(activeView) || activeMode === 'play') {
      const motion = ['taxi', 'landing', 'takeoff'].includes(activeView) ? 72 : 2 + throttle * 0.12;
      taxiDistance += delta * motion * (activeMode === 'instruction' ? instructionGroundSpeed : 1);
      markGroup.position.x = -(taxiDistance % 11);
    }
      if (activeView === 'engine' && engineLoaded) {
        engineZoomProgress = Math.min(1, engineZoomProgress + delta / 1.35);
        if (engineZoomProgress > 0.72) aircraftRoot.visible = false;
      }
    if (activeView === 'turn') {
      const speed = 72;
      const gravity = 9.81;
      if (!turnPaused) turnElapsed += delta;
      if (turnStepMode && turnElapsed >= turnStepLimit) {
        turnElapsed = turnStepLimit;
        turnPaused = true;
      }
      const bankProgress = THREE.MathUtils.clamp(turnElapsed / 2, 0, 1);
      const coordinationProgress = THREE.MathUtils.clamp((turnElapsed - 2) / 1.3, 0, 1);
      const ease = (progress) => progress * progress * (3 - 2 * progress);
      const bank = turnBankAngle * ease(bankProgress);
      const bankRadians = THREE.MathUtils.degToRad(bank);
      const turnRate = !turnPaused && bankRadians > 0
        ? gravity * Math.tan(bankRadians) / speed * ease(coordinationProgress) * 2.4
        : 0;
      const adverseYaw = !turnPaused && bankProgress < 1
        ? turnDirection * bankRadians * 0.12 * (1 - coordinationProgress)
        : 0;
      const rudderCoordination = instructionSurfacePosition.rudder * 0.16;
      turnHeading -= (turnDirection * turnRate + adverseYaw - rudderCoordination) * delta;
      const pathAngle = Math.max(0, -turnDirection * (turnHeading - turnStartHeading));
      const forwardX = Math.cos(turnStartHeading);
      const forwardZ = -Math.sin(turnStartHeading);
      const rightX = Math.sin(turnStartHeading);
      const rightZ = Math.cos(turnStartHeading);
      const forwardDistance = turnPathRadius * Math.sin(pathAngle);
      const lateralDistance = turnDirection * turnPathRadius * (1 - Math.cos(pathAngle));
      aircraftRoot.position.x = turnStartPosition.x + forwardX * forwardDistance + rightX * lateralDistance;
      aircraftRoot.position.z = turnStartPosition.z + forwardZ * forwardDistance + rightZ * lateralDistance;
      aircraftRoot.quaternion
        .setFromAxisAngle(worldVerticalAxis, turnHeading)
        .multiply(rollOrientation.setFromAxisAngle(localRollAxis, turnDirection * bankRadians));
      turnPath.visible = bank > 0.05;
      updateCameraTargets();
      const phase = turnStepMode && turnPaused
        ? turnStepLimit <= 2 ? 'bank' : 'lift'
        : bankProgress < 1 ? 'bank' : coordinationProgress < 1 ? 'lift' : 'heading';
      turnUpdateCallback?.({
        bank,
        direction: turnDirection,
        heading: THREE.MathUtils.euclideanModulo(
          THREE.MathUtils.radToDeg(turnStartHeading + turnDirection * Math.abs(turnHeading - turnStartHeading)),
          360
        ),
        rate: THREE.MathUtils.radToDeg(turnRate),
        phase
      });
    } else if (activeView === 'cruise' && cruiseProgress < 1) {
      cruiseProgress = Math.min(1, cruiseProgress + delta / 4);
      const eased = cruiseProgress * cruiseProgress * (3 - 2 * cruiseProgress);
      cruiseTargetPosition.set(cruiseStartPosition.x + 6, aircraftGroundY + 12, 0);
      aircraftRoot.position.lerpVectors(cruiseStartPosition, cruiseTargetPosition, eased);
      aircraftRoot.quaternion.copy(cruiseStartQuaternion).slerp(cruiseTargetQuaternion, eased);
      cruiseRoot.position.copy(aircraftRoot.position);
      cruiseRoot.scale.setScalar(Math.max(0.02, eased));
      cruiseUpdateCallback?.({ progress: cruiseProgress });
      const runwayFade = 1 - Math.pow(THREE.MathUtils.clamp(cruiseProgress / 0.4, 0, 1), 2) * (3 - 2 * THREE.MathUtils.clamp(cruiseProgress / 0.4, 0, 1));
      runwayGroup.scale.setScalar(runwayFade);
      runwayGroup.visible = runwayFade > 0.01;
      updateCameraTargets();
    } else if (activeView === 'landing' && landingProgress < 1) {
      const landingDeceleration = THREE.MathUtils.clamp(1 - instructionDrag * 0.15, 0.65, 1);
      landingProgress = Math.min(1, landingProgress + delta / 7 * landingDeceleration);
      const smooth = (value) => value * value * (3 - 2 * value);
      const clamp = (value) => THREE.MathUtils.clamp(value, 0, 1);
      const approach = smooth(clamp(landingProgress / 0.92));
      const flapAmount = smooth(clamp((landingProgress - 0.1) / 0.26));
      const flareAmount = smooth(clamp((landingProgress - 0.68) / 0.23));
      const spoilerAmount = smooth(clamp((landingProgress - 0.93) / 0.07));
      const throttlePercent = Math.round(62 - smooth(clamp(landingProgress / 0.18)) * 40);
      const approachHeight = Math.max(8, landingStartPosition.y - aircraftGroundY);
      aircraftRoot.position.set(
        landingStartPosition.x * (1 - approach) + landingTargetX * approach,
        aircraftGroundY + approachHeight * (1 - approach),
        landingStartPosition.z * (1 - approach)
      );
      aircraftRoot.scale.setScalar(1);
      const noseLevel = smooth(clamp(landingProgress / 0.2));
      const approachPitch = landingStartRotation.z * (1 - noseLevel) + THREE.MathUtils.degToRad(3) * noseLevel;
      const landingPitch = approachPitch
        + THREE.MathUtils.degToRad(flareAmount * 3.5 - spoilerAmount * 6.5);
      aircraftRoot.rotation.set(0, 0, landingPitch);
      const supportX = landingPitch >= 0
        ? instructionMainGearSupportX
        : instructionNoseGearSupportX;
      if (supportX !== null) {
        const contactDisplacement = supportX * Math.sin(landingPitch)
          + instructionGearContactY * (Math.cos(landingPitch) - 1);
        aircraftRoot.position.y -= contactDisplacement * approach;
      }
      const phase = landingProgress < 0.1 ? 'gear'
        : landingProgress < 0.18 ? 'throttle'
          : landingProgress < 0.38 ? 'flaps'
            : landingProgress < 0.7 ? 'glide'
              : landingProgress < 0.93 ? 'flare' : 'spoilers';
      landingUpdateCallback?.({
        progress: landingProgress,
        phase,
        throttle: throttlePercent,
        flaps: Math.round(flapAmount * 100),
        spoilers: Math.round(spoilerAmount * 100),
        glideAngle: landingProgress >= 0.68 ? 0 : 3
      });
      const runwayReveal = THREE.MathUtils.clamp(landingProgress / 0.12, 0, 1);
      runwayGroup.scale.setScalar(activeMode === 'play' ? PLAY_WORLD_SCALE * runwayReveal : runwayReveal);
      runwayGroup.visible = runwayReveal > 0.01;
      updateCameraTargets();
    } else if (activeView === 'takeoff' && takeoffProgress < 1) {
      const liftAssist = THREE.MathUtils.clamp(0.75 + instructionLiftRatio * 0.25 - instructionDrag * 0.2, 0.55, 1.2);
      takeoffProgress = Math.min(1, takeoffProgress + delta / 3.2 * liftAssist);
      const eased = takeoffProgress * takeoffProgress * (3 - 2 * takeoffProgress);
      aircraftRoot.position.set(eased * 9, aircraftGroundY + eased * 10, 0);
      aircraftRoot.rotation.set(0, 0, eased * THREE.MathUtils.degToRad(7));
      updateCameraTargets();
    } else if (activeView !== 'takeoff' && activeView !== 'engine' && activeMode === 'play') {
      updatePlay(delta, now);
    }

    updateInstructionFlight(delta);
    if (activeMode === 'instruction' && activeView === 'slats') {
      const targetSlatPitch = slatLessonPhase === 2 ? THREE.MathUtils.degToRad(14) : 0;
      slatLessonPitch = THREE.MathUtils.damp(slatLessonPitch, targetSlatPitch, 3.5, delta);
      aircraftRoot.quaternion.copy(slatBaseOrientation).multiply(
        slatPitchOrientation.setFromAxisAngle(localPitchAxis, slatLessonPitch)
      );
      updateCameraTargets();
    }
    for (const rotor of engineRotorPivots) rotor.group.rotation.x += delta * rotor.spin;
    for (const rotor of downloadedEngineRotors) {
      rotor.group.rotation.z += delta * rotor.spin;
      if (rotor.hot) {
        const heatPulse = rotor.heat * (0.86 + (0.5 + Math.sin(now / 150 + rotor.phase) * 0.5) * 0.28);
        for (const material of rotor.materials) material.emissiveIntensity = heatPulse;
      }
    }
    for (const rotor of downloadedEngineBladeRotors) rotor.group.rotation.z += delta * rotor.spin;
    for (const flame of playExhaustFlames) {
      const pulse = 0.96 + Math.sin(now / 130 + flame.phase) * 0.04;
      flame.flameRoot.visible = activeMode === 'play' && activeView === 'flight' && playSpeed > 8;
      flame.mesh.scale.set(0.96, pulse, 0.96);
      flame.mesh.material.opacity = 0.12 * pulse;
    }
    if (activeView === 'engine' && downloadedEngineLoaded) {
      const flowTime = (now - downloadedEngineStartTime) / 1000;
      if (downloadedEngineAirflowGroup) downloadedEngineAirflowGroup.visible = engineAirflowEnabled;
      const frontView = Math.abs(Math.cos(engineOrbitYaw)) < 0.38 && Math.abs(engineOrbitPitch) < 0.62;
      for (const flow of downloadedEngineFlowArrows) {
        flow.arrow.visible = !frontView;
        const progress = (flow.phase + flowTime * flow.speed) % 1;
        flow.arrow.position.set(flow.x, flow.y, flow.startZ + (flow.endZ - flow.startZ) * progress);
      }
      for (const arrow of downloadedEngineRotationArrows) arrow.visible = frontView;
      if (engineAirflowEnabled) {
        for (const particle of downloadedEngineAirParticles) {
          const progress = (particle.phase + flowTime * particle.speed) % 1;
          particle.mesh.position.copy(particle.curve.getPoint(progress));
          particle.mesh.material.color.copy(airflowTemperatureColor(progress));
        }
      }
      for (const flame of downloadedEngineFlames) {
        const pulse = 0.85 + Math.sin(flowTime * 12 + flame.phase) * 0.15;
        flame.mesh.scale.set(0.92 + pulse * 0.18, 0.95 + pulse * 0.25, 0.95 + pulse * 0.25);
        flame.mesh.material.uniforms.uTime.value = flowTime;
        flame.mesh.material.uniforms.uOpacity.value = 0.78 + pulse * 0.16;
        flame.core.scale.set(0.9 + pulse * 0.12, 0.92 + pulse * 0.22, 0.92 + pulse * 0.22);
        flame.core.material.uniforms.uTime.value = flowTime;
        flame.core.material.uniforms.uOpacity.value = 0.74 + pulse * 0.18;
      }
      for (const exhaust of downloadedEngineExhaust) {
        const pulse = 0.84 + Math.sin(flowTime * 18 + exhaust.phase) * 0.16;
        const radialScale = 0.94 + pulse * 0.12;
        exhaust.mesh.scale.set(radialScale, 0.9 + pulse * 0.24, radialScale);
        exhaust.mesh.material.uniforms.uTime.value = flowTime;
        exhaust.mesh.material.uniforms.uOpacity.value = exhaust.baseOpacity * (0.86 + pulse * 0.14);
      }
    }
    cfm56.flameMat.uniforms.uTime.value = now / 1000;
    const combustorPulse = 0.88 + Math.sin(now / 96) * 0.12;
    cfm56.flameMat.uniforms.uPower.value = combustorPulse;
    MATS.turbineHot.emissive.setRGB(0.32 * combustorPulse, 0.07 * combustorPulse, 0.015 * combustorPulse);
    MATS.diskHot.emissive.setRGB(0.18 * combustorPulse, 0.04 * combustorPulse, 0.01 * combustorPulse);
    MATS.combLiner.emissive.setRGB(0.28 * combustorPulse, 0.045 * combustorPulse, 0.008 * combustorPulse);
    if (wingFlowGroup.visible) {
      camera.getWorldPosition(wingFlowCameraLocalPosition);
      aircraftRoot.worldToLocal(wingFlowCameraLocalPosition);
      const wingViewSideBias = Math.abs(wingFlowCameraLocalPosition.z) > 0.8
        ? Math.sign(wingFlowCameraLocalPosition.z)
        : 0;
      wingFlowVisibleSide = wingViewSideBias;
      for (const [side, group] of wingFlowSideGroups) {
        group.visible = wingFlowVisibleSide === 0 || side === wingFlowVisibleSide;
      }
    }
    for (const particle of flowParticles) {
      const progress = ((particle.phase + now / 1000 * particle.speed) % 1 + 1) % 1;
      particle.mesh.position.copy(particle.curve.getPoint(progress));
      if (particle.thermal) {
        particle.mesh.material.color.copy(particle.colorAtStation(particle.mesh.position.x)).multiplyScalar(1.35);
      }
    }
    for (const particle of slatFlowParticles) {
      const progress = ((particle.phase + now / 1000 * particle.speed) % 1 + 1) % 1;
      particle.mesh.position.copy(particle.curve.getPoint(progress));
    }
    for (let index = 0; index < angleFlowMaterials.length; index += 1) {
      angleFlowMaterials[index].dashOffset = -now * (index < 2 ? 0.00045 : 0.0002);
    }
    const stallSeverity = THREE.MathUtils.clamp((angleOfAttack - 15) / 10, 0, 1);
    stallMix = THREE.MathUtils.damp(stallMix, activeView === 'aoa' && angleOfAttack >= 15 ? 1 : 0, 4.5, delta);
    stallAircraftPivot.position.y = -0.5 - stallMix * (0.3 + stallSeverity * 0.8) + Math.sin(now / 42) * 0.08 * stallMix;
    stallAircraftPivot.rotation.set(
      Math.sin(now / 55) * 0.09 * stallMix,
      0,
      THREE.MathUtils.degToRad(angleOfAttack) - THREE.MathUtils.degToRad(18 + stallSeverity * 12) * stallMix + Math.sin(now / 68) * 0.06 * stallMix
    );
    for (const flame of flameMeshes) {
      const time = now / 1000;
      const pulse = 0.7 + 0.3 * Math.sin(time * 19 + flame.userData.flicker);
      const flutter = Math.sin(time * 31 + flame.userData.flicker) * 0.055;
      flame.scale.set(flame.userData.baseScale * (0.75 + pulse * 0.62), 0.65 + pulse * 0.62, 0.65 + pulse * 0.62);
      flame.position.y = flutter;
      flame.position.z = flutter * 0.7;
      flame.material.opacity = 0.48 + pulse * 0.38;
    }

    const blend = activeMode === 'play' && cockpitView ? 1 : 1 - Math.exp(-delta * 5.5);
    camera.position.lerp(desiredCameraPosition, blend);
    currentLookAt.lerp(desiredLookAt, blend);
    const cockpitFovOffset = activeMode === 'play' && cockpitView ? 10 : 0;
    camera.fov += (targetFov + cockpitFovOffset - camera.fov) * (1 - Math.exp(-delta * 2.6));
    camera.updateProjectionMatrix();
    aircraftRoot.getWorldQuaternion(aircraftWorldQuaternion);
    aircraftUp.set(0, 1, 0).applyQuaternion(aircraftWorldQuaternion);
    cameraUpTarget.set(0, 1, 0).lerp(aircraftUp, activeMode === 'play' ? 0.16 : 0).normalize();
    camera.up.lerp(cameraUpTarget, blend).normalize();
    camera.lookAt(currentLookAt);
    updateRaceEffects(delta, now);
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate);

  return {
    setView,
    toggleCockpitView,
    setAngleOfAttack,
    setInstructionControls(controls) {
      for (const key of Object.keys(instructionControls)) {
        instructionControls[key] = THREE.MathUtils.clamp(Number(controls?.[key]) || 0, -1, 1);
      }
    },
    setSlatLessonDeployment(amount) {
      slatLessonPhase = Math.round(THREE.MathUtils.clamp(Number(amount) || 0, 0, 2));
      slatLessonDeployment = slatLessonPhase > 0 ? 1 : 0;
      updateSlatFlowVisibility();
    },
    setElevatorLessonDeflection(amount) {
      elevatorLessonDeflection = THREE.MathUtils.clamp(Number(amount) || 0, -1, 1);
    },
    cycleInstructionFlaps() {
      instructionFlapSetting = (instructionFlapSetting + 1) % 3;
      return instructionFlapSetting;
    },
    setDifficulty(difficulty) {
      playDifficulty = difficulty === 'easy' ? 'easy' : 'standard';
      playFlightHud.querySelector('.play-assist-badge').hidden = playDifficulty !== 'easy';
    },
    setLessonPlayback({ paused, rate }) {
      lessonPlaybackPaused = Boolean(paused);
      if (Number.isFinite(rate)) playbackRate = THREE.MathUtils.clamp(rate, 0.5, 1.5);
    },
    replayLesson(view) {
      lessonPlaybackPaused = false;
      if (view === 'taxi') {
        taxiDistance = 0;
        aircraftRoot.position.set(0, aircraftGroundY, 0);
        aircraftRoot.rotation.set(0, 0, 0);
      } else if (view === 'takeoff') {
        takeoffProgress = 0;
        aircraftRoot.position.set(0, aircraftGroundY, 0);
        aircraftRoot.rotation.set(0, 0, 0);
        runwayGroup.visible = true;
        runwayGroup.scale.setScalar(1);
      } else if (view === 'cruise') {
        cruiseProgress = 0;
        cruiseStartPosition.copy(aircraftRoot.position);
        cruiseStartQuaternion.identity();
        aircraftRoot.quaternion.identity();
        cruiseRoot.scale.setScalar(0.02);
        runwayGroup.visible = true;
        runwayGroup.scale.setScalar(1);
      } else if (view === 'landing') {
        landingProgress = 0;
        landingStartPosition.copy(aircraftRoot.position);
        landingStartRotation.copy(aircraftRoot.rotation);
        if (landingStartPosition.y <= aircraftGroundY + 1) landingStartPosition.y = aircraftGroundY + 8;
        landingTargetX = landingStartPosition.x + 48;
        runwayGroup.scale.setScalar(0.02);
        runwayGroup.visible = true;
      } else if (view === 'turn') {
        this.replayTurnPhase('bank');
      } else if (view === 'slats') {
        slatLessonDeployment = 0;
        slatLessonPhase = 0;
      } else if (view === 'elevator') {
        elevatorLessonDeflection = 0;
      } else if (view === 'engine') {
        engineZoomProgress = 0;
        aircraftRoot.visible = true;
        downloadedEngineStartTime = performance.now();
      }
      updateCameraTargets();
    },
    setTurnControls(bankAngle, direction) {
      const nextBankAngle = THREE.MathUtils.clamp(Number(bankAngle) || 0, 0, 30);
      const nextDirection = Math.sign(Number(direction)) || 1;
      const turnControlsChanged = activeView === 'turn'
        && (nextBankAngle !== turnBankAngle || nextDirection !== turnDirection);
      turnBankAngle = nextBankAngle;
      turnDirection = nextDirection;
      updateTurnPathGeometry();
      if (turnControlsChanged) {
        turnHeading = turnStartHeading;
        aircraftRoot.position.copy(turnStartPosition);
        turnElapsed = 0;
        turnPaused = false;
        turnStepMode = false;
        turnStepLimit = Infinity;
      }
      updateCameraTargets();
    },
    replayTurnPhase(phase) {
      if (phase === 'bank') {
        turnHeading = turnStartHeading;
        aircraftRoot.position.copy(turnStartPosition);
        aircraftRoot.rotation.set(0, turnStartHeading, 0);
        turnPath.visible = false;
        turnElapsed = 0;                 
        turnStepMode = true;
        turnStepLimit = 2;
        turnPaused = false;
      } else if (phase === 'lift') {
        turnHeading = turnStartHeading;
        aircraftRoot.position.copy(turnStartPosition);
        turnPath.visible = turnBankAngle > 0;
        turnElapsed = 2;
        turnStepMode = true;
        turnStepLimit = 3.29;
        turnPaused = false;
      } else {
        turnStepMode = false;
        turnStepLimit = Infinity;
        turnElapsed = Math.max(turnElapsed, 3.3);
        turnPaused = false;
      }
    },
    toggleEngineAirflow() {
      engineAirflowEnabled = !engineAirflowEnabled;
      if (downloadedEngineAirflowGroup) downloadedEngineAirflowGroup.visible = engineAirflowEnabled;
      return engineAirflowEnabled;
    },
    restartPlay() {
      resetPlay();
      targetFov = baseFov;
      camera.fov = baseFov;
      camera.updateProjectionMatrix();
      desiredCameraPosition.set(-52 * PLAY_WORLD_SCALE, 15 * PLAY_WORLD_SCALE, 0);
      desiredLookAt.set(24 * PLAY_WORLD_SCALE, 3 * PLAY_WORLD_SCALE, 0);
      camera.position.copy(desiredCameraPosition);
      currentLookAt.copy(desiredLookAt);
      camera.up.set(0, 1, 0);
      camera.lookAt(currentLookAt);
    },
    dispose() {
      disposed = true;
      renderer.setAnimationLoop(null);
      resizeObserver.disconnect();
      window.removeEventListener('resize', resize);
      dracoLoader.dispose();
      renderer.dispose();
      container.replaceChildren();
    }
  };
}
