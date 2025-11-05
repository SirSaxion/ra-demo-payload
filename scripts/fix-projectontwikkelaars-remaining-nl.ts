/**
 * Fix remaining Dutch text in Projectontwikkelaars EN version
 * 
 * Run with: pnpm tsx scripts/fix-projectontwikkelaars-remaining-nl.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

async function migrate() {
  const PAGE_SLUG = '/projectontwikkelaars'
  
  console.log(`🚀 Fixing remaining Dutch text in EN version...\n`)
  
  try {
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
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
    
    // Get EN version
    console.log('🇬🇧 Updating English version...')
    const enVersion = await payload.findByID({
      collection: 'pages',
      id: pageId,
      locale: 'en',
    })
    
    const updatedBlocks = enVersion.blocks?.map((block: any) => {
      
      // Fix VoorWieIsDit Section - "Herken je jezelf?"
      if (block.blockType === 'projectontwikkelaarsVoorWieIsDitSection') {
        return {
          ...block,
          notSuitableText: block.notSuitableText?.replace('Herken je jezelf?', 'Do you recognize yourself?')
        }
      }
      
      // Fix FAQ Section
      if (block.blockType === 'projectontwikkelaarsFAQSection') {
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
          ...block,
          faqs: block.faqs?.map((faq: any) => ({
            ...faq,
            question: faqTranslations[faq.question] || faq.question,
          })),
          contactText: block.contactText?.replace('Bel direct:', 'Call directly:'),
          contactCta: block.contactCta?.replace('plan een gratis strategiesessie in', 'schedule a free strategy session'),
        }
      }
      
      return block
    })
    
    await payload.update({
      collection: 'pages',
      id: pageId,
      locale: 'en',
      data: {
        blocks: updatedBlocks,
      },
    })
    console.log('✅ English version updated\n')
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Fixed "Herken je jezelf?" → "Do you recognize yourself?"`)
    console.log(`   - Fixed "Bel direct:" → "Call directly:"`)
    console.log(`   - Fixed "plan een gratis strategiesessie in" → "schedule a free strategy session"`)
    console.log(`   - Translated 8 FAQ questions to English`)
    console.log('\n👉 EN: http://localhost:3001/en/projectontwikkelaars\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
