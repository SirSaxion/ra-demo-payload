/**
 * Check Projectontwikkelaars Page in Database
 * Verifies the page was created successfully
 * 
 * Run with: node scripts/check-projectontwikkelaars.mjs
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
  console.log('🔍 Checking Projectontwikkelaars page...\n')
  
  try {
    const payload = await getPayload({ config })
    
    const result = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/projectontwikkelaars',
        },
      },
    })
    
    if (result.docs.length > 0) {
      const page = result.docs[0]
      console.log('✅ Projectontwikkelaars page found!\n')
      console.log('📄 Page Details:')
      console.log(`   Title: ${page.title}`)
      console.log(`   Slug: ${page.slug}`)
      console.log(`   Status: ${page.status}`)
      console.log(`   Total Blocks: ${page.blocks?.length || 0}`)
      console.log(`   SEO Title: ${page.seo?.metaTitle || 'Not set'}`)
      console.log(`   SEO Description: ${page.seo?.metaDescription || 'Not set'}`)
      console.log('\n📦 Blocks:')
      page.blocks?.forEach((block, idx) => {
        console.log(`   ${idx + 1}. ${block.blockType}`)
      })
    } else {
      console.log('❌ Projectontwikkelaars page not found!')
    }
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

check()
