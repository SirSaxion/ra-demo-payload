import { Marquee } from "@/components/ui/marquee";

interface TrustStripSectionProps {
  items?: string[];
}

export default function TrustStripSection({
  items = [
    "Samen 30+ jaar marketing ervaring",
    "Gevestigd in Nederland",
    "Samen 40+ jaar vastgoed ervaring",
    "Persoonlijke benadering",
    "Transparante werkwijze",
    "Wereldwijd actief",
    "Data-driven beslissingen",
    "Innovatieve oplossingen",
    "Klantgericht team",
    "Bewezen track record",
  ],
}: TrustStripSectionProps = {}) {
  return (
    <section className="relative mt-0 border-y bg-section text-foreground">
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
