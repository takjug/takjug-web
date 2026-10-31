import Link from "next/link";
import Navbar from "@/components/navbar";
import ThreeHero from "@/components/three-hero";
import {
  Camera,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
  Mail,
  MapPin,
  Globe,
  Sparkles,
  Layers,
  HeartHandshake,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-neutral-100 selection:bg-amber-500 selection:text-black font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-16 border-b border-neutral-800/80">
        <ThreeHero />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none bg-gradient-to-b from-transparent via-[#0B0F14]/50 to-[#0B0F14]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-8 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> Frontier Technology & Digital Ventures
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Engineering Precision <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-400">
              With a Human Soul
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 mb-10 leading-relaxed font-normal">
            Takjug Technologies is an enterprise innovation studio and venture laboratory. Conceived in Africa and built for the world, we engineer on-device artificial intelligence, biometric verification, and digital tools designed to bring genuine ease to daily living.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#ventures"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
            >
              Explore Our Ventures
            </a>
            <a
              href="#mandate"
              className="px-7 py-3.5 rounded-xl border border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 font-semibold text-sm transition-all"
            >
              Our Philosophy
            </a>
          </div>
        </div>
      </section>

      {/* Flagship Venture Showcase: PortaSnap */}
      <section id="ventures" className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Camera className="w-4 h-4" /> Flagship Product Spotlight
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">PortaSnap</h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md mt-3 md:mt-0 leading-relaxed">
            AI-powered biometric passport & visa photo generator engineered for 100% on-device privacy and instant government immigration compliance.
          </p>
        </div>

        <div className="rounded-3xl border border-neutral-800/90 bg-gradient-to-br from-[#141922] via-[#0E131A] to-[#0B0F14] p-8 sm:p-12 relative overflow-hidden group hover:border-amber-500/30 transition-all shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-mono font-medium border border-cyan-500/20 mb-6">
                Mobile Utility • ICAO 9303 Certified
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Studio-Grade Biometric Photography in Your Pocket
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                PortaSnap replaces costly photo studios and trial-and-error passport tools. Using Google ML Kit local computer vision, PortaSnap evaluates biometric compliance before the shutter clicks — validating eye leveling, head-to-chin ratio, neutral expressions, and studio shadow balance with zero cloud uploads.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="rounded-2xl border border-neutral-800/90 bg-neutral-900/40 p-4">
                  <div className="flex items-center gap-2 text-amber-400 mb-1">
                    <Lock className="w-4 h-4" />
                    <span className="text-sm font-bold">100% On-Device</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Zero facial biometrics ever leave the device. NDPR & GDPR compliant.</p>
                </div>

                <div className="rounded-2xl border border-neutral-800/90 bg-neutral-900/40 p-4">
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-sm font-bold">Portal Tested</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Tested and validated against official immigration portals (e.g. NIS Step 2).</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 font-semibold group-hover:translate-x-0.5 transition-all"
                >
                  PortaSnap Privacy Policy <ArrowUpRight className="w-4 h-4" />
                </Link>
                <span className="text-neutral-600 text-xs">•</span>
                <span className="text-neutral-500 text-xs">Available on Android & Google Play</span>
              </div>
            </div>

            {/* Visual Feature Card */}
            <div className="relative rounded-2xl border border-neutral-800 bg-[#0B0F14]/90 p-8 flex flex-col justify-center items-center text-center shadow-inner">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-500/20 via-cyan-500/10 to-transparent border border-amber-500/40 flex items-center justify-center mb-6 relative">
                <Camera className="w-10 h-10 text-amber-400" />
                <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping opacity-25" />
              </div>

              <h4 className="text-white font-bold text-lg mb-2">Live HUD Biometric Reticle</h4>
              <p className="text-neutral-400 text-xs max-w-sm mb-6 leading-relaxed">
                Adaptive bilateral fill-light algorithms and strict 20% shadow threshold analyzer tailored for all skin tones and real-world indoor lighting.
              </p>

              <div className="w-full space-y-2 text-left text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <span className="text-neutral-400">Head-to-Height Ratio</span>
                  <span className="text-emerald-400">50% - 69% (PASS)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <span className="text-neutral-400">Bilateral Studio Lighting</span>
                  <span className="text-emerald-400">&lt; 20% Shadow (PASS)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <span className="text-neutral-400">Neutral Expression</span>
                  <span className="text-emerald-400">Smile &lt; 0.15 (PASS)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Mandate / Philosophy */}
      <section id="mandate" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-4 h-4" /> The Takjug Mandate
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technology Serving Human Flourishing
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            We reject the idea that technology must be cold, sterile, or extractive. Takjug exists to channel world-class engineering into tools that reduce anxiety, restore community, and make everyday living easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-neutral-800/80 bg-neutral-900/30">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Industrial Precision</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Mathematical rigor, deep systems programming, and high-performance algorithms that operate reliably across mobile, cloud, and edge hardware.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-neutral-800/80 bg-neutral-900/30">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Ease of Living</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Every venture we incubate must lift a measurable weight off human shoulders—whether simplifying legal biometric compliance or streamlining personal finance.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-neutral-800/80 bg-neutral-900/30">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Uncompromising Privacy</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              We pioneer edge intelligence that processes sensitive user information on your device. We respect user sovereignty and comply with global data regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Official Corporate Footer */}
      <footer id="contact" className="border-t border-neutral-800 bg-[#070A0E] py-16 text-xs text-neutral-400">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-extrabold text-sm">
                T
              </div>
              <span className="text-white font-bold text-base tracking-tight">Takjug Technologies</span>
            </div>
            <p className="leading-relaxed text-neutral-400 mb-4 max-w-sm">
              An incorporated technology enterprise and venture studio in Nigeria, building resilient consumer software and deep tech solutions for the global market.
            </p>
            <p className="text-neutral-500">
              © {new Date().getFullYear()} Takjug Technologies. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Official Verification & Contacts</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-400" />
                <span>takjug.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:dev@takjug.com" className="hover:text-white transition-colors">
                  dev@takjug.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:support@takjug.com" className="hover:text-white transition-colors">
                  support@takjug.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Nigeria (CAC Registered Enterprise)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Legal & Transparency</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                  PortaSnap Privacy Policy (NDPR / GDPR Compliant)
                </Link>
              </li>
              <li>
                <a href="/app-ads.txt" className="hover:text-amber-400 transition-colors">
                  Google AdMob Authorized Sellers (app-ads.txt)
                </a>
              </li>
              <li>
                <span className="text-neutral-500">D-U-N-S Verified Entity Filing</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
