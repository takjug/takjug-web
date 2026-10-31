declare module "lucide-react" {
  import * as React from "react";
  export type LucideProps = React.SVGProps<SVGSVGElement> & {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    className?: string;
  };
  export type LucideIcon = React.FC<LucideProps>;

  export const ArrowLeft: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const Shield: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const Lock: LucideIcon;
  export const Eye: LucideIcon;
  export const EyeOff: LucideIcon;
  export const Camera: LucideIcon;
  export const Cpu: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Globe: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Layers: LucideIcon;
  export const HeartHandshake: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const Send: LucideIcon;
  export const Radio: LucideIcon;
  export const Gamepad2: LucideIcon;
  export const Droplet: LucideIcon;
  export const Flame: LucideIcon;
  export const Terminal: LucideIcon;
  export const Activity: LucideIcon;
  export const Award: LucideIcon;
  export const RefreshCw: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const BookOpen: LucideIcon;
  export const GraduationCap: LucideIcon;
  export const Code2: LucideIcon;
  export const Server: LucideIcon;
  export const Users: LucideIcon;
  export const Video: LucideIcon;
  export const Play: LucideIcon;
  export const Volume2: LucideIcon;
  export const Mic: LucideIcon;
  export const Headphones: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const ArrowDown: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Sun: LucideIcon;
  export const Moon: LucideIcon;
  export const Gauge: LucideIcon;

  const icon: LucideIcon;
  export default icon;
}

declare module "tailwind-merge" {
  export function twMerge(...classLists: any[]): string;
}

declare module "clsx" {
  export type ClassValue = any;
  export function clsx(...inputs: any[]): string;
  export default clsx;
}
