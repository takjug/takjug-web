import Link from "next/link";
import Navbar from "@/components/navbar";
import ThreeHero from "@/components/three-hero";
import PortaSnapSimulator from "@/components/portasnap-simulator";
import ContactSection from "@/components/contact-section";
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
  Terminal,
  Activity,
  Award,
  BookOpen,
  GraduationCap,
  Server,
  Video,
  Code2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-neutral-100 selection:bg-amber-500 selection:text-black font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 border-b border-neutral-800/80">
        <ThreeHero />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none bg-gradient-to-b from-transparent via-[#0B0F14]/40 to-[#0B0F14]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <Badge variant="solar" className="mb-6 px-4 py-1.5 text-xs">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Frontier Systems Engineering &amp; On-Device AI Studio
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Engineering Precision <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-400">
              With a Human Soul
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 mb-10 leading-relaxed font-normal">
            Takjug Technologies is an enterprise innovation studio and digital product engineering venture. Conceived in Africa and built for the global market, we craft sovereign on-device artificial intelligence, biometric computer vision, and resilient cloud architectures.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button asChild variant="solar" size="lg">
              <a href="#portasnap">Explore PortaSnap</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#partner">View Client Partnership</a>
            </Button>
          </div>

          {/* Grounded Telemetry Metrics Grid using shadcn Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <Card className="border-neutral-800/80 bg-neutral-900/40 backdrop-blur-sm hover:border-amber-500/40 transition-all">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold font-mono text-white">100% On-Device</div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Zero cloud photo uploads. Complete user biometrics sovereignty.
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-neutral-800/80 bg-neutral-900/40 backdrop-blur-sm hover:border-cyan-500/40 transition-all">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold font-mono text-white">ICAO Doc 9303</div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Sub-pixel facial geometry verified against NIS Step 2 &amp; global standards.
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-neutral-800/80 bg-neutral-900/40 backdrop-blur-sm hover:border-emerald-500/40 transition-all">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold font-mono text-white">Bespoke Scale</div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Production FastAPI, GCP Cloud Run, WebRTC &amp; Flutter architecture.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flagship Venture Spotlight: PortaSnap */}
      <section id="portasnap" className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <Badge variant="solar" className="mb-2">
              <Camera className="w-3.5 h-3.5 mr-1" /> Flagship Product • In Launch Pipeline
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              PortaSnap
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md mt-3 md:mt-0 leading-relaxed">
            AI-powered biometric passport &amp; visa photo studio engineered for 100% on-device privacy and instant government immigration compliance.
          </p>
        </div>

        {/* Live Simulator Component built with shadcn */}
        <PortaSnapSimulator />

        {/* Technical Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="border-neutral-800/80 bg-[#141922]/60 hover:border-amber-500/30 transition-all">
            <CardHeader className="pb-2">
              <Badge variant="solar" className="w-fit mb-2">On-Device Vision</Badge>
              <CardTitle className="text-lg text-white">Sub-Pixel Facial Geometry</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-neutral-400 leading-relaxed">
              Calculates precise eye-level horizontal line, crown-to-chin distance (50%–69%), and 70%–80% European ICAO criteria before image capture.
            </CardContent>
          </Card>

          <Card className="border-neutral-800/80 bg-[#141922]/60 hover:border-cyan-500/30 transition-all">
            <CardHeader className="pb-2">
              <Badge variant="cyber" className="w-fit mb-2">Lighting Analyzer</Badge>
              <CardTitle className="text-lg text-white">Bilateral Shadow Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-neutral-400 leading-relaxed">
              Monitors ambient lighting in real time with an automatic 20% shadow threshold detector, preventing rejected visa photos taken in poor room lighting.
            </CardContent>
          </Card>

          <Card className="border-neutral-800/80 bg-[#141922]/60 hover:border-emerald-500/30 transition-all">
            <CardHeader className="pb-2">
              <Badge variant="emerald" className="w-fit mb-2">Lossless Export</Badge>
              <CardTitle className="text-lg text-white">Lossless 300+ DPI Print Sheets</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-neutral-400 leading-relaxed">
              Instant generation of standard printable 4×6 inch tiled multi-photo grids (2×2 inch or 35×45 mm) ready for commercial photo printing.
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl border border-neutral-800 bg-[#0E131A]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-neutral-300 font-medium">
              Android Production Build Verified • Google Play Organization Pipeline Active
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <Link href="/privacy">
                Review Privacy Policy <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-amber-400" />
              </Link>
            </Button>
            <Button asChild variant="solar" size="sm">
              <a href="mailto:dev@takjug.com?subject=PortaSnap%20Early%20Access%20Inquiry">
                Request Early APK Access
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Strategic Client Partnership: Akonilede Yoruba */}
      <section id="partner" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <Badge variant="cyan" className="mb-2 border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-semibold uppercase tracking-wider text-[11px]">
              <Users className="w-3.5 h-3.5 mr-1" /> Strategic Client Partnership
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Àkọ́nilẹ́kọ̀ọ́ Yorùbá
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md mt-3 md:mt-0 leading-relaxed">
            Architecting end-to-end digital infrastructure for indigenous language education, real-time virtual classrooms, and interactive cultural preservation.
          </p>
        </div>

        {/* Detailed Case Study Card */}
        <Card className="border-neutral-800 bg-gradient-to-br from-[#141922] via-[#0E131A] to-[#0B0F14] overflow-hidden shadow-2xl">
          <CardHeader className="border-b border-neutral-800/80 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white font-bold">
                    Indigenous Language &amp; Cultural Platform
                  </CardTitle>
                  <CardDescription className="text-xs text-neutral-400 mt-1">
                    Client &amp; Partner Organization • Complete Systems Architecture &amp; Engineering by Takjug
                  </CardDescription>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-mono text-[10px]">
                  Production Stage
                </Badge>
                <Badge variant="emerald" className="text-[10px]">
                  GCP Enterprise
                </Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 sm:p-8 space-y-8">
            {/* Mission Statement */}
            <div className="p-5 rounded-2xl border border-cyan-500/20 bg-cyan-950/20 text-neutral-300 text-xs sm:text-sm leading-relaxed">
              <p>
                <strong>Àkọ́nilẹ́kọ̀ọ́ Yorùbá</strong> is a pioneering educational platform dedicated to teaching, preserving, and scaling the Yorùbá language and cultural heritage across the global diaspora. Takjug Technologies serves as the core technical partner, responsible for designing the cloud architecture, micro-modular API backend, real-time video classroom systems, and multi-platform mobile application.
              </p>
            </div>

            {/* Architecture Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl border border-neutral-800/80 bg-neutral-900/50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                  <Server className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-sm">GCP Serverless Core</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Micro-modular monolith built with FastAPI on Google Cloud Run, backed by Cloud SQL (PostgreSQL) and Memorystore Redis for high-throughput event routing.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-neutral-800/80 bg-neutral-900/50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                  <Video className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-sm">Real-Time WebRTC Classrooms</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Low-latency live video instructional infrastructure powered by self-hosted LiveKit, enabling seamless teacher-student audio, video, and whiteboard interaction.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-neutral-800/80 bg-neutral-900/50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-sm">Cross-Platform Flutter Client</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  High-fidelity mobile and web learning portals featuring audio pronunciation drills, interactive quizzes, automated booking schedules, and Gemini AI tutoring.
                </p>
              </div>
            </div>

            {/* Architecture Stack Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800/80">
              <span className="text-xs text-neutral-400 font-medium">Integrated Production Stack:</span>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="font-mono text-[10px]">Google Cloud Run</Badge>
                <Badge variant="outline" className="font-mono text-[10px]">FastAPI</Badge>
                <Badge variant="outline" className="font-mono text-[10px]">LiveKit WebRTC</Badge>
                <Badge variant="outline" className="font-mono text-[10px]">PostgreSQL</Badge>
                <Badge variant="outline" className="font-mono text-[10px]">Flutter</Badge>
                <Badge variant="outline" className="font-mono text-[10px]">Vertex AI / Gemini</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Studio Capabilities: What We Do */}
      <section id="capabilities" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="solar" className="mb-3">
            <Layers className="w-3.5 h-3.5 mr-1" /> Core Engineering Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            How We Partner &amp; Build
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            We focus strictly on deep technical problems where execution quality, privacy, and architectural reliability are paramount.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-neutral-800/80 bg-neutral-900/30 hover:border-amber-500/40 transition-all">
            <CardHeader>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2">
                <Cpu className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg text-white">On-Device AI &amp; Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-neutral-400 leading-relaxed">
              We engineer zero-cloud biometric validation, sub-pixel edge computer vision, and local neural processing that runs entirely on end-user hardware, eliminating server latency and data breach liability.
            </CardContent>
          </Card>

          <Card className="border-neutral-800/80 bg-neutral-900/30 hover:border-cyan-500/40 transition-all">
            <CardHeader>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
                <Server className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg text-white">Scalable Platform Engineering</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-neutral-400 leading-relaxed">
              From Google Cloud serverless backends and WebRTC live media streaming to Redis caching hubs, we build clean micro-modular systems designed for fault tolerance and predictable cost scaling.
            </CardContent>
          </Card>

          <Card className="border-neutral-800/80 bg-neutral-900/30 hover:border-emerald-500/40 transition-all">
            <CardHeader>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                <Code2 className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg text-white">Cross-Platform Craft</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-neutral-400 leading-relaxed">
              High-performance Flutter mobile apps and responsive Next.js web applications built with mathematical typography, smooth 60fps animations, and uncompromising human ergonomics.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Core Mandate / Philosophy */}
      <section id="mandate" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="solar" className="mb-3">
            <HeartHandshake className="w-3.5 h-3.5 mr-1" /> The Takjug Mandate
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Technology Serving Human Flourishing
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            We reject the idea that technology must be cold, sterile, or extractive. Takjug exists to channel world-class engineering into tools that reduce anxiety, restore dignity, and make everyday living easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-neutral-800/80 bg-neutral-900/30 hover:border-amber-500/40 transition-all">
            <CardHeader>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2">
                <Terminal className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg text-white">Industrial Precision</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-neutral-400 leading-relaxed">
              Mathematical rigor, deep systems programming, and deterministic algorithms that operate reliably across mobile, cloud, and edge hardware without fragile bloat.
            </CardContent>
          </Card>

          <Card className="border-neutral-800/80 bg-neutral-900/30 hover:border-cyan-500/40 transition-all">
            <CardHeader>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
                <Layers className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg text-white">Ease of Living</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-neutral-400 leading-relaxed">
              Every system we build must lift a measurable weight off human shoulders—whether eliminating passport photo rejection anxiety or making cultural education accessible globally.
            </CardContent>
          </Card>

          <Card className="border-neutral-800/80 bg-neutral-900/30 hover:border-emerald-500/40 transition-all">
            <CardHeader>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                <Lock className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg text-white">Uncompromising Privacy</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-neutral-400 leading-relaxed">
              We practice architectural edge privacy by design. Sensitive biometric and personal data stays on the user&apos;s physical device. We respect user sovereignty and comply strictly with global data regulations.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Deep Technical Specs & FAQ via Shadcn Accordion */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-20 border-t border-neutral-800/80">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="solar" className="mb-3">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Specifications &amp; Standards
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Frequently Asked Questions &amp; Architecture
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Everything you need to know about our biometric compliance, partner engineering model, and privacy architecture.
          </p>
        </div>

        <Accordion type="single" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How does PortaSnap achieve 100% on-device biometric compliance without a server?
            </AccordionTrigger>
            <AccordionContent>
              PortaSnap bundles high-efficiency local machine learning models (Google ML Kit Face Detection &amp; custom luminance matrices) compiled directly into the mobile binary. Facial landmarks, eye leveling, shadow symmetry, and head-to-chin ratios are computed entirely in memory on your smartphone’s Neural Processing Unit (NPU) or GPU. No raw photos, vectors, or biometric templates are ever transmitted over the internet.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              What is ICAO Doc 9303 compliance and why does it matter?
            </AccordionTrigger>
            <AccordionContent>
              ICAO Doc 9303 is the United Nations standard governing Machine Readable Travel Documents (MRTDs), adopted by immigration services worldwide including the Nigeria Immigration Service (NIS), US Department of State, and Schengen consulates. Non-compliant photos cause over 30% of passport application rejections. PortaSnap’s automated reticle and 300+ DPI tiled output guarantee full conformity to these strict dimensional and lighting rules.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              How does Takjug collaborate with client organizations like Àkọ́nilẹ́kọ̀ọ́ Yorùbá?
            </AccordionTrigger>
            <AccordionContent>
              We function as an embedded engineering and architecture partner. For Àkọ́nilẹ́kọ̀ọ́ Yorùbá, we designed the entire cloud topology on Google Cloud Platform, engineered the real-time WebRTC LiveKit classroom infrastructure, built the FastAPI backend, and crafted the multi-platform Flutter learning applications from ground up.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              How does Takjug comply with NDPR and GDPR regulations?
            </AccordionTrigger>
            <AccordionContent>
              We practice architectural privacy by design: by processing sensitive biometric data strictly on the client device and avoiding cloud databases altogether, we eliminate biometric breach vectors entirely. Takjug is an officially registered enterprise in Nigeria under the Corporate Affairs Commission (CAC) and complies strictly with the Nigeria Data Protection Regulation (NDPR) and European GDPR.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Interactive Contact & Inquiry Section */}
      <ContactSection />

      {/* Corporate Footer */}
      <footer className="border-t border-neutral-800 bg-[#070A0E] py-16 text-xs text-neutral-400">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
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
