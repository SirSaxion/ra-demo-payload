/**
 * Projectontwikkelaars Page Migration Script
 * Migrates all data from old projectontwikkelaars.ts to Payload CMS
 * 
 * Run with: pnpm run migrate:projectontwikkelaars
 */

import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables FIRST before importing config
dotenv.config({ path: path.resolve(__dirname, '../.env') })

// NOW import Payload after env vars are set
import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

// Debug: Check if env vars are loaded
console.log('Environment check:')
console.log('PAYLOAD_SECRET:', process.env.PAYLOAD_SECRET ? '✓ Loaded' : '✗ Missing')
console.log('DATABASE_URI:', process.env.DATABASE_URI ? '✓ Loaded' : '✗ Missing')
console.log()

// Full Projectontwikkelaars page data from old CMS
const projectontwikkelaarsPageData = {
  metadata: {
    metaTitle: "Projectontwikkelaars - Projecten Sneller Verkocht | Real Accelerate",
    metaDescription: "Als projectontwikkelaar wil je dat je nieuwbouwprojecten efficiënt verkocht worden. Met Real Accelerate brengen we jouw projecten sneller en creatiever onder de aandacht."
  },
  blocks: [
    {
      blockType: 'projectontwikkelaarsHero',
      badge: 'Voor projectontwikkelaars',
      title: 'Projecten sneller verkocht',
      titleHighlight: 'met een slimme aanpak',
      subtitle: 'Als projectontwikkelaar wil je dat je nieuwbouwprojecten efficiënt en succesvol verkocht worden. Met Real Accelerate brengen we jouw projecten sneller en creatiever onder de aandacht – met <strong>marketing, beleving en opvolging</strong> die geen kans onbenut laat.',
      bullets: [
        { text: 'Snellere verkoop door gerichte campagnes en sterke positionering' },
        { text: 'Creatieve beleving die projecten <strong>onderscheidend</strong> maakt' },
        { text: 'Slimme opvolging met automatisering en persoonlijke begeleiding' }
      ],
      ctaPrimary: {
        label: 'Plan een project strategiesessie'
      },
      ctaSecondary: {
        label: 'Ontdek onze aanpak',
        href: '#onze-aanpak'
      },
      showcaseImage: '/images/projectontwikkelaar.webp',
      showcaseImageAlt: 'Dubai-property.nl - Bewezen projectmarketing expertise',
      showcaseIcon: 'Building2',
      showcaseTitle: 'Dubai-property.nl Success',
      showcaseSubtitle: 'Dubai • Event Marketing Expertise',
      showcaseStats: [
        {
          icon: 'Calendar',
          text: '15+ evenementen door heel Nederland'
        },
        {
          icon: 'TrendingUp',
          text: 'Nieuwe projecten in weken uitverkocht'
        },
        {
          icon: 'Award',
          text: '€8.5M+ verkocht via onze events'
        }
      ],
      floatingStat: {
        value: '3 weken',
        label: 'Gemiddelde uitverkoop'
      },
      showcaseNote: 'Bewezen aanpak uit de praktijk van vastgoedondernemers'
    },
    {
      blockType: 'projectontwikkelaarsTrustStrip',
      trustItems: [
        { text: 'Ervaring als vastgoedondernemers en investeerders' },
        { text: 'Creatieve campagnes die onderscheiden' },
        { text: 'Slimme opvolging met automatisering en persoonlijke touch' },
        { text: 'Van lange verkoopcycli naar snelle resultaten' },
        { text: 'Complete marketing en beleving expertise' },
        { text: 'Bewezen projectverkoop strategieën' },
        { text: 'Nederlandse en internationale projectervaring' },
        { text: 'Transparante rapportage en continue optimalisatie' },
        { text: 'Grip en voorspelbaarheid in het verkoopproces' },
        { text: 'Partner die de vastgoedbranche van binnenuit kent' }
      ]
    },
    {
      blockType: 'projectontwikkelaarsPainPointsSection',
      badge: 'Projectontwikkelaar uitdagingen',
      title: 'Herken je deze frustraties bij projectverkoop?',
      subtitle: 'Veel projectontwikkelaars lopen tegen dezelfde uitdagingen aan. Herkenbaar? Dan is er een betere manier.',
      ctaIcon: 'Building2',
      ctaTitle: 'Wij hebben de oplossing!',
      ctaDescription: 'Met onze ervaring als vastgoedondernemers combineren we marketing, beleving en slimme opvolging.'
    },
    {
      blockType: 'projectontwikkelaarsDubaiSuccessStorySection',
      badge: 'Waarom wij',
      title: 'Waarom onze aanpak werkt',
      subtitle: 'Bij Real Accelerate combineren we onze ervaring als vastgoedondernemers en vastgoedinvesteerders met slimme marketing, creatieve campagnes en moderne opvolgsystemen.'
    },
    {
      blockType: 'projectontwikkelaarsMethodologySection',
      badge: 'Onze project methodologie',
      title: 'Zo zorgen wij voor succesvolle projectverkoop',
      subtitle: 'Onze aanpak is geen losse marketingactie, maar een complete verkoopmachine'
    },
    {
      blockType: 'projectontwikkelaarsBewezenAanpakSection',
      badge: 'Onze ervaring',
      title: 'Ervaring als vastgoedondernemers en investeerders',
      subtitle: 'Wij zijn geen traditioneel marketingbureau. Als vastgoedondernemers en vastgoedinvesteerders begrijpen we de uitdagingen van binnenuit. Wat we voor onze klanten doen, hebben we zelf getest, verfijnd en bewezen in de praktijk.'
    },
    {
      blockType: 'projectontwikkelaarsResultatenBentoGrid',
      badge: 'Project resultaten bento grid',
      title: 'Resultaten uit de praktijk',
      subtitle: 'Met onze bewezen aanpak zien projectontwikkelaars dat hun projecten sneller verkopen en beter in de markt worden gezet'
    },
    {
      blockType: 'projectontwikkelaarsWatJeKrijgtSection',
      badge: 'Jouw complete pakket',
      title: 'Van uitverkocht project naar volgende deal',
      subtitle: 'Alles onder één dak: events, marketing, leads en support om jouw projecten razendsnel te verkopen.'
    },
    {
      blockType: 'projectontwikkelaarsVoorWieIsDitSection',
      badge: 'Voor wie is dit?',
      title: 'Perfect voor projectontwikkelaars die',
      subtitle: 'Onze aanpak werkt het beste voor ambitieuze ontwikkelaars die klaar zijn voor snelle verkoop'
    },
    {
      blockType: 'projectontwikkelaarsStrategieSessionCTA',
      title: 'Klaar voor een',
      titleHighlight: 'project strategiesessie',
      subtitle: 'Benieuwd hoe jouw volgende project sneller en slimmer verkocht kan worden? Plan een vrijblijvende strategiesessie en krijg direct inzicht in jouw mogelijkheden.',
      ctaLabel: 'Claim je gratis project strategiesessie',
      ctaSubtext: 'Waarde €1000 • Volledig vrijblijvend • Beperkte plaatsen voor serieuze projectontwikkelaars'
    },
    {
      blockType: 'projectontwikkelaarsFAQSection',
      kicker: 'VEELGESTELDE VRAGEN',
      title: 'Frequently Asked Questions',
      subtitle: 'Heeft u nog andere vragen? Neem contact op met ons',
      contactLinkText: 'support team',
      contactLinkHref: '/contact',
      phoneLabel: 'Andere vraag?',
      phoneNumber: '085 060 2989'
    }
  ]
}

async function migrate() {
  console.log('🚀 Starting Projectontwikkelaars page migration...\n')
  
  try {
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Check if Projectontwikkelaars page exists
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/projectontwikkelaars',
        },
      },
    })
    
    const pageData = {
      title: 'Projectontwikkelaars',
      slug: '/projectontwikkelaars',
      status: 'published',
      blocks: projectontwikkelaarsPageData.blocks,
      seo: {
        metaTitle: projectontwikkelaarsPageData.metadata.metaTitle,
        metaDescription: projectontwikkelaarsPageData.metadata.metaDescription,
      },
    }
    
    if (existing.docs.length > 0) {
      console.log('📝 Projectontwikkelaars page already exists, updating...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: pageData,
      })
      console.log('✅ Projectontwikkelaars page updated!\n')
    } else {
      console.log('📝 Creating new Projectontwikkelaars page...')
      await payload.create({
        collection: 'pages',
        data: pageData,
      })
      console.log('✅ Projectontwikkelaars page created!\n')
    }
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Total blocks: ${projectontwikkelaarsPageData.blocks.length}`)
    console.log(`   - Slug: /projectontwikkelaars`)
    console.log(`   - Status: published`)
    console.log('\n👉 Visit http://localhost:3000/admin/collections/pages to view in Payload CMS\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
