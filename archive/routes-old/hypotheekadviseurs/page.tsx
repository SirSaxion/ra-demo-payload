import type { Metadata } from "next";
import Hero from "@/components/sections/hypotheekadviseurs/Hero";
import TrustStrip from "@/components/sections/hypotheekadviseurs/TrustStrip";
import PainPointsSection from "@/components/sections/hypotheekadviseurs/PainPointsSection";
import BewezenResultatenSection from "@/components/sections/hypotheekadviseurs/BewezenResultatenSection";
import BewezenAanpakSection from "@/components/sections/hypotheekadviseurs/BewezenAanpakSection";
import MethodologySection from "@/components/sections/hypotheekadviseurs/MethodologySection";
import EditBVPartnershipSection from "@/components/sections/hypotheekadviseurs/EditBVPartnershipSection";
import WatJeKrijgtSection from "@/components/sections/hypotheekadviseurs/WatJeKrijgtSection";
import VoorWieIsDitSection from "@/components/sections/hypotheekadviseurs/VoorWieIsDitSection";
import StrategieSessionCTA from "@/components/sections/hypotheekadviseurs/StrategieSessionCTA";
import FAQSection from "@/components/sections/hypotheekadviseurs/FAQSection";

export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  title: "Hypotheekadviseurs | Real Accelerate",
  description: "Groei je hypotheekadvies met bewezen marketing. Bewezen aanpak uit de praktijk voor duurzame groei.",
}

export default function HypotheekadviseursPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-background)] font-sans">
      <Hero />
      <TrustStrip />
      <PainPointsSection />
      <BewezenResultatenSection />
      <BewezenAanpakSection />
      <MethodologySection />
      <EditBVPartnershipSection />
      <WatJeKrijgtSection />
      <VoorWieIsDitSection />
      <StrategieSessionCTA />
      <FAQSection />
    </div>
  );
}
