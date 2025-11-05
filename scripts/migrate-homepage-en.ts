/**
 * English Homepage Migration Script
 * Adds English translations to the homepage in Payload CMS
 * 
 * Run with: pnpm tsx scripts/migrate-homepage-en.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

// Load environment variables
dotenv.config({ path: '.env' })

// English homepage data
const homePageDataEN = {
  metadata: {
    metaTitle: "Real Accelerate | Online Marketing for Real Estate Professionals | By Experts, for Experts",
    metaDescription: "Grow your real estate business with proven online marketing strategies. From 2 to 8 employees in 18 months. Real estate agent marketing, lead generation and automation by real estate experts."
  },
  blocks: [
    {
      blockType: 'heroSection',
      kicker: 'For ambitious real estate professionals',
      title: 'By real estate experts, for real estate experts',
      subtitle: 'From our own experience, we help your business grow and sell projects faster with smart online marketing.',
      ctaPrimary: {
        label: 'Schedule a coffee ☕',
        href: 'mailto:info@realaccelerate.nl'
      },
      ctaSecondary: {
        label: 'View cases',
        href: '/en/cases'
      }
    },
    {
      blockType: 'trustStrip',
      items: [
        { text: 'IQI Global partner' },
        { text: 'Recreation' },
        { text: '30+ years combined marketing experience' },
        { text: 'Active worldwide' },
        { text: 'New construction' },
        { text: 'Projects' },
        { text: '40+ years combined real estate experience' },
        { text: 'Real estate agent' },
        { text: 'Active in the real estate market ourselves' },
        { text: 'Global network' }
      ],
      ariaLabel: 'Trust and experience'
    },
    {
      blockType: 'problemSection',
      kicker: 'The problem we see',
      title: '95% of real estate entrepreneurs remain dependent on external leads after 10+ years',
      subtitle: 'This is what we see with many real estate professionals. We share this to provide insight—so you can determine what works for you.',
      oldSituation: {
        title: 'OLD SITUATION',
        items: [
          { icon: 'XCircle', text: 'Not keeping up with technology' },
          { icon: 'ThumbsDown', text: 'Not distinctive' },
          { icon: 'Activity', text: 'No stability' },
          { icon: 'Frown', text: 'Controlled by your schedule' }
        ]
      },
      newSituation: {
        title: 'OUR METHOD',
        items: [
          { icon: 'CheckCircle2', text: 'Automated systems' },
          { icon: 'Crown', text: 'Distinctive appearance and service' },
          { icon: 'Banknote', text: 'Stable income' },
          { icon: 'TrendingUp', text: 'Focus on what you do best' }
        ]
      }
    },
    {
      blockType: 'uniqueApproach',
      kicker: 'Our approach',
      title: 'We work differently than other marketing agencies',
      subtitle: 'We don\'t build campaigns, we build systems',
      metricValue: '99%',
      metricLabel: 'customer satisfaction',
      card1Title: 'Latest techniques',
      card1Description: 'Always ahead with the latest marketing innovations and tools.',
      card2Title: 'Marketing from A to Z',
      card2Description: 'Complete marketing solution without hassle or hidden costs.',
      card3Title: 'Predictable growth',
      card3Description: 'Consistent results through proven systems and processes.',
      card4Title: 'Our own experience',
      card4Description: 'From our own real estate experience, we know what works in practice.',
      ctaText: 'Sounds like the right fit?',
      ctaButtonLabel: 'Claim free strategy session',
      ctaButtonHref: 'mailto:info@realaccelerate.nl'
    },
    {
      blockType: 'flowConnector'
    },
    {
      blockType: 'numbersSection',
      title: 'Results in numbers',
      stats: [
        { value: '50+', label: 'Satisfied clients' },
        { value: '200+', label: 'Completed projects' },
        { value: '95%', label: 'Customer satisfaction' }
      ]
    },
    {
      blockType: 'faqSection',
      title: 'Frequently asked questions',
      subtitle: 'Everything you need to know',
      items: [
        {
          icon: 'Clock',
          question: 'How quickly can I get started with your marketing approach?',
          answer: 'We ensure a quick implementation of your marketing machine. After our strategy session, we start directly with setting up your campaigns. You usually see the first results within a few weeks, depending on your market and target audience.'
        },
        {
          icon: 'CreditCard',
          question: 'How does the collaboration work and what can I expect?',
          answer: 'We work transparently and results-oriented. We align our rates with your specific goals and situation. We focus on measurable growth and always keep you informed of progress. Contact us for a personal conversation about the possibilities.'
        },
        {
          icon: 'Home',
          question: 'For which real estate professionals is your approach suitable?',
          answer: 'Our marketing approach works for all real estate professionals: buyers\' agents, sellers\' agents, mortgage advisors and project developers. Whether you\'re just starting out or have years of experience, we tailor our strategy to your specific situation and target audience.'
        },
        {
          icon: 'Users',
          question: 'How do you ensure focus on my region?',
          answer: 'We work with a selective approach per region to achieve optimal results. This means we carefully look at the market dynamics in your area and tailor our strategy accordingly. This way we can fully focus on your success in your working area.'
        },
        {
          icon: 'Target',
          question: 'How do you ensure quality leads and appointments?',
          answer: 'We focus on attracting quality prospects that match your ideal customer profile. Through smart targeting and proven strategies, we ensure a constant stream of interested potential customers. Quality always comes first.'
        },
        {
          icon: 'TrendingUp',
          question: 'What makes your approach unique in the real estate market?',
          answer: 'We are active in the real estate market ourselves and understand the challenges of agents. Our marketing machine combines proven strategies with the latest techniques. As IQI Global Partner, we have access to international expertise and networks.'
        }
      ]
    },
    {
      blockType: 'howItWorksSection',
      title: 'How does it work?',
      subtitle: 'From introduction to results in 4 steps',
      steps: [
        {
          title: 'Strategic Analysis',
          subtitle: 'Current situation & goals mapped',
          icon: 'Lightbulb',
          bullets: [
            { text: 'Target audience & regions' },
            { text: 'Current website, campaigns and CRM mapped' },
            { text: 'Bottlenecks that inhibit growth' },
            { text: 'Goals aligned with your situation' }
          ]
        },
        {
          title: 'Custom Marketing System',
          subtitle: 'Reach your ideal customers',
          icon: 'ClipboardCheck',
          bullets: [
            { text: 'Websites/landing pages that convert' },
            { text: 'Lead generation via Meta & Google' },
            { text: 'Findability (SEO + Google Business)' },
            { text: 'Reactivation + follow-up via CRM and flows' }
          ]
        },
        {
          title: 'Results & Optimization',
          subtitle: 'Measurable results and growth',
          icon: 'LineChart',
          bullets: [
            { text: 'Real time tracking' },
            { text: 'Continuous optimization' }
          ]
        }
      ]
    },
    {
      blockType: 'finalCTA',
      title: 'Ready to grow?',
      subtitle: 'Schedule an introductory meeting and discover what we can do for you',
      ctaLabel: 'Schedule a coffee',
      ctaHref: 'mailto:info@realaccelerate.nl',
      bullets: [
        { text: 'Analysis of current situation and growth goals' },
        { text: 'Identification of bottlenecks holding you back' },
        { text: 'Concrete plan to achieve objectives' }
      ]
    }
  ]
}

async function migrate() {
  console.log('🚀 Starting English homepage migration...\n')
  
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
    
    // Find the homepage
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/',
        },
      },
      locale: 'nl', // Find in Dutch first
    })
    
    if (existing.docs.length === 0) {
      console.error('❌ Homepage not found in database. Please run migrate-homepage.ts first.')
      process.exit(1)
    }
    
    const homepageId = existing.docs[0].id
    console.log(`📝 Found homepage with ID: ${homepageId}`)
    console.log('📝 Adding English translations...\n')
    
    // Update with English locale
    await payload.update({
      collection: 'pages',
      id: homepageId,
      data: {
        title: 'Homepage',
        blocks: homePageDataEN.blocks as any,
        seo: {
          metaTitle: homePageDataEN.metadata.metaTitle,
          metaDescription: homePageDataEN.metadata.metaDescription,
        },
      },
      locale: 'en',
    })
    
    console.log('✅ English translations added!\n')
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Total blocks (EN): ${homePageDataEN.blocks.length}`)
    console.log(`   - Slug: /`)
    console.log(`   - Locale: en`)
    console.log('\n👉 Visit http://localhost:3001/en to view the English homepage')
    console.log('👉 Visit http://localhost:3001/admin/collections/pages to edit in Payload CMS\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
