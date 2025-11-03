/**
 * Cases Page Migration Script
 * Migrates both NL and EN content to Payload CMS
 * Run with: pnpm tsx scripts/migrate-cases.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const pageData = {
  nl: {
    title: 'Cases & Resultaten',
    seo: {
      metaTitle: 'Cases & Resultaten | Real Accelerate',
      metaDescription: 'Bewezen resultaten van honderden vastgoedprofessionals. Van lokale makelaars tot internationale projecten – onze beste transformaties.',
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
          { icon: 'Users', label: 'Clients', value: 200, suffix: '+' },
          { icon: 'LineChart', label: 'Omzetgroei', value: 50, suffix: 'M+' },
          { icon: 'Briefcase', label: 'Deals', value: 2847 },
          { icon: 'Globe', label: 'Landen', value: 4 },
        ],
        image: '/images/rudy-thumbs-up.png',
        imageAlt: 'Rudy met duim omhoog',
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
          { icon: 'TrendingUp', label: 'Maandomzet', from: '€20k', to: '€65k', suffix: 'in 18 maanden' },
          { icon: 'Target', label: 'Trajecten', from: '5', to: '12', suffix: 'per maand' },
          { icon: 'Users2', label: 'Team', from: '2', to: '8', suffix: 'werknemers' },
          { icon: 'Building2', label: 'Locaties', from: '1', to: '4', suffix: 'nieuwe vestigingen' },
        ],
        results: [
          { icon: 'TrendingUp', text: 'Bewezen marketingmachine ingericht' },
          { icon: 'Users2', text: '5 aankoopmakelaars actief' },
          { icon: 'CheckCircle2', text: 'Agenda\'s gevuld met kwalitatieve afspraken' },
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
              { item: 'Consistente pijplijn' },
            ],
            image: '/images/thoma_thumb.png',
          },
          {
            company: 'Dubai Property',
            sector: 'Internationaal',
            icon: 'Globe2',
            highlight: '$8.5M+ verkocht',
            bullets: [
              { item: 'Nationwide events' },
              { item: 'IQI Global partner' },
              { item: 'Snelle doorloop' },
            ],
            image: '/images/dubai_thumb.jpg',
          },
        ],
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
            highlight: '225% omzetgroei',
          },
          {
            id: 2,
            company: 'Bink & Partners',
            name: 'Pieter',
            role: 'Makelaar',
            thumbnail: '/images/videothumb2.jpeg',
            videoUrl: '/videos/testimonial-bink.mp4',
            quote: 'Ik betaalde €800 per maand aan slechte leads. Nu heb ik een wachtrij van ideale klanten die mij al willen.',
            highlight: '30+ afspraken per jaar',
          },
          {
            id: 3,
            company: 'Thoma Post Makelaardij',
            name: 'Thoma',
            role: 'Eigenaar',
            thumbnail: '/images/videothumb3.jpeg',
            videoUrl: '/videos/testimonial-thoma.mp4',
            quote: '31 kwalitatieve afspraken in de eerste maand. Ik had niet verwacht dat het zo snel zou gaan.',
            highlight: 'Snelste resultaten ooit',
          },
        ],
      },
      {
        blockType: 'casesMasonry',
        kicker: 'Succesverhalen',
        title: 'Hoe makelaars 300% meer leads krijgen',
        subtitle: 'Ontdek hoe ambitieuze makelaars hun business transformeren met onze bewezen aanpak',
      },
      {
        blockType: 'casesProjectsShowcase',
        badge: 'Onze Projecten',
        title: 'Websites die écht converteren',
        subtitle: 'Bekijk enkele van onze recentste projecten voor ambitieuze makelaars. Van concept tot conversie.',
      },
      {
        blockType: 'casesIndustryBreakdown',
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
              { text: 'Knelpunten die groei remmen' },
            ],
            timeline: 'Week 1-2',
          },
          {
            number: '2',
            title: 'Custom Marketing Systeem',
            subtitle: 'Implementatie op maat',
            icon: 'Hammer',
            items: [
              { text: 'Huidige website, campagnes en CRM in kaart' },
              { text: 'Doelen afgestemd op resultaatgaranties' },
            ],
            timeline: 'Week 3-4',
          },
          {
            number: '3',
            title: 'Resultaten & Optimalisatie',
            subtitle: 'Meetbare groei realiseren',
            icon: 'TrendingUp',
            items: [
              { text: 'Meetbare resultaten en groei' },
              { text: 'Schaalbaarheid voor lange termijn groei' },
            ],
            timeline: 'Maand 2+',
          },
        ],
      },
      {
        blockType: 'casesStartYourStory',
        badge: 'Start Jouw Verhaal',
        title: 'WORD DE VOLGENDE',
        titleHighlight: 'SUCCES STORY',
        benefits: [
          { text: 'Analyse huidige situatie en groeidoelen' },
          { text: 'Identificatie knelpunten die jou tegenhouden' },
          { text: 'Concreet plan om doelstellingen te behalen' },
        ],
        ctaLabel: 'Claim je gratis strategiesessie',
        ctaSubtext: '30 minuten • Gratis • Vrijblijvend',
        ctaFootnote: '📅 "Beperkte plaatsen - alleen voor serieuze groeiers"',
      },
    ],
  },
  en: {
    title: 'Cases & Results',
    seo: {
      metaTitle: 'Cases & Results | Real Accelerate',
      metaDescription: 'Proven results from hundreds of real estate professionals. From local agents to international projects – our best transformations.',
    },
    blocks: [
      {
        blockType: 'casesHero',
        badge: 'Cases & Results',
        title: 'Proven results from',
        titleHighlight: 'hundreds',
        subtitle: 'of real estate professionals. From local agents to international projects – our best transformations.',
        ctaPrimary: 'Claim free strategy session',
        ctaSecondary: 'View top cases',
        ctaSecondaryHref: '#beste-cases',
        stats: [
          { icon: 'Users', label: 'Clients', value: 200, suffix: '+' },
          { icon: 'LineChart', label: 'Revenue growth', value: 50, suffix: 'M+' },
          { icon: 'Briefcase', label: 'Deals', value: 2847 },
          { icon: 'Globe', label: 'Countries', value: 4 },
        ],
        image: '/images/rudy-thumbs-up.png',
        imageAlt: 'Rudy with thumbs up',
      },
      {
        blockType: 'casesBestVariants',
        badge: 'Our best cases',
        title: 'Featured transformations',
        subtitle: 'A selection of our most impressive results – clean, clear and credible.',
        featuredBadge: 'FEATURED CASE',
        featuredCompany: 'De Brabant Makelaar',
        featuredSubtitle: 'From 2 to 8 employees in 18 months',
        featuredImage: '/images/case-de-brabant-makelaar.webp',
        featuredImageAlt: 'Team De Brabant Makelaar',
        stats: [
          { icon: 'TrendingUp', label: 'Monthly revenue', from: '€20k', to: '€65k', suffix: 'in 18 months' },
          { icon: 'Target', label: 'Deals', from: '5', to: '12', suffix: 'per month' },
          { icon: 'Users2', label: 'Team', from: '2', to: '8', suffix: 'employees' },
          { icon: 'Building2', label: 'Locations', from: '1', to: '4', suffix: 'new offices' },
        ],
        results: [
          { icon: 'TrendingUp', text: 'Proven marketing machine established' },
          { icon: 'Users2', text: '5 buyer agents active' },
          { icon: 'CheckCircle2', text: 'Calendars filled with quality appointments' },
        ],
        otherCases: [
          {
            company: 'Thoma Post',
            sector: 'Real Estate Agents',
            icon: 'Home',
            highlight: '31 appointments in month 1',
            bullets: [
              { item: 'Fastest start' },
              { item: 'Quality leads' },
              { item: 'Consistent pipeline' },
            ],
            image: '/images/thoma_thumb.png',
          },
          {
            company: 'Dubai Property',
            sector: 'International',
            icon: 'Globe2',
            highlight: '$8.5M+ sold',
            bullets: [
              { item: 'Nationwide events' },
              { item: 'IQI Global partner' },
              { item: 'Fast turnaround' },
            ],
            image: '/images/dubai_thumb.jpg',
          },
        ],
      },
      {
        blockType: 'casesVideoTestimonials',
        badge: 'Video testimonials',
        title: 'Hear it from agents themselves',
        subtitle: 'Real stories from professionals who transformed their business with our marketing machine.',
        durationBadge: '~60 sec',
        activeIndicator: 'Now playing',
        sidebarHeader: 'Other stories',
        videos: [
          {
            id: 101,
            company: 'De Brabant Makelaar',
            name: 'Amory',
            role: 'Owner',
            thumbnail: '/images/videothumb1.jpeg',
            videoUrl: '/videos/testimonial-brabant.mp4',
            quote: 'From €20k to €65k monthly revenue in 18 months. The marketing machine really works.',
            highlight: '225% revenue growth',
          },
          {
            id: 102,
            company: 'Bink & Partners',
            name: 'Pieter',
            role: 'Real Estate Agent',
            thumbnail: '/images/videothumb2.jpeg',
            videoUrl: '/videos/testimonial-bink.mp4',
            quote: 'I paid €800 per month for bad leads. Now I have a waiting list of ideal clients who already want me.',
            highlight: '30+ appointments per year',
          },
          {
            id: 103,
            company: 'Thoma Post Makelaardij',
            name: 'Thoma',
            role: 'Owner',
            thumbnail: '/images/videothumb3.jpeg',
            videoUrl: '/videos/testimonial-thoma.mp4',
            quote: '31 quality appointments in the first month. I didn\'t expect it to go so fast.',
            highlight: 'Fastest results ever',
          },
        ],
      },
      {
        blockType: 'casesMasonry',
        kicker: 'Success stories',
        title: 'How agents get 300% more leads',
        subtitle: 'Discover how ambitious agents transform their business with our proven approach',
      },
      {
        blockType: 'casesProjectsShowcase',
        badge: 'Our Projects',
        title: 'Websites that truly convert',
        subtitle: 'View some of our most recent projects for ambitious real estate agents. From concept to conversion.',
      },
      {
        blockType: 'casesIndustryBreakdown',
      },
      {
        blockType: 'casesProcessShowcase',
        badge: 'Our Methodology',
        title: 'Three steps to predictable growth',
        subtitle: 'Our proven 3-step methodology has already helped hundreds of real estate professionals grow their business.',
        steps: [
          {
            number: '1',
            title: 'Strategic Analysis',
            subtitle: 'Current situation & goals mapped',
            icon: 'Target',
            items: [
              { text: 'Target audience & regions (regional exclusivity)' },
              { text: 'Bottlenecks that hinder growth' },
            ],
            timeline: 'Week 1-2',
          },
          {
            number: '2',
            title: 'Custom Marketing System',
            subtitle: 'Tailored implementation',
            icon: 'Hammer',
            items: [
              { text: 'Current website, campaigns and CRM mapped' },
              { text: 'Goals aligned with result guarantees' },
            ],
            timeline: 'Week 3-4',
          },
          {
            number: '3',
            title: 'Results & Optimization',
            subtitle: 'Realize measurable growth',
            icon: 'TrendingUp',
            items: [
              { text: 'Measurable results and growth' },
              { text: 'Scalability for long-term growth' },
            ],
            timeline: 'Month 2+',
          },
        ],
      },
      {
        blockType: 'casesStartYourStory',
        badge: 'Start Your Story',
        title: 'BECOME THE NEXT',
        titleHighlight: 'SUCCESS STORY',
        benefits: [
          { text: 'Analysis of current situation and growth goals' },
          { text: 'Identification of bottlenecks holding you back' },
          { text: 'Concrete plan to achieve objectives' },
        ],
        ctaLabel: 'Claim your free strategy session',
        ctaSubtext: '30 minutes • Free • Non-binding',
        ctaFootnote: '📅 "Limited spots - only for serious growers"',
      },
    ],
  },
}

async function migrate() {
  console.log('🚀 Starting cases page migration...\n')
  
  try {
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Check if page exists
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/cases',
        },
      },
      locale: 'all',
      limit: 1,
    })
    
    if (existing.docs.length > 0) {
      console.log('📝 Cases page exists, updating both locales...\n')
      
      // Update NL locale
      console.log('🇳🇱 Updating Dutch content...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        locale: 'nl',
        data: {
          title: pageData.nl.title,
          slug: '/cases',
          blocks: pageData.nl.blocks,
          seo: pageData.nl.seo,
        },
      })
      console.log('✅ Dutch content updated\n')
      
      // Update EN locale
      console.log('🇬🇧 Updating English content...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        locale: 'en',
        data: {
          title: pageData.en.title,
          blocks: pageData.en.blocks,
          seo: pageData.en.seo,
        },
      })
      console.log('✅ English content updated\n')
      
      // Publish the page
      console.log('📤 Publishing page...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: {
          _status: 'published',
        },
      })
      console.log('✅ Page published\n')
    } else {
      console.log('📝 Creating new cases page...\n')
      
      // Create with NL first
      console.log('🇳🇱 Creating with Dutch content...')
      const created = await payload.create({
        collection: 'pages',
        locale: 'nl',
        data: {
          title: pageData.nl.title,
          slug: '/cases',
          blocks: pageData.nl.blocks,
          seo: pageData.nl.seo,
          _status: 'published',
        },
      })
      console.log('✅ Dutch content created\n')
      
      // Update with EN content
      console.log('🇬🇧 Adding English content...')
      await payload.update({
        collection: 'pages',
        id: created.id,
        locale: 'en',
        data: {
          title: pageData.en.title,
          blocks: pageData.en.blocks,
          seo: pageData.en.seo,
        },
      })
      console.log('✅ English content added\n')
    }
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - NL blocks: ${pageData.nl.blocks.length}`)
    console.log(`   - EN blocks: ${pageData.en.blocks.length}`)
    console.log(`   - Slug: /cases`)
    console.log(`   - Status: published`)
    console.log('\n👉 Visit http://localhost:3001/admin/collections/pages to view in Payload CMS')
    console.log('👉 NL: http://localhost:3001/cases')
    console.log('👉 EN: http://localhost:3001/en/cases\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
