import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Static export for GitHub Pages serves the site from /<repo>/; prefix the
// absolute metadata URLs accordingly (basePath does not apply to them).
const basePath =
  process.env.NEXT_OUTPUT === "export" ? "/animabooter-website" : "";

export const metadata: Metadata = {
  title: "AnimaBooter — Flash USB drives with soul",
  description:
    "A tiny, honest, open-source, cross-platform USB image flasher: parallel 3-stage flash pipeline with free verification hashing. Rust + Tauri 2 + Svelte 5. 100% local — no telemetry, no cloud.",
  keywords: [
    "AnimaBooter",
    "USB flasher",
    "disk imager",
    "bootable USB",
    "Rust",
    "Tauri",
    "Svelte",
    "open source",
  ],
  authors: [{ name: "marrionesa" }],
  icons: {
    icon: `${basePath}/icon.png`,
  },
  openGraph: {
    title: "AnimaBooter — Flash USB drives with soul",
    description:
      "Open-source cross-platform USB image flasher with a parallel 3-stage pipeline and free verification hashing.",
    url: `https://marrionesa.github.io${basePath}/`,
    siteName: "AnimaBooter",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AnimaBooter — Flash USB drives with soul",
    description:
      "Open-source cross-platform USB image flasher. Rust + Tauri 2 + Svelte 5. 100% local, no telemetry.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
