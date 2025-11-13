import { CaseStudyData } from "@/components/ui/case-study-dialog";

export const caseStudiesData: Record<string, CaseStudyData> = {
  "paul-thijssen": {
    id: "paul-thijssen",
    title: "Paul Thijssen Makelaardij",
    subtitle: "Premium website met focus op luxe woningen en persoonlijke benadering",
    description: "Voor Paul Thijssen Makelaardij hebben we een premium website ontwikkeld die perfect aansluit bij hun focus op luxe woningen en persoonlijke service. De website combineert elegante vormgeving met geavanceerde functionaliteiten voor het presenteren van exclusieve woningen. Door middel van een op maat gemaakte CRM-integratie en geautomatiseerde leadnurturing hebben we hun online aanwezigheid getransformeerd tot een krachtige verkooptool die consistent hoogwaardige leads genereert.",
    websiteUrl: "https://paulthijssen.nl",
    category: "Premium Makelaar",
    tags: ["Luxe", "Premium", "€2M+ Sales", "CRM Integratie", "Lead Nurturing"],
    results: [
      {
        metric: "Verkopen",
        value: "€2M+",
        description: "Totale verkopen via website in eerste jaar"
      },
      {
        metric: "Lead kwaliteit",
        value: "+180%",
        description: "Verbetering in kwaliteit van binnenkomende leads"
      },
      {
        metric: "Conversie",
        value: "12.5%",
        description: "Van website bezoeker naar daadwerkelijke klant"
      }
    ],
    images: {
      hero: "/images/1.EmiroSmolders-Settle-DSC06894-.webp",
      gallery: [
        "/images/2.EmiroSmolders-Settle-DSC06899-.webp",
        "/images/3.EmiroSmolders-Settle-DSC06907-.webp",
        "/images/4.EmiroSmolders-Settle-DSC06915-.webp",
        "/images/5.EmiroSmolders-Settle-DSC06927-.webp"
      ]
    },
    details: {
      projectDuration: "3 maanden",
      location: "Noord-Holland",
      teamSize: "4 specialisten",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel", "HubSpot CRM"]
    },
    testimonial: {
      quote: "De nieuwe website heeft onze business volledig getransformeerd. We krijgen nu consistent hoogwaardige leads binnen en onze online uitstraling past perfect bij onze premium positionering.",
      author: "Paul Thijssen",
      role: "Eigenaar, Paul Thijssen Makelaardij"
    }
  },
  "brabant-makelaar": {
    id: "brabant-makelaar",
    title: "De Brabant Makelaar",
    subtitle: "Moderne website met geautomatiseerde leadnurturing en CRM integratie",
    description: "Voor De Brabant Makelaar hebben we een complete digitale transformatie uitgevoerd. De nieuwe website combineert moderne vormgeving met krachtige automatisering. Door slimme leadnurturing workflows en naadloze CRM-integratie hebben we hun online aanwezigheid omgetoverd tot een efficiënte lead-generatiemachine die 24/7 werkt aan het opbouwen van klantrelaties.",
    websiteUrl: "https://debrabantmakelaar.nl",
    category: "Moderne Makelaar",
    tags: ["Website", "Automatisering", "CRM", "Lead Generation", "Workflow"],
    results: [
      {
        metric: "Lead groei",
        value: "200%",
        description: "Toename in gekwalificeerde leads per maand"
      },
      {
        metric: "Automatisering",
        value: "85%",
        description: "Van leadnurturing proces geautomatiseerd"
      },
      {
        metric: "Response tijd",
        value: "< 2 min",
        description: "Gemiddelde reactietijd op nieuwe leads"
      }
    ],
    images: {
      hero: "/images/case-de-brabant-makelaar.webp",
      gallery: [
        "/images/6.EmiroSmolders-Settle-DSC06931-.webp",
        "/images/7.EmiroSmolders-Settle-DSC06935-.webp",
        "/images/8.EmiroSmolders-Settle-DSC06949-.webp",
        "/images/9.EmiroSmolders-Settle-DSC06960-.webp"
      ]
    },
    details: {
      projectDuration: "4 maanden",
      location: "Noord-Brabant",
      teamSize: "5 specialisten",
      technologies: ["React", "Node.js", "PostgreSQL", "Zapier", "Mailchimp", "Pipedrive CRM"]
    },
    testimonial: {
      quote: "Dankzij de nieuwe website en automatisering kunnen we ons nu volledig focussen op wat we het beste doen: huizen verkopen. De leads stromen binnen en worden automatisch opgevolgd.",
      author: "Marco van den Berg",
      role: "Eigenaar, De Brabant Makelaar"
    }
  },
  "makelaars-amsterdam": {
    id: "makelaars-amsterdam",
    title: "Makelaars van Amsterdam",
    subtitle: "Hypermoderne website voor de Amsterdamse vastgoedmarkt",
    description: "Voor Makelaars van Amsterdam hebben we een hypermoderne website ontwikkeld die perfect aansluit bij de dynamische Amsterdamse vastgoedmarkt. Met real-time marktdata, geavanceerde zoekfunctionaliteiten en een naadloze gebruikerservaring hebben we hun digitale aanwezigheid naar een hoger niveau getild.",
    websiteUrl: "https://makelaarsvanamsterdam.nl",
    category: "Stedelijke Makelaar",
    tags: ["Amsterdam", "Real-time Data", "Modern Design", "UX/UI", "Marktanalyse"],
    results: [
      {
        metric: "Website traffic",
        value: "+320%",
        description: "Toename in organische website bezoekers"
      },
      {
        metric: "Gebruikerservaring",
        value: "4.8/5",
        description: "Gemiddelde gebruikerstevredenheid score"
      },
      {
        metric: "Marktpositie",
        value: "Top 3",
        description: "Ranking in Amsterdam voor online zichtbaarheid"
      }
    ],
    images: {
      hero: "/images/10.EmiroSmolders-Settle-DSC06970-.webp",
      gallery: [
        "/images/11.EmiroSmolders-Settle-DSC06990-.webp",
        "/images/12.EmiroSmolders-Settle-DSC07000-.webp",
        "/images/13.EmiroSmolders-Settle-DSC07010-.webp",
        "/images/14.EmiroSmolders-Settle-DSC07018-.webp"
      ]
    },
    details: {
      projectDuration: "5 maanden",
      location: "Amsterdam",
      teamSize: "6 specialisten",
      technologies: ["Next.js", "GraphQL", "Prisma", "PostgreSQL", "Algolia Search", "Mapbox"]
    },
    testimonial: {
      quote: "Onze nieuwe website heeft ons geholpen om ons te onderscheiden in de competitieve Amsterdamse markt. De moderne uitstraling en functionaliteiten spreken onze doelgroep perfect aan.",
      author: "Linda Jansen",
      role: "Partner, Makelaars van Amsterdam"
    }
  }
};

// Helper function to get case study by ID
export function getCaseStudyById(id: string): CaseStudyData | null {
  return caseStudiesData[id] || null;
}

// Helper function to get all case studies
export function getAllCaseStudies(): CaseStudyData[] {
  return Object.values(caseStudiesData);
}
