"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Building2,
  MapPin,
  Calendar,
  BarChart3,
  Target,
  Globe,
  Zap,
  TrendingUp,
  Play,
  ArrowRight,
  Video,
  Palmtree,
  PartyPopper,
  Megaphone
} from "lucide-react";

export interface ResultatenBentoGridProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

export default function ResultatenBentoGrid({
  badge = "Project resultaten bento grid",
  title = "Resultaten uit de praktijk",
  subtitle = "Met onze bewezen aanpak zien projectontwikkelaars dat hun projecten sneller verkopen en beter in de markt worden gezet"
}: ResultatenBentoGridProps) {
  return (
    <section className="relative isolate overflow-hidden pb-0 pt-[84px] md:pt-[120px] bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* Background pattern for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="project-results-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#project-results-grid)" className="text-[var(--neutral-900)]" />
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

      <div className="relative mx-auto max-w-7xl px-6 pb-16 md:pb-20">
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

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">

          {/* Dubai-Property.nl Success Story - Large Featured Card (spans 2 columns) */}
          <div className="lg:col-span-2 bg-black/[0.06] border border-black/10 rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[var(--brand-500)] rounded-xl flex items-center justify-center">
                <Building2 className="h-8 w-8 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-2">DUBAI-PROPERTY.NL SUCCESS STORY</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-black/10 rounded-full flex items-center justify-center">
                    <Building2 className="h-4 w-4 text-black" />
                  </div>
                  <div className="text-black text-sm">
                    <strong>Nieuwe projecten Dubai verkocht</strong> in recordtempo
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-black/10 rounded-full flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-black" />
                  </div>
                  <div className="text-black text-sm">
                    <strong>Events door heel Nederland</strong> georganiseerd
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-black/10 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-black" />
                </div>
                <div className="text-black text-sm">
                  <strong>Hoog tempo resultaat</strong> binnen weken
                </div>
              </div>
            </div>
          </div>

          {/* Evenementen Marketing Card */}
          <div className="bg-black/[0.06] border border-black/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="text-center mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-500)] rounded-xl flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black">EVENEMENTEN MARKETING</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-black/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-3 w-3 text-black" />
                </div>
                <div className="text-black text-sm">Succesvolle events door Nederland</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-black/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-3 w-3 text-black" />
                </div>
                <div className="text-black text-sm">Directe klant interactie</div>
              </div>
            </div>
          </div>

          {/* Hoog Tempo Verkoop Card */}
          <div className="bg-black/[0.06] border border-black/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="text-center mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-500)] rounded-xl flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black">HOOG TEMPO VERKOOP</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-black/10 rounded-full flex items-center justify-center">
                  <Zap className="h-3 w-3 text-black" />
                </div>
                <div className="text-black text-sm">Van maanden naar weken verkoop</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-black/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-black" />
                </div>
                <div className="text-black text-sm">Bewezen methodologie</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-black/10 rounded-full flex items-center justify-center">
                  <Target className="h-3 w-3 text-black" />
                </div>
                <div className="text-black text-sm">Snelle ROI</div>
              </div>
            </div>
          </div>

          {/* Internationale Projecten */}
          <div className="bg-black/[0.06] border border-black/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="text-center mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[var(--brand-500)] rounded-xl flex items-center justify-center mx-auto mb-3">
                <Globe className="h-5 w-5 text-black" />
              </div>
              <h3 className="text-base font-bold text-black">INTERNATIONALE PROJECTEN</h3>
            </div>

            <div className="space-y-2 text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="flex-shrink-0 w-6 h-6 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
                  <Globe className="h-3 w-3 text-black" />
                </div>
                <div className="text-black text-sm">Dubai expertise</div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex-shrink-0 w-6 h-6 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
                  <Palmtree className="h-3 w-3 text-black" />
                </div>
                <div className="text-black text-sm">Spanje & Bali</div>
              </div>
            </div>
          </div>

          {/* Event Organisatie */}
          <div className="bg-black/[0.06] border border-black/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="text-center mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[var(--brand-500)] rounded-xl flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-5 w-5 text-black" />
              </div>
              <h3 className="text-base font-bold text-black">EVENT ORGANISATIE</h3>
            </div>

            <div className="space-y-2 text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="flex-shrink-0 w-6 h-6 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
                  <PartyPopper className="h-3 w-3 text-black" />
                </div>
                <div className="text-black text-sm">Door heel Nederland</div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex-shrink-0 w-6 h-6 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-3 w-3 text-black" />
                </div>
                <div className="text-black text-sm">Planning & uitvoering</div>
              </div>
            </div>
          </div>

          {/* Marketing Machine */}
          <div className="bg-black/[0.06] border border-black/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="text-center mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[var(--brand-500)] rounded-xl flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="h-5 w-5 text-black" />
              </div>
              <h3 className="text-base font-bold text-black">MARKETING MACHINE</h3>
            </div>

            <div className="space-y-2 text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="flex-shrink-0 w-6 h-6 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
                  <Megaphone className="h-3 w-3 text-black" />
                </div>
                <div className="text-black text-sm">Bewezen strategie</div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex-shrink-0 w-6 h-6 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
                  <Target className="h-3 w-3 text-black" />
                </div>
                <div className="text-black text-sm">Doelgroep targeting</div>
              </div>
            </div>
          </div>

          {/* Project Pipeline - Highlighted */}
          <div className="bg-[var(--brand-400)] border-2 border-[var(--brand-500)] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="text-center">
              <div className="flex-shrink-0 w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-black" />
              </div>
              <div className="text-black font-bold text-base mb-2">PROJECT PIPELINE</div>
              <div className="text-black font-bold text-lg">UITVERKOOP GARANTIE</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-black/[0.06] backdrop-blur-sm border border-black/10 rounded-xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1">
            <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-500)] rounded-xl flex items-center justify-center">
              <Building2 className="h-6 w-6 text-black" />
            </div>
            <div className="text-left">
              <p className="text-lg font-bold text-black">
                Resultaten die tellen
              </p>
              <p className="text-sm text-black/70">
                Verkortte verkooptrajecten, meer zichtbaarheid en slimmere opvolging
              </p>
            </div>
            <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform" />
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