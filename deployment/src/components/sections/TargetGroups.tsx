"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { Building2, Globe, Banknote, Building } from "lucide-react";
import Image from "next/image";

function SectionHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-3 py-1 type-kicker font-medium text-black/80">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
        DOELGROEPEN
      </div>
      <h2 className="mt-4 type-h2 text-black">
        Voor wie wij werken
      </h2>
      <p className="mt-3 type-body text-black/70">
        Gespecialiseerde oplossingen voor elke vastgoedprofessional
      </p>
    </div>
  );
}

const bgTint = "[mask-image:linear-gradient(to_top,transparent_15%,#000_110%)]";

export default function TargetGroupsSection() {
  // Toggle to choose whether photos should cover the SVG backgrounds
  const usePhotos = true;
  const items = [
    {
      Icon: Building2,
      name: "Makelaars",
      description: "Duurzame klant‑relaties ipv lead‑jacht",
      href: "/makelaars",
      cta: "Meer info",
      className: "col-span-1 !bg-white dark:!bg-white border border-[var(--color-border)] shadow-sm",
      background: (
        <>
          <div className={cn("absolute inset-0 z-0", bgTint, usePhotos && "opacity-0") }>
            <svg
              className="absolute right-2 top-2 h-[220px] w-[320px] text-foreground"
              viewBox="0 0 320 220"
              fill="none"
              aria-hidden
            >
              <rect x="8" y="8" width="304" height="204" rx="6" stroke="currentColor" strokeWidth="1" opacity="0.12" />
              <path d="M60 8 V212" stroke="currentColor" strokeWidth="1" opacity="0.12" />
              <path d="M60 80 H312" stroke="currentColor" strokeWidth="1" opacity="0.12" />
              <path d="M140 80 V212" stroke="currentColor" strokeWidth="1" opacity="0.12" />
              <path d="M220 8 V80" stroke="currentColor" strokeWidth="1" opacity="0.12" />
              <path d="M220 140 V212" stroke="currentColor" strokeWidth="1" opacity="0.12" />
              <path d="M60 48 h18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.18" />
              <path d="M78 48 h18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.12" />
              <path d="M140 110 a20 20 0 0 1 20 20" stroke="currentColor" strokeWidth="1.5" opacity="0.18" />
              <path d="M60 140 h40" stroke="currentColor" strokeWidth="1" opacity="0.18" />
              <path d="M100 140 l4 -6 M100 140 l4 6" stroke="currentColor" strokeWidth="1" opacity="0.18" />
            </svg>
          </div>
          <Image
            src="/images/makelaars.jpg"
            alt="Makelaars"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className={cn("absolute inset-0 z-0 object-cover", usePhotos ? "opacity-100" : "opacity-0")}
          />
        </>
      ),
    },
    {
      Icon: Globe,
      name: "Buitenland",
      description: "IQI Global Partnership • Dubai, Spanje, Bali ervaring",
      href: "/makelaars-buitenland",
      cta: "Meer info",
      className: "col-span-1 !bg-white dark:!bg-white border border-[var(--color-border)] shadow-sm",
      background: (
        <>
          <div className={cn("absolute inset-0 z-0", bgTint, usePhotos && "opacity-0") }>
            <svg
              className="absolute right-4 top-4 h-[230px] w-[230px] text-foreground"
              viewBox="0 0 240 240"
              fill="none"
              aria-hidden
            >
              <circle cx="120" cy="120" r="100" stroke="currentColor" strokeWidth="1" opacity="0.10" />
              {Array.from({ length: 5 }).map((_, i) => (
                <ellipse key={`lat-${i}`} cx="120" cy="120" rx={100 - i * 12} ry={100 - i * 24} stroke="currentColor" strokeWidth="1" opacity="0.07" />
              ))}
              {[ -60, -30, 30, 60 ].map((deg, i) => (
                <ellipse key={`lon-${i}`} cx="120" cy="120" rx="32" ry="100" transform={`rotate(${deg} 120 120)`} stroke="currentColor" strokeWidth="1" opacity="0.07" />
              ))}
              <g transform="translate(150 36)">
                <path d="M0 -10 C 5 -10 9 -6 9 -1 C 9 5 4 10 0 14 C -4 10 -9 5 -9 -1 C -9 -6 -5 -10 0 -10 Z" fill="var(--brand-500)" opacity="0.6" />
                <circle cx="0" cy="-2" r="3" fill="white" opacity="0.95" />
              </g>
            </svg>
          </div>
          <Image
            src="/images/internationaal.webp"
            alt="Buitenland"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className={cn("absolute inset-0 z-0 object-cover", usePhotos ? "opacity-100" : "opacity-0")}
          />
        </>
      ),
    },
    {
      Icon: Banknote,
      name: "Hypotheekadviseurs",
      description: "Onafhankelijk van offerte‑sites worden",
      href: "/hypotheekadviseurs",
      cta: "Meer info",
      className: "col-span-1 !bg-white dark:!bg-white border border-[var(--color-border)] shadow-sm",
      background: (
        <>
          <div className={cn("absolute inset-0 z-0", bgTint, usePhotos && "opacity-0") }>
            <svg
              className="absolute left-3 top-6 h-[220px] w-[340px] text-foreground"
              viewBox="0 0 340 220"
              fill="none"
              aria-hidden
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <path key={`h${i}`} d={`M0 ${30 + i * 36} H340`} stroke="currentColor" strokeWidth="1" opacity="0.06" />
              ))}
              {Array.from({ length: 6 }).map((_, i) => (
                <path key={`v${i}`} d={`M${20 + i * 54} 0 V220`} stroke="currentColor" strokeWidth="1" opacity="0.06" />
              ))}
              <path d="M20 180 C 80 160, 120 130, 160 110 C 200 90, 260 70, 320 60" stroke="currentColor" strokeWidth="2" opacity="0.18" fill="none" />
              <path d="M20 182 C 110 150, 180 120, 320 80" stroke="var(--brand-500)" strokeWidth="2" opacity="0.18" fill="none" />
              <circle cx="60" cy="160" r="8" stroke="currentColor" strokeWidth="1" opacity="0.12" />
            </svg>
          </div>
          <Image
            src="/images/hypotheekadviseur.jpg"
            alt="Hypotheekadviseurs"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className={cn("absolute inset-0 z-0 object-cover", usePhotos ? "opacity-100" : "opacity-0")}
          />
        </>
      ),
    },
    {
      Icon: Building,
      name: "Projectontwikkelaars",
      description: "Project marketing & events",
      href: "/projectontwikkelaars",
      cta: "Meer info",
      className: "col-span-1 !bg-white dark:!bg-white border border-[var(--color-border)] shadow-sm",
      background: (
        <>
          <div className={cn("absolute inset-0 z-0", bgTint, usePhotos && "opacity-0") }>
            <svg
              className="absolute left-2 top-3 h-[230px] w-[330px] text-foreground"
              viewBox="0 0 330 230"
              fill="none"
              aria-hidden
            >
              {/* ground line */}
              <path d="M0 200 H330" stroke="currentColor" strokeWidth="1" opacity="0.06" />

              {/* tower mast */}
              <g stroke="currentColor" strokeWidth="1" opacity="0.14">
                <rect x="60" y="60" width="18" height="130" />
                {Array.from({ length: 6 }).map((_, i) => (
                  <g key={`mast-${i}`}> 
                    <path d={`M60 ${60 + i * 22} H78`} />
                    <path d={`M60 ${71 + i * 22} H78`} />
                    <path d={`M60 ${60 + i * 22} L78 ${71 + i * 22}`} />
                    <path d={`M78 ${60 + i * 22} L60 ${71 + i * 22}`} />
                  </g>
                ))}
                <rect x="52" y="192" width="34" height="10" />
              </g>

              {/* operator cabin */}
              <g opacity="0.16" stroke="currentColor" strokeWidth="1" fill="none">
                <rect x="78" y="70" width="18" height="16" />
                <path d="M96 78 h8" />
              </g>

              {/* jib (main arm) */}
              <g opacity="0.16" stroke="currentColor" strokeWidth="1" fill="none">
                <path d="M78 72 H270" />
                {Array.from({ length: 9 }).map((_, i) => (
                  <path key={`tri-${i}`} d={`M${82 + i * 20} 72 l16 0 l-16 10 Z`} />
                ))}
              </g>

              {/* counter-jib */}
              <g opacity="0.12" stroke="currentColor" strokeWidth="1" fill="none">
                <path d="M60 78 H28" />
                <path d="M60 72 H38" />
                <rect x="22" y="70" width="12" height="10" />
              </g>

              {/* trolley */}
              <g opacity="0.18" stroke="currentColor" strokeWidth="1" fill="var(--brand-500)" fillOpacity="0.08">
                <rect x="188" y="68" width="12" height="8" />
              </g>

              {/* hook and load */}
              <g stroke="currentColor" strokeWidth="1" opacity="0.16" fill="none">
                <path d="M194 76 V140" />
                <path d="M194 140 q6 6 0 12 q-6 -6 0 -12 Z" />
                <rect x="180" y="152" width="28" height="18" opacity="0.12" />
              </g>
            </svg>
          </div>
          <Image
            src="/images/projectontwikkelaar.webp"
            alt="Projectontwikkelaars"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className={cn("absolute inset-0 z-0 object-cover", usePhotos ? "opacity-100" : "opacity-0")}
          />
        </>
      ),
    },
  ];

  return (
    <section className="light-scope relative isolate overflow-hidden bg-[var(--brand-300-soft,var(--brand-300))] text-black">
      {/* gradient accents background (replaces boxes) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* subtle yellow halo centered; elongated and masked to fade top/bottom */}
        <div
          className="absolute inset-0 opacity-[0.18] [background:radial-gradient(60%_36%_at_50%_50%,color-mix(in_oklab,var(--brand-500)_11%,transparent),transparent_70%)] dark:[background:radial-gradient(60%_36%_at_50%_50%,color-mix(in_oklab,var(--brand-600)_14%,transparent),transparent_70%)] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-10 md:pt-12 pb-18 md:pb-24">
        <SectionHeader />

        <div className="mx-auto mt-10 max-w-6xl">
          <BentoGrid className="sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[18rem]">
            {items.map((item, idx) => (
              <BentoCard key={idx} {...item} tint={usePhotos ? "glass" : "none"} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}


