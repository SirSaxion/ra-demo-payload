/**
 * Translate Homepage to English - Full Content
 * Run with: npx tsx scripts/translate-homepage-en.mjs
 */

import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

async function translateHomepage() {
  const payload = await getPayload({ config })
  
  console.log('🌍 Translating Homepage to English (full content)...\n')

  try {
    const homePage = await payload.find({
      collection: 'pages',
      where: { slug: { equals: '/' } },
      locale: 'nl',
      limit: 1,
    })

    if (homePage.docs.length === 0) {
      console.log('❌ Homepage not found')
      process.exit(1)
    }

    const homeId = homePage.docs[0].id

    const homeDataEN = {
      title: 'Homepage | Real Accelerate',
      blocks: [
        {
          blockType: 'heroSection',
          kicker: 'For ambitious real estate professionals',
          title: 'By real estate experts, for real estate experts',
          subtitle: 'Drawing from our own experience, we help your business grow and sell projects faster with smart online marketing.',
          ctaPrimary: {
            label: 'Schedule a coffee ☕',
            href: 'mailto:info@realaccelerate.nl'
          },
          ctaSecondary: {
            label: 'View cases',
            href: '/cases'
          }
        },
        {
          blockType: 'trustStrip',
          items: [
            { text: 'IQI Global partner' },
            { text: 'Recreation' },
            { text: '30+ years marketing experience combined' },
            { text: 'Active worldwide' },
            { text: 'New construction' },
            { text: 'Projects' },
            { text: '40+ years real estate experience combined' },
            { text: 'Real estate agent' },
            { text: 'Active in the real estate market ourselves' },
            { text: 'Worldwide network' }
          ],
          ariaLabel: 'Trust and experience'
        },
        {
          blockType: 'problemSection',
          kicker: 'The problem we see',
          title: '95% of real estate entrepreneurs remain dependent on external leads after 10+ years',
          description: 'This is what we see with many real estate professionals. We share this to provide insight—so you can determine what works for you.',
          oldSituationTitle: 'OLD SITUATION',
          oldSituationItems: [
            {
              icon: 'XCircle',
              text: 'Not keeping up with technology'
            },
            {
              icon: 'ThumbsDown',
              text: 'Not distinctive'
            },
            {
              icon: 'Activity',
              text: 'No stability'
            },
            {
              icon: 'Frown',
              text: 'Lived by your agenda'
            }
          ],
          newSituationTitle: 'OUR METHOD',
          newSituationItems: [
            {
              icon: 'CheckCircle2',
              text: 'Automated systems'
            },
            {
              icon: 'Crown',
              text: 'Distinctive appearance and service'
            },
            {
              icon: 'Banknote',
              text: 'Stable income'
            },
            {
              icon: 'TrendingUp',
              text: 'Focus on what you do best'
            }
          ]
        },
        {
          blockType: 'caseStudy',
          title: 'Case: De Brabant Makelaar',
          kicker: 'CASE STUDY',
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
          blockType: 'marketingMachine',
          title: 'The Marketing Machine',
          subtitle: 'A complete system that works 24/7 for you',
          features: [
            {
              icon: 'Globe',
              name: 'Websites',
              description: 'Professional websites that convert. SEO, responsive, and lead-capture built in.',
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
              name: 'Findability',
              description: 'SEO optimization, Google Business and content that gets you found.',
              href: '/cases',
              cta: 'Our approach',
              imageSrc: '/images/42.EmiroSmolders-Settle-DSC07252--compressed.webp'
            },
            {
              icon: 'Repeat',
              name: 'Reactivation',
              description: 'Email and SMS flows that wake up dormant leads with relevant triggers.',
              href: '/cases',
              cta: 'Example flows',
              imageSrc: '/images/rudybrief.webp'
            },
            {
              icon: 'PhoneCall',
              name: 'Lead follow-up',
              description: 'CRM, automatic follow-ups and appointment setting. No more lost leads.',
              href: '/cases',
              cta: 'See system',
              imageSrc: '/images/joeptelefoon.webp'
            },
            {
              icon: 'Palette',
              name: 'Branding',
              description: 'Strong brand identity: logo, house style and content strategy that builds trust.',
              href: '/cases',
              cta: 'View work',
              imageSrc: '/images/47.EmiroSmolders-Settle-DSC07264--compressed.webp'
            }
          ]
        },
        {
          blockType: 'targetGroupsOverview',
          title: 'Who is this for?',
          subtitle: 'Specialized solutions per target group'
        },
        {
          blockType: 'targetGroupsOverviewPhotos',
          title: 'Who we work for',
          subtitle: 'Specialized solutions for every real estate professional',
          items: [
            {
              name: 'Real Estate Agents',
              description: 'Sustainable client relationships instead of lead hunting',
              img: '/images/remax.jpg',
              alt: 'Re/max real estate agents',
              href: '/makelaars'
            },
            {
              name: 'Project Developers',
              description: 'Project marketing & events',
              img: '/images/recreatie.jpg',
              alt: 'Recreation project development',
              href: '/projectontwikkelaars'
            },
            {
              name: 'Mortgage Advisors',
              description: 'Become independent of quote sites',
              img: '/images/hypotheekvisie.jpg',
              alt: 'Hypotheekvisie office',
              href: '/hypotheekadviseurs'
            },
            {
              name: 'International',
              description: 'IQI Global Partnership • Experience in Dubai, Spain, Bali',
              img: '/images/secondhomebeurs.jpg',
              alt: 'Second Home Fair',
              href: '/makelaars-buitenland'
            }
          ]
        },
        {
          blockType: 'numbersSection',
          title: 'Results in numbers',
          stats: [
            {
              value: '50+',
              label: 'Satisfied clients'
            },
            {
              value: '200+',
              label: 'Projects completed'
            },
            {
              value: '95%',
              label: 'Customer satisfaction'
            }
          ]
        },
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
                { text: 'Calendar filled' }
              ],
              author: {
                name: 'Amory',
                handle: 'De Brabant Makelaar',
                avatar: '/images/brabantmakelaar_avatar.webp'
              },
              text: 'The dynamic gentlemen of Real Accelerate are very pleasant to work with. Proactive and deliver lots of results. Highly recommended for anyone who wants to get more out of online marketing!',
              href: '/cases'
            },
            {
              title: 'Bink & Partners',
              imageSrc: '/images/binkpartners_logo.webp',
              badges: [
                { text: 'Leads above expectation' },
                { text: 'Website compliments' }
              ],
              author: {
                name: 'Pieter',
                handle: 'Bink & Partners',
                avatar: '/images/binkpartners_avatar.webp'
              },
              text: 'Real Accelerate is an enthusiastic group. My new website generates many compliments. The follow-up process to generate leads on social media has just started and is going well.',
              href: '/cases'
            }
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
              answer: 'We ensure a quick implementation of your marketing machine. After our strategy session, we start directly with the setup of your campaigns. You usually see the first results within a few weeks, depending on your market and target group.'
            },
            {
              icon: 'CreditCard',
              question: 'How does the collaboration work and what can I expect?',
              answer: 'We work transparently and results-oriented. We align our rates with your specific goals and situation. We focus on measurable growth and always keep you informed of progress. Contact us for a personal conversation about the possibilities.'
            },
            {
              icon: 'Home',
              question: 'For which real estate professionals is your approach suitable?',
              answer: 'Our marketing approach works for all real estate professionals: acquisition agents, sales agents, mortgage advisors and project developers. Whether you are just starting or have years of experience, we adapt our strategy to your specific situation and target group.'
            },
            {
              icon: 'Users',
              question: 'How do you ensure focus on my region?',
              answer: 'We work with a selective approach per region to achieve optimal results. This means we carefully look at the market dynamics in your area and tailor our strategy accordingly. This way we can fully focus on your success in your work area.'
            },
            {
              icon: 'Target',
              question: 'How do you ensure quality leads and appointments?',
              answer: 'We focus on attracting quality prospects that match your ideal customer profile. Through smart targeting and proven strategies, we ensure a constant flow of interested potential customers. Quality always comes first.'
            },
            {
              icon: 'TrendingUp',
              question: 'What makes your approach unique in the real estate market?',
              answer: 'We are actively involved in the real estate market ourselves and understand the challenges of agents. Our marketing machine combines proven strategies with the latest techniques. As IQI Global Partner, we have access to international expertise and networks.'
            }
          ]
        },
        {
          blockType: 'howItWorksSection',
          title: 'How does it work?',
          subtitle: 'From introduction to results in 4 steps',
          steps: [
            {
              number: 1,
              title: 'Strategic Analysis',
              subtitle: 'Current situation & goals mapped out',
              icon: 'Lightbulb',
              bullets: [
                { text: 'Target group & regions' },
                { text: 'Current website, campaigns and CRM mapped' },
                { text: 'Bottlenecks that slow down growth' },
                { text: 'Goals aligned with your situation' }
              ]
            },
            {
              number: 2,
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
              number: 3,
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
      ],
      seo: {
        metaTitle: 'Real Accelerate | Online marketing for real estate professionals | By experts, for experts',
        metaDescription: 'Grow your real estate business with proven online marketing strategies. From 2 to 8 employees in 18 months. Real estate agent marketing, lead generation and automation by real estate experts.'
      }
    }

    console.log('Translating all 14 blocks to English...')
    
    await payload.update({
      collection: 'pages',
      id: homeId,
      locale: 'en',
      data: homeDataEN
    })
    
    console.log('\n✅ Homepage fully translated to English!')
    console.log(`📊 ${homeDataEN.blocks.length} blocks translated\n`)
    console.log('👉 Visit http://localhost:3000/en/ to check\n')
    console.log('Next: Run "npx tsx scripts/translate-cases-en.mjs"\n')

  } catch (error) {
    console.error('❌ Error:', error.message)
    if (error.data) {
      console.error('Validation errors:', JSON.stringify(error.data.errors, null, 2))
    }
    process.exit(1)
  }

  process.exit(0)
}

translateHomepage()
