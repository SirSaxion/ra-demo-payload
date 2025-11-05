/**
 * Remove rocket section from makelaars-buitenland page
 * Removes bottomInsightIcon and bottomInsightText from international_methodology block
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

async function updatePage() {
  const PAGE_SLUG = '/makelaars-buitenland'
  
  console.log(`🚀 Removing rocket section from ${PAGE_SLUG} page...\n`)
  
  try {
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Find the page
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
      console.log('❌ Page not found')
      process.exit(1)
    }
    
    console.log(`📝 Found page, updating blocks...\n`)
    const pageId = existing.docs[0].id
    
    // Get current blocks for both locales
    const nlPage = await payload.findByID({
      collection: 'pages',
      id: pageId,
      locale: 'nl',
    })
    
    const enPage = await payload.findByID({
      collection: 'pages',
      id: pageId,
      locale: 'en',
    })
    
    // Update NL blocks
    console.log('🇳🇱 Updating Dutch content...')
    const nlBlocks = nlPage.blocks?.map((block: any) => {
      if (block.blockType === 'internationalMethodologySection') {
        const { bottomInsightIcon, bottomInsightText, ...rest } = block
        console.log('   ✓ Removed rocket section from methodology block')
        return rest
      }
      return block
    })
    
    await payload.update({
      collection: 'pages',
      id: pageId,
      locale: 'nl',
      data: {
        blocks: nlBlocks,
      },
    })
    console.log('✅ Dutch content updated\n')
    
    // Update EN blocks
    console.log('🇬🇧 Updating English content...')
    const enBlocks = enPage.blocks?.map((block: any) => {
      if (block.blockType === 'internationalMethodologySection') {
        const { bottomInsightIcon, bottomInsightText, ...rest } = block
        console.log('   ✓ Removed rocket section from methodology block')
        return rest
      }
      return block
    })
    
    await payload.update({
      collection: 'pages',
      id: pageId,
      locale: 'en',
      data: {
        blocks: enBlocks,
      },
    })
    console.log('✅ English content updated\n')
    
    console.log('🎉 Update completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Removed bottomInsightIcon and bottomInsightText from methodology block`)
    console.log(`   - Updated both NL and EN locales`)
    console.log('\n👉 Visit http://localhost:3001/admin/collections/pages to verify in Payload CMS')
    console.log(`👉 NL: http://localhost:3001${PAGE_SLUG}`)
    console.log(`👉 EN: http://localhost:3001/en${PAGE_SLUG}\n`)
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Update failed:', error)
    process.exit(1)
  }
}

updatePage()
