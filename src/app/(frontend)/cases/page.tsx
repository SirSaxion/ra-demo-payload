import type { Metadata } from "next";
import Hero from "@/components/sections/cases/Hero";
import BestVariants from "@/components/sections/cases/BestVariants";
import VideoTestimonials from "@/components/sections/cases/VideoTestimonials";
import Masonry from "@/components/sections/cases/Masonry";
import ProjectsShowcase from "@/components/sections/cases/ProjectsShowcase";
import IndustryBreakdown from "@/components/sections/cases/IndustryBreakdown";
import ProcessShowcase from "@/components/sections/cases/ProcessShowcase";
import StartYourStory from "@/components/sections/cases/StartYourStory";

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  title: "Cases & Resultaten | Real Accelerate",
  description: "Bewezen resultaten van honderden vastgoedprofessionals. Van lokale makelaars tot internationale projecten – onze beste transformaties.",
}

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        badge="Cases & Resultaten"
        title="Bewezen resultaten van"
        titleHighlight="honderden"
        subtitle="Van lokale makelaars tot internationale projecten – onze beste transformaties."
        ctaPrimary="Claim gratis strategiesessie"
        ctaSecondary="Bekijk top cases"
        ctaSecondaryHref="#beste-cases"
        stats={[
          { icon: "Users", label: "Clients", value: 200, suffix: "+" },
          { icon: "LineChart", label: "Omzetgroei", value: 50, suffix: "M+" },
          { icon: "Briefcase", label: "Deals", value: 2847 },
          { icon: "Globe", label: "Landen", value: 4 }
        ]}
        image="/images/rudy-thumbs-up.png"
        imageAlt="Rudy met duim omhoog"
      />

      <BestVariants
        badge="Onze beste cases"
        title="Uitgelichte transformaties"
        subtitle="Een selectie van onze meest indrukwekkende resultaten – strak, helder en geloofwaardig."
        featuredBadge="FEATURED CASE"
        featuredCompany="De Brabant Makelaar"
        featuredSubtitle="Van 2 naar 8 werknemers in 18 maanden"
        featuredImage="/images/case-de-brabant-makelaar.webp"
        featuredImageAlt="Team De Brabant Makelaar"
        stats={[
          { icon: "TrendingUp", label: "Maandomzet", from: "€20k", to: "€65k", suffix: "in 18 maanden" },
          { icon: "Target", label: "Trajecten", from: "5", to: "12", suffix: "per maand" },
          { icon: "Users2", label: "Team", from: "2", to: "8", suffix: "werknemers" },
          { icon: "Building2", label: "Locaties", from: "1", to: "4", suffix: "nieuwe vestigingen" }
        ]}
        results={[
          { icon: "TrendingUp", text: "Bewezen marketingmachine ingericht" },
          { icon: "Users2", text: "5 aankoopmakelaars actief" },
          { icon: "CheckCircle2", text: "Agenda's gevuld met kwalitatieve afspraken" }
        ]}
        otherCases={[
          {
            company: "Thoma Post",
            sector: "Makelaars",
            icon: "Home",
            highlight: "31 afspraken in maand 1",
            bullets: ["Snelste start", "Kwalitatieve leads", "Consistente pijplijn"],
            image: "/images/thoma_thumb.png"
          },
          {
            company: "Dubai Property",
            sector: "Internationaal",
            icon: "Globe2",
            highlight: "$8.5M+ verkocht",
            bullets: ["Nationwide events", "IQI Global partner", "Snelle doorloop"],
            image: "/images/dubai_thumb.jpg"
          }
        ]}
      />

      <VideoTestimonials
        badge="Video testimonials"
        title="Hoor het van makelaars zelf"
        subtitle="Echte verhalen van professionals die hun business transformeerden met onze marketing machine."
        durationBadge="~60 sec"
        activeIndicator="Nu aan het spelen"
        sidebarHeader="Andere verhalen"
        videos={[
          {
            id: 1,
            company: "De Brabant Makelaar",
            name: "Amory",
            role: "Eigenaar",
            thumbnail: "/images/videothumb1.jpeg",
            videoUrl: "/videos/testimonial-brabant.mp4",
            quote: "Van €20k naar €65k maandomzet in 18 maanden. De marketing machine werkt echt.",
            highlight: "225% omzetgroei"
          },
          {
            id: 2,
            company: "Bink & Partners",
            name: "Pieter",
            role: "Makelaar",
            thumbnail: "/images/videothumb2.jpeg",
            videoUrl: "/videos/testimonial-bink.mp4",
            quote: "Ik betaalde €800 per maand aan slechte leads. Nu heb ik een wachtrij van ideale klanten die mij al willen.",
            highlight: "30+ afspraken per jaar"
          },
          {
            id: 3,
            company: "Thoma Post Makelaardij",
            name: "Thoma",
            role: "Eigenaar",
            thumbnail: "/images/videothumb3.jpeg",
            videoUrl: "/videos/testimonial-thoma.mp4",
            quote: "31 kwalitatieve afspraken in de eerste maand. Ik had niet verwacht dat het zo snel zou gaan.",
            highlight: "Snelste resultaten ooit"
          }
        ]}
      />

      <Masonry
        kicker="Succesverhalen"
        title="Hoe makelaars 300% meer leads krijgen"
        subtitle="Ontdek hoe ambitieuze makelaars hun business transformeren met onze bewezen aanpak"
      />

      <ProjectsShowcase
        badge="Onze Projecten"
        title="Websites die écht converteren"
        subtitle="Bekijk enkele van onze recentste projecten voor ambitieuze makelaars. Van concept tot conversie."
      />

      <IndustryBreakdown />

      <ProcessShowcase
        badge="Onze Methodologie"
        title="Drie stappen naar voorspelbare groei"
        subtitle="Onze bewezen 3-stappen methodologie heeft al honderden vastgoedprofessionals geholpen hun bedrijf te laten groeien."
        steps={[
          {
            number: "1",
            title: "Strategische Analyse",
            subtitle: "Huidige situatie & doelen in kaart",
            icon: "Target",
            items: [
              "Doelgroep & regio's (exclusiviteit per regio)",
              "Knelpunten die groei remmen"
            ],
            timeline: "Week 1-2"
          },
          {
            number: "2",
            title: "Custom Marketing Systeem",
            subtitle: "Implementatie op maat",
            icon: "Hammer",
            items: [
              "Huidige website, campagnes en CRM in kaart",
              "Doelen afgestemd op resultaatgaranties"
            ],
            timeline: "Week 3-4"
          },
          {
            number: "3",
            title: "Resultaten & Optimalisatie",
            subtitle: "Meetbare groei realiseren",
            icon: "TrendingUp",
            items: [
              "Meetbare resultaten en groei",
              "Schaalbaarheid voor lange termijn groei"
            ],
            timeline: "Maand 2+"
          }
        ]}
      />

      <StartYourStory
        badge="Start Jouw Verhaal"
        title="WORD DE VOLGENDE"
        titleHighlight="SUCCES STORY"
        benefits={[
          "Analyse huidige situatie en groeidoelen",
          "Identificatie knelpunten die jou tegenhouden",
          "Concreet plan om doelstellingen te behalen"
        ]}
        ctaLabel="Claim je gratis strategiesessie"
        ctaSubtext="30 minuten • Gratis • Vrijblijvend"
        ctaFootnote='📅 "Beperkte plaatsen - alleen voor serieuze groeiers"'
      />
    </div>
  );
}
