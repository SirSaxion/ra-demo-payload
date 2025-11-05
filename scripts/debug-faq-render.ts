/**
 * Debug FAQ rendering
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
    
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/projectontwikkelaars',
        },
      },
      locale: 'en',
      limit: 1,
    })
    
    const page = existing.docs[0]
    const faqBlock = page.blocks?.find((b: any) => b.blockType === 'projectontwikkelaarsFAQSection')
    
    console.log('FAQ Block from database:')
    console.log('Questions count:', faqBlock?.questions?.length || 0)
    console.log('Has questions array:', !!faqBlock?.questions)
    console.log('\nFirst question:')
    console.log(JSON.stringify(faqBlock?.questions?.[0], null, 2))
    
    process.exit(0)
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

debug()
