"use client";

import * as React from "react";
import { Sparkles, ShieldCheck, HeartHandshake, Gauge } from "lucide-react";

export function MandateMirror() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [hoveredAxiom, setHoveredAxiom] = React.useState<number | null>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0.5, y: 0.5 });

  // Interactive harmonic canvas animation representing "Friction Dissolving into Ease"
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 360;
      canvas.height = 110;
    };
    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      t += 0.025;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const midY = h / 2;

      // Draw 3 layered harmonic standing waves
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        const alpha = layer === 0 ? 0.7 : layer === 1 ? 0.35 : 0.15;
        const strokeColor =
          document.documentElement.classList.contains("dark")
            ? `rgba(255, 255, 255, ${alpha})`
            : `rgba(24, 24, 27, ${alpha})`;

        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = layer === 0 ? 1.5 : 1;

        for (let x = 0; x < w; x += 2) {
          const normX = x / w; // 0 to 1 across width
          // Wave starts chaotic on left (friction), dampens into tranquil harmony on right (ease)
          const damping = Math.pow(1 - normX * 0.75, 1.8);
          const mouseEffect = Math.exp(-Math.pow((normX - mousePos.x) * 4, 2)) * 12;

          const y1 = Math.sin(normX * 9 - t * 2 + layer * 1.2) * 16 * damping;
          const y2 = Math.cos(normX * 16 + t * 1.5) * 8 * damping;
          const totalY = midY + y1 + y2 + (mouseEffect ? Math.sin(t * 4) * mouseEffect : 0);

          if (x === 0) {
            ctx.moveTo(x, totalY);
          } else {
            ctx.lineTo(x, totalY);
          }
        }
        ctx.stroke();
      }

      // Draw tranquil equilibrium focal node on the right
      const nodeX = w * 0.88;
      const nodeY = midY + Math.sin(t * 1.5) * 2;
      ctx.beginPath();
      ctx.arc(nodeX, nodeY, 3, 0, Math.PI * 2);
      ctx.fillStyle = document.documentElement.classList.contains("dark")
        ? "#ffffff"
        : "#18181b";
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const axioms = [
    {
      icon: Gauge,
      metric: "Δ Friction → 0",
      label: "Frictionless Living",
      desc: "If an invention does not reduce stress and reclaim hours, it is not progress.",
    },
    {
      icon: ShieldCheck,
      metric: "100% Local",
      label: "Biometric Sovereignty",
      desc: "All neural models execute directly on your hardware. Zero data colonization.",
    },
    {
      icon: HeartHandshake,
      metric: "Restored Community",
      label: "Human Wholeness",
      desc: "Engineering tools that serve people, never software that traps attention.",
    },
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl border border-neutral-300/80 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl p-6 sm:p-8 overflow-hidden shadow-xl transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-700"
    >
      {/* Subtle reflective glass sheen animation */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

      {/* Top Mirror Header & Telemetry */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-200/80 dark:border-neutral-800/80 text-xs font-mono">
        <div className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200 font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-neutral-500" />
          <span>The Mirror of Ease</span>
        </div>
        <span className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Active Equilibrium
        </span>
      </div>

      {/* Harmonic Standing Wave Visualization (Friction → Ease) */}
      <div className="relative mb-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-50/80 dark:bg-neutral-900/40 p-3 overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 mb-1 px-1">
          <span>High Friction (Chaos)</span>
          <span className="text-neutral-700 dark:text-neutral-300 font-bold">Harmonic Ease (Quiet)</span>
        </div>

        <canvas ref={canvasRef} className="w-full h-[110px] block" />

        <div className="absolute bottom-2 left-4 text-[10px] font-mono text-neutral-400 flex items-center gap-1">
          <span className="text-neutral-600 dark:text-neutral-300">Hover to test wave damping</span>
        </div>
      </div>

      {/* Axiomatic Transformation Reflections */}
      <div className="space-y-3 mb-6">
        {axioms.map((ax, idx) => {
          const Icon = ax.icon;
          const isHovered = hoveredAxiom === idx;
          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredAxiom(idx)}
              onMouseLeave={() => setHoveredAxiom(null)}
              className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-default ${
                isHovered
                  ? "border-neutral-400 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-900/80 shadow-sm"
                  : "border-neutral-200/70 dark:border-neutral-800/60 bg-white/40 dark:bg-neutral-950/40"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                  <span className="text-xs font-bold text-neutral-950 dark:text-white">
                    {ax.label}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 font-semibold">
                  {ax.metric}
                </span>
              </div>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {ax.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Optical Typographic Inversion (Literal Mirror Reflection) */}
      <div className="pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80 relative overflow-hidden select-none pointer-events-none">
        <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">
          Optical Reflection
        </div>
        <div
          className="text-lg sm:text-xl font-black text-neutral-950 dark:text-white opacity-25 dark:opacity-20 transform scale-y-[-1] filter blur-[0.4px] origin-top tracking-tight"
          style={{
            maskImage: "linear-gradient(to bottom, black 20%, transparent 90%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 90%)",
          }}
        >
          “The measure of technology is human ease.”
        </div>
      </div>
    </div>
  );
}
