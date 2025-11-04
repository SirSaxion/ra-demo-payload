/**
 * Check HR Recruitment page
 */
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

async function check() {
  try {
    const payload = await getPayload({ config })
    
    const result = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/hr-recruitment',
        },
      },
    })
    
    if (result.docs.length > 0) {
      console.log('✅ HR recruitment page found!')
      console.log('Title:', result.docs[0].title)
      console.log('Slug:', result.docs[0].slug)
      console.log('Status:', result.docs[0].status)
      console.log('Blocks:', result.docs[0].blocks.length)
      console.log('\nBlock types:')
      result.docs[0].blocks.forEach((block, idx) => {
        console.log(`  ${idx + 1}. ${block.blockType}`)
      })
    } else {
      console.log('❌ HR recruitment page not found')
    }
    
    process.exit(0)
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

check()
