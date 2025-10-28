import EnhancedTimeline, { type TimelineEntry } from "@/components/sections/EnhancedTimeline";

interface TimelineSectionProps {
  title?: string;
  subtitle?: string;
  entries?: TimelineEntry[];
}

export default function TimelineSection({
  title = "Bedrijf Timeline",
  subtitle = "Onze reis tot nu toe",
  entries = [
    {
      title: "2021 — 🏗️ OPRICHTING",
      content: (
        <div>
          <ul className="list-disc pl-5">
            <li>Real Accelerate opgericht door vastgoedondernemers</li>
            <li>Eerste experimenten met leadgeneratie</li>
            <li>10 pilotklanten in Nederland</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2022 — 📈 EERSTE SUCCESSEN",
      content: (
        <div>
          <ul className="list-disc pl-5">
            <li>Methodologie verfijnd & gestandaardiseerd</li>
            <li>45 klanten, eerste internationale stappen</li>
            <li>Partnership met Edit BV voor hypotheekadviseurs</li>
            <li>€250k+ advertentie-ervaring opgebouwd</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2023 — 🌍 INTERNATIONALE EXPANSIE",
      content: (
        <div>
          <ul className="list-disc pl-5">
            <li>IQI Global Partnership (Real Accelerate = IQI Nederland)</li>
            <li>Dubai, Spanje, Bali projecten</li>
            <li>120 klanten, team uitbreiding</li>
            <li>€750k+ advertentie-ervaring</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2024 — 🚀 SCHAALBAARHEID & GROEI",
      content: (
        <div>
          <ul className="list-disc pl-5">
            <li>200+ klanten bereikt</li>
            <li>Eigen makelaarskantoor Settle gelanceerd (8 deals in start)</li>
            <li>€1M+ advertentie-ervaring milestone</li>
            <li>Ninja Selling partnership voor training</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2025 — 🎯 TOEKOMSTVISIE",
      content: (
        <div>
          <ul className="list-disc pl-5">
            <li>500+ klanten doel</li>
            <li>Europese expansie plannen</li>
            <li>AI-gedreven optimalisaties</li>
            <li>Platform voor makelaars community</li>
          </ul>
        </div>
      ),
    },
  ],
}: TimelineSectionProps = {}) {
  return (
    <EnhancedTimeline
      data={entries}
      title={title}
      subtitle={subtitle}
    />
  );
}
