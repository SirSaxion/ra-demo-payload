"use client";

import { Target, Search, MessageSquare, Zap } from "lucide-react";
import Image from "next/image";

interface MethodologySectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

export default function MethodologySection({
  badge = "Onze bewezen aanpak",
  title = "Hoe we dit aanpakken",
  subtitle = "4 stappen naar een recruitment machine",
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

            {/* Timeline Steps */}
            <div className="space-y-0 md:space-y-0">
              {/* Step 1 - Left */}
              <div className="relative grid md:grid-cols-2 gap-4 items-center z-10">
                <div className="md:text-right md:pr-4">
                  <div className="relative overflow-visible flex h-full min-h-[180px] flex-col rounded-xl border border-black/10 bg-black/[0.04] p-6 transition will-change-transform hover:shadow-lg hover:-translate-y-px">
                    <div className="flex items-center gap-4 md:justify-end mb-4">
                      <div className="md:order-1">
                        <h3 className="text-xl font-bold text-black">WERKGEVERSMERK</h3>
                        <p className="text-sm text-black/80 font-medium">Stap 1</p>
                      </div>
                      <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center md:order-2">
                        <Target className="h-6 w-6 text-black" />
                      </div>
                    </div>
                    <p className="text-black/70 leading-relaxed">
                      We bouwen een aantrekkelijk werkgeversmerk dat top talent aantrekt. Jouw organisatie wordt de plek waar mensen willen werken.
                    </p>
                  </div>
                </div>

                {/* Timeline bullet */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#1a1a1a] rounded-full border-4 border-white shadow-lg">
                  <div className="w-full h-full bg-[#1a1a1a]/80 rounded-full animate-pulse" />
                </div>

                <div className="md:pl-4">
                  {/* Empty space for zigzag */}
                </div>
              </div>

              {/* Step 2 - Right */}
              <div className="relative grid md:grid-cols-2 gap-4 items-center -mt-10 md:-mt-12 z-20">
                <div className="md:pr-4">
                  {/* Empty space for zigzag */}
                </div>

                {/* Timeline bullet */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#1a1a1a] rounded-full border-4 border-white shadow-lg">
                  <div className="w-full h-full bg-[#1a1a1a]/80 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                </div>

                <div className="md:pl-4">
                  <div className="relative overflow-visible flex h-full min-h-[180px] flex-col rounded-xl border border-black/10 bg-black/[0.04] p-6 transition will-change-transform hover:shadow-lg hover:-translate-y-px">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
                        <Search className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black">TALENT PIPELINE</h3>
                        <p className="text-sm uppercase tracking-wide text-black/80 font-medium">Stap 2</p>
                      </div>
                    </div>
                    <p className="leading-relaxed text-black/70">
                      Proactief talent identificeren en benaderen voordat ze actief op zoek zijn. Wij bouwen een continue stroom van gekwalificeerde kandidaten.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 - Left */}
              <div className="relative grid md:grid-cols-2 gap-4 items-center -mt-10 md:-mt-12 z-30">
                <div className="md:text-right md:pr-4">
                  <div className="relative overflow-visible border border-black/10 bg-black/[0.04] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]">
                    <div className="flex items-center gap-4 md:justify-end mb-4">
                      <div className="md:order-1">
                        <h3 className="text-xl font-bold text-black">NURTURING SYSTEEM</h3>
                        <p className="text-sm uppercase tracking-wide text-black/80 font-medium">Stap 3</p>
                      </div>
                      <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center md:order-2">
                        <MessageSquare className="h-6 w-6 text-black" />
                      </div>
                    </div>
                    <p className="leading-relaxed text-black/70">
                      Geautomatiseerde nurturing die kandidaten warm houdt tot het perfecte moment. Top-of-mind blijven zonder handmatig werk.
                    </p>
                  </div>
                </div>

                {/* Timeline bullet */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#1a1a1a] rounded-full border-4 border-white shadow-lg">
                  <div className="w-full h-full bg-[#1a1a1a]/80 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
                </div>

                <div className="md:pl-4">
                  {/* Empty space for zigzag */}
                </div>
              </div>

              {/* Step 4 - Right */}
              <div className="relative grid md:grid-cols-2 gap-4 items-center -mt-10 md:-mt-12 z-40">
                <div className="md:pr-4">
                  {/* Empty space for zigzag */}
                </div>

                {/* Timeline bullet */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#1a1a1a] rounded-full border-4 border-white shadow-lg">
                  <div className="w-full h-full bg-[#1a1a1a]/80 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
                </div>

                <div className="md:pl-4">
                  <div className="relative overflow-visible border border-black/10 bg-black/[0.04] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
                        <Zap className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black">SNELLE PLAATSING</h3>
                        <p className="text-sm uppercase tracking-wide text-black/80 font-medium">Stap 4</p>
                      </div>
                    </div>
                    <p className="leading-relaxed text-black/70">
                      Van vacature naar plaatsing in weken in plaats van maanden. Efficiënt screening proces en sterke candidate experience.
                    </p>
                  </div>
                </div>
              </div>
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
