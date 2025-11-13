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
  {
    filename: 'emiro_working_at_desk.png',
    alt: 'Emiro aan het werk achter zijn laptop',
    description: 'Emiro working at desk - used in Makelaars Bewezen Systeem section'
  },
  {
    filename: '1.EmiroSmolders-Settle-DSC06894-.webp',
    alt: 'De Brabant Makelaar office',
    description: 'De Brabant Makelaar result image'
  },
  {
    filename: '10.EmiroSmolders-Settle-DSC06970-.jpg',
    alt: 'Marco van Barneveld office',
    description: 'Marco van Barneveld franchise result image'
  },
  {
    filename: 'cat1.jpeg',
    alt: 'Placeholder avatar 1',
    description: 'Placeholder avatar for makelaars hero section'
  },
  {
    filename: 'cat2.jpeg',
    alt: 'Placeholder avatar 2',
    description: 'Placeholder avatar for makelaars hero section'
  },
  {
    filename: 'cat3.png',
    alt: 'Placeholder avatar 3',
    description: 'Placeholder avatar for makelaars hero section'
  }
]

async function migrateImages() {
  console.log('🚀 Starting Makelaars Images Migration...\n')

  const payload = await getPayload({ config })
  const sourceDir = path.join(process.cwd(), 'public', 'images')
  const mapping: Record<string, string> = {}
  let successCount = 0
  let errorCount = 0

  for (const imageData of MAKELAARS_IMAGES) {
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
