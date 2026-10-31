// @ts-nocheck
"use client";

import * as React from "react";
import * as THREE from "three";

export type ArtVariant = "knot" | "matrix" | "ribbon" | "orb";

interface CreativeCanvasProps {
  theme?: "dark" | "light";
  variant?: ArtVariant;
}

/**
 * CreativeCanvas — Multi-sculpture 3D WebGL hero background for Takjug Technologies.
 * Supports 4 distinct kinetic art pieces, dynamically selected on page reload:
 * - "knot": Architectural Torus Knot with gyroscopic rings
 * - "matrix": Quantum Matrix with nested crystalline polyhedra and radar rings
 * - "ribbon": Helical Wave Ribbon with parametric Mobius wave flow
 * - "orb": Neural Wave Orb with harmonic geodesic sphere deformation
 */
export default function CreativeCanvas({
  theme = "dark",
  variant = "knot",
}: CreativeCanvasProps) {
  const mountRef = React.useRef<HTMLDivElement>(null);

  const stateRef = React.useRef<{
    knotGroup: THREE.Group;
    orbGroup: THREE.Group;
    matrixGroup: THREE.Group;
    ribbonGroup: THREE.Group;
    materials: THREE.Material[];
    pointLight: THREE.PointLight;
    particleMat: THREE.PointsMaterial;
    darkParticleTexture: THREE.CanvasTexture;
    lightParticleTexture: THREE.CanvasTexture;
    orbGeo: THREE.IcosahedronGeometry;
    initialOrbPositions: Float32Array;
    ribbonGeo: THREE.TorusGeometry;
    initialRibbonPositions: Float32Array;
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

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 4.8;

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

    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

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
    // SCULPTURE 01: Architectural Torus Knot
    // =========================================================================
    const knotGroup = new THREE.Group();
    masterGroup.add(knotGroup);

    const knotGeo = new THREE.TorusKnotGeometry(1.25, 0.34, 160, 26, 2, 3);
    const knotWireframeMat = registerMat(
      new THREE.LineBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: isDark ? 0.24 : 0.22,
      })
    );
    const wireframeMesh = new THREE.LineSegments(new THREE.WireframeGeometry(knotGeo), knotWireframeMat);
    knotGroup.add(wireframeMesh);

    const knotPointsMat = registerMat(
      new THREE.PointsMaterial({
        color: baseColor,
        size: 0.026,
        transparent: true,
        opacity: isDark ? 0.75 : 0.70,
        blending,
      })
    );
    const knotPoints = new THREE.Points(knotGeo, knotPointsMat);
    knotGroup.add(knotPoints);

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
        color: baseColor,
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
        opacity: isDark ? 0.8 : 0.75,
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
        opacity: isDark ? 0.85 : 0.80,
        blending,
      })
    );
    const matrixPoints = new THREE.Points(matrixOuterGeo, matrixPointsMat);
    matrixGroup.add(matrixPoints);

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
        opacity: isDark ? 0.75 : 0.70,
        blending,
      })
    );
    const ribbonPoints = new THREE.Points(ribbonGeo, ribbonPointsMat);
    ribbonGroup.add(ribbonPoints);

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
    ribbonHalo.rotation.x = Math.PI / 3;
    ribbonHalo.rotation.y = Math.PI / 6;
    ribbonGroup.add(ribbonHalo);

    // Initial variant visibility
    knotGroup.visible = variant === "knot";
    orbGroup.visible = variant === "orb";
    matrixGroup.visible = variant === "matrix";
    ribbonGroup.visible = variant === "ribbon";

    // Central pulsing light
    const pointLight = new THREE.PointLight(baseColor, isDark ? 2.2 : 1.2, 8);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Ambient Starlight Particles
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 8.5;
      particlePos[i + 1] = (Math.random() - 0.5) * 8.5;
      particlePos[i + 2] = (Math.random() - 0.5) * 6.5;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));

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

    // Pointer Interaction & Animation Loop
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

      // Animate Knot
      if (knotGroup.visible) {
        knotGroup.rotation.x += 0.0016;
        knotGroup.rotation.y += 0.0024;
        gyroRing1.rotation.z += 0.0018;
        gyroRing2.rotation.x -= 0.0012;
      }

      // Animate Orb with vertex wave harmonics
      if (orbGroup.visible) {
        orbGroup.rotation.y += 0.0018;
        orbGroup.rotation.x += 0.0008;
        orbCoreMesh.rotation.y -= 0.004;
        orbCoreMesh.rotation.z += 0.002;
        orbRing.rotation.z += 0.002;

        const positions = orbGeo.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          const ox = initialOrbPositions[i];
          const oy = initialOrbPositions[i + 1];
          const oz = initialOrbPositions[i + 2];
          const wave =
            Math.sin(ox * 2.2 + elapsedTime * 1.8) *
            Math.cos(oy * 2.2 + elapsedTime * 1.4) *
            Math.sin(oz * 2.2 + elapsedTime * 1.6);
          const factor = 1 + wave * 0.12;
          positions[i] = ox * factor;
          positions[i + 1] = oy * factor;
          positions[i + 2] = oz * factor;
        }
        orbGeo.attributes.position.needsUpdate = true;
      }

      // Animate Quantum Matrix
      if (matrixGroup.visible) {
        matrixOuterMesh.rotation.x += 0.0014;
        matrixOuterMesh.rotation.y += 0.0020;
        matrixMidMesh.rotation.x -= 0.0025;
        matrixMidMesh.rotation.y -= 0.0035;
        matrixCoreMesh.rotation.y += 0.005;
        matrixCoreMesh.rotation.z -= 0.003;
        matrixRing1.rotation.z += 0.0022;
        matrixRing2.rotation.z -= 0.0018;
        matrixRing3.rotation.z += 0.0014;
      }

      // Animate Helical Ribbon
      if (ribbonGroup.visible) {
        ribbonMesh.rotation.x += 0.0018;
        ribbonMesh.rotation.y += 0.0028;
        ribbonHalo.rotation.z += 0.0015;

        const rPositions = ribbonGeo.attributes.position.array;
        for (let i = 0; i < rPositions.length; i += 3) {
          const rx = initialRibbonPositions[i];
          const ry = initialRibbonPositions[i + 1];
          const rz = initialRibbonPositions[i + 2];
          const rWave = Math.sin(rx * 3.0 + elapsedTime * 2.2) * 0.06;
          rPositions[i + 1] = ry + rWave;
        }
        ribbonGeo.attributes.position.needsUpdate = true;
      }

      pointLight.intensity = (isDark ? 2.2 : 1.2) + Math.sin(elapsedTime * 2.2) * 0.4;
      particleSystem.rotation.y = elapsedTime * 0.012;
      particleSystem.rotation.x = elapsedTime * 0.006;

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

  // Update variant visibility dynamically
  React.useEffect(() => {
    if (!stateRef.current) return;
    const { knotGroup, orbGroup, matrixGroup, ribbonGroup } = stateRef.current;
    knotGroup.visible = variant === "knot";
    orbGroup.visible = variant === "orb";
    matrixGroup.visible = variant === "matrix";
    ribbonGroup.visible = variant === "ribbon";
  }, [variant]);

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
      pointLight.intensity = isDark ? 2.2 : 1.2;
    }

    if (particleMat) {
      particleMat.map = isDark ? darkParticleTexture : lightParticleTexture;
      particleMat.opacity = isDark ? 0.40 : 0.28;
      particleMat.needsUpdate = true;
    }
  }, [theme]);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />;
}
