"use client";

import { Target, Video, Zap, Calendar, BarChart3, Rocket } from "lucide-react";

export interface InternationalMethodologySectionProps {
  badge?: string
  title?: string
  steps?: Array<{
    icon: string
    title: string
    stepLabel: string
    description: string
  }>
  bottomInsightIcon?: string
  bottomInsightText?: string
}

export default function InternationalMethodologySection({
  badge = 'Onze internationale methodologie',
  title = 'Zo vermarkten wij jouw buitenlandse vastgoedproject',
  steps = [
    {
      icon: 'Target',
      title: 'MARKTANALYSE & POSITIONERING',
      stepLabel: 'Stap 1',
      description: 'We analyseren jouw project, doelgroep en propositie. Wat spreekt kopers in Nederland, Duitsland of België écht aan?'
    },
    {
      icon: 'Video',
      title: 'STORYTELLING & CONTENTCREATIE',
      stepLabel: 'Stap 2',
      description: 'Video, fotografie en copy die emotie en vertrouwen wekken — lokaal én internationaal.'
    },
    {
      icon: 'Zap',
      title: 'CAMPAGNES & AUTOMATION',
      stepLabel: 'Stap 3',
      description: 'Online campagnes via Meta, Google en e-mailfunnels met eventueel AI-opvolging via WhatsApp.'
    },
    {
      icon: 'Calendar',
      title: 'EVENTS & ROADSHOWS',
      stepLabel: 'Stap 4',
      description: 'We organiseren exclusieve events in Nederland en België waar geïnteresseerden jouw project live beleven.'
    },
    {
      icon: 'BarChart3',
      title: 'SALES & RAPPORTAGE',
      stepLabel: 'Resultaat',
      description: 'Wij koppelen leads direct aan jou of lokale verkoopteams, inclusief ROI-tracking en opvolgtools.'
    }
  ],
  bottomInsightIcon = 'Rocket',
  bottomInsightText = '<strong>Het resultaat:</strong> Van aandacht naar concrete verkopen in 5 bewezen stappen'
}: InternationalMethodologySectionProps) {
  const iconMap: Record<string, any> = { Target, Video, Zap, Calendar, BarChart3, Rocket };
  return (
    <section className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,var(--bg-section)_15%,var(--bg-section)_85%,transparent)]">
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
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-foreground mb-4">
            {title}
          </h2>
        </div>

        {/* Methodology Steps */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 ${
          steps.length === 2 ? 'lg:grid-cols-2' :
          steps.length === 3 ? 'lg:grid-cols-3' :
          steps.length === 4 ? 'lg:grid-cols-4' :
          'lg:grid-cols-5'
        }`}>
          {steps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Target;
            return (
              <div key={idx} className="relative group">
                <div className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-3)] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_color-mix(in_oklab,var(--neutral-900)_25%,transparent)]">
                  {/* Icon header */}
                  <div className="relative h-32 bg-gradient-to-br from-[var(--brand-300)] to-[var(--brand-400)] flex items-center justify-center">
                    <Icon className="h-12 w-12 text-[var(--color-accent-contrast)]" />
                  </div>

                  <div className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-lg md:text-xl font-bold text-foreground tracking-tight mb-2">
                        {step.title}
                      </h3>
                      <div className="inline-flex items-center px-3 py-1 bg-[var(--brand-400)]/10 text-[var(--brand-600)] rounded-full text-xs font-semibold">
                        {step.stepLabel}
                      </div>
                    </div>

                    <p className="text-[var(--color-text-secondary)] leading-relaxed text-center text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA insight */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-3 bg-[var(--color-surface-3)] backdrop-blur-sm border border-[var(--color-border)] rounded-xl px-6 py-4 shadow-sm">
            {(() => {
              const BottomIcon = iconMap[bottomInsightIcon] || Rocket;
              return <BottomIcon className="h-6 w-6 text-[var(--brand-500)]" />;
            })()}
            <p className="text-sm font-medium text-[var(--color-text-secondary)]" dangerouslySetInnerHTML={{ __html: bottomInsightText }} />
          </div>
        </div>
      </div>
    </section>
  );
}
