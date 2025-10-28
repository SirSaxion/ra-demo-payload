import type { Metadata } from "next";
import HeroSection from "@/components/sections/hr-recruitment/HeroSection";
import TrustStripSection from "@/components/sections/hr-recruitment/TrustStripSection";
import PainPointsSection from "@/components/sections/hr-recruitment/PainPointsSection";
import MethodologySection from "@/components/sections/hr-recruitment/MethodologySection";
import TransformationSection from "@/components/sections/hr-recruitment/TransformationSection";
import ResultatenBentoGrid from "@/components/sections/hr-recruitment/ResultatenBentoGrid";
import WatJeKrijgtSection from "@/components/sections/hr-recruitment/WatJeKrijgtSection";
import VoorWieIsDitSection from "@/components/sections/hr-recruitment/VoorWieIsDitSection";
import StrategieSessionCTA from "@/components/sections/hr-recruitment/StrategieSessionCTA";
import FAQSection from "@/components/sections/hr-recruitment/FAQSection";

export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  title: "Marketing voor HR & Recruitment | Real Accelerate",
  description: "Marketing voor recruitment bureaus en HR professionals. Vind talent sneller met gerichte strategieën.",
}

export default function HRRecruitmentPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-background)] font-sans">
      <HeroSection />
      <TrustStripSection />
      <PainPointsSection />
      <TransformationSection />
      <MethodologySection />
      <ResultatenBentoGrid />
      <WatJeKrijgtSection />
      <VoorWieIsDitSection />
      <StrategieSessionCTA />
      <FAQSection />
    </div>
  );
}
