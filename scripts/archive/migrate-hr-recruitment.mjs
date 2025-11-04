/**
 * HR Recruitment Page Migration Script
 * Migrates all data from old hr-recruitment.ts to Payload CMS
 * 
 * Run with: pnpm run migrate:hr-recruitment
 */

import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables FIRST before importing config
dotenv.config({ path: path.resolve(__dirname, '../.env') })

// NOW import Payload after env vars are set
import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

// Debug: Check if env vars are loaded
console.log('Environment check:')
console.log('PAYLOAD_SECRET:', process.env.PAYLOAD_SECRET ? '✓ Loaded' : '✗ Missing')
console.log('DATABASE_URI:', process.env.DATABASE_URI ? '✓ Loaded' : '✗ Missing')
console.log()

// Full HR recruitment page data from old CMS
const hrRecruitmentPageData = {
  metadata: {
    metaTitle: "HR & Recruitment Marketing | Real Accelerate",
    metaDescription: "Stop met jagen op kandidaten. Krijg een wachtrij van gekwalificeerde kandidaten die bij jouw organisatie passen."
  },
  blocks: [
    {
      blockType: 'hrRecruitmentHero',
      badge: 'Voor HR-professionals',
      titleBefore: 'Stop met jagen op',
      titleHighlight: 'kandidaten',
      subtitle: 'Krijg een wachtrij van <strong>gekwalificeerde kandidaten</strong> die bij jouw organisatie passen'
    },
    {
      blockType: 'hrRecruitmentTrustStrip',
      items: [
        { text: '50+ HR-teams geholpen' },
        { text: 'Recruitment marketing experts' },
        { text: 'Samen 20+ jaar HR ervaring' },
        { text: 'Bewezen methodologie' },
        { text: 'Employer branding specialisten' },
        { text: 'Talent attraction focus' },
        { text: '73% meer sollicitaties gemiddeld' },
        { text: '3x sneller vacatures vullen' },
        { text: 'Dedicated HR-specialisten' },
        { text: 'Resultaatgerichte aanpak' }
      ],
      ariaLabel: 'Vertrouwen en ervaring'
    },
    {
      blockType: 'hrRecruitmentPainPoints',
      badge: 'De 3 grootste frustraties',
      title: 'Herken je dit?',
      subtitle: 'Als HR-professional loop je vast in dezelfde patronen'
    },
    {
      blockType: 'hrRecruitmentTransformation',
      badge: 'Van reactief naar proactief',
      title: 'De transformatie'
    },
    {
      blockType: 'hrRecruitmentMethodology',
      badge: 'Onze bewezen aanpak',
      title: 'Hoe we dit aanpakken',
      subtitle: '4 stappen naar een recruitment machine'
    },
    {
      blockType: 'hrRecruitmentResultatenBentoGrid',
      badge: 'Bewezen resultaten',
      title: 'Wat onze klanten bereiken'
    },
    {
      blockType: 'hrRecruitmentWatJeKrijgt',
      badge: 'Wat je krijgt',
      title: 'Complete HR recruitment transformatie',
      subtitle: 'Alles wat je nodig hebt om top talent aan te trekken'
    },
    {
      blockType: 'hrRecruitmentVoorWieIsDit',
      badge: 'Voor wie is dit?',
      title: 'Is dit de juiste fit voor jou?'
    },
    {
      blockType: 'hrRecruitmentStrategieSessionCTA',
      title: 'Klaar voor meer sollicitaties?',
      subtitle: 'Plan een gratis recruitment analyse',
      ctaLabel: 'Plan gratis analyse'
    },
    {
      blockType: 'hrRecruitmentFAQ',
      badge: 'Veelgestelde Vragen',
      title: 'Vragen van HR-professionals',
      subtitle: 'Heeft u nog andere vragen? Neem contact op met ons support team of plan een gratis strategiesessie in.'
    }
  ]
}

async function migrate() {
  console.log('🚀 Starting HR recruitment page migration...\n')
  
  try {
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Check if HR recruitment page exists
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/hr-recruitment',
        },
      },
    })
    
    const pageData = {
      title: 'HR & Recruitment',
      slug: '/hr-recruitment',
      status: 'published',
      blocks: hrRecruitmentPageData.blocks,
      seo: {
        metaTitle: hrRecruitmentPageData.metadata.metaTitle,
        metaDescription: hrRecruitmentPageData.metadata.metaDescription,
      },
    }
    
    if (existing.docs.length > 0) {
      console.log('📝 HR recruitment page already exists, updating...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: pageData,
      })
      console.log('✅ HR recruitment page updated!\n')
    } else {
      console.log('📝 Creating new HR recruitment page...')
      await payload.create({
        collection: 'pages',
        data: pageData,
      })
      console.log('✅ HR recruitment page created!\n')
    }
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Total blocks: ${hrRecruitmentPageData.blocks.length}`)
    console.log(`   - Slug: /hr-recruitment`)
    console.log(`   - Status: published`)
    console.log('\n👉 Visit http://localhost:3000/admin/collections/pages to view in Payload CMS\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
