import Link from "next/link";
import Navbar from "@/components/navbar";
import ThreeHero from "@/components/three-hero";
import PortaSnapSimulator from "@/components/portasnap-simulator";
import AkoniledeShowcase from "@/components/akonilede-showcase";
import ContactSection from "@/components/contact-section";
import {
  Camera,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
  ArrowDown,
  Mail,
  MapPin,
  Globe,
  Sparkles,
  Layers,
  HeartHandshake,
  Lock,
  Terminal,
  Award,
  BookOpen,
  GraduationCap,
  Server,
  Video,
  Code2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070A0F] text-neutral-100 selection:bg-amber-500 selection:text-black font-sans antialiased">
      <Navbar />

      {/* Hero Section — MetaLab / Bakken & Bæck Inspired */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-16 border-b border-neutral-800/60">
        <ThreeHero />

        {/* Ambient Subtle Gradients */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none bg-gradient-to-b from-transparent via-[#070A0F]/60 to-[#070A0F]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-medium tracking-wide mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            Frontier Digital Product &amp; Venture Studio
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 leading-[1.05]">
            We build intelligent products with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-300">
              uncompromising craft.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-neutral-400 mb-10 leading-relaxed font-normal">
            Specialized in on-device AI, high-performance platforms, and bespoke digital ventures. Conceived in Lagos, engineered for the world.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button asChild variant="solar" size="lg" className="rounded-2xl px-6 h-12 text-sm font-semibold">
              <a href="#work" className="flex items-center gap-2">
                Selected Work <ArrowDown className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-2xl px-6 h-12 text-sm border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 text-white">
              <a href="#contact" className="flex items-center gap-2">
                Let&apos;s Build Together <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </a>
            </Button>
          </div>

          {/* Three Understated Trust Anchors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left pt-6 border-t border-neutral-800/60">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">100% On-Device AI</div>
                <div className="text-xs text-neutral-400 mt-0.5">Zero cloud photo uploads. Sovereign privacy by design.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">ICAO Doc 9303</div>
                <div className="text-xs text-neutral-400 mt-0.5">Certified biometric passport &amp; visa compliance.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">Enterprise Scalability</div>
                <div className="text-xs text-neutral-400 mt-0.5">FastAPI, GCP Cloud Run &amp; low-latency WebRTC.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section (MetaLab Showcase Style) */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800/80">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
              Case Studies &amp; Deployments
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
            We focus on a select number of deeply technical projects, delivering both proprietary flagship products and enterprise partner platforms.
          </p>
        </div>

        {/* 01: PortaSnap (Proprietary Venture) */}
        <div id="portasnap" className="mb-28 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-neutral-500 uppercase">01 / Flagship Product</span>
                <Badge variant="solar" className="text-[10px] py-0 px-2 font-mono">
                  Launching Soon
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                PortaSnap
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                The on-device passport and visa photo studio. Instant ICAO Doc 9303 &amp; NIS compliance with sub-pixel face validation. Zero cloud photo uploads—biometric photos never leave the user&apos;s phone.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <Button asChild variant="outline" size="sm" className="rounded-xl border-neutral-700 bg-neutral-900/40 text-xs">
                <Link href="/privacy">
                  Privacy Policy <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-amber-400" />
                </Link>
              </Button>
              <Button asChild variant="solar" size="sm" className="rounded-xl text-xs font-semibold">
                <a href="mailto:dev@takjug.com?subject=PortaSnap%20Early%20Access%20Request">
                  Request APK Access
                </a>
              </Button>
            </div>
          </div>

          {/* Interactive PortaSnap HUD Reticle */}
          <PortaSnapSimulator />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-2xl border border-neutral-800/80 bg-neutral-900/30">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">01. Geometry</div>
              <div className="text-sm font-bold text-white mb-1">Sub-Pixel Facial Alignment</div>
              <div className="text-xs text-neutral-400">Verifies eye horizontal leveling, 70%–80% head coverage, and crown-to-chin distances before capture.</div>
            </div>

            <div className="p-4 rounded-2xl border border-neutral-800/80 bg-neutral-900/30">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">02. Luminance</div>
              <div className="text-sm font-bold text-white mb-1">Bilateral Shadow Analysis</div>
              <div className="text-xs text-neutral-400">Monitors ambient lighting in real time with automated 20% shadow threshold rejection to ensure acceptance.</div>
            </div>

            <div className="p-4 rounded-2xl border border-neutral-800/80 bg-neutral-900/30">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">03. Output</div>
              <div className="text-sm font-bold text-white mb-1">Lossless 300+ DPI Print Sheets</div>
              <div className="text-xs text-neutral-400">Generates standard 4×6 inch tiled photo grids (2×2 inch or 35×45 mm) ready for commercial printing.</div>
            </div>
          </div>
        </div>

        {/* 02: Àkọ́nilẹ́kọ̀ọ́ Yorùbá (Client Partnership) */}
        <div id="partner" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-neutral-500 uppercase">02 / Strategic Partnership</span>
                <Badge variant="cyan" className="text-[10px] py-0 px-2 font-mono">
                  Enterprise Client
                </Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Àkọ́nilẹ́kọ̀ọ́ Yorùbá
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                Preserving indigenous language and cultural heritage at global scale. A full-stack learning platform combining low-latency WebRTC virtual classrooms with intelligent Gemini AI dialect tutoring.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Badge variant="outline" className="font-mono text-xs border-neutral-700 bg-neutral-900/60">
                GCP Cloud Run Monolith
              </Badge>
              <Badge variant="outline" className="font-mono text-xs border-neutral-700 bg-neutral-900/60">
                Flutter Client
              </Badge>
            </div>
          </div>

          {/* Interactive Akonilede Engine Showcase */}
          <AkoniledeShowcase />
        </div>
      </section>

      {/* Capabilities (Bakken & Bæck Editorial Style) */}
      <section id="capabilities" className="max-w-6xl mx-auto px-6 py-28 border-t border-neutral-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Capabilities
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
            We operate at the intersection of edge computer vision, cloud infrastructure, and obsessive UI engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/20 hover:border-amber-500/40 hover:bg-neutral-900/40 transition-all">
            <span className="text-2xl font-mono text-amber-400 font-black mb-4 block">01</span>
            <h3 className="text-xl font-bold text-white mb-3">On-Device AI &amp; Vision</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              We compile neural networks and computer vision models directly to smartphone silicon. Zero cloud latency, zero photo transmissions, and airtight data sovereignty.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/20 hover:border-cyan-500/40 hover:bg-neutral-900/40 transition-all">
            <span className="text-2xl font-mono text-cyan-400 font-black mb-4 block">02</span>
            <h3 className="text-xl font-bold text-white mb-3">Scalable Cloud Architecture</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Micro-modular backend monoliths on Google Cloud Run, real-time WebRTC media routing, and high-throughput Redis caching designed for rock-solid stability.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/20 hover:border-emerald-500/40 hover:bg-neutral-900/40 transition-all">
            <span className="text-2xl font-mono text-emerald-400 font-black mb-4 block">03</span>
            <h3 className="text-xl font-bold text-white mb-3">Cross-Platform Craft</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Native-feel Flutter mobile apps and responsive Next.js web applications engineered with mathematical typography, fluid 60fps animations, and human ergonomics.
            </p>
          </div>
        </div>
      </section>

      {/* The Studio Manifesto / Philosophy */}
      <section id="philosophy" className="max-w-5xl mx-auto px-6 py-28 border-t border-neutral-800/80 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-6 block">
          Our Mandate
        </span>
        <blockquote className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-12">
          &ldquo;We reject the idea that software should be cold, complex, or invasive. Every tool we ship must lift a measurable weight off human shoulders.&rdquo;
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-left pt-12 border-t border-neutral-800/60">
          <div>
            <div className="text-base font-bold text-white mb-1">Industrial Precision</div>
            <div className="text-xs text-neutral-400 leading-relaxed">
              Deterministic algorithms and deep systems engineering that work predictably without fragile bloat.
            </div>
          </div>

          <div>
            <div className="text-base font-bold text-white mb-1">Ease of Living</div>
            <div className="text-xs text-neutral-400 leading-relaxed">
              Software built to dissolve administrative anxiety—from passport applications to indigenous education.
            </div>
          </div>

          <div>
            <div className="text-base font-bold text-white mb-1">Uncompromising Privacy</div>
            <div className="text-xs text-neutral-400 leading-relaxed">
              Architectural edge privacy by design. Sensitive personal and biometric data stays strictly on your device.
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ & Compliance */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-24 border-t border-neutral-800/80">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold mb-2 block">
            Verification &amp; Standards
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Core details regarding biometric standards, privacy compliance, and studio collaboration.
          </p>
        </div>

        <Accordion type="single" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How does PortaSnap achieve 100% on-device biometric compliance without a server?
            </AccordionTrigger>
            <AccordionContent>
              PortaSnap bundles high-efficiency local machine learning models compiled directly into the mobile binary. Facial landmarks, eye leveling, shadow symmetry, and head-to-chin ratios are computed entirely in memory on your smartphone’s Neural Processing Unit (NPU) or GPU. No raw photos, vectors, or biometric templates are ever transmitted over the internet.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              What is ICAO Doc 9303 compliance and why does it matter?
            </AccordionTrigger>
            <AccordionContent>
              ICAO Doc 9303 is the United Nations standard governing Machine Readable Travel Documents (MRTDs), adopted by immigration services worldwide including the Nigeria Immigration Service (NIS), US Department of State, and Schengen consulates. PortaSnap’s automated reticle and 300+ DPI tiled output guarantee full conformity to these strict dimensional and lighting rules.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              How does Takjug collaborate with client organizations like Àkọ́nilẹ́kọ̀ọ́ Yorùbá?
            </AccordionTrigger>
            <AccordionContent>
              We function as an embedded technical partner. For Àkọ́nilẹ́kọ̀ọ́ Yorùbá, we designed the entire cloud topology on Google Cloud Platform, engineered the real-time WebRTC LiveKit classroom infrastructure, built the FastAPI backend, and crafted the multi-platform Flutter learning applications from ground up.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              How does Takjug comply with NDPR and European GDPR regulations?
            </AccordionTrigger>
            <AccordionContent>
              We practice architectural privacy by design: by processing sensitive biometric data strictly on the client device and avoiding cloud databases altogether, we eliminate biometric breach vectors entirely. Takjug is an officially registered enterprise in Nigeria under the Corporate Affairs Commission (CAC) and complies strictly with the Nigeria Data Protection Regulation (NDPR) and European GDPR.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* MetaLab Style Contact & Inquiry Section */}
      <div id="contact" className="border-t border-neutral-800/80 bg-gradient-to-b from-transparent to-neutral-950/80">
        <ContactSection />
      </div>

      {/* Clean Minimalist Corporate Footer */}
      <footer className="border-t border-neutral-800 bg-[#05070B] py-16 text-xs text-neutral-400">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-extrabold text-sm">
                T
              </div>
              <span className="text-white font-bold text-base tracking-tight">Takjug Technologies</span>
            </div>
            <p className="leading-relaxed text-neutral-400 mb-4 max-w-sm">
              An incorporated technology enterprise and digital venture studio in Nigeria, building resilient consumer software and deep tech solutions for the global market.
            </p>
            <p className="text-neutral-500">
              © {new Date().getFullYear()} Takjug Technologies. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Official Verification &amp; Contacts</h4>
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
                <Mail className="w-4 h-4 text-cyan-400" />
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
            <h4 className="text-white font-semibold text-sm mb-3">Legal &amp; Transparency</h4>
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
