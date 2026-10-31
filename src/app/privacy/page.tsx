"use client";

import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, Lock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#070A0F] text-neutral-900 dark:text-neutral-200 py-16 px-6 font-sans transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
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
        </div>

        <Card className="border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0D121C] p-4 sm:p-8 shadow-sm dark:shadow-2xl">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="outline" className="font-mono text-[10px] border-neutral-300 dark:border-neutral-700">
                <Shield className="w-3.5 h-3.5 mr-1 text-emerald-600 dark:text-emerald-400" /> Legal Compliance
              </Badge>
              <Badge variant="outline" className="font-mono text-[10px] border-neutral-300 dark:border-neutral-700">
                NDPR &amp; GDPR Validated
              </Badge>
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              Privacy Policy for PortaSnap
            </CardTitle>
            <CardDescription className="text-neutral-500 dark:text-neutral-400 text-xs">
              Last updated: October 2026 • Published by Takjug Technologies
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed pt-2">
            {/* Core Privacy Promise */}
            <div className="p-5 rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/50">
              <h3 className="text-neutral-950 dark:text-white font-bold text-base flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-neutral-800 dark:text-neutral-200" /> Our Core Privacy Commitment: 100% On-Device Processing
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-xs leading-relaxed">
                PortaSnap was engineered with privacy as a foundational constraint. <strong>We do not upload, transmit, store, or process your photos or facial biometric data on any external servers or cloud services.</strong> All biometric validation, computer vision algorithms, and lighting adjustments execute 100% locally on your smartphone hardware.
              </p>
            </div>

            <Separator className="bg-neutral-200 dark:bg-neutral-800" />

            <section>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-3">1. Information We Access and How It Is Used</h2>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Camera Access:</strong> Used solely in real-time to display the camera feed and capture your passport/visa photo. No image frames are saved or streamed until you press the capture button.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Facial Biometrics &amp; Landmark Analysis:</strong> Powered by Google ML Kit Face Detection operating on-device. The software calculates mathematical face ratios (eye distance, head-to-chin proportion, tilt) to ensure ICAO 9303 compliance. These mathematical vectors are temporary in memory and discarded immediately after processing.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Device Storage Access:</strong> Only accessed when you explicitly choose to export and save your approved passport photo or printable sheet to your phone&apos;s photo gallery.
                  </div>
                </li>
              </ul>
            </section>

            <Separator className="bg-neutral-200 dark:bg-neutral-800" />

            <section>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-3">2. Third-Party Advertising (Google AdMob)</h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-3">
                PortaSnap utilizes Google AdMob to display rewarded video advertisements, allowing users to export certified high-resolution passport photos completely free without paid subscriptions.
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Google AdMob may collect and process device identifiers, non-personally identifiable diagnostic data, and approximate location data to serve relevant ads in accordance with Google&apos;s Advertising Privacy Policy. <strong>AdMob never has access to your photos, camera feed, or facial biometrics.</strong>
              </p>
            </section>

            <Separator className="bg-neutral-200 dark:bg-neutral-800" />

            <section>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-3">3. International Data Protection Compliance</h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                PortaSnap complies with the <strong>Nigeria Data Protection Regulation (NDPR)</strong>, the <strong>General Data Protection Regulation (GDPR)</strong>, and the <strong>California Consumer Privacy Act (CCPA)</strong>. Because we do not collect personal biometric data on remote servers, your identity remains completely under your personal control.
              </p>
            </section>

            <Separator className="bg-neutral-200 dark:bg-neutral-800" />

            <section>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-3">4. Contact Information</h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
                If you have any questions or inquiries regarding this Privacy Policy or data protection practices at Takjug Technologies, please contact our team:
              </p>
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-[#070A0F] text-xs font-mono space-y-1.5 text-neutral-700 dark:text-neutral-300">
                <div>Entity: Takjug Technologies</div>
                <div>Website: https://takjug.com</div>
                <div>Developer Inquiries: dev@takjug.com</div>
                <div>User Support: support@takjug.com</div>
                <div>Jurisdiction: Federal Republic of Nigeria</div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
