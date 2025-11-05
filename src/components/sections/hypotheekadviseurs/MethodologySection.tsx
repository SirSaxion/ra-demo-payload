"use client";

import { Target, Lightbulb, TrendingUp, Rocket, Handshake } from "lucide-react";

export interface MethodologySectionProps {
  kicker?: string
  title?: string
  subtitle?: string
  steps?: Array<{
    number: string
    icon: string
    title: string
    description: string
  }>
}

export default function MethodologySection({
  kicker = 'Onze hypotheek methodologie',
  title = 'Zo maken wij jouw praktijk onafhankelijk',
  subtitle = 'In 4 stappen van afhankelijk naar onafhankelijk',
  steps = [
    { number: 'Stap 1', icon: 'Target', title: 'IDEALE KLANTPROFIEL', description: 'We brengen jouw doelgroep en aanbod helder in kaart' },
    { number: 'Stap 2', icon: 'Lightbulb', title: 'WAARDEPROPOSITIE', description: 'We combineren hypotheekadvies met duurzaamheidsexpertise' },
    { number: 'Stap 3', icon: 'TrendingUp', title: 'MARKETING CAMPAGNE', description: 'We bouwen funnels die leads voor je werven' },
    { number: 'Stap 4', icon: 'Handshake', title: 'CONTINUE SUPPORT', description: 'Begeleiding en optimalisatie voor groei' }
  ]
}: MethodologySectionProps) {
  const iconMap: Record<string, any> = { Target, Lightbulb, TrendingUp, Rocket, Handshake };
  return (
    <section className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="methodology-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#methodology-grid)" className="text-foreground" />
        </svg>
      </div>

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
          {subtitle && <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        {/* Methodology Steps Grid */}
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, idx) => {
              const Icon = iconMap[step.icon] || Target;
              return (
                <div key={idx} className="relative group">
                  <div className="bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl p-6 md:p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_color-mix(in_oklab,var(--neutral-900)_15%,transparent)] hover:border-[var(--brand-400)]/30">
                    <span className="pointer-events-none absolute -right-2 -top-2 z-10 rotate-[-10deg] select-none rounded-md border px-2.5 py-1 text-sm font-extrabold shadow-md bg-[var(--brand-500)] text-[var(--color-accent-contrast)] border-[color-mix(in_oklab,var(--brand-700)_45%,transparent)]">
                      {step.number}
                    </span>

                    <div className="text-center mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-[var(--brand-500)]" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    </div>

                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}