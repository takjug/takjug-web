// @ts-nocheck
"use client";

import * as React from "react";
import * as THREE from "three";

export default function CreativeCanvas() {
  const mountRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    // High performance WebGL renderer with anti-aliasing
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Master group for interactive inertia
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1. Monochromatic Icosahedron Wireframe Structure (Architectural Precision)
    const icoGeo = new THREE.IcosahedronGeometry(1.4, 2);
    const wireframeGeo = new THREE.WireframeGeometry(icoGeo);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.18,
      linewidth: 1,
    });
    const wireframeMesh = new THREE.LineSegments(wireframeGeo, wireframeMat);
    sculptureGroup.add(wireframeMesh);

    // 2. Inner Nested Torus Kinetic Knot (Continuity & Fluidity)
    const torusGeo = new THREE.TorusGeometry(1.0, 0.015, 16, 120);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xe2e8f0,
      transparent: true,
      opacity: 0.45,
    });
    const torusRing1 = new THREE.Mesh(torusGeo, torusMat);
    torusRing1.rotation.x = Math.PI / 3;
    sculptureGroup.add(torusRing1);

    const torusRing2 = new THREE.Mesh(torusGeo, torusMat);
    torusRing2.rotation.y = Math.PI / 3;
    torusRing2.rotation.x = -Math.PI / 4;
    sculptureGroup.add(torusRing2);

    // 3. Monochromatic Particle Stardust (1,200 points)
    const particleCount = 1200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      // Spherical distribution
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 1.35;

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

    // Custom circle texture for soft round particles
    const createCircleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(0.4, "rgba(255,255,255,0.7)");
        gradient.addColorStop(0.8, "rgba(200,200,200,0.2)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleMat = new THREE.PointsMaterial({
      size: 0.032,
      map: createCircleTexture(),
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    sculptureGroup.add(particles);

    // 4. Subtle Core Point Light (pure white/soft pearl)
    const coreLight = new THREE.PointLight(0xffffff, 2, 8);
    sculptureGroup.add(coreLight);

    // Interaction variables: Mouse drag + cursor follow
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let autoRotateSpeed = 0.003;

    // Mouse movement parallax
    let mouseX = 0;
    let mouseY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;

      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    const handlePointerDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mouseup", handlePointerUp);

    // Touch support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        if (isDragging) {
          const deltaX = touch.clientX - prevMouseX;
          const deltaY = touch.clientY - prevMouseY;
          targetRotationY += deltaX * 0.01;
          targetRotationX += deltaY * 0.01;
          prevMouseX = touch.clientX;
          prevMouseY = touch.clientY;
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!mountRef.current) return;
      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Continuous slow baseline rotation + mouse inertia
      targetRotationY += autoRotateSpeed;

      sculptureGroup.rotation.y += (targetRotationY + mouseX * 0.3 - sculptureGroup.rotation.y) * 0.05;
      sculptureGroup.rotation.x += (targetRotationX - mouseY * 0.3 - sculptureGroup.rotation.x) * 0.05;

      // Independent kinetic counter-rotation of internal rings
      torusRing1.rotation.z = elapsed * 0.25;
      torusRing2.rotation.z = -elapsed * 0.2;

      // Subtle breathing harmonic wave on particle cloud
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const positions = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const wave = 1 + Math.sin(elapsed * 1.8 + initialPositions[idx] * 2.5) * 0.035;
        positions[idx] = initialPositions[idx] * wave;
        positions[idx + 1] = initialPositions[idx + 1] * wave;
        positions[idx + 2] = initialPositions[idx + 2] * wave;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", handlePointerMove);
      container.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mouseup", handlePointerUp);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handlePointerUp);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      icoGeo.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[380px] sm:min-h-[460px] relative cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
    >
      <div className="absolute bottom-3 right-4 text-[10px] font-mono uppercase tracking-widest text-neutral-500 pointer-events-none">
        Three.js Kinetic Core • Drag to Rotate
      </div>
    </div>
  );
}
