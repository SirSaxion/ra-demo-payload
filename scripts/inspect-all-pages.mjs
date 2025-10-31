/**
 * Inspect all pages
 * Run with: npx tsx scripts/inspect-all-pages.mjs
 */

import { getPayload } from 'payload'
import config from '../src/payload.config.ts'
import fs from 'fs'

async function inspectPages() {
  const payload = await getPayload({ config })
  
  console.log('🔍 Inspecting all pages...\n')

  try {
    const pages = await payload.find({
      collection: 'pages',
      locale: 'nl',
      limit: 100,
    })

    console.log(`Found ${pages.docs.length} pages:\n`)
    
    pages.docs.forEach((page, i) => {
      console.log(`${i + 1}. ${page.title || page.slug} (${page.slug})`)
      console.log(`   - ${page.blocks?.length || 0} blocks`)
      console.log(`   - Status: ${page._status}`)
      console.log('')
    })

    // Save detailed info
    const pagesInfo = pages.docs.map(p => ({
      slug: p.slug,
      title: p.title,
      blockCount: p.blocks?.length || 0,
      blockTypes: p.blocks?.map(b => b.blockType) || []
    }))

    fs.writeFileSync(
      'all-pages-info.json',
      JSON.stringify(pagesInfo, null, 2)
    )
    
    console.log('✅ Details saved to all-pages-info.json')

  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }

  process.exit(0)
}

inspectPages()
