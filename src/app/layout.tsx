import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Takjug Technologies | Deep Tech & Frontier Digital Ventures",
  description:
    "Takjug Technologies is a frontier technology conglomerate, high-craft digital product studio, and deep-tech venture incubator engineering intelligent mobile utilities and on-device AI.",
  keywords: [
    "Takjug Technologies",
    "PortaSnap",
    "On-device AI",
    "Biometrics",
    "Venture Studio",
    "Mobile Applications",
    "Nigeria",
  ],
  authors: [{ name: "Takjug Technologies" }],
  metadataBase: new URL("https://takjug.com"),
  openGraph: {
    title: "Takjug Technologies",
    description: "Engineering precision with a human soul. Creator of PortaSnap.",
    url: "https://takjug.com",
    siteName: "Takjug Technologies",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
