"use client";

import { Target, Search, Users, TrendingUp } from "lucide-react";
import * as LucideIcons from "lucide-react";
import Image from "next/image";

interface MethodologyStep {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

interface MethodologySectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  steps?: MethodologyStep[];
  bottomText?: string;
}

const iconMap: Record<string, any> = {
  Target,
  Search,
  Users,
  TrendingUp,
};

export default function MethodologySection({
  badge,
  title,
  subtitle,
  steps = [],
  bottomText,
}: MethodologySectionProps = {}) {
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
              {badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-[-0.01em] text-black mb-4">
              {title}
            </h2>
            <p className="text-lg text-black/70 mb-8">
              {subtitle}
            </p>

            {/* Visual element */}
            <div className="relative overflow-hidden rounded-xl border border-black/10">
              <Image
                src="/images/placeholder.jpg"
                alt="HR methodologie"
                width={320}
                height={240}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#1a1a1a] to-transparent transform -translate-x-1/2 hidden md:block" />

            {/* Timeline Steps - Dynamic */}
            <div className="space-y-0 md:space-y-0">
              {steps.map((step, index) => {
                const IconComponent = iconMap[step.icon] || Target;
                const isLeft = index % 2 === 0;
                const zIndex = 10 + (index * 10);

                return (
                  <div
                    key={index}
                    className={`relative grid md:grid-cols-2 gap-4 items-center z-${zIndex} ${index > 0 ? '-mt-10 md:-mt-12' : ''}`}
                  >
                    {/* Left side */}
                    {isLeft ? (
                      <div className="md:text-right md:pr-4">
                        <div className="relative overflow-visible flex h-full min-h-[180px] flex-col rounded-xl border border-black/10 bg-black/[0.04] p-6 transition will-change-transform hover:shadow-lg hover:-translate-y-px">
                          <div className="flex items-center gap-4 md:justify-end mb-4">
                            <div className="md:order-1">
                              <h3 className="text-xl font-bold text-black">{step.title}</h3>
                              <p className="text-sm text-black/80 font-medium">{step.subtitle}</p>
                            </div>
                            <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center md:order-2">
                              <IconComponent className="h-6 w-6 text-black" />
                            </div>
                          </div>
                          <p className="text-black/70 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="md:pr-4">
                        {/* Empty space for zigzag */}
                      </div>
                    )}

                    {/* Timeline bullet */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#1a1a1a] rounded-full border-4 border-white shadow-lg">
                      <div 
                        className="w-full h-full bg-[#1a1a1a]/80 rounded-full animate-pulse" 
                        style={{animationDelay: `${index * 0.5}s`}} 
                      />
                    </div>

                    {/* Right side */}
                    {!isLeft ? (
                      <div className="md:pl-4">
                        <div className="relative overflow-visible flex h-full min-h-[180px] flex-col rounded-xl border border-black/10 bg-black/[0.04] p-6 transition will-change-transform hover:shadow-lg hover:-translate-y-px">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
                              <IconComponent className="h-6 w-6 text-black" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-black">{step.title}</h3>
                              <p className="text-sm text-black/80 font-medium">{step.subtitle}</p>
                            </div>
                          </div>
                          <p className="leading-relaxed text-black/70">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="md:pl-4">
                        {/* Empty space for zigzag */}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom text */}
        {bottomText && (
          <div className="mt-16 text-center">
            <p className="text-lg md:text-xl font-semibold text-black/80">
              {bottomText}
            </p>
          </div>
        )}
      </div>

      {/* Bottom wave */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg className="block h-[96px] w-full md:h-[132px]" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,60 C300,20 900,60 1200,0 L1200,120 L0,120 Z" fill="var(--bg-section)" />
        </svg>
      </div>
    </section>
  );
}
