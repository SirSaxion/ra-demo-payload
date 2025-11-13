/**
 * Upload Buitenland Images via API
 * Run with dev server: pnpm tsx scripts/upload-buitenland-images-via-api.ts
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const API_URL = 'http://localhost:3000/api'

interface ImageUpload {
  filename: string
  alt: string
  priority: 'high' | 'medium' | 'low'
  usage: string
}

const images: ImageUpload[] = [
  {
    filename: 'placeholder.jpg',
    alt: 'Lokale beperkingen - zelfstandig beginnen',
    priority: 'high',
    usage: 'IQI Partnership Section - left image (VOOR scenario)',
  },
  {
    filename: 'iqiglobal.jpg',
    alt: 'IQI Global Partnership',
    priority: 'high',
    usage: 'IQI Partnership Section - right image (NA scenario)',
  },
  // Pain points images - we'll use generic placeholder or real images
  {
    filename: 'dubai_thumb.jpg',
    alt: 'Internationale markten en cultuurverschillen',
    priority: 'medium',
    usage: 'Pain Points - Markten & cultuurverschillen',
  },
  {
    filename: 'placeholder.jpg',
    alt: 'Beperkt bereik onder kopers',
    priority: 'medium',
    usage: 'Pain Points - Beperkt bereik',
  },
  {
    filename: 'placeholder.jpg',
    alt: 'Gebrek aan lokale opvolging',
    priority: 'medium',
    usage: 'Pain Points - Lokale opvolging',
  },
  {
    filename: 'editbv.jpg',
    alt: 'Geen grip op marketingkosten',
    priority: 'medium',
    usage: 'Pain Points - Marketingkosten',
  },
  // Case avatars
  {
    filename: '10.EmiroSmolders-Settle-DSC06970-.jpg',
    alt: 'Bali Resort Development',
    priority: 'medium',
    usage: 'International Cases - Bali avatar',
  },
]

async function uploadImages() {
  console.log('🚀 Starting Buitenland Images Upload via API...\n')

  const projectRoot = path.resolve(__dirname, '..')
  const mapping: Record<string, string | number> = {}
  let uploadedCount = 0
  let existingCount = 0
  let failedCount = 0

  for (const [index, image] of images.entries()) {
    console.log(`\n[${index + 1}/${images.length}] Processing: ${image.filename}`)

    // Try both /public/media and /public/images
    const possiblePaths = [
      path.join(projectRoot, 'public', 'media', image.filename),
      path.join(projectRoot, 'public', 'images', image.filename),
    ]

    let imagePath = ''
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        imagePath = p
        console.log(`   📁 Found in: ${path.dirname(p).split('/').slice(-2).join('/')}`)
        break
      }
    }

    if (!imagePath) {
      console.log(`   ⚠️  File not found in /public/media or /public/images, skipping...`)
      failedCount++
      continue
    }

    try {
      // Check if already exists
      const checkUrl = `${API_URL}/media?where[filename][equals]=${image.filename}&limit=1`
      const checkResponse = await fetch(checkUrl)
      
      if (!checkResponse.ok) {
        throw new Error(`HTTP ${checkResponse.status}: ${checkResponse.statusText}`)
      }

      const existing = await checkResponse.json()

      if (existing.docs && existing.docs.length > 0) {
        console.log(`   ℹ️  Already exists (ID: ${existing.docs[0].id})`)
        mapping[`/images/${image.filename}`] = existing.docs[0].id
        mapping[`/media/${image.filename}`] = existing.docs[0].id
        existingCount++
        continue
      }

      // Upload new image
      const fileBuffer = fs.readFileSync(imagePath)
      const blob = new Blob([fileBuffer])

      const formData = new FormData()
      formData.append('file', blob, image.filename)
      formData.append('alt', image.alt)

      const uploadResponse = await fetch(`${API_URL}/media`, {
        method: 'POST',
        body: formData,
      })

      if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text()
        throw new Error(`HTTP ${uploadResponse.status}: ${errorText}`)
      }

      const created = await uploadResponse.json()
      console.log(`   ✅ Uploaded (ID: ${created.doc.id})`)
      mapping[`/images/${image.filename}`] = created.doc.id
      mapping[`/media/${image.filename}`] = created.doc.id
      uploadedCount++

    } catch (error: any) {
      console.log(`   ❌ Failed: ${error?.message}`)
      failedCount++
    }

    // Small delay to avoid overwhelming the API
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  // Save mapping
  const mappingPath = path.join(__dirname, 'buitenland-images-mapping.json')
  fs.writeFileSync(
    mappingPath,
    JSON.stringify({ 
      mapping, 
      timestamp: new Date().toISOString(),
      stats: {
        total: images.length,
        uploaded: uploadedCount,
        existing: existingCount,
        failed: failedCount,
      }
    }, null, 2)
  )

  console.log('\n' + '='.repeat(60))
  console.log('✅ Upload complete!')
  console.log(`📊 Stats: ${uploadedCount} uploaded, ${existingCount} existing, ${failedCount} failed`)
  console.log(`💾 Mapping saved to: buitenland-images-mapping.json\n`)
  
  process.exit(failedCount > 0 ? 1 : 0)
}

uploadImages()
