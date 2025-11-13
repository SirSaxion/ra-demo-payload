"use client";

import { Marquee } from "@/components/ui/marquee";

export interface TrustStripProps {
  trustItems?: string[];
}

export default function TrustStrip({
  trustItems = [
    "30+ jaar marketing ervaring",
    "Zelf actief als makelaars met SETTL.",
    "€10k → €100k omzet met onze klanten",
    "Bewezen strategieën uit de praktijk",
    "Van 2 naar 8 werknemers in 18 maanden",
    "Geen afhankelijkheid van dure leadplatformen",
    "Transparant en resultaatgericht",
    "Complete ondersteuning van A tot Z"
  ]
}: TrustStripProps) {

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
