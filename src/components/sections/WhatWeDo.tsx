"use client";

import { useMemo } from "react";
import { Globe, GaugeCircle, Target, Repeat, PhoneCall, Palette } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

function SectionHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-1.5 type-kicker font-medium text-[var(--color-text-secondary)]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
        WAT WIJ VOOR JE DOEN
      </div>
      <h2 className="mt-4 type-h2 text-foreground">
        Complete marketing machine voor vastgoedprofessionals
      </h2>
      <p className="mt-2 type-body text-[var(--color-text-secondary)]">
        Van eerste indruk tot deal: websites, leadgeneratie, vindbaarheid en opvolging in één systeem.
      </p>
    </div>
  );
}

const bgTint = "[mask-image:linear-gradient(to_top,transparent_15%,var(--bg-section)_110%)]";

export default function WhatWeDoSection() {
  const features = useMemo(() => {
    return [
      {
        Icon: Globe,
        name: "Websites",
        description: "Professionele websites die converteren. SEO, responsive, en lead-capture ingebouwd.",
        href: "/cases",
        cta: "Bekijk voorbeelden",
        className: "col-span-1",
        background: (
          <div className={cn("absolute inset-0", bgTint)}>
            <div className="absolute right-0 top-8 h-40 w-40 rounded-full bg-[color-mix(in_oklab,var(--brand-500)_18%,transparent)] blur-2xl" />
            <div className="absolute bottom-6 left-6 h-24 w-56 rotate-[8deg] bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--brand-500)_18%,transparent),transparent)] blur-lg" />
          </div>
        ),
      },
      {
        Icon: Target,
        name: "Leadgeneratie",
        description: "Kwalitatieve leads via Meta & Google. Slim targetten voor maximaal resultaat.",
        href: "/cases",
        cta: "Zo werkt het",
        className: "col-span-1",
        background: (
          <div className={cn("absolute inset-0", bgTint)}>
            <svg className="absolute right-4 top-6 h-[280px] w-[520px] opacity-80" viewBox="0 0 520 280" aria-hidden>
              <defs>
                <linearGradient id="wwd-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="var(--brand-200)" stopOpacity="0.45" />
                </linearGradient>
              </defs>
              <path d="M0 220 C 80 240, 160 180, 240 200 S 400 180, 520 120" fill="none" stroke="url(#wwd-line)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        ),
      },
      {
        Icon: GaugeCircle,
        name: "Vindbaarheid",
        description: "SEO optimalisatie, Google Business en content die je gevonden laat worden.",
        href: "/cases",
        cta: "Onze aanpak",
        className: "col-span-1",
        background: (
          <div className={cn("absolute inset-0", bgTint)}>
            <div className="absolute -left-6 top-10 h-28 w-28 rounded-full border border-[var(--color-border)]" />
            <div className="absolute left-10 top-20 h-20 w-20 rounded-full border border-[var(--color-border)]" />
            <div className="absolute left-24 top-28 h-12 w-12 rounded-full border border-[var(--color-border)]" />
          </div>
        ),
      },
      {
        Icon: Repeat,
        name: "Heractivatie",
        description: "Email en SMS flows die slapende leads wakker maken met relevante triggers.",
        href: "/cases",
        cta: "Voorbeeldflows",
        className: "col-span-1",
        background: (
          <div className={cn("absolute inset-0", bgTint)}>
            <div className="absolute right-10 top-10 h-8 w-8 rounded-full bg-[var(--brand-500)]/20" />
            <div className="absolute right-6 top-20 h-6 w-6 rounded-full bg-[var(--brand-500)]/30" />
            <div className="absolute right-3 top-28 h-4 w-4 rounded-full bg-[var(--brand-500)]/40" />
          </div>
        ),
      },
      {
        Icon: PhoneCall,
        name: "Leads opvolgen",
        description: "CRM, automatische follow‑ups en appointment setting. Geen lead meer verloren.",
        href: "/cases",
        cta: "Zie systeem",
        className: "col-span-1",
        background: (
          <div className={cn("absolute inset-0", bgTint)}>
            <div className="absolute bottom-8 left-8 h-12 w-40 bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--brand-500)_18%,transparent),transparent)] blur-md" />
          </div>
        ),
      },
      {
        Icon: Palette,
        name: "Branding",
        description: "Sterke merkidentiteit: logo, huisstijl en contentstrategie die vertrouwen wekt.",
        href: "/cases",
        cta: "Bekijk werk",
        className: "col-span-1",
        background: (
          <div className={cn("absolute inset-0", bgTint)}>
            <div className="absolute right-8 top-10 h-6 w-28 rotate-6 rounded-full bg-[var(--brand-500)]/15" />
            <div className="absolute right-14 top-24 h-6 w-24 -rotate-6 rounded-full bg-[var(--brand-500)]/15" />
          </div>
        ),
      },
    ];
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-section">
      {/* subtle grid tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [mask-image:radial-gradient(70%_70%_at_50%_40%,black,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wwd-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wwd-grid)" className="text-foreground" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-18 md:py-24">
        <SectionHeader />

        <div className="mx-auto mt-10 max-w-6xl">
          <BentoGrid className="lg:auto-rows-[20rem]">
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>

        {/* CTA removed as requested */}
      </div>
    </section>
  );
}


