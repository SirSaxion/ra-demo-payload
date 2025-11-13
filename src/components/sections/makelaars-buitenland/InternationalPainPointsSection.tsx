"use client";

import { Button } from "@/components/ui/button";
import { useStrategyDialog } from "@/components/strategy/StrategySessionDialog";
import { Globe, Users, DollarSign, AlertTriangle } from "lucide-react";
import Image from "next/image";

export interface InternationalPainPointsSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  painPoints?: Array<{
    icon: string
    title: string
    description: string
    image?: string
  }>
  bottomInsightIcon?: string
  bottomInsightText?: string
}

export default function InternationalPainPointsSection({
  badge = 'Internationale uitdagingen',
  title = 'Herken jij deze uitdagingen bij internationale vastgoedverkoop?',
  subtitle = 'Elke markt werkt anders en vergt een specifieke aanpak. We begrijpen de uitdagingen waar projectontwikkelaars tegenaan lopen.',
  painPoints = [
    {
      icon: 'Globe',
      title: 'Markten & cultuurverschillen',
      description: 'Elke markt werkt anders: regelgeving, gewoontes en verwachtingen verschillen sterk tussen Bali, Spanje en Oostenrijk.',
      image: '/media/placeholder.jpg'
    },
    {
      icon: 'Users',
      title: 'Beperkt bereik onder kopers',
      description: 'Traditionele advertenties of portals leveren vooral nieuwsgierigen op — geen concrete kopers uit Nederland of Duitsland.',
      image: '/media/placeholder.jpg'
    },
    {
      icon: 'DollarSign',
      title: 'Gebrek aan lokale opvolging',
      description: 'Leads worden niet goed opgevolgd door tijdzones, taal of gebrek aan lokale partners die Nederlandse kopers begrijpen.',
      image: '/media/placeholder.jpg'
    },
    {
      icon: 'AlertTriangle',
      title: 'Geen grip op marketingkosten',
      description: 'Hoge uitgaven aan marketing en events zonder meetbaar rendement. Je investeert veel, maar ziet weinig concrete resultaten.',
      image: '/media/placeholder.jpg'
    }
  ],
  bottomInsightIcon = 'AlertTriangle',
  bottomInsightText = '<strong>Het resultaat:</strong> Je project krijgt aandacht, maar geen verkopen'
}: InternationalPainPointsSectionProps) {
  const { openDialog } = useStrategyDialog();
  const iconMap: Record<string, any> = { Globe, Users, DollarSign, AlertTriangle };

  return (
    <section className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,var(--bg-section)_15%,var(--bg-section)_85%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="international-pain-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#international-pain-grid)" className="text-foreground" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)] mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Pain Points Grid with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, idx) => {
            const Icon = iconMap[point.icon] || AlertTriangle;
            return (
              <div key={idx} className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-3)] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {point.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={point.image}
                      alt={point.title}
                      width={400}
                      height={300}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-3)] to-transparent" />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom insight */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-3 bg-[var(--color-surface-3)] backdrop-blur-sm border border-[var(--color-border)] rounded-xl px-6 py-4 shadow-sm">
            {(() => {
              const BottomIcon = iconMap[bottomInsightIcon] || AlertTriangle;
              return <BottomIcon className="h-6 w-6 text-[var(--brand-400)]" />;
            })()}
            <p className="text-sm font-medium text-[var(--color-text-secondary)]" dangerouslySetInnerHTML={{ __html: bottomInsightText }} />
          </div>
        </div>
      </div>
    </section>
  );
}
