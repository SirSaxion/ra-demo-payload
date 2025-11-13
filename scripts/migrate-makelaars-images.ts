#!/usr/bin/env tsx
/**
 * Migration Script: Makelaars Page Images to Payload
 * 
 * This script migrates ONLY the unique images used on the /makelaars page
 * that weren't already migrated from the homepage.
 * 
 * NEW Images to migrate:
 * - emiro_working_at_desk.png (2.1MB)
 * - 1.EmiroSmolders-Settle-DSC06894-.webp (1.2MB)
 * - 10.EmiroSmolders-Settle-DSC06970-.jpg (19MB!)
 * - cat1.jpeg, cat2.jpeg, cat3.png (placeholder avatars)
 * 
 * Safety: Only ADDS to media collection, no modifications to existing data
 */

import { getPayload } from 'payload'
import config from '@/payload.config'
import fs from 'fs'
import path from 'path'

interface ImageData {
  filename: string
  alt: string
  description: string
}

const MAKELAARS_IMAGES: ImageData[] = [
  // Hero avatars
  {
    filename: 'brabantmakelaar_avatar.webp',
    alt: 'Amory - De Brabant Makelaar',
    description: 'Avatar for Makelaars hero section'
  },
  {
    filename: 'binkpartners_avatar.webp',
    alt: 'Pieter - Bink & Partners',
    description: 'Avatar for Makelaars hero section'
  },
  {
    filename: 'paulthijssen_avatar.webp',
    alt: 'Paul - Paul Thijssen Makelaardij',
    description: 'Avatar for Makelaars hero section'
  },
  // BewezenSysteemSection decorative image
  {
    filename: 'emiro_working_at_desk.png',
    alt: 'Emiro aan het werk achter zijn laptop',
    description: 'Emiro working at desk - used in Makelaars Bewezen Systeem section'
  },
  // ResultsBentoGrid logo
  {
    filename: 'brabantmakelaar_logo.webp',
    alt: 'De Brabant Makelaar logo',
    description: 'Logo for De Brabant Makelaar result card'
  },
  // ResultsBentoGrid result images
  {
    filename: '1.EmiroSmolders-Settle-DSC06894-.webp',
    alt: 'De Brabant Makelaar kantoor',
    description: 'De Brabant Makelaar result image'
  },
  {
    filename: '10.EmiroSmolders-Settle-DSC06970-.jpg',
    alt: 'Marco van Barneveld kantoor',
    description: 'Marco van Barneveld franchise result image'
  },
  {
    filename: 'teamfoto_einde.png',
    alt: 'Thoma Post team foto',
    description: 'Thoma Post result image'
  }
]

async function migrateImages() {
  console.log('🚀 Starting Makelaars Images Migration...\n')

  const payload = await getPayload({ config })
  const mapping: Record<string, string> = {}
  let successCount = 0
  let errorCount = 0

  for (const imageData of MAKELAARS_IMAGES) {
    const { filename, alt, description } = imageData
    
    // Try both directories
    let sourcePath = path.join(process.cwd(), 'public', 'media', filename)
    if (!fs.existsSync(sourcePath)) {
      sourcePath = path.join(process.cwd(), 'public', 'images', filename)
    }

    try {
      // Check if file exists
      if (!fs.existsSync(sourcePath)) {
        console.log(`⚠️  SKIP: ${filename} - File not found in media/ or images/`)
        errorCount++
        continue
      }

      // Get file stats
      const stats = fs.statSync(sourcePath)
      const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2)

      console.log(`📤 Uploading: ${filename} (${fileSizeInMB}MB)`)

      // Read file
      const fileBuffer = fs.readFileSync(sourcePath)

      // Upload to Payload Media collection
      const media = await payload.create({
        collection: 'media',
        data: {
          alt,
        },
        file: {
          data: fileBuffer,
          mimetype: `image/${path.extname(filename).slice(1)}`,
          name: filename,
          size: stats.size,
        },
      })

      // Store mapping
      const oldPath = `/images/${filename}`
      mapping[oldPath] = String(media.id)

      console.log(`✅ SUCCESS: ${filename} → Media ID: ${media.id}`)
      successCount++
    } catch (error) {
      console.error(`❌ ERROR uploading ${filename}:`, error)
      errorCount++
    }
  }

  // Save mapping file
  const mappingPath = path.join(process.cwd(), 'scripts', 'makelaars-images-mapping.json')
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2))

  console.log('\n' + '='.repeat(60))
  console.log('📊 MIGRATION COMPLETE!')
  console.log('='.repeat(60))
  console.log(`✅ Success: ${successCount}/${MAKELAARS_IMAGES.length}`)
  console.log(`❌ Errors: ${errorCount}`)
  console.log(`📄 Mapping saved to: ${mappingPath}`)
  console.log('='.repeat(60))

  process.exit(0)
}

migrateImages().catch((error) => {
  console.error('💥 Migration failed:', error)
  process.exit(1)
})
