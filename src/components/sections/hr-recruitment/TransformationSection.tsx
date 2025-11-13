"use client";

import { CheckCircle2, X, FrownIcon, Target } from "lucide-react";
import Image from "next/image";

interface TransformationSectionProps {
  badge?: string;
  title?: string;
  oldWayTitle?: string;
  oldWaySubtitle?: string;
  oldWayImage?: any; // Media object from CMS
  oldWayItems?: Array<{ text: string }>;
  newWayTitle?: string;
  newWaySubtitle?: string;
  newWayImage?: any; // Media object from CMS
  newWayItems?: Array<{ text: string }>;
}

export default function TransformationSection({
  badge,
  title,
  oldWayTitle,
  oldWaySubtitle,
  oldWayImage,
  oldWayItems = [],
  newWayTitle,
  newWaySubtitle,
  newWayImage,
  newWayItems = [],
}: TransformationSectionProps = {}) {
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

        {/* Two Column Comparison with Images */}
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-start">
            {/* Old Way */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={oldWayImage?.sizes?.medium?.url || oldWayImage?.url || "/images/placeholder.jpg"}
                  alt={oldWayImage?.alt || "Traditionele recruitment"}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                        <FrownIcon className="h-5 w-5 text-red-400" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-white tracking-tight">
                        {oldWayTitle}
                      </h3>
                    </div>
                    <p className="text-sm text-white/80">{oldWaySubtitle}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl p-6">
                <ul className="space-y-3 text-base text-[var(--color-text-secondary)]">
                  {oldWayItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Transformation Arrow */}
            <div className="relative flex items-center justify-center lg:pt-32">
              <div className="relative">
                <div className="absolute -inset-2 -z-10 rounded-full bg-[color-mix(in_oklab,var(--brand-500)_15%,transparent)] blur-xl" />
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-3)] text-lg font-semibold text-foreground">
                  <svg className="w-6 h-6 text-[var(--brand-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* New Way */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={newWayImage?.sizes?.medium?.url || newWayImage?.url || "/images/placeholder.jpg"}
                  alt={newWayImage?.alt || "Moderne recruitment strategie"}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-900)]/80 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-[var(--brand-400)]/20 rounded-full flex items-center justify-center">
                        <Target className="h-5 w-5 text-[var(--brand-400)]" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-white tracking-tight">
                        {newWayTitle}
                      </h3>
                    </div>
                    <p className="text-sm text-white/80">{newWaySubtitle}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl p-6">
                <ul className="space-y-3 text-base text-[var(--color-text-secondary)]">
                  {newWayItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--brand-500)]" />
                      {item.text}
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
