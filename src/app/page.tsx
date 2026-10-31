import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0D12] text-neutral-100 selection:bg-neutral-800 selection:text-white font-sans antialiased">
      {/* Minimal Header */}
      <header className="max-w-5xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
            TAKJUG
          </span>
          <span className="text-neutral-500 text-xs font-mono tracking-widest">
            TECHNOLOGIES
          </span>
        </Link>

        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-400">
          <a href="#deployments" className="hover:text-white transition-colors">
            Deployments
          </a>
          <a href="#mandate" className="hover:text-white transition-colors">
            The Mandate
          </a>
          <a
            href="mailto:dev@takjug.com"
            className="text-white hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold"
          >
            dev@takjug.com <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20 sm:py-28 border-b border-neutral-800/60">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 text-xs font-mono mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Frontier Technology Enterprise &amp; Venture Foundry
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08] max-w-4xl mb-8">
            Engineering precision with a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-300">
              human soul.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed font-normal mb-12">
            Conceived in Africa and built for the globe. We channel human brilliance into frontier technologies, on-device intelligence, and resilient systems engineered to bring genuine ease to daily living.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#deployments"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
            >
              Active Deployments <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:dev@takjug.com"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            >
              Initiate Inquiry <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Selected Deployments — Real Products & Systems */}
        <section id="deployments" className="py-24 border-b border-neutral-800/60">
          <div className="flex items-center justify-between mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Active Deployments
            </span>
            <span className="text-xs font-mono text-neutral-600">02 Implementations</span>
          </div>

          <div className="space-y-20">
            {/* Deployment 01: PortaSnap */}
            <article className="group">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-amber-400 font-bold">01</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    PortaSnap
                  </h2>
                </div>
                <span className="text-xs font-mono text-neutral-500 mt-1 md:mt-0">
                  Flagship Venture · On-Device Biometric AI
                </span>
              </div>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl mb-6">
                An AI-powered biometric passport and visa studio running entirely on local device hardware. Engineered with sub-pixel facial geometry, bilateral luminance analysis, and certified ICAO Doc 9303 &amp; NIS compliance. Zero cloud dependency—protecting user biometric sovereignty with zero external data transmission.
              </p>

              {/* Minimalist Spec Pills */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs font-mono text-neutral-400">
                <span className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60">
                  Edge Silicon Computing
                </span>
                <span className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60">
                  ICAO Doc 9303 / NIS Compliant
                </span>
                <span className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60">
                  Lossless 300+ DPI Print Sheets
                </span>
              </div>

              <div className="flex items-center gap-5 text-xs font-medium">
                <a
                  href="mailto:dev@takjug.com?subject=PortaSnap%20Early%20Access%20Request"
                  className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 font-semibold"
                >
                  Request Production APK Access <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/privacy"
                  className="text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Privacy Policy &amp; Biometric Governance →
                </Link>
              </div>
            </article>

            {/* Deployment 02: Àkọ́nilẹ́kọ̀ọ́ Yorùbá */}
            <article className="group pt-12 border-t border-neutral-800/40">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-cyan-400 font-bold">02</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Àkọ́nilẹ́kọ̀ọ́ Yorùbá
                  </h2>
                </div>
                <span className="text-xs font-mono text-neutral-500 mt-1 md:mt-0">
                  Strategic Technology Partnership · Mission-Critical Infrastructure
                </span>
              </div>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl mb-6">
                End-to-end technological infrastructure engineered for indigenous language education and cultural preservation across the global diaspora. Combines ultra-low-latency WebRTC interactive classroom routing, micro-modular backend systems on Google Cloud Run, and Gemini AI multimodal dialect tutoring.
              </p>

              {/* Minimalist Spec Pills */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs font-mono text-neutral-400">
                <span className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60">
                  FastAPI on Google Cloud Run
                </span>
                <span className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60">
                  LiveKit WebRTC Classroom Media
                </span>
                <span className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60">
                  Cross-Platform Multi-Tenant Architecture
                </span>
              </div>

              <div className="text-xs font-medium text-neutral-500">
                Full-lifecycle systems engineering &amp; managed platform infrastructure.
              </div>
            </article>
          </div>
        </section>

        {/* The Mandate & Technological Pillars */}
        <section id="mandate" className="py-24 border-b border-neutral-800/60">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8 block">
            The Takjug Mandate
          </span>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                The measure of technology is human ease.
              </h3>
              <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
                If an invention does not tangibly ease the burden of living, lower the friction of survival, or bring peace into human homes, it is not progress. Takjug exists to channel world-class engineering into systems that eliminate administrative exhaustion, foster authentic community, and restore dignity.
              </p>
            </div>

            <div className="md:col-span-7 space-y-8">
              <div>
                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-2">
                  01 / On-Device AI &amp; Silicon Computing
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  We deploy neural networks and computer vision directly on edge silicon. Processing data physically on the user&apos;s device eliminates server latency, removes network fragility, and enforces absolute biometric privacy by design.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-2">
                  02 / Mission-Critical Systems &amp; Real-Time Infrastructure
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  We architect high-concurrency cloud topologies, real-time WebRTC media pipelines, and fault-tolerant event buses designed to perform reliably across bandwidth-constrained and globally distributed environments.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-2">
                  03 / Human-Centered Technology &amp; Sovereign Production
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  We reject speculative technology that creates isolation. Every system we engineer bridges deep industrial precision with moral warmth—building tools that strengthen real-world community, preserve cultural heritage, and elevate daily living.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Institutional Inquiry */}
        <section className="py-24 sm:py-32">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">
            Institutional Collaboration
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
            Engineering solutions for<br />
            foundational challenges.
          </h2>

          <div className="mb-12">
            <a
              href="mailto:dev@takjug.com"
              className="text-2xl sm:text-4xl font-mono text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-2 group"
            >
              dev@takjug.com
              <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-neutral-800/60 text-xs text-neutral-500 font-mono">
            <div>
              <span className="text-neutral-400 block mb-1">Corporate Entity</span>
              Takjug Technologies Limited<br />
              CAC Registered Enterprise (Nigeria)
            </div>
            <div>
              <span className="text-neutral-400 block mb-1">Direct Contacts</span>
              dev@takjug.com<br />
              support@takjug.com
            </div>
            <div>
              <span className="text-neutral-400 block mb-1">Verification &amp; Governance</span>
              D-U-N-S Verified Entity<br />
              <Link
                href="/privacy"
                className="text-neutral-400 hover:text-white transition-colors underline"
              >
                Privacy Policy (NDPR/GDPR)
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Understated Minimalist Footer */}
      <footer className="border-t border-neutral-800/60 py-8 text-xs text-neutral-600 font-mono">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Takjug Technologies Limited. All rights reserved.</span>
          <span>Conceived in Africa · Built for the World · takjug.com</span>
        </div>
      </footer>
    </div>
  );
}
