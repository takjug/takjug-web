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
          <span className="text-neutral-500 text-xs font-mono">/ STUDIO</span>
        </Link>

        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-400">
          <a href="#work" className="hover:text-white transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a
            href="mailto:dev@takjug.com"
            className="text-white hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            dev@takjug.com <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20 sm:py-28 border-b border-neutral-800/60">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">
            Frontier Digital Product &amp; Venture Studio
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08] max-w-4xl mb-8">
            We design and engineer intelligent software with uncompromising craft.
          </h1>

          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed font-normal mb-12">
            Conceived in Lagos and built for the world. We specialize in on-device AI, high-performance platforms, and tools that bring ease to daily living.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
            >
              Selected Work <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:dev@takjug.com"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            >
              Get in touch <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Selected Work — Clean Editorial Entries */}
        <section id="work" className="py-24 border-b border-neutral-800/60">
          <div className="flex items-center justify-between mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Selected Work
            </span>
            <span className="text-xs font-mono text-neutral-600">02 Deployments</span>
          </div>

          <div className="space-y-20">
            {/* Project 01: PortaSnap */}
            <article className="group">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-amber-400 font-bold">01</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    PortaSnap
                  </h2>
                </div>
                <span className="text-xs font-mono text-neutral-500 mt-1 md:mt-0">
                  Proprietary Flagship Product · Launching on Google Play
                </span>
              </div>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl mb-6">
                The on-device biometric passport and visa photo studio. Built with sub-pixel face validation and certified ICAO Doc 9303 compliance. All processing happens 100% on the user&apos;s physical device—zero photos or biometric vectors are ever transmitted to the cloud.
              </p>

              {/* Minimalist Spec Pills */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs font-mono text-neutral-400">
                <span className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60">
                  100% On-Device AI
                </span>
                <span className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60">
                  ICAO Doc 9303 &amp; NIS Compliant
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
                  Request Early APK Access <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/privacy"
                  className="text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Privacy Policy →
                </Link>
              </div>
            </article>

            {/* Project 02: Àkọ́nilẹ́kọ̀ọ́ Yorùbá */}
            <article className="group pt-12 border-t border-neutral-800/40">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-cyan-400 font-bold">02</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Àkọ́nilẹ́kọ̀ọ́ Yorùbá
                  </h2>
                </div>
                <span className="text-xs font-mono text-neutral-500 mt-1 md:mt-0">
                  Client Partnership · Production Deployment
                </span>
              </div>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl mb-6">
                Architecting end-to-end digital infrastructure for indigenous language education at global scale. Combines low-latency WebRTC virtual classrooms with Gemini AI dialect tutoring. Systems architecture and multiplatform client engineered end-to-end by Takjug.
              </p>

              {/* Minimalist Spec Pills */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs font-mono text-neutral-400">
                <span className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60">
                  FastAPI on GCP Cloud Run
                </span>
                <span className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60">
                  LiveKit WebRTC Classrooms
                </span>
                <span className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60">
                  Flutter Mobile &amp; Web
                </span>
              </div>

              <div className="text-xs font-medium text-neutral-500">
                Full-lifecycle technical delivery &amp; architectural partnership.
              </div>
            </article>
          </div>
        </section>

        {/* About the Studio: Capabilities & Philosophy */}
        <section id="about" className="py-24 border-b border-neutral-800/60">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8 block">
            About the Studio
          </span>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Technology serving human flourishing.
              </h3>
              <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
                We reject the idea that software should be cold, complex, or invasive. Every tool we build must lift a measurable weight off human shoulders—engineered with mathematical rigor and absolute respect for privacy.
              </p>
            </div>

            <div className="md:col-span-7 space-y-8">
              <div>
                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-2">
                  01 / On-Device AI &amp; Vision
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  We compile neural networks and computer vision models directly to smartphone silicon. Zero server latency, zero biometric transmission, and complete mathematical data sovereignty.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-2">
                  02 / Scalable Systems Engineering
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  From Google Cloud serverless monoliths and low-latency WebRTC media routing to Redis caching layers, we build clean, resilient infrastructure for mission-critical platforms.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-2">
                  03 / Cross-Platform Craft
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  High-fidelity Flutter mobile applications and Next.js web platforms engineered with mathematical typography, fluid 60fps animations, and human ergonomics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Contact Section */}
        <section id="contact" className="py-24 sm:py-32">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">
            Initiate Collaboration
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
            Have an ambitious project?<br />
            Let&apos;s build together.
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
              <span className="text-neutral-400 block mb-1">Direct Inquiries</span>
              dev@takjug.com<br />
              support@takjug.com
            </div>
            <div>
              <span className="text-neutral-400 block mb-1">Verification</span>
              D-U-N-S Registered<br />
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
          <span>© {new Date().getFullYear()} Takjug Technologies. All rights reserved.</span>
          <span>Lagos, Nigeria · takjug.com</span>
        </div>
      </footer>
    </div>
  );
}
