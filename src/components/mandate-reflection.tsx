"use client";

import * as React from "react";

export function MandateReflection() {
  const [scale, setScale] = React.useState(4.5);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    // Interactive fluid wave displacement based on cursor location
    setScale(3.5 + (relX + relY) * 4);
  };

  const handleMouseLeave = () => {
    setScale(4.5);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative select-none pointer-events-auto cursor-default py-2 max-w-xl group"
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

      {/* Hairline Mirror Boundary Axis Line (Mirror Edge) */}
      <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 mb-6" />

      {/* Liquid Reflection Container with Vertical Dissolve Mask */}
      <div
        className="transition-opacity duration-500 opacity-40 dark:opacity-30 group-hover:opacity-70 space-y-4"
        style={{
          filter: "url(#mandate-liquid-reflection)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 45%, transparent 92%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 45%, transparent 92%)",
        }}
      >
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-none space-y-2.5">
          <span className="block transform scale-y-[-1] origin-center whitespace-nowrap">
            “The measure of technology
          </span>
          <span className="block transform scale-y-[-1] origin-center whitespace-nowrap">
            is human ease. If an invention
          </span>
          <span className="block transform scale-y-[-1] origin-center whitespace-nowrap">
            does not tangibly lower the friction
          </span>
          <span className="block transform scale-y-[-1] origin-center whitespace-nowrap">
            of survival and living, it is not
          </span>
          <span className="block transform scale-y-[-1] origin-center whitespace-nowrap">
            progress.”
          </span>
        </blockquote>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-normal font-normal pt-3 space-y-1.5">
          <span className="block transform scale-y-[-1] origin-center whitespace-nowrap">
            Takjug exists to channel engineering brilliance into systems
          </span>
          <span className="block transform scale-y-[-1] origin-center whitespace-nowrap">
            that reduce anxiety, restore community, and respect sovereignty.
          </span>
        </p>
      </div>
    </div>
  );
}
