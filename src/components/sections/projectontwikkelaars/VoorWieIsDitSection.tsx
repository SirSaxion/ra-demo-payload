"use client";

import { CheckCircle2, X, Zap, CalendarClock, Globe, Target, CheckCircle, XCircle, Users } from "lucide-react";

export interface VoorWieIsDitSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  perfectTitle?: string;
  perfectFor?: Array<{ icon: string; title: string; description: string }>;
  notSuitableTitle?: string;
  notSuitableFor?: string[];
  bottomText?: string;
}

export default function VoorWieIsDitSection({
  badge = "Voor wie is dit?",
  title = "Perfect voor projectontwikkelaars die",
  subtitle = "Onze aanpak werkt het beste voor ambitieuze ontwikkelaars die klaar zijn voor snelle verkoop",
  perfectTitle = "Perfect voor ontwikkelaars die:",
  perfectFor = [
    {
      icon: "Zap",
      title: "Projecten sneller en effectiever willen verkopen",
      description: "Van lange verkoopcycli naar snelle resultaten met een bewezen aanpak."
    },
    {
      icon: "Target",
      title: "Meer grip willen op marketing en opvolging",
      description: "Controle over het proces en inzicht in wat werkt en wat niet."
    },
    {
      icon: "CalendarClock",
      title: "Creatieve campagnes zoeken",
      description: "Marketing die onderscheidend is en je project echt laat opvallen in de markt."
    },
    {
      icon: "Users",
      title: "Efficiënter willen werken met slimme systemen",
      description: "Automatisering en opvolgsystemen die zorgen dat geen lead verloren gaat."
    },
    {
      icon: "CheckCircle2",
      title: "Een betrouwbare partner met vastgoedervaring zoeken",
      description: "Samenwerken met professionals die de vastgoedbranche van binnenuit kennen."
    }
  ],
  notSuitableTitle = "Niet geschikt voor ontwikkelaars die:",
  notSuitableFor = [
    "Tevreden zijn met lange verkoopcycli van maanden of jaren en geen haast hebben",
    "Geen budget hebben voor marketing investeringen en event organisatie",
    "Niet geïnteresseerd zijn in event marketing en alleen online willen werken",
    "Zoeken naar quick fixes zonder professionele ondersteuning en begeleiding",
    "Alleen focus op Nederlandse projecten en geen internationale ambitie hebben"
  ],
  bottomText = "Dan ben je klaar voor een slimme aanpak die jouw projecten sneller verkoopt"
}: VoorWieIsDitSectionProps) {
  const iconMap: Record<string, any> = { Zap, CalendarClock, Globe, Target, CheckCircle, CheckCircle2, XCircle, Users };
  return (
    <section className="relative overflow-hidden py-16 md:py-24 pt-[84px] md:pt-[120px] pb-[96px] md:pb-[132px] bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="voor-wie-project-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#voor-wie-project-grid)" className="text-black" />
        </svg>
      </div>

      {/* Top wave divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -mt-px">
        <svg
          className="block h-[85px] w-full md:h-[121px] rotate-180"
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

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-black mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-black mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Perfect For + Not Suitable Grid */}
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

            {/* Perfect Voor */}
            <div className="bg-black/[0.04] border border-[var(--brand-400)]/20 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-[var(--brand-500)] via-[color-mix(in_oklab,var(--brand-500)_60%,var(--brand-200))] to-[var(--brand-200)]" />

              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{perfectTitle}</h3>
              </div>

              <div className="space-y-6">
                {perfectFor.map((item, idx) => {
                  const Icon = iconMap[item.icon] || Zap;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center mt-1">
                        <Icon className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">{item.title}</h4>
                        <p className="text-black/70 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Niet Geschikt Voor */}
            <div className="bg-black/[0.04] border border-red-500/20 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-red-500 via-red-400 to-red-500" />

              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
                    <XCircle className="w-10 h-10 text-red-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{notSuitableTitle}</h3>
              </div>

              <div className="space-y-4">
                {notSuitableFor.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-black/70 text-sm leading-relaxed">
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
          <div className="inline-flex items-center gap-3 bg-black/[0.04] backdrop-blur-sm border border-black/10 rounded-xl px-6 py-4 shadow-sm">
            <div className="flex-shrink-0 w-10 h-10 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
              <Target className="h-5 w-5 text-[var(--brand-500)]" />
            </div>
            <p className="text-sm font-medium text-black/70">
              <strong className="text-black">Herken je jezelf?</strong> {bottomText}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -mb-px">
        <svg
          className="block h-[85px] w-full md:h-[121px]"
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
}