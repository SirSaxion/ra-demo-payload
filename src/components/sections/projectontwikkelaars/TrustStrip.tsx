"use client";

import { Marquee } from "@/components/ui/marquee";

export interface TrustStripProps {
  trustItems?: string[];
}

export default function TrustStrip({
  trustItems = [
    "Ervaring als vastgoedondernemers en investeerders",
    "Creatieve campagnes die onderscheiden",
    "Slimme opvolging met automatisering en persoonlijke touch",
    "Van lange verkoopcycli naar snelle resultaten",
    "Complete marketing en beleving expertise",
    "Bewezen projectverkoop strategieën",
    "Nederlandse en internationale projectervaring",
    "Transparante rapportage en continue optimalisatie",
    "Grip en voorspelbaarheid in het verkoopproces",
    "Partner die de vastgoedbranche van binnenuit kent",
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