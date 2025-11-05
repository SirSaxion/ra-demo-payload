import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

// Nederlandse CTA content (bestaand)
const ctaDataNL = {
  title: 'Maak jouw buitenlandse vastgoedproject',
  highlightText: 'internationaal zichtbaar',
  subtitle: 'Plan een gratis strategiegesprek en ontdek hoe wij jouw project van onbekend naar uitverkocht brengen.',
  benefits: [
    { text: 'Analyse van jouw project & doelmarkten' },
    { text: 'Toegang tot IQI Global netwerk & resources' },
    { text: 'Concreet stappenplan voor internationale groei' },
    { text: 'Geen verplichtingen, 100% vrijblijvend' },
    { text: 'Directe inzichten van internationale experts' }
  ],
  ctaLabel: 'Claim je gratis strategiesessie',
  ctaFooter: '30 min • Volledig vrijblijvend • Direct toepasbare inzichten',
  bonusText: 'Toegang tot ons internationale netwerk via IQI Global'
}

// Engelse CTA content
const ctaDataEN = {
  title: 'Ready to launch your international project',
  highlightText: 'globally?',
  subtitle: 'Schedule a free strategy call and discover how we bring your project from unknown to sold out.',
  benefits: [
    { text: 'Analysis of your project & target markets' },
    { text: 'Access to IQI Global network & resources' },
    { text: 'Concrete roadmap for international growth' },
    { text: 'No obligations, 100% non-binding' },
    { text: 'Direct insights from international experts' }
  ],
  ctaLabel: 'Claim your free strategy session',
  ctaFooter: '30 min • Completely non-binding • Directly applicable insights',
  bonusText: 'Access to our international network via IQI Global'
}

async function migrate() {
  console.log('🚀 Starting CTA section migration for /makelaars-buitenland page...\n')
  
  try {
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Find the /makelaars-buitenland page
    console.log('🔍 Finding /makelaars-buitenland page...')
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: '/makelaars-buitenland' } },
      locale: 'nl',
    })
    
    if (existing.docs.length === 0) {
      console.error('❌ /makelaars-buitenland page not found!')
      process.exit(1)
    }
    
    const page = existing.docs[0]
    const pageId = page.id
    console.log(`✅ Found page with ID: ${pageId}\n`)
    
    // Get existing blocks
    const blocks = (page.blocks || []) as any[]
    
    // Find the CTA section block
    const ctaBlockIndex = blocks.findIndex((b: any) => b.blockType === 'internationalStrategySessionCTA')
    
    if (ctaBlockIndex === -1) {
      console.error('❌ CTA section block not found in page!')
      process.exit(1)
    }
    
    console.log('📝 Found CTA section block at index:', ctaBlockIndex)
    
    // Update the CTA block with NL content
    blocks[ctaBlockIndex] = {
      ...blocks[ctaBlockIndex],
      ...ctaDataNL,
      blockType: 'internationalStrategySessionCTA',
    }
    
    // Update Dutch version
    console.log('📝 Updating Dutch CTA content...')
    await payload.update({
      collection: 'pages',
      id: pageId,
      data: {
        blocks: blocks as any,
      },
      locale: 'nl',
    })
    console.log('✅ Dutch content updated\n')
    
    // Update English version with translated content
    console.log('📝 Updating English CTA content...')
    
    // Get the English version blocks
    const pageEN = await payload.findByID({
      collection: 'pages',
      id: pageId,
      locale: 'en',
    })
    
    const blocksEN = (pageEN.blocks || []) as any[]
    
    // Update the CTA block with EN content
    blocksEN[ctaBlockIndex] = {
      ...blocksEN[ctaBlockIndex],
      ...ctaDataEN,
      blockType: 'internationalStrategySessionCTA',
    }
    
    await payload.update({
      collection: 'pages',
      id: pageId,
      data: {
        blocks: blocksEN as any,
      },
      locale: 'en',
    })
    console.log('✅ English content updated\n')
    
    console.log('✅ Migration completed!\n')
    console.log('👉 Test the results:')
    console.log('   NL: http://localhost:3001/makelaars-buitenland')
    console.log('   EN: http://localhost:3001/en/makelaars-buitenland')
    console.log('\n📝 Check in Payload CMS:')
    console.log('   http://localhost:3001/admin/collections/pages')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
