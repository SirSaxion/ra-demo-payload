"use client";

import { Button } from "@/components/ui/button";
import { useStrategyDialog } from "@/components/strategy/StrategySessionDialog";
import { LucideIcon } from "lucide-react";

interface Challenge {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ChallengesSectionProps {
  badge: string;
  title: string;
  subtitle: string;
  challenges: Challenge[];
  ctaIcon: LucideIcon;
  ctaTitle: string;
  ctaDescription: string;
}

export default function ChallengesSection({
  badge,
  title,
  subtitle,
  challenges,
  ctaIcon: CtaIcon,
  ctaTitle,
  ctaDescription,
}: ChallengesSectionProps) {
  const { openDialog } = useStrategyDialog();

  return (
    <section className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,var(--bg-section)_15%,var(--bg-section)_85%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="challenges-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#challenges-grid)" className="text-foreground" />
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

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--brand-400)]/10 border border-[var(--brand-400)]/20 group-hover:bg-[var(--brand-400)]/20 transition-colors duration-300">
                  <Icon className="h-7 w-7 text-[var(--brand-400)]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                  {challenge.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {challenge.description}
                </p>

                {/* Hover effect gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--brand-400)]/0 to-[var(--brand-400)]/0 group-hover:from-[var(--brand-400)]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
