// @ts-nocheck
"use client";

import * as React from "react";
import * as THREE from "three";

interface CreativeCanvasProps {
  theme?: "dark" | "light";
}

/**
 * CreativeCanvas — The Unified Master Kinetic Sculpture for Takjug Technologies
 * Fuses the mathematical precision of the crystalline Quantum Lattice Core with the
 * fluid topological elegance of the Torus Knot & Helical Wave loop.
 */
export default function CreativeCanvas({
  theme = "dark",
}: CreativeCanvasProps) {
  const mountRef = React.useRef<HTMLDivElement>(null);

  const stateRef = React.useRef<{
    materials: THREE.Material[];
    pointLight: THREE.PointLight;
    particleMat: THREE.PointsMaterial;
    darkParticleTexture: THREE.CanvasTexture;
    lightParticleTexture: THREE.CanvasTexture;
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

    // Master Group for the Unified Kinetic Sculpture
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Responsive position and scale
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

    const registerMat = <T extends THREE.Material>(mat: T): T => {
      trackedMaterials.push(mat);
      return mat;
    };

    // =========================================================================
    // 01. OUTER TOPOLOGICAL BODY: Torus Knot Wave
    // =========================================================================
    const outerKnotGroup = new THREE.Group();
    masterGroup.add(outerKnotGroup);

    const knotGeo = new THREE.TorusKnotGeometry(1.28, 0.33, 170, 28, 2, 3);
    const knotWireframeGeo = new THREE.WireframeGeometry(knotGeo);
    const knotWireframeMat = registerMat(
      new THREE.LineBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: isDark ? 0.22 : 0.20,
      })
    );
    const knotWireframeMesh = new THREE.LineSegments(knotWireframeGeo, knotWireframeMat);
    outerKnotGroup.add(knotWireframeMesh);

    const knotPointsMat = registerMat(
      new THREE.PointsMaterial({
        color: baseColor,
        size: 0.024,
        transparent: true,
        opacity: isDark ? 0.70 : 0.65,
        blending,
      })
    );
    const knotPointsMesh = new THREE.Points(knotGeo, knotPointsMat);
    outerKnotGroup.add(knotPointsMesh);

    // =========================================================================
    // 02. INNER NUCLEUS: Crystalline Quantum Lattice Core
    // =========================================================================
    const coreGroup = new THREE.Group();
    masterGroup.add(coreGroup);

    // Outer crystalline shell (Icosahedron)
    const shellGeo = new THREE.IcosahedronGeometry(0.72, 1);
    const shellWireGeo = new THREE.WireframeGeometry(shellGeo);
    const shellWireMat = registerMat(
      new THREE.LineBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: isDark ? 0.45 : 0.40,
      })
    );
    const shellWireMesh = new THREE.LineSegments(shellWireGeo, shellWireMat);
    coreGroup.add(shellWireMesh);

    const shellPointsMat = registerMat(
      new THREE.PointsMaterial({
        color: baseColor,
        size: 0.038,
        transparent: true,
        opacity: isDark ? 0.90 : 0.85,
        blending,
      })
    );
    const shellPointsMesh = new THREE.Points(shellGeo, shellPointsMat);
    coreGroup.add(shellPointsMesh);

    // Inner geometric lattice (Octahedron nucleus)
    const nucleusGeo = new THREE.OctahedronGeometry(0.44, 0);
    const nucleusWireGeo = new THREE.WireframeGeometry(nucleusGeo);
    const nucleusWireMat = registerMat(
      new THREE.LineBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: isDark ? 0.60 : 0.50,
      })
    );
    const nucleusWireMesh = new THREE.LineSegments(nucleusWireGeo, nucleusWireMat);
    coreGroup.add(nucleusWireMesh);

    // Central pulsing starlight point light
    const pointLight = new THREE.PointLight(baseColor, isDark ? 2.5 : 1.5, 8);
    pointLight.position.set(0, 0, 0);
    coreGroup.add(pointLight);

    // =========================================================================
    // 03. ORBITAL GYROSCOPIC RADAR RINGS
    // =========================================================================
    const radarGroup = new THREE.Group();
    masterGroup.add(radarGroup);

    const ringMat = registerMat(
      new THREE.LineBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: isDark ? 0.16 : 0.14,
      })
    );

    // Equatorial orbital ring
    const ringGeo1 = new THREE.TorusGeometry(1.88, 0.0035, 16, 120);
    const ring1 = new THREE.LineSegments(new THREE.WireframeGeometry(ringGeo1), ringMat);
    radarGroup.add(ring1);

    // Polar inclined ring
    const ringGeo2 = new THREE.TorusGeometry(1.98, 0.0035, 16, 120);
    const ring2 = new THREE.LineSegments(new THREE.WireframeGeometry(ringGeo2), ringMat);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    radarGroup.add(ring2);

    // =========================================================================
    // 04. AMBIENT STARLIGHT PARTICLE FIELD
    // =========================================================================
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 8.5;
      particlePos[i + 1] = (Math.random() - 0.5) * 8.5;
      particlePos[i + 2] = (Math.random() - 0.5) * 6.5;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));

    // Particle sprite textures
    const createParticleTexture = (colorStr: string) => {
      const c = document.createElement("canvas");
      c.width = 32;
      c.height = 32;
      const ctx = c.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, colorStr);
        grad.addColorStop(0.35, colorStr);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(c);
    };

    const darkParticleTexture = createParticleTexture("rgba(255,255,255,0.95)");
    const lightParticleTexture = createParticleTexture("rgba(24,24,27,0.85)");

    const particleMat = registerMat(
      new THREE.PointsMaterial({
        size: 0.042,
        map: isDark ? darkParticleTexture : lightParticleTexture,
        transparent: true,
        opacity: isDark ? 0.40 : 0.28,
        blending,
        depthWrite: false,
      })
    );
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    stateRef.current = {
      materials: trackedMaterials,
      pointLight,
      particleMat,
      darkParticleTexture,
      lightParticleTexture,
    };

    // =========================================================================
    // INTERACTION & ANIMATION LOOP
    // =========================================================================
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetRotY = mouseX * 0.45;
      targetRotX = mouseY * 0.35;
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
    };

    const handleDragMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevPointerX;
      const deltaY = e.clientY - prevPointerY;
      masterGroup.rotation.y += deltaX * 0.005;
      masterGroup.rotation.x += deltaY * 0.005;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handleDragMove);
    window.addEventListener("pointerup", handlePointerUp);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Outer Torus Knot harmonic revolution
      outerKnotGroup.rotation.x += 0.0014;
      outerKnotGroup.rotation.y += 0.0022;

      // Inner Quantum Lattice counter-rotation
      coreGroup.rotation.y -= 0.0035;
      coreGroup.rotation.z += 0.0020;

      // Gyroscopic radar precession
      ring1.rotation.z += 0.0010;
      ring2.rotation.x += 0.0012;
      ring2.rotation.y -= 0.0008;

      // Central starlight pulse
      pointLight.intensity = (isDark ? 2.5 : 1.5) + Math.sin(elapsedTime * 2.2) * 0.5;

      // Ambient particle slow orbit
      particleSystem.rotation.y = elapsedTime * 0.015;
      particleSystem.rotation.x = elapsedTime * 0.008;

      // Smooth physics-damped mouse parallax
      if (!isDragging) {
        masterGroup.rotation.y += (targetRotY - masterGroup.rotation.y) * 0.04;
        masterGroup.rotation.x += (targetRotX - masterGroup.rotation.x) * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      width = mountRef.current.clientWidth || window.innerWidth;
      height = mountRef.current.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      updateGroupPosition(width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handleDragMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Sync theme changes with materials
  React.useEffect(() => {
    if (!stateRef.current) return;
    const { materials, pointLight, particleMat, darkParticleTexture, lightParticleTexture } =
      stateRef.current;
    const isDark = theme === "dark";
    const newColor = new THREE.Color(isDark ? 0xffffff : 0x18181b);
    const newBlending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;

    materials.forEach((mat) => {
      if ("color" in mat) {
        (mat as any).color = newColor;
      }
      mat.blending = newBlending;
      mat.needsUpdate = true;
    });

    if (pointLight) {
      pointLight.color = newColor;
      pointLight.intensity = isDark ? 2.5 : 1.5;
    }

    if (particleMat) {
      particleMat.map = isDark ? darkParticleTexture : lightParticleTexture;
      particleMat.opacity = isDark ? 0.40 : 0.28;
      particleMat.needsUpdate = true;
    }
  }, [theme]);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />;
}
