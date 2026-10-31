"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion provider");
  }
  return context;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
}

export function Accordion({
  type = "single",
  defaultValue,
  className,
  children,
  ...props
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const toggleItem = (val: string) => {
    setOpenItems((prev) => {
      if (type === "single") {
        return prev.includes(val) ? [] : [val];
      } else {
        return prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val];
      }
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn("space-y-3", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemContextValue {
  value: string;
}

const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(null);

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function AccordionItem({ value, className, children, ...props }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div
        className={cn(
          "rounded-2xl border border-neutral-800 bg-[#141922]/60 overflow-hidden transition-all",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { openItems, toggleItem } = useAccordion();
  const itemContext = React.useContext(AccordionItemContext);
  if (!itemContext) throw new Error("AccordionTrigger must be inside AccordionItem");

  const isOpen = openItems.includes(itemContext.value);

  return (
    <button
      type="button"
      onClick={() => toggleItem(itemContext.value)}
      className={cn(
        "flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-white transition-all hover:text-amber-400 cursor-pointer",
        isOpen && "text-amber-400",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200",
          isOpen && "rotate-180 text-amber-400"
        )}
      />
    </button>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { openItems } = useAccordion();
  const itemContext = React.useContext(AccordionItemContext);
  if (!itemContext) throw new Error("AccordionContent must be inside AccordionItem");

  const isOpen = openItems.includes(itemContext.value);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "px-5 pb-5 pt-0 text-xs text-neutral-400 leading-relaxed border-t border-neutral-800/50 mt-1",
        className
      )}
      {...props}
    >
      <div className="pt-3">{children}</div>
    </div>
  );
}
