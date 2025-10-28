import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import TrustStrip from "@/components/sections/home/TrustStrip";
import ProblemSection from "@/components/sections/home/ProblemSection";
import CaseStudy from "@/components/sections/home/CaseStudy";
import UniqueApproach from "@/components/sections/home/UniqueApproach";
import FlowConnector from "@/components/sections/home/FlowConnector";
import MarketingMachine from "@/components/sections/home/MarketingMachine";
import TargetGroupsOverview, { TargetGroupsOverviewPhotos } from "@/components/sections/home/TargetGroupsOverview";
import NumbersSection from "@/components/sections/home/NumbersSection";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import FAQSection from "@/components/sections/home/FAQSection";
import HowItWorksSection from "@/components/sections/home/HowItWorksSection";
import FinalCTA from "@/components/sections/home/FinalCTA";

// Force static generation at build time
export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  title: "Real Accelerate | Online marketing voor vastgoedprofessionals | Door experts, voor experts",
  description: "Groei je vastgoedbedrijf met bewezen online marketing strategieën. Van 2 naar 8 werknemers in 18 maanden. Makelaar marketing, leadgeneratie en automatisering door vastgoedexperts.",
}

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Real Accelerate",
  "description": "Online marketing bureau gespecialiseerd in vastgoedmarketing voor makelaars en vastgoedondernemers",
  "url": "https://realaccelerate.nl",
  "telephone": "085 060 2989",
  "email": "info@realaccelerate.nl",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Daalwijkdreef 47",
    "postalCode": "1103 AD",
    "addressLocality": "Amsterdam",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.3676,
    "longitude": 4.9041
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  }
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-background font-sans">
        <HeroSection
          kicker="Voor ambitieuze vastgoedprofessionals"
          title="Door vastgoedexperts, voor vastgoedexperts"
          subtitle="Vanuit onze eigen ervaring helpen wij jouw bedrijf groeien en projecten sneller verkopen met slimme online marketing."
          ctaPrimary={{
            label: "Plan een bakkie ☕",
            href: "mailto:info@realaccelerate.nl"
          }}
          ctaSecondary={{
            label: "Bekijk cases",
            href: "/cases"
          }}
        />

        <TrustStrip
          items={[
            "IQI Global partner",
            "Recreatie",
            "Samen 30+ jaar marketing ervaring",
            "Wereldwijd actief",
            "Nieuwbouw",
            "Projecten",
            "Samen 40+ jaar vastgoed ervaring",
            "Makelaar",
            "Zelf actief in de vastgoedmarkt",
            "Wereldwijd netwerk"
          ]}
          ariaLabel="Vertrouwen en ervaring"
        />

        <ProblemSection
          kicker="Het probleem dat wij zien"
          title="95% van vastgoedondernemers blijft na 10+ jaar nog steeds afhankelijk van externe leads"
          subtitle="Dit is wat we bij veel vastgoedprofessionals terugzien. We delen het om inzicht te geven—zodat je kunt bepalen wat voor jou werkt."
          oldSituation={{
            title: "OUDE SITUATIE",
            items: [
              { icon: "XCircle", text: "Niet mee gaan met technologie" },
              { icon: "ThumbsDown", text: "Niet onderscheidend" },
              { icon: "Activity", text: "Geen stabiliteit" },
              { icon: "Frown", text: "Geleefd worden door je agenda" }
            ]
          }}
          newSituation={{
            title: "ONZE METHODE",
            items: [
              { icon: "CheckCircle2", text: "Geautomatiseerde systemen" },
              { icon: "Crown", text: "Onderscheidende uitstraling en dienstverlening" },
              { icon: "Banknote", text: "Stabiel inkomen" },
              { icon: "TrendingUp", text: "Focus op waar je goed in bent" }
            ]
          }}
        />

        <CaseStudy
          title="Case: De Brabant Makelaar"
          kicker="CASE STUDY"
          subtitle="In 18 maanden van 2 naar 8 werknemers"
          tone="light"
          frameless={true}
          showBackdropLogo={false}
          imageSrc="/images/case-de-brabant-makelaar.webp"
          imageAlt="Team De Brabant Makelaar"
          kpis={[
            { label: "Maandomzet", from: 20000, to: 65000, unit: "eur", sublabel: "in 18 mnd", span: 2 },
            { label: "Trajecten per maand", from: 5, to: 12 }
          ]}
          bullets={[
            "Bewezen marketingmachine ingericht",
            "5 aankoopmakelaars actief",
            "Agenda's gevuld met kwalitatieve afspraken"
          ]}
          ctaPrimary={{ label: "Bekijk volledige case", href: "/cases" }}
          ctaSecondary={{ label: "Alle cases", href: "/cases" }}
        />

        <UniqueApproach
          kicker="Onze aanpak"
          title="Wij werken anders dan andere marketing bureaus"
          subtitle="We bouwen geen campagnes, we bouwen systemen"
          metricValue="99%"
          metricLabel="klanttevredenheid"
          card1Title="Nieuwste technieken"
          card1Description="Altijd voorop met de laatste marketing innovaties en tools."
          card2Title="Marketing van A tot Z"
          card2Description="Complete marketingoplossing zonder gedoe of verborgen kosten."
          card3Title="Voorspelbare groei"
          card3Description="Consistente resultaten door bewezen systemen en processen."
          card4Title="Onze eigen ervaring"
          card4Description="Vanuit eigen vastgoedervaring weten wij wat werkt in de praktijk."
          ctaText="Klinkt als de juiste fit?"
          ctaButtonLabel="Claim gratis strategiesessie"
          ctaButtonHref="mailto:info@realaccelerate.nl"
        />

        <FlowConnector />

        <MarketingMachine
          title="De Marketing Machine"
          subtitle="Een compleet systeem dat 24/7 voor je werkt"
          features={[
            { icon: "Globe", name: "Websites", description: "Professionele websites die converteren. SEO, responsive, en lead-capture ingebouwd.", href: "/cases", cta: "Bekijk voorbeelden", imageSrc: "/images/32.EmiroSmolders-Settle-DSC07215--compressed.webp" },
            { icon: "Target", name: "Leadgeneratie", description: "Kwalitatieve leads via Meta & Google. Slim targetten voor maximaal resultaat.", href: "/cases", cta: "Zo werkt het", imageSrc: "/images/leadgen.webp" },
            { icon: "GaugeCircle", name: "Vindbaarheid", description: "SEO optimalisatie, Google Business en content die je gevonden laat worden.", href: "/cases", cta: "Onze aanpak", imageSrc: "/images/42.EmiroSmolders-Settle-DSC07252--compressed.webp" },
            { icon: "Repeat", name: "Heractivatie", description: "Email en SMS flows die slapende leads wakker maken met relevante triggers.", href: "/cases", cta: "Voorbeeldflows", imageSrc: "/images/rudybrief.webp" },
            { icon: "PhoneCall", name: "Leads opvolgen", description: "CRM, automatische follow‑ups en appointment setting. Geen lead meer verloren.", href: "/cases", cta: "Zie systeem", imageSrc: "/images/joeptelefoon.webp" },
            { icon: "Palette", name: "Branding", description: "Sterke merkidentiteit: logo, huisstijl en contentstrategie die vertrouwen wekt.", href: "/cases", cta: "Bekijk werk", imageSrc: "/images/47.EmiroSmolders-Settle-DSC07264--compressed.webp" }
          ]}
        />

        <TargetGroupsOverview
          title="Voor wie is dit?"
          subtitle="Gespecialiseerde oplossingen per doelgroep"
        />

        <TargetGroupsOverviewPhotos
          title="Voor wie wij werken"
          subtitle="Gespecialiseerde oplossingen voor elke vastgoedprofessional"
          items={[
            { name: "Makelaars", description: "Duurzame klant‑relaties ipv lead‑jacht", img: "/images/remax.jpg", alt: "Re/max makelaars", href: "/makelaars", key: "makelaars" },
            { name: "Projectontwikkelaars", description: "Project marketing & events", img: "/images/recreatie.jpg", alt: "Recreatie projectontwikkeling", href: "/projectontwikkelaars", key: "projectontwikkelaars" },
            { name: "Hypotheekadviseurs", description: "Onafhankelijk van offerte‑sites worden", img: "/images/hypotheekvisie.jpg", alt: "Hypotheekvisie kantoor", href: "/hypotheekadviseurs", key: "hypotheek" },
            { name: "International", description: "IQI Global Partnership • Dubai, Spanje, Bali ervaring", img: "/images/secondhomebeurs.jpg", alt: "Second Home Beurs", href: "/makelaars-buitenland", key: "buitenland" }
          ]}
        />

        <NumbersSection
          title="Resultaten in cijfers"
          stats={[
            { value: "50+", label: "Tevreden klanten" },
            { value: "200+", label: "Projecten afgerond" },
            { value: "95%", label: "Klant tevredenheid" }
          ]}
        />

        <TestimonialsSection
          title="Uitgelichte succesverhalen"
          description="MEER SUCCESVERHALEN"
          durationSec={70}
          testimonials={[
            {
              title: "De Brabant Makelaar",
              imageSrc: "/images/brabantmakelaar_logo.webp",
              badges: ["8 makelaars actief", "Agenda gevuld"],
              author: { name: "Amory", handle: "De Brabant Makelaar", avatar: "/images/brabantmakelaar_avatar.webp" },
              text: "De dynamische heren van Real Accelerate zijn erg fijn om mee samen te werken. Proactief en zorgen voor veel resultaten. Aanrader voor iedereen die meer uit online marketing wilt halen!",
              href: "/cases"
            },
            {
              title: "Bink & Partners",
              imageSrc: "/images/binkpartners_logo.webp",
              badges: ["Leads boven verwachting", "Website complimenten"],
              author: { name: "Pieter", handle: "Bink & Partners", avatar: "/images/binkpartners_avatar.webp" },
              text: "Real Accelerate is een enthousiaste groep. Mijn nieuwe website levert veel complimenten op. Het vervolgtraject om op de socials leads te genereren is zojuist gestart en loopt prima.",
              href: "/cases"
            }
          ]}
        />

        <FAQSection
          title="Veelgestelde vragen"
          subtitle="Alles wat je moet weten"
          items={[
            { id: "item-1", icon: "Clock", question: "Hoe snel kan ik aan de slag met jullie marketingaanpak?", answer: "Wij zorgen voor een snelle implementatie van uw marketingmachine. Na onze strategiesessie starten we direct met de opzet van uw campagnes. De eerste resultaten ziet u meestal binnen enkele weken, afhankelijk van uw markt en doelgroep." },
            { id: "item-2", icon: "CreditCard", question: "Hoe werkt de samenwerking en wat kan ik verwachten?", answer: "Wij werken transparant en resultaatgericht. Onze tarieven stemmen we af op uw specifieke doelen en situatie. We focussen op meetbare groei en houden u altijd op de hoogte van de voortgang. Neem contact op voor een persoonlijk gesprek over de mogelijkheden." },
            { id: "item-3", icon: "Home", question: "Voor welke vastgoedprofessionals is jullie aanpak geschikt?", answer: "Onze marketingaanpak werkt voor alle vastgoedprofessionals: aankoopmakelaars, verkoopmakelaars, hypotheekadviseurs en projectontwikkelaars. Of u nu net begint of al jaren ervaring heeft, wij passen onze strategie aan uw specifieke situatie en doelgroep aan." },
            { id: "item-4", icon: "Users", question: "Hoe zorgen jullie voor focus op mijn regio?", answer: "Wij werken met een selectieve aanpak per regio om optimale resultaten te behalen. Dit betekent dat we zorgvuldig kijken naar de marktdynamiek in uw gebied en onze strategie daarop afstemmen. Zo kunnen we ons volledig focussen op uw succes in uw werkgebied." },
            { id: "item-5", icon: "Target", question: "Hoe zorgen jullie voor kwalitatieve leads en afspraken?", answer: "Wij richten ons op het aantrekken van kwalitatieve prospects die passen bij uw ideale klantprofiel. Door slimme targeting en bewezen strategieën zorgen we voor een constante stroom van geïnteresseerde potentiële klanten. Kwaliteit staat altijd voorop." },
            { id: "item-6", icon: "TrendingUp", question: "Wat maakt jullie aanpak uniek in de vastgoedmarkt?", answer: "Wij zijn zelf actief in de vastgoedmarkt en begrijpen de uitdagingen van makelaars. Onze marketingmachine combineert bewezen strategieën met de nieuwste technieken. Als IQI Global Partner hebben we toegang tot internationale expertise en netwerken." }
          ]}
        />

        <HowItWorksSection
          title="Hoe werkt het?"
          subtitle="Van kennismaking tot resultaat in 4 stappen"
          steps={[
            { id: 1, title: "Strategische Analyse", subtitle: "Huidige situatie & doelen in kaart", icon: "Lightbulb", bullets: ["Doelgroep & regio's", "Huidige website, campagnes en CRM in kaart", "Knelpunten die groei remmen", "Doelen afgestemd op jouw situatie"] },
            { id: 2, title: "Custom Marketing Systeem", subtitle: "Jouw ideale klanten bereiken", icon: "ClipboardCheck", bullets: ["Websites/landingspagina's die converteren", "Leadgeneratie via Meta & Google", "Vindbaarheid (SEO + Google Business)", "Heractivatie + opvolging via CRM en flows"] },
            { id: 3, title: "Resultaten & Optimalisatie", subtitle: "Meetbare resultaten en groei", icon: "LineChart", bullets: ["Real time tracking", "Continu optimalisatie"] }
          ]}
        />

        <FinalCTA
          title="Klaar om te groeien?"
          subtitle="Plan een kennismakingsgesprek en ontdek wat we voor jou kunnen betekenen"
          ctaLabel="Plan een bakkie"
          ctaHref="mailto:info@realaccelerate.nl"
          bullets={[
            "Analyse huidige situatie en groeidoelen",
            "Identificatie knelpunten die jou tegenhouden",
            "Concreet plan om doelstellingen te behalen"
          ]}
        />
      </div>
    </>
  );
}
