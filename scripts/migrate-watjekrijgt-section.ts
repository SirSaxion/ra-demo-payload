/**
 * Projectontwikkelaars - Wat Je Krijgt Section Migration
 * Adds tabs and features to the complete package section
 * 
 * Run with: pnpm tsx scripts/migrate-watjekrijgt-section.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const tabsData = {
  nl: [
    {
      label: 'Event organisatie',
      title: 'Evenementen door heel Nederland',
      description: 'Wij organiseren professionele evenementen voor jouw projecten - van concept tot uitvoering',
      features: [
        {
          icon: 'MapPin',
          title: 'Landelijk netwerk',
          description: 'Locatie, catering, presentaties - alles geregeld'
        },
        {
          icon: 'TrendingUp',
          title: 'Bewezen track record',
          description: 'Dubai projecten uitverkocht via events'
        },
        {
          icon: 'Zap',
          title: 'Lead capture systemen',
          description: 'Moderne tools om bezoekers direct te converteren'
        },
        {
          icon: 'RefreshCw',
          title: 'Geautomatiseerde opvolging',
          description: 'Automatische follow-up na het event'
        },
        {
          icon: 'Target',
          title: 'Event marketing campagnes',
          description: 'Marketing om bezoekers te trekken'
        }
      ]
    },
    {
      label: 'Marketing power',
      title: 'Complete marketingmachine',
      description: 'Van strategie tot uitvoering - wij zorgen dat jouw project opvalt en conversie genereert',
      features: [
        {
          icon: 'Sparkles',
          title: 'Creatieve campagnes',
          description: 'Onderscheidende marketing die echt werkt'
        },
        {
          icon: 'Users',
          title: 'Doelgroep targeting',
          description: 'Bereik precies de juiste kopers'
        },
        {
          icon: 'Share2',
          title: 'Multi-channel aanpak',
          description: 'Social media, advertenties en content marketing'
        },
        {
          icon: 'BarChart',
          title: 'Data-driven optimalisatie',
          description: 'Continue verbetering op basis van resultaten'
        },
        {
          icon: 'Globe',
          title: 'Internationale ervaring',
          description: 'Van Nederlandse tot buitenlandse projecten'
        }
      ]
    },
    {
      label: 'Expert support',
      title: 'Hands-on begeleiding',
      description: 'Een dedicated team dat jouw project naar succes begeleidt',
      features: [
        {
          icon: 'UserCheck',
          title: 'Dedicated projectmanager',
          description: 'Eén vast aanspreekpunt voor jouw project'
        },
        {
          icon: 'Headphones',
          title: 'Directe bereikbaarheid',
          description: 'Snelle communicatie en support wanneer nodig'
        },
        {
          icon: 'FileText',
          title: 'Transparante rapportage',
          description: 'Altijd inzicht in voortgang en resultaten'
        },
        {
          icon: 'Lightbulb',
          title: 'Strategische advisering',
          description: 'Advies vanuit echte marktervaring'
        },
        {
          icon: 'Calendar',
          title: 'Maandelijkse evaluaties',
          description: 'Samen bespreken we de voortgang en volgende stappen'
        }
      ]
    },
    {
      label: 'Garanties',
      title: 'Werken met zekerheid',
      description: 'Onze toewijding aan jouw succes',
      features: [
        {
          icon: 'Shield',
          title: 'Geen verrassingen',
          description: 'Heldere afspraken en transparante kosten'
        },
        {
          icon: 'Clock',
          title: 'Snelle resultaten',
          description: 'Focus op kortere verkooptrajacten'
        },
        {
          icon: 'Award',
          title: 'Bewezen methodologie',
          description: 'Aanpak die werkt voor diverse projecten'
        },
        {
          icon: 'TrendingUp',
          title: 'ROI focus',
          description: 'Alles draait om meetbare resultaten'
        },
        {
          icon: 'Lock',
          title: 'Geen lange contracten',
          description: 'Flexibele samenwerking afgestemd op jouw project'
        }
      ]
    }
  ],
  en: [
    {
      label: 'Event organization',
      title: 'Events throughout the Netherlands',
      description: 'We organize professional events for your projects - from concept to execution',
      features: [
        {
          icon: 'MapPin',
          title: 'National network',
          description: 'Location, catering, presentations - everything arranged'
        },
        {
          icon: 'TrendingUp',
          title: 'Proven track record',
          description: 'Dubai projects sold out through events'
        },
        {
          icon: 'Zap',
          title: 'Lead capture systems',
          description: 'Modern tools to convert visitors directly'
        },
        {
          icon: 'RefreshCw',
          title: 'Automated follow-up',
          description: 'Automatic follow-up after the event'
        },
        {
          icon: 'Target',
          title: 'Event marketing campaigns',
          description: 'Marketing to attract visitors'
        }
      ]
    },
    {
      label: 'Marketing power',
      title: 'Complete marketing machine',
      description: 'From strategy to execution - we ensure your project stands out and generates conversion',
      features: [
        {
          icon: 'Sparkles',
          title: 'Creative campaigns',
          description: 'Distinctive marketing that really works'
        },
        {
          icon: 'Users',
          title: 'Target audience targeting',
          description: 'Reach exactly the right buyers'
        },
        {
          icon: 'Share2',
          title: 'Multi-channel approach',
          description: 'Social media, advertisements, and content marketing'
        },
        {
          icon: 'BarChart',
          title: 'Data-driven optimization',
          description: 'Continuous improvement based on results'
        },
        {
          icon: 'Globe',
          title: 'International experience',
          description: 'From Dutch to international projects'
        }
      ]
    },
    {
      label: 'Expert support',
      title: 'Hands-on guidance',
      description: 'A dedicated team that guides your project to success',
      features: [
        {
          icon: 'UserCheck',
          title: 'Dedicated project manager',
          description: 'One fixed point of contact for your project'
        },
        {
          icon: 'Headphones',
          title: 'Direct accessibility',
          description: 'Fast communication and support when needed'
        },
        {
          icon: 'FileText',
          title: 'Transparent reporting',
          description: 'Always insight into progress and results'
        },
        {
          icon: 'Lightbulb',
          title: 'Strategic advice',
          description: 'Advice from real market experience'
        },
        {
          icon: 'Calendar',
          title: 'Monthly evaluations',
          description: 'Together we discuss progress and next steps'
        }
      ]
    },
    {
      label: 'Guarantees',
      title: 'Working with certainty',
      description: 'Our commitment to your success',
      features: [
        {
          icon: 'Shield',
          title: 'No surprises',
          description: 'Clear agreements and transparent costs'
        },
        {
          icon: 'Clock',
          title: 'Fast results',
          description: 'Focus on shorter sales cycles'
        },
        {
          icon: 'Award',
          title: 'Proven methodology',
          description: 'Approach that works for various projects'
        },
        {
          icon: 'TrendingUp',
          title: 'ROI focus',
          description: 'Everything revolves around measurable results'
        },
        {
          icon: 'Lock',
          title: 'No long contracts',
          description: 'Flexible collaboration tailored to your project'
        }
      ]
    }
  ]
}

async function migrate() {
  const PAGE_SLUG = '/projectontwikkelaars'
  
  console.log(`🚀 Starting Wat Je Krijgt section migration...\n`)
  
  try {
    // Set defaults if not in environment
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Find the existing page
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: PAGE_SLUG,
        },
      },
      locale: 'all',
      limit: 1,
    })
    
    if (existing.docs.length === 0) {
      console.error('❌ Page not found!')
      process.exit(1)
    }
    
    const pageId = existing.docs[0].id
    console.log(`📝 Found page with ID: ${pageId}\n`)
    
    // Update NL version
    console.log('🇳🇱 Updating Dutch version...')
    const nlVersion = await payload.findByID({
      collection: 'pages',
      id: pageId,
      locale: 'nl',
    })
    
    const updatedNlBlocks = nlVersion.blocks?.map((block: any) => {
      if (block.blockType === 'projectontwikkelaarsWatJeKrijgtSection') {
        return {
          ...block,
          tabs: tabsData.nl
        }
      }
      return block
    })
    
    await payload.update({
      collection: 'pages',
      id: pageId,
      locale: 'nl',
      data: {
        blocks: updatedNlBlocks,
      },
    })
    console.log('✅ Dutch version updated\n')
    
    // Update EN version
    console.log('🇬🇧 Updating English version...')
    const enVersion = await payload.findByID({
      collection: 'pages',
      id: pageId,
      locale: 'en',
    })
    
    const updatedEnBlocks = enVersion.blocks?.map((block: any) => {
      if (block.blockType === 'projectontwikkelaarsWatJeKrijgtSection') {
        return {
          ...block,
          tabs: tabsData.en
        }
      }
      return block
    })
    
    await payload.update({
      collection: 'pages',
      id: pageId,
      locale: 'en',
      data: {
        blocks: updatedEnBlocks,
      },
    })
    console.log('✅ English version updated\n')
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Slug: ${PAGE_SLUG}`)
    console.log(`   - Added 4 tabs per locale:`)
    console.log(`     • Event organisatie / Event organization`)
    console.log(`     • Marketing power`)
    console.log(`     • Expert support`)
    console.log(`     • Garanties / Guarantees`)
    console.log(`   - Each tab has 5 features with icons`)
    console.log('\n👉 Visit http://localhost:3001/admin/collections/pages to edit in Payload CMS')
    console.log(`👉 NL: http://localhost:3001${PAGE_SLUG}`)
    console.log(`👉 EN: http://localhost:3001/en${PAGE_SLUG}\n`)
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
