"use client";

import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { Check, Rocket, ArrowRight } from "lucide-react";

export interface StartYourStoryProps {
  badge?: string
  title?: string
  titleHighlight?: string
  benefits?: string[]
  ctaLabel?: string
  ctaSubtext?: string
  ctaFootnote?: string
}

export default function StartYourStory({
  badge = "Start Jouw Verhaal",
  title = "WORD DE VOLGENDE",
  titleHighlight = "SUCCES STORY",
  benefits = [
    "Analyse huidige situatie en groeidoelen",
    "Identificatie knelpunten die jou tegenhouden",
    "Concreet plan om doelstellingen te behalen"
  ],
  ctaLabel = "Claim je gratis strategiesessie",
  ctaSubtext = "30 minuten • Gratis • Vrijblijvend",
  ctaFootnote = "📅 \"Beperkte plaatsen - alleen voor serieuze groeiers\""
}: StartYourStoryProps) {
  return (
    <section className="relative isolate overflow-hidden py-24 bg-section">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(70%_70%_at_50%_45%,#161616,transparent)]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="startyourstory-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#startyourstory-grid)" className="text-foreground" />
          </svg>
        </div>
        {/* Glow strip */}
        <div className="absolute left-1/2 top-[22%] h-40 w-[130vw] -translate-x-1/2 rotate-[6deg] bg-[linear-gradient(90deg,transparent,rgba(255,215,0,0.12),transparent)] blur-[26px]" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_48%,transparent,rgba(22,22,22,0.06))]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {badge}
          </span>
          <h2 className="mx-auto mt-2 max-w-4xl text-center type-h2 text-foreground">
            {title}
            <span className="mx-2 inline-block bg-gradient-to-r from-[var(--brand-200)] via-[var(--brand-500)] to-[var(--brand-200)] bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </h2>
        </div>

        {/* Content Card */}
        <div className="bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-[20px] p-8 max-w-4xl mx-auto shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="text-center mb-8">
          </div>

          <ul className="mx-auto max-w-2xl space-y-3 type-body text-[var(--color-text-secondary)] mb-8">
            {benefits.map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 text-[var(--brand-500)]" />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mx-auto w-full max-w-2xl">
            <Button
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-500)_84%,transparent)] via-[var(--brand-500)] to-[var(--brand-200)] px-6 py-4 text-base font-bold tracking-wide text-[var(--color-accent-contrast)] shadow-[0_8px_30px_rgba(255,215,0,0.15)] ring-1 ring-[color-mix(in_oklab,var(--brand-500)_30%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(255,215,0,0.25)] focus-visible:ring-[color-mix(in_oklab,var(--brand-500)_60%,white)] h-auto min-h-[48px]"
              aria-label="Claim je gratis strategiesessie"
            >
              {/* Shine sweep */}
              <span className="pointer-events-none absolute left-[-30%] top-[-200%] h-[400%] w-[30%] -rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)] opacity-30 transition-transform duration-700 ease-out group-hover:translate-x-[180%]" />
              {/* Content */}
              <span className="relative z-10 flex w-full items-center justify-center gap-2">
                <Rocket className="h-4 w-4 -translate-y-[1px] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:rotate-12" />
                <span>{ctaLabel}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
              </span>
              {/* Soft glow overlay for contrast in dark mode */}
              <span className="pointer-events-none absolute inset-0 rounded-[inherit] [box-shadow:inset_0_0_0_1px_color-mix(in_oklab,white_30%,transparent)]" />
            </Button>
            <p className="mt-3 text-center type-caption text-[var(--color-text-muted)]">
              {ctaSubtext}
            </p>
            <p className="text-center text-xs text-[var(--color-text-muted)] mt-2">
              {ctaFootnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
