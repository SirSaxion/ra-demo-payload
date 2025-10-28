"use client";

import React from "react";
import { CheckCircle2, Target, Users } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

interface GuaranteeCard {
  title: string;
  subtitle: string;
  icon: string;
  items: string[];
}

export interface GuaranteesSectionProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  cards?: GuaranteeCard[];
}

export default function GuaranteesSection({
  kicker = "Waarom wij",
  title = "Waarom makelaars kiezen voor Real Accelerate",
  subtitle = "Wij zijn geen traditioneel marketingbureau – wij begrijpen de vastgoedbranche van binnenuit",
  cards = [
    {
      title: "Ervaring uit de praktijk",
      subtitle: "Wij zijn zelf makelaars en staan dagelijks in de markt",
      icon: "Target",
      items: [
        "<strong>Ervaring uit de praktijk</strong> – wij zijn zelf makelaars",
        "<strong>Transparant, no-nonsense</strong> samenwerken",
        "<strong>Bewezen strategieën</strong> en systemen"
      ]
    },
    {
      title: "Onze focus",
      subtitle: "Altijd gericht op resultaat en duurzame groei voor jouw kantoor",
      icon: "Users",
      items: [
        "<strong>Altijd gericht op duurzame groei</strong> en schaalbare resultaten",
        "<strong>Persoonlijk en menselijk</strong> in onze aanpak"
      ]
    }
  ]
}: GuaranteesSectionProps) {
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon || LucideIcons.Target;
  };
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24 pt-[84px] md:pt-[120px] pb-[96px] md:pb-[132px] bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* Background pattern for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="guarantees-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#guarantees-grid)" className="text-[var(--neutral-900)]" />
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
            {kicker}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-black mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Main Guarantees Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => {
            const Icon = getIcon(card.icon);
            return (
              <div key={index} className="relative bg-black/[0.04] border border-black/10 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] overflow-hidden">
                <BorderBeam
                  duration={14}
                  size={120}
                  colorFrom="var(--brand-500)"
                  colorTo="var(--brand-200)"
                  className="from-transparent via-[var(--brand-500)] to-transparent"
                  borderWidth={1}
                  initialOffset={index * 50}
                  reverse={false}
                />
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center mt-1">
                    <Icon className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-1">{card.title}</h3>
                    <p className="text-sm text-black/70 leading-relaxed">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {card.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                      <p className="text-black/70 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
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
