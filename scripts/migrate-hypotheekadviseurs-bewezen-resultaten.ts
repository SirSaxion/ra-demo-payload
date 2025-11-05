import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const PAGE_SLUG = '/hypotheekadviseurs'

// Dutch content for "Bewezen Resultaten" section
const bewezenResultatenBlockNL = {
  blockType: 'hypotheekadviseursBewezenResultatenSection',
  kicker: 'Bewezen resultaten',
  title: 'Van offerte-sites naar voorspelbare groei',
  subtitle: 'Hypotheekadviseur + Edit BV Partnership',
  kpis: [
    { label: "Afspraken per maand", from: 5, to: 46, unit: "number", sublabel: "+820% groei", span: 2 },
    { label: "Contacten bereikt", from: 200, to: 1300 },
  ],
  bullets: [
    { text: "Duurzaamheidsconsulten als nieuwe instroommotor" },
    { text: "Compleet systeem vóór offerte-sites" },
    { text: "+820% groei in afspraken met bewezen strategieën" },
  ]
}

// English content for "Proven Results" section
const bewezenResultatenBlockEN = {
  blockType: 'hypotheekadviseursBewezenResultatenSection',
  kicker: 'Proven results',
  title: 'From comparison sites to predictable growth',
  subtitle: 'Mortgage advisor + Edit BV Partnership',
  kpis: [
    { label: "Appointments per month", from: 5, to: 46, unit: "number", sublabel: "+820% growth", span: 2 },
    { label: "Contacts reached", from: 200, to: 1300 },
  ],
  bullets: [
    { text: "Sustainability consultations as new lead generator" },
    { text: "Complete system before comparison sites" },
    { text: "+820% growth in appointments with proven strategies" },
  ]
}

async function migrate() {
  console.log('🚀 Starting migration for Bewezen Resultaten section...\n')
  
  try {
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Find the hypotheekadviseurs page in Dutch
    const existingNL = await payload.find({
      collection: 'pages',
      where: { slug: { equals: PAGE_SLUG } },
      locale: 'nl',
    })
    
    if (existingNL.docs.length === 0) {
      console.error('❌ Hypotheekadviseurs page not found!')
      process.exit(1)
    }
    
    const pageId = existingNL.docs[0].id
    const currentBlocks = existingNL.docs[0].blocks || []
    
    console.log(`📄 Found page: ${existingNL.docs[0].title} (ID: ${pageId})`)
    console.log(`📦 Current blocks: ${currentBlocks.length}`)
    
    // Find the index of the BewezenResultatenSection block
    const blockIndex = currentBlocks.findIndex(
      (block: any) => block.blockType === 'hypotheekadviseursBewezenResultatenSection'
    )
    
    let updatedBlocksNL = [...currentBlocks]
    
    if (blockIndex !== -1) {
      console.log(`\n📝 Updating existing Bewezen Resultaten block at index ${blockIndex}...`)
      updatedBlocksNL[blockIndex] = bewezenResultatenBlockNL
    } else {
      console.log('\n📝 Adding new Bewezen Resultaten block...')
      // If block doesn't exist, add it after the methodology section
      // You might need to adjust this insertion point based on your page structure
      updatedBlocksNL.push(bewezenResultatenBlockNL)
    }
    
    // Update Dutch version
    console.log('\n🇳🇱 Updating Dutch content...')
    await payload.update({
      collection: 'pages',
      id: pageId,
      data: {
        blocks: updatedBlocksNL as any,
      },
      locale: 'nl',
    })
    console.log('✅ Dutch content updated')
    
    // Get English version blocks
    const existingEN = await payload.find({
      collection: 'pages',
      where: { slug: { equals: PAGE_SLUG } },
      locale: 'en',
    })
    
    const currentBlocksEN = existingEN.docs[0]?.blocks || []
    let updatedBlocksEN = [...currentBlocksEN]
    
    const blockIndexEN = updatedBlocksEN.findIndex(
      (block: any) => block.blockType === 'hypotheekadviseursBewezenResultatenSection'
    )
    
    if (blockIndexEN !== -1) {
      console.log(`\n📝 Updating existing Bewezen Resultaten block in English at index ${blockIndexEN}...`)
      updatedBlocksEN[blockIndexEN] = bewezenResultatenBlockEN
    } else {
      console.log('\n📝 Adding new Bewezen Resultaten block to English version...')
      updatedBlocksEN.push(bewezenResultatenBlockEN)
    }
    
    // Update English version
    console.log('\n🇬🇧 Updating English content...')
    await payload.update({
      collection: 'pages',
      id: pageId,
      data: {
        blocks: updatedBlocksEN as any,
      },
      locale: 'en',
    })
    console.log('✅ English content updated')
    
    console.log('\n✅ Migration completed successfully!\n')
    console.log('👉 Visit http://localhost:3001/hypotheekadviseurs (NL)')
    console.log('👉 Visit http://localhost:3001/en/hypotheekadviseurs (EN)')
    console.log('\nℹ️  The section should now show localized content:')
    console.log('   NL: "BEWEZEN RESULTATEN - Van offerte-sites naar voorspelbare groei"')
    console.log('   EN: "PROVEN RESULTS - From comparison sites to predictable growth"')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
