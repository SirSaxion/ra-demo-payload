"use client";

import { CheckCircle2, X, CheckCheck, AlertTriangle } from "lucide-react";

interface VoorWieIsDitSectionProps {
  badge?: string;
  title?: string;
  perfectForTitle?: string;
  perfectForItems?: Array<{ text: string }>;
  notSuitableTitle?: string;
  notSuitableItems?: Array<{ text: string }>;
}

export default function VoorWieIsDitSection({
  badge,
  title,
  perfectForTitle,
  perfectForItems = [],
  notSuitableTitle,
  notSuitableItems = [],
}: VoorWieIsDitSectionProps = {}) {
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
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Perfect For */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl border border-[var(--brand-500)]/30 bg-[var(--color-surface-3)]">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--brand-500)] via-[color-mix(in_oklab,var(--brand-500)_60%,var(--brand-200))] to-[var(--brand-200)]" />

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-500)]/10 rounded-full flex items-center justify-center">
                    <CheckCheck className="h-6 w-6 text-[var(--brand-500)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{perfectForTitle}</h3>
                </div>

                <ul className="space-y-4">
                  {perfectForItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[var(--brand-500)] mt-1 flex-shrink-0" />
                      <p className="text-foreground">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Not For */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl border border-red-500/30 bg-[var(--color-surface-3)]">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-red-500/80 via-red-400/60 to-red-500/80" />

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{notSuitableTitle}</h3>
                </div>

                <ul className="space-y-4">
                  {notSuitableItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <p className="text-foreground">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
