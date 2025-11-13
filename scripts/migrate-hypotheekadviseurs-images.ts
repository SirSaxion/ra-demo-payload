#!/usr/bin/env tsx
import { getPayload } from 'payload'
import config from '@/payload.config'
import fs from 'fs'
import path from 'path'

const IMAGES = [
  {
    filename: 'editbv.jpg',
    alt: 'Edit BV - Duurzaamheid expertise partner',
    description: 'Edit BV partnership image for hypotheekadviseurs hero section'
  }
]

async function migrateImages() {
  console.log('🚀 Starting Hypotheekadviseurs Images Migration...\n')

  const payload = await getPayload({ config })
  const sourceDir = path.join(process.cwd(), 'public', 'images')
  const mapping: Record<string, string> = {}
  let successCount = 0

  for (const imageData of IMAGES) {
    const { filename, alt } = imageData
    const sourcePath = path.join(sourceDir, filename)

    try {
      if (!fs.existsSync(sourcePath)) {
        console.log(`⚠️  SKIP: ${filename} - File not found`)
        continue
      }

      const stats = fs.statSync(sourcePath)
      const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2)

      console.log(`📤 Uploading: ${filename} (${fileSizeInMB}MB)`)

      const fileBuffer = fs.readFileSync(sourcePath)

      const media = await payload.create({
        collection: 'media',
        data: { alt },
        file: {
          data: fileBuffer,
          mimetype: `image/${path.extname(filename).slice(1)}`,
          name: filename,
          size: stats.size,
        },
      })

      const oldPath = `/images/${filename}`
      mapping[oldPath] = String(media.id)

      console.log(`✅ SUCCESS: ${filename} → Media ID: ${media.id}`)
      successCount++
    } catch (error) {
      console.error(`❌ ERROR uploading ${filename}:`, error)
    }
  }

  const mappingPath = path.join(process.cwd(), 'scripts', 'hypotheekadviseurs-images-mapping.json')
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2))

  console.log('\n' + '='.repeat(60))
  console.log('📊 MIGRATION COMPLETE!')
  console.log('='.repeat(60))
  console.log(`✅ Success: ${successCount}/${IMAGES.length}`)
  console.log(`📄 Mapping: ${mappingPath}`)
  console.log('='.repeat(60))

  process.exit(0)
}

migrateImages().catch((error) => {
  console.error('💥 Migration failed:', error)
  process.exit(1)
})
