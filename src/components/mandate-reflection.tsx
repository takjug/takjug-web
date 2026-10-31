"use client";

import * as React from "react";

export function MandateReflection() {
  const [scale, setScale] = React.useState(4);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = Math.abs((e.clientX - rect.left) / rect.width - 0.5);
    const relY = Math.abs((e.clientY - rect.top) / rect.height - 0.5);
    // Dynamic liquid ripple amplitude reacting smoothly to pointer
    setScale(3.5 + (relX + relY) * 4);
  };

  const handleMouseLeave = () => {
    setScale(4);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative select-none pointer-events-auto cursor-default group"
    >
      {/* SVG Liquid Water Ripple Filter */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="mandate-liquid-reflection" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.035"
            numOctaves="2"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="12s"
              values="0.012 0.035; 0.018 0.055; 0.012 0.035"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={scale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Hairline Boundary Axis (Horizontally aligned with THE MANDATE baseline on left) */}
      <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800/80 my-2 mb-4" />

      {/* Pure Typographic Liquid Reflection Container with Vertical Dissolve */}
      <div
        className="transition-opacity duration-500 opacity-40 dark:opacity-30 group-hover:opacity-70"
        style={{
          filter: "url(#mandate-liquid-reflection)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 45%, transparent 88%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 45%, transparent 88%)",
        }}
      >
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-snug mb-6">
          <span className="block transform scale-y-[-1] origin-center">
            “The measure of technology is human ease.
          </span>
          <span className="block transform scale-y-[-1] origin-center">
            If an invention does not tangibly lower the
          </span>
          <span className="block transform scale-y-[-1] origin-center">
            friction of survival and living, it is not
          </span>
          <span className="block transform scale-y-[-1] origin-center">
            progress.”
          </span>
        </blockquote>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
          <span className="block transform scale-y-[-1] origin-center">
            Takjug exists to channel engineering brilliance into systems that
          </span>
          <span className="block transform scale-y-[-1] origin-center">
            reduce anxiety, restore community, and respect user sovereignty by design.
          </span>
        </p>
      </div>
    </div>
  );
}
