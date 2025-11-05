/**
 * Update Homepage Texts Script
 * Updates homepage content in Payload CMS with new text versions
 * 
 * Run with: pnpm tsx scripts/update-homepage-texts.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

// Load environment variables
dotenv.config({ path: '.env' })

// Updated homepage data with new texts
const homePageData = {
  metadata: {
    metaTitle: "Real Accelerate | Online marketing voor vastgoedprofessionals | Door experts, voor experts",
    metaDescription: "Groei je vastgoedbedrijf met bewezen online marketing strategieën. Van 2 naar 8 werknemers in 18 maanden. Makelaar marketing, leadgeneratie en automatisering door vastgoedexperts."
  },
  blocks: [
    {
      blockType: 'heroSection',
      kicker: 'Voor ambitieuze vastgoedprofessionals',
      title: 'Door vastgoedexperts, voor vastgoedexperts',
      subtitle: 'Vanuit onze eigen ervaring helpen wij jouw bedrijf groeien en projecten sneller verkopen met slimme online marketing.',
      ctaPrimary: {
        label: 'Plan een bakkie ☕',
        href: 'mailto:info@realaccelerate.nl'
      }
      // ctaSecondary removed
    },
    {
      blockType: 'trustStrip',
      items: [
        { text: 'IQI Global partner' },
        { text: 'Recreatie' },
        { text: 'Samen 30+ jaar marketing ervaring' },
        { text: 'Wereldwijd actief' },
        { text: 'Nieuwbouw' },
        { text: 'Projecten' },
        { text: 'Samen 40+ jaar vastgoed ervaring' },
        { text: 'Makelaar' },
        { text: 'Zelf actief in de vastgoedmarkt' },
        { text: 'Wereldwijd netwerk' }
      ],
      ariaLabel: 'Vertrouwen en ervaring'
    },
    {
      blockType: 'problemSection',
      kicker: 'Het probleem dat wij zien',
      title: '95% van vastgoedondernemers blijft na 10+ jaar nog steeds afhankelijk van externe leads',
      subtitle: 'Dit is wat we bij veel vastgoedprofessionals terugzien. We delen het om inzicht te geven—zodat je kunt bepalen wat voor jou werkt.',
      oldSituation: {
        title: 'OUDE SITUATIE',
        items: [
          { icon: 'XCircle', text: 'Niet mee gaan met technologie' },
          { icon: 'ThumbsDown', text: 'Niet onderscheidend' },
          { icon: 'Activity', text: 'Geen stabiliteit' },
          { icon: 'Frown', text: 'Geleefd worden door je agenda' }
        ]
      },
      newSituation: {
        title: 'ONZE METHODE',
        items: [
          { icon: 'CheckCircle2', text: 'Geautomatiseerde systemen' },
          { icon: 'Crown', text: 'Onderscheidende uitstraling en dienstverlening' },
          { icon: 'Banknote', text: 'Stabiel inkomen' },
          { icon: 'TrendingUp', text: 'Focus op waar je goed in bent' }
        ]
      }
    },
    {
      blockType: 'caseStudy',
      kicker: 'CASE STUDY',
      title: 'Case: De Brabant Makelaar',
      subtitle: 'In 18 maanden van 2 naar 8 werknemers',
      tone: 'light',
      frameless: true,
      showBackdropLogo: false,
      imageSrc: '/images/case-de-brabant-makelaar.webp',
      imageAlt: 'Team De Brabant Makelaar',
      kpis: [
        {
          label: 'Maandomzet',
          from: 20000,
          to: 65000,
          unit: 'eur' as const,
          sublabel: 'in 18 mnd',
          span: 2
        },
        {
          label: 'Trajecten per maand',
          from: 5,
          to: 12,
          unit: 'number' as const
        }
      ],
      bullets: [
        { text: 'Bewezen marketingmachine ingericht' },
        { text: '5 aankoopmakelaars actief' },
        { text: 'Agenda\'s gevuld met kwalitatieve afspraken' }
      ],
      ctaPrimary: {
        label: 'Bekijk volledige case',
        href: '/cases'
      },
      ctaSecondary: {
        label: 'Alle cases',
        href: '/cases'
      }
    },
    {
      blockType: 'uniqueApproach',
      kicker: 'Onze unieke aanpak',
      title: 'Wij zijn geen standaard marketingbureau. Wij zijn vastgoedondernemers én marketingexperts',
      subtitle: 'Complete marketingaanpak, meetbare groei en ruimte om te ondernemen.',
      metricValue: '99%',
      metricLabel: 'klanttevredenheid',
      card1Title: 'Nieuwste technieken',
      card1Description: 'Altijd voorop met de laatste marketing innovaties en tools.',
      card2Title: 'Marketing van A tot Z',
      card2Description: 'Complete marketingoplossing zonder gedoe of verborgen kosten.',
      card3Title: 'Voorspelbare groei',
      card3Description: 'Consistente resultaten door bewezen systemen en processen.',
      card4Title: 'Onze eigen ervaring',
      card4Description: 'Vanuit eigen vastgoedervaring weten wij wat werkt in de praktijk.',
      ctaText: 'Klinkt als de juiste fit?',
      ctaButtonLabel: 'Claim gratis strategiesessie',
      ctaButtonHref: 'mailto:info@realaccelerate.nl'
    },
    {
      blockType: 'flowConnector'
    },
    {
      blockType: 'marketingMachine',
      kicker: 'WAT WIJ VOOR JE DOEN',
      title: 'Complete marketing machine voor vastgoedprofessionals',
      subtitle: 'Van eerste indruk tot deal: websites, leadgeneratie, vindbaarheid en opvolging in één systeem.',
      features: [
        {
          icon: 'Globe',
          name: 'Websites',
          description: 'Professionele websites die converteren. SEO, responsive, en lead-capture ingebouwd.',
          href: '/cases',
          cta: 'Bekijk voorbeelden',
          imageSrc: '/images/32.EmiroSmolders-Settle-DSC07215--compressed.webp'
        },
        {
          icon: 'Target',
          name: 'Leadgeneratie',
          description: 'Kwalitatieve leads via Meta & Google. Slim targetten voor maximaal resultaat.',
          href: '/cases',
          cta: 'Zo werkt het',
          imageSrc: '/images/leadgen.webp'
        },
        {
          icon: 'GaugeCircle',
          name: 'Vindbaarheid',
          description: 'SEO optimalisatie, Google Business en content die je gevonden laat worden.',
          href: '/cases',
          cta: 'Onze aanpak',
          imageSrc: '/images/42.EmiroSmolders-Settle-DSC07252--compressed.webp'
        },
        {
          icon: 'Repeat',
          name: 'Heractivatie',
          description: 'Email en SMS flows die slapende leads wakker maken met relevante triggers.',
          href: '/cases',
          cta: 'Voorbeeldflows',
          imageSrc: '/images/rudybrief.webp'
        },
        {
          icon: 'PhoneCall',
          name: 'Leads opvolgen',
          description: 'CRM, automatische follow‑ups en appointment setting. Geen lead meer verloren.',
          href: '/cases',
          cta: 'Zie systeem',
          imageSrc: '/images/joeptelefoon.webp'
        },
        {
          icon: 'Palette',
          name: 'Branding',
          description: 'Sterke merkidentiteit: logo, huisstijl en contentstrategie die vertrouwen wekt.',
          href: '/cases',
          cta: 'Bekijk werk',
          imageSrc: '/images/47.EmiroSmolders-Settle-DSC07264--compressed.webp'
        }
      ]
    },
    {
      blockType: 'targetGroupsOverview',
      kicker: 'DOELGROEPEN',
      title: 'Voor wie wij werken',
      subtitle: 'Gespecialiseerde oplossingen voor elke vastgoedprofessional'
    },
    {
      blockType: 'targetGroupsOverviewPhotos',
      title: 'Voor wie wij werken',
      subtitle: 'Gespecialiseerde oplossingen voor elke vastgoedprofessional',
      items: [
        {
          name: 'Makelaars',
          description: 'Duurzame klant‑relaties ipv lead‑jacht',
          img: '/images/remax.jpg',
          alt: 'Re/max makelaars',
          href: '/makelaars',
          key: 'makelaars'
        },
        {
          name: 'Projectontwikkelaars',
          description: 'Project marketing & events',
          img: '/images/recreatie.jpg',
          alt: 'Recreatie projectontwikkeling',
          href: '/projectontwikkelaars',
          key: 'projectontwikkelaars'
        },
        {
          name: 'Hypotheekadviseurs',
          description: 'Onafhankelijk van offerte‑sites worden',
          img: '/images/hypotheekvisie.jpg',
          alt: 'Hypotheekvisie kantoor',
          href: '/hypotheekadviseurs',
          key: 'hypotheek'
        },
        {
          name: 'Buitenland',
          description: 'IQI Global Partnership • Dubai, Spanje, Bali ervaring',
          img: '/images/secondhomebeurs.jpg',
          alt: 'Second Home Beurs',
          href: '/makelaars-buitenland',
          key: 'buitenland'
        }
      ]
    },
    {
      blockType: 'numbersSection',
      kicker: 'WAAR WE TROTS OP ZIJN',
      title: 'Resultaten in cijfers',
      stats: [
        { value: '30+', label: 'jaar marketing ervaring team' },
        { value: '40+', label: 'jaar vastgoed ervaring team' },
        { value: '600k+', label: 'ad spend' },
        { value: '1375', label: 'bakken koffie' }
      ]
    },
    {
      blockType: 'testimonialsSection',
      kicker: 'MEER SUCCESVERHALEN',
      title: 'Uitgelichte succesverhalen',
      durationSec: 70,
      testimonials: [
        {
          title: 'De Brabant Makelaar',
          imageSrc: '/images/brabantmakelaar_logo.webp',
          badges: [
            { text: '8 makelaars actief' },
            { text: 'Agenda gevuld' }
          ],
          author: {
            name: 'Amory',
            handle: 'De Brabant Makelaar',
            avatar: '/images/brabantmakelaar_avatar.webp'
          },
          text: 'De dynamische heren van Real Accelerate zijn erg fijn om mee samen te werken. Proactief en zorgen voor veel resultaten. Aanrader voor iedereen die meer uit online marketing wilt halen!',
          href: '/cases'
        },
        {
          title: 'Bink & Partners',
          imageSrc: '/images/binkpartners_logo.webp',
          badges: [
            { text: 'Leads boven verwachting' },
            { text: 'Website complimenten' }
          ],
          author: {
            name: 'Pieter',
            handle: 'Bink & Partners',
            avatar: '/images/binkpartners_avatar.webp'
          },
          text: 'Real Accelerate is een enthousiaste groep. Mijn nieuwe website levert veel complimenten op. Het vervolgtraject om op de socials leads te genereren is zojuist gestart en loopt prima.',
          href: '/cases'
        },
        {
          title: 'Paul Thijssen Makelaardij',
          imageSrc: '/images/paulthijssen_logo.webp',
          badges: [
            { text: 'Phenomenale support' },
            { text: 'Aanrader' }
          ],
          author: {
            name: 'Paul Thijssen',
            handle: 'Paul Thijssen Makelaardij',
            avatar: '/images/paulthijssen_avatar.webp'
          },
          text: 'Real Accelerate ondersteunt ons op verschillende vlakken als het gaat om online marketing en ze doen het fenomenaal! Een jonge club mensen die stuk voor stuk enthousiast zijn, zeer goed luisteren naar jouw wensen als klant, duidelijke afspraken maken en verbonden zijn met de markt en wat kopers these days willen zien. Wij zijn erg tevreden met de diensten!',
          href: '/cases'
        },
        {
          title: 'Thoma Post',
          imageSrc: '/images/thomapost_logo.webp',
          badges: [
            { text: 'Agenda meer gevuld' },
            { text: 'Significant verbeterd' }
          ],
          author: {
            name: 'Marlies Post',
            handle: 'Thoma Post Makelaars Amsterdam',
            avatar: '/images/thomapost_avatar.webp'
          },
          text: 'Ik zou Real Accelerate zeker aanraden! Ze kijken heel goed naar wie de klant is en hoe zij hen het beste kunnen faciliteren. Sinds wij samenwerken zijn de aantallen afspraken en aanvragen significant verbeterd. Als jij een makelaar bent die zijn agenda meer gevuld wil hebben zou ik Real Accelerate adviseren.',
          href: '/cases'
        }
      ]
    },
    {
      blockType: 'faqSection',
      kicker: 'VEELGESTELDE VRAGEN',
      title: 'Frequently Asked Questions',
      subtitle: 'Heeft u nog andere vragen? Neem contact op met ons support team of plan een gratis strategiesessie in.',
      items: [
        {
          icon: 'Clock',
          question: 'Hoe snel kan ik aan de slag met jullie marketingaanpak?',
          answer: 'Wij zorgen voor een snelle implementatie van uw marketingmachine. Na onze strategiesessie starten we direct met de opzet van uw campagnes. De eerste resultaten ziet u meestal binnen enkele weken, afhankelijk van uw markt en doelgroep.'
        },
        {
          icon: 'CreditCard',
          question: 'Hoe werkt de samenwerking en wat kan ik verwachten?',
          answer: 'Wij werken transparant en resultaatgericht. Onze tarieven stemmen we af op uw specifieke doelen en situatie. We focussen op meetbare groei en houden u altijd op de hoogte van de voortgang. Neem contact op voor een persoonlijk gesprek over de mogelijkheden.'
        },
        {
          icon: 'Home',
          question: 'Voor welke vastgoedprofessionals is jullie aanpak geschikt?',
          answer: 'Onze marketingaanpak werkt voor alle vastgoedprofessionals: aankoopmakelaars, verkoopmakelaars, hypotheekadviseurs en projectontwikkelaars. Of u nu net begint of al jaren ervaring heeft, wij passen onze strategie aan uw specifieke situatie en doelgroep aan.'
        },
        {
          icon: 'Users',
          question: 'Hoe zorgen jullie voor focus op mijn regio?',
          answer: 'Wij werken met een selectieve aanpak per regio om optimale resultaten te behalen. Dit betekent dat we zorgvuldig kijken naar de marktdynamiek in uw gebied en onze strategie daarop afstemmen. Zo kunnen we ons volledig focussen op uw succes in uw werkgebied.'
        },
        {
          icon: 'Target',
          question: 'Hoe zorgen jullie voor kwalitatieve leads en afspraken?',
          answer: 'Wij richten ons op het aantrekken van kwalitatieve prospects die passen bij uw ideale klantprofiel. Door slimme targeting en bewezen strategieën zorgen we voor een constante stroom van geïnteresseerde potentiële klanten. Kwaliteit staat altijd voorop.'
        },
        {
          icon: 'TrendingUp',
          question: 'Wat maakt jullie aanpak uniek in de vastgoedmarkt?',
          answer: 'Wij zijn zelf actief in de vastgoedmarkt en begrijpen de uitdagingen van makelaars. Onze marketingmachine combineert bewezen strategieën met de nieuwste technieken. Als IQI Global Partner hebben we toegang tot internationale expertise en netwerken.'
        }
      ]
    },
    {
      blockType: 'howItWorksSection',
      kicker: 'HOE HET WERKT',
      title: 'Van intake naar voorspelbare groei',
      subtitle: 'Drie heldere stappen. Precies wat je van ons kan verwachten.',
      steps: [
        {
          id: 1,
          title: 'Strategische Analyse',
          subtitle: 'Huidige situatie & doelen in kaart',
          icon: 'Lightbulb',
          bullets: [
            { text: 'Doelgroep & regio\'s' },
            { text: 'Huidige website, campagnes en CRM in kaart' },
            { text: 'Knelpunten die groei remmen' },
            { text: 'Doelen afgestemd op jouw situatie' }
          ]
        },
        {
          id: 2,
          title: 'Custom Marketing Systeem',
          subtitle: 'Jouw ideale klanten bereiken',
          icon: 'ClipboardCheck',
          bullets: [
            { text: 'Websites/landingspagina\'s die converteren' },
            { text: 'Leadgeneratie via Meta & Google' },
            { text: 'Vindbaarheid (SEO + Google Business)' },
            { text: 'Heractivatie + opvolging via CRM en flows' }
          ]
        },
        {
          id: 3,
          title: 'Resultaten & Optimalisatie',
          subtitle: 'Meetbare resultaten en groei',
          icon: 'LineChart',
          bullets: [
            { text: 'Real time tracking' },
            { text: 'Continu optimalisatie' }
          ]
        }
      ]
    },
    {
      blockType: 'finalCTA',
      title: 'Laten we samen jouw bedrijf naar een hoger niveau tillen',
      subtitle: 'Analyse huidige situatie en groeidoelen',
      ctaLabel: 'Neem contact op',
      ctaHref: 'mailto:info@realaccelerate.nl',
      bullets: [
        { text: 'Analyse huidige situatie en groeidoelen' },
        { text: 'Identificatie knelpunten die jou tegenhouden' },
        { text: 'Concreet plan om doelstellingen te behalen' }
      ]
    }
  ]
}

async function migrate() {
  console.log('🚀 Starting homepage text updates...\n')
  
  try {
    // Set environment variables if not loaded
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Check if homepage exists
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/',
        },
      },
      locale: 'nl',
    })
    
    if (existing.docs.length === 0) {
      console.error('❌ Homepage not found in database. Please run migrate-homepage.ts first.')
      process.exit(1)
    }
    
    const pageData = {
      title: 'Homepage',
      slug: '/',
      status: 'published' as const,
      blocks: homePageData.blocks as any, // Cast to any to avoid complex type checking in migration script
      seo: {
        metaTitle: homePageData.metadata.metaTitle,
        metaDescription: homePageData.metadata.metaDescription,
      },
    }
    
    console.log('📝 Updating homepage with new texts...')
    await payload.update({
      collection: 'pages',
      id: existing.docs[0].id,
      data: pageData as any, // Cast to any for migration script
      locale: 'nl',
    })
    console.log('✅ Homepage updated with new texts!\n')
    
    console.log('🎉 Update completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Total blocks: ${homePageData.blocks.length}`)
    console.log(`   - Updated sections:`)
    console.log(`     • Hero (removed secondary CTA)`)
    console.log(`     • Unique Approach (new texts)`)
    console.log(`     • Marketing Machine (added kicker)`)
    console.log(`     • Target Groups (updated texts)`)
    console.log(`     • Numbers (completely new stats)`)
    console.log(`     • Testimonials (added kicker)`)
    console.log(`     • FAQ (swapped title/kicker)`)
    console.log(`     • How It Works (new texts)`)
    console.log(`     • Final CTA (new texts)`)
    console.log('\n👉 Visit http://localhost:3001 to view changes\n')
    console.log('👉 Or visit http://localhost:3001/admin/collections/pages to edit in Payload CMS\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Update failed:', error)
    process.exit(1)
  }
}

migrate()
