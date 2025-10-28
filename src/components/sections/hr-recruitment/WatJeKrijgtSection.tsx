"use client";

import { CheckCircle2, Target, Zap, MessageSquare, Users } from "lucide-react";
import Image from "next/image";

interface WatJeKrijgtSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

export default function WatJeKrijgtSection({
  badge = "Wat je krijgt",
  title = "Complete HR recruitment transformatie",
  subtitle = "Alles wat je nodig hebt om top talent aan te trekken",
}: WatJeKrijgtSectionProps = {}) {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24 pt-[84px] md:pt-[120px] pb-[96px] md:pb-[132px] bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wat-je-krijgt-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wat-je-krijgt-grid)" className="text-[var(--neutral-900)]" />
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
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-black mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Features Grid with Images */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="relative overflow-hidden border border-black/10 bg-black/[0.04] rounded-xl transition-all duration-300 hover:shadow-xl">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/placeholder.jpg"
                alt="Werkgeversmerk ontwikkeling"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black">
                  Werkgeversmerk ontwikkeling
                </h3>
              </div>
              <p className="text-black/70 leading-relaxed">
                Complete employer branding strategie met visual identity, messaging en content om jouw organisatie aantrekkelijk te positioneren.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative overflow-hidden border border-black/10 bg-black/[0.04] rounded-xl transition-all duration-300 hover:shadow-xl">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/placeholder.jpg"
                alt="Talent attraction campagnes"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black">
                  Talent attraction campagnes
                </h3>
              </div>
              <p className="text-black/70 leading-relaxed">
                Gerichte multi-channel campagnes om passief talent te bereiken op LinkedIn, Instagram en andere platforms waar jouw ideale kandidaten zijn.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative overflow-hidden border border-black/10 bg-black/[0.04] rounded-xl transition-all duration-300 hover:shadow-xl">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/placeholder.jpg"
                alt="Geautomatiseerde nurturing"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black">
                  Geautomatiseerde nurturing
                </h3>
              </div>
              <p className="text-black/70 leading-relaxed">
                Slimme email sequences en content flows die kandidaten warm houden tot het perfecte moment. Persoonlijk en geautomatiseerd.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="relative overflow-hidden border border-black/10 bg-black/[0.04] rounded-xl transition-all duration-300 hover:shadow-xl">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/placeholder.jpg"
                alt="Persoonlijke begeleiding"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black">
                  Dedicated HR-specialist
                </h3>
              </div>
              <p className="text-black/70 leading-relaxed">
                Jouw eigen recruitment specialist die jouw organisatie kent, meedenkt en continue optimaliseert. Wekelijkse check-ins en directe support.
              </p>
            </div>
          </div>
        </div>

        {/* Extra Benefits */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-black/[0.04] border border-black/10 rounded-xl p-8">
            <h3 className="text-xl font-bold text-black mb-6 text-center">
              Plus deze extra voordelen:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                <span className="text-black/70">Maandelijkse performance rapportages</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                <span className="text-black/70">Toegang tot recruitment dashboard</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                <span className="text-black/70">Candidate experience optimalisatie</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                <span className="text-black/70">Onbeperkte strategie sessies</span>
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
