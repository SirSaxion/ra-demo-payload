/**
 * Translate Testimonial Badges to English
 */

import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

async function translateBadges() {
  console.log('🔄 Translating testimonial badges to English...\n')
  
  try {
    const payload = await getPayload({ config })
    
    // Find English homepage
    const pages = await payload.find({
      collection: 'pages',
      where: { slug: { equals: '/' } },
      locale: 'en',
      limit: 1,
    })
    
    if (pages.docs.length === 0) {
      console.log('❌ English homepage not found')
      process.exit(1)
    }
    
    const homepage = pages.docs[0]
    const blocks = homepage.blocks || []
    
    // Find testimonials block
    const testimonialsBlock = blocks.find(b => b.blockType === 'testimonialsSection')
    
    if (!testimonialsBlock) {
      console.log('❌ Testimonials block not found')
      process.exit(1)
    }
    
    console.log('📝 Current testimonial badges:')
    testimonialsBlock.testimonials?.forEach((t, i) => {
      console.log(`\n${i + 1}. ${t.title}`)
      console.log(`   Badges: ${t.badges?.map(b => b.text).join(', ') || 'none'}`)
    })
    
    // Update testimonials with English badges
    const updatedBlocks = blocks.map(block => {
      if (block.blockType === 'testimonialsSection') {
        return {
          ...block,
          testimonials: block.testimonials?.map(t => {
            if (t.title === 'De Brabant Makelaar') {
              return {
                ...t,
                badges: [
                  { text: '8 agents active' },
                  { text: 'Agenda filled' }
                ]
              }
            }
            if (t.title === 'Bink & Partners') {
              return {
                ...t,
                badges: [
                  { text: 'Leads exceed expectations' },
                  { text: 'Website compliments' }
                ]
              }
            }
            return t
          })
        }
      }
      return block
    })
    
    // Update the page
    await payload.update({
      collection: 'pages',
      id: homepage.id,
      locale: 'en',
      data: {
        blocks: updatedBlocks
      }
    })
    
    console.log('\n✅ Testimonial badges translated successfully!')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Translation failed:', error)
    process.exit(1)
  }
}

translateBadges()
