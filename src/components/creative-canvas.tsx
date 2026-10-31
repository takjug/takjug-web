// @ts-nocheck
"use client";

import * as React from "react";
import * as THREE from "three";

interface CreativeCanvasProps {
  theme?: "dark" | "light";
  variant?: "orb" | "knot";
}

export default function CreativeCanvas({
  theme = "dark",
  variant = "orb",
}: CreativeCanvasProps) {
  const mountRef = React.useRef<HTMLDivElement>(null);

  // References to materials & groups for instant smooth transitions
  const stateRef = React.useRef<{
    knotGroup: THREE.Group;
    orbGroup: THREE.Group;
    knotWireframeMat: THREE.LineBasicMaterial;
    knotPointsMat: THREE.PointsMaterial;
    orbWireframeMat: THREE.MeshBasicMaterial;
    orbPointsMat: THREE.PointsMaterial;
    orbCoreMat: THREE.MeshBasicMaterial;
    orbRingMat: THREE.MeshBasicMaterial;
    gyroRing1Mat: THREE.MeshBasicMaterial;
    gyroRing2Mat: THREE.MeshBasicMaterial;
    particleMat: THREE.PointsMaterial;
    pointLight: THREE.PointLight;
    darkParticleTexture: THREE.CanvasTexture;
    lightParticleTexture: THREE.CanvasTexture;
    orbGeo: THREE.IcosahedronGeometry;
    initialOrbPositions: Float32Array;
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

    // =========================================================================
    // SCULPTURE 01: Architectural Torus Knot
    // =========================================================================
    const knotGroup = new THREE.Group();
    masterGroup.add(knotGroup);

    const knotGeo = new THREE.TorusKnotGeometry(1.25, 0.34, 160, 26, 2, 3);
    const wireframeGeo = new THREE.WireframeGeometry(knotGeo);
    const knotWireframeMat = new THREE.LineBasicMaterial({
      color: theme === "dark" ? 0xffffff : 0x18181b,
      transparent: true,
      opacity: theme === "dark" ? 0.24 : 0.22,
    });
    const wireframeMesh = new THREE.LineSegments(wireframeGeo, knotWireframeMat);
    knotGroup.add(wireframeMesh);

    const knotPointsMat = new THREE.PointsMaterial({
      color: theme === "dark" ? 0xffffff : 0x09090b,
      size: 0.026,
      transparent: true,
      opacity: 0.75,
      blending: theme === "dark" ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    const knotPoints = new THREE.Points(knotGeo, knotPointsMat);
    knotGroup.add(knotPoints);

    // Gyro Rings for Torus Knot
    const ringGeo1 = new THREE.RingGeometry(2.4, 2.415, 120);
    const gyroRing1Mat = new THREE.MeshBasicMaterial({
      color: theme === "dark" ? 0xffffff : 0x18181b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: theme === "dark" ? 0.14 : 0.15,
    });
    const gyroRing1 = new THREE.Mesh(ringGeo1, gyroRing1Mat);
    gyroRing1.rotation.x = Math.PI / 2.5;
    knotGroup.add(gyroRing1);

    const ringGeo2 = new THREE.RingGeometry(2.9, 2.912, 120);
    const gyroRing2Mat = new THREE.MeshBasicMaterial({
      color: theme === "dark" ? 0xffffff : 0x27272a,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: theme === "dark" ? 0.08 : 0.09,
    });
    const gyroRing2 = new THREE.Mesh(ringGeo2, gyroRing2Mat);
    gyroRing2.rotation.y = Math.PI / 3;
    gyroRing2.rotation.z = Math.PI / 6;
    knotGroup.add(gyroRing2);

    // =========================================================================
    // SCULPTURE 02: Neural Wave Orb (Living Harmonic Sphere)
    // =========================================================================
    const orbGroup = new THREE.Group();
    masterGroup.add(orbGroup);

    // Geodesic Sphere with detail 3 (~642 vertices)
    const orbGeo = new THREE.IcosahedronGeometry(1.35, 3);
    const initialOrbPositions = new Float32Array(orbGeo.attributes.position.array);

    const orbWireframeMat = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: theme === "dark" ? 0xffffff : 0x18181b,
      transparent: true,
      opacity: theme === "dark" ? 0.24 : 0.22,
    });
    const orbMesh = new THREE.Mesh(orbGeo, orbWireframeMat);
    orbGroup.add(orbMesh);

    const orbPointsMat = new THREE.PointsMaterial({
      color: theme === "dark" ? 0xffffff : 0x09090b,
      size: 0.03,
      transparent: true,
      opacity: 0.8,
      blending: theme === "dark" ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    const orbPoints = new THREE.Points(orbGeo, orbPointsMat);
    orbGroup.add(orbPoints);

    // Inner Counter-Rotating Crystalline Octahedron Core
    const coreGeo = new THREE.OctahedronGeometry(0.68, 0);
    const orbCoreMat = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: theme === "dark" ? 0xffffff : 0x18181b,
      transparent: true,
      opacity: theme === "dark" ? 0.38 : 0.32,
    });
    const coreMesh = new THREE.Mesh(coreGeo, orbCoreMat);
    orbGroup.add(coreMesh);

    // Outer Celestial Radar Ring
    const orbRingGeo = new THREE.RingGeometry(1.9, 1.916, 120);
    const orbRingMat = new THREE.MeshBasicMaterial({
      color: theme === "dark" ? 0xffffff : 0x18181b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: theme === "dark" ? 0.16 : 0.14,
    });
    const orbRing = new THREE.Mesh(orbRingGeo, orbRingMat);
    orbRing.rotation.x = Math.PI / 3;
    orbGroup.add(orbRing);

    // Set initial visibility
    orbGroup.visible = variant === "orb";
    knotGroup.visible = variant === "knot";

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

    const createParticleTexture = (isDark: boolean) => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        if (isDark) {
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

    const particleMat = new THREE.PointsMaterial({
      size: 0.032,
      map: theme === "dark" ? darkParticleTexture : lightParticleTexture,
      color: theme === "dark" ? 0xffffff : 0x18181b,
      transparent: true,
      opacity: theme === "dark" ? 0.6 : 0.48,
      blending: theme === "dark" ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particles);

    // Specular Lighting
    const pointLight = new THREE.PointLight(
      theme === "dark" ? 0xffffff : 0x52525b,
      theme === "dark" ? 2.8 : 1.8,
      14
    );
    pointLight.position.set(3, 2, 4);
    scene.add(pointLight);

    // Store state in ref
    stateRef.current = {
      knotGroup,
      orbGroup,
      knotWireframeMat,
      knotPointsMat,
      orbWireframeMat,
      orbPointsMat,
      orbCoreMat,
      orbRingMat,
      gyroRing1Mat,
      gyroRing2Mat,
      particleMat,
      pointLight,
      darkParticleTexture,
      lightParticleTexture,
      orbGeo,
      initialOrbPositions,
    };

    // Mouse Tracking & Inertia
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

      // Animate Knot specific rings
      gyroRing1.rotation.z = elapsed * 0.08;
      gyroRing2.rotation.x = elapsed * 0.05;

      // Animate Orb specific harmonic wave breathing
      if (orbGroup.visible) {
        coreMesh.rotation.y = -elapsed * 0.25;
        coreMesh.rotation.x = elapsed * 0.18;
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

      // Light orbit
      pointLight.position.x = Math.sin(elapsed * 0.4) * 3 + targetX * 2;
      pointLight.position.y = Math.cos(elapsed * 0.4) * 3 + targetY * 2;

      // Organic particle atmosphere oscillation
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

      knotGeo.dispose();
      wireframeGeo.dispose();
      knotWireframeMat.dispose();
      knotPointsMat.dispose();
      ringGeo1.dispose();
      gyroRing1Mat.dispose();
      ringGeo2.dispose();
      gyroRing2Mat.dispose();

      orbGeo.dispose();
      orbWireframeMat.dispose();
      orbPointsMat.dispose();
      coreGeo.dispose();
      orbCoreMat.dispose();
      orbRingGeo.dispose();
      orbRingMat.dispose();

      particleGeo.dispose();
      particleMat.dispose();
      darkParticleTexture.dispose();
      lightParticleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  // Variant change: instant toggle between Orb & Knot without re-instantiating WebGL
  React.useEffect(() => {
    if (!stateRef.current) return;
    const { knotGroup, orbGroup } = stateRef.current;
    orbGroup.visible = variant === "orb";
    knotGroup.visible = variant === "knot";
  }, [variant]);

  // Theme change: instant color and shader update
  React.useEffect(() => {
    if (!stateRef.current) return;
    const isDark = theme === "dark";
    const {
      knotWireframeMat,
      knotPointsMat,
      orbWireframeMat,
      orbPointsMat,
      orbCoreMat,
      orbRingMat,
      gyroRing1Mat,
      gyroRing2Mat,
      particleMat,
      pointLight,
      darkParticleTexture,
      lightParticleTexture,
    } = stateRef.current;

    const darkHex = 0xffffff;
    const lightHex = 0x18181b;
    const activeColor = isDark ? darkHex : lightHex;
    const blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;

    knotWireframeMat.color.setHex(activeColor);
    knotWireframeMat.opacity = isDark ? 0.24 : 0.22;
    knotPointsMat.color.setHex(activeColor);
    knotPointsMat.blending = blending;

    orbWireframeMat.color.setHex(activeColor);
    orbWireframeMat.opacity = isDark ? 0.24 : 0.22;
    orbPointsMat.color.setHex(activeColor);
    orbPointsMat.blending = blending;
    orbCoreMat.color.setHex(activeColor);
    orbRingMat.color.setHex(activeColor);

    gyroRing1Mat.color.setHex(activeColor);
    gyroRing2Mat.color.setHex(isDark ? 0xffffff : 0x27272a);

    particleMat.color.setHex(activeColor);
    particleMat.map = isDark ? darkParticleTexture : lightParticleTexture;
    particleMat.opacity = isDark ? 0.6 : 0.48;
    particleMat.blending = blending;

    pointLight.color.setHex(isDark ? 0xffffff : 0x52525b);
    pointLight.intensity = isDark ? 2.8 : 1.8;

    knotWireframeMat.needsUpdate = true;
    knotPointsMat.needsUpdate = true;
    orbWireframeMat.needsUpdate = true;
    orbPointsMat.needsUpdate = true;
    orbCoreMat.needsUpdate = true;
    orbRingMat.needsUpdate = true;
    gyroRing1Mat.needsUpdate = true;
    gyroRing2Mat.needsUpdate = true;
    particleMat.needsUpdate = true;
  }, [theme]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing select-none"
    />
  );
}
