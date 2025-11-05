/**
 * Projectontwikkelaars Page - English Translation Migration
 * Migrates remaining Dutch text to English for the real estate developers page
 * 
 * Run with: pnpm tsx scripts/migrate-projectontwikkelaars-en.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const pageData = {
  nl: {
    title: 'Voor projectontwikkelaars | Real Accelerate',
    seo: {
      metaTitle: 'Marketing voor projectontwikkelaars | Real Accelerate',
      metaDescription: 'Projecten sneller verkocht met slimme marketing, events en opvolging. Real Accelerate helpt projectontwikkelaars met complete marketingoplossingen.',
    },
    blocks: [
      // Keep existing NL blocks - we're only updating EN
    ],
  },
  en: {
    title: 'For real estate developers | Real Accelerate',
    seo: {
      metaTitle: 'Marketing for real estate developers | Real Accelerate',
      metaDescription: 'Projects sold faster with smart marketing, events and follow-up. Real Accelerate helps real estate developers with complete marketing solutions.',
    },
    blocks: [
      // Note: This script only updates specific text fields that were still in Dutch
      // The full block structure should already exist, we're just fixing translations
    ],
  },
}

async function migrate() {
  const PAGE_SLUG = '/projectontwikkelaars'
  
  console.log(`🚀 Starting ${PAGE_SLUG} English translation update...\n`)
  
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
      console.error('❌ Page not found! Please create the page first.')
      process.exit(1)
    }
    
    const pageId = existing.docs[0].id
    console.log(`📝 Found page with ID: ${pageId}\n`)
    
    // Get the current English version to see what blocks exist
    const currentEN = await payload.findByID({
      collection: 'pages',
      id: pageId,
      locale: 'en',
    })
    
    console.log('🇬🇧 Current English blocks:', currentEN.blocks?.length || 0)
    
    // Get the current blocks from EN version and filter out unwanted blocks
    const updatedBlocks = currentEN.blocks?.filter((block: any) => {
      // Remove Project Results Bento Grid block
      if (block.blockType === 'projectResultsBentoGrid' || block.blockType === 'projectontwikkelaarsResultatenBentoGrid') {
        return false
      }
      return true
    }).map((block: any) => {
      // Update specific blocks that still have Dutch text
      
      // Complete Package Section translations
      if (block.blockType === 'completePackageSection') {
        return {
          ...block,
          tabs: block.tabs?.map((tab: any) => {
            const tabTranslations: Record<string, string> = {
              'Event Organisatie': 'Event Organization',
              'Marketing Power': 'Marketing Power',
              'Expert Support': 'Expert Support',
              'Garanties': 'Guarantees',
            }
            
            const contentTranslations: Record<string, string> = {
              'Evenementen door heel Nederland': 'Events throughout the Netherlands',
              'Wij organiseren professionele evenementen voor jouw projecten - van concept tot uitvoering': 'We organize professional events for your projects - from concept to execution',
              'Locatie, catering, presentaties - alles geregeld': 'Location, catering, presentations - everything arranged',
              'Landelijk Netwerk': 'National Network',
              'Bewezen Track Record': 'Proven Track Record',
              'Dubai projecten uitverkocht via events': 'Dubai projects sold out through events',
              'Lead Capture Systemen': 'Lead Capture Systems',
              'Moderne tools om bezoekers direct te converteren': 'Modern tools to convert visitors directly',
              'Geautomatiseerde opvolging na het event': 'Automated follow-up after the event',
              'Event Marketing Campagnes': 'Event Marketing Campaigns',
              'Marketing om bezoekers te trekken': 'Marketing to attract visitors',
            }
            
            return {
              ...tab,
              label: tabTranslations[tab.label] || tab.label,
              title: contentTranslations[tab.title] || tab.title,
              description: contentTranslations[tab.description] || tab.description,
              features: tab.features?.map((feature: any) => ({
                ...feature,
                title: contentTranslations[feature.title] || feature.title,
                description: contentTranslations[feature.description] || feature.description,
              })),
            }
          }),
        }
      }
      
      // Perfect For Section translations
      if (block.blockType === 'perfectForSection') {
        return {
          ...block,
          notSuitableText: block.notSuitableText?.replace('Herken je jezelf?', 'Do you recognize yourself?'),
        }
      }
      
      // FAQ Section translations
      if (block.blockType === 'faqSection') {
        return {
          ...block,
          faqs: block.faqs?.map((faq: any) => {
            const faqTranslations: Record<string, string> = {
              'Hoe zorgen jullie voor snellere projectverkoop?': 'How do you ensure faster project sales?',
              'Wat maakt jullie anders dan andere marketingbureaus?': 'What makes you different from other marketing agencies?',
              'Hoe snel kan ik resultaten verwachten?': 'How quickly can I expect results?',
              'Hoe zit het met de investering en ROI?': 'What about the investment and ROI?',
              'Helpen jullie ook met branding en positionering?': 'Do you also help with branding and positioning?',
              'Kunnen jullie meerdere projecten tegelijk managen?': 'Can you manage multiple projects simultaneously?',
              'Wat onderscheidt jullie van traditionele bureaus?': 'What distinguishes you from traditional agencies?',
              'Hoe gaan jullie om met verschillende doelgroepen per project?': 'How do you deal with different target groups per project?',
            }
            
            return {
              ...faq,
              question: faqTranslations[faq.question] || faq.question,
            }
          }),
          contactText: block.contactText?.replace('Bel direct:', 'Call directly:'),
          contactCta: block.contactCta?.replace('plan een gratis strategiesessie in', 'schedule a free strategy session'),
        }
      }
      
      return block
    })
    
    // Update English version with corrected translations
    console.log('🇬🇧 Updating English translations...')
    await payload.update({
      collection: 'pages',
      id: pageId,
      locale: 'en',
      data: {
        title: pageData.en.title,
        blocks: updatedBlocks,
        seo: pageData.en.seo,
      },
    })
    console.log('✅ English translations updated\n')
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Updated blocks: ${updatedBlocks?.length || 0}`)
    console.log(`   - Slug: ${PAGE_SLUG}`)
    console.log(`   - Removed: Project results bento grid`)
    console.log(`   - Translations fixed: Complete package, FAQ section`)
    console.log('\n👉 Visit http://localhost:3001/admin/collections/pages to view in Payload CMS')
    console.log(`👉 NL: http://localhost:3001${PAGE_SLUG}`)
    console.log(`👉 EN: http://localhost:3001/en${PAGE_SLUG}\n`)
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
