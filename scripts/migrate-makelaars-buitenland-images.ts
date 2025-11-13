#!/usr/bin/env tsx
/**
 * Migration Script: Makelaars-Buitenland Page Images to Payload
 * 
 * This script migrates images used on the /makelaars-buitenland page.
 * 
 * Images to migrate:
 * - placeholder.jpg (323KB) - used 5x in pain points and IQI sections
 * - iqiglobal.jpg (106KB) - used in IQI partnership section
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

const BUITENLAND_IMAGES: ImageData[] = [
  {
    filename: 'placeholder.jpg',
    alt: 'Placeholder image for international real estate challenges',
    description: 'Generic placeholder image used in pain points section'
  },
  {
    filename: 'iqiglobal.jpg',
    alt: 'IQI Global Partnership',
    description: 'IQI Global network logo/image for partnership section'
  }
]

async function migrateImages() {
  console.log('🚀 Starting Makelaars-Buitenland Images Migration...\n')

  const payload = await getPayload({ config })
  const sourceDir = path.join(process.cwd(), 'public', 'images')
  const mapping: Record<string, string> = {}
  let successCount = 0
  let errorCount = 0

  for (const imageData of BUITENLAND_IMAGES) {
    const { filename, alt, description } = imageData
    const sourcePath = path.join(sourceDir, filename)

    try {
      // Check if file exists
      if (!fs.existsSync(sourcePath)) {
        console.log(`⚠️  SKIP: ${filename} - File not found`)
        errorCount++
        continue
      }

      // Get file stats
      const stats = fs.statSync(sourcePath)
      const fileSizeInKB = (stats.size / 1024).toFixed(0)

      console.log(`📤 Uploading: ${filename} (${fileSizeInKB}KB)`)

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
  const mappingPath = path.join(process.cwd(), 'scripts', 'makelaars-buitenland-images-mapping.json')
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2))

  console.log('\n' + '='.repeat(60))
  console.log('📊 MIGRATION COMPLETE!')
  console.log('='.repeat(60))
  console.log(`✅ Success: ${successCount}/${BUITENLAND_IMAGES.length}`)
  console.log(`❌ Errors: ${errorCount}`)
  console.log(`📄 Mapping saved to: ${mappingPath}`)
  console.log('='.repeat(60))

  process.exit(0)
}

migrateImages().catch((error) => {
  console.error('💥 Migration failed:', error)
  process.exit(1)
})
