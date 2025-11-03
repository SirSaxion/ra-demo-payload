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
        filterAllLabel: 'Alle verhalen',
        resultLabel: 'Resultaat',
        categories: [
          { key: 'makelaars', label: 'Makelaars' },
          { key: 'buitenland', label: 'Buitenland / IQI' },
          { key: 'hypotheekadviseurs', label: 'Hypotheekadviseurs' },
          { key: 'projectontwikkelaars', label: 'Projectontwikkelaars' },
        ],
        stories: [
          {
            id: 1,
            name: 'Dennis van Beek',
            role: 'NVM Makelaar',
            company: 'Van Beek Vastgoed',
            story: 'Binnen 6 maanden zijn we van 2 naar 8 verkopen per maand gegaan. De lead kwaliteit is fenomenaal - bijna elke afspraak wordt een opdracht.',
            achievement: 'Verkopen verviervoudigd',
            metric: '400% meer deals',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            category: 'makelaars',
          },
          {
            id: 2,
            name: 'Marieke Jansen',
            role: 'Makelaar o.g.',
            company: 'Jansen Makelaardij Rotterdam',
            story: 'Het CRM systeem en automatisering bespaart me 15 uur per week. Ik focus nu puur op klantcontact en verkopen, niet meer op administratie.',
            achievement: 'Tijdsbesparing administratie',
            metric: '15 uur/week',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b5f8f15a?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            category: 'buitenland',
          },
          {
            id: 3,
            name: 'Tom Bakker',
            role: 'Eigenaar',
            company: 'Bakker & Zn Makelaardij',
            story: 'Onze omzet is in 8 maanden tijd verdrievoudigd. We zijn nu de grootste makelaar in onze regio en hebben 3 nieuwe medewerkers aangenomen.',
            achievement: 'Omzet verdrievoudigd',
            metric: '€680k+ omzet',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            category: 'makelaars',
          },
          {
            id: 4,
            name: 'Sandra de Wit',
            role: 'Hypotheekadviseur',
            company: 'De Wit Hypotheken & Vastgoed',
            story: 'Door de integratiepackage krijg ik nu automatisch leads van makelaars. Mijn hypotheekaanvragen zijn met 180% gestegen in 4 maanden tijd.',
            achievement: 'Hypotheekaanvragen gestegen',
            metric: '180% meer leads',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            category: 'hypotheekadviseurs',
          },
          {
            id: 5,
            name: 'Mike van der Berg',
            role: 'NVM Makelaar',
            company: 'Van der Berg International',
            story: 'We verkopen nu ook succesvol in Spanje en Portugal. De internationale marketing aanpak heeft ons 40+ transacties in het buitenland opgeleverd.',
            achievement: 'Internationale uitbreiding',
            metric: '40+ int. deals',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            category: 'buitenland',
          },
          {
            id: 6,
            name: 'Robert Hendriks',
            role: 'Projectontwikkelaar',
            company: 'Hendriks Development',
            story: 'Onze nieuwbouwprojecten zijn nu binnen 2 weken uitverkocht. De targeting en marketing voor projectontwikkeling werkt perfect voor onze doelgroep.',
            achievement: 'Snellere verkoop projecten',
            metric: '2 weken uitverkocht',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            category: 'projectontwikkelaars',
          },
        ],
      },
      {
        blockType: 'casesProjectsShowcase',
        badge: 'Onze Projecten',
        title: 'Websites die écht converteren',
        subtitle: 'Bekijk enkele van onze recentste projecten voor ambitieuze makelaars. Van concept tot conversie.',
      },
      {
        blockType: 'casesIndustryBreakdown',
        badge: 'Live Reactie',
        title: '💬 Zo reageren onze klanten',
        subtitle: 'Echte berichten van makelaars die nieuwe leads en deals binnenhalen',
        chatHeader: 'Real Accelerate',
        chatStatus: 'online',
        messages: [
          { type: 'incoming', text: 'Hoi! Hoe gaat het met de nieuwe leads? 🚀', time: '14:32' },
          { type: 'outgoing', text: 'Wauw! Ik kan het bijna niet geloven! 🤩', time: '14:33' },
          { type: 'outgoing', text: 'Vandaag al 8 nieuwe leads binnen! 📈', time: '14:33' },
          { type: 'outgoing', text: 'En 3 afspraken voor morgen ingepland! 🎯', time: '14:34' },
          { type: 'incoming', text: 'Fantastisch! 🔥 Zo zien we dat graag!', time: '14:35' },
          { type: 'outgoing', text: 'Jullie systeem werkt echt perfect! 💪', time: '14:35' },
        ],
        inputPlaceholder: 'Typ een bericht...',
        indicator1: '+8',
        indicator2: '🎯 3 afspraken',
        indicator3: '💰 ROI 6x',
        footerText: 'Dit is hoe onze klanten reageren als hun agenda vol loopt met kwalitatieve afspraken',
        footerAttribution: '— Gesprek met klant',
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
        filterAllLabel: 'All stories',
        resultLabel: 'Result',
        categories: [
          { key: 'makelaars', label: 'Real Estate Agents' },
          { key: 'buitenland', label: 'International / IQI' },
          { key: 'hypotheekadviseurs', label: 'Mortgage Advisors' },
          { key: 'projectontwikkelaars', label: 'Property Developers' },
        ],
        stories: [
          {
            id: 101,
            name: 'Dennis van Beek',
            role: 'Licensed Real Estate Agent',
            company: 'Van Beek Real Estate',
            story: 'Within 6 months we went from 2 to 8 sales per month. The lead quality is phenomenal - almost every appointment becomes a contract.',
            achievement: 'Sales quadrupled',
            metric: '400% more deals',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            category: 'makelaars',
          },
          {
            id: 102,
            name: 'Marieke Jansen',
            role: 'Licensed Agent',
            company: 'Jansen Real Estate Rotterdam',
            story: 'The CRM system and automation saves me 15 hours per week. I now focus purely on client contact and sales, no longer on administration.',
            achievement: 'Time savings on admin',
            metric: '15 hrs/week',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b5f8f15a?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            category: 'buitenland',
          },
          {
            id: 103,
            name: 'Tom Bakker',
            role: 'Owner',
            company: 'Bakker & Sons Real Estate',
            story: 'Our revenue has tripled in 8 months. We are now the largest agency in our region and have hired 3 new employees.',
            achievement: 'Revenue tripled',
            metric: '€680k+ revenue',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            category: 'makelaars',
          },
          {
            id: 104,
            name: 'Sandra de Wit',
            role: 'Mortgage Advisor',
            company: 'De Wit Mortgages & Real Estate',
            story: 'Thanks to the integration package, I now automatically receive leads from agents. My mortgage applications have increased by 180% in 4 months.',
            achievement: 'Mortgage applications increased',
            metric: '180% more leads',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            category: 'hypotheekadviseurs',
          },
          {
            id: 105,
            name: 'Mike van der Berg',
            role: 'Licensed Real Estate Agent',
            company: 'Van der Berg International',
            story: 'We are now also successfully selling in Spain and Portugal. The international marketing approach has delivered us 40+ transactions abroad.',
            achievement: 'International expansion',
            metric: '40+ intl deals',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            category: 'buitenland',
          },
          {
            id: 106,
            name: 'Robert Hendriks',
            role: 'Property Developer',
            company: 'Hendriks Development',
            story: 'Our new construction projects are now sold out within 2 weeks. The targeting and marketing for property development works perfectly for our audience.',
            achievement: 'Faster project sales',
            metric: '2 weeks sold out',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            category: 'projectontwikkelaars',
          },
        ],
      },
      {
        blockType: 'casesProjectsShowcase',
        badge: 'Our Projects',
        title: 'Websites that truly convert',
        subtitle: 'View some of our most recent projects for ambitious real estate agents. From concept to conversion.',
      },
      {
        blockType: 'casesIndustryBreakdown',
        badge: 'Live Reaction',
        title: '💬 This is how our clients react',
        subtitle: 'Real messages from agents bringing in new leads and deals',
        chatHeader: 'Real Accelerate',
        chatStatus: 'online',
        messages: [
          { type: 'incoming', text: 'Hi! How are the new leads going? 🚀', time: '14:32' },
          { type: 'outgoing', text: 'Wow! I can hardly believe it! 🤩', time: '14:33' },
          { type: 'outgoing', text: 'Already 8 new leads today! 📈', time: '14:33' },
          { type: 'outgoing', text: 'And 3 appointments scheduled for tomorrow! 🎯', time: '14:34' },
          { type: 'incoming', text: 'Fantastic! 🔥 That\'s what we like to see!', time: '14:35' },
          { type: 'outgoing', text: 'Your system works perfectly! 💪', time: '14:35' },
        ],
        inputPlaceholder: 'Type a message...',
        indicator1: '+8',
        indicator2: '🎯 3 appointments',
        indicator3: '💰 ROI 6x',
        footerText: 'This is how our clients react when their calendars fill up with quality appointments',
        footerAttribution: '— Conversation with client',
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
