"use client";

import React from "react";
import { Globe } from "@/components/ui/globe";
import { Badge } from "@/components/ui/badge";
import { MapPin, Globe as GlobeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { COBEOptions } from "cobe";

// Nederlandse + internationale hotspot locaties voor makelaars (één punt per land)
const dutchInternationalMarkers: Array<{ location: [number, number]; size: number }> = [
  // Nederland (home base)
  { location: [52.3676, 4.9041], size: 0.08 }, // Amsterdam, Nederland

  // Populaire internationale bestemmingen voor Nederlandse makelaars
  { location: [40.4168, -3.7038], size: 0.09 }, // Madrid, Spanje
  { location: [38.7223, -9.1393], size: 0.06 }, // Lissabon, Portugal
  { location: [43.7696, 11.2558], size: 0.06 }, // Florence, Italië
  { location: [35.1856, 33.3823], size: 0.06 }, // Cyprus (Nicosia)
  { location: [39.3999, 49.8671], size: 0.05 }, // Turkije

  // Aziatische hotspots via IQI
  { location: [-8.3405, 115.0920], size: 0.08 }, // Bali, Indonesië
  { location: [7.8731, 98.3936], size: 0.06 }, // Phuket, Thailand
  { location: [3.1390, 101.6869], size: 0.09 }, // Kuala Lumpur, Maleisië
  { location: [1.3521, 103.8198], size: 0.07 }, // Singapore
  { location: [25.2048, 55.2708], size: 0.08 }, // Dubai, VAE

  // Oceanië
  { location: [-33.8688, 151.2093], size: 0.07 }, // Sydney, Australië

  // Noord-Amerika
  { location: [43.6532, -79.3832], size: 0.06 }, // Toronto, Canada
];

export interface InternationalGlobeSectionProps {
  badge?: string
  title?: string
  subtitle?: string
}

const DUTCH_INTERNATIONAL_GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0.3, // Start with Europe in view
  theta: 0.2,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  // Brand yellow voor Nederlandse/internationale locaties
  markerColor: [246 / 255, 207 / 255, 38 / 255],
  glowColor: [1, 1, 1],
  markers: dutchInternationalMarkers,
};

export default function InternationalGlobeSection({
  badge = 'Wereldwijd Netwerk',
  title = 'Jouw project<br />wereldwijd vermarkten',
  subtitle = 'Van Bali tot Spanje, van Oostenrijk tot Portugal: wij bereiken kopers in Nederland, Duitsland en België voor jouw internationale project'
}: InternationalGlobeSectionProps) {
  return (
    <section className="relative isolate overflow-hidden pb-0 pt-[84px] md:pt-[120px] bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* Background pattern for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="globe-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#globe-grid)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>

      {/* Top wave divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -mt-px">
        <svg
          className="block h-[85px] w-full md:h-[121px] rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z"
            fill="var(--bg-section)"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header - GIGA TITEL */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-black mb-8">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
            {badge}
          </span>

          {/* GIGA TITEL TEXT */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.9] tracking-[-0.02em] text-black mb-6" dangerouslySetInnerHTML={{ __html: title }} />

          <p className="text-xl md:text-2xl text-black/70 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Globe Container - Wave cut to show more globe */}
        <div className="relative h-[280px] overflow-hidden">
          <div
            className="absolute -top-28 left-1/2 transform -translate-x-1/2"
            style={{
              clipPath: `polygon(
                0% 0%,
                100% 0%,
                100% 40%,
                95% 43%,
                85% 47%,
                75% 50%,
                65% 52%,
                50% 53%,
                35% 52%,
                25% 50%,
                15% 47%,
                5% 43%,
                0% 40%
              )`
            }}
          >
            <div className="w-[800px] h-[800px]">
              <Globe config={DUTCH_INTERNATIONAL_GLOBE_CONFIG} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -mb-px">
        <svg
          className="block h-[85px] w-full md:h-[121px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z"
            fill="var(--bg-section)"
          />
        </svg>
      </div>
    </section>
  );
}