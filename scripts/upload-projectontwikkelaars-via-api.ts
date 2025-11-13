#!/usr/bin/env tsx
/**
 * Upload Projectontwikkelaars images via HTTP API
 * Requires dev server running on port 3000
 * Run with: pnpm tsx scripts/upload-projectontwikkelaars-via-api.ts
 */

import fs from 'fs'
import path from 'path'

const API_URL = 'http://localhost:3000/api'

const IMAGES = [
  {
    filename: 'emiro_working_at_desk.png',
    alt: 'Project Marketing Machine - Emiro working at desk',
  },
  {
    filename: 'projectontwikkelaar.webp',
    alt: 'Dubai-property.nl - Bewezen projectmarketing expertise',
  },
]

async function uploadViaAPI() {
  console.log('🚀 Starting Projectontwikkelaars Images Upload via API...\n')
  
  // Check if server is running
  try {
    const healthCheck = await fetch(`${API_URL}/media?limit=1`)
    if (!healthCheck.ok) throw new Error('API not accessible')
  } catch (error) {
    console.error('❌ ERROR: Dev server not running on port 3000!')
    console.error('   Start it with: pnpm dev')
    process.exit(1)
  }

  const projectRoot = path.join(process.cwd())
  const mapping: Record<string, string> = {}
  let successCount = 0

  for (const imageData of IMAGES) {
    const { filename, alt } = imageData
    
    // Check in both /images and /media directories
    const possiblePaths = [
      path.join(projectRoot, 'public', 'images', filename),
      path.join(projectRoot, 'public', 'media', filename),
    ]
    
    let sourcePath = ''
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        sourcePath = p
        break
      }
    }

    try {
      if (!sourcePath) {
        console.log(`⚠️  SKIP: ${filename} - File not found in /images or /media`)
        continue
      }

      console.log(`📁 Found: ${filename} at ${path.dirname(sourcePath)}`)

      // Check if already exists
      const checkResponse = await fetch(
        `${API_URL}/media?where[filename][equals]=${encodeURIComponent(filename)}&limit=1`
      )
      const existing = await checkResponse.json()

      if (existing.docs && existing.docs.length > 0) {
        console.log(`ℹ️  EXISTS: ${filename} → Media ID: ${existing.docs[0].id}`)
        const pathKey = sourcePath.includes('/images/') ? `/images/${filename}` : `/media/${filename}`
        mapping[pathKey] = String(existing.docs[0].id)
        successCount++
        continue
      }

      // Upload new image
      const fileBuffer = fs.readFileSync(sourcePath)
      const formData = new FormData()
      
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
      const pathKey = sourcePath.includes('/images/') ? `/images/${filename}` : `/media/${filename}`
      mapping[pathKey] = String(uploaded.doc.id)
      console.log(`✅ SUCCESS: ${filename} → Media ID: ${uploaded.doc.id}`)
      successCount++
      
    } catch (error: any) {
      console.error(`❌ ERROR uploading ${filename}:`, error.message)
    }
  }

  // Save mapping
  const mappingPath = path.join(process.cwd(), 'scripts', 'projectontwikkelaars-images-mapping.json')
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2))

  console.log('\n✅ Upload complete!')
  console.log(`📊 Success: ${successCount}/${IMAGES.length} images`)
  console.log(`📄 Mapping saved: ${mappingPath}`)
  console.log(`👉 Next: Run update-projectontwikkelaars-direct-sql.ts\n`)

  process.exit(0)
}

uploadViaAPI().catch((error) => {
  console.error('💥 Upload failed:', error)
  process.exit(1)
})
