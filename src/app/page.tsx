"use client";

import * as React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowUpRight,
  ArrowDown,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Activity,
  Check,
  Radio,
  Sparkles,
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

interface ProjectShowcase {
  id: "portasnap" | "akonilede";
  number: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  logoBg: string;
  image: string;
  imageAlt: string;
  accentGlow: string;
  accentDot: string;
  action: "playstore" | "contact";
}

const PROJECTS: ProjectShowcase[] = [
  {
    id: "portasnap",
    number: "01",
    category: "Studio Venture",
    name: "PortaSnap",
    tagline: "Biometric Passport & Visa Studio",
    description:
      "The on-device biometric passport and visa studio. Verified for international passport and visa standards with sub-pixel face alignment. All processing runs locally on device hardware—zero photos or biometric vectors ever leave your phone.",
    logo: "/brand/portasnap_icon.png",
    logoBg: "bg-black",
    image: "/brand/portasnap/play_store_screenshot_1.png",
    imageAlt: "PortaSnap On-Device Biometric Studio App",
    accentGlow: "from-cyan-500/12 via-emerald-500/8 to-transparent",
    accentDot: "bg-cyan-500",
    action: "playstore",
  },
  {
    id: "akonilede",
    number: "02",
    category: "Client Partnership",
    name: "Àkọ́niledè Yorùbá",
    tagline: "Indigenous Language Education Platform",
    description:
      "End-to-end digital infrastructure for indigenous language education and cultural preservation. Real-time virtual classrooms paired with intelligent dialect tutoring, engineered by Takjug in partnership with Àkọ́niledè.",
    logo: "/brand/akonilede_logo.svg",
    logoBg: "bg-white",
    image: "/brand/akonilede/ai-teaching-tools.png",
    imageAlt: "Àkọ́niledè Educational Systems Architecture",
    accentGlow: "from-amber-500/14 via-rose-500/8 to-transparent",
    accentDot: "bg-amber-500",
    action: "contact",
  },
];

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [artVariant, setArtVariant] = React.useState<ArtVariant>("knot");
  const [activeProjectIndex, setActiveProjectIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isContactOpen, setIsContactOpen] = React.useState(false);
  const [contactSubject, setContactSubject] = React.useState("Inquiry: Takjug Technologies");
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  // Automatically transition between projects every 6 seconds (pauses smoothly on hover)
  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveProjectIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeProject = PROJECTS[activeProjectIndex];

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
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 h-24 flex items-center justify-between">
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
        <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 w-full my-auto pointer-events-none">
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
        <div className="relative z-20 pb-8 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto w-full flex items-center justify-center pointer-events-none">
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
      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Systems Index: Master Auto-Transitioning Project Carousel (Zero Clutter, Human Editorial) */}
        <section
          id="deployments"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative py-20 sm:py-24 border-b border-neutral-200 dark:border-neutral-800/60 transition-colors duration-700"
        >
          {/* Subtle Ambient Glow that smoothly adapts per project */}
          <div
            aria-hidden="true"
            className={`absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[550px] rounded-full blur-[130px] pointer-events-none transition-all duration-700 ease-in-out -z-10 bg-gradient-to-br ${activeProject.accentGlow}`}
          />

          {/* Section Header with Project Switcher & Auto-Cycle Indicators */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-10 border-b border-neutral-200 dark:border-neutral-800/80 gap-4">
            <div className="flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full transition-colors duration-500 ${activeProject.accentDot}`} />
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400 font-medium">
                Systems Index
              </h2>
            </div>

            {/* Project Indicators */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              {PROJECTS.map((proj, idx) => (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => setActiveProjectIndex(idx)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 cursor-pointer ${
                    idx === activeProjectIndex
                      ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-medium shadow-xs border border-neutral-300/70 dark:border-neutral-800"
                      : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white font-normal"
                  }`}
                >
                  <img
                    src={proj.logo}
                    alt=""
                    className="w-3.5 h-3.5 rounded-xs shrink-0 object-contain"
                  />
                  <span>{proj.number} // {proj.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Master Auto-Swiping Project Stage */}
          <div className="relative min-h-[460px] sm:min-h-[480px]">
            {PROJECTS.map((proj, idx) => {
              const isActive = idx === activeProjectIndex;
              return (
                <div
                  key={proj.id}
                  className={`transition-all duration-700 ease-in-out ${
                    isActive
                      ? "opacity-100 translate-x-0 relative z-10"
                      : "opacity-0 translate-x-8 absolute inset-0 pointer-events-none z-0"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Left Column: Brand Identity, Simple Clear Copy & Direct Actions */}
                    <div className="lg:col-span-7 max-w-xl">
                      {/* Subtle Category Tag */}
                      <div className="flex items-center gap-2 mb-4 text-xs font-mono text-neutral-500 font-normal">
                        <span className="text-neutral-700 dark:text-neutral-300">{proj.number} // {proj.category}</span>
                      </div>

                      {/* Logo & Project Title (Turned down bold) */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm ${proj.logoBg} overflow-hidden shrink-0 flex items-center justify-center p-0`}>
                          <img
                            src={proj.logo}
                            alt={proj.name}
                            className={proj.id === "akonilede" ? "w-10 h-10 object-contain" : "w-full h-full object-cover"}
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight leading-tight">
                            {proj.name}
                          </h3>
                          <p className="text-xs font-mono text-neutral-500 font-normal mt-0.5">
                            {proj.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Simple, Human Narrative (Zero Tech-Jargon Noise) */}
                      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                        {proj.description}
                      </p>

                      {/* Direct Actions */}
                      {proj.action === "playstore" ? (
                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                          <a
                            href="https://play.google.com/store/apps/details?id=com.takjug.portasnap"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors shadow-sm cursor-pointer"
                          >
                            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                              <path d="M3.609 1.813C3.36 2.073 3.2 2.51 3.2 3.093v17.814c0 .583.16 1.02.41 1.28l.067.067L13.68 12.25v-.277L3.676 1.745l-.067.068z" fill="#00D2FF" />
                              <path d="M17.017 15.59l-3.336-3.34v-.278l3.336-3.34.075.042 3.953 2.247c1.129.641 1.129 1.69 0 2.333l-3.953 2.248-.075.089z" fill="#FFCE00" />
                              <path d="M13.756 12.113L3.609 22.254c.371.393.985.441 1.68.046l11.728-6.662-3.261-3.525z" fill="#FF334B" />
                              <path d="M13.756 11.887l3.261-3.525L5.289 1.7c-.695-.395-1.309-.347-1.68.046l10.147 10.14z" fill="#00F076" />
                            </svg>
                            <div className="flex flex-col text-left leading-none font-sans">
                              <span className="text-[8px] uppercase tracking-wider font-medium opacity-70">
                                GET IT ON
                              </span>
                              <span className="text-[11px] font-semibold tracking-tight mt-0.5">
                                Google Play
                              </span>
                            </div>
                          </a>
                          <Link
                            href="/privacy/portasnap"
                            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors underline font-normal"
                          >
                            Privacy Policy
                          </Link>
                          <Link
                            href="/terms/portasnap"
                            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors underline font-normal"
                          >
                            Terms of Service
                          </Link>
                        </div>
                      ) : (
                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                          <button
                            type="button"
                            onClick={() => handleContactTrigger("Partnership Inquiry: Systems Architecture & Applied AI")}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors shadow-sm cursor-pointer font-medium"
                          >
                            <span>Architect a Partnership</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-neutral-500 font-normal">
                            Engineered by Takjug Technologies.
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Clean App Preview (Zero Overlaid Text or Clutter) */}
                    <div className="lg:col-span-5 flex items-center justify-center">
                      <div className="relative w-full max-w-[300px] sm:max-w-[320px] rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/50 dark:bg-neutral-950 p-2 sm:p-2.5 shadow-xl">
                        <div className="relative h-[360px] sm:h-[400px] w-full overflow-hidden rounded-2xl bg-neutral-950 flex items-center justify-center">
                          <img
                            src={proj.image}
                            alt={proj.imageAlt}
                            className="max-h-full max-w-full object-contain rounded-xl drop-shadow-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Simple Bottom Progress Track */}
          <div className="flex items-center justify-between pt-8 mt-10 border-t border-neutral-200 dark:border-neutral-800/80 text-xs font-mono text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                0{activeProjectIndex + 1}
              </span>
              <span>/</span>
              <span>0{PROJECTS.length} Systems</span>
            </div>

            {/* Gentle Dots */}
            <div className="flex items-center gap-2">
              {PROJECTS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveProjectIndex(idx)}
                  aria-label={`Jump to project ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeProjectIndex
                      ? "w-8 bg-neutral-900 dark:bg-white"
                      : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
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
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Takjug Technologies.</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>Lagos, Nigeria</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms/portasnap" className="hover:text-black dark:hover:text-white transition-colors">
              Terms of Service
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
