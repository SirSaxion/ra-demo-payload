import React from "react";
import { Target, Zap, TrendingUp, ArrowRight, Hammer, type LucideIcon } from "lucide-react";

export interface ProcessShowcaseProps {
  badge?: string
  title?: string
  subtitle?: string
  steps?: Array<{
    number: string
    title: string
    subtitle: string
    icon: string
    items: string[]
    timeline: string
  }>
}

const ProcessShowcase = ({
  badge = "Onze Methodologie",
  title = "Drie stappen naar voorspelbare groei",
  subtitle = "Onze bewezen 3-stappen methodologie heeft al honderden vastgoedprofessionals geholpen hun bedrijf te laten groeien.",
  steps = [
    {
      number: "1",
      title: "Strategische Analyse",
      subtitle: "Huidige situatie & doelen in kaart",
      icon: "Target",
      items: [
        "Doelgroep & regio's (exclusiviteit per regio)",
        "Knelpunten die groei remmen"
      ],
      timeline: "Week 1-2"
    },
    {
      number: "2",
      title: "Custom Marketing Systeem",
      subtitle: "Implementatie op maat",
      icon: "Hammer",
      items: [
        "Huidige website, campagnes en CRM in kaart",
        "Doelen afgestemd op resultaatgaranties"
      ],
      timeline: "Week 3-4"
    },
    {
      number: "3",
      title: "Resultaten & Optimalisatie",
      subtitle: "Meetbare groei realiseren",
      icon: "TrendingUp",
      items: [
        "Meetbare resultaten en groei",
        "Schaalbaarheid voor lange termijn groei"
      ],
      timeline: "Maand 2+"
    }
  ]
}: ProcessShowcaseProps) => {

  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24 pt-[84px] md:pt-[120px] pb-[96px] md:pb-[132px] bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* subtle grid for depth on yellow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="process-yellow-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-yellow-grid)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>

      {/* Top wave divider from previous (dark) section */}
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <svg
          className="block h-[84px] w-full md:h-[120px] rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z"
            fill="var(--bg-section)"
          />
        </svg>
      </div>

      <div className="mx-auto mt-6 max-w-[90rem] px-2 md:px-4 lg:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-black mb-6">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
              {badge}
            </span>
            
            <h2 className="mx-auto mt-2 max-w-4xl text-center type-h2 text-black">
              {title}
            </h2>
            <p className="text-base md:text-lg text-black/80 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {steps.map((step, index) => {
              const iconMap: Record<string, LucideIcon> = { Target, Hammer, TrendingUp, Zap }
              const Icon = iconMap[step.icon] || Target
              
              return (
              <div key={index} className="relative group">
                {/* Connecting Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-[var(--brand-700)]" />
                  </div>
                )}

                {/* Step Card */}
                <div className="relative overflow-visible flex h-full min-h-[180px] flex-col rounded-xl border p-6 transition will-change-transform hover:shadow-lg hover:-translate-y-px motion-reduce:hover:translate-y-0 motion-reduce:transition-none border-black/10 bg-black/[0.04]">
                  {/* Step Number Badge */}
                  <span className="pointer-events-none absolute -right-2 -top-2 z-10 rotate-[-10deg] select-none rounded-md border px-2.5 py-1 text-sm font-extrabold shadow-md bg-[var(--brand-500)] text-[var(--color-accent-contrast)] border-[color-mix(in_oklab,var(--brand-700)_45%,transparent)]">
                    Stap {step.number}
                  </span>
                  
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-black" />
                    </div>
                  </div>
                  
                  {/* Step Title */}
                  <div className="type-small uppercase tracking-wide whitespace-nowrap truncate text-black mb-2">
                    {step.title}
                  </div>
                  
                  {/* Step Subtitle */}
                  <div className="mt-1 flex items-baseline gap-2 mb-4">
                    <div className="type-h4 !font-bold text-black">
                      {step.subtitle}
                    </div>
                  </div>

                  {/* Step Details */}
                  <div className="space-y-3 mb-4 flex-grow">
                    {step.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[var(--brand-700)]"></div>
                        <p className="text-black/70 text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Timeline */}
                  <div className="mt-auto pt-2">
                    <div className="type-caption text-black/70">{step.timeline}</div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>

      {/* Bottom wave divider into next section (different shape from top) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg
          className="block h-[84px] w-full md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,40 C 240,60 520,30 820,55 S 1100,85 1200,70 L1200,120 L0,120 Z"
            fill="var(--bg-section)"
          />
        </svg>
      </div>
    </section>
  );
};

export default ProcessShowcase;
