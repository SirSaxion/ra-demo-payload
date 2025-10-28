"use client";

import React from "react";
import { Check, Gem, Globe } from "lucide-react";

export interface InternationalWhatYouGetSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  services?: string[]
  guaranteesTitle?: string
  guarantees?: Array<{
    icon: string
    title: string
    items: string[]
  }>
  bonusIcon?: string
  bonusTitle?: string
  bonusDescription?: string
  bonusItems?: string[]
}

export default function InternationalWhatYouGetSection({
  badge = 'Wat je krijgt',
  title = 'Complete internationale projectondersteuning',
  subtitle = 'Van campagne tot verkoop: wij zorgen voor de complete aanpak zodat jouw project internationaal succesvol wordt.',
  services = [
    'Campagne- & funnelopzet per land',
    'Videoproductie, visuals & landingspagina\'s',
    'Lead nurturing & opvolging via AI',
    'Lokale eventorganisatie & salesondersteuning',
    'Real-time dashboards & performance tracking',
    'Toegang tot IQI Global netwerk (40.000+ agents)'
  ],
  guaranteesTitle = 'Onze garanties',
  guarantees = [
    {
      icon: 'Check',
      title: 'Resultaatgarantie',
      items: ['• Geen resultaat = geen betaling', '• Risk-free samenwerking']
    },
    {
      icon: 'Globe',
      title: 'IQI Global Power',
      items: ['• 40.000+ professionals netwerk', '• 150+ awards & Forbes recognition']
    }
  ],
  bonusIcon = 'Gem',
  bonusTitle = 'BONUS: Lokale vertalingen & cultuurmatching',
  bonusDescription = 'Complete lokalisatie voor DACH- en Benelux-markten',
  bonusItems = ['• Professionele vertalingen voor alle landen', '• Cultuurspecifieke aanpak per doelgroep']
}: InternationalWhatYouGetSectionProps) {
  const iconMap: Record<string, any> = { Check, Gem, Globe };

  return (
    <section className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,var(--bg-section)_15%,var(--bg-section)_85%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="international-services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#international-services-grid)" className="text-foreground" />
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
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-[20px] p-8 md:p-12 max-w-4xl mx-auto shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          {/* Services List */}
          <ul className="mx-auto max-w-2xl space-y-4 type-body text-[var(--color-text-secondary)] mb-8">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 text-[var(--brand-500)] flex-shrink-0" />
                <span className="leading-relaxed">{service}</span>
              </li>
            ))}
          </ul>

          {/* Garanties Section */}
          <div className="relative overflow-hidden bg-gradient-to-r from-[var(--brand-400)]/10 via-[var(--brand-500)]/5 to-[var(--brand-600)]/10 border border-[var(--brand-400)]/20 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--brand-500)] text-black shadow-lg flex-shrink-0 mt-0.5">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {guaranteesTitle}
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {guarantees.map((guarantee, idx) => {
                    const Icon = iconMap[guarantee.icon] || Check;
                    return (
                      <div key={idx} className="text-sm">
                        <div className="font-bold mb-1 flex items-center gap-1">
                          <Icon className="h-3 w-3 text-[var(--brand-500)]" /> {guarantee.title}
                        </div>
                        {guarantee.items.map((item, itemIdx) => (
                          <div key={itemIdx}>{item}</div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bonus Section */}
          <div className="relative overflow-hidden bg-gradient-to-r from-[var(--brand-400)]/10 via-[var(--brand-500)]/5 to-[var(--brand-600)]/10 border border-[var(--brand-400)]/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--brand-500)] text-black shadow-lg flex-shrink-0 mt-0.5">
                {(() => {
                  const BonusIcon = iconMap[bonusIcon] || Gem;
                  return <BonusIcon className="w-5 h-5" />;
                })()}
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-foreground mb-1">
                  {bonusTitle}
                </h4>
                <p className="text-[var(--color-text-secondary)] mb-2">
                  {bonusDescription}
                </p>
                <div className="text-sm text-[var(--color-text-secondary)] space-y-1">
                  {bonusItems.map((item, idx) => (
                    <div key={idx}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
