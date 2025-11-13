import React from "react";
import { ArrowRight, Lightbulb, Rocket, Star, type LucideIcon } from "lucide-react";

interface JourneyCard {
  icon: string;
  title: string;
  content: string;
}

interface MissionSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  cards?: JourneyCard[];
  tagline?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Rocket,
  Star,
};

export default function MissionSection({
  badge = "Onze missie",
  title = "Waarom Real Accelerate bestaat",
  subtitle = "De vastgoedbranche vernieuwen en ondernemers helpen om sterker, efficiënter en toekomstbestendig te worden",
  cards = [
    {
      icon: "Lightbulb",
      title: "Het probleem",
      content: 'We zagen te vaak dat professionals in de vastgoedbranche <span class="font-semibold text-white">vastliepen in dezelfde patronen:</span> <span class="text-[var(--brand-300)] font-medium">gebrek aan structuur, afhankelijkheid van externe partijen en een moeizame weg naar groei.</span>',
    },
    {
      icon: "Rocket",
      title: "Onze oplossing",
      content: 'Met onze eigen ondernemingen ontwikkelden we <span class="font-semibold text-[var(--brand-200)]">strategieën en systemen die dit doorbraken.</span> <span class="text-white font-medium">Het was een logische stap</span> om die kennis en ervaring te bundelen in Real Accelerate.',
    },
    {
      icon: "Star",
      title: "Onze impact",
      content: 'Ons doel is helder: <span class="font-semibold text-white">de vastgoedbranche vernieuwen</span> en <span class="text-[var(--brand-200)] font-medium">ondernemers helpen om sterker, efficiënter en toekomstbestendig te worden.</span>',
    },
  ],
  tagline = "Van vastlooppatronen naar duurzame groei. Van afhankelijkheid naar zelfstandigheid. Van overleven naar floreren.",
}: MissionSectionProps = {}) {
  return (
    <section className="relative isolate overflow-hidden bg-section py-20 md:py-28">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_25%_20%,color-mix(in_oklab,var(--brand-400)_6%,transparent),transparent_70%)]" />
      </div>

      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(75%_75%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mission-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mission-grid)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)] backdrop-blur-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {badge}
          </span>
          
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-[-0.025em] text-foreground">
            {title}
          </h2>

          <p className="mt-4 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Journey Cards */}
        <div className="mt-12 md:mt-16">
          <div className="relative grid grid-cols-1 gap-6 xl:grid-cols-[1fr_auto_1fr_auto_1fr] xl:items-stretch">
            {cards.map((card, index) => {
              const Icon = iconMap[card.icon] || Lightbulb;
              const isLast = index === cards.length - 1;
              
              return (
                <React.Fragment key={index}>
                  <div
                    className={`relative rounded-2xl border ${
                      isLast
                        ? "border-[var(--brand-400)]/20 bg-gradient-to-br from-[var(--brand-400)]/[0.08] to-white/[0.02] shadow-[0_1px_0_0_rgba(255,215,0,0.1)_inset] hover:border-[var(--brand-400)]/40"
                        : "border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset] hover:border-white/20"
                    } p-6 md:p-8 transition-all duration-300`}
                  >
                    <div className="relative">
                      <div className="mb-4 flex items-center gap-3">
                        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                          isLast
                            ? "bg-gradient-to-br from-[var(--brand-400)]/20 to-[var(--brand-500)]/10 ring-1 ring-[var(--brand-400)]/30"
                            : "bg-gradient-to-br from-[var(--neutral-800)] to-[var(--neutral-900)] ring-1 ring-white/10"
                        }`}>
                          <Icon className="h-5 w-5 text-[var(--brand-400)]" />
                        </span>
                        <h3 className={`text-base md:text-lg font-bold tracking-wide uppercase ${
                          isLast ? "text-[var(--brand-200)]" : "text-[var(--brand-300)]"
                        }`}>
                          {card.title}
                        </h3>
                      </div>
                      
                      <blockquote className="relative">
                        <span className="absolute -left-1 -top-1 text-4xl text-[var(--brand-400)]/20 font-serif">"</span>
                        <p
                          className="text-base md:text-lg leading-relaxed text-white/90 relative z-10 pl-4"
                          dangerouslySetInnerHTML={{ __html: card.content }}
                        />
                        <span className="absolute -right-1 -bottom-2 text-4xl text-[var(--brand-400)]/20 font-serif">"</span>
                      </blockquote>
                    </div>
                  </div>

                  {/* Arrow between cards */}
                  {index < cards.length - 1 && (
                    <>
                      {/* Desktop arrow */}
                      <div className="hidden xl:flex items-center justify-center">
                        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-3 backdrop-blur-sm">
                          <ArrowRight className="h-5 w-5 text-[var(--brand-400)]" />
                        </div>
                      </div>
                      {/* Mobile/Tablet arrow */}
                      <div className="xl:hidden flex items-center justify-center">
                        <ArrowRight className="h-5 w-5 text-[var(--brand-400)]/80 rotate-90" />
                      </div>
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-10 text-center text-sm md:text-base text-foreground/60 max-w-xl mx-auto">
          {tagline}
        </p>
      </div>
    </section>
  );
}
