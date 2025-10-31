/**
 * Check Homepage Data
 * Debug script to check what's in the database
 */

import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

async function checkHomepage() {
  console.log('🔍 Checking homepage data...\n')
  
  try {
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Find homepage with slug '/'
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/',
        },
      },
    })
    
    console.log('📊 Found pages:', pages.docs.length)
    
    if (pages.docs.length > 0) {
      const page = pages.docs[0]
      console.log('\n📄 Homepage data:')
      console.log('   - ID:', page.id)
      console.log('   - Title:', page.title)
      console.log('   - Slug:', page.slug)
      console.log('   - Status:', page.status)
      console.log('   - Blocks:', page.blocks?.length || 0)
      console.log('\n✅ Homepage found and looks good!')
    } else {
      console.log('\n❌ No homepage found with slug "/"')
    }
    
    // Also check all pages
    console.log('\n📋 All pages in database:')
    const allPages = await payload.find({
      collection: 'pages',
      limit: 100,
    })
    
    allPages.docs.forEach(page => {
      console.log(`   - ${page.title} (${page.slug}) - ${page.status}`)
    })
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Check failed:', error)
    process.exit(1)
  }
}

checkHomepage()
