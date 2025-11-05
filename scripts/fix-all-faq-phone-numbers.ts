/**
 * Remove hardcoded phone numbers from ALL FAQ sections
 * This ensures all FAQ sections use the centralized phone number from Site Settings
 * 
 * Run with: pnpm tsx scripts/fix-all-faq-phone-numbers.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const FAQ_BLOCKS = [
  'faqSection',
  'makelaarsFAQSection',
  'hypotheekadviseursFAQSection',
  'projectontwikkelaarsFAQSection',
  'internationalFAQSection',
  'hrRecruitmentFAQ'
]

async function migrate() {
  console.log('🚀 Starting FAQ phone number cleanup...\n')
  
  try {
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Fetch all pages
    const pages = await payload.find({
      collection: 'pages',
      locale: 'all',
      limit: 100,
    })
    
    console.log(`📄 Found ${pages.docs.length} pages to check\n`)
    
    let updatedCount = 0
    let faqBlocksFound = 0
    
    // Process each page
    for (const page of pages.docs) {
      // Check both NL and EN locales
      for (const locale of ['nl', 'en'] as const) {
        try {
          const pageData = await payload.findByID({
            collection: 'pages',
            id: page.id,
            locale: locale,
          })
          
          if (!pageData.blocks || pageData.blocks.length === 0) continue
          
          let hasChanges = false
          const updatedBlocks = pageData.blocks.map((block: any) => {
            // Check if this is a FAQ block
            if (FAQ_BLOCKS.includes(block.blockType)) {
              faqBlocksFound++
              
              // Remove phoneNumber field if it exists
              if ('phoneNumber' in block) {
                console.log(`  🔧 Removing phoneNumber from ${block.blockType} in ${pageData.slug} (${locale})`)
                const { phoneNumber, ...rest } = block
                hasChanges = true
                return rest
              }
            }
            return block
          })
          
          // Update if changes were made
          if (hasChanges) {
            await payload.update({
              collection: 'pages',
              id: page.id,
              locale: locale,
              data: {
                blocks: updatedBlocks,
              },
            })
            updatedCount++
            console.log(`  ✅ Updated ${pageData.slug} (${locale})`)
          }
        } catch (error) {
          // Locale might not exist for this page, skip
          continue
        }
      }
    }
    
    console.log('\n🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Pages checked: ${pages.docs.length}`)
    console.log(`   - FAQ blocks found: ${faqBlocksFound}`)
    console.log(`   - Pages updated: ${updatedCount}`)
    console.log('\n💡 All FAQ sections now use phone number from Site Settings')
    console.log('   Go to: Site Settings → Contact Information to manage the phone number\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
