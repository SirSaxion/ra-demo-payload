"use client";

import { Marquee } from "@/components/ui/marquee";

export interface MakelaarsInternationalTrustStripProps {
  trustItems?: string[];
}

export default function MakelaarsInternationalTrustStrip({
  trustItems = [
    "Bali: 400+ leads, 15 units verkocht in 3 maanden",
    "Spanje: 200+ warme leads, 10% conversie",
    "Oostenrijk: Alpen project volledig uitverkocht",
    "Actief in Spanje, Oostenrijk, Bali & Portugal",
    "Toegang tot IQI Global netwerk (40.000+ agents)",
    "Complete campagnes: van strategie tot verkoop",
    "Real-time dashboards & transparante rapportage",
    "Lokale events in Nederland & België",
  ]
}: MakelaarsInternationalTrustStripProps) {

  return (
    <section className="relative mt-0 border-y bg-section text-foreground">
      <div className="px-0 py-2 md:py-3">
        <Marquee pauseOnHover className="[--duration:55s]">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="mx-6 flex items-center gap-2 font-mono text-[11px] text-foreground md:text-sm"
            >
              <span className="inline-block h-1 w-1 rounded-full bg-[var(--brand-500)]" />
              <span className="whitespace-nowrap">{item}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
