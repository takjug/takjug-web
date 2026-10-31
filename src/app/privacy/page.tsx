"use client";

import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, Lock, ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CorporatePrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#070A0F] text-neutral-900 dark:text-neutral-200 py-16 px-6 font-sans transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-8">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Takjug Technologies
            </Link>
          </Button>

          <Badge variant="outline" className="font-mono text-[10px] border-neutral-300 dark:border-neutral-700">
            Legal &amp; Data Protection Portal
          </Badge>
        </div>

        <Card className="border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0D121C] p-4 sm:p-8 shadow-sm dark:shadow-2xl">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <Badge variant="outline" className="font-mono text-[10px] border-neutral-300 dark:border-neutral-700">
                <Shield className="w-3.5 h-3.5 mr-1 text-emerald-600 dark:text-emerald-400" /> Corporate Privacy Policy
              </Badge>
              <Badge variant="outline" className="font-mono text-[10px] border-neutral-300 dark:border-neutral-700">
                NDPA 2023 &amp; GDPR Compliant
              </Badge>
              <Badge variant="outline" className="font-mono text-[10px] border-neutral-300 dark:border-neutral-700">
                Zero Tracker Policy
              </Badge>
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              Takjug Technologies Privacy Policy
            </CardTitle>
            <CardDescription className="text-neutral-500 dark:text-neutral-400 text-xs">
              Corporate &amp; Web Platform Policy • Last updated: October 2026 • Published by Takjug Technologies
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed pt-2">
            {/* Core Privacy Philosophy */}
            <div className="p-5 rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/50">
              <h3 className="text-neutral-950 dark:text-white font-bold text-base flex items-center gap-2 mb-2 font-mono">
                <Lock className="w-4 h-4 text-neutral-800 dark:text-neutral-200" /> Mandate: Sovereignty by Design
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-xs leading-relaxed">
                At Takjug Technologies, we design systems that reduce anxiety and respect user sovereignty. This policy governs how we collect, handle, and protect data across our primary web portal (<code className="font-mono text-[11px] bg-neutral-200 dark:bg-neutral-800 px-1 py-0.5 rounded">takjug.com</code>) and direct institutional communications. We do not monetize personal data or deploy surveillance tracking.
              </p>
            </div>

            {/* Product Specific Policies Link Box */}
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="text-xs font-mono font-bold text-neutral-950 dark:text-white flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span>Looking for Product-Specific Policies?</span>
                </div>
                <div className="text-[11px] text-neutral-500">
                  Mobile applications like PortaSnap have distinct on-device hardware and app store certified policies.
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="font-mono text-xs rounded-lg shrink-0 border-neutral-300 dark:border-neutral-700"
              >
                <Link href="/privacy/portasnap">
                  PortaSnap App Policy <ArrowUpRight className="w-3 h-3 ml-1" />
                </Link>
              </Button>
            </div>

            <Separator className="bg-neutral-200 dark:bg-neutral-800" />

            {/* Section 1: Data We Collect */}
            <section>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-3">
                1. Information We Collect on This Platform
              </h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-3">
                We collect personal information exclusively when you voluntarily transmit it to our engineering desk via our Communication Protocol form:
              </p>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Identity &amp; Contact Records:</strong> First Name, Last Name, and Work/Personal Email Address.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Organization &amp; Venture Scope:</strong> Company Name and Project/Inquiry Brief details provided in your transmission.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Zero Surveillance Telemetry:</strong> We do not use third-party advertising cookies, cross-domain behavioral trackers, or fingerprinting scripts on this website.
                  </div>
                </li>
              </ul>
            </section>

            <Separator className="bg-neutral-200 dark:bg-neutral-800" />

            {/* Section 2: Purpose & Legal Basis */}
            <section>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-3">
                2. Legal Basis and Purpose of Processing
              </h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
                Under the <strong>Nigeria Data Protection Act (NDPA 2023)</strong> and the <strong>EU General Data Protection Regulation (GDPR Article 6)</strong>, we process your information on the following legal grounds:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40">
                  <strong className="block text-neutral-950 dark:text-white font-mono mb-1">Contract Scoping &amp; Inquiries</strong>
                  <span className="text-neutral-600 dark:text-neutral-400 text-[11px] leading-relaxed">
                    Processing technical inquiries, venture partnership scopes, and scheduling engineering discovery discussions requested by you.
                  </span>
                </div>
                <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40">
                  <strong className="block text-neutral-950 dark:text-white font-mono mb-1">Legitimate Commercial Interest</strong>
                  <span className="text-neutral-600 dark:text-neutral-400 text-[11px] leading-relaxed">
                    Maintaining an operational record of venture dialogues, verifying enterprise identity, and preventing automated spam or abuse.
                  </span>
                </div>
              </div>
            </section>

            <Separator className="bg-neutral-200 dark:bg-neutral-800" />

            {/* Section 3: Data Security & Enterprise Infrastructure */}
            <section>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-3">
                3. Enterprise Infrastructure &amp; Confidentiality
              </h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
                Transmissions from our web portal are encrypted using TLS 1.3 protocol and processed directly by our backend services into our dedicated enterprise CRM system (Zoho CRM). 
              </p>
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-mono text-neutral-950 dark:text-white font-bold">
                  <Lock className="w-3.5 h-3.5 text-neutral-500" /> Strict Non-Disclosure Principle
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[11px]">
                  All technical descriptions, venture blueprints, and partnership discussions communicated to Takjug Technologies are treated as strictly confidential business intellectual property. We never sell, rent, or trade your inquiry information to external marketing brokers or third parties.
                </p>
              </div>
            </section>

            <Separator className="bg-neutral-200 dark:bg-neutral-800" />

            {/* Section 4: Data Subject Rights */}
            <section>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-3">
                4. Your Statutory Data Protection Rights
              </h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
                Regardless of your geographic location, Takjug Technologies accords all users full statutory data subject rights:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <li className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-300">
                  • Right to Access &amp; Portability
                </li>
                <li className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-300">
                  • Right to Rectification
                </li>
                <li className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-300">
                  • Right to Erasure (&quot;Right to be Forgotten&quot;)
                </li>
                <li className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-300">
                  • Right to Withdraw Consent
                </li>
              </ul>
            </section>

            <Separator className="bg-neutral-200 dark:bg-neutral-800" />

            {/* Section 5: Legal Entity & Contact */}
            <section>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-3">
                5. Data Controller &amp; Inquiries
              </h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
                To exercise any of your data protection rights or submit questions regarding Takjug&apos;s privacy governance, please contact our data desk:
              </p>
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-[#070A0F] text-xs font-mono space-y-1.5 text-neutral-700 dark:text-neutral-300">
                <div>Entity: Takjug Technologies</div>
                <div>Website: https://takjug.com</div>
                <div>Data Protection &amp; Engineering: dev@takjug.com</div>
                <div>User Support: support@takjug.com</div>
                <div>Primary Jurisdiction: Federal Republic of Nigeria</div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
