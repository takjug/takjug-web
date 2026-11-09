"use client";

import * as React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowUpRight,
  ArrowDown,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Activity,
  Check,
  Radio,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { MandateReflection } from "@/components/mandate-reflection";
import { ContactModal } from "@/components/contact-modal";
import type { ArtVariant } from "@/components/creative-canvas";

// Dynamically import Three.js Canvas with SSR disabled
const CreativeCanvas = dynamic(() => import("@/components/creative-canvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#FAFAFA] dark:bg-[#070A0F]" />,
});

const ART_VARIANTS: ArtVariant[] = ["knot", "matrix", "ribbon", "orb"];

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [artVariant, setArtVariant] = React.useState<ArtVariant>("knot");
  const [activeDeployment, setActiveDeployment] = React.useState<"portasnap" | "akonilede">("portasnap");
  const [activePhotoPreset, setActivePhotoPreset] = React.useState<"icao" | "us">("icao");
  const [isContactOpen, setIsContactOpen] = React.useState(false);
  const [contactSubject, setContactSubject] = React.useState("Inquiry: Takjug Technologies");
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const carouselRef = React.useRef<HTMLDivElement>(null);

  const scrollToDeployment = (id: "portasnap" | "akonilede") => {
    setActiveDeployment(id);
    const container = carouselRef.current;
    if (!container) return;
    const target = document.getElementById(`deployment-${id}`);
    if (target) {
      const containerLeft = container.getBoundingClientRect().left;
      const targetLeft = target.getBoundingClientRect().left;
      container.scrollBy({
        left: targetLeft - containerLeft,
        behavior: "smooth",
      });
    }
  };

  const handleCarouselScroll = () => {
    const container = carouselRef.current;
    if (!container) return;
    const portasnapEl = document.getElementById("deployment-portasnap");
    const akoniledeEl = document.getElementById("deployment-akonilede");
    if (!portasnapEl || !akoniledeEl) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    const pRect = portasnapEl.getBoundingClientRect();
    const pCenter = pRect.left + pRect.width / 2;

    const aRect = akoniledeEl.getBoundingClientRect();
    const aCenter = aRect.left + aRect.width / 2;

    const newActive =
      Math.abs(containerCenter - pCenter) < Math.abs(containerCenter - aCenter)
        ? "portasnap"
        : "akonilede";

    if (newActive !== activeDeployment) {
      setActiveDeployment(newActive);
    }
  };

  const handlePrev = () => {
    scrollToDeployment("portasnap");
  };

  const handleNext = () => {
    scrollToDeployment("akonilede");
  };

  const handleContactTrigger = (subject = "Inquiry: Takjug Technologies") => {
    try {
      navigator.clipboard.writeText("dev@takjug.com");
      setToastMessage("Copied dev@takjug.com to clipboard");
      setTimeout(() => setToastMessage(null), 3000);
    } catch {
      // fallback
    }
    setContactSubject(subject);
    setIsContactOpen(true);
  };

  // Dynamic 3D art piece selection on page reload (cycles through the 4 distinct sculptures)
  React.useEffect(() => {
    try {
      const stored = sessionStorage.getItem("takjug_art_variant") as ArtVariant | null;
      const currentIndex = stored ? ART_VARIANTS.indexOf(stored) : -1;
      const nextIndex =
        currentIndex >= 0
          ? (currentIndex + 1) % ART_VARIANTS.length
          : Math.floor(Math.random() * ART_VARIANTS.length);
      const chosen = ART_VARIANTS[nextIndex];
      sessionStorage.setItem("takjug_art_variant", chosen);
      setArtVariant(chosen);
    } catch {
      setArtVariant(ART_VARIANTS[Math.floor(Math.random() * ART_VARIANTS.length)]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#070A0F] text-neutral-900 dark:text-neutral-100 selection:bg-neutral-200 dark:selection:bg-neutral-800 selection:text-black dark:selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-200">
      {/* 
        ========================================================================
        HERO SECTION: 100vh Full Viewport Unified 3D Master Kinetic Sculpture
        ========================================================================
      */}
      <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-between overflow-hidden border-b border-neutral-200/80 dark:border-neutral-800/60">
        {/* Full-Screen WebGL Canvas Backdrop */}
        <div className="absolute inset-0 w-full h-full z-0">
          <CreativeCanvas theme={resolvedTheme} variant={artVariant} />
          {/* Subtle gradient vignettes for seamless contrast against background */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#FAFAFA] dark:from-[#070A0F] via-[#FAFAFA]/70 dark:via-[#070A0F]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FAFAFA]/90 dark:from-[#070A0F]/80 to-transparent pointer-events-none" />
        </div>

        {/* Minimalist Floating Navigation */}
        <header className="relative z-20 w-full">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 h-24 flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/90 dark:bg-neutral-900/80 backdrop-blur flex items-center justify-center text-black dark:text-white font-mono font-bold text-sm group-hover:border-neutral-400 dark:group-hover:border-neutral-500 transition-colors shadow-sm">
                T
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-wider text-neutral-900 dark:text-white">
                  TAKJUG
                </span>
                <span className="text-neutral-500 text-[10px] font-mono tracking-widest -mt-0.5">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              <a href="#deployments" className="hover:text-black dark:hover:text-white transition-colors">
                Deployments
              </a>
              <a href="#mandate" className="hover:text-black dark:hover:text-white transition-colors">
                The Mandate
              </a>
              <Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">
                Privacy
              </Link>
            </nav>

            <div>
              <button
                type="button"
                onClick={() => handleContactTrigger("General Inquiry: Takjug Technologies")}
                className="text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 backdrop-blur hover:bg-neutral-100 dark:hover:bg-neutral-800 shadow-sm cursor-pointer"
              >
                dev@takjug.com <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </button>
            </div>
          </div>
        </header>

        {/* Floating Hero Typography & Proposition (Refined, Editorial Proportion) */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 w-full my-auto pointer-events-none">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08] mb-4">
              Engineering ease.
            </h1>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-7 max-w-md">
              Frontier venture studio &amp; applied AI. Conceived in Africa, built for the world.
            </p>

            <div className="flex flex-wrap items-center gap-3 pointer-events-auto">
              <a
                href="#deployments"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
              >
                Deployments <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => handleContactTrigger("Partnership Inquiry: Takjug Technologies")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 backdrop-blur hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white text-xs tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
              >
                Contact <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Floating Footer: Editorial Scroll Indicator (Zero Button Clutter) */}
        <div className="relative z-20 pb-8 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto w-full flex items-center justify-center pointer-events-none">
          <a
            href="#deployments"
            aria-label="Scroll to deployments"
            className="pointer-events-auto flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/50 backdrop-blur text-[11px] font-mono uppercase tracking-widest text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            <ArrowDown className="w-3 h-3 animate-bounce" />
          </a>
        </div>
      </section>

      {/* 
        ========================================================================
        MAIN BODY: Swiss Engineering Index, The Mandate & Collaboration
        ========================================================================
      */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Systems Index: Fluid MetaLab-style Project Showcase & Scrolling Carousel */}
        <section id="deployments" className="relative py-24 sm:py-28 border-b border-neutral-200 dark:border-neutral-800/60 transition-colors duration-700">
          {/* Dynamic Ambient Atmospheric Glow (Transitions between project colorways) */}
          <div
            aria-hidden="true"
            className={`absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[640px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 ease-in-out -z-10 ${
              activeDeployment === "portasnap"
                ? "bg-gradient-to-br from-cyan-500/15 via-emerald-500/10 to-blue-500/5 dark:from-cyan-400/10 dark:via-emerald-400/5 dark:to-transparent"
                : "bg-gradient-to-br from-amber-500/15 via-rose-500/10 to-orange-500/5 dark:from-amber-400/10 dark:via-rose-400/5 dark:to-transparent"
            }`}
          />

          {/* Header Bar with Deployment Tab Switcher & MetaLab-style Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-neutral-300 dark:border-neutral-800 gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${
                  activeDeployment === "portasnap"
                    ? "bg-cyan-500 shadow-[0_0_8px_rgba(0,210,255,0.8)]"
                    : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                }`}
              />
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-900 dark:text-neutral-100 font-semibold">
                  Systems Index
                </h2>
                <span className="text-[10px] font-mono text-neutral-500 block">
                  {activeDeployment === "portasnap"
                    ? "01 // Studio Venture Deployment"
                    : "02 // Client Enterprise Partnership"}
                </span>
              </div>
            </div>

            {/* Tactical Switcher Tabs & Arrows */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-200/70 dark:bg-neutral-900/90 border border-neutral-300/80 dark:border-neutral-800">
                <button
                  type="button"
                  onClick={() => scrollToDeployment("portasnap")}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                    activeDeployment === "portasnap"
                      ? "bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white font-bold shadow-xs border border-neutral-300/70 dark:border-neutral-800"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <img
                    src="/brand/portasnap_icon.png"
                    alt=""
                    className="w-3.5 h-3.5 rounded-sm shrink-0"
                  />
                  <span>01 // PortaSnap</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToDeployment("akonilede")}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                    activeDeployment === "akonilede"
                      ? "bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white font-bold shadow-xs border border-neutral-300/70 dark:border-neutral-800"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <div className="w-3.5 h-3.5 rounded-sm bg-white p-0.5 flex items-center justify-center shrink-0">
                    <img
                      src="/brand/akonilede_logo.svg"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>02 // Àkọ́niledè Yorùbá</span>
                </button>
              </div>

              {/* Prev / Next Chevrons */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={activeDeployment === "portasnap"}
                  aria-label="Previous deployment"
                  className="w-8 h-8 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white disabled:opacity-35 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={activeDeployment === "akonilede"}
                  aria-label="Next deployment"
                  className="w-8 h-8 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white disabled:opacity-35 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 
            Fluid Scrolling Carousel Container 
            Supports swipe on touch, trackpad / horizontal scroll, and keyboard / arrow buttons
          */}
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-8 sm:gap-12 py-10 sm:py-14 w-full"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* ==================================================================== */}
            {/* SLIDE 01: PortaSnap (Flagship Studio Venture)                        */}
            {/* ==================================================================== */}
            <article
              id="deployment-portasnap"
              className="w-full min-w-full shrink-0 snap-center rounded-3xl border border-neutral-200/90 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/30 backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-sm transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Left: Editorial & Technical Specifications */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3 mb-5 text-xs font-mono uppercase tracking-wider text-neutral-500">
                    <span className="font-bold text-neutral-950 dark:text-white">01 // Flagship Venture</span>
                    <span>•</span>
                    <span className="text-cyan-600 dark:text-cyan-400">Studio Owned</span>
                    <span>•</span>
                    <span>On-Device AI</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Verified
                    </span>
                  </div>

                  {/* Prominent High-Craft Logo & Brand Identity */}
                  <div className="flex items-center gap-4 sm:gap-5 mb-5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-md bg-neutral-950 overflow-hidden shrink-0 flex items-center justify-center">
                      <img
                        src="/brand/portasnap_icon.png"
                        alt="PortaSnap App Icon"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white tracking-tight leading-none mb-1">
                        PortaSnap
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400">
                        Biometric Passport &amp; Visa Studio
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 max-w-xl">
                    The on-device biometric passport and visa studio. Verified for international ICAO Doc 9303 compliance with sub-pixel face alignment. All processing runs locally on device hardware—zero photos or biometric vectors ever leave your phone.
                  </p>

                  {/* Monospace Technical Specification Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 mb-6 border-y border-neutral-200 dark:border-neutral-800/80 text-[11px] font-mono">
                    <div>
                      <span className="text-neutral-400 dark:text-neutral-500 block mb-0.5">ENGINE</span>
                      <span className="font-semibold text-neutral-900 dark:text-neutral-200">TFLite GPU</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 dark:text-neutral-500 block mb-0.5">STANDARD</span>
                      <span className="font-semibold text-neutral-900 dark:text-neutral-200">ICAO Doc 9303</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 dark:text-neutral-500 block mb-0.5">LATENCY</span>
                      <span className="font-semibold text-neutral-900 dark:text-neutral-200">&lt;8.4ms Sub-Pixel</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 dark:text-neutral-500 block mb-0.5">TELEMETRY</span>
                      <span className="font-semibold text-neutral-900 dark:text-neutral-200">0 KB Exfiltration</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.takjug.portasnap"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors shadow-sm cursor-pointer"
                    >
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M3.609 1.813C3.36 2.073 3.2 2.51 3.2 3.093v17.814c0 .583.16 1.02.41 1.28l.067.067L13.68 12.25v-.277L3.676 1.745l-.067.068z"
                          fill="#00D2FF"
                        />
                        <path
                          d="M17.017 15.59l-3.336-3.34v-.278l3.336-3.34.075.042 3.953 2.247c1.129.641 1.129 1.69 0 2.333l-3.953 2.248-.075.089z"
                          fill="#FFCE00"
                        />
                        <path
                          d="M13.756 12.113L3.609 22.254c.371.393.985.441 1.68.046l11.728-6.662-3.261-3.525z"
                          fill="#FF334B"
                        />
                        <path
                          d="M13.756 11.887l3.261-3.525L5.289 1.7c-.695-.395-1.309-.347-1.68.046l10.147 10.14z"
                          fill="#00F076"
                        />
                      </svg>
                      <div className="flex flex-col text-left leading-none font-sans">
                        <span className="text-[8px] uppercase tracking-wider font-semibold opacity-70">
                          GET IT ON
                        </span>
                        <span className="text-[11px] font-bold tracking-tight mt-0.5">
                          Google Play
                        </span>
                      </div>
                    </a>
                    <Link
                      href="/privacy/portasnap"
                      className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors underline"
                    >
                      Privacy Policy →
                    </Link>
                    <Link
                      href="/terms/portasnap"
                      className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors underline"
                    >
                      Terms of Service →
                    </Link>
                  </div>
                </div>

                {/* Right: Precision CAD Biometric Optical Viewfinder */}
                <div className="lg:col-span-5">
                  <div className="relative border border-neutral-300 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/40 p-4 rounded-2xl shadow-sm">
                    {/* Viewfinder Header Controls */}
                    <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                      <div className="flex items-center gap-2">
                        <Camera className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" />
                        <span className="font-bold text-neutral-950 dark:text-white">OPTICAL RETICLE</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>

                      {/* Aspect Ratio Standard Switcher */}
                      <div className="flex gap-1 p-0.5 rounded-md bg-neutral-200 dark:bg-neutral-800 border border-neutral-300/80 dark:border-neutral-700">
                        <button
                          type="button"
                          onClick={() => setActivePhotoPreset("icao")}
                          className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors cursor-pointer ${
                            activePhotoPreset === "icao"
                              ? "bg-neutral-950 text-white dark:bg-white dark:text-black font-bold"
                              : "text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                          }`}
                        >
                          ICAO 35×45mm
                        </button>
                        <button
                          type="button"
                          onClick={() => setActivePhotoPreset("us")}
                          className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors cursor-pointer ${
                            activePhotoPreset === "us"
                              ? "bg-neutral-950 text-white dark:bg-white dark:text-black font-bold"
                              : "text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                          }`}
                        >
                          US 2×2"
                        </button>
                      </div>
                    </div>

                    {/* CAD Canvas Frame */}
                    <div className="h-56 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 relative overflow-hidden flex items-center justify-center shadow-inner">
                      {/* Corner Crosshair Markers */}
                      <span className="absolute top-2 left-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-600 select-none">+</span>
                      <span className="absolute top-2 right-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-600 select-none">+</span>
                      <span className="absolute bottom-2 left-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-600 select-none">+</span>
                      <span className="absolute bottom-2 right-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-600 select-none">+</span>

                      {/* Technical Coordinate Sub-Grid */}
                      <div className="absolute inset-x-8 top-1/2 border-t border-dashed border-neutral-200 dark:border-neutral-800 -translate-y-4" />
                      <div className="absolute inset-y-6 left-1/2 border-l border-dashed border-neutral-200 dark:border-neutral-800" />

                      {/* Animated Scanning Sweep Laser Beam */}
                      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 dark:via-cyan-400 to-transparent opacity-40 animate-[scan_4s_ease-in-out_infinite]" />

                      {/* Biometric Head Oval Guideline */}
                      <div
                        className={`transition-all duration-500 border border-neutral-500 dark:border-neutral-400 flex items-center justify-center relative ${
                          activePhotoPreset === "icao"
                            ? "w-28 h-36 rounded-[50%]"
                            : "w-32 h-32 rounded-[50%]"
                        }`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 absolute" />
                        <span className="text-[10px] font-mono text-neutral-700 dark:text-neutral-300 bg-white/90 dark:bg-neutral-950/90 px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-800">
                          {activePhotoPreset === "icao" ? "70–80% Ratio" : "50–69% Ratio"}
                        </span>
                      </div>

                      {/* Telemetry Footer */}
                      <div className="absolute bottom-2 left-3 text-[10px] font-mono text-neutral-700 dark:text-neutral-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        <span>Geometry Validated</span>
                      </div>
                      <div className="absolute bottom-2 right-3 text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
                        ISO/IEC 19794-5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* ==================================================================== */}
            {/* SLIDE 02: Àkọ́niledè Yorùbá (Client Enterprise Partnership)          */}
            {/* ==================================================================== */}
            <article
              id="deployment-akonilede"
              className="w-full min-w-full shrink-0 snap-center rounded-3xl border border-neutral-200/90 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/30 backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-sm transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Left: Editorial & Technical Specifications */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3 mb-5 text-xs font-mono uppercase tracking-wider text-neutral-500">
                    <span className="font-bold text-neutral-950 dark:text-white">02 // Client Partnership</span>
                    <span>•</span>
                    <span className="text-amber-600 dark:text-amber-400">Enterprise Engagement</span>
                    <span>•</span>
                    <span>Indigenous Infrastructure</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1.5 text-neutral-900 dark:text-neutral-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      Active Platform
                    </span>
                  </div>

                  {/* Prominent High-Craft Logo & Brand Identity */}
                  <div className="flex items-center gap-4 sm:gap-5 mb-5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-md bg-white p-3.5 sm:p-4 flex items-center justify-center shrink-0">
                      <img
                        src="/brand/akonilede_logo.svg"
                        alt="Àkọ́niledè Yorùbá Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white tracking-tight leading-none mb-1">
                        Àkọ́niledè Yorùbá
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400">
                        Language Infrastructure &amp; Applied AI
                      </p>
                    </div>
                  </div>

                  {/* Casual, Unambiguous Partnership Callout */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs font-mono mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Client Partnership — Systems platform engineered by Takjug for Àkọ́niledè</span>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 max-w-xl">
                    End-to-end digital infrastructure for indigenous language education and cultural preservation. Real-time WebRTC virtual classrooms paired with intelligent Gemini AI dialect tutoring. Systems architecture and multiplatform client engineered by Takjug.
                  </p>

                  {/* Monospace Technical Specification Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 mb-6 border-y border-neutral-200 dark:border-neutral-800/80 text-[11px] font-mono">
                    <div>
                      <span className="text-neutral-400 dark:text-neutral-500 block mb-0.5">ARCHITECTURE</span>
                      <span className="font-semibold text-neutral-900 dark:text-neutral-200">WebRTC SFU</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 dark:text-neutral-500 block mb-0.5">AI ENGINE</span>
                      <span className="font-semibold text-neutral-900 dark:text-neutral-200">Gemini 1.5 Live</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 dark:text-neutral-500 block mb-0.5">ACCURACY</span>
                      <span className="font-semibold text-neutral-900 dark:text-neutral-200">99.2% Tone Parsing</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 dark:text-neutral-500 block mb-0.5">DEPLOYMENT</span>
                      <span className="font-semibold text-neutral-900 dark:text-neutral-200">Multiplatform</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => handleContactTrigger("Partnership Inquiry: Systems Architecture & Applied AI")}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors shadow-sm cursor-pointer"
                    >
                      <span>Architect a Partnership</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-neutral-500 text-[11px]">
                      Full-lifecycle engineering &amp; managed platform delivery.
                    </span>
                  </div>
                </div>

                {/* Right: Architectural Virtual Classroom SFU Node Preview (Clean & Professional) */}
                <div className="lg:col-span-5">
                  <div className="relative border border-neutral-300 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/40 p-4 rounded-2xl shadow-sm">
                    {/* Header Controls */}
                    <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                      <div className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" />
                        <span className="font-bold text-neutral-950 dark:text-white">SYSTEMS ARCHITECTURE</span>
                      </div>
                      <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        <span>Live SFU Mesh</span>
                      </div>
                    </div>

                    {/* Architectural Node Frame */}
                    <div className="h-56 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 relative overflow-hidden p-4 flex flex-col justify-between shadow-inner">
                      {/* Corner CAD Markers */}
                      <span className="absolute top-2 left-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-600 select-none">+</span>
                      <span className="absolute top-2 right-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-600 select-none">+</span>
                      <span className="absolute bottom-2 left-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-600 select-none">+</span>
                      <span className="absolute bottom-2 right-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-600 select-none">+</span>

                      {/* Top Telemetry Row */}
                      <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800/80 pb-2.5">
                        <div>
                          <span className="text-[11px] font-mono font-bold text-neutral-900 dark:text-neutral-100 block">
                            Virtual Classroom &amp; Dialect SFU Node
                          </span>
                          <span className="text-[10px] font-mono text-neutral-400">
                            WebRTC Selective Forwarding Unit • E2EE DTLS-SRTP
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          &lt;24ms RTT
                        </span>
                      </div>

                      {/* Middle Architecture Pipeline Preview */}
                      <div className="grid grid-cols-3 gap-2 py-2 text-center text-[10px] font-mono">
                        <div className="p-2 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                          <span className="text-neutral-400 block mb-0.5">MEDIA SFU</span>
                          <span className="font-bold text-neutral-900 dark:text-neutral-200">Adaptive HD</span>
                          <span className="text-[9px] text-emerald-600 dark:text-emerald-400 block mt-0.5">0.00% Loss</span>
                        </div>
                        <div className="p-2 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                          <span className="text-neutral-400 block mb-0.5">AI ENGINE</span>
                          <span className="font-bold text-neutral-900 dark:text-neutral-200">Gemini Live</span>
                          <span className="text-[9px] text-neutral-500 block mt-0.5">Tone Parse</span>
                        </div>
                        <div className="p-2 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                          <span className="text-neutral-400 block mb-0.5">WHITEBOARD</span>
                          <span className="font-bold text-neutral-900 dark:text-neutral-200">Multi-Peer</span>
                          <span className="text-[9px] text-cyan-600 dark:text-cyan-400 block mt-0.5">Real-time</span>
                        </div>
                      </div>

                      {/* Bottom Status Row */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <span>Delivered &amp; Maintained by Takjug</span>
                        </span>
                        <span className="text-neutral-400">Scale: Global Distributed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Carousel Bottom Navigation & Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-neutral-200 dark:border-neutral-800/80 gap-4 text-xs font-mono text-neutral-500">
            {/* Slide Indicators */}
            <div className="flex items-center gap-3">
              <span className="font-bold text-neutral-950 dark:text-white">
                {activeDeployment === "portasnap" ? "01" : "02"}
              </span>
              <span>/</span>
              <span>02 Deployments</span>
              <div className="flex items-center gap-1.5 ml-2">
                <button
                  type="button"
                  onClick={() => scrollToDeployment("portasnap")}
                  aria-label="Jump to PortaSnap"
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeDeployment === "portasnap"
                      ? "w-8 bg-neutral-950 dark:bg-white"
                      : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => scrollToDeployment("akonilede")}
                  aria-label="Jump to Àkọ́niledè Yorùbá"
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeDeployment === "akonilede"
                      ? "w-8 bg-neutral-950 dark:bg-white"
                      : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400"
                  }`}
                />
              </div>
            </div>

            {/* Quick Switch Button */}
            <button
              type="button"
              onClick={() =>
                scrollToDeployment(
                  activeDeployment === "portasnap" ? "akonilede" : "portasnap"
                )
              }
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors cursor-pointer"
            >
              <span>
                View {activeDeployment === "portasnap" ? "02 // Àkọ́niledè Yorùbá (Client)" : "01 // PortaSnap (Studio Venture)"}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* The Mandate: Philosophical Statement & Pure Liquid Typographic Mirror */}
        <section id="mandate" className="py-24 sm:py-32 border-b border-neutral-200 dark:border-neutral-800/60 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Original Mandate Typography */}
            <div className="lg:col-span-6 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold mb-4 block">
                The Mandate
              </span>

              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-snug mb-6">
                “The measure of technology is human ease.<br className="hidden sm:inline" />
                {" "}If an invention does not tangibly lower the<br className="hidden sm:inline" />
                {" "}friction of survival and living, it is not<br className="hidden sm:inline" />
                {" "}progress.”
              </blockquote>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                Takjug exists to channel engineering brilliance into systems that reduce anxiety, restore community, and respect user sovereignty by design.
              </p>
            </div>

            {/* Right: The Pure Typographic Reflection (No Card Container) */}
            <div className="lg:col-span-6 max-w-xl">
              <MandateReflection />
            </div>
          </div>
        </section>

        {/* Understated Collaboration Section */}
        <section className="py-24 sm:py-32">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold mb-3 block">
              Collaboration
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 dark:text-white tracking-tight mb-6">
              Let&apos;s build.
            </h2>
            <div className="mb-4">
              <button
                type="button"
                onClick={() => handleContactTrigger("Collaboration Brief: Takjug Technologies")}
                className="text-2xl sm:text-4xl font-mono text-neutral-950 hover:text-neutral-600 dark:text-white dark:hover:text-neutral-400 transition-colors inline-flex items-center gap-2 group text-left cursor-pointer"
              >
                dev@takjug.com
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Understated Minimalist Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800/60 py-8 text-xs text-neutral-500 font-mono">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Takjug Technologies.</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>Lagos, Nigeria</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms/portasnap" className="hover:text-black dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>

      {/* Communication Protocol Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultSubject={contactSubject}
      />

      {/* Instant Clipboard Micro-Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-black font-mono text-xs shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 border border-neutral-800 dark:border-neutral-200">
          <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
