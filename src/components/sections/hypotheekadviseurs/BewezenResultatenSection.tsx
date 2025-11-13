"use client";

import CaseStudy from "@/components/sections/home/CaseStudy";

export interface BewezenResultatenSectionProps {
  kicker?: string
  title?: string
  subtitle?: string
  caseStudyImage?: any  // Media object from CMS
  caseStudyImageAlt?: string
  kpis?: Array<{ label: string; from: number; to: number; unit?: string; sublabel?: string; span?: number }>
  bullets?: string[]
}

export default function BewezenResultatenSection({
  kicker = 'Bewezen resultaten',
  title = 'Van offerte-sites naar voorspelbare groei',
  subtitle = 'Hypotheekadviseur + Edit BV Partnership',
  caseStudyImage,
  caseStudyImageAlt,
  kpis = [
    { label: "Afspraken per maand", from: 5, to: 46, unit: "number", sublabel: "+820% groei", span: 2 },
    { label: "Contacten bereikt", from: 200, to: 1300 },
  ],
  bullets = [
    "Duurzaamheidsconsulten als nieuwe instroommotor",
    "Compleet systeem vóór offerte-sites",
    "+820% groei in afspraken met bewezen strategieën",
  ]
}: BewezenResultatenSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cs-yellow-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cs-yellow-grid)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>
      
      <CaseStudy
          tone="light"
          frameless
          showBackdropLogo={false}
          kicker={kicker}
          title={title}
          subtitle={subtitle}
          imageSrc={caseStudyImage?.sizes?.large?.url || caseStudyImage?.url || "/images/case-de-brabant-makelaar.webp"}
          imageAlt={caseStudyImageAlt || caseStudyImage?.alt || "Hypotheekadviseur Edit BV Partnership"}
          imageSizes="(min-width: 1024px) 50vw, 90vw"
          kpis={kpis}
          bullets={bullets}
        />
    </section>
  );
}