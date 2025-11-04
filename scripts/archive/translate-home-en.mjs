/**
 * Translate Homepage to English
 * Run with: npx tsx scripts/translate-home-en.mjs
 */

import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

async function translateHomepage() {
  const payload = await getPayload({ config })
  
  console.log('🏠 Translating Homepage to English...\n')

  try {
    // Find the homepage
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

    const homeId = homePage.docs[0].id
    const nlBlocks = homePage.docs[0].blocks
    
    console.log(`Found homepage (ID: ${homeId})`)
    console.log(`Has ${nlBlocks?.length || 0} blocks\n`)

    // Update only title and SEO fields, keep blocks as-is
    await payload.update({
      collection: 'pages',
      id: homeId,
      locale: 'en',
      data: {
        title: 'Real Accelerate | Online marketing for real estate professionals',
        seo: {
          metaTitle: 'Real Accelerate | Online marketing for real estate professionals | By experts, for experts',
          metaDescription: 'Grow your real estate business with proven online marketing strategies. From 2 to 8 employees in 18 months. Real estate marketing, lead generation and automation by real estate experts.'
        }
      }
    })
    
    console.log('✅ Homepage title and SEO translated to English')
    console.log('📝 Note: Blocks kept as Dutch - you can translate them manually in the admin panel\n')
    console.log('👉 Next: Run "npx tsx scripts/translate-cases-en.mjs"\n')

  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }

  process.exit(0)
}

translateHomepage()
