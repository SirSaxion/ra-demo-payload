/**
 * Check if over-ons page exists in Payload CMS
 */

import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') })

import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

async function checkOverOnsPage() {
  try {
    const payload = await getPayload({ config })
    
    console.log('\n🔍 Checking for over-ons page in Payload CMS...\n')
    
    // Check for NL version
    const nlPages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/over-ons',
        },
      },
      locale: 'nl',
      limit: 1,
    })
    
    console.log('📄 NL version (/over-ons):')
    if (nlPages.docs.length > 0) {
      console.log(`   ✅ EXISTS`)
      console.log(`   ID: ${nlPages.docs[0].id}`)
      console.log(`   Title: ${nlPages.docs[0].title}`)
      console.log(`   Blocks: ${nlPages.docs[0].blocks?.length || 0}`)
      console.log(`   Status: ${nlPages.docs[0]._status || 'unknown'}`)
    } else {
      console.log(`   ❌ NOT FOUND`)
    }
    
    // Check for EN version
    const enPages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/over-ons',
        },
      },
      locale: 'en',
      limit: 1,
    })
    
    console.log('\n📄 EN version (/over-ons):')
    if (enPages.docs.length > 0) {
      console.log(`   ✅ EXISTS`)
      console.log(`   ID: ${enPages.docs[0].id}`)
      console.log(`   Title: ${enPages.docs[0].title}`)
      console.log(`   Blocks: ${enPages.docs[0].blocks?.length || 0}`)
      console.log(`   Status: ${enPages.docs[0]._status || 'unknown'}`)
    } else {
      console.log(`   ❌ NOT FOUND - needs translation`)
    }
    
    console.log('\n')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

checkOverOnsPage()
