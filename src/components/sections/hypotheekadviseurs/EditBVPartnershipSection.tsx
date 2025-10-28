"use client";

import { Button } from "@/components/ui/button";
import { useStrategyDialog } from "@/components/strategy/StrategySessionDialog";
import { ArrowRight, TrendingUp, Users, Award, Target, FileText, TrendingUpIcon, Handshake, Rocket, X } from "lucide-react";
import Image from "next/image";

export interface EditBVPartnershipSectionProps {
  kicker?: string
  title?: string
  subtitle?: string
  benefits?: Array<{ icon: string; text: string }>
  oldWayTitle?: string
  newWayTitle?: string
  newWaySubtitle?: string
  bottomInsight?: string
}

export default function EditBVPartnershipSection({
  kicker = 'Wij hebben de oplossing',
  title = 'De bewezen oplossing voor hypotheekadviseurs',
  subtitle = 'Met het Real Accelerate Partnership word je onafhankelijk van offerte-sites. Je bouwt een eigen klantenstroom op via duurzaamheidsexpertise en marketingfunnels die voor je werken — 24/7.',
  benefits = [
    { icon: 'TrendingUp', text: 'Nieuwe business via duurzaamheidsconsulten' },
    { icon: 'Target', text: 'Eigen leads, direct in je agenda' },
    { icon: 'Award', text: 'Betere marges en hogere klantwaardering' },
    { icon: 'Users', text: 'Complete systemen, begeleiding en community' }
  ],
  oldWayTitle = 'TRADITIONELE HYPOTHEEK ADVISERING',
  newWayTitle = 'EDIT BV PARTNERSHIP',
  newWaySubtitle = 'Duurzaamheid + hypotheek expertise',
  bottomInsight = '<strong>Het verschil:</strong> Van pure hypotheekadvisering naar waardevolle duurzaamheidsexpertise'
}: EditBVPartnershipSectionProps) {
  const { openDialog } = useStrategyDialog();
  const iconMap: Record<string, any> = { TrendingUp, Users, Award, Target };

  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24 pt-[84px] md:pt-[120px] pb-[96px] md:pb-[132px] bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="partnership-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#partnership-grid)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>

      {/* Top wave */}
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <svg className="block h-[84px] w-full md:h-[120px] rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z" fill="var(--bg-section)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-black mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
            {kicker}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-black mb-6">
            {title}
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: subtitle }} />
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            {benefits.map((benefit, idx) => {
              const Icon = iconMap[benefit.icon] || TrendingUp;
              return (
                <div key={idx} className="flex items-center gap-2 bg-black/[0.04] border border-black/10 rounded-lg px-4 py-2">
                  <Icon className="h-4 w-4 text-[var(--brand-500)]" />
                  <span className="text-black font-medium">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partnership Transformation */}
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center">

            {/* Left: Traditional Hypotheek Advisering */}
            <div className="relative overflow-hidden border border-black/10 bg-black/[0.04] rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_color-mix(in_oklab,var(--neutral-900)_15%,transparent)]">
              <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-gray-400/80 via-gray-300/60 to-gray-400/80 [mask-image:linear-gradient(to_right,transparent,var(--bg-section)_12%,var(--bg-section)_88%,transparent)]" />

              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-gray-400/20 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-black tracking-tight">
                  {oldWayTitle}
                </h3>
                <p className="text-sm text-black/60 mt-2">De oude manier</p>
              </div>

              <ul className="space-y-3 text-base text-black/70">
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500" />
                  Alleen hypotheken
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500" />
                  Prijs focus
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500" />
                  Commoditisering
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500" />
                  Lage marges
                </li>
              </ul>
            </div>

            {/* Transformation Arrow */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-2 -z-10 rounded-full bg-[color-mix(in_oklab,var(--brand-500)_25%,transparent)] blur-xl" />
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-black/[0.04] text-lg font-semibold text-black">
                  <ArrowRight className="w-8 h-8 text-black" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-black whitespace-nowrap">
                  WORDT
                </div>
              </div>
            </div>

            {/* Right: Edit BV Partnership */}
            <div className="relative overflow-hidden border border-black/10 bg-black/[0.04] rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_color-mix(in_oklab,var(--brand-500)_25%,transparent)]">
              <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-[var(--brand-500)] via-[color-mix(in_oklab,var(--brand-500)_60%,var(--brand-200))] to-[var(--brand-200)] [mask-image:linear-gradient(to_right,transparent,var(--bg-section)_12%,var(--bg-section)_88%,transparent)]" />

              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--brand-400)]/20 flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-black" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-black tracking-tight">
                  {newWayTitle}
                </h3>
                <p className="text-sm text-black/60 mt-2">{newWaySubtitle}</p>
              </div>

              <ul className="space-y-3 text-base text-black/70">
                <li className="flex items-start gap-3">
                  <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  <span><strong>46 afspraken</strong> uit 1.300 contacten</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  Duurzaamheid als toegevoegde waarde
                </li>
                <li className="flex items-start gap-3">
                  <Target className="mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  Nieuwe business via innovatie
                </li>
                <li className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  Bewezen campagne resultaten
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom insight */}
          <div className="text-center mt-12 md:mt-16">
            <div className="inline-flex items-center gap-3 bg-black/[0.04] backdrop-blur-sm border border-black/10 rounded-xl px-6 py-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-4 h-4 text-black" />
              </div>
              <p className="text-sm font-medium text-black/70" dangerouslySetInnerHTML={{ __html: bottomInsight }} />
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