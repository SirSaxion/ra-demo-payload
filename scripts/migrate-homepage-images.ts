/**
 * Homepage Images Migration to Payload Media Collection
 * 
 * This script ONLY adds images to the Media collection.
 * It does NOT modify any existing pages or data.
 * 
 * Run with: pnpm tsx scripts/migrate-homepage-images.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: '.env' })

// Homepage images to migrate
const homepageImages = [
  {
    filename: 'herofootage_first_frame.webp',
    alt: 'Hero video first frame',
    priority: 'high',
    usage: 'Hero section video poster',
  },
  {
    filename: 'brabantmakelaar_avatar.webp',
    alt: 'Amory - De Brabant Makelaar',
    priority: 'high',
    usage: 'Avatar in hero section trust indicators',
  },
  {
    filename: 'thomapost_avatar.webp',
    alt: 'Marlies - Thoma Post',
    priority: 'high',
    usage: 'Avatar in hero section trust indicators',
  },
  {
    filename: 'paulthijssen_avatar.webp',
    alt: 'Paul - Paul Thijssen Makelaardij',
    priority: 'high',
    usage: 'Avatar in hero section trust indicators',
  },
  {
    filename: 'case-de-brabant-makelaar.webp',
    alt: 'Team De Brabant Makelaar',
    priority: 'medium',
    usage: 'Case study main image',
  },
  {
    filename: 'emiro_pointing_right.png',
    alt: 'Emiro wijst naar rechts',
    priority: 'low',
    usage: 'Unique approach section decoration',
  },
  {
    filename: '32.EmiroSmolders-Settle-DSC07215--compressed.webp',
    alt: 'Website development preview',
    priority: 'medium',
    usage: 'Marketing machine - Websites feature',
  },
  {
    filename: 'leadgen.webp',
    alt: 'Lead generation dashboard',
    priority: 'medium',
    usage: 'Marketing machine - Leadgeneratie feature',
  },
  {
    filename: '42.EmiroSmolders-Settle-DSC07252--compressed.webp',
    alt: 'SEO and visibility',
    priority: 'medium',
    usage: 'Marketing machine - Vindbaarheid feature',
  },
  {
    filename: 'rudybrief.webp',
    alt: 'Email reactivation',
    priority: 'medium',
    usage: 'Marketing machine - Heractivatie feature',
  },
  {
    filename: 'joeptelefoon.webp',
    alt: 'CRM and follow-up',
    priority: 'medium',
    usage: 'Marketing machine - Leads opvolgen feature',
  },
  {
    filename: '47.EmiroSmolders-Settle-DSC07264--compressed.webp',
    alt: 'Branding and identity',
    priority: 'medium',
    usage: 'Marketing machine - Branding feature',
  },
  {
    filename: 'remax.jpg',
    alt: 'Re/max makelaars',
    priority: 'medium',
    usage: 'Target groups - Makelaars',
  },
  {
    filename: 'recreatie.jpg',
    alt: 'Recreatie projectontwikkeling',
    priority: 'medium',
    usage: 'Target groups - Projectontwikkelaars',
  },
  {
    filename: 'hypotheekvisie.jpg',
    alt: 'Hypotheekvisie kantoor',
    priority: 'medium',
    usage: 'Target groups - Hypotheekadviseurs',
  },
  {
    filename: 'secondhomebeurs.jpg',
    alt: 'Second Home Beurs',
    priority: 'medium',
    usage: 'Target groups - Buitenland',
  },
  {
    filename: 'brabantmakelaar_logo.webp',
    alt: 'De Brabant Makelaar logo',
    priority: 'low',
    usage: 'Testimonials section',
  },
  {
    filename: 'binkpartners_logo.webp',
    alt: 'Bink & Partners logo',
    priority: 'low',
    usage: 'Testimonials section',
  },
  {
    filename: 'binkpartners_avatar.webp',
    alt: 'Pieter - Bink & Partners',
    priority: 'low',
    usage: 'Testimonials section',
  },
  {
    filename: 'ralogosvg.svg',
    alt: 'Real Accelerate logo',
    priority: 'low',
    usage: 'Case study background pattern',
  },
  {
    filename: 'rudyraket.png',
    alt: 'Rudy raket',
    priority: 'low',
    usage: 'How it works decoration',
  },
  {
    filename: 'teamfoto_einde.png',
    alt: 'Teamfoto',
    priority: 'medium',
    usage: 'Final CTA section',
  },
]

async function migrateHomepageImages() {
  console.log('🚀 Starting Homepage Images Migration...\n')
  console.log('⚠️  This script ONLY adds to Media collection')
  console.log('⚠️  No existing data will be modified\n')
  
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
    
    const projectRoot = path.resolve(__dirname, '..')
    const imagesDir = path.join(projectRoot, 'public', 'images')
    
    const results: any[] = []
    const mapping: Record<string, string | number> = {}
    
    console.log(`📂 Source directory: ${imagesDir}\n`)
    console.log(`📦 Processing ${homepageImages.length} images...\n`)
    
    for (const [index, image] of homepageImages.entries()) {
      const imagePath = path.join(imagesDir, image.filename)
      
      console.log(`[${index + 1}/${homepageImages.length}] Processing: ${image.filename}`)
      
      // Check if file exists
      if (!fs.existsSync(imagePath)) {
        console.log(`   ⚠️  File not found, skipping...`)
        results.push({ ...image, status: 'skipped', reason: 'File not found' })
        continue
      }
      
      // Check if already exists in Media collection
      const existing = await payload.find({
        collection: 'media',
        where: {
          filename: {
            equals: image.filename,
          },
        },
        limit: 1,
      })
      
      if (existing.docs.length > 0) {
        console.log(`   ℹ️  Already exists in Media collection`)
        mapping[`/images/${image.filename}`] = existing.docs[0].id
        results.push({ ...image, status: 'exists', id: existing.docs[0].id })
        continue
      }
      
      try {
        // Read file as buffer
        const fileBuffer = fs.readFileSync(imagePath)
        
        // Create media document
        const created = await payload.create({
          collection: 'media',
          data: {
            alt: image.alt,
          },
          filePath: imagePath,
        })
        
        console.log(`   ✅ Uploaded successfully (ID: ${created.id})`)
        mapping[`/images/${image.filename}`] = created.id
        results.push({ ...image, status: 'success', id: created.id })
      } catch (uploadError: any) {
        console.log(`   ❌ Upload failed: ${uploadError?.message || String(uploadError)}`)
        results.push({ ...image, status: 'failed', error: uploadError?.message || String(uploadError) })
      }
    }
    
    // Save mapping to file
    const mappingPath = path.join(__dirname, 'homepage-images-mapping.json')
    fs.writeFileSync(
      mappingPath,
      JSON.stringify({ mapping, timestamp: new Date().toISOString() }, null, 2)
    )
    
    console.log('\n📊 MIGRATION SUMMARY:')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    
    const success = results.filter(r => r.status === 'success').length
    const exists = results.filter(r => r.status === 'exists').length
    const failed = results.filter(r => r.status === 'failed').length
    const skipped = results.filter(r => r.status === 'skipped').length
    
    console.log(`✅ Successfully uploaded: ${success}`)
    console.log(`ℹ️  Already existed: ${exists}`)
    console.log(`❌ Failed: ${failed}`)
    console.log(`⚠️  Skipped: ${skipped}`)
    console.log(`📦 Total processed: ${homepageImages.length}\n`)
    
    if (failed > 0) {
      console.log('❌ FAILED IMAGES:')
      results
        .filter(r => r.status === 'failed')
        .forEach(r => {
          console.log(`   - ${r.filename}: ${r.error}`)
        })
      console.log('')
    }
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    console.log('💾 Mapping saved to: homepage-images-mapping.json\n')
    console.log('👉 Next steps:')
    console.log('   1. Visit http://localhost:3001/admin/collections/media')
    console.log('   2. Verify all images are uploaded correctly')
    console.log('   3. Check thumbnails are generated\n')
    
    process.exit(failed > 0 ? 1 : 0)
  } catch (error: any) {
    console.error('\n❌ Migration failed:', error)
    console.error(error?.stack)
    process.exit(1)
  }
}

migrateHomepageImages()
