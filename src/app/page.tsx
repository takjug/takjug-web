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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

// Dynamically import Three.js creative canvas with SSR disabled for optimal hydration
const CreativeCanvas = dynamic(() => import("@/components/creative-canvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#FAFAFA] dark:bg-[#070A0F]" />,
});

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [activePhotoPreset, setActivePhotoPreset] = React.useState<"icao" | "us">("icao");
  const [isPlayingAudio, setIsPlayingAudio] = React.useState(false);

  const handleAudioPreview = () => {
    setIsPlayingAudio(true);
    setTimeout(() => setIsPlayingAudio(false), 1400);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#070A0F] text-neutral-900 dark:text-neutral-100 selection:bg-neutral-200 dark:selection:bg-neutral-800 selection:text-black dark:selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-200">
      {/* 
        ========================================================================
        HERO SECTION: 100vh Full Viewport Three.js Canvas (Platxform & MetaLab Style)
        Supports both Light & Dark Mode gracefully
        ========================================================================
      */}
      <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-between overflow-hidden border-b border-neutral-200/80 dark:border-neutral-800/60">
        {/* Full-Screen WebGL Canvas Backdrop */}
        <div className="absolute inset-0 w-full h-full z-0">
          <CreativeCanvas theme={resolvedTheme} />
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

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="mailto:dev@takjug.com"
                className="text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 backdrop-blur hover:bg-neutral-100 dark:hover:bg-neutral-800 shadow-sm"
              >
                dev@takjug.com <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>
        </header>

        {/* Floating Hero Typography & Proposition (Option 1: Ultra-Minimal & Confident) */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 w-full my-auto pointer-events-none">
          <div className="max-w-2xl sm:max-w-3xl">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight text-neutral-950 dark:text-white leading-[0.98] mb-6">
              Engineering ease.
            </h1>

            <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-8 max-w-lg">
              Frontier venture studio &amp; applied AI. Conceived in Africa, built for the world.
            </p>

            <div className="flex flex-wrap items-center gap-4 pointer-events-auto">
              <a
                href="#deployments"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
              >
                Deployments <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:dev@takjug.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 backdrop-blur hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white text-xs tracking-wider uppercase transition-colors shadow-sm"
              >
                Contact <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Floating Scroll Indicator */}
        <div className="relative z-20 pb-8 flex justify-center pointer-events-none">
          <a
            href="#deployments"
            aria-label="Scroll to deployments"
            className="pointer-events-auto p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </section>

      {/* 
        ========================================================================
        MAIN BODY: Minimalist Deployments, The Mandate & Collaboration
        ========================================================================
      */}
      <main className="max-w-6xl mx-auto px-6">
        {/* Selected Deployments (PortaSnap & Àkọ́nilẹ́kọ̀ọ́ Yorùbá) */}
        <section id="deployments" className="py-24 border-b border-neutral-200 dark:border-neutral-800/60">
          <div className="flex items-center justify-between mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Active Deployments
            </span>
            <span className="text-xs font-mono text-neutral-500">
              02 Systems
            </span>
          </div>

          <div className="space-y-12">
            {/* Deployment 01: PortaSnap */}
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-200/90 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-950/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all shadow-sm dark:shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                    Flagship Venture
                  </span>

                  <h2 className="text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-3">
                    PortaSnap
                  </h2>

                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 max-w-xl">
                    The on-device biometric passport and visa studio. Verified for international ICAO Doc 9303 compliance with sub-pixel face alignment. All processing runs locally on device hardware—zero photos or biometric vectors ever leave your phone.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                    <Button
                      asChild
                      size="sm"
                      className="rounded-full bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-semibold h-8 text-xs px-4 shadow-sm"
                    >
                      <a href="mailto:dev@takjug.com?subject=PortaSnap%20Early%20Access%20Request">
                        Request APK Access <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </a>
                    </Button>
                    <Link
                      href="/privacy"
                      className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors underline"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </div>

                {/* Reticle Viewfinder Visual */}
                <div className="lg:col-span-5">
                  <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/30">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                        <span className="text-xs font-mono text-neutral-950 dark:text-white font-bold">Biometric Reticle</span>
                      </div>
                      <div className="flex gap-1 p-0.5 rounded-lg bg-neutral-200/80 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800">
                        <button
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

                    <div className="h-40 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex items-center justify-center relative overflow-hidden shadow-inner">
                      <div className="absolute inset-x-6 top-1/2 border-t border-dashed border-neutral-300 dark:border-neutral-700 -translate-y-4" />
                      <div className="w-24 h-32 rounded-full border border-neutral-400 dark:border-neutral-600 flex items-center justify-center relative">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-950 dark:bg-white absolute" />
                        <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
                          {activePhotoPreset === "icao" ? "70-80% Ratio" : "50-69% Ratio"}
                        </span>
                      </div>

                      <div className="absolute bottom-2 left-3 text-[10px] font-mono text-neutral-700 dark:text-neutral-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-neutral-950 dark:text-white" /> Geometry Validated
                      </div>
                      <div className="absolute bottom-2 right-3 text-[10px] font-mono text-neutral-500">
                        100% On-Device
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deployment 02: Àkọ́nilẹ́kọ̀ọ́ Yorùbá */}
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-200/90 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-950/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all shadow-sm dark:shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                    Client Partnership
                  </span>

                  <h2 className="text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-3">
                    Àkọ́nilẹ́kọ̀ọ́ Yorùbá
                  </h2>

                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 max-w-xl">
                    End-to-end digital infrastructure for indigenous language education and cultural preservation. Real-time WebRTC virtual classrooms paired with intelligent Gemini AI dialect tutoring. Systems architecture and multiplatform client engineered by Takjug.
                  </p>

                  <div className="text-xs font-mono text-neutral-500">
                    Full-lifecycle systems engineering &amp; managed platform partnership.
                  </div>
                </div>

                {/* Phonation Audio Visual */}
                <div className="lg:col-span-5">
                  <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/30">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                        <span className="text-xs font-mono text-neutral-950 dark:text-white font-bold">Phonation Audio</span>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-950 dark:bg-white animate-pulse" /> Live Stream
                      </span>
                    </div>

                    <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-inner">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-neutral-950 dark:text-white font-bold">Ẹ ǹlẹ́ o (Greetings)</span>
                        <Button
                          onClick={handleAudioPreview}
                          size="sm"
                          className="h-7 text-[10px] font-mono bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-bold gap-1 cursor-pointer"
                        >
                          <Volume2 className="w-3 h-3" /> {isPlayingAudio ? "Playing..." : "Test Drill"}
                        </Button>
                      </div>
                      <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mb-3">Tone: Mid - Low - High - Mid</div>

                      <div className="flex items-end gap-1 h-6">
                        {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 65, 90, 40].map((h, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-full transition-all duration-300 ${
                              isPlayingAudio
                                ? "bg-neutral-950 dark:bg-white"
                                : "bg-neutral-200 dark:bg-neutral-800"
                            }`}
                            style={{ height: isPlayingAudio ? `${h}%` : "20%" }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Mandate: Pure, Philosophical, High-Impact */}
        <section id="mandate" className="py-24 border-b border-neutral-200 dark:border-neutral-800/60">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold mb-4 block">
              The Mandate
            </span>
            <blockquote className="text-2xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-snug mb-6">
              “The measure of technology is human ease. If an invention does not tangibly lower the friction of survival and living, it is not progress.”
            </blockquote>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              Takjug exists to channel engineering brilliance into systems that reduce anxiety, restore community, and respect user sovereignty by design.
            </p>
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
              <a
                href="mailto:dev@takjug.com"
                className="text-2xl sm:text-4xl font-mono text-neutral-950 hover:text-neutral-600 dark:text-white dark:hover:text-neutral-400 transition-colors inline-flex items-center gap-2 group"
              >
                dev@takjug.com
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
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
            <ThemeToggle />
          </div>
        </div>
      </footer>
    </div>
  );
}
