"use client";

import * as React from "react";
import { GraduationCap, Volume2, Mic, Users, Server, Play, Sparkles, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface VocabularyItem {
  yoruba: string;
  tone: string;
  english: string;
  audioDuration: string;
}

const VOCAB_SAMPLES: VocabularyItem[] = [
  { yoruba: "Ẹ ǹlẹ́ o", tone: "Mid - Low - High - Mid", english: "Greetings / Hello", audioDuration: "1.2s" },
  { yoruba: "Báwo ni?", tone: "High - Mid - Mid", english: "How are things with you?", audioDuration: "0.9s" },
  { yoruba: "Ọmọlúwàbí", tone: "Mid - Mid - High - Low - High", english: "Person of high virtue & integrity", audioDuration: "1.6s" },
];

export default function AkoniledeShowcase() {
  const [activeItem, setActiveItem] = React.useState<VocabularyItem>(VOCAB_SAMPLES[0]);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<"interactive" | "architecture">("interactive");

  const handlePlayTone = (item: VocabularyItem) => {
    setActiveItem(item);
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
    }, 1200);
  };

  return (
    <Card className="border-neutral-800 bg-gradient-to-br from-[#141922] via-[#0E131A] to-[#0B0F14] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <CardHeader className="border-b border-neutral-800/80 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <CardTitle className="text-base text-white font-bold flex items-center gap-2">
                Indigenous Language Engine
                <Badge variant="cyan" className="text-[10px] py-0 px-2 font-mono">
                  LiveKit WebRTC
                </Badge>
              </CardTitle>
              <CardDescription className="text-xs text-neutral-400">
                Interactive real-time pronunciation &amp; virtual classroom topology
              </CardDescription>
            </div>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900 border border-neutral-800">
            <button
              onClick={() => setActiveTab("interactive")}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === "interactive"
                  ? "bg-cyan-500 text-black shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Interactive Tutor
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === "architecture"
                  ? "bg-cyan-500 text-black shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Systems Stack
            </button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {activeTab === "interactive" ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Interactive Pronunciation & Tonal Deck */}
            <div className="md:col-span-7 space-y-4">
              <div className="p-5 rounded-2xl border border-neutral-800/90 bg-neutral-950/60 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Active Phonation Unit
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-cyan-400">18ms Ultra-Low Latency</span>
                  </div>
                </div>

                <div className="my-3">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                    {activeItem.yoruba}
                  </div>
                  <div className="text-sm text-cyan-400 font-medium mt-1">
                    {activeItem.english}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80">
                  <div className="text-xs text-neutral-400">
                    <span className="text-neutral-500 text-[10px] uppercase font-mono block">Tone Contour</span>
                    {activeItem.tone}
                  </div>

                  <Button
                    onClick={() => handlePlayTone(activeItem)}
                    size="sm"
                    className="cursor-pointer bg-cyan-500 hover:bg-cyan-400 text-black font-semibold h-8 text-xs gap-1.5"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    {isPlaying ? "Simulating..." : "Test Audio Drill"}
                  </Button>
                </div>

                {/* Animated Audio Equalizer Bars */}
                <div className="flex items-end gap-1 h-6 mt-4 pt-1">
                  {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 65, 90, 40].map((height, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-full transition-all duration-300 ${
                        isPlaying ? "bg-cyan-400" : "bg-neutral-800"
                      }`}
                      style={{
                        height: isPlaying ? `${Math.max(20, (height * (i % 2 === 0 ? 1 : 0.7)))}%` : "20%",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Sample Selector Buttons */}
              <div className="grid grid-cols-3 gap-2">
                {VOCAB_SAMPLES.map((item) => (
                  <button
                    key={item.yoruba}
                    onClick={() => handlePlayTone(item)}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      activeItem.yoruba === item.yoruba
                        ? "border-cyan-500/40 bg-cyan-500/10 text-white"
                        : "border-neutral-800/80 bg-neutral-900/30 text-neutral-400 hover:text-white hover:border-neutral-700"
                    }`}
                  >
                    <div className="text-xs font-bold truncate">{item.yoruba}</div>
                    <div className="text-[10px] text-neutral-500 truncate">{item.english}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Telemetry & Platform Features */}
            <div className="md:col-span-5 space-y-3">
              <div className="p-3.5 rounded-xl border border-neutral-800/80 bg-neutral-900/40">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs font-semibold text-white">LiveKit WebRTC Classrooms</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Sub-50ms peer-to-cloud audio and video routing for global diaspora cohorts across North America, Europe, and Nigeria.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-neutral-800/80 bg-neutral-900/40">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs font-semibold text-white">Intelligent Dialect Models</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Multimodal conversational assistant powered by Gemini ADK providing automated phonation guidance and vocabulary retention.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-neutral-800/80 bg-neutral-900/40">
                <div className="flex items-center gap-2 mb-1">
                  <Server className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs font-semibold text-white">GCP Cloud Run Infrastructure</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Stateless auto-scaling micro-modular FastAPI backend with Cloud SQL PostgreSQL and Redis Memorystore event routing.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Architecture View */
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/70">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Backend</div>
                <div className="text-sm font-bold text-white mb-1">FastAPI Monolith</div>
                <div className="text-xs text-neutral-400">Micro-modular endpoints on Google Cloud Run with automatic horizontal scaling.</div>
              </div>
              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/70">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">Media Core</div>
                <div className="text-sm font-bold text-white mb-1">LiveKit WebRTC</div>
                <div className="text-xs text-neutral-400">Dedicated room orchestration for real-time video, audio, and interactive whiteboards.</div>
              </div>
              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/70">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">Frontend</div>
                <div className="text-sm font-bold text-white mb-1">Flutter Multiplatform</div>
                <div className="text-xs text-neutral-400">Single unified codebase deployed across iOS, Android, and modern Web browsers.</div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Full-lifecycle technical delivery by Takjug Technologies: architecture, cloud deployment, and client engineering.</span>
              </div>
              <Badge variant="cyan" className="text-[10px]">Active Partner</Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

