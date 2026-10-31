"use client";

import * as React from "react";
import { Mail, MapPin, Globe, CheckCircle2, Send, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="solar" className="mb-3">
          <Sparkles className="w-3.5 h-3.5 mr-1" /> Direct Communication
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Initiate a Partnership or Inquiry
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          Whether you are an enterprise partner seeking venture architecture, an investor interested in our on-device R&D labs, or an immigration applicant with questions about PortaSnap.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Information Cards */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="border-neutral-800 bg-[#141922]/80">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-white">Direct Executive & Engineering Inboxes</CardTitle>
              <CardDescription>Primary communication channels monitored daily by the founding team.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-0 text-xs">
              <a
                href="mailto:dev@takjug.com"
                className="p-3 rounded-xl border border-neutral-800 bg-neutral-900/60 flex items-center justify-between hover:border-amber-500/40 hover:bg-neutral-900 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                      dev@takjug.com
                    </div>
                    <div className="text-neutral-500 text-[11px]">Engineering, Architecture & API Inquiries</div>
                  </div>
                </div>
                <Badge variant="outline" className="text-[10px]">
                  Technical
                </Badge>
              </a>

              <a
                href="mailto:support@takjug.com"
                className="p-3 rounded-xl border border-neutral-800 bg-neutral-900/60 flex items-center justify-between hover:border-cyan-500/40 hover:bg-neutral-900 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      support@takjug.com
                    </div>
                    <div className="text-neutral-500 text-[11px]">PortaSnap Consumer & Passport Assistance</div>
                  </div>
                </div>
                <Badge variant="outline" className="text-[10px]">
                  Support
                </Badge>
              </a>

              <a
                href="mailto:emeka.okafor@takjug.com"
                className="p-3 rounded-xl border border-neutral-800 bg-neutral-900/60 flex items-center justify-between hover:border-amber-500/40 hover:bg-neutral-900 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      emeka.okafor@takjug.com
                    </div>
                    <div className="text-neutral-500 text-[11px]">Founder & Principal Architect</div>
                  </div>
                </div>
                <Badge variant="outline" className="text-[10px]">
                  Executive
                </Badge>
              </a>
            </CardContent>
          </Card>

          <Card className="border-neutral-800 bg-[#141922]/80">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-white">Registered Corporate Entity</CardTitle>
              <CardDescription>Legal compliance and physical presence.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Incorporated under the Corporate Affairs Commission (CAC), Federal Republic of Nigeria.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Primary Organization Domain: <strong>takjug.com</strong> (D-U-N-S Verified Entity Filing).</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7">
          <Card className="border-neutral-800 bg-gradient-to-br from-[#141922] via-[#0E131A] to-[#0B0F14] shadow-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-white">Transmit an Inquiry</CardTitle>
              <CardDescription>
                Leave your brief below. Our technical leadership responds within 24 business hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Transmitted</h4>
                  <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Takjug Technologies. Your inquiry has been routed to our founding engineers. We will follow up shortly at your email address.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="mt-4"
                  >
                    Send Another Transmission
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                        Full Name / Organization
                      </label>
                      <Input placeholder="e.g. Dr. Ngozi / Sovereign Capital" required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                        Contact Email
                      </label>
                      <Input type="email" placeholder="partner@enterprise.com" required />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                      Subject / Venture Area
                    </label>
                    <Input placeholder="e.g. PortaSnap Licensing / Venture Architecture Partnership" required />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                      Transmission Brief
                    </label>
                    <Textarea
                      placeholder="Outline your venture requirements, technical integration specs, or proposal..."
                      required
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-neutral-500">
                      Zero tracker cookies. Protected by NDPR standards.
                    </p>
                    <Button type="submit" variant="solar" disabled={loading} className="gap-2">
                      <Send className="w-4 h-4" />
                      {loading ? "Transmitting..." : "Send Transmission"}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

