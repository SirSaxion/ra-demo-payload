/**
 * Hypotheekadviseurs Page Migration Script
 * Migrates all data from old hypotheekadviseurs.ts to Payload CMS
 * 
 * Run with: pnpm run migrate:hypotheekadviseurs
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

// Full hypotheekadviseurs page data from old CMS
const hypotheekadviseursPageData = {
  metadata: {
    metaTitle: "Real Accelerate | Hypotheekadviseur marketing | Onafhankelijk van offerte-sites",
    metaDescription: "Word onafhankelijk van offerte-sites. Bouw een voorspelbare klantenstroom met bewezen campagnes en duurzaamheid als toegevoegde waarde."
  },
  blocks: [
    {
      blockType: 'hypotheekadviseursHero',
      kicker: 'Voor hypotheekadviseurs',
      title: 'Bewezen campagnes voor hypotheekadviseurs',
      subtitle: 'Word onafhankelijk van offerte-sites en bouw een voorspelbare klantenstroom met <strong>bewezen campagnes</strong> en duurzaamheid als toegevoegde waarde.',
      ctaPrimary: {
        label: 'Plan een gratis strategiegesprek',
        href: '/contact'
      },
      ctaSecondary: {
        label: 'Bekijk Edit BV resultaten',
        href: '#hypotheek-cases'
      },
      editBVImage: '/images/editbv.jpg',
      editBVTitle: 'Edit BV Partnership',
      editBVSubtitle: 'Zwolle • Duurzaamheid expertise',
      editBVStats: [
        {
          icon: 'TrendingUp',
          text: '46 afspraken uit 1.300 contacten'
        },
        {
          icon: 'Users',
          text: 'Duurzaamheid consulten als differentiator'
        },
        {
          icon: 'Award',
          text: 'Bewezen campagne resultaten'
        }
      ],
      floatingStat: {
        value: '3.5%',
        label: 'Conversie ratio'
      },
      quote: 'Van offerte-site afhankelijkheid naar voorspelbare groei',
      usps: [
        {
          text: 'Stop met dure, slechte leads van Independer/Priva'
        },
        {
          text: 'Word gewaardeerd voor je expertise, niet je prijs'
        },
        {
          text: 'Klanten die <strong>jou al willen</strong> in plaats van leads'
        }
      ]
    },
    {
      blockType: 'hypotheekadviseursTrustStrip',
      trustItems: [
        { text: 'Edit BV partnership Zwolle' },
        { text: '46 afspraken uit 1.300 contacten' },
        { text: '3.5% conversie ratio bewezen' },
        { text: 'Duurzaamheid expertise' },
        { text: 'Onafhankelijk van offerte-sites' },
        { text: 'Geen Independer/Priva meer' },
        { text: 'Relationele klanten focus' },
        { text: 'Bewezen hypotheek campagnes' }
      ]
    },
    {
      blockType: 'hypotheekadviseursPainPointsSection',
      badge: 'Hypotheekadviseur uitdagingen',
      title: 'Herken jij deze frustraties als hypotheekadviseur?',
      subtitle: 'De meeste hypotheekadviseurs blijven gevangen in een cyclus van slechte leads en prijsconcurrentie. Je bent niet alleen.',
      challenges: [
        {
          icon: 'DollarSign',
          title: 'Afhankelijkheid van offerte-sites',
          description: 'Je betaalt te veel voor gedeelde leads van lage kwaliteit.'
        },
        {
          icon: 'Scale',
          title: 'Prijsconcurrentie',
          description: 'Je wordt vergeleken op prijs in plaats van expertise.'
        },
        {
          icon: 'TrendingDown',
          title: 'Lage marges',
          description: 'Steeds meer werk, steeds minder winst.'
        },
        {
          icon: 'Clock',
          title: 'Tijdsdruk en administratie',
          description: 'Minder tijd voor advies, meer voor papierwerk.'
        },
        {
          icon: 'Award',
          title: 'Geen waardering voor je vakmanschap',
          description: 'Terwijl jij juist het verschil maakt in advies en vertrouwen.'
        }
      ],
      ctaIcon: 'Handshake',
      ctaTitle: 'Wij hebben de oplossing!',
      ctaDescription: 'Via Edit BV partnership word je onafhankelijk van offerte-sites met duurzaamheid expertise.'
    },
    {
      blockType: 'hypotheekadviseursEditBVPartnershipSection',
      kicker: 'Wij hebben de oplossing',
      title: 'De bewezen oplossing voor hypotheekadviseurs',
      subtitle: 'Met het Real Accelerate Partnership word je onafhankelijk van offerte-sites. Je bouwt een eigen klantenstroom op via duurzaamheidsexpertise en marketingfunnels die voor je werken — 24/7.',
      benefits: [
        {
          icon: 'TrendingUp',
          text: 'Nieuwe business via duurzaamheidsconsulten'
        },
        {
          icon: 'Target',
          text: 'Eigen leads, direct in je agenda'
        },
        {
          icon: 'Award',
          text: 'Betere marges en hogere klantwaardering'
        },
        {
          icon: 'Users',
          text: 'Complete systemen, begeleiding en community'
        }
      ],
      oldWayTitle: 'TRADITIONELE HYPOTHEEK ADVISERING',
      newWayTitle: 'EDIT BV PARTNERSHIP',
      newWaySubtitle: 'Duurzaamheid + hypotheek expertise',
      bottomInsight: '<strong>Het verschil:</strong> Van pure hypotheekadvisering naar waardevolle duurzaamheidsexpertise'
    },
    {
      blockType: 'hypotheekadviseursMethodologySection',
      kicker: 'Onze hypotheek methodologie',
      title: 'Zo maken wij jouw praktijk onafhankelijk',
      subtitle: 'In 4 stappen van afhankelijk naar onafhankelijk',
      steps: [
        {
          number: 'Stap 1',
          icon: 'Target',
          title: 'IDEALE KLANTPROFIEL',
          description: 'We brengen jouw doelgroep en aanbod helder in kaart'
        },
        {
          number: 'Stap 2',
          icon: 'Lightbulb',
          title: 'WAARDEPROPOSITIE',
          description: 'We combineren hypotheekadvies met duurzaamheidsexpertise'
        },
        {
          number: 'Stap 3',
          icon: 'TrendingUp',
          title: 'MARKETING CAMPAGNE',
          description: 'We bouwen funnels die leads voor je werven'
        },
        {
          number: 'Stap 4',
          icon: 'Handshake',
          title: 'CONTINUE SUPPORT',
          description: 'Begeleiding en optimalisatie voor groei'
        }
      ]
    },
    {
      blockType: 'hypotheekadviseursVoorWieIsDitSection',
      kicker: 'Voor wie is dit?',
      title: 'Voor ambitieuze hypotheekadviseurs met groeidoelen',
      subtitle: 'Onze aanpak werkt het best voor adviseurs die klaar zijn voor verandering en onafhankelijkheid.',
      perfectForTitle: 'Perfect voor hypotheekadviseurs die:',
      perfectForItems: [
        {
          icon: 'Target',
          title: 'Groei ambitie',
          description: 'Verder willen groeien dan alleen hypotheekadvisering'
        },
        {
          icon: 'TrendingUp',
          title: 'Onafhankelijk',
          description: 'Weg willen van offerte-sites en prijsconcurrentie'
        },
        {
          icon: 'Leaf',
          title: 'Innovatie',
          description: 'Duurzaamheid als differentiator willen inzetten'
        }
      ],
      notForTitle: 'Niet geschikt voor:',
      notForItems: [
        { text: 'Adviseurs die tevreden zijn met status quo' },
        { text: 'Geen tijd hebben voor verandering' },
        { text: 'Alleen op prijs willen concurreren' }
      ]
    },
    {
      blockType: 'hypotheekadviseursBewezenResultatenSection',
      kicker: 'Bewezen resultaten',
      title: 'Resultaten uit de praktijk',
      subtitle: 'Edit BV case study: 46 afspraken uit 1.300 contacten'
    },
    {
      blockType: 'hypotheekadviseursWatJeKrijgtSection',
      kicker: 'Wat je krijgt',
      title: 'Complete ondersteuning voor hypotheekadviseurs',
      subtitle: 'Van strategie tot uitvoering, wij zorgen dat je onafhankelijk wordt',
      services: [
        {
          icon: 'Award',
          title: 'Edit BV Partnership',
          description: 'Toegang tot duurzaamheidsexpertise',
          items: [
            { text: 'Duurzaamheidsconsulten' },
            { text: 'Expert netwerk' },
            { text: 'Certificering' }
          ]
        },
        {
          icon: 'Target',
          title: 'Marketing Campagnes',
          description: 'Bewezen funnels en strategieën',
          items: [
            { text: 'Lead generation' },
            { text: 'Email campagnes' },
            { text: 'Social media' }
          ]
        }
      ]
    },
    {
      blockType: 'hypotheekadviseursBewezenAanpakSection',
      kicker: 'Bewezen aanpak',
      title: 'Waarom onze aanpak werkt',
      subtitle: 'Getest en verbeterd met hypotheekadviseurs zoals jij',
      points: [
        {
          icon: 'Target',
          title: 'Data gedreven',
          description: 'Elke beslissing is gebaseerd op data en tests'
        },
        {
          icon: 'Lightbulb',
          title: 'Bewezen strategieën',
          description: 'We gebruiken alleen wat werkt bij onze klanten'
        }
      ]
    },
    {
      blockType: 'hypotheekadviseursStrategieSessionCTA',
      kicker: 'Klaar om te beginnen?',
      title: 'Plan je gratis strategiegesprek',
      subtitle: 'Ontdek of onze aanpak bij jou past',
      benefits: [
        { text: '30 minuten 1-op-1 strategiesessie' },
        { text: 'Directe inzichten voor jouw situatie' },
        { text: 'Geen verplichtingen, gewoon waardevol advies' },
        { text: 'Plan direct een datum in' }
      ],
      ctaLabel: 'Kies een datum en tijd'
    },
    {
      blockType: 'hypotheekadviseursFAQSection',
      kicker: 'Veelgestelde Vragen',
      title: 'Vragen van hypotheekadviseurs',
      subtitle: 'Heeft u nog andere vragen? Neem contact op',
      contactLinkText: 'support team',
      contactLinkHref: '/contact',
      phoneLabel: 'Andere vraag?',
      phoneNumber: '+31850602989',
      faqs: [
        {
          icon: 'Clock',
          question: 'Hoe snel zie ik resultaat?',
          answer: 'De eerste leads kunnen binnen 2-4 weken binnenkomen. Structurele groei zie je na 3-6 maanden.'
        },
        {
          icon: 'DollarSign',
          question: 'Wat kost het?',
          answer: 'We werken op maat. Investering hangt af van je doelen en huidige situatie.'
        },
        {
          icon: 'Target',
          question: 'Voor wie is dit geschikt?',
          answer: 'Voor hypotheekadviseurs die willen groeien en onafhankelijk willen worden van offerte-sites.'
        }
      ]
    }
  ]
}

async function migrate() {
  console.log('🚀 Starting hypotheekadviseurs page migration...\n')
  
  try {
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Check if hypotheekadviseurs page exists
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/hypotheekadviseurs',
        },
      },
    })
    
    const pageData = {
      title: 'Hypotheekadviseurs',
      slug: '/hypotheekadviseurs',
      status: 'published',
      blocks: hypotheekadviseursPageData.blocks,
      seo: {
        metaTitle: hypotheekadviseursPageData.metadata.metaTitle,
        metaDescription: hypotheekadviseursPageData.metadata.metaDescription,
      },
    }
    
    if (existing.docs.length > 0) {
      console.log('📝 Hypotheekadviseurs page already exists, updating...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: pageData,
      })
      console.log('✅ Hypotheekadviseurs page updated!\n')
    } else {
      console.log('📝 Creating new hypotheekadviseurs page...')
      await payload.create({
        collection: 'pages',
        data: pageData,
      })
      console.log('✅ Hypotheekadviseurs page created!\n')
    }
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Total blocks: ${hypotheekadviseursPageData.blocks.length}`)
    console.log(`   - Slug: /hypotheekadviseurs`)
    console.log(`   - Status: published`)
    console.log('\n👉 Visit http://localhost:3000/admin/collections/pages to view in Payload CMS\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
