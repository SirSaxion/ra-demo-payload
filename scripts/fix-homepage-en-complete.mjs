/**
 * Fix English Homepage - Complete Data Migration
 * Updates English homepage with all missing content
 */

import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

async function fixHomepage() {
  console.log('🔧 Fixing English homepage with complete data...\n')
  
  try {
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Find the homepage
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/',
        },
      },
      locale: 'en',
    })
    
    if (pages.docs.length === 0) {
      console.log('❌ No English homepage found')
      process.exit(1)
    }
    
    const homepage = pages.docs[0]
    console.log(`📄 Found English homepage (ID: ${homepage.id})\n`)
    
    // Update the homepage with complete English data
    const updatedPage = await payload.update({
      collection: 'pages',
      id: homepage.id,
      locale: 'en',
      data: {
        title: 'Homepage | Real Accelerate',
        slug: '/',
        _status: 'published',
        seo: {
          metaTitle: 'Real Accelerate | Online marketing for real estate professionals | By experts, for experts',
          metaDescription: 'Grow your real estate business with proven online marketing strategies. From 2 to 8 employees in 18 months. Real estate broker marketing, lead generation and automation by real estate experts.',
        },
        blocks: [
          // 1. Hero Section
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
              href: '/cases'
            }
          },
          
          // 2. Trust Strip
          {
            blockType: 'trustStrip',
            ariaLabel: 'Trust and experience',
            items: [
              { text: 'IQI Global partner' },
              { text: 'Recreation' },
              { text: 'Together 30+ years marketing experience' },
              { text: 'Active worldwide' },
              { text: 'New construction' },
              { text: 'Projects' },
              { text: 'Together 40+ years real estate experience' },
              { text: 'Real estate broker' },
              { text: 'Active in the real estate market ourselves' },
              { text: 'Worldwide network' }
            ]
          },
          
          // 3. Problem Section (COMPLETE with subtitle and items)
          {
            blockType: 'problemSection',
            kicker: 'The problem we see',
            title: '95% of real estate entrepreneurs remain dependent on external leads after 10+ years',
            subtitle: 'This is what we see with many real estate professionals. We share it to provide insight—so you can decide what works for you.',
            oldSituation: {
              title: 'OLD SITUATION',
              items: [
                { icon: 'XCircle', text: 'Not keeping up with technology' },
                { icon: 'ThumbsDown', text: 'Not distinctive' },
                { icon: 'Activity', text: 'No stability' },
                { icon: 'Frown', text: 'Controlled by your agenda' }
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
          
          // 4. Case Study (COMPLETE with imageSrc)
          {
            blockType: 'caseStudy',
            kicker: 'CASE STUDY',
            title: 'Case: De Brabant Makelaar',
            subtitle: 'From 2 to 8 employees in 18 months',
            tone: 'light',
            frameless: true,
            showBackdropLogo: false,
            imageSrc: '/images/case-de-brabant-makelaar.webp',
            imageAlt: 'De Brabant Makelaar team',
            kpis: [
              {
                label: 'Monthly revenue',
                from: 20000,
                to: 65000,
                unit: 'eur',
                sublabel: 'in 18 months',
                span: 2
              },
              {
                label: 'Transactions per month',
                from: 5,
                to: 12
              }
            ],
            bullets: [
              { text: 'Proven marketing machine implemented' },
              { text: '5 acquisition agents active' },
              { text: 'Calendars filled with quality appointments' }
            ],
            ctaPrimary: {
              label: 'View full case',
              href: '/cases'
            },
            ctaSecondary: {
              label: 'All cases',
              href: '/cases'
            }
          },
          
          // 5. Unique Approach
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
          
          // 6. Flow Connector
          {
            blockType: 'flowConnector'
          },
          
          // 7. Marketing Machine (COMPLETE with imageSrc)
          {
            blockType: 'marketingMachine',
            title: 'The Marketing Machine',
            subtitle: 'A complete system that works 24/7 for you',
            features: [
              {
                icon: 'Globe',
                name: 'Websites',
                description: 'Professional websites that convert. SEO, responsive, and lead-capture built-in.',
                href: '/cases',
                cta: 'View examples',
                imageSrc: '/images/32.EmiroSmolders-Settle-DSC07215--compressed.webp'
              },
              {
                icon: 'Target',
                name: 'Lead generation',
                description: 'Quality leads via Meta & Google. Smart targeting for maximum results.',
                href: '/cases',
                cta: 'How it works',
                imageSrc: '/images/leadgen.webp'
              },
              {
                icon: 'GaugeCircle',
                name: 'Visibility',
                description: 'SEO optimization, Google Business and content that gets you found.',
                href: '/cases',
                cta: 'Our approach',
                imageSrc: '/images/42.EmiroSmolders-Settle-DSC07252--compressed.webp'
              },
              {
                icon: 'Repeat',
                name: 'Reactivation',
                description: 'Email and SMS flows that wake up sleeping leads with relevant triggers.',
                href: '/cases',
                cta: 'Example flows',
                imageSrc: '/images/rudybrief.webp'
              },
              {
                icon: 'PhoneCall',
                name: 'Lead follow-up',
                description: 'CRM, automatic follow-ups and appointment setting. No lead lost.',
                href: '/cases',
                cta: 'View system',
                imageSrc: '/images/joeptelefoon.webp'
              },
              {
                icon: 'Palette',
                name: 'Branding',
                description: 'Strong brand identity: logo, corporate identity and content strategy that builds trust.',
                href: '/cases',
                cta: 'View work',
                imageSrc: '/images/47.EmiroSmolders-Settle-DSC07264--compressed.webp'
              }
            ]
          },
          
          // 8. Target Groups Overview
          {
            blockType: 'targetGroupsOverview',
            title: 'Who is this for?',
            subtitle: 'Specialized solutions per target group'
          },
          
          // 9. Target Groups Photos (COMPLETE with img)
          {
            blockType: 'targetGroupsOverviewPhotos',
            title: 'Who we work for',
            subtitle: 'Specialized solutions for every real estate professional',
            items: [
              {
                name: 'Real estate agents',
                description: 'Sustainable client relationships instead of lead hunting',
                img: '/images/remax.jpg',
                alt: 'Re/max real estate agents',
                href: '/makelaars',
                key: 'makelaars'
              },
              {
                name: 'Property developers',
                description: 'Project marketing & events',
                img: '/images/recreatie.jpg',
                alt: 'Recreation property development',
                href: '/projectontwikkelaars',
                key: 'projectontwikkelaars'
              },
              {
                name: 'Mortgage advisors',
                description: 'Become independent from quote sites',
                img: '/images/hypotheekvisie.jpg',
                alt: 'Hypotheekvisie office',
                href: '/hypotheekadviseurs',
                key: 'hypotheek'
              },
              {
                name: 'International',
                description: 'IQI Global Partnership • Dubai, Spain, Bali experience',
                img: '/images/secondhomebeurs.jpg',
                alt: 'Second Home Fair',
                href: '/makelaars-buitenland',
                key: 'buitenland'
              }
            ]
          },
          
          // 10. Numbers Section
          {
            blockType: 'numbersSection',
            title: 'Results in numbers',
            stats: [
              { value: '50+', label: 'Satisfied clients' },
              { value: '200+', label: 'Projects completed' },
              { value: '95%', label: 'Client satisfaction' }
            ]
          },
          
          // 11. Testimonials
          {
            blockType: 'testimonialsSection',
            title: 'Featured success stories',
            description: 'MORE SUCCESS STORIES',
            durationSec: 70,
            testimonials: [
              {
                title: 'De Brabant Makelaar',
                imageSrc: '/images/brabantmakelaar_logo.webp',
                badges: [
                  { text: '8 agents active' },
                  { text: 'Agenda filled' }
                ],
                author: {
                  name: 'Amory',
                  handle: 'De Brabant Makelaar',
                  avatar: '/images/brabantmakelaar_avatar.webp'
                },
                text: 'The dynamic guys from Real Accelerate are very pleasant to work with. Proactive and ensure many results. Recommended for anyone who wants to get more out of online marketing!',
                href: '/cases'
              },
              {
                title: 'Bink & Partners',
                imageSrc: '/images/binkpartners_logo.webp',
                badges: [
                  { text: 'Leads exceed expectations' },
                  { text: 'Website compliments' }
                ],
                author: {
                  name: 'Pieter',
                  handle: 'Bink & Partners',
                  avatar: '/images/binkpartners_avatar.webp'
                },
                text: 'Real Accelerate is an enthusiastic group. My new website receives many compliments. The follow-up trajectory to generate leads on social media has just started and is going well.',
                href: '/cases'
              }
            ]
          },
          
          // 12. FAQ
          {
            blockType: 'faqSection',
            title: 'Frequently asked questions',
            subtitle: 'Everything you need to know',
            items: [
              {
                icon: 'Clock',
                question: 'How quickly can I get started with your marketing approach?',
                answer: 'We ensure a quick implementation of your marketing machine. After our strategy session, we start directly with setting up your campaigns. You usually see the first results within a few weeks, depending on your market and target group.'
              },
              {
                icon: 'CreditCard',
                question: 'How does the collaboration work and what can I expect?',
                answer: 'We work transparently and results-oriented. We align our rates with your specific goals and situation. We focus on measurable growth and always keep you informed of progress. Contact us for a personal conversation about the possibilities.'
              },
              {
                icon: 'Home',
                question: 'For which real estate professionals is your approach suitable?',
                answer: 'Our marketing approach works for all real estate professionals: acquisition agents, sales agents, mortgage advisors and property developers. Whether you are just starting or have years of experience, we adapt our strategy to your specific situation and target group.'
              },
              {
                icon: 'Users',
                question: 'How do you ensure focus on my region?',
                answer: 'We work with a selective approach per region to achieve optimal results. This means we carefully look at the market dynamics in your area and adjust our strategy accordingly. This way we can fully focus on your success in your working area.'
              },
              {
                icon: 'Target',
                question: 'How do you ensure quality leads and appointments?',
                answer: 'We focus on attracting quality prospects that match your ideal customer profile. Through smart targeting and proven strategies, we ensure a constant stream of interested potential clients. Quality always comes first.'
              },
              {
                icon: 'TrendingUp',
                question: 'What makes your approach unique in the real estate market?',
                answer: 'We are active in the real estate market ourselves and understand the challenges of agents. Our marketing machine combines proven strategies with the latest techniques. As an IQI Global Partner, we have access to international expertise and networks.'
              }
            ]
          },
          
          // 13. How It Works
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
                  { text: 'Target group & regions' },
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
                  { text: 'Visibility (SEO + Google Business)' },
                  { text: 'Reactivation + follow-up via CRM and flows' }
                ]
              },
              {
                title: 'Results & Optimization',
                subtitle: 'Measurable results and growth',
                icon: 'LineChart',
                bullets: [
                  { text: 'Real-time tracking' },
                  { text: 'Continuous optimization' }
                ]
              }
            ]
          },
          
          // 14. Final CTA
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
    })
    
    console.log('\n✅ English homepage successfully updated!')
    console.log(`   - Title: ${updatedPage.title}`)
    console.log(`   - Status: ${updatedPage._status}`)
    console.log(`   - Blocks: ${updatedPage.blocks?.length || 0}`)
    console.log('\n🎉 English homepage is now complete with all data!\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Fix failed:', error)
    if (error.data) {
      console.error('Error details:', JSON.stringify(error.data, null, 2))
    }
    process.exit(1)
  }
}

fixHomepage()
