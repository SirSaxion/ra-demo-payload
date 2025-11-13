"use client";

import { CheckCircle2, X, FrownIcon, Target, Rocket } from "lucide-react";
import Image from "next/image";

interface SolutionTransformationSectionProps {
  badge: string;
  title: string;
  subtitle: string;
  quote: string;
  leftImage: string;
  leftImageAlt: string;
  leftTitle: string;
  leftSubtitle: string;
  leftItems: string[];
  rightImage: string;
  rightImageAlt: string;
  rightTitle: string;
  rightSubtitle: string;
  rightItems: string[];
  bottomInsight: string;
}

export default function SolutionTransformationSection({
  badge,
  title,
  subtitle,
  quote,
  leftImage,
  leftImageAlt,
  leftTitle,
  leftSubtitle,
  leftItems,
  rightImage,
  rightImageAlt,
  rightTitle,
  rightSubtitle,
  rightItems,
  bottomInsight,
}: SolutionTransformationSectionProps) {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24 pt-[84px] md:pt-[120px] pb-[96px] md:pb-[132px] bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="solution-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#solution-grid)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>

      {/* Top wave */}
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <svg className="block h-[84px] w-full md:h-[120px] rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z" fill="var(--bg-section)" />
        </svg>
      </div>

      {/* Bottom wave */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg className="block h-[84px] w-full md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z" fill="var(--bg-section)" />
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
          <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>

          <div className="bg-black/[0.08] border border-black/10 rounded-xl p-6 mb-8 text-center italic max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-black font-medium">
              {quote}
            </p>
          </div>
        </div>

        {/* Two Column Comparison with Images */}
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-start">
            {/* Left Side */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={leftImage}
                  alt={leftImageAlt}
                  width={500}
                  height={300}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                        <FrownIcon className="h-5 w-5 text-red-400" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-white tracking-tight">
                        {leftTitle}
                      </h3>
                    </div>
                    <p className="text-sm text-white/80">{leftSubtitle}</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/[0.04] border border-black/10 rounded-xl p-6">
                <ul className="space-y-3 text-base text-black/70">
                  {leftItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Transformation Arrow */}
            <div className="relative flex items-center justify-center lg:pt-32">
              <div className="relative">
                <div className="absolute -inset-2 -z-10 rounded-full bg-[color-mix(in_oklab,var(--brand-500)_15%,transparent)] blur-xl" />
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-black/[0.04] text-lg font-semibold text-black">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={rightImage}
                  alt={rightImageAlt}
                  width={500}
                  height={300}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-900)]/80 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Target className="h-5 w-5 text-black" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-white tracking-tight">
                        {rightTitle}
                      </h3>
                    </div>
                    <p className="text-sm text-white/80">{rightSubtitle}</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/[0.04] border border-black/10 rounded-xl p-6">
                <ul className="space-y-3 text-base text-black/80">
                  {rightItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom insight */}
          <div className="text-center mt-12 md:mt-16">
            <div className="inline-flex items-center gap-3 bg-black/[0.08] backdrop-blur-sm border border-black/10 rounded-xl px-6 py-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-4 h-4 text-black" />
              </div>
              <p className="text-sm font-medium text-black/70">
                {bottomInsight}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
