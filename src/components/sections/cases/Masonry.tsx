import { SectionHeader, SectionShell } from "@/components/sections/Section";
import { SuccessStoriesMasonry, defaultStories } from "@/components/sections/SuccessStoriesMasonry";

export interface MasonryProps {
  kicker?: string
  title?: string
  subtitle?: string
}

export default function Masonry({
  kicker = "Succesverhalen",
  title = "Hoe makelaars 300% meer leads krijgen",
  subtitle = "Ontdek hoe ambitieuze makelaars hun business transformeren met onze bewezen aanpak"
}: MasonryProps) {
  return (
    <SectionShell
      background="grid"
      paddingY="lg"
      className="bg-section text-foreground"
    >
      <SectionHeader
        kicker={kicker}
        title={title}
        subtitle={subtitle}
      />
      
      <SuccessStoriesMasonry
        showHeader={false}
        embedded
        stories={defaultStories}
        className="mx-auto w-full max-w-6xl md:max-w-7xl"
      />
    </SectionShell>
  );
}
