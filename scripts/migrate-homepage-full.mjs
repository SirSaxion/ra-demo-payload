/**
 * Complete Homepage Migration Script
 * Migrates all data from old home.ts to Payload CMS
 * 
 * Run with: node scripts/migrate-homepage-full.mjs
 */

import { getPayload } from 'payload'
import config from '../dist/payload.config.js'

// Full homepage data from old CMS
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
      blockType: 'numbersSection',
      title: 'Resultaten in cijfers',
      stats: [
        { value: '50+', label: 'Tevreden klanten' },
        { value: '200+', label: 'Projecten afgerond' },
        { value: '95%', label: 'Klant tevredenheid' }
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

async function migrate() {
  console.log('🚀 Starting homepage migration...\n')
  
  try {
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
    })
    
    const pageData = {
      title: 'Homepage',
      slug: '/',
      status: 'published',
      blocks: homePageData.blocks,
      seo: {
        metaTitle: homePageData.metadata.metaTitle,
        metaDescription: homePageData.metadata.metaDescription,
      },
    }
    
    if (existing.docs.length > 0) {
      console.log('📝 Homepage already exists, updating...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: pageData,
      })
      console.log('✅ Homepage updated!\n')
    } else {
      console.log('📝 Creating new homepage...')
      await payload.create({
        collection: 'pages',
        data: pageData,
      })
      console.log('✅ Homepage created!\n')
    }
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Total blocks: ${homePageData.blocks.length}`)
    console.log(`   - Slug: /`)
    console.log(`   - Status: published`)
    console.log('\n👉 Visit http://localhost:3000/admin/collections/pages to view in Payload CMS\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
