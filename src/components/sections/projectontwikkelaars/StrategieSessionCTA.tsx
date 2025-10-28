"use client";

import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { useStrategyDialog } from "@/components/strategy/StrategySessionDialog";
import { Check, Calendar, ArrowRight } from "lucide-react";

export interface StrategieSessionCTAProps {
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaSubtext?: string;
}

export default function StrategieSessionCTA({
  title = "Klaar voor een",
  titleHighlight = "project strategiesessie",
  subtitle = "Benieuwd hoe jouw volgende project sneller en slimmer verkocht kan worden? Plan een vrijblijvende strategiesessie en krijg direct inzicht in jouw mogelijkheden.",
  bullets = [
    "Gratis project strategiesessie van 30 minuten",
    "Analyse van jouw huidige situatie en doelgroep",
    "Identificatie van snelle verkoop mogelijkheden",
    "Creatieve marketing strategieën voor jouw project",
    "Concreet stappenplan met slimme opvolging",
    "Inzicht in hoe wij jouw project sneller verkocht krijgen"
  ],
  ctaLabel = "Claim je gratis project strategiesessie",
  ctaSubtext = "Waarde €1000 • Volledig vrijblijvend • Beperkte plaatsen voor serieuze projectontwikkelaars"
}: StrategieSessionCTAProps) {
  const { openDialog } = useStrategyDialog() ?? { openDialog: () => {} };

  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24 bg-section">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(70%_70%_at_50%_45%,#161616,transparent)]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="strategycta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#strategycta-grid)" className="text-foreground" />
          </svg>
        </div>
        {/* Glow strip */}
        <div className="absolute left-1/2 top-[22%] h-40 w-[130vw] -translate-x-1/2 rotate-[6deg] bg-[linear-gradient(90deg,transparent,rgba(255,215,0,0.12),transparent)] blur-[26px]" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_48%,transparent,rgba(22,22,22,0.06))]" />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        {/* Title */}
        <h2 className="mx-auto max-w-3xl text-center type-h2 mb-4">
          {title}
          <span className="mx-2 inline-block bg-gradient-to-r from-[var(--brand-200)] via-[var(--brand-500)] to-[var(--brand-200)] bg-clip-text text-transparent">
            {titleHighlight}
          </span>
          ?
        </h2>

        <p className="mx-auto max-w-2xl text-center type-body text-[var(--color-text-secondary)] mb-10">
          {subtitle}
        </p>

        {/* Framed content */}
        <div className="relative mx-auto overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-3)] p-6 shadow-sm">
          <BorderBeam
            duration={12}
            size={120}
            colorFrom="var(--brand-500)"
            colorTo="var(--brand-200)"
            className="from-transparent via-[var(--brand-500)] to-transparent"
            borderWidth={1}
            initialOffset={18}
          />

          <div className="grid gap-6">
            <ul className="mx-auto max-w-2xl space-y-3 type-body text-[var(--color-text-secondary)]">
              {bullets.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 text-[var(--brand-500)]" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mx-auto w-full max-w-2xl">
              <Button
                onClick={openDialog}
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-500)_84%,transparent)] via-[var(--brand-500)] to-[var(--brand-200)] px-6 py-4 text-base font-bold tracking-wide text-[var(--color-accent-contrast)] shadow-[0_8px_30px_rgba(255,215,0,0.15)] ring-1 ring-[color-mix(in_oklab,var(--brand-500)_30%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(255,215,0,0.25)] focus-visible:ring-[color-mix(in_oklab,var(--brand-500)_60%,white)] h-auto min-h-[48px]"
                aria-label="Claim project strategiesessie"
              >
                {/* Shine sweep */}
                <span className="pointer-events-none absolute left-[-30%] top-[-200%] h-[400%] w-[30%] -rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)] opacity-30 transition-transform duration-700 ease-out group-hover:translate-x-[180%]" />
                {/* Content */}
                <span className="relative z-10 flex w-full items-center justify-center gap-2">
                  <Calendar className="h-4 w-4 -translate-y-[1px] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:rotate-12" />
                  <span>{ctaLabel}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
                </span>
                {/* Soft glow overlay for contrast in dark mode */}
                <span className="pointer-events-none absolute inset-0 rounded-[inherit] [box-shadow:inset_0_0_0_1px_color-mix(in_oklab,white_30%,transparent)]" />
              </Button>
              <p className="mt-3 text-center type-caption text-[var(--color-text-muted)]">
                {ctaSubtext}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}