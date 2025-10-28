import type { Metadata } from "next";
import Hero from "@/components/sections/projectontwikkelaars/Hero";
import TrustStrip from "@/components/sections/projectontwikkelaars/TrustStrip";
import PainPointsSection from "@/components/sections/projectontwikkelaars/PainPointsSection";
import MethodologySection from "@/components/sections/projectontwikkelaars/MethodologySection";
import BewezenAanpakSection from "@/components/sections/projectontwikkelaars/BewezenAanpakSection";
import ResultatenBentoGrid from "@/components/sections/projectontwikkelaars/ResultatenBentoGrid";
import DubaiSuccessStorySection from "@/components/sections/projectontwikkelaars/DubaiSuccessStorySection";
import WatJeKrijgtSection from "@/components/sections/projectontwikkelaars/WatJeKrijgtSection";
import VoorWieIsDitSection from "@/components/sections/projectontwikkelaars/VoorWieIsDitSection";
import StrategieSessionCTA from "@/components/sections/projectontwikkelaars/StrategieSessionCTA";
import FAQSection from "@/components/sections/projectontwikkelaars/FAQSection";

export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  title: "Marketing voor projectontwikkelaars | Real Accelerate",
  description: "Marketing voor projectontwikkelaars. Vul je nieuwbouwprojecten sneller met gerichte marketing.",
}

export default function ProjectontwikkelaarsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-background)] font-sans">
      <Hero />
      <TrustStrip />
      <PainPointsSection />
      <MethodologySection />
      <BewezenAanpakSection />
      <ResultatenBentoGrid />
      <DubaiSuccessStorySection />
      <WatJeKrijgtSection />
      <VoorWieIsDitSection />
      <StrategieSessionCTA />
      <FAQSection />
    </div>
  );
}
