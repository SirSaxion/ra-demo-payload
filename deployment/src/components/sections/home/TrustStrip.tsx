import { Marquee } from "@/components/ui/marquee";

const defaultTrustItems = [
  "50+ succesvolle projecten",
  "Gemiddeld 200% groei in leads",
  "Samen 30+ jaar marketing ervaring",
  "Bewezen resultaten",
  "Maatwerk websites",
  "Conversie geoptimaliseerd",
  "Samen 40+ jaar vastgoed ervaring",
  "ROI gefocust",
  "Data-driven aanpak",
  "Wereldwijd actief",
];

interface TrustStripProps {
  items?: string[];
  ariaLabel?: string;
}

export default function TrustStrip({ 
  items = defaultTrustItems,
  ariaLabel = "Vertrouwen en ervaring"
}: TrustStripProps) {
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
