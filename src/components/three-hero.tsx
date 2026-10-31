// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 3.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D elements for global rotation
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Fibonacci Sphere of "Human Brilliance" (2,200 particles)
    const particleCount = 2200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    // Takjug Official Palette Vectors
    const colorGold = new THREE.Color("#F59E0B");      // Sovereign Solar Gold (Energy & Warmth)
    const colorAmber = new THREE.Color("#D97706");     // Warm Terracotta / Soil
    const colorCyan = new THREE.Color("#06B6D4");      // Digital Systems & Clarity
    const colorIvory = new THREE.Color("#F8FAFC");     // Soft White / Pure Ease

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 1.15 + (Math.random() - 0.5) * 0.18;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions[idx] = x;
      positions[idx + 1] = y;
      positions[idx + 2] = z;

      originalPositions[idx] = x;
      originalPositions[idx + 1] = y;
      originalPositions[idx + 2] = z;

      // Color logic: Warm core with radiant cyber accents
      const rand = Math.random();
      let pColor = colorGold;
      if (rand < 0.4) pColor = colorGold;
      else if (rand < 0.65) pColor = colorAmber;
      else if (rand < 0.85) pColor = colorCyan;
      else pColor = colorIvory;

      colors[idx] = pColor.r;
      colors[idx + 1] = pColor.g;
      colors[idx + 2] = pColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Custom Canvas Texture for perfectly round, glowing points
    const createParticleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(0.3, "rgba(245,158,11,0.8)");
        gradient.addColorStop(0.7, "rgba(6,182,212,0.3)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.038,
      vertexColors: true,
      map: createParticleTexture(),
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    coreGroup.add(particles);

    // 2. The Orbital Conduit Rings ("The Fulcrum & Convergence")
    const ringGeo1 = new THREE.RingGeometry(1.42, 1.44, 96);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.8;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(1.68, 1.695, 96);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.22,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 3.4;
    ring2.rotation.y = Math.PI / 6;
    coreGroup.add(ring2);

    // 3. Inner Pulsing Core Light
    const coreLight = new THREE.PointLight(0xf59e0b, 1.5, 6);
    coreGroup.add(coreLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Resize Handler
    const onResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop with Living Pulse
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse easing
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Group rotation
      coreGroup.rotation.y = elapsed * 0.12 + targetX * 0.4;
      coreGroup.rotation.x = Math.sin(elapsed * 0.1) * 0.1 - targetY * 0.3;

      // Counter-rotation on orbital rings
      ring1.rotation.z = elapsed * 0.18;
      ring2.rotation.z = -elapsed * 0.14;

      // Gentle organic breathing wave in particles
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const wave = 1 + Math.sin(elapsed * 1.5 + originalPositions[idx] * 2) * 0.025;
        posArray[idx] = originalPositions[idx] * wave;
        posArray[idx + 1] = originalPositions[idx + 1] * wave;
        posArray[idx + 2] = originalPositions[idx + 2] * wave;
      }
      posAttr.needsUpdate = true;

      // Light pulsing
      coreLight.intensity = 1.2 + Math.sin(elapsed * 2) * 0.4;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full pointer-events-none select-none" />;
}
