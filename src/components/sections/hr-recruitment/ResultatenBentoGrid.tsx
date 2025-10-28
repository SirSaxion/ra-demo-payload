"use client";

import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import Image from "next/image";

interface ResultatenBentoGridProps {
  badge?: string;
  title?: string;
}

export default function ResultatenBentoGrid({
  badge = "Bewezen resultaten",
  title = "Wat onze klanten bereiken",
}: ResultatenBentoGridProps = {}) {
  return (
    <section className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)] mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Dit bereiken onze klanten gemiddeld binnen 6 maanden
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Result 1 - Large */}
          <div className="lg:col-span-2 relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-3)] rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="text-5xl md:text-6xl font-extrabold text-[var(--brand-400)] mb-2">
                  73%
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Meer sollicitaties
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Onze klanten zien gemiddeld 73% meer sollicitaties binnen de eerste 3 maanden. Van crickets naar een volle inbox.
                </p>
              </div>
              <div className="relative h-48 md:h-full overflow-hidden rounded-lg">
                <Image
                  src="/images/placeholder.jpg"
                  alt="Meer sollicitaties"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Result 2 */}
          <div className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-3)] rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
            <div className="text-4xl font-extrabold text-[var(--brand-400)] mb-2">
              3x
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Sneller vacatures vullen
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              Van maanden naar weken. Onze klanten vullen vacatures 3x sneller dan voorheen.
            </p>
          </div>

          {/* Result 3 */}
          <div className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-3)] rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
            <div className="text-4xl font-extrabold text-[var(--brand-400)] mb-2">
              92%
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Betere kwaliteit
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              92% van onze klanten rapporteert significant betere kwaliteit kandidaten.
            </p>
          </div>

          {/* Result 4 - Image heavy */}
          <div className="lg:col-span-2 relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-3)] rounded-xl transition-all duration-300 hover:shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-full overflow-hidden">
                <Image
                  src="/images/placeholder.jpg"
                  alt="Success story"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="text-4xl font-extrabold text-[var(--brand-400)] mb-2">
                  €127K
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Besparing per jaar
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Gemiddelde kostenbesparing door minder external recruitment fees en hogere retentie.
                </p>
                <div className="flex items-center gap-2 text-sm text-[var(--brand-400)]">
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">Gecertificeerd door klanten</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col items-center gap-4 bg-[var(--color-surface-3)] backdrop-blur-sm border border-[var(--color-border)] rounded-xl px-8 py-6 shadow-sm">
            <p className="text-lg font-medium text-foreground">
              Wil je de volledige case studies lezen?
            </p>
            <Button
              variant="outline"
              className="border-[var(--brand-400)] text-[var(--brand-400)] hover:bg-[var(--brand-400)]/10"
            >
              Bekijk alle succesverhalen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
