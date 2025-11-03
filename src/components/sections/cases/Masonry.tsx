import { SectionHeader, SectionShell } from "@/components/sections/Section";
import { SuccessStoriesMasonry, defaultStories } from "@/components/sections/SuccessStoriesMasonry";

export interface MasonryProps {
  kicker?: string
  title?: string
  subtitle?: string
  filterAllLabel?: string
  resultLabel?: string
  categories?: Array<{ key: string; label: string }>
  stories?: Array<{
    id: number
    name: string
    role: string
    company: string
    story: string
    achievement: string
    metric: string
    avatar: string
    rating: number
    category: string
  }>
}

export default function Masonry({
  kicker = "Succesverhalen",
  title = "Hoe makelaars 300% meer leads krijgen",
  subtitle = "Ontdek hoe ambitieuze makelaars hun business transformeren met onze bewezen aanpak",
  filterAllLabel = "Alle verhalen",
  resultLabel = "Resultaat",
  categories = [],
  stories = defaultStories
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
        stories={stories}
        filterAllLabel={filterAllLabel}
        resultLabel={resultLabel}
        categories={categories}
        className="mx-auto w-full max-w-6xl md:max-w-7xl"
      />
    </SectionShell>
  );
}
