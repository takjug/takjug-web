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
  Radio,
  Gamepad2,
  Droplet,
  Flame,
  Terminal,
  Activity,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
            <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Frontier Deep Tech & Digital Venture Studio
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Engineering Precision <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-400">
              With a Human Soul
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 mb-10 leading-relaxed font-normal">
            Takjug Technologies is an enterprise innovation studio and venture laboratory. Conceived in Africa and built for the world, we engineer on-device artificial intelligence, biometric verification, and digital tools designed to bring genuine ease to daily living.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button asChild variant="solar" size="lg">
              <a href="#ventures">Explore Our Ventures</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#mandate">Our Philosophy</a>
            </Button>
          </div>

          {/* Telemetry Metrics Grid using shadcn Cards */}
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
                    Certified immigration & NIS Step 2 facial standards compliance.
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-neutral-800/80 bg-neutral-900/40 backdrop-blur-sm hover:border-emerald-500/40 transition-all">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold font-mono text-white">3 Active Labs</div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Biometric vision, anti-feed mesh tech & Rust simulation runtime.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flagship Venture Spotlight: PortaSnap */}
      <section id="ventures" className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <Badge variant="solar" className="mb-2">
              <Camera className="w-3.5 h-3.5 mr-1" /> Flagship Consumer Venture
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              PortaSnap
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md mt-3 md:mt-0 leading-relaxed">
            AI-powered biometric passport & visa photo generator engineered for 100% on-device privacy and instant government immigration compliance.
          </p>
        </div>

        {/* Live Simulator Component built with shadcn */}
        <PortaSnapSimulator />

        {/* Technical Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="border-neutral-800/80 bg-[#141922]/60 hover:border-amber-500/30 transition-all">
            <CardHeader className="pb-2">
              <Badge variant="solar" className="w-fit mb-2">Biometrics</Badge>
              <CardTitle className="text-lg text-white">Sub-Pixel Facial Geometry</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-neutral-400 leading-relaxed">
              Calculates precise eye-level horizontal line, crown-to-chin distance (50%–69%), and 70%–80% European ICAO criteria before image capture.
            </CardContent>
          </Card>

          <Card className="border-neutral-800/80 bg-[#141922]/60 hover:border-cyan-500/30 transition-all">
            <CardHeader className="pb-2">
              <Badge variant="cyber" className="w-fit mb-2">Computer Vision</Badge>
              <CardTitle className="text-lg text-white">Bilateral Shadow Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-neutral-400 leading-relaxed">
              Monitors ambient lighting in real time with an automatic 20% shadow threshold detector, preventing rejected visa photos taken in poor room lighting.
            </CardContent>
          </Card>

          <Card className="border-neutral-800/80 bg-[#141922]/60 hover:border-emerald-500/30 transition-all">
            <CardHeader className="pb-2">
              <Badge variant="emerald" className="w-fit mb-2">Print Ready</Badge>
              <CardTitle className="text-lg text-white">Lossless 300+ DPI Export</CardTitle>
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
                Request APK Access
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase via Shadcn Tabs */}
      <section id="portfolio" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-800/80">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="solar" className="mb-3">
            <Layers className="w-3.5 h-3.5 mr-1" /> Complete Venture Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Takjug Innovation Spectrum
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            From consumer edge AI to low-level systems programming and community physical utilities. Explore our internal ventures and commercial platform divisions.
          </p>
        </div>

        <Tabs defaultValue="labs" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 max-w-xl w-full">
              <TabsTrigger value="labs">Internal R&D Labs</TabsTrigger>
              <TabsTrigger value="studio">Platform Studio</TabsTrigger>
              <TabsTrigger value="impact">Allied Impact</TabsTrigger>
            </TabsList>
          </div>

          {/* Tab 1: Internal R&D Labs */}
          <TabsContent value="labs" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Proxima Card */}
              <Card className="border-neutral-800 bg-gradient-to-br from-[#141922] via-[#0E131A] to-[#0B0F14] hover:border-amber-500/40 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="solar">Social Tech &amp; Mesh Network</Badge>
                    <span className="text-[11px] font-mono text-neutral-500">Stage: Incubating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Radio className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">Proxima</CardTitle>
                      <CardDescription>Anti-Feed Offline Coordination &amp; Physical Presence</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-xs text-neutral-400 leading-relaxed">
                  <p>
                    Proxima inverts the attention-harvesting mechanics of modern social algorithms. Built around a novel <strong>Time Spent Offline (TSO)</strong> metric, Proxima utilizes peer-to-peer Bluetooth LE and local mesh coordination to bring people together in physical space without feeds, likes, or cloud telemetry.
                  </p>
                  <div className="p-3 rounded-xl border border-neutral-800 bg-neutral-900/60 font-mono text-[11px] space-y-1">
                    <div className="text-amber-400 font-semibold">Core Philosophy:</div>
                    <div className="text-neutral-400">• Metric: High TSO (Time Spent Offline)</div>
                    <div className="text-neutral-400">• Protocol: Decentralized P2P Mesh</div>
                    <div className="text-neutral-400">• Zero algorithmic feed manipulation</div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Badge variant="outline" className="text-[10px]">
                    Internal Patent Pending • Edge Coordination
                  </Badge>
                </CardFooter>
              </Card>

              {/* Uscellar Card */}
              <Card className="border-neutral-800 bg-gradient-to-br from-[#141922] via-[#0E131A] to-[#0B0F14] hover:border-cyan-500/40 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="cyber">Systems Architecture</Badge>
                    <span className="text-[11px] font-mono text-neutral-500">Stage: In Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Gamepad2 className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">Uscellar</CardTitle>
                      <CardDescription>High-Throughput Rust Game Engine &amp; Creative Engine</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-xs text-neutral-400 leading-relaxed">
                  <p>
                    A low-latency, deterministic simulation engine built entirely in Rust. Powered by the proprietary <strong>Takjug Brain</strong> copilot, Uscellar empowers creators to build complex spatial logic, procedural landscapes, and real-time multiplayer worlds with zero garbage-collection pauses.
                  </p>
                  <div className="p-3 rounded-xl border border-neutral-800 bg-neutral-900/60 font-mono text-[11px] space-y-1">
                    <div className="text-cyan-400 font-semibold">Technical Highlights:</div>
                    <div className="text-neutral-400">• Core Language: 100% Memory-Safe Rust</div>
                    <div className="text-neutral-400">• Engine: Vulkan / Metal / DirectX 12 backend</div>
                    <div className="text-neutral-400">• Local AI copilot: On-device inference</div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Badge variant="outline" className="text-[10px]">
                    Rust Engine • Takjug Brain Integrated
                  </Badge>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 2: Commercial Platform Studio */}
          <TabsContent value="studio">
            <Card className="border-neutral-800 bg-gradient-to-br from-[#141922] via-[#0E131A] to-[#0B0F14]">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="solar">Commercial Engine</Badge>
                  <span className="text-[11px] font-mono text-neutral-500">Enterprise Services</span>
                </div>
                <CardTitle className="text-2xl text-white">Platform Engineering &amp; Venture Architecture</CardTitle>
                <CardDescription>
                  Enterprise-grade system design, high-frequency backend engineering, and mission-critical software.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                  <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/50">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1.5">Systems Re-Engineering</h4>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      Transforming monolithic bottlenecks into deterministic, fault-tolerant micro-architectures with microsecond SLAs.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/50">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1.5">Edge AI &amp; Vision Pipelines</h4>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      Deploying optimized ML models directly on customer devices to eliminate server costs and ensure absolute regulatory data privacy.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/50">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                      <Activity className="w-4 h-4" />
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1.5">Mission-Critical Availability</h4>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      Comprehensive observability, geo-distributed failovers, and resilient cloud architectures tailored for financial and immigration scale.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t border-neutral-800/80 pt-5">
                <span className="text-xs text-neutral-400">
                  Ready to architect your enterprise infrastructure?
                </span>
                <Button asChild variant="solar" size="sm">
                  <a href="#contact">Engage Our Studio</a>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Tab 3: Allied Impact */}
          <TabsContent value="impact">
            <Card className="border-neutral-800 bg-gradient-to-br from-[#141922] via-[#0E131A] to-[#0B0F14]">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="emerald">Physical Utility • Social Initiative</Badge>
                  <span className="text-[11px] font-mono text-neutral-500">Live Pilot</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">Charlix Clean Water &amp; Essentials</CardTitle>
                    <CardDescription>
                      Affordable drinking water micro-factories &amp; community consumable relief
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-xs text-neutral-400 leading-relaxed">
                <p>
                  Deep tech is hollow without tangible human relief. Charlix is Takjug’s allied physical infrastructure venture, engineered to directly counter the harsh cost-of-living inflation in developing urban communities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-1">
                    <div className="text-emerald-400 font-semibold text-sm">IoT Purity Assurance</div>
                    <p className="text-neutral-400 text-xs">
                      Equipped with automated reverse-osmosis telemetry and continuous mineral testing sensors to guarantee certified potable water.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-1">
                    <div className="text-cyan-400 font-semibold text-sm">Community Distribution</div>
                    <p className="text-neutral-400 text-xs">
                      Decentralized micro-refill hubs bringing essential consumables within walking distance at a fraction of inflated supermarket pricing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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
            We reject the idea that technology must be cold, sterile, or extractive. Takjug exists to channel world-class engineering into tools that reduce anxiety, restore community, and make everyday living easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-neutral-800/80 bg-neutral-900/30 hover:border-amber-500/40 transition-all">
            <CardHeader>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2">
                <Cpu className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg text-white">Industrial Precision</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-neutral-400 leading-relaxed">
              Mathematical rigor, deep systems programming, and high-performance algorithms that operate reliably across mobile, cloud, and edge hardware without fragile bloat.
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
              Every venture we incubate must lift a measurable weight off human shoulders—whether simplifying legal biometric compliance or streamlining personal resources.
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
              We pioneer edge intelligence that processes sensitive user information directly on the user&apos;s device. We respect user sovereignty and comply strictly with global data regulations.
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
            Everything you need to know about our biometric compliance, privacy engineering, and venture model.
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
              What is the Takjug Venture Studio engagement model?
            </AccordionTrigger>
            <AccordionContent>
              Takjug Technologies operates both an internal incubator (creating proprietary products like PortaSnap, Proxima, and Uscellar) and a platform engineering consultancy. We partner with select enterprises, fintechs, and government bodies to solve mission-critical systems challenges, rebuild legacy microservices, and deploy sovereign on-device AI.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              How does Proxima&apos;s &quot;Time Spent Offline&quot; (TSO) metric work?
            </AccordionTrigger>
            <AccordionContent>
              Traditional social platforms optimize for Time Spent In-App to maximize ad impressions. Proxima tracks validated face-to-face peer encounters via encrypted, localized peer-to-peer Bluetooth Low Energy beacons, rewarding genuine physical human presence and real-world collaboration while keeping user feeds completely algorithm-free.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
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
              An incorporated technology enterprise and venture studio in Nigeria, building resilient consumer software and deep tech solutions for the global market.
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
