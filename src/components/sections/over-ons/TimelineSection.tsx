import EnhancedTimeline, { type TimelineEntry } from "@/components/sections/EnhancedTimeline";

interface TimelineItem {
  year: string;
  title: string;
  bullets: Array<{ text: string }> | string[];
}

interface TimelineSectionProps {
  title?: string;
  subtitle?: string;
  items?: TimelineItem[];
}

export default function TimelineSection({
  title = "Company Timeline",
  subtitle = "Our journey so far",
  items = [],
}: TimelineSectionProps) {
  
  // Convert Payload items to EnhancedTimeline format
  const convertedEntries: TimelineEntry[] = items.length > 0 ? items.map((item) => ({
    title: `${item.year} — ${item.title}`,
    content: (
      <div>
        <ul className="list-disc pl-5">
          {Array.isArray(item.bullets) ? item.bullets.map((bullet, idx) => (
            <li key={idx}>{typeof bullet === 'string' ? bullet : bullet.text}</li>
          )) : null}
        </ul>
      </div>
    ),
  })) : [
    // Default fallback timeline
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
  ];

  return (
    <EnhancedTimeline
      data={convertedEntries}
      title={title}
      subtitle={subtitle}
    />
  );
}
