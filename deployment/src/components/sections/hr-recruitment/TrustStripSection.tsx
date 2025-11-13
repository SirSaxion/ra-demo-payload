"use client";

import { Marquee } from "@/components/ui/marquee";

interface TrustStripSectionProps {
  items?: string[];
  ariaLabel?: string;
}

export default function TrustStripSection({
  items = [
    "50+ HR-teams geholpen",
    "Recruitment marketing experts",
    "Samen 20+ jaar HR ervaring",
    "Bewezen methodologie",
    "Employer branding specialisten",
    "Talent attraction focus",
    "73% meer sollicitaties gemiddeld",
    "3x sneller vacatures vullen",
    "Dedicated HR-specialisten",
    "Resultaatgerichte aanpak",
  ],
  ariaLabel = "Vertrouwen en ervaring",
}: TrustStripSectionProps = {}) {
  return (
    <section
      className="relative mt-0 border-y bg-section text-foreground"
      aria-label={ariaLabel}
    >
      <div className="px-0 py-2 md:py-3">
        <Marquee pauseOnHover className="[--duration:55s]">
          {items.map((item, idx) => (
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
