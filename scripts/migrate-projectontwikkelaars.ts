import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const PAGE_SLUG = '/projectontwikkelaars'

const pageData = {
  nl: {
    title: 'Projectontwikkelaars',
    seo: {
      metaTitle: 'Marketing voor projectontwikkelaars | Real Accelerate',
      metaDescription: 'Marketing voor projectontwikkelaars. Vul je nieuwbouwprojecten sneller met gerichte marketing.',
    },
    blocks: [
      // 1. Hero
      {
        blockType: 'projectontwikkelaarsHero',
        badge: 'Voor projectontwikkelaars',
        title: 'Projecten sneller verkocht',
        titleHighlight: 'met een slimme aanpak',
        subtitle: 'Als projectontwikkelaar wil je dat je nieuwbouwprojecten efficiënt en succesvol verkocht worden. Met Real Accelerate brengen we jouw projecten sneller en creatiever onder de aandacht – met marketing, beleving en opvolging die geen kans onbenut laat.',
        bullets: [
          { text: 'Snellere verkoop door gerichte campagnes en sterke positionering' },
          { text: 'Creatieve beleving die projecten onderscheidend maakt' },
          { text: 'Slimme opvolging met automatisering en persoonlijke begeleiding' }
        ],
        ctaPrimary: { label: 'Plan een project strategiesessie' },
        ctaSecondary: { label: 'Ontdek onze aanpak', href: '#onze-aanpak' },
        showcaseImage: '/images/projectontwikkelaar.webp',
        showcaseImageAlt: 'Dubai-property.nl - Bewezen projectmarketing expertise',
        showcaseIcon: 'Building2',
        showcaseTitle: 'Dubai-property.nl Success',
        showcaseSubtitle: 'Dubai • Event Marketing Expertise',
        showcaseStats: [
          { icon: 'Calendar', text: '15+ evenementen door heel Nederland' },
          { icon: 'TrendingUp', text: 'Nieuwe projecten in weken uitverkocht' },
          { icon: 'Award', text: '€8.5M+ verkocht via onze events' }
        ],
        floatingStat: { value: '3 weken', label: 'Gemiddelde uitverkoop' },
        showcaseNote: 'Bewezen aanpak uit de praktijk van vastgoedondernemers'
      },
      // 2. Trust Strip
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
      // 3. Pain Points
      {
        blockType: 'projectontwikkelaarsPainPointsSection',
        badge: 'Projectontwikkelaar uitdagingen',
        title: 'Herken je deze frustraties bij projectverkoop?',
        subtitle: 'Veel projectontwikkelaars lopen tegen dezelfde uitdagingen aan. Herkenbaar? Dan is er een betere manier.',
        ctaIcon: 'Building2',
        ctaTitle: 'Wij hebben de oplossing!',
        ctaDescription: 'Met onze ervaring als vastgoedondernemers combineren we marketing, beleving en slimme opvolging.'
      },
      // 4. Methodology
      {
        blockType: 'projectontwikkelaarsMethodologySection',
        badge: 'Onze project methodologie',
        title: 'Zo zorgen wij voor succesvolle projectverkoop',
        subtitle: 'Onze aanpak is geen losse marketingactie, maar een complete verkoopmachine'
      },
      // 5. Bewezen Aanpak
      {
        blockType: 'projectontwikkelaarsBewezenAanpakSection',
        badge: 'Onze ervaring',
        title: 'Ervaring als vastgoedondernemers en investeerders',
        subtitle: 'Wij zijn geen traditioneel marketingbureau. Als vastgoedondernemers en vastgoedinvesteerders begrijpen we de uitdagingen van binnenuit. Wat we voor onze klanten doen, hebben we zelf getest, verfijnd en bewezen in de praktijk.'
      },
      // 6. Resultaten Bento Grid
      {
        blockType: 'projectontwikkelaarsResultatenBentoGrid',
        badge: 'Project resultaten bento grid',
        title: 'Resultaten uit de praktijk',
        subtitle: 'Met onze bewezen aanpak zien projectontwikkelaars dat hun projecten sneller verkopen en beter in de markt worden gezet'
      },
      // 7. Dubai Success Story (Waarom Wij)
      {
        blockType: 'projectontwikkelaarsDubaiSuccessStorySection',
        badge: 'Waarom wij',
        title: 'Waarom onze aanpak werkt',
        subtitle: 'Bij Real Accelerate combineren we onze ervaring als vastgoedondernemers en vastgoedinvesteerders met slimme marketing, creatieve campagnes en moderne opvolgsystemen.'
      },
      // 8. Wat Je Krijgt
      {
        blockType: 'projectontwikkelaarsWatJeKrijgtSection',
        badge: 'Jouw complete pakket',
        title: 'Van uitverkocht project naar volgende deal',
        subtitle: 'Alles onder één dak: events, marketing, leads en support om jouw projecten razendsnel te verkopen.'
      },
      // 9. Voor Wie Is Dit
      {
        blockType: 'projectontwikkelaarsVoorWieIsDitSection',
        badge: 'Voor wie is dit?',
        title: 'Perfect voor projectontwikkelaars die',
        subtitle: 'Onze aanpak werkt het beste voor ambitieuze ontwikkelaars die klaar zijn voor snelle verkoop'
      },
      // 10. Strategie Session CTA
      {
        blockType: 'projectontwikkelaarsStrategieSessionCTA',
        title: 'Klaar voor een',
        titleHighlight: 'project strategiesessie',
        subtitle: 'Benieuwd hoe jouw volgende project sneller en slimmer verkocht kan worden? Plan een vrijblijvende strategiesessie en krijg direct inzicht in jouw mogelijkheden.',
        ctaLabel: 'Claim je gratis project strategiesessie',
        ctaSubtext: 'Waarde €1000 • Volledig vrijblijvend • Beperkte plaatsen voor serieuze projectontwikkelaars'
      },
      // 11. FAQ
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
  },
  en: {
    title: 'Real estate developers',
    seo: {
      metaTitle: 'Marketing for real estate developers | Real Accelerate',
      metaDescription: 'Marketing for real estate developers. Fill your new construction projects faster with targeted marketing.',
    },
    blocks: [
      // 1. Hero
      {
        blockType: 'projectontwikkelaarsHero',
        badge: 'For real estate developers',
        title: 'Projects sold faster',
        titleHighlight: 'with a smart approach',
        subtitle: 'As a real estate developer, you want your new construction projects to be sold efficiently and successfully. With Real Accelerate, we bring your projects to market faster and more creatively – with marketing, experience, and follow-up that leaves no opportunity untapped.',
        bullets: [
          { text: 'Faster sales through targeted campaigns and strong positioning' },
          { text: 'Creative experiences that make projects stand out' },
          { text: 'Smart follow-up with automation and personal guidance' }
        ],
        ctaPrimary: { label: 'Schedule a project strategy session' },
        ctaSecondary: { label: 'Discover our approach', href: '#our-approach' },
        showcaseImage: '/images/projectontwikkelaar.webp',
        showcaseImageAlt: 'Dubai-property.nl - Proven project marketing expertise',
        showcaseIcon: 'Building2',
        showcaseTitle: 'Dubai-property.nl Success',
        showcaseSubtitle: 'Dubai • Event Marketing Expertise',
        showcaseStats: [
          { icon: 'Calendar', text: '15+ events throughout the Netherlands' },
          { icon: 'TrendingUp', text: 'New projects sold out in weeks' },
          { icon: 'Award', text: '€8.5M+ sold through our events' }
        ],
        floatingStat: { value: '3 weeks', label: 'Average sellout time' },
        showcaseNote: 'Proven approach from real estate entrepreneurs in practice'
      },
      // 2. Trust Strip
      {
        blockType: 'projectontwikkelaarsTrustStrip',
        trustItems: [
          { text: 'Experience as real estate entrepreneurs and investors' },
          { text: 'Creative campaigns that stand out' },
          { text: 'Smart follow-up with automation and personal touch' },
          { text: 'From long sales cycles to fast results' },
          { text: 'Complete marketing and experience expertise' },
          { text: 'Proven project sales strategies' },
          { text: 'Dutch and international project experience' },
          { text: 'Transparent reporting and continuous optimization' },
          { text: 'Control and predictability in the sales process' },
          { text: 'Partner who knows the real estate industry from within' }
        ]
      },
      // 3. Pain Points
      {
        blockType: 'projectontwikkelaarsPainPointsSection',
        badge: 'Real estate developer challenges',
        title: 'Do you recognize these frustrations in project sales?',
        subtitle: 'Many real estate developers face the same challenges. Sound familiar? There is a better way.',
        challenges: [
          {
            icon: 'Clock',
            title: 'Sales trajectories that take too much time',
            description: 'Your projects remain on the market unnecessarily long. Each month of delay costs thousands of euros and creates extra pressure.'
          },
          {
            icon: 'Users',
            title: 'Dependency on external parties',
            description: 'No control over the process. You are dependent on external parties without clear direction or predictability.'
          },
          {
            icon: 'DollarSign',
            title: 'Lack of creative campaigns',
            description: 'Standard marketing that does not stand out. Your project deserves campaigns that are truly distinctive and attract the right attention.'
          },
          {
            icon: 'Building2',
            title: 'Insufficient insight into the right target group',
            description: 'Difficult to find and reach the right buyers at the right time. Who buys your specific project?'
          },
          {
            icon: 'Users',
            title: 'Leads that are not optimally followed up',
            description: 'Interest comes in but leaks away. Lack of systematic follow-up causes potential buyers to be lost.'
          }
        ],
        ctaIcon: 'Building2',
        ctaTitle: 'We have the solution!',
        ctaDescription: 'With our experience as real estate entrepreneurs, we combine marketing, experience, and smart follow-up.'
      },
      // 4. Methodology
      {
        blockType: 'projectontwikkelaarsMethodologySection',
        badge: 'Our project methodology',
        title: 'How we ensure successful project sales',
        subtitle: 'Our approach is not a one-off marketing action, but a complete sales machine',
        steps: [
          {
            icon: 'Target',
            title: 'ANALYSIS & STRATEGY',
            description: 'We map out your project, target group, and market for a tailored approach'
          },
          {
            icon: 'Zap',
            title: 'CREATIVE MARKETING',
            description: 'Eye-catching online campaigns and content that appeals and converts'
          },
          {
            icon: 'CalendarCheck',
            title: 'EVENTS & EXPERIENCE',
            description: 'Offline moments where buyers truly experience and engage with your project'
          },
          {
            icon: 'Phone',
            title: 'SMART FOLLOW-UP',
            description: 'Automatic emails, personal follow-up and AI ensure no lead is lost'
          },
          {
            icon: 'Rocket',
            title: 'CONTINUOUS OPTIMIZATION',
            description: 'Measure, adjust and improve for maximum results and predictable growth'
          }
        ],
        bottomText: 'A complete sales machine that brings your projects to market faster and more effectively'
      },
      // 5. Bewezen Aanpak
      {
        blockType: 'projectontwikkelaarsBewezenAanpakSection',
        badge: 'Our experience',
        title: 'Experience as real estate entrepreneurs and investors',
        subtitle: 'We are not a traditional marketing agency. As real estate entrepreneurs and investors, we understand the challenges from within. What we do for our clients, we have tested, refined, and proven in practice ourselves.',
        image: '/images/emiro_working_at_desk.png',
        imageAlt: 'Project Marketing Machine',
        practiceTitle: 'OUR PRACTICAL EXPERIENCE',
        practicePoints: [
          { text: '<strong>Active as real estate entrepreneurs</strong> with hands-on experience in project marketing' },
          { text: '<strong>Creative campaigns and smart follow-up systems</strong> that truly convert' },
          { text: '<strong>Broad market knowledge</strong> from Dutch to international projects' },
          { text: '<strong>Modern marketing tools and automation</strong> combined with personal approach' },
          { text: '<strong>Results-driven with transparent reporting</strong> and continuous optimization' }
        ],
        missionStatement: 'What we do for our clients, we also do for ourselves. That\'s why we know it works.'
      },
      // 6. Dubai Success Story (Why Us)
      {
        blockType: 'projectontwikkelaarsDubaiSuccessStorySection',
        badge: 'Why us',
        title: 'Why our approach works',
        subtitle: 'At Real Accelerate, we combine our experience as real estate entrepreneurs and investors with smart marketing, creative campaigns, and modern follow-up systems.',
        benefits: [
          {
            icon: 'Zap',
            title: 'Faster sales',
            description: 'Through targeted campaigns and strong positioning, we bring your projects to market faster and more effectively.'
          },
          {
            icon: 'Target',
            title: 'Creative experience',
            description: 'Projects that stand out. With creative campaigns and unique experiences, we create impact that sticks.'
          },
          {
            icon: 'Users',
            title: 'Smart follow-up',
            description: 'With automatic emails, personal telephone follow-up and AI support, we ensure that no lead is lost.'
          },
          {
            icon: 'TrendingUp',
            title: 'Proven systems',
            description: 'Control and predictability. Our proven systems give you control over the sales process and ensure measurable results.'
          }
        ]
      },
      // 8. What You Get
      {
        blockType: 'projectontwikkelaarsWatJeKrijgtSection',
        badge: 'Your complete package',
        title: 'From sold-out project to next deal',
        subtitle: 'Everything under one roof: events, marketing, leads, and support to sell your projects lightning fast.'
      },
      // 9. For Whom Is This
      {
        blockType: 'projectontwikkelaarsVoorWieIsDitSection',
        badge: 'For whom is this?',
        title: 'Perfect for real estate developers who',
        subtitle: 'Our approach works best for ambitious developers who are ready for fast sales',
        perfectTitle: 'Perfect for developers who:',
        perfectFor: [
          {
            icon: 'Zap',
            title: 'Want to sell projects faster and more effectively',
            description: 'From long sales cycles to fast results with a proven approach.'
          },
          {
            icon: 'Target',
            title: 'Want more control over marketing and follow-up',
            description: 'Control over the process and insight into what works and what doesn\'t.'
          },
          {
            icon: 'CalendarClock',
            title: 'Are looking for creative campaigns',
            description: 'Marketing that is distinctive and makes your project truly stand out in the market.'
          },
          {
            icon: 'Users',
            title: 'Want to work more efficiently with smart systems',
            description: 'Automation and follow-up systems that ensure no lead is lost.'
          },
          {
            icon: 'CheckCircle2',
            title: 'Are looking for a reliable partner with real estate experience',
            description: 'Work with professionals who know the real estate industry from within.'
          }
        ],
        notSuitableTitle: 'Not suitable for developers who:',
        notSuitableFor: [
          { text: 'Are satisfied with long sales cycles of months or years and are in no hurry' },
          { text: 'Have no budget for marketing investments and event organization' },
          { text: 'Are not interested in event marketing and only want to work online' },
          { text: 'Are looking for quick fixes without professional support and guidance' },
          { text: 'Only focus on Dutch projects and have no international ambition' }
        ],
        bottomText: 'Then you are ready for a smart approach that sells your projects faster'
      },
      // 10. Strategy Session CTA
      {
        blockType: 'projectontwikkelaarsStrategieSessionCTA',
        title: 'Ready for a',
        titleHighlight: 'project strategy session',
        subtitle: 'Curious how your next project can be sold faster and smarter? Schedule a no-obligation strategy session and get immediate insight into your opportunities.',
        bullets: [
          { text: 'Free 30-minute project strategy session' },
          { text: 'Analysis of your current situation and target group' },
          { text: 'Identification of quick sales opportunities' },
          { text: 'Creative marketing strategies for your project' },
          { text: 'Concrete step-by-step plan with smart follow-up' },
          { text: 'Insight into how we get your project sold faster' }
        ],
        ctaLabel: 'Claim your free project strategy session',
        ctaSubtext: 'Value €1000 • Completely non-binding • Limited spots for serious real estate developers'
      },
      // 11. FAQ
      {
        blockType: 'projectontwikkelaarsFAQSection',
        kicker: 'FREQUENTLY ASKED QUESTIONS',
        title: 'Frequently Asked Questions',
        subtitle: 'Do you have other questions? Contact our',
        contactLinkText: 'support team',
        contactLinkHref: '/contact',
        phoneLabel: 'Other question?',
        phoneNumber: '085 060 2989'
      }
    ]
  }
}

async function migrate() {
  try {
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    
    console.log('🚀 Starting Projectontwikkelaars page migration...')
    
    // Check if page exists
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: PAGE_SLUG } },
      locale: 'all',
      limit: 1,
    })
    
    if (existing.docs.length > 0) {
      console.log('📝 Page exists, updating...')
      
      // Update NL locale
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        locale: 'nl',
        data: {
          title: pageData.nl.title,
          slug: PAGE_SLUG,
          blocks: pageData.nl.blocks,
          seo: pageData.nl.seo,
        },
      })
      console.log('✅ NL locale updated')
      
      // Update EN locale
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
      console.log('✅ EN locale updated')
      
      console.log('✅ Projectontwikkelaars page updated successfully for both locales!')
    } else {
      console.log('📝 Page does not exist, creating...')
      
      // Create new page with NL first
      const created = await payload.create({
        collection: 'pages',
        locale: 'nl',
        data: {
          title: pageData.nl.title,
          slug: PAGE_SLUG,
          blocks: pageData.nl.blocks,
          seo: pageData.nl.seo,
        },
      })
      console.log('✅ NL locale created')
      
      // Update with EN content
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
      console.log('✅ EN locale created')
      
      console.log('✅ Projectontwikkelaars page created successfully for both locales!')
    }
    
    console.log('\n📊 Migration Summary:')
    console.log(`   Slug: ${PAGE_SLUG}`)
    console.log(`   NL Blocks: ${pageData.nl.blocks.length}`)
    console.log(`   EN Blocks: ${pageData.en.blocks.length}`)
    console.log('\n🎉 Migration completed successfully!')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
