import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "solar" | "cyber";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const variantClasses = {
      default: "bg-white text-black hover:bg-neutral-200 shadow-sm",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      outline: "border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-200 hover:text-white",
      secondary: "bg-neutral-800 text-neutral-200 hover:bg-neutral-700",
      ghost: "hover:bg-neutral-800/60 text-neutral-300 hover:text-white",
      link: "text-amber-400 underline-offset-4 hover:underline",
      solar: "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-black font-semibold shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98]",
      cyber: "border border-cyan-500/40 bg-cyan-950/30 text-cyan-400 hover:bg-cyan-900/40 hover:border-cyan-400 font-semibold shadow-lg shadow-cyan-500/10",
    }[variant];

    const sizeClasses = {
      default: "h-11 px-5 py-2 text-sm",
      sm: "h-9 px-3.5 text-xs",
      lg: "h-12 px-8 text-base",
      icon: "h-10 w-10",
    }[size];

    const combinedClassName = cn(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
      variantClasses,
      sizeClasses,
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(combinedClassName, (children.props as { className?: string }).className),
        ...props,
      });
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
