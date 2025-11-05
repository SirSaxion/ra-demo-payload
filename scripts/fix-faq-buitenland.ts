/**
 * Fix ONLY the FAQ section phoneNumber in Makelaars Buitenland page
 * Run with: pnpm tsx scripts/fix-faq-buitenland.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

async function migrate() {
  const PAGE_SLUG = '/makelaars-buitenland'
  
  console.log(`🚀 Fixing FAQ phoneNumber in ${PAGE_SLUG}...\n`)
  
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
      where: { slug: { equals: PAGE_SLUG } },
      locale: 'all',
      limit: 1,
    })
    
    if (existing.docs.length === 0) {
      console.error('❌ Page not found!')
      process.exit(1)
    }
    
    const pageId = existing.docs[0].id
    console.log(`📝 Found page with ID: ${pageId}\n`)
    
    // Update NL
    console.log('🇳🇱 Updating Dutch FAQ...')
    const nlVersion = await payload.findByID({
      collection: 'pages',
      id: pageId,
      locale: 'nl',
    })
    
    const updatedNlBlocks = nlVersion.blocks?.map((block: any) => {
      if (block.blockType === 'internationalFAQSection' && 'phoneNumber' in block) {
        console.log('  ✓ Removing phoneNumber from NL FAQ')
        const { phoneNumber, ...rest } = block
        return rest
      }
      return block
    })
    
    await payload.update({
      collection: 'pages',
      id: pageId,
      locale: 'nl',
      data: { blocks: updatedNlBlocks },
    })
    console.log('✅ Dutch FAQ updated\n')
    
    // Update EN
    console.log('🇬🇧 Updating English FAQ...')
    const enVersion = await payload.findByID({
      collection: 'pages',
      id: pageId,
      locale: 'en',
    })
    
    const updatedEnBlocks = enVersion.blocks?.map((block: any) => {
      if (block.blockType === 'internationalFAQSection' && 'phoneNumber' in block) {
        console.log('  ✓ Removing phoneNumber from EN FAQ')
        const { phoneNumber, ...rest } = block
        return rest
      }
      return block
    })
    
    await payload.update({
      collection: 'pages',
      id: pageId,
      locale: 'en',
      data: { blocks: updatedEnBlocks },
    })
    console.log('✅ English FAQ updated\n')
    
    console.log('🎉 Done! FAQ phoneNumber removed from both locales')
    console.log('   Phone number will now come from Site Settings\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
