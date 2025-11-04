"use client";

import { CheckCircle2, X, Target, TrendingUp, Leaf, CheckCircle, XCircle } from "lucide-react";

export interface VoorWieIsDitSectionProps {
  kicker?: string
  title?: string
  subtitle?: string
  perfectForTitle?: string
  perfectForItems?: Array<{ icon: string; title: string; description: string }>
  notForTitle?: string
  notForItems?: string[]
  bottomInsightText?: string
}

export default function VoorWieIsDitSection({
  kicker = 'Voor wie is dit?',
  title = 'Voor ambitieuze hypotheekadviseurs met groeidoelen',
  subtitle = 'Onze aanpak werkt het best voor adviseurs die klaar zijn voor verandering en onafhankelijkheid.',
  perfectForTitle = 'Perfect voor hypotheekadviseurs die:',
  perfectForItems = [
    { icon: 'Target', title: 'Groei ambitie', description: 'Verder willen groeien dan alleen hypotheekadvisering' },
    { icon: 'TrendingUp', title: 'Onafhankelijk', description: 'Weg willen van offerte-sites en prijsconcurrentie' },
    { icon: 'Leaf', title: 'Innovatie', description: 'Duurzaamheid als differentiator willen inzetten' }
  ],
  notForTitle = 'Niet geschikt voor:',
  notForItems = ['Adviseurs die tevreden zijn met status quo', 'Geen tijd hebben voor verandering', 'Alleen op prijs willen concurreren'],
  bottomInsightText = '<strong>Herken je jezelf?</strong> Dan ben je klaar voor de volgende stap naar onafhankelijkheid'
}: VoorWieIsDitSectionProps) {
  const iconMap: Record<string, any> = { Target, TrendingUp, Leaf, CheckCircle, XCircle };
  return (
    <section className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,var(--bg-section)_15%,var(--bg-section)_85%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="voor-wie-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#voor-wie-grid)" className="text-foreground" />
        </svg>
      </div>

      {/* Top subtle fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[color-mix(in_oklab,var(--neutral-900)_28%,transparent)] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)] mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {kicker}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Perfect For + Not Suitable Grid */}
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

            {/* Perfect Voor */}
            <div className="bg-[var(--color-surface-3)] border border-[var(--brand-400)]/20 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-[var(--brand-500)] via-[color-mix(in_oklab,var(--brand-500)_60%,var(--brand-200))] to-[var(--brand-200)]" />

              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-[var(--brand-500)]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{perfectForTitle}</h3>
              </div>

              <div className="space-y-6">
                {perfectForItems.map((item, idx) => {
                  const Icon = iconMap[item.icon] || Target;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-xl flex items-center justify-center mt-1">
                        <Icon className="h-6 w-6 text-[var(--brand-500)]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Niet Geschikt Voor */}
            <div className="bg-[var(--color-surface-3)] border border-red-500/20 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-red-500 via-red-400 to-red-500" />

              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
                    <XCircle className="w-10 h-10 text-red-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{notForTitle}</h3>
              </div>

              <div className="space-y-4">
                {notForItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom insight */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-3 bg-[var(--color-surface-3)] backdrop-blur-sm border border-[var(--color-border)] rounded-xl px-6 py-4 shadow-sm">
            <Target className="h-6 w-6 text-[var(--brand-500)]" />
            <p className="text-sm font-medium text-[var(--color-text-secondary)]" dangerouslySetInnerHTML={{ __html: bottomInsightText }} />
          </div>
        </div>
      </div>
    </section>
  );
}