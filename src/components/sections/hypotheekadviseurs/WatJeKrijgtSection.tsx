"use client";

import { CheckCircle2, Users, Target, Zap, BookOpen, Calendar, MessageSquare, Award, Leaf, TrendingUp, Gem, Handshake } from "lucide-react";

export interface WatJeKrijgtSectionProps {
  kicker?: string
  title?: string
  subtitle?: string
  services?: Array<{ icon: string; title: string; description: string; items: string[] }>
  supportTitle?: string
  supportSubtitle?: string
  supportItems?: Array<{ icon: string; title: string; description: string }>
  bonusIcon?: string
  bonusTitle?: string
  bonusDescription?: string
  bonusItems?: string[]
}

export default function WatJeKrijgtSection({
  kicker = 'Wat je krijgt',
  title = 'Alles wat je nodig hebt om onafhankelijk te worden',
  subtitle = 'Complete ondersteuning voor hypotheekadviseurs om onafhankelijk te worden van offerte-sites.',
  services = [
    { icon: 'Award', title: 'Edit BV Partnership', description: 'Toegang tot duurzaamheidsexpertise', items: ['Duurzaamheidsconsulten', 'Expert netwerk', 'Certificering'] },
    { icon: 'Target', title: 'Marketing Campagnes', description: 'Bewezen funnels en strategieën', items: ['Lead generation', 'Email campagnes', 'Social media'] }
  ],
  supportTitle = 'Persoonlijke Ondersteuning',
  supportSubtitle = 'Je krijgt niet alleen tools, maar ook de begeleiding om ze succesvol in te zetten',
  supportItems = [
    { icon: 'Calendar', title: 'Maandelijkse Hypotheek Bijeenkomsten', description: 'Sector-specifieke sessions met andere hypotheekadviseurs en experts' },
    { icon: 'MessageSquare', title: 'Wekelijkse Q&A Sessies', description: 'Live Zoom sessies met hypotheek marketing experts voor al je vragen' },
    { icon: 'Zap', title: 'Customer Success Manager', description: 'Persoonlijke begeleider met financiële sector ervaring voor jouw succes' },
    { icon: 'Target', title: 'Implementatie Ondersteuning', description: 'Hands-on hulp bij het opzetten van alle systemen en processen' }
  ],
  bonusIcon = 'Gem',
  bonusTitle = 'Bonus: Complete Transformatie',
  bonusDescription = 'Dit is niet alleen marketing - het is een complete business transformatie van transactionele leads naar relationele klanten die je expertise waarderen.',
  bonusItems = [
    'Geen Independer meer',
    'Betere marges',
    'Gewaardeerde expertise'
  ]
}: WatJeKrijgtSectionProps) {
  const iconMap: Record<string, any> = { CheckCircle2, Users, Target, Zap, BookOpen, Calendar, MessageSquare, Award, Leaf, TrendingUp, Gem, Handshake };
  return (
    <section className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,var(--bg-section)_15%,var(--bg-section)_85%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wat-krijg-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wat-krijg-grid)" className="text-foreground" />
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
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="mx-auto max-w-4xl mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || Target;
              const isFirst = idx === 0;
              return (
                <div
                  key={idx}
                  className={`bg-[var(--color-surface-3)] border ${isFirst ? 'border-[var(--brand-400)]/20' : 'border-[var(--color-border)]'} rounded-xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300`}
                >
                  {isFirst && <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-200)]" />}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[var(--brand-500)]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  {service.items && service.items.length > 0 && (
                    <ul className="space-y-2 mt-4">
                      {service.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                          <CheckCircle2 className="h-4 w-4 text-[var(--brand-500)] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Support & Begeleiding */}
        <div className="mx-auto max-w-5xl mb-12">
          <div className="bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-400)]/10 flex items-center justify-center">
                  <Handshake className="h-6 w-6 text-[var(--brand-500)]" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{supportTitle}</h3>
              </div>
              <p className="text-[var(--color-text-secondary)]">
                {supportSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {supportItems.map((item, idx) => {
                const Icon = iconMap[item.icon] || Target;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-[var(--color-text-secondary)] text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bonus Section */}
        <div className="mx-auto max-w-4xl">
          <div className="bg-[var(--brand-400)]/5 border border-[var(--brand-400)]/20 rounded-xl p-8 text-center">
            <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              {(() => {
                const BonusIcon = iconMap[bonusIcon] || Gem;
                return <BonusIcon className="h-6 w-6 text-[var(--brand-500)]" />;
              })()}
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">{bonusTitle}</h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {bonusDescription}
            </p>

            <div className="grid md:grid-cols-3 gap-4 text-sm">
              {bonusItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 justify-center">
                  <CheckCircle2 className="h-4 w-4 text-[var(--brand-500)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}