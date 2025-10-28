import * as React from "react";
import { SectionHeader, SectionShell } from "@/components/sections/Section";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "Met Real Accelerate hebben we onze afsprakenstroom verdubbeld in 60 dagen. Het team is scherp en super praktisch.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    name: "Elise van Dijk",
    role: "Makelaar, Utrecht",
  },
  {
    text: "In de eerste maand 31 afspraken. De funnels en opvolging zitten strak in elkaar.",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
    name: "Bilal Ahmed",
    role: "Hypotheekadviseur, Rotterdam",
  },
  {
    text: "Heldere strategie, snelle implementatie. 1000% omzetgroei over het jaar heen is bizar maar echt gebeurd.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
    name: "Sophie Visser",
    role: "Franchise-eigenaar",
  },
  {
    text: "We hebben vier nieuwe locaties geopend in 8 maanden. Schaalbaar en meetbaar.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
    name: "Omar de Jong",
    role: "Commercieel Directeur",
  },
  {
    text: "Eindelijk rust in marketing en sales. Proces, data, en resultaten: alles klopt.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "ROI van €6 per €1 voelt bijna te goed, maar het staat gewoon in de cijfers.",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
    name: "Ruben Jansen",
    role: "Eigenaar makelaarskantoor",
  },
  {
    text: "Team gegroeid met 3 mensen per maand, zonder chaos. Duidelijke playbooks.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    name: "Natalie Post",
    role: "COO",
  },
  {
    text: "Internationaal actiever geworden: Spanje en Dubai. Campagnes werken overal.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
  {
    text: "Beste beslissing van het jaar. Eindelijk voorspelbaarheid in de pipeline.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    name: "Anne de Bruin",
    role: "Founder",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsWall() {
  return (
    <SectionShell background="grid" paddingY="lg" topWave="none" bottomWave="none" className="bg-[var(--brand-100)]">
      <div
        style={{
          // Ensure high-contrast text and borders on light yellow background
          // @ts-ignore - CSS custom properties
          "--foreground": "#000",
          // @ts-ignore
          "--color-text-primary": "#000",
          // @ts-ignore
          "--color-text-secondary": "rgba(0,0,0,0.70)",
          // @ts-ignore
          "--color-text-muted": "rgba(0,0,0,0.56)",
          // @ts-ignore
          "--color-border": "rgba(0,0,0,0.10)",
        } as React.CSSProperties}
      >
        <SectionHeader
          kicker="TESTIMONIALS"
          title="Wat onze klanten zeggen"
          subtitle="Echte verhalen, echte groei"
          kickerVariant="custom"
          kickerClassName="border border-black/10 bg-black/[0.04] px-2.5 py-0.5 text-black"
          kickerDotClassName="bg-black"
        />

        <div className="flex justify-center gap-6 mt-8 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[720px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </SectionShell>
  );
}
