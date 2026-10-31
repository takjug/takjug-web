"use client";

import * as React from "react";
import { Copy, Check, X, ArrowUpRight, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export function ContactModal({
  isOpen,
  onClose,
  defaultSubject = "Inquiry: Takjug Technologies",
}: ContactModalProps) {
  const [copied, setCopied] = React.useState(false);
  const [formSent, setFormSent] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const resetForm = React.useCallback(() => {
    setFormSent(false);
    setIsSubmitting(false);
    setErrorMessage(null);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    });
  }, []);

  const handleClose = React.useCallback(() => {
    onClose();
    // Delay slightly for exit animation before resetting
    setTimeout(resetForm, 250);
  }, [onClose, resetForm]);

  // Reset form whenever modal closes
  React.useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  // Handle escape key to dismiss
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const email = "dev@takjug.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    defaultSubject
  )}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(
    defaultSubject
  )}`;
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(defaultSubject)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to dispatch transmission.");
      }

      setFormSent(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please try direct email.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Blurred Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-neutral-950/60 dark:bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 transition-all animate-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-5 border-b border-neutral-200 dark:border-neutral-800 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-neutral-950 dark:text-white">Communication Protocol</span>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close dialog"
            className="p-1 rounded-md text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Primary Email Dispatch Box */}
        <div className="mb-6">
          <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
            Direct Transmission Address
          </label>

          <div className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60">
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-neutral-500" />
              <span className="font-mono text-sm sm:text-base font-bold text-neutral-950 dark:text-white tracking-wide">
                {email}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                copied
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-500"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Email
                </>
              )}
            </button>
          </div>

          {/* Direct Webmail Launchers */}
          <div className="grid grid-cols-3 gap-2 mt-2.5">
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-[11px] font-mono text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <span>Open in Gmail</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>

            <a
              href={outlookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-[11px] font-mono text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <span>Outlook Web</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>

            <a
              href={mailtoUrl}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-[11px] font-mono text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <span>Default App</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-200 dark:border-neutral-800" />
          </div>
          <span className="relative px-3 bg-white dark:bg-neutral-950 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
            or send brief directly
          </span>
        </div>

        {/* Direct Transmission Form */}
        {formSent ? (
          <div className="p-5 rounded-xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 text-center space-y-2 animate-in fade-in">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
            <h4 className="text-sm font-bold text-neutral-950 dark:text-white font-mono">
              Transmission Logged
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm mx-auto">
              Thank you. Your message has been received by the Takjug engineering desk. We will review and reply within 24 hours.
            </p>
            <div className="flex items-center justify-center gap-2 pt-2">
              <Button
                type="button"
                size="sm"
                onClick={resetForm}
                variant="outline"
                className="text-xs font-mono rounded-full border-neutral-300 dark:border-neutral-700 h-8 px-3.5 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Send Another Brief
              </Button>
              <Button
                type="button"
                size="sm"
                onClick={handleClose}
                className="text-xs font-mono rounded-full bg-neutral-950 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 h-8 px-4"
              >
                Close Window
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {errorMessage && (
              <div className="flex items-center gap-2 p-2.5 rounded-lg border border-red-500/20 bg-red-50/50 dark:bg-red-950/20 text-red-700 dark:text-red-400 text-xs font-mono">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* First & Last Name (Required by Zoho Webform) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full text-xs font-mono px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-hidden focus:border-neutral-950 dark:focus:border-white transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full text-xs font-mono px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-hidden focus:border-neutral-950 dark:focus:border-white transition-colors disabled:opacity-50"
                />
              </div>
            </div>

            {/* Email & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="your.email@domain.com *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs font-mono px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-hidden focus:border-neutral-950 dark:focus:border-white transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <input
                  type="text"
                  disabled={isSubmitting}
                  placeholder="Company / Organization"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full text-xs font-mono px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-hidden focus:border-neutral-950 dark:focus:border-white transition-colors disabled:opacity-50"
                />
              </div>
            </div>

            <div>
              <textarea
                required
                rows={3}
                disabled={isSubmitting}
                placeholder="Tell us about your venture, engineering challenge, or partnership scope *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-xs font-mono px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-hidden focus:border-neutral-950 dark:focus:border-white transition-colors resize-none disabled:opacity-50"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-mono text-xs font-semibold h-9 shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  <span>Dispatching Transmission...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" /> Dispatch Inquiry
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

