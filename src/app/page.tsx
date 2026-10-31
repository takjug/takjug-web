"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  Camera,
  Volume2,
  Users,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CreativeCanvas from "@/components/creative-canvas";

export default function Home() {
  const [activePhotoPreset, setActivePhotoPreset] = React.useState<"icao" | "us">("icao");
  const [isPlayingAudio, setIsPlayingAudio] = React.useState(false);

  const handleAudioPreview = () => {
    setIsPlayingAudio(true);
    setTimeout(() => setIsPlayingAudio(false), 1400);
  };

  return (
    <div className="min-h-screen bg-[#070A0F] text-neutral-100 selection:bg-neutral-800 selection:text-white font-sans antialiased">
      {/* Monochromatic Minimalist Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070A0F]/85 border-b border-neutral-800/60">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border border-neutral-700 bg-neutral-900 flex items-center justify-center text-white font-mono font-bold text-sm group-hover:border-neutral-500 transition-colors">
              T
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-wider text-white">
                TAKJUG
              </span>
              <span className="text-neutral-500 text-[10px] font-mono tracking-widest -mt-0.5">
                TECHNOLOGIES
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <a href="#deployments" className="hover:text-white transition-colors">
              Deployments
            </a>
            <a href="#mandate" className="hover:text-white transition-colors">
              The Mandate
            </a>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
          </nav>

          <div>
            <a
              href="mailto:dev@takjug.com"
              className="text-xs font-mono text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800"
            >
              dev@takjug.com <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6">
        {/* Hero Section: Three.js Kinetic Art & Thesis */}
        <section className="py-12 sm:py-20 border-b border-neutral-800/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Headline & Purpose */}
            <div className="lg:col-span-6">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">
                Frontier Technology
              </p>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
                Engineering precision with a{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-400">
                  human soul.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal mb-8 max-w-xl">
                Conceived in Africa. Built for the globe. We channel engineering into on-device intelligence and resilient systems designed to bring genuine ease to daily living.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#deployments"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors"
                >
                  Deployments <ArrowDown className="w-3.5 h-3.5" />
                </a>
                <a
                  href="mailto:dev@takjug.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs tracking-wider uppercase transition-colors"
                >
                  Contact <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Interactive Three.js Kinetic Sculpture */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-neutral-800/80 bg-neutral-950/60 overflow-hidden relative shadow-2xl">
                <div className="absolute top-4 left-5 z-10 flex items-center gap-2 text-xs font-mono uppercase text-neutral-400 tracking-wider">
                  <span className="w-2 h-2 rounded-full border border-neutral-500 bg-neutral-900" />
                  Kinetic Lattice
                </div>

                <CreativeCanvas />
              </div>
            </div>
          </div>
        </section>

        {/* Selected Deployments (Strictly Real Systems, Minimalist & Focused) */}
        <section id="deployments" className="py-24 border-b border-neutral-800/60">
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
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-950/40 hover:border-neutral-700 transition-all shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                    Flagship Venture
                  </span>

                  <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3">
                    PortaSnap
                  </h2>

                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6 max-w-xl">
                    The on-device biometric passport and visa studio. Verified for international ICAO Doc 9303 compliance with sub-pixel face alignment. All processing runs locally on device hardware—zero photos or biometric vectors ever leave your phone.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                    <Button
                      asChild
                      size="sm"
                      className="rounded-full bg-white text-black hover:bg-neutral-200 font-semibold h-8 text-xs px-4"
                    >
                      <a href="mailto:dev@takjug.com?subject=PortaSnap%20Early%20Access%20Request">
                        Request APK Access <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </a>
                    </Button>
                    <Link
                      href="/privacy"
                      className="text-neutral-400 hover:text-white transition-colors underline"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </div>

                {/* Reticle Viewfinder Visual */}
                <div className="lg:col-span-5">
                  <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/30">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4 text-neutral-300" />
                        <span className="text-xs font-mono text-white font-bold">Biometric Reticle</span>
                      </div>
                      <div className="flex gap-1 p-0.5 rounded-lg bg-neutral-900 border border-neutral-800">
                        <button
                          onClick={() => setActivePhotoPreset("icao")}
                          className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors cursor-pointer ${
                            activePhotoPreset === "icao"
                              ? "bg-white text-black font-bold"
                              : "text-neutral-400 hover:text-white"
                          }`}
                        >
                          ICAO 35×45mm
                        </button>
                        <button
                          onClick={() => setActivePhotoPreset("us")}
                          className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors cursor-pointer ${
                            activePhotoPreset === "us"
                              ? "bg-white text-black font-bold"
                              : "text-neutral-400 hover:text-white"
                          }`}
                        >
                          US 2×2"
                        </button>
                      </div>
                    </div>

                    <div className="h-40 rounded-xl border border-neutral-800 bg-neutral-950 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-x-6 top-1/2 border-t border-dashed border-neutral-700 -translate-y-4" />
                      <div className="w-24 h-32 rounded-full border border-neutral-600 flex items-center justify-center relative">
                        <div className="w-1.5 h-1.5 rounded-full bg-white absolute" />
                        <span className="text-[10px] font-mono text-neutral-400">
                          {activePhotoPreset === "icao" ? "70-80% Ratio" : "50-69% Ratio"}
                        </span>
                      </div>

                      <div className="absolute bottom-2 left-3 text-[10px] font-mono text-neutral-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-white" /> Geometry Validated
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
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-950/40 hover:border-neutral-700 transition-all shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                    Client Partnership
                  </span>

                  <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3">
                    Àkọ́nilẹ́kọ̀ọ́ Yorùbá
                  </h2>

                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6 max-w-xl">
                    End-to-end digital infrastructure for indigenous language education and cultural preservation. Real-time WebRTC virtual classrooms paired with intelligent Gemini AI dialect tutoring. Systems architecture and multiplatform client engineered by Takjug.
                  </p>

                  <div className="text-xs font-mono text-neutral-500">
                    Full-lifecycle systems engineering &amp; managed platform partnership.
                  </div>
                </div>

                {/* Phonation Audio Visual */}
                <div className="lg:col-span-5">
                  <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/30">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-neutral-300" />
                        <span className="text-xs font-mono text-white font-bold">Phonation Audio</span>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Live Stream
                      </span>
                    </div>

                    <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-white font-bold">Ẹ ǹlẹ́ o (Greetings)</span>
                        <Button
                          onClick={handleAudioPreview}
                          size="sm"
                          className="h-7 text-[10px] font-mono bg-white hover:bg-neutral-200 text-black font-bold gap-1 cursor-pointer"
                        >
                          <Volume2 className="w-3 h-3" /> {isPlayingAudio ? "Playing..." : "Test Drill"}
                        </Button>
                      </div>
                      <div className="text-[11px] font-mono text-neutral-400 mb-3">Tone: Mid - Low - High - Mid</div>

                      <div className="flex items-end gap-1 h-6">
                        {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 65, 90, 40].map((h, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-full transition-all duration-300 ${
                              isPlayingAudio ? "bg-white" : "bg-neutral-800"
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
        <section id="mandate" className="py-24 border-b border-neutral-800/60">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold mb-4 block">
              The Mandate
            </span>
            <blockquote className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug mb-6">
              “The measure of technology is human ease. If an invention does not tangibly lower the friction of survival and living, it is not progress.”
            </blockquote>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
              Takjug exists to channel engineering brilliance into systems that reduce anxiety, restore community, and respect user sovereignty by design.
            </p>
          </div>
        </section>

        {/* Understated Contact Section */}
        <section className="py-24 sm:py-32">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold mb-3 block">
              Collaboration
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
              Let&apos;s build.
            </h2>
            <div className="mb-4">
              <a
                href="mailto:dev@takjug.com"
                className="text-2xl sm:text-4xl font-mono text-white hover:text-neutral-400 transition-colors inline-flex items-center gap-2 group"
              >
                dev@takjug.com
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Understated Minimalist Footer */}
      <footer className="border-t border-neutral-800/60 py-8 text-xs text-neutral-500 font-mono">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Takjug Technologies.</span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
