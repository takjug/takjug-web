import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, Lock, EyeOff } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-neutral-200 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 uppercase tracking-wider mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Takjug Technologies
        </Link>

        <div className="border border-neutral-800 rounded-3xl bg-[#141922] p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-amber-400 mb-4">
            <Shield className="w-8 h-8" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Takjug Legal Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
            Privacy Policy for PortaSnap
          </h1>
          <p className="text-neutral-400 text-xs mb-8">
            Last updated: October 2026 • Published by Takjug Technologies
          </p>

          <div className="space-y-8 text-sm text-neutral-300 leading-relaxed">
            {/* Core Privacy Promise */}
            <div className="p-5 rounded-2xl border border-amber-500/30 bg-amber-500/5">
              <h3 className="text-white font-bold text-base flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-amber-400" /> Our Core Privacy Commitment: 100% On-Device Processing
              </h3>
              <p className="text-neutral-300 text-xs leading-relaxed">
                PortaSnap was engineered with privacy as a foundational constraint. <strong>We do not upload, transmit, store, or process your photos or facial biometric data on any external servers or cloud services.</strong> All biometric validation, computer vision algorithms, and lighting adjustments execute 100% locally on your smartphone hardware.
              </p>
            </div>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">1. Information We Access and How It Is Used</h2>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Camera Access:</strong> Used solely in real-time to display the camera feed and capture your passport/visa photo. No image frames are saved or streamed until you press the capture button.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Facial Biometrics & Landmark Analysis:</strong> Powered by Google ML Kit Face Detection operating on-device. The software calculates mathematical face ratios (eye distance, head-to-chin proportion, tilt) to ensure ICAO 9303 compliance. These mathematical vectors are temporary in memory and discarded immediately after processing.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Device Storage Access:</strong> Only accessed when you explicitly choose to export and save your approved passport photo or printable sheet to your phone's photo gallery.
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">2. Third-Party Advertising (Google AdMob)</h2>
              <p className="text-xs text-neutral-300 mb-3">
                PortaSnap utilizes Google AdMob to display rewarded video advertisements, allowing users to export certified high-resolution passport photos completely free without paid subscriptions.
              </p>
              <p className="text-xs text-neutral-400">
                Google AdMob may collect and process device identifiers, non-personally identifiable diagnostic data, and approximate location data to serve relevant ads in accordance with Google's Advertising Privacy Policy. <strong>AdMob never has access to your photos, camera feed, or facial biometrics.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">3. International Data Protection Compliance</h2>
              <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                PortaSnap complies with the <strong>Nigeria Data Protection Regulation (NDPR)</strong>, the <strong>General Data Protection Regulation (GDPR)</strong>, and the <strong>California Consumer Privacy Act (CCPA)</strong>. Because we do not collect personal biometric data on remote servers, your identity remains completely under your personal control.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">4. Contact Information</h2>
              <p className="text-xs text-neutral-300 leading-relaxed">
                If you have any questions or inquiries regarding this Privacy Policy or data protection practices at Takjug Technologies, please contact our legal and engineering team:
              </p>
              <div className="mt-3 p-4 rounded-xl border border-neutral-800 bg-[#0B0F14] text-xs font-mono space-y-1">
                <div>Entity: Takjug Technologies</div>
                <div>Website: https://takjug.com</div>
                <div>Developer Inquiries: dev@takjug.com</div>
                <div>User Support: support@takjug.com</div>
                <div>Jurisdiction: Federal Republic of Nigeria</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

