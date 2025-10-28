"use client";

import { Button } from "@/components/ui/button";
import { useStrategyDialog } from "@/components/strategy/StrategySessionDialog";
import { CheckCircle2, Clock, Award, Target, TrendingUp, Users, Lightbulb, Trophy } from "lucide-react";

export default function HypotheekStrategieSessionCTASection() {
  const { openDialog } = useStrategyDialog();

  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24 pt-[84px] md:pt-[120px] pb-[96px] md:pb-[132px] bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="strategy-cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#strategy-cta-grid)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>

      {/* Top wave */}
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <svg className="block h-[84px] w-full md:h-[120px] rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z" fill="var(--bg-section)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-black mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
            Klaar om te beginnen?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-black mb-6">
            Start jouw weg naar onafhankelijkheid
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Ontdek in 30 minuten hoe jij onafhankelijk kunt worden van offerte-sites met onze bewezen aanpak.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="mx-auto max-w-4xl">
          <div className="bg-black/[0.04] border border-black/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-[var(--brand-500)] via-[color-mix(in_oklab,var(--brand-500)_60%,var(--brand-200))] to-[var(--brand-200)]" />

            <div className="text-center mb-8">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-[var(--brand-500)]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Gratis Hypotheek Strategiesessie
              </h3>
              <p className="text-black/70 text-lg leading-relaxed">
                In 30 minuten ontdek je jouw hypotheek groei mogelijkheden en krijg je een concreet stappenplan
              </p>
            </div>

            {/* What You'll Discover */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h4 className="font-bold text-black mb-3">Wat je ontdekt:</h4>

                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-[var(--brand-600)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-black/70 text-sm leading-relaxed">
                      <strong className="text-black">Analyse van jouw huidige hypotheekpraktijk</strong> en identificatie van groeimogelijkheden
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-[var(--brand-600)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-black/70 text-sm leading-relaxed">
                      <strong className="text-black">Onafhankelijkheid roadmap</strong> specifiek voor jouw situatie en doelen
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-[var(--brand-600)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-black/70 text-sm leading-relaxed">
                      <strong className="text-black">Edit BV partnership voordelen</strong> en hoe dit jouw praktijk kan transformeren
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-black mb-3">Plus je krijgt:</h4>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-[var(--brand-600)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-black/70 text-sm leading-relaxed">
                      <strong className="text-black">Concreet stappenplan</strong> voor de eerste 90 dagen naar onafhankelijkheid
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--brand-600)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-black/70 text-sm leading-relaxed">
                      <strong className="text-black">Kennismaking met onze bewezen werkwijze</strong> en team
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-[var(--brand-600)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-black/70 text-sm leading-relaxed">
                      <strong className="text-black">BONUS: Duurzaamheid strategieën</strong> voor nieuwe business (ter waarde van €500)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                onClick={openDialog}
                size="lg"
                className="rounded-xl bg-[var(--brand-400)] px-8 py-6 text-lg font-bold text-[var(--color-accent-contrast)] shadow-[0_8px_24px_rgba(255,215,0,0.28)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--brand-500)] mb-4"
              >
                Claim Je Gratis Hypotheek Strategiesessie
              </Button>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-black/70 mt-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[var(--brand-600)]" />
                  <span>30 minuten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--brand-600)]" />
                  <span>Gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-[var(--brand-600)]" />
                  <span>Vrijblijvend</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-[var(--brand-600)]" />
                  <span>Waarde €1000</span>
                </div>
              </div>

              <p className="text-xs text-black/60 mt-4 italic flex items-center justify-center gap-1">
                <Lightbulb className="h-3 w-3 text-[var(--brand-500)]" /> "Beperkte plaatsen - alleen voor ambitieuze hypotheekadviseurs die klaar zijn voor verandering"
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof Strip */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-3 bg-black/[0.04] backdrop-blur-sm border border-black/10 rounded-xl px-6 py-4 shadow-sm">
            <Trophy className="h-6 w-6 text-[var(--brand-500)]" />
            <p className="text-sm font-medium text-black/70">
              <strong className="text-black">Al 50+ hypotheekadviseurs geholpen</strong> naar onafhankelijkheid van offerte-sites
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg className="block h-[84px] w-full md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z" fill="var(--bg-section)" />
        </svg>
      </div>
    </section>
  );
}