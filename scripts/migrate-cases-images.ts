#!/usr/bin/env tsx
import { getPayload } from 'payload'
import config from '@/payload.config'
import fs from 'fs'
import path from 'path'

const IMAGES = [
  // Hero section
  { filename: 'rudy-thumbs-up.png', alt: 'Rudy met duim omhoog' },
  
  // BestVariants section
  { filename: 'case-de-brabant-makelaar.webp', alt: 'Team De Brabant Makelaar' },
  { filename: 'thoma_thumb.png', alt: 'Thoma Post - 31 afspraken in maand 1' },
  { filename: 'dubai_thumb.jpg', alt: 'Dubai Property project - $8.5M+ verkocht' },
  
  // VideoTestimonials section
  { filename: 'videothumb1.jpeg', alt: 'Amory van De Brabant Makelaar' },
  { filename: 'videothumb2.jpeg', alt: 'Pieter van Bink & Partners' },
  { filename: 'videothumb3.jpeg', alt: 'Thoma Post Makelaardij' },
  
  // ProjectsShowcase section (website previews)
  { filename: 'brabantmakelaar-website.png', alt: 'De Brabant Makelaar website screenshot' },
  { filename: 'paulthijssen-website.png', alt: 'Paul Thijssen Makelaardij website screenshot' },
  { filename: 'makelaarsvanamsterdam-website.png', alt: 'Makelaars van Amsterdam website screenshot' }
]

async function migrateImages() {
  console.log('🚀 Starting Cases Images Migration...\n')

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

  const mappingPath = path.join(process.cwd(), 'scripts', 'cases-images-mapping.json')
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
