/**
 * Complete Over-ons Page Migration Script
 * Migrates all data from old over-ons.ts to Payload CMS
 * 
 * Run with: pnpm run migrate:over-ons
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

// Full over-ons page data from old CMS
const overOnsPageData = {
  metadata: {
    metaTitle: "Over ons - Real Accelerate",
    metaDescription: "Leer het team achter Real Accelerate kennen. Van vastgoedondernemers, voor vastgoedondernemers."
  },
  blocks: [
    {
      blockType: 'overOnsHeroSection',
      badge: 'Over ons',
      title: 'Van',
      highlightedWord: 'vastgoedondernemers',
      subtitle: 'voor vastgoedondernemers',
      description: 'Wij zijn Real Accelerate. Een team dat dagelijks actief is in de vastgoedbranche. We kennen de uitdagingen van binnenuit – omdat we ze zelf ervaren hebben. Vanuit die praktijk helpen we anderen vooruit met een aanpak die vernieuwend, praktisch en resultaatgericht is.',
      image: '/images/teamfoto_einde.png',
      imageAlt: 'Team Real Accelerate',
      stats: [
        {
          icon: 'Users',
          value: '200+ klanten',
          label: 'Europa-breed'
        },
        {
          icon: 'Globe',
          value: 'IQI Global Partner',
          label: 'Internationale slagkracht'
        }
      ]
    },
    {
      blockType: 'overOnsTrustStripSection',
      items: [
        { text: 'Samen 30+ jaar marketing ervaring' },
        { text: 'Gevestigd in Nederland' },
        { text: 'Samen 40+ jaar vastgoed ervaring' },
        { text: 'Persoonlijke benadering' },
        { text: 'Transparante werkwijze' },
        { text: 'Wereldwijd actief' },
        { text: 'Data-driven beslissingen' },
        { text: 'Innovatieve oplossingen' },
        { text: 'Klantgericht team' },
        { text: 'Bewezen track record' }
      ]
    },
    {
      blockType: 'overOnsMissionSection',
      badge: 'Onze missie',
      title: 'Waarom Real Accelerate bestaat',
      subtitle: 'De vastgoedbranche vernieuwen en ondernemers helpen om sterker, efficiënter en toekomstbestendig te worden',
      cards: [
        {
          icon: 'Lightbulb',
          title: 'Het probleem',
          content: 'We zagen te vaak dat professionals in de vastgoedbranche <span class="font-semibold text-white">vastliepen in dezelfde patronen:</span> <span class="text-[var(--brand-300)] font-medium">gebrek aan structuur, afhankelijkheid van externe partijen en een moeizame weg naar groei.</span>'
        },
        {
          icon: 'Rocket',
          title: 'Onze oplossing',
          content: 'Met onze eigen ondernemingen ontwikkelden we <span class="font-semibold text-[var(--brand-200)]">strategieën en systemen die dit doorbraken.</span> <span class="text-white font-medium">Het was een logische stap</span> om die kennis en ervaring te bundelen in Real Accelerate.'
        },
        {
          icon: 'Star',
          title: 'Onze impact',
          content: 'Ons doel is helder: <span class="font-semibold text-white">de vastgoedbranche vernieuwen</span> en <span class="text-[var(--brand-200)] font-medium">ondernemers helpen om sterker, efficiënter en toekomstbestendig te worden.</span>'
        }
      ],
      tagline: 'Van vastlooppatronen naar duurzame groei. Van afhankelijkheid naar zelfstandigheid. Van overleven naar floreren.'
    },
    {
      blockType: 'overOnsTimelineSection',
      title: 'Bedrijf Timeline',
      subtitle: 'Onze reis tot nu toe'
    },
    {
      blockType: 'overOnsTeamSection',
      badge: 'Team',
      title: 'Het team achter Real Accelerate',
      members: [
        {
          name: 'Joep',
          role: 'Founder — CEO',
          image: '/images/1.EmiroSmolders-Settle-DSC06894-.webp'
        },
        {
          name: 'Partner Naam',
          role: 'Co-Founder — CTO',
          image: '/images/2.EmiroSmolders-Settle-DSC06899-.webp'
        },
        {
          name: 'Nina',
          role: 'Klant succes baas',
          image: '/images/3.EmiroSmolders-Settle-DSC06907-.webp'
        },
        {
          name: 'Ravi',
          role: 'Sales tijger',
          image: '/images/4.EmiroSmolders-Settle-DSC06915-.webp'
        },
        {
          name: 'Milo',
          role: 'Creatieve baas',
          image: '/images/5.EmiroSmolders-Settle-DSC06927-.webp'
        },
        {
          name: 'Sofie',
          role: 'Data baas',
          image: '/images/6.EmiroSmolders-Settle-DSC06931-.webp'
        },
        {
          name: 'Alex',
          role: 'Product owner',
          image: '/images/10.EmiroSmolders-Settle-DSC06970-.webp'
        },
        {
          name: 'Maya',
          role: 'Design lead',
          image: '/images/placeholder.jpg'
        }
      ]
    },
    {
      blockType: 'overOnsCoreValuesSection',
      badge: 'Onze Fundamenten',
      title: 'Waarden die ons',
      highlightedWord: 'onderscheiden',
      subtitle: 'Wat ons onderscheidt in de vastgoedbranche. Deze waarden zijn levende principes die dagelijks tot uiting komen in onze acties, beslissingen en de manier waarop we met elkaar en onze klanten samenwerken.',
      values: [
        {
          id: 'value-1',
          title: 'Integriteit',
          description: 'Eerlijkheid en transparantie in alles wat we doen. Onze klanten kunnen erop vertrouwen dat we onze beloftes nakomen.',
          icon: 'Shield',
          color: 'from-blue-500 to-blue-700',
          bgGradient: 'bg-gradient-to-br from-blue-500/20 to-blue-700/20'
        },
        {
          id: 'value-2',
          title: 'Fun',
          description: 'Werken mag leuk zijn, want energie en plezier zorgen voor betere resultaten. We vinden dat werk energie mag geven: plezier en ambitie gaan hand in hand.',
          icon: 'Lightbulb',
          color: 'from-amber-500 to-orange-600',
          bgGradient: 'bg-gradient-to-br from-amber-500/20 to-orange-600/20'
        },
        {
          id: 'value-3',
          title: 'Samenwerking',
          description: 'De beste resultaten ontstaan door echt teamwork. We werken vanuit vertrouwen en gelijkwaardigheid met onze klanten.',
          icon: 'Users',
          color: 'from-green-500 to-emerald-600',
          bgGradient: 'bg-gradient-to-br from-green-500/20 to-emerald-600/20'
        },
        {
          id: 'value-4',
          title: 'Doelgericht',
          description: 'Alles draagt bij aan tastbare vooruitgang. We maken complexe zaken overzichtelijk en helpen vooruitgang boeken zonder onnodige omwegen.',
          icon: 'Heart',
          color: 'from-red-500 to-pink-600',
          bgGradient: 'bg-gradient-to-br from-red-500/20 to-pink-600/20'
        },
        {
          id: 'value-5',
          title: 'Resultaatgericht',
          description: 'We sturen altijd op concrete impact voor onze klanten. Jouw succes is ons succes - we focussen op meetbare resultaten die waarde toevoegen.',
          icon: 'Award',
          color: 'from-purple-500 to-indigo-600',
          bgGradient: 'bg-gradient-to-br from-purple-500/20 to-indigo-600/20'
        },
        {
          id: 'value-6',
          title: 'Ervaring',
          description: 'Wij spreken niet vanaf de zijlijn. Met ons eigen makelaarskantoor SETTL. en onze activiteiten in vastgoedinvesteringen combineren we ervaring met vernieuwing.',
          icon: 'Target',
          color: 'from-teal-500 to-cyan-600',
          bgGradient: 'bg-gradient-to-br from-teal-500/20 to-cyan-600/20'
        }
      ]
    },
    {
      blockType: 'overOnsPartnershipsSection',
      badge: 'Partnerships',
      title: 'Onze Partnerships',
      partnerships: [
        {
          title: 'IQI Global',
          description: 'Internationale expansie partner. Versterkt onze slagkracht met wereldwijde aanwezigheid en expertise.',
          image: '/images/iqiglobal.jpg',
          features: [
            { text: 'Internationale expansie' },
            { text: '40.000+ agents wereldwijd' },
            { text: 'Real Accelerate = IQI NL' },
            { text: 'Dubai, Spanje, Bali' }
          ]
        },
        {
          title: 'SETTL.',
          description: 'Ons eigen makelaarskantoor waar we dagelijks in de praktijk staan. Alles wat we doen voor onze klanten, hebben we zelf getest, verbeterd en bewezen.',
          image: '/images/editbv.jpg',
          features: [
            { text: 'Eigen makelaarskantoor' },
            { text: 'Ervaring uit de praktijk' },
            { text: 'Bewezen strategieën' },
            { text: 'Real-world testing ground' }
          ]
        }
      ],
      quote: 'We spreken niet vanaf de zijlijn, maar met ondernemers die zelf midden in de vastgoedwereld staan en jouw doelen begrijpen.',
      quoteAuthor: 'Real Accelerate'
    },
    {
      blockType: 'overOnsCultureSection',
      badge: 'ONZE PERSOONLIJKHEID',
      title: 'VAN VASTGOEDONDERNEMERS',
      subtitle: 'Hoe wij werken:',
      comparisonRows: [
        {
          aspect: 'Kennis & Ervaring',
          aspectIcon: 'BookOpen',
          other: 'Theorieën zonder praktijk',
          realAccelerate: 'Ervaring uit de praktijk'
        },
        {
          aspect: 'Aanpak',
          aspectIcon: 'Compass',
          other: 'Standaard oplossingen',
          realAccelerate: 'We combineren ervaring met vernieuwing'
        },
        {
          aspect: 'Kosten',
          aspectIcon: 'Wallet',
          other: 'Bureau op afstand',
          realAccelerate: 'Ondernemers die zelf midden in de vastgoedwereld staan'
        },
        {
          aspect: 'Service',
          aspectIcon: 'Headphones',
          other: 'Alleen advies, geen hands-on',
          realAccelerate: 'We zeggen waar het op staat'
        },
        {
          aspect: 'Garantie',
          aspectIcon: 'ShieldCheck',
          other: 'Formele relaties',
          realAccelerate: 'Plezier en ambitie gaan hand in hand'
        },
        {
          aspect: 'Relatie',
          aspectIcon: 'Handshake',
          other: 'Snelle transacties',
          realAccelerate: 'Duurzame relaties boven snelle deals'
        }
      ],
      testimonial: {
        quote: 'Bij ons draait het niet alleen om strategieën en processen, maar vooral om mensen. We werken vanuit vertrouwen en gelijkwaardigheid, en we bouwen liever duurzame relaties dan snelle transacties.',
        author: 'Real Accelerate Team',
        company: 'Over onze aanpak'
      }
    },
    {
      blockType: 'overOnsOfficeSection',
      badge: 'Office & Werkwijze',
      title: 'Waarom samenwerken met ons?',
      subtitle: '🏢 Bezoek ons in Amsterdam',
      latitude: 52.3239602,
      longitude: 4.9586448,
      address: {
        street: 'Daalwijkdreef 47',
        city: '1103 AD Amsterdam'
      },
      phone: '085 060 2989',
      email: 'info@realaccelerate.nl',
      image: '/images/joep-koffie.png',
      imageAlt: 'Joep'
    },
    {
      blockType: 'overOnsCTASection',
      title: 'Klaar voor een',
      highlightedWord: 'strategiesessie',
      subtitle: 'Ontdek hoe we jouw bedrijf naar het volgende niveau kunnen brengen. Plan een vrijblijvende strategiesessie en krijg direct inzicht in jouw groeimogelijkheden.',
      benefits: [
        { text: 'Gratis strategiesessie van 45 minuten' },
        { text: 'Analyse van jouw huidige situatie en doelen' },
        { text: 'Concrete aanbevelingen voor groei' },
        { text: 'Geen verplichtingen, volledig vrijblijvend' }
      ],
      ctaLabel: 'Plan je strategiesessie',
      ctaSubtext: 'Waarde €1000 • Volledig vrijblijvend • Direct inplannen'
    }
  ]
}

async function migrate() {
  console.log('🚀 Starting over-ons page migration...\n')
  
  try {
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Check if over-ons page exists
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/over-ons',
        },
      },
    })
    
    const pageData = {
      title: 'Over ons',
      slug: '/over-ons',
      status: 'published',
      blocks: overOnsPageData.blocks,
      seo: {
        metaTitle: overOnsPageData.metadata.metaTitle,
        metaDescription: overOnsPageData.metadata.metaDescription,
      },
    }
    
    if (existing.docs.length > 0) {
      console.log('📝 Over-ons page already exists, updating...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: pageData,
      })
      console.log('✅ Over-ons page updated!\n')
    } else {
      console.log('📝 Creating new over-ons page...')
      await payload.create({
        collection: 'pages',
        data: pageData,
      })
      console.log('✅ Over-ons page created!\n')
    }
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Total blocks: ${overOnsPageData.blocks.length}`)
    console.log(`   - Slug: /over-ons`)
    console.log(`   - Status: published`)
    console.log('\n👉 Visit http://localhost:3000/admin/collections/pages to view in Payload CMS\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
