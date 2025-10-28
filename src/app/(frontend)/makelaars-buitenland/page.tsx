import type { Metadata } from "next";
import MakelaarsInternationalHero from "@/components/sections/makelaars-buitenland/MakelaarsInternationalHero";
import MakelaarsInternationalTrustStrip from "@/components/sections/makelaars-buitenland/MakelaarsInternationalTrustStrip";
import InternationalPainPointsSection from "@/components/sections/makelaars-buitenland/InternationalPainPointsSection";
import InternationalMethodologySection from "@/components/sections/makelaars-buitenland/InternationalMethodologySection";
import InternationalCasesSection from "@/components/sections/makelaars-buitenland/InternationalCasesSection";
import InternationalGlobeSection from "@/components/sections/makelaars-buitenland/InternationalGlobeSection";
import InternationalWhatYouGetSection from "@/components/sections/makelaars-buitenland/InternationalWhatYouGetSection";
import InternationalForWhoIsThisSection from "@/components/sections/makelaars-buitenland/InternationalForWhoIsThisSection";
import InternationalStrategySessionCTA from "@/components/sections/makelaars-buitenland/InternationalStrategySessionCTA";
import InternationalFAQSection from "@/components/sections/makelaars-buitenland/InternationalFAQSection";

export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  title: "Marketing voor makelaars in het buitenland | Real Accelerate",
  description: "Marketing voor Nederlandse makelaars in het buitenland. Van Dubai tot Spanje - wereldwijd actief met IQI Global.",
}

export default function MakelaarsBuitenlandPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-background)] font-sans">
      <MakelaarsInternationalHero />
      <MakelaarsInternationalTrustStrip />
      <InternationalPainPointsSection />
      <InternationalMethodologySection />
      <InternationalCasesSection />
      <InternationalGlobeSection />
      <InternationalWhatYouGetSection />
      <InternationalForWhoIsThisSection />
      <InternationalStrategySessionCTA />
      <InternationalFAQSection />
    </div>
  );
}
