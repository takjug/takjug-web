import Link from "next/link";
import { ArrowUpRight, Cpu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-neutral-950/70 border-b border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-all">
            <span className="font-extrabold text-black text-lg tracking-wider">T</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-base tracking-tight group-hover:text-amber-400 transition-colors">
              TAKJUG
            </span>
            <span className="text-neutral-500 text-[10px] uppercase font-mono tracking-wider -mt-1">
              TECHNOLOGIES
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
          <a href="#ventures" className="hover:text-white transition-colors">
            Ventures
          </a>
          <a href="#mandate" className="hover:text-white transition-colors">
            Philosophy
          </a>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:dev@takjug.com"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 text-neutral-200 hover:text-white text-xs font-semibold transition-all"
          >
            dev@takjug.com <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>
      </div>
    </header>
  );
}

