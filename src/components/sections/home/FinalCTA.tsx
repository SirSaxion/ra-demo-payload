"use client";

import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { useStrategyDialog } from "@/components/strategy/StrategySessionDialog";
import { Check, Rocket, ArrowRight } from "lucide-react";
import Image from "next/image";

interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  bullets?: string[];
  phone?: string;
}

export default function FinalCTA({
  title = "Klaar om te groeien?",
  subtitle = "Plan een kennismakingsgesprek en ontdek wat we voor jou kunnen betekenen",
  ctaLabel = "Plan een bakkie",
  ctaHref = "mailto:info@realaccelerate.nl",
  bullets = [
    "Analyse huidige situatie en groeidoelen",
    "Identificatie knelpunten die jou tegenhouden",
    "Concreet plan om doelstellingen te behalen",
  ],
  phone = "085 060 2989",
}: FinalCTAProps = {}) {
  const { openDialog } = useStrategyDialog() ?? { openDialog: () => {} };

  return (
    <section className="relative isolate overflow-hidden box-border min-h-[100svh] pb-8 md:pb-12 bg-section">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(70%_70%_at_50%_45%,#161616,transparent)]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="finalcta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#finalcta-grid)" className="text-foreground" />
          </svg>
        </div>
        {/* Glow strip */}
        <div className="absolute left-1/2 top-[22%] h-40 w-[130vw] -translate-x-1/2 rotate-[6deg] bg-[linear-gradient(90deg,transparent,rgba(255,215,0,0.12),transparent)] blur-[26px]" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_48%,transparent,rgba(22,22,22,0.06))]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-24 pb-20 md:pb-28">
        {/* Team Photo */}
        <div className="relative mx-auto mb-6 md:mb-8 h-[15.4rem] md:h-[22rem] w-auto max-w-full">
          <Image
            src="/media/teamfoto_einde-640x480.png"
            alt="Teamfoto"
            width={800}
            height={352}
            loading="lazy"
            className="mx-auto h-[15.4rem] md:h-[22rem] w-auto max-w-full object-contain [-webkit-mask-image:linear-gradient(to_top,transparent_0%,var(--bg-section)_12%,var(--bg-section)_100%)] [mask-image:linear-gradient(to_top,transparent_0%,var(--bg-section)_12%,var(--bg-section)_100%)]"
          />
        </div>
        {/* Title */}
        <h2 className="mx-auto mt-2 max-w-4xl text-center type-h2">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-center type-body text-[var(--color-text-secondary)]">
            {subtitle}
          </p>
        )}

        {/* Framed content */}
        <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-3)] p-6 shadow-sm">
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
                asChild
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-500)_84%,transparent)] via-[var(--brand-500)] to-[var(--brand-200)] px-6 py-4 text-base font-bold tracking-wide text-[var(--color-accent-contrast)] shadow-[0_8px_30px_rgba(255,215,0,0.15)] ring-1 ring-[color-mix(in_oklab,var(--brand-500)_30%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(255,215,0,0.25)] focus-visible:ring-[color-mix(in_oklab,var(--brand-500)_60%,white)] h-auto min-h-[48px]"
                aria-label="Neem contact op"
              >
                <a href={ctaHref}>
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
                </a>
              </Button>
              <p className="mt-3 text-center type-caption text-[var(--color-text-muted)]">
                Bel direct: {phone} • Vrijblijvend
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}


