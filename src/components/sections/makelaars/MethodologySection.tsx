"use client";

import React from "react";
import { Target, TrendingUp } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface Step {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface MethodologySectionProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  steps?: Step[];
}

export default function MethodologySection({
  kicker = "Onze werkwijze",
  title = "Van drukte naar duurzame groei",
  subtitle = "Met Real Accelerate zetten we makelaarskantoren om van reactief werken naar voorspelbare groei. Dat doen we in 3 stappen:",
  steps = [
    {
      title: "INZICHT KRIJGEN",
      subtitle: "Stap 1",
      description: "Analyse van je huidige processen, marketing en resultaten. We brengen in kaart waar je nu staat en welke uitdagingen je tegenkomt.",
      icon: "Target"
    },
    {
      title: "SLIMMER WERKEN",
      subtitle: "Stap 2",
      description: "Bewezen systemen, marketingstrategieën en automatisering inzetten. We optimaliseren je processen zodat je efficiënt werkt.",
      icon: "Target"
    },
    {
      title: "SAMEN DOORGROEIEN",
      subtitle: "Stap 3",
      description: "Structureel bouwen aan een sterker en schaalbaar kantoor. We blijven je ondersteunen bij groei en uitdagingen.",
      icon: "TrendingUp"
    }
  ]
}: MethodologySectionProps) {
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon || LucideIcons.Target;
  };
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24 pt-[84px] md:pt-[120px] pb-[96px] md:pb-[132px] bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="methodology-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#methodology-grid)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>
      
      {/* Top wave */}
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <svg className="block h-[84px] w-full md:h-[120px] rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z" fill="var(--bg-section)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Sticky Section Header & Timeline */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-16">
          {/* Left: Sticky Title */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-black mb-6">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
              {kicker}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-[-0.01em] text-black mb-4">
              {title}
            </h2>
            <p className="text-lg text-black/70 mb-8">
              {subtitle}
            </p>
          </div>

          {/* Right: Timeline Container */}
          <div className="relative">
            {/* Enhanced Timeline Line - zwart met fade */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#1a1a1a] to-transparent transform -translate-x-1/2 hidden md:block" />

            {/* Timeline Steps */}
            <div className="space-y-0 md:space-y-0">
              {steps.map((step, index) => {
                const Icon = getIcon(step.icon);
                const isLeft = index % 2 === 0;
                const isFirst = index === 0;
                
                return (
                  <div 
                    key={index}
                    className={`relative grid md:grid-cols-2 gap-4 items-center ${isFirst ? 'z-10' : '-mt-10 md:-mt-12'} z-${30 - index * 10}`}
                  >
                    {isLeft ? (
                      <>
                        <div className="md:text-right md:pr-4">
                          <div className="relative overflow-visible flex h-full min-h-[180px] flex-col rounded-xl border border-black/10 bg-black/[0.04] p-6 transition will-change-transform hover:shadow-lg hover:-translate-y-px">
                            <div className="flex items-center gap-4 md:justify-end mb-4">
                              <div className="md:order-1">
                                <h3 className="text-xl font-bold text-black">{step.title}</h3>
                                <p className="text-sm text-black/80 font-medium">{step.subtitle}</p>
                              </div>
                              <div className="md:order-2 flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
                                <Icon className="h-6 w-6 text-black" />
                              </div>
                            </div>
                            <p className="text-black/70 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Timeline bullet */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#1a1a1a] rounded-full border-4 border-white shadow-lg">
                          <div className="w-full h-full bg-[#1a1a1a]/80 rounded-full animate-pulse" style={{animationDelay: `${index * 0.5}s`}} />
                        </div>
                        
                        <div className="md:pl-4">
                          {/* Empty space for zigzag */}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="md:pr-4">
                          {/* Empty space for zigzag */}
                        </div>
                        
                        {/* Timeline bullet */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#1a1a1a] rounded-full border-4 border-white shadow-lg">
                          <div className="w-full h-full bg-[#1a1a1a]/80 rounded-full animate-pulse" style={{animationDelay: `${index * 0.5}s`}} />
                        </div>
                        
                        <div className="md:pl-4">
                          <div className="relative overflow-visible flex h-full min-h-[180px] flex-col rounded-xl border border-black/10 bg-black/[0.04] p-6 transition will-change-transform hover:shadow-lg hover:-translate-y-px">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
                                <Icon className="h-6 w-6 text-black" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-black">{step.title}</h3>
                                <p className="text-sm text-black/80 font-medium">{step.subtitle}</p>
                              </div>
                            </div>
                            <p className="text-black/70 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg className="block h-[84px] w-full md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z" fill="var(--bg-section)" />
        </svg>
      </div>
    </section>
  );
}
