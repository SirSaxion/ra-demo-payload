"use client";

import React from "react";
import Image from "next/image";
import { Building2, CheckCircle } from "lucide-react";

export interface BewezenAanpakSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  practiceTitle?: string;
  practicePoints?: Array<{ text: string }> | string[];
  missionStatement?: string;
}

export default function BewezenAanpakSection({
  badge = "Onze ervaring",
  title = "Ervaring als vastgoedondernemers en investeerders",
  subtitle = "Wij zijn geen traditioneel marketingbureau. Als vastgoedondernemers en vastgoedinvesteerders begrijpen we de uitdagingen van binnenuit. Wat we voor onze klanten doen, hebben we zelf getest, verfijnd en bewezen in de praktijk.",
  image = "/images/emiro_working_at_desk.png",
  imageAlt = "Project Marketing Machine",
  practiceTitle = "ONZE PRAKTIJKERVARING",
  practicePoints = [
    "<strong>Zelf actief als vastgoedondernemers</strong> met hands-on ervaring in project marketing",
    "<strong>Creatieve campagnes en slimme opvolgsystemen</strong> die écht converteren",
    "<strong>Brede kennis van de markt</strong> van Nederlandse tot internationale projecten",
    "<strong>Moderne marketing tools en automatisering</strong> gecombineerd met persoonlijke aanpak",
    "<strong>Resultaatgedreven met transparante rapportage</strong> en continue optimalisatie"
  ],
  missionStatement = "Wat we voor onze klanten doen, doen we ook voor onszelf. Daarom weten we dat het werkt."
}: BewezenAanpakSectionProps) {
  return (
    <section className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,var(--bg-section)_15%,var(--bg-section)_85%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="project-aanpak-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#project-aanpak-grid)" className="text-foreground" />
        </svg>
      </div>

      {/* Top subtle fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[color-mix(in_oklab,var(--neutral-900)_28%,transparent)] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)] mb-6">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
              {badge}
            </span>
          </div>

          {/* Two column layout: text left, visual content right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-foreground mb-6">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
                {subtitle}
              </p>
            </div>

            {/* Visual element */}
            <div className="lg:order-last">
              <div className="relative overflow-hidden rounded-xl shadow-lg max-w-md mx-auto lg:mx-0 lg:max-w-none bg-[var(--color-surface-3)] border border-[var(--color-border)] aspect-[4/3]">
                <Image 
                  src={image} 
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Approach Details */}
        <div className="mx-auto max-w-5xl">
          <div className="bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-500)] rounded-xl flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-[var(--color-accent-contrast)]" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{practiceTitle}</h3>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {practicePoints.map((item, idx) => {
                const text = typeof item === 'string' ? item : item.text;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[var(--brand-500)] rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[var(--color-accent-contrast)]" />
                    </div>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed" dangerouslySetInnerHTML={{ __html: text }} />
                  </div>
                );
              })}
            </div>

            {/* Mission Statement */}
            <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg p-6 text-center">
              <p className="text-lg font-medium text-[var(--color-text-secondary)] italic leading-relaxed">
                &quot;{missionStatement}&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}