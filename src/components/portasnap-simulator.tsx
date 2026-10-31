"use client";

import * as React from "react";
import { Camera, CheckCircle2, ShieldCheck, RefreshCw, Eye, Sparkles, AlertCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CheckItem {
  id: string;
  name: string;
  rule: string;
  status: "pass" | "evaluating" | "warn";
  value: string;
}

export default function PortaSnapSimulator() {
  const [activePreset, setActivePreset] = React.useState<"us" | "icao" | "schengen">("icao");
  const [simulatedScore, setSimulatedScore] = React.useState(98.4);
  const [isScanning, setIsScanning] = React.useState(false);

  const presets = {
    icao: { name: "ICAO Doc 9303 (Global / NIS)", size: "35 × 45 mm", headRatio: "70% - 80%" },
    us: { name: "US State Dept / Visa", size: "2 × 2 inches (51 × 51 mm)", headRatio: "50% - 69%" },
    schengen: { name: "Schengen Visa Standard", size: "35 × 45 mm", headRatio: "70% - 80%" },
  };

  const handleRetest = () => {
    setIsScanning(true);
    setTimeout(() => {
      setSimulatedScore(Number((97.5 + Math.random() * 2).toFixed(1)));
      setIsScanning(false);
    }, 600);
  };

  return (
    <Card className="border-neutral-800 bg-gradient-to-br from-[#141922] via-[#0E131A] to-[#0B0F14] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <CardHeader className="border-b border-neutral-800/80 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <CardTitle className="text-base text-white font-bold flex items-center gap-2">
                Live Biometric HUD Reticle
                <Badge variant="emerald" className="text-[10px] py-0 px-2">
                  Engine Ready
                </Badge>
              </CardTitle>
              <CardDescription>
                Simulated real-time computer vision running 100% on-device (Zero Cloud Upload)
              </CardDescription>
            </div>
          </div>

          {/* Preset Selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900 border border-neutral-800">
            {(["icao", "us", "schengen"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActivePreset(key)}
                className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-all cursor-pointer ${
                  activePreset === key
                    ? "bg-amber-500 text-black shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Simulated HUD Camera Viewport */}
          <div className="md:col-span-5 relative aspect-[3/4] max-h-[340px] mx-auto w-full max-w-[260px] rounded-2xl border-2 border-dashed border-amber-500/40 bg-neutral-950 flex flex-col items-center justify-center p-4 overflow-hidden shadow-inner group">
            {/* Corner Bracket Reticles */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-amber-400" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-amber-400" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-amber-400" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-amber-400" />

            {/* Oval Face Guide */}
            <div
              className={`w-36 h-48 rounded-[48%] border-2 transition-all duration-300 flex flex-col items-center justify-center relative ${
                isScanning
                  ? "border-cyan-400 animate-pulse bg-cyan-500/5"
                  : "border-emerald-400/80 bg-emerald-500/5"
              }`}
            >
              {/* Eye Level Line */}
              <div className="absolute top-[38%] left-2 right-2 border-b border-dashed border-cyan-400/60" />
              <span className="absolute top-[28%] text-[9px] font-mono text-cyan-400/80 uppercase tracking-widest">
                Eye Level Line
              </span>

              {/* Center crosshair */}
              <div className="w-2.5 h-2.5 border border-amber-400/80 rounded-full" />
              <div className="w-16 h-[1px] bg-amber-400/40 absolute" />
              <div className="h-16 w-[1px] bg-amber-400/40 absolute" />
            </div>

            {/* Live Scan Bar */}
            {isScanning && (
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-bounce" />
            )}

            {/* Bottom HUD Telemetry */}
            <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-[10px] font-mono text-neutral-400 bg-neutral-900/90 py-1 px-2.5 rounded-lg border border-neutral-800">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE ML
              </span>
              <span>{presets[activePreset].size}</span>
            </div>
          </div>

          {/* Validation Checklist using shadcn Badges & Cards */}
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Active Target Standard
              </span>
              <Badge variant="solar">{presets[activePreset].name}</Badge>
            </div>

            {/* Checklist Items */}
            <div className="space-y-2 font-mono text-xs">
              <div className="p-3 rounded-xl border border-neutral-800/80 bg-neutral-900/40 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-white font-medium">Head-to-Height Ratio</div>
                    <div className="text-[11px] text-neutral-500">
                      Standard: {presets[activePreset].headRatio}
                    </div>
                  </div>
                </div>
                <Badge variant="emerald">58.4% PASS</Badge>
              </div>

              <div className="p-3 rounded-xl border border-neutral-800/80 bg-neutral-900/40 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-white font-medium">Bilateral Shadow Balance</div>
                    <div className="text-[11px] text-neutral-500">Threshold: &lt; 20% facial asymmetry</div>
                  </div>
                </div>
                <Badge variant="emerald">11.2% PASS</Badge>
              </div>

              <div className="p-3 rounded-xl border border-neutral-800/80 bg-neutral-900/40 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-white font-medium">Neutral Facial Expression</div>
                    <div className="text-[11px] text-neutral-500">Smile probability &lt; 0.15</div>
                  </div>
                </div>
                <Badge variant="emerald">0.04 PASS</Badge>
              </div>

              <div className="p-3 rounded-xl border border-neutral-800/80 bg-neutral-900/40 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-white font-medium">Print Density & DPI</div>
                    <div className="text-[11px] text-neutral-500">Required: 300 DPI lossless</div>
                  </div>
                </div>
                <Badge variant="cyber">600 DPI OK</Badge>
              </div>
            </div>

            {/* Overall Compliance Rating */}
            <div className="pt-2 flex items-center justify-between border-t border-neutral-800/80">
              <div>
                <span className="text-xs text-neutral-400">Overall ICAO Confidence:</span>
                <span className="ml-2 font-bold font-mono text-emerald-400 text-sm">
                  {simulatedScore}%
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRetest}
                disabled={isScanning}
                className="text-xs gap-1.5 h-8"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? "animate-spin" : ""}`} />
                {isScanning ? "Analyzing..." : "Re-Scan Frame"}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="bg-[#0B0F14]/70 border-t border-neutral-800/80 px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Local Google ML Kit Vision • No cloud dependencies • Zero latency</span>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="font-mono text-[10px]">
            NDPR Compliant
          </Badge>
          <Badge variant="outline" className="font-mono text-[10px]">
            GDPR Compliant
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
}

