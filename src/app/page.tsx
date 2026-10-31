"use client";

import * as React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowUpRight,
  ArrowDown,
  Camera,
  Volume2,
  Users,
  CheckCircle2,
  Crosshair,
  Activity,
  Check,
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
  const [activePhotoPreset, setActivePhotoPreset] = React.useState<"icao" | "us">("icao");
  const [isPlayingAudio, setIsPlayingAudio] = React.useState(false);
  const [isContactOpen, setIsContactOpen] = React.useState(false);
  const [contactSubject, setContactSubject] = React.useState("Inquiry: Takjug Technologies");
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

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

  // Synthesize authentic Yoruba tonal phonation using Web Audio API
  const handleAudioPreview = () => {
    setIsPlayingAudio(true);
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const audioCtx = new AudioCtx();
        const tones = [
          { freq: 293.66, dur: 0.28 }, // Re (Mid)
          { freq: 261.63, dur: 0.28 }, // Do (Low)
          { freq: 329.63, dur: 0.35 }, // Mi (High)
          { freq: 293.66, dur: 0.35 }, // Re (Mid)
        ];
        let startTime = audioCtx.currentTime;
        tones.forEach((tone) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(tone.freq, startTime);
          gain.gain.setValueAtTime(0.001, startTime);
          gain.gain.exponentialRampToValueAtTime(0.16, startTime + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.001, startTime + tone.dur);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(startTime);
          osc.stop(startTime + tone.dur);
          startTime += tone.dur;
        });
      }
    } catch {
      // Audio playback fallback
    }

    setTimeout(() => setIsPlayingAudio(false), 1400);
  };

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
          <div className="max-w-7xl mx-auto px-6 sm:px-10 h-24 flex items-center justify-between">
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
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 w-full my-auto pointer-events-none">
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
        <div className="relative z-20 pb-8 px-6 sm:px-10 max-w-7xl mx-auto w-full flex items-center justify-center pointer-events-none">
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
      <main className="max-w-6xl mx-auto px-6">
        {/* Systems Index (Direction 1: Swiss Engineering Grid) */}
        <section id="deployments" className="py-24 border-b border-neutral-200 dark:border-neutral-800/60">
          {/* Header Bar */}
          <div className="flex items-baseline justify-between pb-6 border-b border-neutral-300 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-neutral-950 dark:bg-white animate-pulse" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-900 dark:text-neutral-100 font-semibold">
                Systems Index
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-500">
              02 Active Deployments
            </span>
          </div>

          <div className="divide-y divide-neutral-200 dark:divide-neutral-800/80">
            {/* System 01: PortaSnap */}
            <article className="py-16 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Left: Editorial & Technical Specifications */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-wider text-neutral-500">
                    <span className="font-bold text-neutral-950 dark:text-white">01 // Flagship Venture</span>
                    <span>•</span>
                    <span>On-Device AI</span>
                    <span>•</span>
                    <span className="text-emerald-600 dark:text-emerald-400">Verified</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-4">
                    PortaSnap
                  </h3>

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
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => handleContactTrigger("PortaSnap Early APK Access Request")}
                      className="rounded-full bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-semibold h-8 text-xs px-5 shadow-sm cursor-pointer"
                    >
                      Request APK Access <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                    <Link
                      href="/privacy"
                      className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors underline"
                    >
                      Privacy Policy →
                    </Link>
                  </div>
                </div>

                {/* Right: Precision CAD Biometric Optical Viewfinder */}
                <div className="lg:col-span-5">
                  <div className="relative border border-neutral-300 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/40 p-4 rounded-xl">
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
                          className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors cursor-pointer ${activePhotoPreset === "icao"
                            ? "bg-neutral-950 text-white dark:bg-white dark:text-black font-bold"
                            : "text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                            }`}
                        >
                          ICAO 35×45mm
                        </button>
                        <button
                          type="button"
                          onClick={() => setActivePhotoPreset("us")}
                          className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors cursor-pointer ${activePhotoPreset === "us"
                            ? "bg-neutral-950 text-white dark:bg-white dark:text-black font-bold"
                            : "text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                            }`}
                        >
                          US 2×2"
                        </button>
                      </div>
                    </div>

                    {/* CAD Canvas Frame */}
                    <div className="h-52 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 relative overflow-hidden flex items-center justify-center shadow-inner">
                      {/* Corner Crosshair Markers */}
                      <span className="absolute top-2 left-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-600 select-none">+</span>
                      <span className="absolute top-2 right-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-600 select-none">+</span>
                      <span className="absolute bottom-2 left-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-600 select-none">+</span>
                      <span className="absolute bottom-2 right-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-600 select-none">+</span>

                      {/* Technical Coordinate Sub-Grid */}
                      <div className="absolute inset-x-8 top-1/2 border-t border-dashed border-neutral-200 dark:border-neutral-800 -translate-y-4" />
                      <div className="absolute inset-y-6 left-1/2 border-l border-dashed border-neutral-200 dark:border-neutral-800" />

                      {/* Animated Scanning Sweep Laser Beam */}
                      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-950 dark:via-white to-transparent opacity-30 animate-[scan_4s_ease-in-out_infinite]" />

                      {/* Biometric Head Oval Guideline */}
                      <div
                        className={`transition-all duration-500 border border-neutral-500 dark:border-neutral-400 flex items-center justify-center relative ${activePhotoPreset === "icao"
                          ? "w-28 h-36 rounded-[50%]"
                          : "w-32 h-32 rounded-[50%]"
                          }`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-950 dark:bg-white absolute" />
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

            {/* System 02: Àkọ́niledè Yorùbá */}
            <article className="py-16 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Left: Editorial & Technical Specifications */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-wider text-neutral-500">
                    <span className="font-bold text-neutral-950 dark:text-white">02 // Client Partnership</span>
                    <span>•</span>
                    <span>Indigenous Infrastructure</span>
                    <span>•</span>
                    <span className="text-neutral-900 dark:text-neutral-200">Active</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-4">
                    Àkọ́niledè Yorùbá
                  </h3>

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

                  <div className="text-xs font-mono text-neutral-500">
                    Full-lifecycle systems engineering &amp; managed platform partnership.
                  </div>
                </div>

                {/* Right: Linguistic Tone Oscilloscope & Phonation Synthesizer */}
                <div className="lg:col-span-5">
                  <div className="relative border border-neutral-300 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/40 p-4 rounded-xl">
                    {/* Viewfinder Header Controls */}
                    <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                      <div className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" />
                        <span className="font-bold text-neutral-950 dark:text-white">PHONATION OSCILLOSCOPE</span>
                      </div>
                      <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Live Stream</span>
                      </div>
                    </div>

                    {/* Oscilloscope Canvas */}
                    <div className="h-52 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 relative overflow-hidden p-4 flex flex-col justify-between shadow-inner">
                      {/* Corner CAD Markers */}
                      <span className="absolute top-2 left-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-600 select-none">+</span>
                      <span className="absolute top-2 right-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-600 select-none">+</span>

                      {/* Top Action Bar */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-mono text-neutral-950 dark:text-white font-bold block">
                            Ẹ ǹlẹ́ o <span className="text-neutral-500 font-normal">(Greetings)</span>
                          </span>
                          <span className="text-[10px] font-mono text-neutral-400">
                            Tone Contour: Re (Mid) → Dò (Low) → Mí (High) → Re (Mid)
                          </span>
                        </div>

                        <Button
                          type="button"
                          onClick={handleAudioPreview}
                          size="sm"
                          className="h-7 text-[10px] font-mono bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-bold gap-1 cursor-pointer shadow-xs"
                        >
                          <Volume2 className="w-3 h-3" /> {isPlayingAudio ? "Synthesizing..." : "Test Drill"}
                        </Button>
                      </div>

                      {/* Pitch Contour Line and Frequency Waveform Bars */}
                      <div className="py-2">
                        <div className="flex items-end gap-1.5 h-12 mb-2">
                          {[35, 70, 50, 90, 60, 85, 40, 95, 65, 50, 80, 60, 90, 45, 75, 55].map((h, i) => (
                            <div
                              key={i}
                              className={`flex-1 rounded-full transition-all duration-200 ${isPlayingAudio
                                ? "bg-neutral-950 dark:bg-white"
                                : "bg-neutral-200 dark:bg-neutral-800"
                                }`}
                              style={{
                                height: isPlayingAudio ? `${h}%` : "22%",
                                transitionDelay: `${i * 15}ms`,
                              }}
                            />
                          ))}
                        </div>

                        {/* Tone Scale Guide */}
                        <div className="flex justify-between text-[9px] font-mono text-neutral-400 uppercase tracking-wider border-t border-neutral-100 dark:border-neutral-900 pt-1">
                          <span>Re (294 Hz)</span>
                          <span>Dò (261 Hz)</span>
                          <span>Mí (330 Hz)</span>
                          <span>Re (294 Hz)</span>
                        </div>
                      </div>

                      {/* Telemetry Footer */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 pt-1 border-t border-neutral-100 dark:border-neutral-900">
                        <span>WebRTC 24ms SFU</span>
                        <span className="text-emerald-600 dark:text-emerald-400">Dialect Fidelity: 99.2%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
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
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Takjug Technologies.</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>Lagos, Nigeria</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">
              Privacy Policy
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
