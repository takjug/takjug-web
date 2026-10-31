// @ts-nocheck
"use client";

import * as React from "react";
import * as THREE from "three";

export type ArtVariant = "orb" | "knot" | "matrix" | "ribbon";

interface CreativeCanvasProps {
  theme?: "dark" | "light";
  variant?: ArtVariant;
}

export default function CreativeCanvas({
  theme = "dark",
  variant = "orb",
}: CreativeCanvasProps) {
  const mountRef = React.useRef<HTMLDivElement>(null);

  // References to groups and materials for seamless real-time switching
  const stateRef = React.useRef<{
    knotGroup: THREE.Group;
    orbGroup: THREE.Group;
    matrixGroup: THREE.Group;
    ribbonGroup: THREE.Group;
    // Materials to recolor on theme change
    materials: THREE.Material[];
    pointLight: THREE.PointLight;
    particleMat: THREE.PointsMaterial;
    darkParticleTexture: THREE.CanvasTexture;
    lightParticleTexture: THREE.CanvasTexture;
    // Morph geometries & initial buffers
    orbGeo: THREE.IcosahedronGeometry;
    initialOrbPositions: Float32Array;
    ribbonGeo: THREE.TorusGeometry;
    initialRibbonPositions: Float32Array;
    // Sub-objects for animation
    matrixOuterMesh: THREE.Mesh;
    matrixMidMesh: THREE.Mesh;
    matrixCoreMesh: THREE.Mesh;
    matrixRing1: THREE.Mesh;
    matrixRing2: THREE.Mesh;
    matrixRing3: THREE.Mesh;
    orbCoreMesh: THREE.Mesh;
    orbRing: THREE.Mesh;
    gyroRing1: THREE.Mesh;
    gyroRing2: THREE.Mesh;
    ribbonMesh: THREE.Mesh;
    ribbonHalo: THREE.Mesh;
  } | null>(null);

  React.useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene & Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 4.8;

    // WebGL Renderer with Alpha transparency
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    // Master Group for 3D Sculptures
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Dynamic responsive positioning
    const updateGroupPosition = (w: number) => {
      if (w >= 1280) {
        masterGroup.position.x = 1.35;
        masterGroup.position.y = 0;
        masterGroup.scale.set(1.15, 1.15, 1.15);
      } else if (w >= 1024) {
        masterGroup.position.x = 1.05;
        masterGroup.position.y = 0;
        masterGroup.scale.set(1.0, 1.0, 1.0);
      } else if (w >= 768) {
        masterGroup.position.x = 0;
        masterGroup.position.y = -0.3;
        masterGroup.scale.set(0.85, 0.85, 0.85);
      } else {
        masterGroup.position.x = 0;
        masterGroup.position.y = -0.35;
        masterGroup.scale.set(0.68, 0.68, 0.68);
      }
    };
    updateGroupPosition(width);

    const isDark = theme === "dark";
    const baseColor = isDark ? 0xffffff : 0x18181b;
    const blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
    const trackedMaterials: THREE.Material[] = [];

    // Helper to register materials for theme updates
    const registerMat = <T extends THREE.Material>(mat: T): T => {
      trackedMaterials.push(mat);
      return mat;
    };

    // =========================================================================
    // SCULPTURE 01: Architectural Torus Knot
    // =========================================================================
    const knotGroup = new THREE.Group();
    masterGroup.add(knotGroup);

    const knotGeo = new THREE.TorusKnotGeometry(1.25, 0.34, 160, 26, 2, 3);
    const wireframeGeo = new THREE.WireframeGeometry(knotGeo);
    const knotWireframeMat = registerMat(
      new THREE.LineBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: isDark ? 0.24 : 0.22,
      })
    );
    const wireframeMesh = new THREE.LineSegments(wireframeGeo, knotWireframeMat);
    knotGroup.add(wireframeMesh);

    const knotPointsMat = registerMat(
      new THREE.PointsMaterial({
        color: baseColor,
        size: 0.026,
        transparent: true,
        opacity: 0.75,
        blending,
      })
    );
    const knotPoints = new THREE.Points(knotGeo, knotPointsMat);
    knotGroup.add(knotPoints);

    // Gyro Rings for Knot
    const ringGeo1 = new THREE.RingGeometry(2.4, 2.415, 120);
    const gyroRing1Mat = registerMat(
      new THREE.MeshBasicMaterial({
        color: baseColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: isDark ? 0.14 : 0.15,
      })
    );
    const gyroRing1 = new THREE.Mesh(ringGeo1, gyroRing1Mat);
    gyroRing1.rotation.x = Math.PI / 2.5;
    knotGroup.add(gyroRing1);

    const ringGeo2 = new THREE.RingGeometry(2.9, 2.912, 120);
    const gyroRing2Mat = registerMat(
      new THREE.MeshBasicMaterial({
        color: isDark ? 0xffffff : 0x27272a,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: isDark ? 0.08 : 0.09,
      })
    );
    const gyroRing2 = new THREE.Mesh(ringGeo2, gyroRing2Mat);
    gyroRing2.rotation.y = Math.PI / 3;
    gyroRing2.rotation.z = Math.PI / 6;
    knotGroup.add(gyroRing2);

    // =========================================================================
    // SCULPTURE 02: Neural Wave Orb (Living Harmonic Sphere)
    // =========================================================================
    const orbGroup = new THREE.Group();
    masterGroup.add(orbGroup);

    const orbGeo = new THREE.IcosahedronGeometry(1.35, 3);
    const initialOrbPositions = new Float32Array(orbGeo.attributes.position.array);

    const orbWireframeMat = registerMat(
      new THREE.MeshBasicMaterial({
        wireframe: true,
        color: baseColor,
        transparent: true,
        opacity: isDark ? 0.24 : 0.22,
      })
    );
    const orbMesh = new THREE.Mesh(orbGeo, orbWireframeMat);
    orbGroup.add(orbMesh);

    const orbPointsMat = registerMat(
      new THREE.PointsMaterial({
        color: baseColor,
        size: 0.03,
        transparent: true,
        opacity: 0.8,
        blending,
      })
    );
    const orbPoints = new THREE.Points(orbGeo, orbPointsMat);
    orbGroup.add(orbPoints);

    const coreGeo = new THREE.OctahedronGeometry(0.68, 0);
    const orbCoreMat = registerMat(
      new THREE.MeshBasicMaterial({
        wireframe: true,
        color: baseColor,
        transparent: true,
        opacity: isDark ? 0.38 : 0.32,
      })
    );
    const orbCoreMesh = new THREE.Mesh(coreGeo, orbCoreMat);
    orbGroup.add(orbCoreMesh);

    const orbRingGeo = new THREE.RingGeometry(1.9, 1.916, 120);
    const orbRingMat = registerMat(
      new THREE.MeshBasicMaterial({
        color: baseColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: isDark ? 0.16 : 0.14,
      })
    );
    const orbRing = new THREE.Mesh(orbRingGeo, orbRingMat);
    orbRing.rotation.x = Math.PI / 3;
    orbGroup.add(orbRing);

    // =========================================================================
    // SCULPTURE 03: Quantum Matrix (Dual Crystalline Prism & 3D Radar)
    // =========================================================================
    const matrixGroup = new THREE.Group();
    masterGroup.add(matrixGroup);

    // Outer Dodecahedron
    const matrixOuterGeo = new THREE.DodecahedronGeometry(1.4, 0);
    const matrixOuterMat = registerMat(
      new THREE.MeshBasicMaterial({
        wireframe: true,
        color: baseColor,
        transparent: true,
        opacity: isDark ? 0.24 : 0.22,
      })
    );
    const matrixOuterMesh = new THREE.Mesh(matrixOuterGeo, matrixOuterMat);
    matrixGroup.add(matrixOuterMesh);

    const matrixPointsMat = registerMat(
      new THREE.PointsMaterial({
        size: 0.035,
        color: baseColor,
        transparent: true,
        opacity: 0.85,
        blending,
      })
    );
    const matrixPoints = new THREE.Points(matrixOuterGeo, matrixPointsMat);
    matrixGroup.add(matrixPoints);

    // Middle Nested Icosahedron (counter-rotating)
    const matrixMidGeo = new THREE.IcosahedronGeometry(1.05, 0);
    const matrixMidMat = registerMat(
      new THREE.MeshBasicMaterial({
        wireframe: true,
        color: baseColor,
        transparent: true,
        opacity: isDark ? 0.32 : 0.28,
      })
    );
    const matrixMidMesh = new THREE.Mesh(matrixMidGeo, matrixMidMat);
    matrixGroup.add(matrixMidMesh);

    // Inner Glowing Octahedron Core
    const matrixCoreGeo = new THREE.OctahedronGeometry(0.62, 0);
    const matrixCoreMat = registerMat(
      new THREE.MeshBasicMaterial({
        wireframe: true,
        color: baseColor,
        transparent: true,
        opacity: isDark ? 0.5 : 0.42,
      })
    );
    const matrixCoreMesh = new THREE.Mesh(matrixCoreGeo, matrixCoreMat);
    matrixGroup.add(matrixCoreMesh);

    // 3 Orthogonal Quantum Orbital Rings (X/Y, Y/Z, X/Z)
    const mRingGeo = new THREE.RingGeometry(1.85, 1.865, 90);
    const matrixRing1 = new THREE.Mesh(mRingGeo, gyroRing1Mat);
    matrixRing1.rotation.x = Math.PI / 2;
    matrixGroup.add(matrixRing1);

    const matrixRing2 = new THREE.Mesh(mRingGeo, gyroRing1Mat);
    matrixRing2.rotation.y = Math.PI / 2;
    matrixGroup.add(matrixRing2);

    const matrixRing3 = new THREE.Mesh(mRingGeo, gyroRing1Mat);
    matrixGroup.add(matrixRing3);

    // =========================================================================
    // SCULPTURE 04: Helical Wave Ribbon (Topological Mobius Flow)
    // =========================================================================
    const ribbonGroup = new THREE.Group();
    masterGroup.add(ribbonGroup);

    const ribbonGeo = new THREE.TorusGeometry(1.35, 0.4, 32, 110);
    const initialRibbonPositions = new Float32Array(ribbonGeo.attributes.position.array);

    const ribbonWireMat = registerMat(
      new THREE.MeshBasicMaterial({
        wireframe: true,
        color: baseColor,
        transparent: true,
        opacity: isDark ? 0.24 : 0.22,
      })
    );
    const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonWireMat);
    ribbonGroup.add(ribbonMesh);

    const ribbonPointsMat = registerMat(
      new THREE.PointsMaterial({
        size: 0.026,
        color: baseColor,
        transparent: true,
        opacity: 0.75,
        blending,
      })
    );
    const ribbonPoints = new THREE.Points(ribbonGeo, ribbonPointsMat);
    ribbonGroup.add(ribbonPoints);

    // Angled Halo Ring
    const ribbonHaloGeo = new THREE.RingGeometry(2.35, 2.37, 100);
    const ribbonHaloMat = registerMat(
      new THREE.MeshBasicMaterial({
        color: baseColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: isDark ? 0.15 : 0.14,
      })
    );
    const ribbonHalo = new THREE.Mesh(ribbonHaloGeo, ribbonHaloMat);
    ribbonHalo.rotation.x = Math.PI / 2.3;
    ribbonHalo.rotation.y = Math.PI / 5;
    ribbonGroup.add(ribbonHalo);

    // Initial visibility state
    knotGroup.visible = variant === "knot";
    orbGroup.visible = variant === "orb";
    matrixGroup.visible = variant === "matrix";
    ribbonGroup.visible = variant === "ribbon";

    // =========================================================================
    // SHARED: 2,600 Fibonacci Cosmic Particle Atmosphere
    // =========================================================================
    const particleCount = 2600;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.7 + Math.cbrt(Math.random()) * 2.8;

      const sinPhi = Math.sin(phi);
      const x = r * sinPhi * Math.cos(theta);
      const y = r * sinPhi * Math.sin(theta);
      const z = r * Math.cos(phi);

      particlePositions[idx] = x;
      particlePositions[idx + 1] = y;
      particlePositions[idx + 2] = z;

      initialPositions[idx] = x;
      initialPositions[idx + 1] = y;
      initialPositions[idx + 2] = z;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const createParticleTexture = (dark: boolean) => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        if (dark) {
          grad.addColorStop(0, "rgba(255,255,255,1)");
          grad.addColorStop(0.25, "rgba(240,240,245,0.75)");
          grad.addColorStop(0.7, "rgba(200,200,210,0.18)");
          grad.addColorStop(1, "rgba(0,0,0,0)");
        } else {
          grad.addColorStop(0, "rgba(24,24,27,1)");
          grad.addColorStop(0.25, "rgba(39,39,42,0.75)");
          grad.addColorStop(0.7, "rgba(63,63,70,0.18)");
          grad.addColorStop(1, "rgba(0,0,0,0)");
        }
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const darkParticleTexture = createParticleTexture(true);
    const lightParticleTexture = createParticleTexture(false);

    const particleMat = registerMat(
      new THREE.PointsMaterial({
        size: 0.032,
        map: isDark ? darkParticleTexture : lightParticleTexture,
        color: baseColor,
        transparent: true,
        opacity: isDark ? 0.6 : 0.48,
        blending,
        depthWrite: false,
      })
    );

    const particles = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particles);

    // Specular Lighting
    const pointLight = new THREE.PointLight(
      isDark ? 0xffffff : 0x52525b,
      isDark ? 2.8 : 1.8,
      14
    );
    pointLight.position.set(3, 2, 4);
    scene.add(pointLight);

    // Save state
    stateRef.current = {
      knotGroup,
      orbGroup,
      matrixGroup,
      ribbonGroup,
      materials: trackedMaterials,
      pointLight,
      particleMat,
      darkParticleTexture,
      lightParticleTexture,
      orbGeo,
      initialOrbPositions,
      ribbonGeo,
      initialRibbonPositions,
      matrixOuterMesh,
      matrixMidMesh,
      matrixCoreMesh,
      matrixRing1,
      matrixRing2,
      matrixRing3,
      orbCoreMesh,
      orbRing,
      gyroRing1,
      gyroRing2,
      ribbonMesh,
      ribbonHalo,
    };

    // Cursor tracking & Inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;
    let dragVelocityX = 0;
    let dragVelocityY = 0;

    const onPointerMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - prevPointerX;
        const deltaY = e.clientY - prevPointerY;
        dragVelocityX = deltaX * 0.005;
        dragVelocityY = deltaY * 0.005;
        masterGroup.rotation.y += dragVelocityX;
        masterGroup.rotation.x += dragVelocityY;
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
      }
    };

    const onPointerDown = (e: MouseEvent) => {
      isDragging = true;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mouseup", onPointerUp);

    // Touch support for mobile devices
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        mouseX = (touch.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(touch.clientY / window.innerHeight) * 2 + 1;

        if (isDragging) {
          const deltaX = touch.clientX - prevPointerX;
          const deltaY = touch.clientY - prevPointerY;
          dragVelocityX = deltaX * 0.007;
          dragVelocityY = deltaY * 0.007;
          masterGroup.rotation.y += dragVelocityX;
          masterGroup.rotation.x += dragVelocityY;
          prevPointerX = touch.clientX;
          prevPointerY = touch.clientY;
        }
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevPointerX = e.touches[0].clientX;
        prevPointerY = e.touches[0].clientY;
      }
    };

    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    // Resize Handler
    const onResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth || window.innerWidth;
      const h = mountRef.current.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      updateGroupPosition(w);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth cursor parallax
      targetX += (mouseX - targetX) * 0.035;
      targetY += (mouseY - targetY) * 0.035;

      // Base rotation + drag decay
      if (!isDragging) {
        dragVelocityX *= 0.94;
        dragVelocityY *= 0.94;
        masterGroup.rotation.y += 0.0022 + dragVelocityX;
        masterGroup.rotation.x += dragVelocityY;
      }

      // Parallax tilt
      masterGroup.rotation.y += targetX * 0.012;
      masterGroup.rotation.x = Math.sin(elapsed * 0.15) * 0.1 - targetY * 0.18;

      // 1. Knot Animation
      if (knotGroup.visible) {
        gyroRing1.rotation.z = elapsed * 0.08;
        gyroRing2.rotation.x = elapsed * 0.05;
      }

      // 2. Orb Animation (harmonic breathing waves)
      if (orbGroup.visible) {
        orbCoreMesh.rotation.y = -elapsed * 0.25;
        orbCoreMesh.rotation.x = elapsed * 0.18;
        orbRing.rotation.z = elapsed * 0.1;

        const posAttr = orbGeo.attributes.position;
        const count = posAttr.count;
        for (let i = 0; i < count; i++) {
          const ix = i * 3;
          const ox = initialOrbPositions[ix];
          const oy = initialOrbPositions[ix + 1];
          const oz = initialOrbPositions[ix + 2];

          const len = Math.sqrt(ox * ox + oy * oy + oz * oz) || 1;
          const nx = ox / len;
          const ny = oy / len;
          const nz = oz / len;

          const wave1 = Math.sin(nx * 3.2 + elapsed * 1.6) * Math.cos(ny * 3.2 + elapsed * 1.3);
          const wave2 = Math.sin(nz * 3.8 + elapsed * 1.9) * 0.5;
          const radius = 1.35 + (wave1 + wave2) * 0.18;

          posAttr.setXYZ(i, nx * radius, ny * radius, nz * radius);
        }
        posAttr.needsUpdate = true;
      }

      // 3. Quantum Matrix Animation (multi-axis counter rotations)
      if (matrixGroup.visible) {
        matrixOuterMesh.rotation.y = elapsed * 0.08;
        matrixOuterMesh.rotation.x = elapsed * 0.04;

        matrixMidMesh.rotation.y = -elapsed * 0.16;
        matrixMidMesh.rotation.z = elapsed * 0.12;

        const coreScale = 1 + Math.sin(elapsed * 2.2) * 0.08;
        matrixCoreMesh.scale.set(coreScale, coreScale, coreScale);
        matrixCoreMesh.rotation.x = elapsed * 0.25;
        matrixCoreMesh.rotation.y = -elapsed * 0.22;

        matrixRing1.rotation.z = elapsed * 0.12;
        matrixRing2.rotation.x = -elapsed * 0.10;
        matrixRing3.rotation.y = elapsed * 0.08;
      }

      // 4. Helical Wave Ribbon Animation (Mobius wave propagation)
      if (ribbonGroup.visible) {
        const rPosAttr = ribbonGeo.attributes.position;
        const rCount = rPosAttr.count;
        for (let i = 0; i < rCount; i++) {
          const ix = i * 3;
          const ox = initialRibbonPositions[ix];
          const oy = initialRibbonPositions[ix + 1];
          const oz = initialRibbonPositions[ix + 2];

          const angle = Math.atan2(oy, ox);
          const wave = Math.sin(angle * 4 + elapsed * 2.2) * 0.14;
          const twist = Math.cos(angle * 3 + elapsed * 1.6) * 0.12;

          rPosAttr.setXYZ(i, ox * (1 + wave * 0.4), oy * (1 + wave * 0.4), oz + twist);
        }
        rPosAttr.needsUpdate = true;

        ribbonMesh.rotation.x = Math.PI / 4 + Math.sin(elapsed * 0.2) * 0.1;
        ribbonMesh.rotation.y = elapsed * 0.12;
        ribbonHalo.rotation.z = -elapsed * 0.08;
      }

      // Orbiting light
      pointLight.position.x = Math.sin(elapsed * 0.4) * 3 + targetX * 2;
      pointLight.position.y = Math.cos(elapsed * 0.4) * 3 + targetY * 2;

      // Particle atmosphere breathing
      const particlePosAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const posArray = particlePosAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const wave = 1 + Math.sin(elapsed * 1.3 + initialPositions[idx] * 2) * 0.024;
        posArray[idx] = initialPositions[idx] * wave;
        posArray[idx + 1] = initialPositions[idx + 1] * wave;
        posArray[idx + 2] = initialPositions[idx + 2] * wave;
      }
      particlePosAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mouseup", onPointerUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onPointerUp);
      window.removeEventListener("resize", onResize);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Cleanup
      knotGeo.dispose();
      wireframeGeo.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();

      orbGeo.dispose();
      coreGeo.dispose();
      orbRingGeo.dispose();

      matrixOuterGeo.dispose();
      matrixMidGeo.dispose();
      matrixCoreGeo.dispose();
      mRingGeo.dispose();

      ribbonGeo.dispose();
      ribbonHaloGeo.dispose();

      trackedMaterials.forEach((m) => m.dispose());
      particleGeo.dispose();
      darkParticleTexture.dispose();
      lightParticleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  // Instant visibility toggle across all 4 sculptures
  React.useEffect(() => {
    if (!stateRef.current) return;
    const { knotGroup, orbGroup, matrixGroup, ribbonGroup } = stateRef.current;
    knotGroup.visible = variant === "knot";
    orbGroup.visible = variant === "orb";
    matrixGroup.visible = variant === "matrix";
    ribbonGroup.visible = variant === "ribbon";
  }, [variant]);

  // Real-time theme palette update
  React.useEffect(() => {
    if (!stateRef.current) return;
    const isDark = theme === "dark";
    const {
      materials,
      particleMat,
      pointLight,
      darkParticleTexture,
      lightParticleTexture,
    } = stateRef.current;

    const darkHex = 0xffffff;
    const lightHex = 0x18181b;
    const activeColor = isDark ? darkHex : lightHex;
    const blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;

    materials.forEach((m) => {
      if ("color" in m) {
        (m as any).color.setHex(activeColor);
      }
      if ("blending" in m && m !== particleMat) {
        (m as any).blending = blending;
      }
      m.needsUpdate = true;
    });

    particleMat.color.setHex(activeColor);
    particleMat.map = isDark ? darkParticleTexture : lightParticleTexture;
    particleMat.opacity = isDark ? 0.6 : 0.48;
    particleMat.blending = blending;
    particleMat.needsUpdate = true;

    pointLight.color.setHex(isDark ? 0xffffff : 0x52525b);
    pointLight.intensity = isDark ? 2.8 : 1.8;
  }, [theme]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing select-none"
    />
  );
}
