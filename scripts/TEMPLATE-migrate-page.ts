/**
 * Page Migration Template
 * Copy this file and rename it to migrate-[page-name].ts
 * 
 * Steps:
 * 1. Update pageData with your NL and EN content
 * 2. Update the slug in the script
 * 3. Update console.log messages
 * 4. Run with: pnpm tsx scripts/migrate-[page-name].ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const pageData = {
  nl: {
    title: 'Pagina Titel NL',
    seo: {
      metaTitle: 'SEO Titel | Real Accelerate',
      metaDescription: 'SEO beschrijving voor deze pagina.',
    },
    blocks: [
      // TODO: Add your NL blocks here
      {
        blockType: 'yourBlockType',
        // ... your block fields
      },
    ],
  },
  en: {
    title: 'Page Title EN',
    seo: {
      metaTitle: 'SEO Title | Real Accelerate',
      metaDescription: 'SEO description for this page.',
    },
    blocks: [
      // TODO: Add your EN blocks here (should match NL structure)
      {
        blockType: 'yourBlockType',
        // ... your block fields (translated)
      },
    ],
  },
}

async function migrate() {
  const PAGE_SLUG = '/your-page-slug' // TODO: Update this!
  
  console.log(`🚀 Starting ${PAGE_SLUG} page migration...\n`)
  
  try {
    // Set defaults if not in environment
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Check if page exists
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: PAGE_SLUG,
        },
      },
      locale: 'all',
      limit: 1,
    })
    
    if (existing.docs.length > 0) {
      console.log(`📝 Page exists, updating both locales...\n`)
      
      // Update NL locale
      console.log('🇳🇱 Updating Dutch content...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        locale: 'nl',
        data: {
          title: pageData.nl.title,
          slug: PAGE_SLUG,
          blocks: pageData.nl.blocks,
          seo: pageData.nl.seo,
        },
      })
      console.log('✅ Dutch content updated\n')
      
      // Update EN locale
      console.log('🇬🇧 Updating English content...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        locale: 'en',
        data: {
          title: pageData.en.title,
          blocks: pageData.en.blocks,
          seo: pageData.en.seo,
        },
      })
      console.log('✅ English content updated\n')
      
      // Publish the page
      console.log('📤 Publishing page...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: {
          _status: 'published',
        },
      })
      console.log('✅ Page published\n')
    } else {
      console.log(`📝 Creating new page...\n`)
      
      // Create with NL first
      console.log('🇳🇱 Creating with Dutch content...')
      const created = await payload.create({
        collection: 'pages',
        locale: 'nl',
        data: {
          title: pageData.nl.title,
          slug: PAGE_SLUG,
          blocks: pageData.nl.blocks,
          seo: pageData.nl.seo,
          _status: 'published',
        },
      })
      console.log('✅ Dutch content created\n')
      
      // Update with EN content
      console.log('🇬🇧 Adding English content...')
      await payload.update({
        collection: 'pages',
        id: created.id,
        locale: 'en',
        data: {
          title: pageData.en.title,
          blocks: pageData.en.blocks,
          seo: pageData.en.seo,
        },
      })
      console.log('✅ English content added\n')
    }
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - NL blocks: ${pageData.nl.blocks.length}`)
    console.log(`   - EN blocks: ${pageData.en.blocks.length}`)
    console.log(`   - Slug: ${PAGE_SLUG}`)
    console.log(`   - Status: published`)
    console.log('\n👉 Visit http://localhost:3001/admin/collections/pages to view in Payload CMS')
    console.log(`👉 NL: http://localhost:3001${PAGE_SLUG}`)
    console.log(`👉 EN: http://localhost:3001/en${PAGE_SLUG}\n`)
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
