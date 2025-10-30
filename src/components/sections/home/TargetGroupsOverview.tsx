"use client";

import Link from "next/link";
import Image from "next/image";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { useStrategyDialog } from "@/components/strategy/StrategySessionDialog";
import { Check, Rocket, ArrowRight, Target } from "lucide-react";

type ItemKey =
  | "makelaars"
  | "buitenland"
  | "hypotheek"
  | "projectontwikkelaars";

const items: { key: ItemKey; name: string; description: string; href: string }[] = [
  {
    key: "makelaars",
    name: "Makelaars",
    description: "Duurzame klant‑relaties ipv lead‑jacht",
    href: "/makelaars",
  },
  {
    key: "buitenland",
    name: "Buitenland",
    description: "IQI Global Partnership • Dubai, Spanje, Bali ervaring",
    href: "/makelaars-buitenland",
  },
  {
    key: "hypotheek",
    name: "Hypotheekadviseurs",
    description: "Onafhankelijk van offerte‑sites worden",
    href: "/hypotheekadviseurs",
  },
  {
    key: "projectontwikkelaars",
    name: "Projectontwikkelaars",
    description: "Project marketing & events",
    href: "/projectontwikkelaars",
  },
];

// Foto-variant items met images uit public/images
const photoItems: Array<
  { key: ItemKey; name: string; description: string; href: string; img: string; alt: string }
> = [
  {
    key: "makelaars",
    name: "Makelaars",
    description: "Duurzame klant‑relaties ipv lead‑jacht",
    href: "/makelaars",
    img: "/images/remax.jpg",
    alt: "Re/max makelaars",
  },
  {
    key: "buitenland",
    name: "Buitenland",
    description: "IQI Global Partnership • Dubai, Spanje, Bali ervaring",
    href: "/makelaars-buitenland",
    img: "/images/secondhomebeurs.jpg",
    alt: "Second Home Beurs",
  },
  {
    key: "hypotheek",
    name: "Hypotheekadviseurs",
    description: "Onafhankelijk van offerte‑sites worden",
    href: "/hypotheekadviseurs",
    img: "/images/hypotheekvisie.jpg",
    alt: "Hypotheekvisie kantoor",
  },
  {
    key: "projectontwikkelaars",
    name: "Projectontwikkelaars",
    description: "Project marketing & events",
    href: "/projectontwikkelaars",
    img: "/images/recreatie.jpg",
    alt: "Recreatie projectontwikkeling",
  },
];

function BackgroundSVG({ type }: { type: ItemKey }) {
  switch (type) {
    case "makelaars":
      return (
        <div className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_15%,#000_110%)]">
          <svg
            className="absolute right-2 top-2 h-[220px] w-[320px] text-black"
            viewBox="0 0 320 220"
            fill="none"
            aria-hidden
          >
            <rect x="8" y="8" width="304" height="204" rx="6" stroke="currentColor" strokeWidth="1" opacity="0.22" />
            <path d="M60 8 V212" stroke="currentColor" strokeWidth="1" opacity="0.18" />
            <path d="M60 80 H312" stroke="currentColor" strokeWidth="1" opacity="0.18" />
            <path d="M140 80 V212" stroke="currentColor" strokeWidth="1" opacity="0.18" />
            <path d="M220 8 V80" stroke="currentColor" strokeWidth="1" opacity="0.18" />
            <path d="M220 140 V212" stroke="currentColor" strokeWidth="1" opacity="0.18" />
            <path d="M60 48 h18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
            <path d="M78 48 h18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.22" />
            <path d="M140 110 a20 20 0 0 1 20 20" stroke="currentColor" strokeWidth="1.5" opacity="0.28" />
            <path d="M60 140 h40" stroke="currentColor" strokeWidth="1" opacity="0.26" />
            <path d="M100 140 l4 -6 M100 140 l4 6" stroke="currentColor" strokeWidth="1" opacity="0.26" />
          </svg>
        </div>
      );
    case "buitenland":
      return (
        <div className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_15%,#000_110%)]">
          <svg
            className="absolute right-4 top-4 h-[230px] w-[230px] text-black"
            viewBox="0 0 240 240"
            fill="none"
            aria-hidden
          >
            <circle cx="120" cy="120" r="100" stroke="currentColor" strokeWidth="1" opacity="0.20" />
            <ellipse cx="120" cy="120" rx="100" ry="100" stroke="currentColor" strokeWidth="1" opacity="0.16" />
            <ellipse cx="120" cy="120" rx="88" ry="76" stroke="currentColor" strokeWidth="1" opacity="0.16" />
            <ellipse cx="120" cy="120" rx="76" ry="52" stroke="currentColor" strokeWidth="1" opacity="0.16" />
            <ellipse cx="120" cy="120" rx="64" ry="28" stroke="currentColor" strokeWidth="1" opacity="0.16" />
            <ellipse cx="120" cy="120" rx="52" ry="4" stroke="currentColor" strokeWidth="1" opacity="0.12" />
            <ellipse cx="120" cy="120" rx="32" ry="100" transform="rotate(-60 120 120)" stroke="currentColor" strokeWidth="1" opacity="0.16" />
            <ellipse cx="120" cy="120" rx="32" ry="100" transform="rotate(-30 120 120)" stroke="currentColor" strokeWidth="1" opacity="0.16" />
            <ellipse cx="120" cy="120" rx="32" ry="100" transform="rotate(30 120 120)" stroke="currentColor" strokeWidth="1" opacity="0.16" />
            <ellipse cx="120" cy="120" rx="32" ry="100" transform="rotate(60 120 120)" stroke="currentColor" strokeWidth="1" opacity="0.16" />
            <g transform="translate(150 36)">
              <path d="M0 -10 C 5 -10 9 -6 9 -1 C 9 5 4 10 0 14 C -4 10 -9 5 -9 -1 C -9 -6 -5 -10 0 -10 Z" fill="var(--brand-500)" opacity="0.6" />
              <circle cx="0" cy="-2" r="3" fill="white" opacity="0.95" />
            </g>
          </svg>
        </div>
      );
    case "hypotheek":
      return (
        <div className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_15%,#000_110%)]">
          <svg
            className="absolute left-3 top-6 h-[220px] w-[340px] text-black"
            viewBox="0 0 340 220"
            fill="none"
            aria-hidden
          >
            <path d="M0 30 H340" stroke="currentColor" strokeWidth="1" opacity="0.12" />
            <path d="M0 66 H340" stroke="currentColor" strokeWidth="1" opacity="0.12" />
            <path d="M0 102 H340" stroke="currentColor" strokeWidth="1" opacity="0.12" />
            <path d="M0 138 H340" stroke="currentColor" strokeWidth="1" opacity="0.12" />
            <path d="M0 174 H340" stroke="currentColor" strokeWidth="1" opacity="0.12" />
            <path d="M20 0 V220" stroke="currentColor" strokeWidth="1" opacity="0.12" />
            <path d="M74 0 V220" stroke="currentColor" strokeWidth="1" opacity="0.12" />
            <path d="M128 0 V220" stroke="currentColor" strokeWidth="1" opacity="0.12" />
            <path d="M182 0 V220" stroke="currentColor" strokeWidth="1" opacity="0.12" />
            <path d="M236 0 V220" stroke="currentColor" strokeWidth="1" opacity="0.12" />
            <path d="M290 0 V220" stroke="currentColor" strokeWidth="1" opacity="0.12" />
            <path d="M20 180 C 80 160, 120 130, 160 110 C 200 90, 260 70, 320 60" stroke="currentColor" strokeWidth="2" opacity="0.28" fill="none" />
            <path d="M20 182 C 110 150, 180 120, 320 80" stroke="var(--brand-500)" strokeWidth="2" opacity="0.35" fill="none" />
            <circle cx="60" cy="160" r="8" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          </svg>
        </div>
      );
    case "projectontwikkelaars":
      return (
        <div className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_15%,#000_110%)]">
          <svg
            className="absolute left-2 top-3 h-[230px] w-[330px] text-black"
            viewBox="0 0 330 230"
            fill="none"
            aria-hidden
          >
            <path d="M0 200 H330" stroke="currentColor" strokeWidth="1" opacity="0.14" />
            <g stroke="currentColor" strokeWidth="1" opacity="0.26">
              <rect x="60" y="60" width="18" height="130" />
              <g>
                <path d="M60 60 H78" />
                <path d="M60 71 H78" />
                <path d="M60 60 L78 71" />
                <path d="M78 60 L60 71" />
              </g>
              <g>
                <path d="M60 82 H78" />
                <path d="M60 93 H78" />
                <path d="M60 82 L78 93" />
                <path d="M78 82 L60 93" />
              </g>
              <g>
                <path d="M60 104 H78" />
                <path d="M60 115 H78" />
                <path d="M60 104 L78 115" />
                <path d="M78 104 L60 115" />
              </g>
              <g>
                <path d="M60 126 H78" />
                <path d="M60 137 H78" />
                <path d="M60 126 L78 137" />
                <path d="M78 126 L60 137" />
              </g>
              <g>
                <path d="M60 148 H78" />
                <path d="M60 159 H78" />
                <path d="M60 148 L78 159" />
                <path d="M78 148 L60 159" />
              </g>
              <g>
                <path d="M60 170 H78" />
                <path d="M60 181 H78" />
                <path d="M60 170 L78 181" />
                <path d="M78 170 L60 181" />
              </g>
              <rect x="52" y="192" width="34" height="10" />
            </g>
            <g opacity="0.28" stroke="currentColor" strokeWidth="1" fill="none">
              <rect x="78" y="70" width="18" height="16" />
              <path d="M96 78 h8" />
            </g>
            <g opacity="0.22" stroke="currentColor" strokeWidth="1" fill="none">
              <path d="M78 72 H270" />
              <path d="M82 72 l16 0 l-16 10 Z" />
              <path d="M102 72 l16 0 l-16 10 Z" />
              <path d="M122 72 l16 0 l-16 10 Z" />
              <path d="M142 72 l16 0 l-16 10 Z" />
              <path d="M162 72 l16 0 l-16 10 Z" />
              <path d="M182 72 l16 0 l-16 10 Z" />
              <path d="M202 72 l16 0 l-16 10 Z" />
              <path d="M222 72 l16 0 l-16 10 Z" />
              <path d="M242 72 l16 0 l-16 10 Z" />
            </g>
            <g opacity="0.2" stroke="currentColor" strokeWidth="1" fill="none">
              <path d="M60 78 H28" />
              <path d="M60 72 H38" />
              <rect x="22" y="70" width="12" height="10" />
            </g>
            <g opacity="0.4" stroke="currentColor" strokeWidth="1" fill="var(--brand-500)" fillOpacity="0.16">
              <rect x="188" y="68" width="12" height="8" />
            </g>
            <g stroke="currentColor" strokeWidth="1" opacity="0.26" fill="none">
              <path d="M194 76 V140" />
              <path d="M194 140 q6 6 0 12 q-6 -6 0 -12 Z" />
              <rect x="180" y="152" width="28" height="18" opacity="0.12" />
            </g>
          </svg>
        </div>
      );
    default:
      return null;
  }
}

function IconSVG({ type, className }: { type: ItemKey; className?: string }) {
  switch (type) {
    case "makelaars":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
          <path d="M10 6h4"></path>
          <path d="M10 10h4"></path>
          <path d="M10 14h4"></path>
          <path d="M10 18h4"></path>
        </svg>
      );
    case "buitenland":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      );
    case "hypotheek":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <rect width="20" height="12" x="2" y="6" rx="2"></rect>
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M6 12h.01M18 12h.01"></path>
        </svg>
      );
    case "projectontwikkelaars":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
          <path d="M9 22v-4h6v4"></path>
          <path d="M8 6h.01"></path>
          <path d="M16 6h.01"></path>
          <path d="M12 6h.01"></path>
          <path d="M12 10h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M16 10h.01"></path>
          <path d="M16 14h.01"></path>
          <path d="M8 10h.01"></path>
          <path d="M8 14h.01"></path>
        </svg>
      );
    default:
      return null;
  }
}

// NIET WEGHALEN — tijdelijk uitgezet om alleen de foto-variant te tonen
const SHOW_NON_PHOTO_SECTION = false;

export default function TargetGroupsOverview({
  title = "Voor wie is dit?",
  subtitle = "Gespecialiseerde oplossingen per doelgroep",
  kicker = "DOELGROEPEN",
}: TargetGroupsOverviewProps = {}) {
  // NIET WEGHALEN — deze sectie staat tijdelijk uit
  if (!SHOW_NON_PHOTO_SECTION) return null;

  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)] text-black">
      {/* subtle grid for depth on yellow (matching Case Study) */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tgo-yellow-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tgo-yellow-grid)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-10 md:pt-14 pb-16 md:pb-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center text-black">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 type-kicker font-medium text-black">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
            {kicker}
          </div>
          <h2 className="mt-4 type-h2">{title}</h2>
          <p className="mt-3 type-body text-black/70">
            {subtitle}
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <Link key={item.name} href={item.href} className="group block" aria-label={`${item.name} – meer info`}>
              <article className="relative h-[250px] md:h-[320px] overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] shadow-[0_8px_24px_rgba(0,0,0,.08)] transform-gpu">
                {/* SVG background */}
                <BackgroundSVG type={item.key} />

                {/* content */}
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end text-black">
                  <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
                    <IconSVG type={item.key} className="h-12 w-12 origin-left transform-gpu text-black transition-all duration-300 ease-in-out group-hover:scale-75" />
                    <h3 className="text-xl md:text-2xl font-semibold text-black">{item.name}</h3>
                    <p className="max-w-lg text-black/70 text-sm md:text-base">{item.description}</p>
                  </div>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-2 text-[13px] font-medium text-black underline-offset-4 hover:underline">
                      Meer info
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ms-2 h-4 w-4 rtl:rotate-180" aria-hidden="true">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Foto-gebaseerde duplicate component voor vergelijking met de SVG-variant

interface TargetGroupsOverviewProps {
  title?: string;
  subtitle?: string;
  kicker?: string;
  items?: Array<{
    name: string;
    description: string;
    img: string;
    alt: string;
    href?: string;
    key?: string;
  }>;
}

interface TargetGroupsOverviewPhotosProps {
  title?: string;
  subtitle?: string;
  kicker?: string;
  items?: Array<{
    name: string;
    description: string;
    img: string;
    alt: string;
    href?: string;
    key?: string;
  }>;
}

export function TargetGroupsOverviewPhotos({
  title = "Voor wie wij werken",
  subtitle = "Gespecialiseerde oplossingen voor elke vastgoedprofessional",
  kicker = "DOELGROEPEN",
  items = photoItems,
}: TargetGroupsOverviewPhotosProps = {}) {
  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)] text-black">
      {/* subtle grid like Case Study */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tgo-yellow-grid-photos" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tgo-yellow-grid-photos)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>

      {/* subtle animated flickering grid background */}
      <FlickeringGrid
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.26] mix-blend-multiply [mask-image:radial-gradient(90%_90%_at_50%_45%,black,transparent)]"
        squareSize={5}
        gridGap={5}
        color="rgb(0, 0, 0)"
        maxOpacity={0.22}
      />

      {/* Top wave divider from previous (dark) section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -mt-px">
        <svg
          className="block h-[85px] w-full md:h-[121px] rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z" fill="var(--bg-section)" />
        </svg>
      </div>

      {/* Bottom wave divider into next section (different shape from top) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -mb-px">
        <svg
          className="block h-[85px] w-full md:h-[121px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,40 C 240,60 520,30 820,55 S 1100,85 1200,70 L1200,120 L0,120 Z" fill="var(--bg-section)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-[84px] md:pt-[120px] pb-[96px] md:pb-[132px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center text-black">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 type-kicker font-medium text-black">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
            {kicker}
          </div>
          <h2 className="mt-4 type-h2">{title}</h2>
          <p className="mt-3 type-body text-black/70">
            {subtitle}
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.name} className="group block">
              <article className="relative h-[250px] md:h-[320px] overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] shadow-[0_12px_36px_rgba(0,0,0,.28)] transform-gpu">
                {/* Photo background */}
                <div className="absolute inset-0">
                  {item.img && item.img !== "" && (
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      priority={false}
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent [mask-image:linear-gradient(to_top,black_32%,transparent_60%)]" />
                </div>

                {/* content */}
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end text-white">
                  <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300">
                    <h3 className="text-xl md:text-2xl font-semibold text-white tracking-[-0.01em] [text-shadow:0_1px_10px_rgba(0,0,0,0.35)]">{item.name}</h3>
                    <p className="max-w-lg text-white/80 text-sm md:text-base leading-snug [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]">{item.description}</p>
                  </div>
                  {/* Meer info button disabled - no redirect */}
                  {/* <div className="mt-3">
                    <span className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[13px] font-medium text-white/90 shadow-[0_2px_10px_rgba(0,0,0,0.12)] backdrop-blur-[2px] transition-colors transition-shadow hover:text-white hover:bg-white/15 hover:border-white/25">
                      Meer info
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ms-2 h-4 w-4 rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </div> */}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Strategy Session CTA component based on FinalCTA design
export function StrategySessionCTA() {
  const { openDialog } = useStrategyDialog() ?? { openDialog: () => {} };

  return (
    <section className="relative isolate overflow-hidden bg-[var(--bg-section)] py-16 md:py-24">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(70%_70%_at_50%_45%,#161616,transparent)]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="strategy-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#strategy-grid)" className="text-foreground" />
          </svg>
        </div>
        {/* Glow strip */}
        <div className="absolute left-1/2 top-[22%] h-40 w-[130vw] -translate-x-1/2 rotate-[6deg] bg-[linear-gradient(90deg,transparent,rgba(255,215,0,0.12),transparent)] blur-[26px]" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_48%,transparent,rgba(22,22,22,0.06))]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-2 type-kicker font-medium text-[var(--color-text-secondary)]">
            HOE WE BEGINNEN
          </div>
        </div>

        {/* Main content frame */}
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-3)] p-8 shadow-sm">
          <BorderBeam
            duration={12}
            size={120}
            colorFrom="var(--brand-500)"
            colorTo="var(--brand-200)"
            className="from-transparent via-[var(--brand-500)] to-transparent"
            borderWidth={1}
            initialOffset={18}
          />

          <div className="grid gap-8">
            {/* Strategy session header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-[var(--brand-500)]" />
                <span className="font-bold text-lg type-h3">STRATEGIESESSIE</span>
              </div>
            </div>

            {/* Benefits section */}
            <div>
              <h3 className="font-bold mb-6 text-center type-body">In 30 minuten ontdek je:</h3>
              <ul className="mx-auto max-w-2xl space-y-4">
                {[
                  "Analyse van jouw huidige situatie",
                  "Identificatie groeidoelen en knelpunten", 
                  "Concreet stappenplan voor jouw bedrijf",
                  "Kennismaking met onze bewezen werkwijze",
                  "BONUS: Piramide van Vertrouwen strategie (waarde €1000)"
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3 type-body text-[var(--color-text-secondary)]">
                    <Check className="mt-1 h-5 w-5 text-[var(--brand-500)] flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mx-auto w-full max-w-2xl">
              <Button
                onClick={openDialog}
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-500)_84%,transparent)] via-[var(--brand-500)] to-[var(--brand-200)] px-8 py-6 text-lg font-bold tracking-wide text-[var(--color-accent-contrast)] shadow-[0_8px_30px_rgba(255,215,0,0.15)] ring-1 ring-[color-mix(in_oklab,var(--brand-500)_30%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(255,215,0,0.25)] focus-visible:ring-[color-mix(in_oklab,var(--brand-500)_60%,white)] h-auto min-h-[56px]"
                aria-label="Claim je gratis strategiesessie"
              >
                {/* Shine sweep */}
                <span className="pointer-events-none absolute left-[-30%] top-[-200%] h-[400%] w-[30%] -rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)] opacity-30 transition-transform duration-700 ease-out group-hover:translate-x-[180%]" />
                {/* Content */}
                <span className="relative z-10 flex w-full items-center justify-center gap-3">
                  <Rocket className="h-5 w-5 -translate-y-[1px] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:rotate-12" />
                  <span>CLAIM JE GRATIS STRATEGIESESSIE</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
                </span>
                {/* Soft glow overlay for contrast in dark mode */}
                <span className="pointer-events-none absolute inset-0 rounded-[inherit] [box-shadow:inset_0_0_0_1px_color-mix(in_oklab,white_30%,transparent)]" />
              </Button>
              
              <div className="mt-4 text-center space-y-2">
                <p className="type-body font-medium text-[var(--color-text)]">
                  30 min • Gratis • Vrijblijvend • Waarde €1000
                </p>
                <p className="type-caption text-[var(--color-text-muted)] flex items-center justify-center gap-1">
                  📅 "Beperkte plaatsen beschikbaar - alleen voor serieuze groeiers"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
