/**
 * Debug script to check projectontwikkelaars page data in both locales
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

async function debug() {
  try {
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Get NL version
    console.log('🇳🇱 DUTCH VERSION:')
    console.log('='.repeat(80))
    const nlPage = await payload.find({
      collection: 'pages',
      where: { slug: { equals: '/projectontwikkelaars' } },
      locale: 'nl',
      limit: 1,
    })
    
    if (nlPage.docs[0]) {
      console.log('Title:', nlPage.docs[0].title)
      console.log('Blocks:', nlPage.docs[0].blocks?.length || 0)
      
      // Check specific blocks
      nlPage.docs[0].blocks?.forEach((block: any, index: number) => {
        console.log(`\nBlock ${index + 1}: ${block.blockType}`)
        
        if (block.blockType === 'projectResultsBentoGrid' && block.items) {
          console.log('  Sample items:')
          block.items.slice(0, 3).forEach((item: any, i: number) => {
            console.log(`    ${i + 1}. ${item.title || item.description || 'N/A'}`)
          })
        }
        
        if (block.blockType === 'completePackageSection' && block.tabs) {
          console.log('  Tabs:')
          block.tabs.forEach((tab: any, i: number) => {
            console.log(`    ${i + 1}. ${tab.label}`)
          })
        }
        
        if (block.blockType === 'faqSection' && block.faqs) {
          console.log('  FAQs:')
          block.faqs.slice(0, 3).forEach((faq: any, i: number) => {
            console.log(`    ${i + 1}. ${faq.question}`)
          })
        }
      })
    }
    
    // Get EN version
    console.log('\n\n🇬🇧 ENGLISH VERSION:')
    console.log('='.repeat(80))
    const enPage = await payload.find({
      collection: 'pages',
      where: { slug: { equals: '/projectontwikkelaars' } },
      locale: 'en',
      limit: 1,
    })
    
    if (enPage.docs[0]) {
      console.log('Title:', enPage.docs[0].title)
      console.log('Blocks:', enPage.docs[0].blocks?.length || 0)
      
      // Check specific blocks
      enPage.docs[0].blocks?.forEach((block: any, index: number) => {
        console.log(`\nBlock ${index + 1}: ${block.blockType}`)
        
        if (block.blockType === 'projectResultsBentoGrid' && block.items) {
          console.log('  Sample items:')
          block.items.slice(0, 3).forEach((item: any, i: number) => {
            console.log(`    ${i + 1}. ${item.title || item.description || 'N/A'}`)
          })
        }
        
        if (block.blockType === 'completePackageSection' && block.tabs) {
          console.log('  Tabs:')
          block.tabs.forEach((tab: any, i: number) => {
            console.log(`    ${i + 1}. ${tab.label}`)
          })
        }
        
        if (block.blockType === 'faqSection' && block.faqs) {
          console.log('  FAQs:')
          block.faqs.slice(0, 3).forEach((faq: any, i: number) => {
            console.log(`    ${i + 1}. ${faq.question}`)
          })
        }
      })
    }
    
    console.log('\n' + '='.repeat(80))
    console.log('\n✅ Debug complete')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Debug failed:', error)
    process.exit(1)
  }
}

debug()
