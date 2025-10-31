/**
 * Inspect current homepage structure
 * Run with: npx tsx scripts/inspect-homepage.mjs
 */

import { getPayload } from 'payload'
import config from '../src/payload.config.ts'
import fs from 'fs'

async function inspectHomepage() {
  const payload = await getPayload({ config })
  
  console.log('🔍 Inspecting Homepage structure...\n')

  try {
    const homePage = await payload.find({
      collection: 'pages',
      where: { slug: { equals: '/' } },
      locale: 'nl',
      limit: 1,
    })

    if (homePage.docs.length === 0) {
      console.log('❌ Homepage not found')
      process.exit(1)
    }

    const page = homePage.docs[0]
    
    // Save to file for inspection
    fs.writeFileSync(
      'homepage-structure.json',
      JSON.stringify(page, null, 2)
    )
    
    console.log(`✅ Homepage structure saved to homepage-structure.json`)
    console.log(`\nPage has ${page.blocks?.length || 0} blocks:\n`)
    
    page.blocks?.forEach((block, i) => {
      console.log(`${i + 1}. ${block.blockType}`)
    })

  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }

  process.exit(0)
}

inspectHomepage()
