/**
 * Inspect English Homepage Structure
 */

import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

async function inspectHomepage() {
  console.log('🔍 Inspecting English Homepage structure...\n')
  
  try {
    const payload = await getPayload({ config })
    
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/',
        },
      },
      locale: 'en',
      limit: 1,
    })
    
    if (pages.docs.length === 0) {
      console.log('❌ No English homepage found')
      process.exit(1)
    }
    
    const homepage = pages.docs[0]
    
    // Save full structure to JSON file
    const outputPath = path.resolve(__dirname, '../homepage-structure-en.json')
    fs.writeFileSync(outputPath, JSON.stringify(homepage, null, 2))
    console.log(`✅ English homepage structure saved to homepage-structure-en.json\n`)
    
    // Print block types
    console.log(`Page has ${homepage.blocks?.length || 0} blocks:\n`)
    homepage.blocks?.forEach((block, index) => {
      console.log(`${index + 1}. ${block.blockType}`)
    })
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Inspection failed:', error)
    process.exit(1)
  }
}

inspectHomepage()
