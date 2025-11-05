/**
 * Check FAQ Section EN Data
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

async function checkData() {
  try {
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/projectontwikkelaars',
        },
      },
      locale: 'all',
      limit: 1,
    })
    
    const pageId = existing.docs[0].id
    
    // Get EN version
    const enVersion = await payload.findByID({
      collection: 'pages',
      id: pageId,
      locale: 'en',
    })
    
    console.log('🇬🇧 EN VERSION - FAQ Section:')
    console.log('=====================================')
    const faqBlock = enVersion.blocks?.find((b: any) => b.blockType === 'projectontwikkelaarsFAQSection')
    console.log(JSON.stringify(faqBlock, null, 2))
    
    process.exit(0)
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

checkData()
