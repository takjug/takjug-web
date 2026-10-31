import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "solar" | "cyber" | "cyan" | "emerald";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantClasses = {
    default: "border-transparent bg-white text-black hover:bg-neutral-200",
    secondary: "border-transparent bg-neutral-800 text-neutral-300 hover:bg-neutral-700",
    destructive: "border-transparent bg-red-900/60 text-red-300 border-red-500/30",
    outline: "text-neutral-300 border-neutral-700",
    solar: "border-amber-500/30 bg-amber-500/10 text-amber-400 font-semibold tracking-wider uppercase",
    cyber: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-semibold tracking-wider uppercase",
    cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-semibold tracking-wider uppercase",
    emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-semibold tracking-wider uppercase",
  }[variant];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2",
        variantClasses,
        className
      )}
      {...props}
    />
  );
}

export { Badge };

