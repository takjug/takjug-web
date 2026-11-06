"use client";

import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle, ExternalLink, Scale } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function PortaSnapTermsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#070A0F] text-neutral-900 dark:text-neutral-200 py-16 px-6 font-sans transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
          >
            <Link href="/#deployments">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Deployments
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white text-xs font-mono"
          >
            <Link href="/privacy/portasnap">
              PortaSnap Privacy Policy <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
          </Button>
        </div>

        <Card className="border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0D121C] p-4 sm:p-8 shadow-sm dark:shadow-2xl">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <Badge variant="outline" className="font-mono text-[10px] border-neutral-300 dark:border-neutral-700">
                <FileText className="w-3.5 h-3.5 mr-1 text-emerald-600 dark:text-emerald-400" /> End User Agreement
              </Badge>
              <Badge variant="outline" className="font-mono text-[10px] border-neutral-300 dark:border-neutral-700">
                Google Play Store Certified
              </Badge>
              <Badge variant="outline" className="font-mono text-[10px] border-neutral-300 dark:border-neutral-700">
                EU Digital Services Act Compliant
              </Badge>
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              Terms of Service for PortaSnap
            </CardTitle>
            <CardDescription className="text-neutral-500 dark:text-neutral-400 text-xs">
              Product-Specific Terms of Use • Last updated: November 2026 • Published by TAKJUG TECHNOLOGIES GLOBAL LTD
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed pt-2">
            {/* Core Agreement */}
            <div className="p-5 rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/50">
              <h3 className="text-neutral-950 dark:text-white font-bold text-base flex items-center gap-2 mb-2">
                <Scale className="w-5 h-5 text-neutral-800 dark:text-neutral-200" /> 1. Agreement to Terms
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-xs leading-relaxed">
                By downloading, accessing, or using <strong>PortaSnap</strong> (&quot;the Application&quot;), you agree to be bound by these Terms of Service between yourself and <strong>TAKJUG TECHNOLOGIES GLOBAL LTD</strong> (&quot;Takjug&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). If you do not agree to these terms, do not install or use the Application.
              </p>
            </div>

            <Separator className="bg-neutral-200 dark:bg-neutral-800" />

            <section>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-3">2. Description of Service &amp; On-Device Operation</h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-3">
                PortaSnap provides mobile document and passport photo formatting tools utilizing on-device computer vision and machine learning (ICAO Doc 9303 alignment, background replacement, and dimensional cropping).
              </p>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Zero-Cloud Guarantee:</strong> All biometric processing, image cropping, and adjustments occur 100% locally on your device hardware without transferring image bytes to remote servers.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Export &amp; Storage:</strong> Exported photographs are saved exclusively to your smartphone&apos;s local storage gallery under your sole control.
                  </div>
                </li>
              </ul>
            </section>

            <Separator className="bg-neutral-200 dark:bg-neutral-800" />

            <section>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-3">3. Disclaimer of Government Endorsement &amp; Acceptance</h2>
              <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-500/10 text-xs space-y-2 text-neutral-800 dark:text-neutral-200">
                <p>
                  <strong>Important Notice:</strong> PortaSnap is an independent technical utility developed by Takjug Technologies and is <strong>not affiliated with, endorsed by, or representing any government, passport office, or immigration agency</strong>.
                </p>
                <p>
                  While PortaSnap provides alignment templates engineered to comply with ICAO Doc 9303 and international passport/visa guidelines, <strong>final acceptance of any physical or digital photo remains the sole prerogative of the reviewing government authority or consulate</strong>. Takjug Technologies assumes no liability for application rejections or printing discrepancies.
                </p>
              </div>
            </section>

            <Separator className="bg-neutral-200 dark:bg-neutral-800" />

            <section>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-3">4. Intellectual Property</h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                All source code, software architectures, algorithms, visual marks, trademarks, and user interfaces within PortaSnap are the exclusive intellectual property of TAKJUG TECHNOLOGIES GLOBAL LTD. You are granted a personal, revocable, non-exclusive, non-transferable license to use the app for personal or authorized business use.
              </p>
            </section>

            <Separator className="bg-neutral-200 dark:bg-neutral-800" />

            <section>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-3">5. Advertising &amp; Monetization</h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                PortaSnap is offered as a free-to-use utility supported by Google AdMob rewarded advertising. By using the app, you agree to the display of occasional sponsor ads when exporting photo sheets. Users may opt out of personalized tracking via device-level Android settings.
              </p>
            </section>

            <Separator className="bg-neutral-200 dark:bg-neutral-800" />

            <section>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-3">6. Governing Law &amp; Jurisdiction</h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to conflict of law principles. Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts in Lagos State, Nigeria.
              </p>
            </section>

            <Separator className="bg-neutral-200 dark:bg-neutral-800" />

            <section>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-3">7. Corporate Contact Information</h2>
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-[#070A0F] text-xs font-mono space-y-1.5 text-neutral-700 dark:text-neutral-300">
                <div>Entity: TAKJUG TECHNOLOGIES GLOBAL LTD</div>
                <div>Registration Number: RC 9950672</div>
                <div>Registered Address: 23, Doctor Friday Residence, Ikorodu, Lagos State, Nigeria</div>
                <div>Corporate Portal: https://takjug.com</div>
                <div>Legal &amp; Developer Inquiries: dev@takjug.com</div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

