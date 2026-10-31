import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/70">
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
          <a href="#work" className="hover:text-white transition-colors">
            Selected Work
          </a>
          <a href="#capabilities" className="hover:text-white transition-colors">
            Capabilities
          </a>
          <a href="#philosophy" className="hover:text-white transition-colors">
            Philosophy
          </a>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
        </nav>

        {/* Action Button via shadcn Button */}
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <a href="mailto:dev@takjug.com">
              dev@takjug.com <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </Button>

          <Button asChild variant="solar" size="sm">
            <a href="#contact">Let&apos;s Talk</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
