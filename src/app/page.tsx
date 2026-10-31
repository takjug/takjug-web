"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  Lock,
  Cpu,
  Server,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Camera,
  Activity,
  Sparkles,
  Globe,
  Mail,
  MapPin,
  Volume2,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [activePhotoPreset, setActivePhotoPreset] = React.useState<"icao" | "us">("icao");
  const [isPlayingAudio, setIsPlayingAudio] = React.useState(false);

  const handleAudioPreview = () => {
    setIsPlayingAudio(true);
    setTimeout(() => setIsPlayingAudio(false), 1400);
  };

  return (
    <div className="min-h-screen bg-[#070A0F] text-neutral-100 selection:bg-neutral-800 selection:text-white font-sans antialiased">
      {/* Level 3: Modern Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070A0F]/80 border-b border-neutral-800/60">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-extrabold text-sm shadow-md shadow-amber-500/20 group-hover:scale-105 transition-all">
              T
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-amber-400 transition-colors">
                TAKJUG
              </span>
              <span className="text-neutral-500 text-[10px] font-mono tracking-widest -mt-1">
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
              Governance
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm" className="rounded-xl border-neutral-800 bg-neutral-900/40 text-xs font-mono">
              <a href="mailto:dev@takjug.com" className="flex items-center gap-1.5">
                dev@takjug.com <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Level 3 Hero: Modern Asymmetric 2-Column Bento Layout */}
        <section className="py-12 sm:py-20 border-b border-neutral-800/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Mission & Authority */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 text-xs font-mono mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Frontier Technology Enterprise &amp; Venture Foundry
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
                Engineering precision with a{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-300">
                  human soul.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal mb-8 max-w-xl">
                Conceived in Africa and built for the globe. We channel human brilliance into frontier technologies, on-device intelligence, and resilient systems engineered to bring genuine ease to daily living.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button asChild variant="solar" size="lg" className="rounded-2xl px-6 font-semibold text-sm">
                  <a href="#deployments" className="flex items-center gap-2">
                    Active Deployments <ArrowDown className="w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl px-6 border-neutral-800 bg-neutral-900/40 text-neutral-300 hover:text-white text-sm">
                  <a href="mailto:dev@takjug.com">
                    Initiate Collaboration <ArrowUpRight className="w-4 h-4 text-amber-400" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Modern Telemetry Bento Card (Level 3 Visual Anchor) */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl border border-neutral-800/80 bg-gradient-to-br from-[#12161F] via-[#0E1218] to-[#0A0D12] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800/80">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                      System Topology
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Operational
                  </span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl border border-neutral-800/80 bg-neutral-950/60 flex items-center justify-between">
                    <div>
                      <div className="text-neutral-400 text-[10px] uppercase">Edge Computing</div>
                      <div className="text-white font-bold mt-0.5">100% On-Device Neural Model</div>
                    </div>
                    <Badge variant="solar" className="text-[10px]">0ms Cloud</Badge>
                  </div>

                  <div className="p-3.5 rounded-xl border border-neutral-800/80 bg-neutral-950/60 flex items-center justify-between">
                    <div>
                      <div className="text-neutral-400 text-[10px] uppercase">Biometric Standard</div>
                      <div className="text-white font-bold mt-0.5">ICAO Doc 9303 / NIS Step 2</div>
                    </div>
                    <Badge variant="cyan" className="text-[10px]">Certified</Badge>
                  </div>

                  <div className="p-3.5 rounded-xl border border-neutral-800/80 bg-neutral-950/60 flex items-center justify-between">
                    <div>
                      <div className="text-neutral-400 text-[10px] uppercase">Media Protocol</div>
                      <div className="text-white font-bold mt-0.5">LiveKit WebRTC + Cloud Run</div>
                    </div>
                    <Badge variant="emerald" className="text-[10px]">&lt;20ms Delay</Badge>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Entity: Takjug Technologies</span>
                  <span>Lagos · CAC Registered</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Level 3: Active Deployments as Bento Cards */}
        <section id="deployments" className="py-24 border-b border-neutral-800/60">
          <div className="flex items-center justify-between mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
                Active Deployments
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Engineering in Action
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
              02 Production Systems
            </span>
          </div>

          <div className="space-y-16">
            {/* Bento Deployment 01: PortaSnap */}
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-gradient-to-br from-[#12161F] via-[#0E1218] to-[#0A0D12] hover:border-amber-500/30 transition-all shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Product Overview */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-amber-400 font-bold">01 / PROPRIETARY VENTURE</span>
                    <Badge variant="solar" className="text-[10px]">Launching on Google Play</Badge>
                  </div>

                  <h3 className="text-3xl font-extrabold text-white tracking-tight mb-3">
                    PortaSnap
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6">
                    The on-device biometric passport &amp; visa studio. Built with sub-pixel face validation and certified ICAO Doc 9303 compliance. All computation runs 100% on local smartphone silicon—protecting human biometric sovereignty with zero external photo transmissions.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    <div className="p-3 rounded-xl border border-neutral-800/80 bg-neutral-950/50">
                      <div className="text-[10px] font-mono text-amber-400 uppercase">Architecture</div>
                      <div className="text-xs font-bold text-white mt-0.5">100% On-Device AI</div>
                    </div>
                    <div className="p-3 rounded-xl border border-neutral-800/80 bg-neutral-950/50">
                      <div className="text-[10px] font-mono text-cyan-400 uppercase">Immigration</div>
                      <div className="text-xs font-bold text-white mt-0.5">ICAO Doc 9303</div>
                    </div>
                    <div className="p-3 rounded-xl border border-neutral-800/80 bg-neutral-950/50">
                      <div className="text-[10px] font-mono text-emerald-400 uppercase">Export</div>
                      <div className="text-xs font-bold text-white mt-0.5">Lossless 300+ DPI</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
                    <Button asChild variant="solar" size="sm" className="rounded-xl font-semibold">
                      <a href="mailto:dev@takjug.com?subject=PortaSnap%20Early%20Access%20Request">
                        Request APK Access <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </a>
                    </Button>
                    <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors underline">
                      Biometric Privacy Governance
                    </Link>
                  </div>
                </div>

                {/* Right: Modern Interactive Reticle Preview (Level 3 Feature) */}
                <div className="lg:col-span-5">
                  <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-950/80 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-mono text-white font-bold">Biometric Reticle</span>
                      </div>
                      <div className="flex gap-1 p-0.5 rounded-lg bg-neutral-900 border border-neutral-800">
                        <button
                          onClick={() => setActivePhotoPreset("icao")}
                          className={`px-2 py-0.5 text-[10px] font-mono rounded ${
                            activePhotoPreset === "icao" ? "bg-amber-500 text-black font-bold" : "text-neutral-400"
                          }`}
                        >
                          ICAO 35×45mm
                        </button>
                        <button
                          onClick={() => setActivePhotoPreset("us")}
                          className={`px-2 py-0.5 text-[10px] font-mono rounded ${
                            activePhotoPreset === "us" ? "bg-amber-500 text-black font-bold" : "text-neutral-400"
                          }`}
                        >
                          US 2×2"
                        </button>
                      </div>
                    </div>

                    {/* Viewfinder Graphic */}
                    <div className="h-44 rounded-xl border border-dashed border-amber-500/40 bg-neutral-900/40 relative flex items-center justify-center overflow-hidden">
                      {/* Reticle Guides */}
                      <div className="absolute inset-x-4 top-1/2 border-t border-amber-500/30 -translate-y-4" />
                      <div className="w-24 h-32 rounded-full border border-amber-400/50 flex items-center justify-center relative">
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping absolute" />
                        <span className="text-[10px] font-mono text-amber-400/80 font-bold">
                          {activePhotoPreset === "icao" ? "70-80% Ratio" : "50-69% Ratio"}
                        </span>
                      </div>

                      <div className="absolute bottom-2 left-3 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Geometry Validated
                      </div>
                      <div className="absolute bottom-2 right-3 text-[10px] font-mono text-neutral-400">
                        Zero Cloud Upload
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                      <span>Neural Engine: On-Device ML Kit</span>
                      <span>Latency: &lt;16ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Deployment 02: Àkọ́nilẹ́kọ̀ọ́ Yorùbá */}
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-gradient-to-br from-[#12161F] via-[#0E1218] to-[#0A0D12] hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Project Overview */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-cyan-400 font-bold">02 / STRATEGIC PARTNERSHIP</span>
                    <Badge variant="cyan" className="text-[10px]">Enterprise Infrastructure</Badge>
                  </div>

                  <h3 className="text-3xl font-extrabold text-white tracking-tight mb-3">
                    Àkọ́nilẹ́kọ̀ọ́ Yorùbá
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6">
                    Architecting end-to-end digital infrastructure for indigenous language education and cultural preservation at global scale. Combines low-latency WebRTC interactive classrooms with Gemini AI multimodal dialect tutoring.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    <div className="p-3 rounded-xl border border-neutral-800/80 bg-neutral-950/50">
                      <div className="text-[10px] font-mono text-cyan-400 uppercase">Cloud Core</div>
                      <div className="text-xs font-bold text-white mt-0.5">FastAPI &amp; Cloud Run</div>
                    </div>
                    <div className="p-3 rounded-xl border border-neutral-800/80 bg-neutral-950/50">
                      <div className="text-[10px] font-mono text-amber-400 uppercase">Live Media</div>
                      <div className="text-xs font-bold text-white mt-0.5">LiveKit WebRTC</div>
                    </div>
                    <div className="p-3 rounded-xl border border-neutral-800/80 bg-neutral-950/50">
                      <div className="text-[10px] font-mono text-emerald-400 uppercase">Multiplatform</div>
                      <div className="text-xs font-bold text-white mt-0.5">Flutter &amp; Web</div>
                    </div>
                  </div>

                  <div className="text-xs font-medium text-neutral-400">
                    Full-lifecycle systems engineering &amp; managed platform partnership by Takjug Technologies.
                  </div>
                </div>

                {/* Right: Live Classroom Audio Waveform Simulator */}
                <div className="lg:col-span-5">
                  <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-950/80">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-mono text-white font-bold">Live Phonation Engine</span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> Live Stream
                      </span>
                    </div>

                    <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-white font-bold">Ẹ ǹlẹ́ o (Greetings)</span>
                        <Button
                          onClick={handleAudioPreview}
                          size="sm"
                          className="h-7 text-[10px] bg-cyan-500 hover:bg-cyan-400 text-black font-bold gap-1 cursor-pointer"
                        >
                          <Volume2 className="w-3 h-3" /> {isPlayingAudio ? "Testing..." : "Test Drill"}
                        </Button>
                      </div>
                      <div className="text-[11px] font-mono text-neutral-400 mb-3">Tone: Mid - Low - High - Mid</div>

                      {/* Waveform Equalizer */}
                      <div className="flex items-end gap-1 h-6">
                        {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 65, 90, 40].map((h, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-full transition-all duration-300 ${
                              isPlayingAudio ? "bg-cyan-400" : "bg-neutral-800"
                            }`}
                            style={{ height: isPlayingAudio ? `${h}%` : "20%" }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                      <span>Serverless Monolith: GCP Cloud Run</span>
                      <span>Latency: 18ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Level 3: The Mandate as a 3-Column Bento Grid */}
        <section id="mandate" className="py-24 border-b border-neutral-800/60">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
              The Takjug Mandate
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              The measure of technology is human ease.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
              If an invention does not tangibly ease the burden of living, lower the friction of survival, or bring peace into human homes, it is not progress. Takjug exists to channel world-class engineering into systems that reduce anxiety, restore community, and elevate human thriving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1 */}
            <div className="p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/30 hover:border-amber-500/40 hover:bg-neutral-900/50 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-amber-400 font-bold block mb-2">01 / EDGE COMPUTING</span>
              <h3 className="text-lg font-bold text-white mb-2">On-Device AI &amp; Silicon Privacy</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We deploy neural networks and computer vision directly on edge silicon. Processing data physically on the user&apos;s device eliminates server latency, removes network fragility, and enforces absolute biometric privacy by design.
              </p>
            </div>

            {/* Bento Card 2 */}
            <div className="p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/30 hover:border-cyan-500/40 hover:bg-neutral-900/50 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <Server className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-cyan-400 font-bold block mb-2">02 / PLATFORM ARCHITECTURE</span>
              <h3 className="text-lg font-bold text-white mb-2">Mission-Critical Real-Time Infrastructure</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We architect high-concurrency cloud topologies, real-time WebRTC media pipelines, and fault-tolerant event buses designed to perform reliably across bandwidth-constrained and globally distributed environments.
              </p>
            </div>

            {/* Bento Card 3 */}
            <div className="p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/30 hover:border-emerald-500/40 hover:bg-neutral-900/50 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold block mb-2">03 / CIVILIZATIONAL ELEVATION</span>
              <h3 className="text-lg font-bold text-white mb-2">Human Ease &amp; Sovereign Production</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We reject speculative technology that breeds isolation. Every system we engineer bridges deep industrial precision with moral warmth—building tools that strengthen real-world community, preserve cultural heritage, and elevate daily living.
              </p>
            </div>
          </div>
        </section>

        {/* Level 3: Institutional Inquiries Bento Card */}
        <section className="py-24">
          <div className="p-10 sm:p-14 rounded-3xl border border-neutral-800/80 bg-gradient-to-br from-[#12161F] via-[#0E1218] to-[#0A0D12] relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-3 block">
                Initiate Collaboration
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
                Have an ambitious challenge?<br />
                Let&apos;s build together.
              </h2>
              <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                We partner with institutions, enterprises, and founders requiring deep technical rigor, sovereign on-device AI, and mission-critical systems engineering.
              </p>

              <div className="mb-10">
                <a
                  href="mailto:dev@takjug.com"
                  className="text-2xl sm:text-4xl font-mono text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-2 group"
                >
                  dev@takjug.com
                  <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-neutral-800/80 text-xs text-neutral-500 font-mono">
              <div>
                <span className="text-neutral-400 block mb-1">Corporate Entity</span>
                Takjug Technologies Limited<br />
                CAC Registered Enterprise (Nigeria)
              </div>
              <div>
                <span className="text-neutral-400 block mb-1">Official Contacts</span>
                dev@takjug.com<br />
                support@takjug.com
              </div>
              <div>
                <span className="text-neutral-400 block mb-1">Governance</span>
                D-U-N-S Verified Entity<br />
                <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors underline">
                  Privacy Policy (NDPR/GDPR)
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Understated Minimalist Footer */}
      <footer className="border-t border-neutral-800/60 py-8 text-xs text-neutral-600 font-mono">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Takjug Technologies Limited. All rights reserved.</span>
          <span>Conceived in Africa · Built for the World · takjug.com</span>
        </div>
      </footer>
    </div>
  );
}
