"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useStrategyDialog } from "@/components/strategy/StrategySessionDialog";
import { CheckCircle2, Globe, Award, DollarSign, Users } from "lucide-react";
import { Globe as GlobeComponent } from "@/components/ui/globe";

export interface MakelaarsInternationalHeroProps {
  badgeText?: string
  iqiBadgeTitle?: string
  iqiStats?: Array<{ icon: string; text: string }>
  countriesBadge?: string
  quoteText?: string
  title?: string
  subtitle?: string
  achievements?: Array<{ icon: string; text: string }>
  ctaPrimary?: { label: string; action: string }
  ctaSecondary?: { label: string; href: string }
}

export default function MakelaarsInternationalHero({
  badgeText = 'Voor internationale projectontwikkelaars',
  iqiBadgeTitle = 'IQI Global Partner',
  iqiStats = [
    { icon: 'Award', text: '150+ International Awards' },
    { icon: 'DollarSign', text: '$50+ Billion Transactions' },
    { icon: 'Users', text: '40.000+ Agents Worldwide' }
  ],
  countriesBadge = 'Dubai • Spanje • Bali',
  quoteText = 'Bewezen resultaten in internationale projectverkoop',
  title = 'Meer kopers voor jouw buitenlandse vastgoedproject',
  subtitle = 'Real Accelerate helpt projectontwikkelaars en makelaars in het buitenland met het genereren van kwalitatieve leads én concrete verkopen.',
  achievements = [
    { icon: 'CheckCircle2', text: 'Bali: 400+ leads, 15 verkochte units in 3 maanden' },
    { icon: 'CheckCircle2', text: 'Spanje: 200+ warme leads, 10% conversie naar afspraak' },
    { icon: 'CheckCircle2', text: 'Oostenrijk: Project volledig uitverkocht' }
  ],
  ctaPrimary = { label: 'Plan een gratis groeigesprek', action: 'openDialog' },
  ctaSecondary = { label: 'Bekijk internationale cases', href: '#cases' }
}: MakelaarsInternationalHeroProps) {
  const { openDialog } = useStrategyDialog();
  const iconMap: Record<string, any> = { CheckCircle2, Globe, Award, DollarSign, Users };

  return (
    <section className="relative isolate overflow-hidden bg-hero text-foreground pt-[var(--nav-h)] [--nav-h:56px] md:[--nav-h:76px]">
      {/* Subtle brand glow overlays */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_35%,color-mix(in_oklab,var(--brand-500)_8%,transparent),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,color-mix(in_oklab,var(--bg-hero)_35%,transparent))]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_100%,color-mix(in_oklab,var(--brand-400)_22%,transparent),transparent_65%)] opacity-70 mix-blend-screen" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center px-4 sm:px-6 pb-0 min-h-[calc(100svh-var(--nav-h))]">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: IQI Global Badge & Globe */}
          <div className="relative">
            {/* Globe container */}
            <div className="relative h-[400px] md:h-[500px] mb-8">
              <GlobeComponent />
              {/* IQI Global overlay badge */}
              <div className="absolute top-6 left-6 rounded-2xl bg-[var(--bg-hero)]/90 backdrop-blur-sm border border-[var(--color-border)] p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="h-5 w-5 text-[var(--brand-400)]" />
                  <span className="font-bold text-[var(--brand-400)]">{iqiBadgeTitle}</span>
                </div>
                <div className="space-y-1 text-sm text-foreground/80">
                  {iqiStats.map((stat, idx) => {
                    const Icon = iconMap[stat.icon] || Award;
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        <span>{stat.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Countries badge */}
              <div className="absolute bottom-6 right-6 rounded-xl bg-[var(--bg-hero)]/90 backdrop-blur-sm border border-[var(--color-border)] px-4 py-2">
                <div className="text-sm font-medium text-foreground">
                  {countriesBadge}
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-[var(--brand-200)] italic">
              "{quoteText}"
            </p>
          </div>

          {/* Right: International Positioning */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)] mb-5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
              {badgeText}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-[-0.025em] text-foreground mb-6" dangerouslySetInnerHTML={{ __html: title }} />

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              {subtitle}
            </p>

            <div className="space-y-3 mb-8">
              {achievements.map((achievement, idx) => {
                const Icon = iconMap[achievement.icon] || CheckCircle2;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-[var(--brand-400)]" />
                    <span>{achievement.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                onClick={openDialog}
                className="rounded-xl bg-[var(--brand-400)] px-6 py-4 text-base font-bold text-[var(--color-accent-contrast)] shadow-[0_8px_24px_rgba(255,215,0,0.28)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--brand-500)]"
              >
                {ctaPrimary.label}
              </Button>
              <Button
                asChild
                variant="link"
                className="h-12 rounded-xl px-4 text-[var(--brand-200)] hover:text-[var(--brand-100)] hover:underline underline-offset-4 focus-visible:ring-[var(--brand-400)]/40"
              >
                <Link href={ctaSecondary.href}>{ctaSecondary.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
