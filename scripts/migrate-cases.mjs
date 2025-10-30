/**
 * Complete Cases Page Migration Script
 * Migrates all data from old cases.ts to Payload CMS
 * 
 * Run with: node scripts/migrate-cases.mjs
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

// Full cases page data from old CMS
const casesPageData = {
  metadata: {
    metaTitle: "Cases & Resultaten | Real Accelerate",
    metaDescription: "Bewezen resultaten van honderden vastgoedprofessionals. Van lokale makelaars tot internationale projecten – onze beste transformaties."
  },
  blocks: [
    {
      blockType: 'casesHero',
      badge: 'Cases & Resultaten',
      title: 'Bewezen resultaten van',
      titleHighlight: 'honderden',
      subtitle: 'Van lokale makelaars tot internationale projecten – onze beste transformaties.',
      ctaPrimary: 'Claim gratis strategiesessie',
      ctaSecondary: 'Bekijk top cases',
      ctaSecondaryHref: '#beste-cases',
      stats: [
        {
          icon: 'Users',
          label: 'Clients',
          value: 200,
          suffix: '+'
        },
        {
          icon: 'LineChart',
          label: 'Omzetgroei',
          value: 50,
          suffix: 'M+'
        },
        {
          icon: 'Briefcase',
          label: 'Deals',
          value: 2847
        },
        {
          icon: 'Globe',
          label: 'Landen',
          value: 4
        }
      ],
      image: '/images/rudy-thumbs-up.png',
      imageAlt: 'Rudy met duim omhoog'
    },
    {
      blockType: 'casesBestVariants',
      badge: 'Onze beste cases',
      title: 'Uitgelichte transformaties',
      subtitle: 'Een selectie van onze meest indrukwekkende resultaten – strak, helder en geloofwaardig.',
      featuredBadge: 'FEATURED CASE',
      featuredCompany: 'De Brabant Makelaar',
      featuredSubtitle: 'Van 2 naar 8 werknemers in 18 maanden',
      featuredImage: '/images/case-de-brabant-makelaar.webp',
      featuredImageAlt: 'Team De Brabant Makelaar',
      stats: [
        {
          icon: 'TrendingUp',
          label: 'Maandomzet',
          from: '€20k',
          to: '€65k',
          suffix: 'in 18 maanden'
        },
        {
          icon: 'Target',
          label: 'Trajecten',
          from: '5',
          to: '12',
          suffix: 'per maand'
        },
        {
          icon: 'Users2',
          label: 'Team',
          from: '2',
          to: '8',
          suffix: 'werknemers'
        },
        {
          icon: 'Building2',
          label: 'Locaties',
          from: '1',
          to: '4',
          suffix: 'nieuwe vestigingen'
        }
      ],
      results: [
        {
          icon: 'TrendingUp',
          text: 'Bewezen marketingmachine ingericht'
        },
        {
          icon: 'Users2',
          text: '5 aankoopmakelaars actief'
        },
        {
          icon: 'CheckCircle2',
          text: 'Agenda\'s gevuld met kwalitatieve afspraken'
        }
      ],
      otherCases: [
        {
          company: 'Thoma Post',
          sector: 'Makelaars',
          icon: 'Home',
          highlight: '31 afspraken in maand 1',
          bullets: [
            { item: 'Snelste start' },
            { item: 'Kwalitatieve leads' },
            { item: 'Consistente pijplijn' }
          ],
          image: '/images/thoma_thumb.png'
        },
        {
          company: 'Dubai Property',
          sector: 'Internationaal',
          icon: 'Globe2',
          highlight: '$8.5M+ verkocht',
          bullets: [
            { item: 'Nationwide events' },
            { item: 'IQI Global partner' },
            { item: 'Snelle doorloop' }
          ],
          image: '/images/dubai_thumb.jpg'
        }
      ]
    },
    {
      blockType: 'casesVideoTestimonials',
      badge: 'Video testimonials',
      title: 'Hoor het van makelaars zelf',
      subtitle: 'Echte verhalen van professionals die hun business transformeerden met onze marketing machine.',
      durationBadge: '~60 sec',
      activeIndicator: 'Nu aan het spelen',
      sidebarHeader: 'Andere verhalen',
      videos: [
        {
          id: 1,
          company: 'De Brabant Makelaar',
          name: 'Amory',
          role: 'Eigenaar',
          thumbnail: '/images/videothumb1.jpeg',
          videoUrl: '/videos/testimonial-brabant.mp4',
          quote: 'Van €20k naar €65k maandomzet in 18 maanden. De marketing machine werkt echt.',
          highlight: '225% omzetgroei'
        },
        {
          id: 2,
          company: 'Bink & Partners',
          name: 'Pieter',
          role: 'Makelaar',
          thumbnail: '/images/videothumb2.jpeg',
          videoUrl: '/videos/testimonial-bink.mp4',
          quote: 'Ik betaalde €800 per maand aan slechte leads. Nu heb ik een wachtrij van ideale klanten die mij al willen.',
          highlight: '30+ afspraken per jaar'
        },
        {
          id: 3,
          company: 'Thoma Post Makelaardij',
          name: 'Thoma',
          role: 'Eigenaar',
          thumbnail: '/images/videothumb3.jpeg',
          videoUrl: '/videos/testimonial-thoma.mp4',
          quote: '31 kwalitatieve afspraken in de eerste maand. Ik had niet verwacht dat het zo snel zou gaan.',
          highlight: 'Snelste resultaten ooit'
        }
      ]
    },
    {
      blockType: 'casesMasonry',
      kicker: 'Succesverhalen',
      title: 'Hoe makelaars 300% meer leads krijgen',
      subtitle: 'Ontdek hoe ambitieuze makelaars hun business transformeren met onze bewezen aanpak'
    },
    {
      blockType: 'casesProjectsShowcase',
      badge: 'Onze Projecten',
      title: 'Websites die écht converteren',
      subtitle: 'Bekijk enkele van onze recentste projecten voor ambitieuze makelaars. Van concept tot conversie.'
    },
    {
      blockType: 'casesIndustryBreakdown'
    },
    {
      blockType: 'casesProcessShowcase',
      badge: 'Onze Methodologie',
      title: 'Drie stappen naar voorspelbare groei',
      subtitle: 'Onze bewezen 3-stappen methodologie heeft al honderden vastgoedprofessionals geholpen hun bedrijf te laten groeien.',
      steps: [
        {
          number: '1',
          title: 'Strategische Analyse',
          subtitle: 'Huidige situatie & doelen in kaart',
          icon: 'Target',
          items: [
            { text: 'Doelgroep & regio\'s (exclusiviteit per regio)' },
            { text: 'Knelpunten die groei remmen' }
          ],
          timeline: 'Week 1-2'
        },
        {
          number: '2',
          title: 'Custom Marketing Systeem',
          subtitle: 'Implementatie op maat',
          icon: 'Hammer',
          items: [
            { text: 'Huidige website, campagnes en CRM in kaart' },
            { text: 'Doelen afgestemd op resultaatgaranties' }
          ],
          timeline: 'Week 3-4'
        },
        {
          number: '3',
          title: 'Resultaten & Optimalisatie',
          subtitle: 'Meetbare groei realiseren',
          icon: 'TrendingUp',
          items: [
            { text: 'Meetbare resultaten en groei' },
            { text: 'Schaalbaarheid voor lange termijn groei' }
          ],
          timeline: 'Maand 2+'
        }
      ]
    },
    {
      blockType: 'casesStartYourStory',
      badge: 'Start Jouw Verhaal',
      title: 'WORD DE VOLGENDE',
      titleHighlight: 'SUCCES STORY',
      benefits: [
        { text: 'Analyse huidige situatie en groeidoelen' },
        { text: 'Identificatie knelpunten die jou tegenhouden' },
        { text: 'Concreet plan om doelstellingen te behalen' }
      ],
      ctaLabel: 'Claim je gratis strategiesessie',
      ctaSubtext: '30 minuten • Gratis • Vrijblijvend',
      ctaFootnote: '📅 "Beperkte plaatsen - alleen voor serieuze groeiers"'
    }
  ]
}

async function migrate() {
  console.log('🚀 Starting cases page migration...\n')
  
  try {
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Check if cases page exists
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/cases',
        },
      },
    })
    
    const pageData = {
      title: 'Cases & Resultaten',
      slug: '/cases',
      status: 'published',
      blocks: casesPageData.blocks,
      seo: {
        metaTitle: casesPageData.metadata.metaTitle,
        metaDescription: casesPageData.metadata.metaDescription,
      },
    }
    
    if (existing.docs.length > 0) {
      console.log('📝 Cases page already exists, updating...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: pageData,
      })
      console.log('✅ Cases page updated!\n')
    } else {
      console.log('📝 Creating new cases page...')
      await payload.create({
        collection: 'pages',
        data: pageData,
      })
      console.log('✅ Cases page created!\n')
    }
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Total blocks: ${casesPageData.blocks.length}`)
    console.log(`   - Slug: /cases`)
    console.log(`   - Status: published`)
    console.log('\n👉 Visit http://localhost:3000/admin/collections/pages to view in Payload CMS\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
