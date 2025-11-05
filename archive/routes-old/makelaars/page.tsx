import type { Metadata } from "next";
import Hero from "@/components/sections/makelaars/Hero";
import TrustStrip from "@/components/sections/makelaars/TrustStrip";
import ProblemSection from "@/components/sections/makelaars/ProblemSection";
import MethodologySection from "@/components/sections/makelaars/MethodologySection";
import BewezenSysteemSection from "@/components/sections/makelaars/BewezenSysteemSection";
import ResultsBentoGrid from "@/components/sections/makelaars/ResultsBentoGrid";
import GuaranteesSection from "@/components/sections/makelaars/GuaranteesSection";
import WhatYouGetSection from "@/components/sections/makelaars/WhatYouGetSection";
import ForWhoIsThisSection from "@/components/sections/makelaars/ForWhoIsThisSection";
import StrategieSessionCTA from "@/components/sections/makelaars/StrategieSessionCTA";
import FAQSection from "@/components/sections/makelaars/FAQSection";

export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  title: "Makelaar marketing | Real Accelerate",
  description: "Groei je makelaarskantoor met bewezen marketing strategieën uit de praktijk. Van drukte naar structurele groei. Door makelaars, voor makelaars.",
}

export default function MakelaarsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-background)] font-sans">
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <MethodologySection />
      <BewezenSysteemSection />
      <ResultsBentoGrid />
      <GuaranteesSection />
      <WhatYouGetSection />
      <ForWhoIsThisSection />
      <StrategieSessionCTA />
      <FAQSection />
    </div>
  );
}
