import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

// Complete homepage data from old CMS - alle blocks
const fullHomePageData = {
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
      },
      ctaSecondary: {
        label: 'Bekijk cases',
        href: '/cases'
      }
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
      imageAlt: 'Team De Brabant Makelaar',
      kpis: [
        {
          label: 'Maandomzet',
          from: 20000,
          to: 65000,
          unit: 'eur',
          sublabel: 'in 18 mnd',
          span: 2
        },
        {
          label: 'Trajecten per maand',
          from: 5,
          to: 12,
          unit: 'number'
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
      kicker: 'Onze aanpak',
      title: 'Wij werken anders dan andere marketing bureaus',
      subtitle: 'We bouwen geen campagnes, we bouwen systemen',
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
      title: 'De Marketing Machine',
      subtitle: 'Een compleet systeem dat 24/7 voor je werkt',
      features: [
        {
          icon: 'Globe',
          name: 'Websites',
          description: 'Professionele websites die converteren. SEO, responsive, en lead-capture ingebouwd.',
          href: '/cases',
          cta: 'Bekijk voorbeelden'
        },
        {
          icon: 'Target',
          name: 'Leadgeneratie',
          description: 'Kwalitatieve leads via Meta & Google. Slim targetten voor maximaal resultaat.',
          href: '/cases',
          cta: 'Zo werkt het'
        },
        {
          icon: 'GaugeCircle',
          name: 'Vindbaarheid',
          description: 'SEO optimalisatie, Google Business en content die je gevonden laat worden.',
          href: '/cases',
          cta: 'Onze aanpak'
        },
        {
          icon: 'Repeat',
          name: 'Heractivatie',
          description: 'Email en SMS flows die slapende leads wakker maken met relevante triggers.',
          href: '/cases',
          cta: 'Voorbeeldflows'
        },
        {
          icon: 'PhoneCall',
          name: 'Leads opvolgen',
          description: 'CRM, automatische follow‑ups en appointment setting. Geen lead meer verloren.',
          href: '/cases',
          cta: 'Zie systeem'
        },
        {
          icon: 'Palette',
          name: 'Branding',
          description: 'Sterke merkidentiteit: logo, huisstijl en contentstrategie die vertrouwen wekt.',
          href: '/cases',
          cta: 'Bekijk werk'
        }
      ]
    },
    {
      blockType: 'targetGroupsOverview',
      title: 'Voor wie is dit?',
      subtitle: 'Gespecialiseerde oplossingen per doelgroep'
    },
    {
      blockType: 'targetGroupsOverviewPhotos',
      title: 'Voor wie wij werken',
      subtitle: 'Gespecialiseerde oplossingen voor elke vastgoedprofessional',
      items: [
        {
          name: 'Makelaars',
          description: 'Duurzame klant‑relaties ipv lead‑jacht',
          alt: 'Re/max makelaars',
          href: '/makelaars',
          key: 'makelaars'
        },
        {
          name: 'Projectontwikkelaars',
          description: 'Project marketing & events',
          alt: 'Recreatie projectontwikkeling',
          href: '/projectontwikkelaars',
          key: 'projectontwikkelaars'
        },
        {
          name: 'Hypotheekadviseurs',
          description: 'Onafhankelijk van offerte‑sites worden',
          alt: 'Hypotheekvisie kantoor',
          href: '/hypotheekadviseurs',
          key: 'hypotheek'
        },
        {
          name: 'International',
          description: 'IQI Global Partnership • Dubai, Spanje, Bali ervaring',
          alt: 'Second Home Beurs',
          href: '/makelaars-buitenland',
          key: 'buitenland'
        }
      ]
    },
    {
      blockType: 'numbersSection',
      title: 'Resultaten in cijfers',
      stats: [
        { value: '50+', label: 'Tevreden klanten' },
        { value: '200+', label: 'Projecten afgerond' },
        { value: '95%', label: 'Klant tevredenheid' }
      ]
    },
    {
      blockType: 'testimonialsSection',
      title: 'Uitgelichte succesverhalen',
      description: 'MEER SUCCESVERHALEN',
      durationSec: 70,
      testimonials: [
        {
          title: 'De Brabant Makelaar',
          badges: [{ text: '8 makelaars actief' }, { text: 'Agenda gevuld' }],
          author: {
            name: 'Amory',
            handle: 'De Brabant Makelaar',
          },
          text: 'De dynamische heren van Real Accelerate zijn erg fijn om mee samen te werken. Proactief en zorgen voor veel resultaten. Aanrader voor iedereen die meer uit online marketing wilt halen!',
          href: '/cases'
        },
        {
          title: 'Bink & Partners',
          badges: [{ text: 'Leads boven verwachting' }, { text: 'Website complimenten' }],
          author: {
            name: 'Pieter',
            handle: 'Bink & Partners',
          },
          text: 'Real Accelerate is een enthousiaste groep. Mijn nieuwe website levert veel complimenten op. Het vervolgtraject om op de socials leads te genereren is zojuist gestart en loopt prima.',
          href: '/cases'
        }
      ]
    },
    {
      blockType: 'faqSection',
      title: 'Veelgestelde vragen',
      subtitle: 'Alles wat je moet weten',
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
      title: 'Hoe werkt het?',
      subtitle: 'Van kennismaking tot resultaat in 4 stappen',
      steps: [
        {
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
      title: 'Klaar om te groeien?',
      subtitle: 'Plan een kennismakingsgesprek en ontdek wat we voor jou kunnen betekenen',
      ctaLabel: 'Plan een bakkie',
      ctaHref: 'mailto:info@realaccelerate.nl',
      bullets: [
        { text: 'Analyse huidige situatie en groeidoelen' },
        { text: 'Identificatie knelpunten die jou tegenhouden' },
        { text: 'Concreet plan om doelstellingen te behalen' }
      ]
    }
  ]
}

export async function POST() {
  try {
    console.log('🚀 Starting full homepage migration...')
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized')
    
    // Find existing homepage
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/',
        },
      },
    })
    
    const pageData = {
      title: 'Homepage',
      slug: '/',
      status: 'published',
      blocks: fullHomePageData.blocks,
      seo: {
        metaTitle: fullHomePageData.metadata.metaTitle,
        metaDescription: fullHomePageData.metadata.metaDescription,
      },
    }
    
    let result
    if (existing.docs.length > 0) {
      console.log('📝 Updating existing homepage...')
      result = await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: pageData,
      })
      console.log('✅ Homepage updated!')
    } else {
      console.log('📝 Creating new homepage...')
      result = await payload.create({
        collection: 'pages',
        data: pageData,
      })
      console.log('✅ Homepage created!')
    }
    
    console.log('🎉 Full homepage migration completed!')
    console.log(`📊 Total blocks: ${fullHomePageData.blocks.length}`)
    
    return NextResponse.json({
      success: true,
      message: 'Full homepage migrated successfully',
      page: {
        id: result.id,
        title: result.title,
        slug: result.slug,
        status: result.status,
        blocksCount: fullHomePageData.blocks.length
      }
    })
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
