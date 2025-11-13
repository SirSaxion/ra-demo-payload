#!/usr/bin/env tsx
import { getPayload } from 'payload'
import config from '@/payload.config'
import fs from 'fs'
import path from 'path'

const IMAGES = [
  { filename: '2.EmiroSmolders-Settle-DSC06899-.webp', alt: 'Team member 2' },
  { filename: '3.EmiroSmolders-Settle-DSC06907-.webp', alt: 'Team member 3' },
  { filename: '4.EmiroSmolders-Settle-DSC06915-.webp', alt: 'Team member 4' },
  { filename: '5.EmiroSmolders-Settle-DSC06927-.webp', alt: 'Team member 5' },
  { filename: '6.EmiroSmolders-Settle-DSC06931-.webp', alt: 'Team member 6' },
  { filename: 'joep-koffie.png', alt: 'Joep' }
]

async function migrateImages() {
  console.log('🚀 Starting Over-ons Images Migration...\n')

  const payload = await getPayload({ config })
  const sourceDir = path.join(process.cwd(), 'public', 'images')
  const mapping: Record<string, string> = {}
  let successCount = 0

  for (const imageData of IMAGES) {
    const { filename, alt } = imageData
    const sourcePath = path.join(sourceDir, filename)

    try {
      if (!fs.existsSync(sourcePath)) {
        console.log(`⚠️  SKIP: ${filename}`)
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

      mapping[`/images/${filename}`] = String(media.id)

      console.log(`✅ SUCCESS: ${filename} → Media ID: ${media.id}`)
      successCount++
    } catch (error) {
      console.error(`❌ ERROR: ${filename}:`, error)
    }
  }

  const mappingPath = path.join(process.cwd(), 'scripts', 'over-ons-images-mapping.json')
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2))

  console.log('\n' + '='.repeat(60))
  console.log('📊 COMPLETE!')
  console.log('='.repeat(60))
  console.log(`✅ Success: ${successCount}/${IMAGES.length}`)
  console.log(`📄 Mapping: ${mappingPath}`)
  console.log('='.repeat(60))

  process.exit(0)
}

migrateImages().catch((error) => {
  console.error('💥 Failed:', error)
  process.exit(1)
})
