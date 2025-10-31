/**
 * Check Kicker Badge Translations
 * Verifies that all kicker badges have proper English translations
 */

import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

async function checkKickers() {
  console.log('🔍 Checking kicker badge translations...\n')
  
  try {
    const payload = await getPayload({ config })
    
    // Check NL version
    const pagesNL = await payload.find({
      collection: 'pages',
      where: { slug: { equals: '/' } },
      locale: 'nl',
      limit: 1,
    })
    
    // Check EN version
    const pagesEN = await payload.find({
      collection: 'pages',
      where: { slug: { equals: '/' } },
      locale: 'en',
      limit: 1,
    })
    
    if (pagesNL.docs.length === 0 || pagesEN.docs.length === 0) {
      console.log('❌ Homepage not found')
      process.exit(1)
    }
    
    const nlBlocks = pagesNL.docs[0].blocks || []
    const enBlocks = pagesEN.docs[0].blocks || []
    
    console.log('📋 Kicker badges comparison:\n')
    console.log('Block Type                    | NL Kicker                                | EN Kicker')
    console.log('------------------------------|------------------------------------------|------------------------------------------')
    
    nlBlocks.forEach((nlBlock, index) => {
      const enBlock = enBlocks[index]
      if (nlBlock.kicker || enBlock?.kicker) {
        const nlKicker = nlBlock.kicker || '(none)'
        const enKicker = enBlock?.kicker || '(none)'
        const match = nlKicker !== '(none)' && enKicker !== '(none)' ? '✅' : '⚠️'
        console.log(`${match} ${nlBlock.blockType.padEnd(28)} | ${nlKicker.padEnd(40)} | ${enKicker}`)
      }
    })
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Check failed:', error)
    process.exit(1)
  }
}

checkKickers()
