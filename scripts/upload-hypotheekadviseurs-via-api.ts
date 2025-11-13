#!/usr/bin/env tsx
/**
 * Upload Hypotheekadviseurs images via HTTP API
 * Requires dev server running on port 3000
 * Run with: pnpm tsx scripts/upload-hypotheekadviseurs-via-api.ts
 */

import fs from 'fs'
import path from 'path'

const API_URL = 'http://localhost:3000/api'

const IMAGES = [
  {
    filename: 'editbv.jpg',
    alt: 'Edit BV - Duurzaamheid expertise partner',
    description: 'Edit BV partnership image for hypotheekadviseurs hero section'
  },
  {
    filename: 'case-de-brabant-makelaar.webp',
    alt: 'Hypotheekadviseur Edit BV Partnership case study',
    description: 'Case study image for hypotheekadviseurs bewezen resultaten section'
  }
]

async function uploadViaAPI() {
  console.log('🚀 Starting Hypotheekadviseurs Images Upload via API...\n')
  
  // Check if server is running
  try {
    const healthCheck = await fetch(`${API_URL}/media?limit=1`)
    if (!healthCheck.ok) {
      throw new Error('API not accessible')
    }
  } catch (error) {
    console.error('❌ ERROR: Dev server not running on port 3000!')
    console.error('   Start it with: pnpm dev')
    process.exit(1)
  }

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

      // Check if already exists
      const checkResponse = await fetch(
        `${API_URL}/media?where[filename][equals]=${encodeURIComponent(filename)}&limit=1`
      )
      const existing = await checkResponse.json()

      if (existing.docs && existing.docs.length > 0) {
        console.log(`ℹ️  EXISTS: ${filename} → Media ID: ${existing.docs[0].id}`)
        mapping[`/images/${filename}`] = String(existing.docs[0].id)
        successCount++
        continue
      }

      // Upload new image
      const stats = fs.statSync(sourcePath)
      const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2)
      console.log(`📤 Uploading: ${filename} (${fileSizeInMB}MB)`)

      const fileBuffer = fs.readFileSync(sourcePath)
      const formData = new FormData()
      
      // Create a File object from the buffer
      const file = new File([fileBuffer], filename, {
        type: `image/${path.extname(filename).slice(1).replace('jpg', 'jpeg')}`
      })
      
      formData.append('file', file)
      formData.append('alt', alt)

      const uploadResponse = await fetch(`${API_URL}/media`, {
        method: 'POST',
        body: formData
      })

      if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text()
        throw new Error(`Upload failed: ${uploadResponse.status} - ${errorText}`)
      }

      const uploaded = await uploadResponse.json()
      mapping[`/images/${filename}`] = String(uploaded.doc.id)
      console.log(`✅ SUCCESS: ${filename} → Media ID: ${uploaded.doc.id}`)
      successCount++
      
    } catch (error: any) {
      console.error(`❌ ERROR uploading ${filename}:`, error.message)
    }
  }

  // Save mapping
  const mappingPath = path.join(process.cwd(), 'scripts', 'hypotheekadviseurs-images-mapping.json')
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2))

  console.log('\n' + '='.repeat(60))
  console.log('📊 UPLOAD COMPLETE!')
  console.log('='.repeat(60))
  console.log(`✅ Success: ${successCount}/${IMAGES.length}`)
  console.log(`📄 Mapping: ${mappingPath}`)
  console.log('='.repeat(60))
  console.log('\n👉 Next: Run pnpm tsx scripts/update-hypotheekadviseurs-images.ts\n')

  process.exit(0)
}

uploadViaAPI().catch((error) => {
  console.error('💥 Upload failed:', error)
  process.exit(1)
})
