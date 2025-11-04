"use client";

import { Target, Lightbulb } from "lucide-react";

export interface BewezenAanpakSectionProps {
  kicker?: string
  title?: string
  subtitle?: string
  visualTitle?: string
  visualDescription?: string
  detailsTitle?: string
  points?: Array<{ icon: string; title: string; description: string }>
  quote?: string
}

export default function BewezenAanpakSection({
  kicker = 'Onze bewezen aanpak',
  title = 'Waarom onze campagnes succesvol zijn',
  subtitle = 'Onze campagnes leveren structureel meer afspraken en klanten op. We testen, meten en optimaliseren continu — zodat jij met zekerheid kunt groeien.',
  visualTitle = 'Continue optimalisatie',
  visualDescription = 'We testen, meten en verbeteren continu voor maximaal resultaat',
  detailsTitle = 'WAT MAAKT ONS ANDERS',
  points = [
    { icon: 'Target', title: 'Data gedreven', description: 'Elke beslissing is gebaseerd op data en tests' },
    { icon: 'Lightbulb', title: 'Bewezen strategieën', description: 'We gebruiken alleen wat werkt bij onze klanten' }
  ],
  quote = 'We testen, meten en optimaliseren continu — zodat jij met zekerheid kunt groeien.'
}: BewezenAanpakSectionProps) {
  const iconMap: Record<string, any> = { Target, Lightbulb };
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24 pt-[84px] md:pt-[120px] pb-[96px] md:pb-[132px] bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hypotheek-aanpak-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hypotheek-aanpak-grid)" className="text-[var(--neutral-900)]" />
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
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-black mb-6">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
              {kicker}
            </span>
          </div>

          {/* Two column layout: text left, visual content right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-black mb-6">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-black/70 leading-relaxed mb-8">
                {subtitle}
              </p>
            </div>

            {/* Visual element - could be image or illustration */}
            <div className="lg:order-last">
              <div className="relative overflow-hidden rounded-xl shadow-lg max-w-md mx-auto lg:mx-0 lg:max-w-none bg-black/[0.04] border border-black/10 p-6">
                <div className="text-center">
                  <div className="flex-shrink-0 w-16 h-16 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{visualTitle}</h3>
                  <p className="text-black/70 text-sm leading-relaxed">
                    {visualDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Approach Details */}
        <div className="mx-auto max-w-5xl">
          <div className="bg-black/[0.04] border border-black/10 rounded-xl p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-black">{detailsTitle}</h3>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {points.map((point, idx) => {
                const Icon = iconMap[point.icon] || Target;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center mt-0.5">
                      <Icon className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <p className="text-black font-semibold mb-1">{point.title}</p>
                      <p className="text-black/70 text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mission Statement */}
            <div className="bg-black/[0.06] border border-black/10 rounded-lg p-6 text-center">
              <p className="text-lg font-medium text-black/70 italic leading-relaxed">
                "{quote}"
              </p>
            </div>
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