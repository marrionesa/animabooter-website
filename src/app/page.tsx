import Image from "next/image"
import {
  Apple,
  AppWindow,
  BadgeCheck,
  BookOpen,
  ChevronDown,
  CircleCheck,
  CircleDashed,
  Code,
  Eye,
  Files,
  FolderTree,
  Gauge,
  HardDriveDownload,
  Hash,
  ImageDown,
  Languages,
  MonitorSmartphone,
  MoveDown,
  MoveRight,
  Palette,
  PlugZap,
  Radio,
  ShieldCheck,
  Terminal,
  WifiOff,
  Workflow,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

/* ------------------------------------------------------------------ */
/* Brand palette (hardcoded — the page is dark regardless of sandbox)  */
/* bg #0f1117 · surface #1a1d29 · surface-2 #232738 · accent #8b5cf6   */
/* success #34d399 · error #f87171 · warning #fbbf24 · text #e5e7eb    */
/* muted #9ca3af · border #2a2e3f · terminal #0b0d13                   */
/* ------------------------------------------------------------------ */

const STYLE = `
html { scroll-behavior: smooth; }
#ab-root section[id] { scroll-margin-top: 4.5rem; }
#ab-root a:focus-visible,
#ab-root summary:focus-visible,
#ab-root button:focus-visible {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
  border-radius: 8px;
}
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { scrollbar-width: none; }
@keyframes ab-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.ab-float { animation: ab-float 6s ease-in-out infinite; }
.ab-blink {
  transform-box: fill-box;
  transform-origin: center;
  animation: ab-blink 5.2s ease-in-out infinite;
}
@keyframes ab-blink {
  0%, 91%, 100% { transform: scaleY(1); }
  94%, 96% { transform: scaleY(0.1); }
}
.ab-flow { overflow: hidden; border-radius: 9999px; }
@media (min-width: 1024px) {
  .ab-flow {
    width: 5.5rem;
    height: 2px;
    background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
    background-size: 200% 100%;
    animation: ab-flow-x 1.4s linear infinite;
  }
}
@media (max-width: 1023.98px) {
  .ab-flow {
    width: 2px;
    height: 2.25rem;
    background: linear-gradient(180deg, transparent, #8b5cf6, transparent);
    background-size: 100% 200%;
    animation: ab-flow-y 1.4s linear infinite;
  }
}
@keyframes ab-flow-x {
  from { background-position: 200% 0; }
  to { background-position: -200% 0; }
}
@keyframes ab-flow-y {
  from { background-position: 0 200%; }
  to { background-position: 0 -200%; }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .ab-float, .ab-blink, .ab-flow { animation: none; }
}
`

/* ------------------------------ data ------------------------------ */

const GITHUB_REPO = "https://github.com/marrionesa/animabooter"
const RELEASE_URL = `${GITHUB_REPO}/releases/tag/v0.1.0`
const RELEASES_URL = `${GITHUB_REPO}/releases`

const NAV_LINKS = [
  { href: "#pipeline", label: "Pipeline" },
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Screenshots" },
  { href: "#download", label: "Download" },
  { href: "#compare", label: "Compare" },
  { href: "#verification", label: "Verification" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#build", label: "Build" },
]

const HERO_BADGES = ["v0.1.0", "Rust", "Tauri 2", "Svelte 5", "Tailwind v4", "MIT"]

const DOWNLOAD_BUNDLES = [
  {
    os: "Windows",
    icon: AppWindow,
    files: [
      {
        label: "NSIS installer (x64)",
        href: `${RELEASE_URL}/animabooter-windows_AnimaBooter_0.1.0_x64-setup.exe`,
      },
      {
        label: "MSI installer (x64)",
        href: `${RELEASE_URL}/animabooter-windows_AnimaBooter_0.1.0_x64_en-US.msi`,
      },
    ],
  },
  {
    os: "macOS",
    icon: Apple,
    files: [
      {
        label: "Apple Silicon (aarch64)",
        href: `${RELEASE_URL}/animabooter-macos_AnimaBooter_0.1.0_aarch64.dmg`,
      },
    ],
  },
  {
    os: "Linux",
    icon: Terminal,
    files: [
      {
        label: "AppImage (amd64)",
        href: `${RELEASE_URL}/animabooter-linux_AnimaBooter_0.1.0_amd64.AppImage`,
      },
      {
        label: ".deb (amd64)",
        href: `${RELEASE_URL}/animabooter-linux_AnimaBooter_0.1.0_amd64.deb`,
      },
      {
        label: ".rpm (x86_64)",
        href: `${RELEASE_URL}/animabooter-linux_AnimaBooter_0.1.0_x86_64.rpm`,
      },
    ],
  },
]

const SCREENSHOTS_ROW_1 = [
  {
    src: "/screenshots/01-image.png",
    alt: "Step 1 — drop a disk image on the mascot",
    title: "1 · Image — drop an .iso / .img / compressed image",
  },
  {
    src: "/screenshots/02-drive.png",
    alt: "Step 2 — choose the target drive",
    title: "2 · Drive — removable drives only, with serial + bus info",
  },
  {
    src: "/screenshots/03-confirm.png",
    alt: "Step 3 — destruction confirmation",
    title: "3 · Confirm — everything that will be destroyed, in the open",
  },
]

const SCREENSHOTS_ROW_2 = [
  {
    src: "/screenshots/04-writing.png",
    alt: "Step 4 — writing with speed, peak and ETA",
    title: "4 · Write — live speed, peak and ETA",
  },
  {
    src: "/screenshots/05-log.png",
    alt: "Step 4 — live log with every safety and pipeline step",
    title: "Live log — every destructive step announces itself first",
  },
  {
    src: "/screenshots/07-result.png",
    alt: "Flash complete — result card with stats",
    title: "Done — result card with avg/peak speed, duration, verification",
  },
]

const VERIFICATION_ROWS = [
  {
    platform: "Linux",
    ci: "fmt, clippy, tests, build",
    hardware: "verified by the author on hardware (real flash, USB boots)",
    tested: true,
  },
  {
    platform: "Windows",
    ci: "tests + bundle (MSVC)",
    hardware: "not yet hardware-tested by the author",
    tested: false,
  },
  {
    platform: "macOS",
    ci: "tests + bundle (aarch64)",
    hardware: "not yet hardware-tested by the author",
    tested: false,
  },
]

const PIPELINE_STAGES = [
  {
    step: "stage 1",
    name: "Reader",
    icon: BookOpen,
    detail: "decompress gzip / xz / zst / bz2 · blake3 + sha256 in flight",
  },
  {
    step: "stage 2",
    name: "Writer",
    icon: HardDriveDownload,
    detail: "align · write spans · emit honest progress",
  },
  {
    step: "stage 3",
    name: "Verifier",
    icon: BadgeCheck,
    detail: "read-back spans · compare hash · sync_all before done",
  },
]

const PIPELINE_CARDS = [
  {
    icon: Hash,
    title: "Free source hashing",
    body: "blake3 + sha256 are computed while reading the already-decompressed stream. Verifying the written drive costs zero extra passes over the source image.",
  },
  {
    icon: Eye,
    title: "Overlapped verification",
    body: "Read-back starts while writes continue, so the verifier hides inside the write window instead of doubling the wall-clock time of every flash.",
  },
  {
    icon: ShieldCheck,
    title: "Honest flush",
    body: "sync_all before success, always. A green check means the bytes are on the silicon, not just sitting in the page cache.",
  },
]

const FEATURES = [
  {
    icon: Workflow,
    title: "Parallel 3-stage engine",
    body: "Reader, writer and verifier run as separate tasks wired by bounded channels — decompress, write and verify overlap instead of queueing up.",
  },
  {
    icon: Gauge,
    title: "Tiny native binary",
    body: "A native Tauri 2 binary, not an Electron app. The install size target is under 10 MB — a fraction of what Electron-based flashers weigh.",
  },
  {
    icon: ImageDown,
    title: "Compressed images, streamed",
    body: "gzip, xz, zstd and bzip2 images are detected by magic bytes and decompressed on the fly — the image is never fully loaded into RAM.",
  },
  {
    icon: Palette,
    title: "Reactive mascot + 3 themes",
    body: "Anima, the mascot, lives through every phase — reading, writing, verifying — across Midnight, Catppuccin Mocha and Tokyo Night themes.",
  },
  {
    icon: ShieldCheck,
    title: "Destructive safety as a feature",
    body: "Removable-only drive listing, hold-to-confirm for 1.2 s, and a hard OS-disk refusal: your system drive is never offered for flashing.",
  },
  {
    icon: Languages,
    title: "Bilingual EN / ES",
    body: "The whole wizard speaks English and Spanish out of the box, with a reactive mascot that lives through every phase.",
  },
]

const COMPARISON = [
  {
    metric: "Platform coverage",
    values: ["Win + macOS + Linux", "Windows-only", "Win + macOS + Linux", "Win + macOS + Linux"],
  },
  {
    metric: "Install size",
    values: ["~300 MB", "~25 MB", "~2 MB", "< 10 MB (target)"],
  },
  {
    metric: "Write strategy",
    values: ["sequential", "sequential", "sequential", "parallel 3-stage pipeline"],
  },
  {
    metric: "Verification cost",
    values: [
      "re-read + re-decompress + re-hash",
      "n/a",
      "optional",
      "read-back only — source hash is free",
    ],
  },
  {
    metric: "UI",
    values: ["Electron", "Win32", "minimal", "Svelte 5 wizard + mascot"],
  },
  {
    metric: "Telemetry",
    values: ["yes", "no", "no", "NONE — offline by design"],
  },
]

const TREE_LINES = [
  "animabooter/",
  "├── src-tauri/",
  "│   ├── src/",
  "│   │   ├── commands/     list_drives · detect_image · flash · cancel_flash",
  "│   │   │                 eject · get_settings · set_settings · restart_as_admin",
  "│   │   ├── core/         pipeline · reader · writer · verifier · progress",
  "│   │   ├── image/        detect · streaming decompression (gzip/xz/zstd/bz2)",
  "│   │   ├── platform/     linux · macos · windows · unix_common",
  "│   │   └── error.rs  safety.rs  state.rs  lib.rs  main.rs",
  "│   ├── capabilities/     default.json",
  "│   └── Cargo.toml  tauri.conf.json  build.rs",
  "├── src/",
  "│   ├── components/       Wizard · Dropzone · DriveList · ConfirmModal",
  "│   │                     ProgressView · ResultCard · Mascot",
  "│   ├── lib/              ipc · stores · types · format · i18n (en / es)",
  "│   └── App.svelte  main.ts  app.css",
  "├── .github/workflows/    ci.yml (manual) · release.yml (manual or v* tags)",
  "└── vite.config.ts  svelte.config.js  tsconfig.json  index.html",
]

const STATS = [
  { icon: Files, value: "119", label: "files" },
  { icon: Code, value: "6,378", label: "lines of code" },
  { icon: MonitorSmartphone, value: "3", label: "platforms" },
  { icon: Radio, value: "6", label: "flash:// event channels" },
  { icon: PlugZap, value: "8", label: "IPC commands" },
]

const ROADMAP = [
  {
    version: "v0.1",
    status: "current",
    done: true,
    items: [
      "Parallel 3-stage pipeline",
      "Free verification hash (blake3 + sha256 in flight)",
      "Wizard UI (4 steps)",
      "ResultCard PNG export",
      "3 themes (Midnight, Catppuccin Mocha, Tokyo Night)",
      "i18n EN / ES",
      "Safety holds (1.2 s hold-to-confirm + OS-disk refusal)",
    ],
  },
  {
    version: "v0.2",
    status: "planned",
    done: false,
    items: [
      "Multi-drive parallel flash",
      "Smart-skip: detect already-flashed drives via partial hash",
      "animactl CLI",
    ],
  },
  {
    version: "v0.3",
    status: "planned",
    done: false,
    items: ["Distro catalog with download + flash"],
  },
]

const BUILD_LINES = [
  { t: "#", s: "# 1 · frontend: install, check, build (pnpm ≥ 9, or Bun / Node ≥ 18)" },
  { t: "c", s: "pnpm install" },
  { t: "c", s: "pnpm check && pnpm build" },
  { t: "", s: "" },
  { t: "#", s: "# 2 · backend: lint + tests" },
  { t: "c", s: "cd src-tauri" },
  { t: "c", s: "cargo clippy -- -D warnings && cargo test" },
  { t: "", s: "" },
  { t: "#", s: "# 3 · bundle the native desktop app" },
  { t: "c", s: "cd .. && pnpm tauri build" },
]

const UDEV_RULE = [
  "# /etc/udev/rules.d/60-animabooter.rules",
  "# adjust group to your distro",
  'KERNEL=="sd*", ATTRS{removable}=="1", SUBSYSTEM=="block", MODE="0660", GROUP="plugdev"',
].join("\n")

const PREREQS = [
  { icon: Terminal, os: "Linux", req: "libudev + webkit2gtk-4.1 dev packages" },
  { icon: AppWindow, os: "Windows", req: "VS Build Tools + WebView2 runtime" },
  { icon: Apple, os: "macOS", req: "Xcode Command Line Tools" },
]

/* --------------------------- small pieces -------------------------- */

function WispMascot({ className = "h-40 w-40 sm:h-48 sm:w-48" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="Anima, the AnimaBooter mascot — a friendly purple wisp"
      className={className}
    >
      <defs>
        <radialGradient id="ab-body" cx="35%" cy="28%" r="85%">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="45%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#5b21b6" />
        </radialGradient>
        <linearGradient id="ab-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* soft aura */}
      <ellipse cx="100" cy="108" rx="86" ry="80" fill="#8b5cf6" opacity="0.14" />
      {/* rounded blob body with a wispy tail */}
      <path
        d="M100 26c40 0 68 27 68 62 0 21-9 36-22 46-5 4-7 10-5 15 3 8-4 14-12 11-5-2-8-6-12-9-4-3-9-3-13 0-4 3-7 7-12 9-8 3-15-3-12-11 2-5 0-11-5-15-13-10-22-25-22-46 0-35 28-62 68-62z"
        fill="url(#ab-body)"
      />
      {/* top sheen */}
      <path
        d="M100 34c32 0 56 20 60 48-10-24-33-38-60-38s-50 14-60 38c4-28 28-48 60-48z"
        fill="url(#ab-sheen)"
      />
      {/* eyes */}
      <g className="ab-blink">
        <ellipse cx="81" cy="96" rx="7.5" ry="10.5" fill="#0b0d13" />
        <ellipse cx="119" cy="96" rx="7.5" ry="10.5" fill="#0b0d13" />
        <circle cx="83.5" cy="92" r="2.6" fill="#e5e7eb" />
        <circle cx="121.5" cy="92" r="2.6" fill="#e5e7eb" />
      </g>
      {/* smile */}
      <path
        d="M91 116q9 7 18 0"
        stroke="#0b0d13"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* cheeks */}
      <ellipse cx="64" cy="110" rx="6" ry="4" fill="#f0abfc" opacity="0.4" />
      <ellipse cx="136" cy="110" rx="6" ry="4" fill="#f0abfc" opacity="0.4" />
      {/* spark */}
      <path d="M158 44l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#a78bfa" opacity="0.9" />
    </svg>
  )
}

function MiniWisp({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className}>
      <path
        d="M100 26c40 0 68 27 68 62 0 21-9 36-22 46-5 4-7 10-5 15 3 8-4 14-12 11-5-2-8-6-12-9-4-3-9-3-13 0-4 3-7 7-12 9-8 3-15-3-12-11 2-5 0-11-5-15-13-10-22-25-22-46 0-35 28-62 68-62z"
        fill="#8b5cf6"
      />
      <ellipse cx="81" cy="96" rx="9" ry="12" fill="#0b0d13" />
      <ellipse cx="119" cy="96" rx="9" ry="12" fill="#0b0d13" />
      <circle cx="84" cy="91" r="3" fill="#e5e7eb" />
      <circle cx="122" cy="91" r="3" fill="#e5e7eb" />
    </svg>
  )
}

function ScreenshotCard({
  src,
  alt,
  title,
}: {
  src: string
  alt: string
  title: string
}) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-[#2a2e3f] bg-[#1a1d29] transition-colors duration-200 hover:border-[#8b5cf6]/50">
      <Image
        src={src}
        alt={alt}
        title={title}
        width={1154}
        height={857}
        className="h-auto w-full border-b border-[#2a2e3f] object-cover"
      />
      <figcaption className="px-4 py-3 text-xs leading-5 text-[#9ca3af]">{title}</figcaption>
    </figure>
  )
}

function SectionHeading({
  kicker,
  title,
  children,
}: {
  kicker: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b5cf6]">{kicker}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#e5e7eb] sm:text-3xl">{title}</h2>
      {children ? <div className="mt-3 text-[#9ca3af]">{children}</div> : null}
    </div>
  )
}

/* ------------------------------ page ------------------------------- */

export default function Home() {
  return (
    <div
      id="ab-root"
      className="flex min-h-screen flex-col bg-[#0f1117] text-[#e5e7eb] antialiased selection:bg-[#8b5cf6]/40 selection:text-white"
    >
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />

      {/* skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-[#232738] focus:px-3 focus:py-2 focus:text-sm focus:text-[#e5e7eb]"
      >
        Skip to content
      </a>

      {/* ------------------------------------------------ header */}
      <header className="sticky top-0 z-40 border-b border-[#2a2e3f] bg-[#0f1117]/85 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#top" className="flex shrink-0 items-center gap-2.5">
            <MiniWisp className="h-7 w-7" />
            <span className="font-semibold tracking-tight">AnimaBooter</span>
          </a>
          <nav aria-label="Sections" className="no-scrollbar overflow-x-auto">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block whitespace-nowrap rounded-lg px-2.5 py-1.5 text-sm text-[#9ca3af] transition-colors hover:bg-[#232738] hover:text-[#e5e7eb]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" className="flex-1">
        {/* ------------------------------------------------ hero */}
        <section id="top" className="relative overflow-hidden" aria-labelledby="hero-title">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-8 size-72 -translate-x-1/2 rounded-full bg-[#8b5cf6]/15 blur-3xl"
          />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24">
            <div className="ab-float">
              <WispMascot />
            </div>

            <h1
              id="hero-title"
              className="mt-8 bg-gradient-to-r from-[#a78bfa] via-[#8b5cf6] to-[#c084fc] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
            >
              AnimaBooter
            </h1>
            <p className="mt-4 text-lg text-[#9ca3af] sm:text-xl">
              Flash USB drives with soul
              <span className="mx-2 text-[#2a2e3f]" aria-hidden="true">
                |
              </span>
              <span lang="es" className="text-[#a78bfa]">
                Flashea tu USB con alma
              </span>
            </p>

            <ul className="mt-7 flex flex-wrap items-center justify-center gap-2" aria-label="Tech stack">
              {HERO_BADGES.map((badge) => (
                <li key={badge}>
                  <Badge
                    variant="outline"
                    className="border-[#2a2e3f] bg-[#232738] px-3 py-1 text-[#e5e7eb]"
                  >
                    {badge}
                  </Badge>
                </li>
              ))}
              <li>
                <Badge
                  variant="outline"
                  className="border-[#34d399]/40 bg-[#34d399]/10 px-3 py-1 text-[#34d399]"
                >
                  <WifiOff className="size-3" aria-hidden="true" />
                  100% local &amp; offline — no telemetry, no cloud, no accounts
                </Badge>
              </li>
            </ul>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="bg-[#8b5cf6] text-white hover:bg-[#7c3aed] focus-visible:ring-[#8b5cf6]/50"
              >
                <a href="#download">Download v0.1.0</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#2a2e3f] bg-transparent text-[#e5e7eb] hover:bg-[#232738] hover:text-[#e5e7eb] focus-visible:ring-[#8b5cf6]/50"
              >
                <a href="#pipeline">See the pipeline</a>
              </Button>
            </div>

            <p className="mt-8 font-mono text-xs text-[#9ca3af]">
              flash://sda → gzip · xz · zst · bz2 · iso → written → verified ✓
            </p>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Separator className="bg-[#2a2e3f]" />
        </div>

        {/* --------------------------------------------- pipeline */}
        <section id="pipeline" className="py-16 sm:py-20" aria-labelledby="pipeline-title">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <SectionHeading kicker="The pipeline" title="Three stages, one honest promise">
              <p>
                The technical differentiator: flashing is not one blocking loop, it is a pipeline of
                three cooperating tasks connected by bounded mpsc channels — natural backpressure,
                no polling, no guesswork.
              </p>
            </SectionHeading>

            {/* diagram */}
            <ol className="mt-10 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:gap-0">
              {PIPELINE_STAGES.map((stage, i) => (
                <li
                  key={stage.name}
                  className="flex flex-col items-stretch gap-4 lg:flex-1 lg:flex-row lg:items-center lg:gap-0"
                >
                  <Card className="flex-1 gap-3 rounded-2xl border-[#2a2e3f] bg-[#1a1d29] px-5 py-5">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#a78bfa]">
                        <stage.icon className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <CardTitle className="text-base text-[#e5e7eb]">{stage.name}</CardTitle>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-[#8b5cf6]">
                          {stage.step}
                        </p>
                      </div>
                    </div>
                    <CardContent className="px-0">
                      <p className="font-mono text-xs leading-5 text-[#9ca3af]">{stage.detail}</p>
                    </CardContent>
                  </Card>

                  {i < PIPELINE_STAGES.length - 1 && (
                    <div
                      className="flex items-center justify-center gap-2 py-1 lg:py-0 lg:pl-3 lg:pr-3"
                      aria-hidden="true"
                    >
                      <span className="rounded-full border border-[#2a2e3f] bg-[#232738] px-2.5 py-0.5 font-mono text-[11px] text-[#9ca3af] whitespace-nowrap">
                        {i === 0 ? "4 MiB blocks" : "write spans"}
                      </span>
                      <span className="ab-flow shrink-0" />
                      <MoveDown className="size-4 shrink-0 text-[#8b5cf6] lg:hidden" />
                      <MoveRight className="hidden size-4 shrink-0 text-[#8b5cf6] lg:block" />
                    </div>
                  )}
                </li>
              ))}
            </ol>

            {/* why it matters */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {PIPELINE_CARDS.map((card) => (
                <Card
                  key={card.title}
                  className="gap-3 rounded-2xl border-[#2a2e3f] bg-[#1a1d29] px-5 py-5"
                >
                  <div className="flex items-center gap-2.5">
                    <card.icon className="size-4 shrink-0 text-[#a78bfa]" aria-hidden="true" />
                    <CardTitle className="text-sm text-[#e5e7eb]">{card.title}</CardTitle>
                  </div>
                  <CardContent className="px-0">
                    <p className="text-sm leading-6 text-[#9ca3af]">{card.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="mt-6 rounded-2xl border border-[#2a2e3f] bg-[#0b0d13] px-5 py-4 font-mono text-xs leading-6 text-[#34d399]">
              bounded mpsc channels between stages → natural backpressure: the reader physically
              cannot outrun the drive.
            </p>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Separator className="bg-[#2a2e3f]" />
        </div>

        {/* --------------------------------------------- features */}
        <section id="features" className="py-16 sm:py-20" aria-labelledby="features-title">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <SectionHeading kicker="Why it wins" title="Small binary, big manners">
              <p>
                Everything AnimaBooter does, it does locally, visibly and politely — from the
                reactive mascot down to the way it refuses to touch your operating system disk.
              </p>
            </SectionHeading>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((feature) => (
                <Card
                  key={feature.title}
                  className="group gap-3 rounded-2xl border-[#2a2e3f] bg-[#1a1d29] px-5 py-5 transition-colors duration-200 hover:border-[#8b5cf6]/50 hover:bg-[#232738]"
                >
                  <span className="grid size-10 place-items-center rounded-xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#a78bfa] transition-transform duration-200 group-hover:scale-105">
                    <feature.icon className="size-5" aria-hidden="true" />
                  </span>
                  <CardTitle className="text-base text-[#e5e7eb]">{feature.title}</CardTitle>
                  <CardContent className="px-0">
                    <p className="text-sm leading-6 text-[#9ca3af]">{feature.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Separator className="bg-[#2a2e3f]" />
        </div>

        {/* ------------------------------------------- screenshots */}
        <section id="screenshots" className="py-16 sm:py-20" aria-labelledby="screenshots-title">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <SectionHeading kicker="Screenshots" title="The four-step wizard, for real">
              <p>
                Image → drive → confirm → write. Real captures from the v0.1.0 release — interface
                in English and Spanish, three themes, reactive mascot included.
              </p>
            </SectionHeading>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SCREENSHOTS_ROW_1.map((shot) => (
                <ScreenshotCard key={shot.src} {...shot} />
              ))}
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SCREENSHOTS_ROW_2.map((shot) => (
                <ScreenshotCard key={shot.src} {...shot} />
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Separator className="bg-[#2a2e3f]" />
        </div>

        {/* --------------------------------------------- download */}
        <section id="download" className="py-16 sm:py-20" aria-labelledby="download-title">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <SectionHeading kicker="Download" title="Get the v0.1.0 release">
              <p>
                Grab a bundle from the official GitHub release — NSIS / MSI installer (Windows),{" "}
                <span className="font-mono text-sm">.dmg</span> (macOS, aarch64) and{" "}
                <span className="font-mono text-sm">.deb</span> / AppImage /{" "}
                <span className="font-mono text-sm">.rpm</span> (Linux).
              </p>
            </SectionHeading>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {DOWNLOAD_BUNDLES.map((bundle) => (
                <Card
                  key={bundle.os}
                  className="gap-3 rounded-2xl border-[#2a2e3f] bg-[#1a1d29] px-5 py-5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#a78bfa]">
                      <bundle.icon className="size-4" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-base text-[#e5e7eb]">{bundle.os}</CardTitle>
                  </div>
                  <CardContent className="flex flex-col gap-2 px-0">
                    {bundle.files.map((file) => (
                      <a
                        key={file.href}
                        href={file.href}
                        className="flex items-center justify-between gap-2 rounded-lg border border-[#2a2e3f] bg-[#0b0d13] px-3 py-2 text-sm text-[#e5e7eb] transition-colors hover:border-[#8b5cf6]/50 hover:bg-[#232738]"
                      >
                        <span>{file.label}</span>
                        <HardDriveDownload
                          className="size-4 shrink-0 text-[#a78bfa]"
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="mt-6 rounded-2xl border border-[#fbbf24]/30 bg-[#fbbf24]/5 px-5 py-4 text-sm leading-6 text-[#fbbf24]">
              ⚠️ Early-release software that writes to raw devices — double-check the target drive.
              Binaries are unsigned: SmartScreen / Gatekeeper will warn on first run (macOS:
              right-click → Open).
            </p>
            <p className="mt-3 text-sm text-[#9ca3af]">
              Full release notes on GitHub:{" "}
              <a
                href={RELEASE_URL}
                className="text-[#a78bfa] underline-offset-4 hover:underline"
                rel="noopener noreferrer"
              >
                release v0.1.0
              </a>{" "}
              ·{" "}
              <a
                href={RELEASES_URL}
                className="text-[#a78bfa] underline-offset-4 hover:underline"
                rel="noopener noreferrer"
              >
                all releases
              </a>
            </p>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Separator className="bg-[#2a2e3f]" />
        </div>

        {/* ---------------------------------------------- compare */}
        <section id="compare" className="py-16 sm:py-20" aria-labelledby="compare-title">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <SectionHeading kicker="Compare" title="Where AnimaBooter stands">
              <p>
                A factual comparison with well-known flashing tools. No invented benchmarks — only
                architecture and design choices.
              </p>
            </SectionHeading>

            <Card className="mt-10 overflow-hidden rounded-2xl border-[#2a2e3f] bg-[#1a1d29] p-0 py-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <caption className="sr-only">
                    Feature comparison between balenaEtcher, Rufus, usbimager and AnimaBooter
                  </caption>
                  <thead>
                    <tr className="border-b border-[#2a2e3f]">
                      <th
                        scope="col"
                        className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#9ca3af]"
                      >
                        Metric
                      </th>
                      {["balenaEtcher", "Rufus", "usbimager", "AnimaBooter"].map((tool) => (
                        <th
                          key={tool}
                          scope="col"
                          className={
                            tool === "AnimaBooter"
                              ? "bg-[#8b5cf6]/10 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#a78bfa]"
                              : "px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#9ca3af]"
                          }
                        >
                          {tool}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row) => (
                      <tr key={row.metric} className="border-b border-[#2a2e3f] last:border-b-0">
                        <th
                          scope="row"
                          className="px-5 py-4 align-top font-medium text-[#e5e7eb]"
                        >
                          {row.metric}
                        </th>
                        {row.values.map((value, i) => (
                          <td
                            key={i}
                            className={
                              i === 3
                                ? `bg-[#8b5cf6]/10 px-5 py-4 align-top font-medium text-[#e5e7eb] ${
                                    row.metric === "Telemetry" ? "text-[#34d399]" : ""
                                  }`
                                : "px-5 py-4 align-top text-[#9ca3af]"
                            }
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <p className="mt-4 text-sm leading-6 text-[#9ca3af]">
              Benchmark cells for AnimaBooter are targets — we publish only real, self-measured
              numbers. Measure yourself:{" "}
              <code className="rounded-md border border-[#2a2e3f] bg-[#0b0d13] px-1.5 py-0.5 font-mono text-xs text-[#34d399]">
                cargo test &amp;&amp; time ./app --flash ...
              </code>
            </p>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Separator className="bg-[#2a2e3f]" />
        </div>

        {/* ------------------------------------------ verification */}
        <section id="verification" className="py-16 sm:py-20" aria-labelledby="verification-title">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <SectionHeading kicker="Verification status" title="Tested where it's tested">
              <p>
                Honesty about what is actually hardware-tested is part of this project&apos;s ethos.
                Release binaries are unsigned; signing and notarization are planned once
                distribution becomes serious.
              </p>
            </SectionHeading>

            <Card className="mt-10 overflow-hidden rounded-2xl border-[#2a2e3f] bg-[#1a1d29] p-0 py-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <caption className="sr-only">
                    Platform verification status: CI coverage vs. real hardware testing
                  </caption>
                  <thead>
                    <tr className="border-b border-[#2a2e3f]">
                      {["Platform", "Compiles (CI)", "Real flash + boot test"].map((head) => (
                        <th
                          key={head}
                          scope="col"
                          className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#9ca3af]"
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {VERIFICATION_ROWS.map((row) => (
                      <tr key={row.platform} className="border-b border-[#2a2e3f] last:border-b-0">
                        <th
                          scope="row"
                          className="px-5 py-4 align-top font-medium text-[#e5e7eb]"
                        >
                          {row.platform}
                        </th>
                        <td className="px-5 py-4 align-top text-[#9ca3af]">{row.ci}</td>
                        <td
                          className={`px-5 py-4 align-top ${
                            row.tested ? "text-[#34d399]" : "text-[#fbbf24]"
                          }`}
                        >
                          <span className="flex items-start gap-2">
                            {row.tested ? (
                              <CircleCheck className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                            ) : (
                              <CircleDashed className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                            )}
                            <span>{row.hardware}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Separator className="bg-[#2a2e3f]" />
        </div>

        {/* -------------------------------------------- tree + scale */}
        <section id="tree" className="py-16 sm:py-20" aria-labelledby="tree-title">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <SectionHeading kicker="Project tree & scale" title="A codebase you can read in an evening">
              <p>
                No monorepo, no generated soup. One Rust backend, one Svelte 5 frontend, and a
                couple of config files — counted locally, not copied from a dashboard.
              </p>
            </SectionHeading>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
              <div className="overflow-hidden rounded-2xl border border-[#2a2e3f] bg-[#0b0d13]">
                <div className="flex items-center gap-2 border-b border-[#2a2e3f] bg-[#1a1d29] px-4 py-2.5">
                  <FolderTree className="size-4 text-[#a78bfa]" aria-hidden="true" />
                  <span className="font-mono text-xs text-[#9ca3af]">animabooter — file tree</span>
                </div>
                <div className="overflow-x-auto px-4 py-4">
                  <div className="font-mono text-[12.5px] leading-6 text-[#9ca3af]">
                    {TREE_LINES.map((line, i) => (
                      <div key={i} className="whitespace-pre">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <ul className="grid grid-cols-2 gap-4" aria-label="Project scale stats">
                  {STATS.map((stat) => (
                    <li
                      key={stat.label}
                      className="rounded-2xl border border-[#2a2e3f] bg-[#1a1d29] px-4 py-4"
                    >
                      <stat.icon className="size-4 text-[#a78bfa]" aria-hidden="true" />
                      <p className="mt-2 text-2xl font-bold tracking-tight text-[#e5e7eb]">
                        {stat.value}
                      </p>
                      <p className="text-xs text-[#9ca3af]">{stat.label}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-xs leading-5 text-[#9ca3af]">
                  Counted locally with <span className="font-mono">rg --files | wc -l</span> and{" "}
                  <span className="font-mono">wc -l</span> across the repo — excluding node_modules,
                  dist, target and .git.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Separator className="bg-[#2a2e3f]" />
        </div>

        {/* ---------------------------------------------- roadmap */}
        <section id="roadmap" className="py-16 sm:py-20" aria-labelledby="roadmap-title">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <SectionHeading kicker="Roadmap" title="Shipped first, promised later">
              <p>
                v0.1 is real, running code. Everything marked planned is honestly not built yet —
                no vaporware checkboxes.
              </p>
            </SectionHeading>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {ROADMAP.map((phase) => (
                <Card
                  key={phase.version}
                  className="gap-4 rounded-2xl border-[#2a2e3f] bg-[#1a1d29] px-5 py-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="font-mono text-lg text-[#e5e7eb]">
                      {phase.version}
                    </CardTitle>
                    {phase.done ? (
                      <Badge className="border-transparent bg-[#34d399]/15 text-[#34d399]">
                        current
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="border-dashed border-[#fbbf24]/40 text-[#fbbf24]"
                      >
                        planned — not yet built
                      </Badge>
                    )}
                  </div>
                  <CardContent className="px-0">
                    <ul className="space-y-2.5">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm">
                          {phase.done ? (
                            <CircleCheck
                              className="mt-0.5 size-4 shrink-0 text-[#34d399]"
                              aria-hidden="true"
                            />
                          ) : (
                            <CircleDashed
                              className="mt-0.5 size-4 shrink-0 text-[#fbbf24]/70"
                              aria-hidden="true"
                            />
                          )}
                          <span className={phase.done ? "text-[#e5e7eb]" : "text-[#9ca3af]"}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Separator className="bg-[#2a2e3f]" />
        </div>

        {/* ------------------------------------------------- build */}
        <section id="build" className="py-16 sm:py-20" aria-labelledby="build-title">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <SectionHeading kicker="Build it yourself" title="Local-only, from source">
              <p>
                Prefer to run it from source? No app store, no account. Clone the repository and
                build the desktop app on your own machine with pnpm and cargo.
              </p>
            </SectionHeading>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {/* terminal */}
              <div className="overflow-hidden rounded-2xl border border-[#2a2e3f] bg-[#0b0d13]">
                <div className="flex items-center gap-2 border-b border-[#2a2e3f] bg-[#1a1d29] px-4 py-2.5">
                  <span className="size-2.5 rounded-full bg-[#f87171]" aria-hidden="true" />
                  <span className="size-2.5 rounded-full bg-[#fbbf24]" aria-hidden="true" />
                  <span className="size-2.5 rounded-full bg-[#34d399]" aria-hidden="true" />
                  <span className="ml-2 font-mono text-xs text-[#9ca3af]">
                    build-from-source — local shell
                  </span>
                </div>
                <div className="overflow-x-auto px-4 py-4">
                  <div className="font-mono text-[12.5px] leading-6">
                    {BUILD_LINES.map((line, i) => {
                      if (line.t === "#") {
                        return (
                          <div key={i} className="whitespace-pre text-[#6b7280]">
                            {line.s}
                          </div>
                        )
                      }
                      if (line.t === "c") {
                        return (
                          <div key={i} className="whitespace-pre text-[#e5e7eb]">
                            <span className="text-[#8b5cf6]">$ </span>
                            {line.s}
                          </div>
                        )
                      }
                      return <div key={i} className="h-3" aria-hidden="true" />
                    })}
                  </div>
                </div>
              </div>

              {/* prerequisites + udev */}
              <div className="flex flex-col gap-4">
                <ul className="space-y-3" aria-label="Per-OS prerequisites">
                  {PREREQS.map((prereq) => (
                    <li
                      key={prereq.os}
                      className="flex items-center gap-3 rounded-2xl border border-[#2a2e3f] bg-[#1a1d29] px-4 py-3.5"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#a78bfa]">
                        <prereq.icon className="size-4" aria-hidden="true" />
                      </span>
                      <p className="text-sm">
                        <span className="font-medium text-[#e5e7eb]">{prereq.os}</span>
                        <span className="text-[#9ca3af]"> — {prereq.req}</span>
                      </p>
                    </li>
                  ))}
                </ul>

                <details className="group rounded-2xl border border-[#2a2e3f] bg-[#1a1d29]">
                  <summary className="flex cursor-pointer list-none items-center gap-2.5 px-5 py-4 text-sm font-medium text-[#e5e7eb] [&::-webkit-details-marker]:hidden">
                    <PlugZap className="size-4 text-[#a78bfa]" aria-hidden="true" />
                    Linux udev rule — see removable disks without root
                    <ChevronDown
                      className="ml-auto size-4 text-[#9ca3af] transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-6 text-[#9ca3af]">
                      Drop this rule so AnimaBooter can open removable block devices as your user.
                      Reload with{" "}
                      <span className="font-mono text-xs">
                        udevadm control --reload &amp;&amp; udevadm trigger
                      </span>
                      .
                    </p>
                    <pre className="mt-3 overflow-x-auto rounded-xl border border-[#2a2e3f] bg-[#0b0d13] px-4 py-3 font-mono text-[12.5px] leading-6 text-[#34d399]">
                      {UDEV_RULE}
                    </pre>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ status */}
        <section
          aria-label="Project status"
          className="border-t border-[#2a2e3f] bg-[#1a1d29] py-6"
        >
          <p className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-2 px-4 font-mono text-xs text-[#9ca3af] sm:px-6">
            <WifiOff className="size-3.5 text-[#34d399]" aria-hidden="true" />
            v0.1.0 · MIT (c) 2026 marrionesa · 100% local — no telemetry, no cloud
          </p>
        </section>
      </main>

      {/* ------------------------------------------------ footer */}
      <footer className="mt-auto border-t border-[#2a2e3f] bg-[#0f1117]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-4 py-8 sm:px-6">
          <div className="flex items-center gap-2">
            <MiniWisp className="h-5 w-5" />
            <p className="text-sm text-[#9ca3af]">animabooter v0.1.0 · made by @marrionesa</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
              {[
                { href: GITHUB_REPO, label: "GitHub" },
                { href: RELEASES_URL, label: "Releases" },
                { href: `${GITHUB_REPO}/blob/main/CHANGELOG.md`, label: "Changelog" },
                { href: `${GITHUB_REPO}/blob/main/CONTRIBUTING.md`, label: "Contributing" },
                { href: `${GITHUB_REPO}/blob/main/SECURITY.md`, label: "Security" },
                { href: `${GITHUB_REPO}/blob/main/LICENSE`, label: "MIT License" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    rel="noopener noreferrer"
                    className="text-[#9ca3af] transition-colors hover:text-[#e5e7eb]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}
