"use client";

import React from "react";
import {
  ArrowRight,
  Globe,
  Clock,
  DollarSign,
  AlertTriangle,
  MapPin,
  Users,
  Target,
  Zap,
  TrendingUp
} from "lucide-react";

export interface DubaiSuccessStorySectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  benefits?: Array<{ icon: string; title: string; description: string }>;
}

export default function DubaiSuccessStorySection({
  badge = "Waarom wij",
  title = "Waarom onze aanpak werkt",
  subtitle = "Bij Real Accelerate combineren we onze ervaring als vastgoedondernemers en vastgoedinvesteerders met slimme marketing, creatieve campagnes en moderne opvolgsystemen.",
  benefits = [
    {
      icon: "Zap",
      title: "Snellere verkoop",
      description: "Door gerichte campagnes en sterke positionering brengen we jouw projecten sneller en effectiever in de markt."
    },
    {
      icon: "Target",
      title: "Creatieve beleving",
      description: "Projecten die onderscheidend zijn. Met creatieve campagnes en unieke beleving maken we impact die blijft hangen."
    },
    {
      icon: "Users",
      title: "Slimme opvolging",
      description: "Met automatische mails, persoonlijke telefonische opvolging en AI-ondersteuning zorgen we dat geen lead verloren gaat."
    },
    {
      icon: "TrendingUp",
      title: "Bewezen systemen",
      description: "Grip en voorspelbaarheid. Onze bewezen systemen geven je controle over het verkoopproces en zorgen voor meetbare resultaten."
    }
  ]
}: DubaiSuccessStorySectionProps) {
  const iconMap: Record<string, any> = { Zap, Target, Users, TrendingUp, Clock, DollarSign, AlertTriangle, MapPin, Globe, ArrowRight };
  return (
    <section className="relative overflow-hidden py-16 md:py-24 pt-[84px] md:pt-[120px] pb-[96px] md:pb-[132px] bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dubai-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dubai-grid)" className="text-black" />
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
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-black mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Voordelen Grid */}
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = iconMap[benefit.icon] || Zap;
              return (
                <div key={idx} className="bg-black/[0.04] border border-[var(--brand-400)]/20 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-black/[0.06] rounded-xl flex items-center justify-center">
                      <Icon className="h-7 w-7 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                      <p className="text-black/70 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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