/**
 * Update English Homepage Texts Script
 * Updates English homepage content in Payload CMS with new text versions
 * 
 * Run with: pnpm tsx scripts/update-homepage-texts-en.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

// Load environment variables
dotenv.config({ path: '.env' })

// Updated English homepage data with new texts
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
      }
      // ctaSecondary removed
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
      blockType: 'caseStudy',
      kicker: 'CASE STUDY',
      title: 'Case: De Brabant Makelaar',
      subtitle: 'From 2 to 8 employees in 18 months',
      tone: 'light',
      frameless: true,
      showBackdropLogo: false,
      imageSrc: '/images/case-de-brabant-makelaar.webp',
      imageAlt: 'Team De Brabant Makelaar',
      kpis: [
        {
          label: 'Monthly revenue',
          from: 20000,
          to: 65000,
          unit: 'eur' as const,
          sublabel: 'in 18 mo',
          span: 2
        },
        {
          label: 'Trajectories per month',
          from: 5,
          to: 12,
          unit: 'number' as const
        }
      ],
      bullets: [
        { text: 'Proven marketing machine set up' },
        { text: '5 buyer agents active' },
        { text: 'Agendas filled with quality appointments' }
      ],
      ctaPrimary: {
        label: 'View full case',
        href: '/en/cases'
      },
      ctaSecondary: {
        label: 'All cases',
        href: '/en/cases'
      }
    },
    {
      blockType: 'uniqueApproach',
      kicker: 'Our unique approach',
      title: 'We are not a standard marketing agency. We are real estate entrepreneurs and marketing experts',
      subtitle: 'Complete marketing approach, measurable growth, and room to operate.',
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
      kicker: 'WHAT WE DO FOR YOU',
      title: 'Complete marketing machine for real estate professionals',
      subtitle: 'From first impression to deal: websites, lead generation, findability, and follow-up in one system.',
      features: [
        {
          icon: 'Globe',
          name: 'Websites',
          description: 'Professional websites that convert. SEO, responsive, and lead-capture built-in.',
          href: '/en/cases',
          cta: 'View examples',
          imageSrc: '/images/32.EmiroSmolders-Settle-DSC07215--compressed.webp'
        },
        {
          icon: 'Target',
          name: 'Lead generation',
          description: 'Quality leads via Meta & Google. Smart targeting for maximum results.',
          href: '/en/cases',
          cta: 'How it works',
          imageSrc: '/images/leadgen.webp'
        },
        {
          icon: 'GaugeCircle',
          name: 'Findability',
          description: 'SEO optimization, Google Business, and content that gets you found.',
          href: '/en/cases',
          cta: 'Our approach',
          imageSrc: '/images/42.EmiroSmolders-Settle-DSC07252--compressed.webp'
        },
        {
          icon: 'Repeat',
          name: 'Reactivation',
          description: 'Email and SMS flows that wake up sleeping leads with relevant triggers.',
          href: '/en/cases',
          cta: 'Example flows',
          imageSrc: '/images/rudybrief.webp'
        },
        {
          icon: 'PhoneCall',
          name: 'Lead follow-up',
          description: 'CRM, automatic follow-ups and appointment setting. No lead lost.',
          href: '/en/cases',
          cta: 'See system',
          imageSrc: '/images/joeptelefoon.webp'
        },
        {
          icon: 'Palette',
          name: 'Branding',
          description: 'Strong brand identity: logo, house style and content strategy that builds trust.',
          href: '/en/cases',
          cta: 'View work',
          imageSrc: '/images/47.EmiroSmolders-Settle-DSC07264--compressed.webp'
        }
      ]
    },
    {
      blockType: 'targetGroupsOverview',
      kicker: 'TARGET GROUPS',
      title: 'Who we work for',
      subtitle: 'Specialized solutions for every real estate professional'
    },
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
          href: '/en/real-estate-agents',
          key: 'makelaars'
        },
        {
          name: 'Project developers',
          description: 'Project marketing & events',
          img: '/images/recreatie.jpg',
          alt: 'Recreation project development',
          href: '/en/project-developers',
          key: 'projectontwikkelaars'
        },
        {
          name: 'Mortgage advisors',
          description: 'Become independent from quote sites',
          img: '/images/hypotheekvisie.jpg',
          alt: 'Hypotheekvisie office',
          href: '/en/mortgage-advisors',
          key: 'hypotheek'
        },
        {
          name: 'International',
          description: 'IQI Global Partnership • Dubai, Spain, Bali experience',
          img: '/images/secondhomebeurs.jpg',
          alt: 'Second Home Fair',
          href: '/en/international-real-estate',
          key: 'buitenland'
        }
      ]
    },
    {
      blockType: 'numbersSection',
      kicker: 'WHAT WE\'RE PROUD OF',
      title: 'Results in numbers',
      stats: [
        { value: '30+', label: 'years team marketing experience' },
        { value: '40+', label: 'years team real estate experience' },
        { value: '600k+', label: 'ad spend' },
        { value: '1375', label: 'cups of coffee' }
      ]
    },
    {
      blockType: 'testimonialsSection',
      kicker: 'MORE SUCCESS STORIES',
      title: 'Featured success stories',
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
          text: 'The dynamic guys at Real Accelerate are very pleasant to work with. Proactive and deliver many results. Recommended for anyone who wants to get more out of online marketing!',
          href: '/en/cases'
        },
        {
          title: 'Bink & Partners',
          imageSrc: '/images/binkpartners_logo.webp',
          badges: [
            { text: 'Leads above expectations' },
            { text: 'Website compliments' }
          ],
          author: {
            name: 'Pieter',
            handle: 'Bink & Partners',
            avatar: '/images/binkpartners_avatar.webp'
          },
          text: 'Real Accelerate is an enthusiastic group. My new website receives many compliments. The follow-up trajectory to generate leads on socials has just started and is going well.',
          href: '/en/cases'
        },
        {
          title: 'Paul Thijssen Real Estate',
          imageSrc: '/images/paulthijssen_logo.webp',
          badges: [
            { text: 'Phenomenal support' },
            { text: 'Highly recommended' }
          ],
          author: {
            name: 'Paul Thijssen',
            handle: 'Paul Thijssen Makelaardij',
            avatar: '/images/paulthijssen_avatar.webp'
          },
          text: 'Real Accelerate supports us in various areas when it comes to online marketing and they do it phenomenally! A young team of people who are all enthusiastic, listen very well to your wishes as a customer, make clear agreements and are connected with the market and what buyers want to see these days. We are very satisfied with the services!',
          href: '/en/cases'
        },
        {
          title: 'Thoma Post',
          imageSrc: '/images/thomapost_logo.webp',
          badges: [
            { text: 'Agenda more filled' },
            { text: 'Significantly improved' }
          ],
          author: {
            name: 'Marlies Post',
            handle: 'Thoma Post Makelaars Amsterdam',
            avatar: '/images/thomapost_avatar.webp'
          },
          text: 'I would definitely recommend Real Accelerate! They look very carefully at who the customer is and how they can best facilitate them. Since we have been working together, the number of appointments and requests has improved significantly. If you are a real estate agent who wants to have his agenda filled more, I would advise Real Accelerate.',
          href: '/en/cases'
        }
      ]
    },
    {
      blockType: 'faqSection',
      kicker: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Frequently Asked Questions',
      subtitle: 'Do you have other questions? Contact our support team or schedule a free strategy session.',
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
      kicker: 'HOW IT WORKS',
      title: 'From intake to predictable growth',
      subtitle: 'Three clear steps. Exactly what you can expect from us.',
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
      title: 'Let\'s take your business to the next level together',
      subtitle: 'Analysis of current situation and growth goals',
      ctaLabel: 'Contact us',
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
  console.log('🚀 Starting English homepage text updates...\n')
  
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
    
    // Check if homepage exists
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/',
        },
      },
      locale: 'en',
    })
    
    if (existing.docs.length === 0) {
      console.error('❌ English homepage not found in database. Please run migrate-homepage-en.ts first.')
      process.exit(1)
    }
    
    const pageData = {
      title: 'Homepage',
      slug: '/',
      status: 'published' as const,
      blocks: homePageDataEN.blocks as any, // Cast to any to avoid complex type checking in migration script
      seo: {
        metaTitle: homePageDataEN.metadata.metaTitle,
        metaDescription: homePageDataEN.metadata.metaDescription,
      },
    }
    
    console.log('📝 Updating English homepage with new texts...')
    await payload.update({
      collection: 'pages',
      id: existing.docs[0].id,
      data: pageData as any, // Cast to any for migration script
      locale: 'en',
    })
    console.log('✅ English homepage updated with new texts!\n')
    
    console.log('🎉 Update completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Total blocks: ${homePageDataEN.blocks.length}`)
    console.log(`   - Updated sections:`)
    console.log(`     • Hero (removed secondary CTA)`)
    console.log(`     • Unique Approach (new texts)`)
    console.log(`     • Marketing Machine (added kicker)`)
    console.log(`     • Target Groups (updated texts)`)
    console.log(`     • Numbers (completely new stats)`)
    console.log(`     • Testimonials (added kicker)`)
    console.log(`     • FAQ (swapped title/kicker)`)
    console.log(`     • How It Works (new texts)`)
    console.log(`     • Final CTA (new texts)`)
    console.log('\n👉 Visit http://localhost:3001/en to view changes\n')
    console.log('👉 Or visit http://localhost:3001/admin/collections/pages to edit in Payload CMS\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Update failed:', error)
    process.exit(1)
  }
}

migrate()
