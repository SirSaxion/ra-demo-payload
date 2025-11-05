/**
 * Debug full block data as it comes from the page query
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
    
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/projectontwikkelaars',
        },
      },
      locale: 'en',
    })
    
    const page = pages.docs[0]
    
    console.log('Total blocks:', page.blocks?.length)
    console.log('\nAll block types:')
    page.blocks?.forEach((block: any, i: number) => {
      console.log(`${i + 1}. ${block.blockType}`)
      if (block.blockType === 'projectontwikkelaarsFAQSection') {
        console.log('   ^^^ FAQ FOUND! Questions:', block.questions?.length || 0)
        console.log('   Full block keys:', Object.keys(block))
      }
    })
    
    process.exit(0)
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

debug()
