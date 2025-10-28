"use client";

import CaseStudy from "@/components/sections/home/CaseStudy";

export interface BewezenResultatenSectionProps {
  kicker?: string
  title?: string
  subtitle?: string
}

export default function BewezenResultatenSection({
  kicker = 'Bewezen resultaten',
  title = 'Edit BV Case Study',
  subtitle = '46 afspraken uit 1.300 contacten - 3.5% conversie'
}: BewezenResultatenSectionProps) {
  return (
    <section className="relative isolate overflow-hidden py-12 md:py-16 pt-[60px] md:pt-[80px] pb-[60px] md:pb-[80px] bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* subtle grid for depth on yellow */}
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

      {/* Top wave divider from previous (dark) section */}
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

      <div className="mx-auto mt-6 max-w-[90rem] px-2 md:px-4 lg:px-6">
        <CaseStudy
            tone="light"
            frameless
            showBackdropLogo={false}
            kicker="BEWEZEN RESULTATEN"
            title="Van offerte-sites naar voorspelbare groei"
            subtitle="Hypotheekadviseur + Edit BV Partnership"
            imageSrc="/images/case-de-brabant-makelaar.webp"
            imageAlt="Hypotheekadviseur Edit BV Partnership"
            imageSizes="(min-width: 1024px) 50vw, 90vw"
            kpis={[
              { label: "Afspraken per maand", from: 5, to: 46, unit: "number", sublabel: "+820% groei", span: 2 },
              { label: "Contacten bereikt", from: 200, to: 1300 },
            ]}
            bullets={[
              "Duurzaamheidsconsulten als nieuwe instroommotor",
              "Compleet systeem vóór offerte-sites",
              "+820% groei in afspraken met bewezen strategieën",
            ]}
          />
      </div>

      {/* Bottom wave divider into next section (different shape from top) */}
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