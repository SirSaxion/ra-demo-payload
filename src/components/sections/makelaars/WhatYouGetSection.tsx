"use client";

import React from "react";
import { Check, Gem } from "lucide-react";

export interface WhatYouGetSectionProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  services?: string[];
  bonusTitle?: string;
  bonusDescription?: string;
}

export default function WhatYouGetSection({
  kicker = "Wat je krijgt",
  title = "Meer dan een marketingcampagne",
  subtitle = "Wij helpen makelaarskantoren niet alleen met marketing of zichtbaarheid. Wij bouwen mee aan het hele fundament van je kantoor:",
  services = [
    "Branding en positionering",
    "Online marketing en campagnes",
    "Procesoptimalisatie en automatisering",
    "Groei- en schaalstrategieën"
  ],
  bonusTitle = "Ontdek onze oplossingen",
  bonusDescription = "Wil je meer weten over hoe wij jouw kantoor kunnen helpen groeien? Neem contact op voor een vrijblijvend gesprek."
}: WhatYouGetSectionProps) {

  return (
    <section className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,var(--bg-section)_15%,var(--bg-section)_85%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" className="text-foreground" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)] mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {kicker}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-[20px] p-8 md:p-12 max-w-4xl mx-auto shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          {/* Services List */}
          <ul className="mx-auto max-w-2xl space-y-4 type-body text-[var(--color-text-secondary)] mb-8">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 text-[var(--brand-500)] flex-shrink-0" />
                <span className="leading-relaxed">{service}</span>
              </li>
            ))}
          </ul>

          {/* Bonus Section */}
          <div className="relative overflow-hidden bg-gradient-to-r from-[var(--brand-400)]/10 via-[var(--brand-500)]/5 to-[var(--brand-600)]/10 border border-[var(--brand-400)]/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--brand-500)] text-black shadow-lg flex-shrink-0 mt-0.5">
                <Gem className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-foreground mb-1">
                  {bonusTitle}
                </h4>
                <p className="text-[var(--color-text-secondary)]">
                  {bonusDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
