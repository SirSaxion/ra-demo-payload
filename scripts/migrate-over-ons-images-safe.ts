#!/usr/bin/env tsx
/**
 * Over-ons Images Migration - SAFE VERSION
 * This skips schema push completely, only uploads images
 * Run with: pnpm tsx scripts/migrate-over-ons-images-safe.ts
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

const IMAGES = [
  // Hero section
  { filename: 'teamfoto_einde.png', alt: 'Team Real Accelerate', priority: 'high', usage: 'Hero Section - main team photo' },
  
  // Team section - 8 members
  { filename: '1.EmiroSmolders-Settle-DSC06894-.webp', alt: 'Joep - Founder & CEO', priority: 'high', usage: 'Team Section - Joep' },
  { filename: '2.EmiroSmolders-Settle-DSC06899-.webp', alt: 'Partner Naam - Co-Founder & CTO', priority: 'high', usage: 'Team Section - Partner' },
  { filename: '3.EmiroSmolders-Settle-DSC06907-.webp', alt: 'Nina - Klant succes baas', priority: 'high', usage: 'Team Section - Nina' },
  { filename: '4.EmiroSmolders-Settle-DSC06915-.webp', alt: 'Ravi - Sales tijger', priority: 'high', usage: 'Team Section - Ravi' },
  { filename: '5.EmiroSmolders-Settle-DSC06927-.webp', alt: 'Milo - Creatieve baas', priority: 'high', usage: 'Team Section - Milo' },
  { filename: '6.EmiroSmolders-Settle-DSC06931-.webp', alt: 'Sofie - Data baas', priority: 'high', usage: 'Team Section - Sofie' },
  { filename: '10.EmiroSmolders-Settle-DSC06970-.jpg', alt: 'Alex - Product owner', priority: 'high', usage: 'Team Section - Alex' },
  { filename: 'placeholder.jpg', alt: 'Maya - Design lead', priority: 'medium', usage: 'Team Section - Maya' },
  
  // Partnerships section
  { filename: 'iqiglobal.jpg', alt: 'IQI Global - International partner', priority: 'high', usage: 'Partnerships Section - IQI Global' },
  { filename: 'editbv.jpg', alt: 'SETTL. - Ons eigen makelaarskantoor', priority: 'high', usage: 'Partnerships Section - SETTL.' },
  
  // Office section
  { filename: 'joep-koffie.png', alt: 'Joep met koffie', priority: 'high', usage: 'Office Section - office atmosphere' },
]

// CRITICAL: Disable schema push BEFORE anything else
process.env.PAYLOAD_DISABLE_PUSH = 'true'
process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
process.env.DATABASE_URI = 'file:./ra-demo-payload.db'

async function migrateImages() {
  console.log('🚀 Starting Over-ons Images Migration (SAFE MODE)...\n')
  console.log('⚠️  This script ONLY adds to Media collection')
  console.log('⚠️  Schema push DISABLED\n')
  
  try {
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized (schema push disabled)\n')
    
    const projectRoot = path.resolve(__dirname, '..')
    const imagesDir = path.join(projectRoot, 'public', 'images')
    
    const results: any[] = []
    const mapping: Record<string, string | number> = {}
    
    console.log(`📂 Source: ${imagesDir}\n`)
    console.log(`📦 Processing ${IMAGES.length} images...\n`)
    
    for (const [index, image] of IMAGES.entries()) {
      const imagePath = path.join(imagesDir, image.filename)
      
      console.log(`[${index + 1}/${IMAGES.length}] ${image.filename}`)
      
      // Check if file exists
      if (!fs.existsSync(imagePath)) {
        console.log(`   ⚠️  File not found`)
        results.push({ ...image, status: 'skipped', reason: 'File not found' })
        continue
      }
      
      // Check if already in Media collection
      try {
        const existing = await payload.find({
          collection: 'media',
          where: {
            filename: { equals: image.filename },
          },
          limit: 1,
        })
        
        if (existing.docs.length > 0) {
          console.log(`   ℹ️  Already exists (ID: ${existing.docs[0].id})`)
          mapping[`/images/${image.filename}`] = existing.docs[0].id
          results.push({ ...image, status: 'exists', id: existing.docs[0].id })
          continue
        }
      } catch (findError: any) {
        console.log(`   ⚠️  Could not check existence: ${findError.message}`)
      }
      
      // Upload to Media collection
      try {
        const created = await payload.create({
          collection: 'media',
          data: { alt: image.alt },
          filePath: imagePath,
        })
        
        console.log(`   ✅ Uploaded (ID: ${created.id})`)
        mapping[`/images/${image.filename}`] = created.id
        results.push({ ...image, status: 'success', id: created.id })
      } catch (uploadError: any) {
        console.log(`   ❌ Failed: ${uploadError.message}`)
        results.push({ ...image, status: 'failed', error: uploadError.message })
      }
    }
    
    // Save mapping
    const mappingPath = path.join(__dirname, 'over-ons-images-mapping.json')
    fs.writeFileSync(
      mappingPath,
      JSON.stringify({ mapping, timestamp: new Date().toISOString() }, null, 2)
    )
    
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    
    const success = results.filter(r => r.status === 'success').length
    const exists = results.filter(r => r.status === 'exists').length
    const failed = results.filter(r => r.status === 'failed').length
    const skipped = results.filter(r => r.status === 'skipped').length
    
    console.log(`✅ Uploaded: ${success}`)
    console.log(`ℹ️  Existed: ${exists}`)
    console.log(`❌ Failed: ${failed}`)
    console.log(`⚠️  Skipped: ${skipped}`)
    console.log(`📦 Total: ${IMAGES.length}\n`)
    
    if (failed > 0) {
      console.log('❌ FAILED:')
      results.filter(r => r.status === 'failed').forEach(r => {
        console.log(`   - ${r.filename}: ${r.error}`)
      })
      console.log('')
    }
    
    console.log('💾 Mapping: over-ons-images-mapping.json')
    console.log('\n👉 Next: pnpm tsx scripts/update-over-ons-images.ts\n')
    
    process.exit(failed > 0 ? 1 : 0)
  } catch (error: any) {
    console.error('\n❌ Error:', error.message)
    process.exit(1)
  }
}

migrateImages()
