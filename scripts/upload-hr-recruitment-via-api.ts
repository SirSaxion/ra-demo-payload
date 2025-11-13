#!/usr/bin/env tsx
/**
 * Upload HR Recruitment images via HTTP API
 * Requires dev server running on port 3000
 * Run with: pnpm tsx scripts/upload-hr-recruitment-via-api.ts
 */

import fs from 'fs'
import path from 'path'

const API_URL = 'http://localhost:3000/api'

const IMAGES = [
  // Hero image
  {
    filename: 'teamfoto_einde.png',
    alt: 'HR team at work',
    usage: 'HrRecruitmentHero - main hero image',
  },
  // Pain Points images (3)
  {
    filename: 'placeholder-medium.jpg',
    alt: 'Recruitment challenge 1',
    usage: 'HrRecruitmentPainPoints - pain point 1',
  },
  {
    filename: 'placeholder-large.jpg',
    alt: 'Recruitment challenge 2',
    usage: 'HrRecruitmentPainPoints - pain point 2',
  },
  {
    filename: 'placeholder-small.jpg',
    alt: 'Recruitment challenge 3',
    usage: 'HrRecruitmentPainPoints - pain point 3',
  },
  // Transformation images (2)
  {
    filename: 'placeholder-thumbnail.jpg',
    alt: 'Traditionele recruitment',
    usage: 'HrRecruitmentTransformation - old way',
  },
  {
    filename: 'placeholder-xlarge.jpg',
    alt: 'Moderne recruitment strategie',
    usage: 'HrRecruitmentTransformation - new way',
  },
  // Methodology image
  {
    filename: 'placeholder.jpg',
    alt: 'HR methodologie',
    usage: 'HrRecruitmentMethodology - visual element',
  },
  // WatJeKrijgt features (4)
  {
    filename: 'placeholder-medium.jpg',
    alt: 'Feature 1',
    usage: 'HrRecruitmentWatJeKrijgt - feature 1',
  },
  {
    filename: 'placeholder-large.jpg',
    alt: 'Feature 2',
    usage: 'HrRecruitmentWatJeKrijgt - feature 2',
  },
  {
    filename: 'placeholder-small.jpg',
    alt: 'Feature 3',
    usage: 'HrRecruitmentWatJeKrijgt - feature 3',
  },
  {
    filename: 'placeholder-thumbnail.jpg',
    alt: 'Feature 4',
    usage: 'HrRecruitmentWatJeKrijgt - feature 4',
  },
]

async function uploadViaAPI() {
  console.log('🚀 Starting HR Recruitment Images Upload via API...\n')
  
  // Check if server is running
  try {
    const healthCheck = await fetch(`${API_URL}/media?limit=1`)
    if (!healthCheck.ok) throw new Error('API not accessible')
  } catch (error) {
    console.error('❌ ERROR: Dev server not running on port 3000!')
    console.error('   Make sure dev server is running')
    process.exit(1)
  }

  const sourceDir = path.join(process.cwd(), 'public', 'images')
  const mapping: Record<string, string> = {}
  let successCount = 0

  for (const imageData of IMAGES) {
    const { filename, alt, usage } = imageData
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
        const mappingKey = `${usage}-${filename}`
        mapping[mappingKey] = String(existing.docs[0].id)
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
      const mappingKey = `${usage}-${filename}`
      mapping[mappingKey] = String(uploaded.doc.id)
      console.log(`✅ SUCCESS: ${filename} → Media ID: ${uploaded.doc.id} (${usage})`)
      successCount++
      
    } catch (error: any) {
      console.error(`❌ ERROR uploading ${filename}:`, error.message)
    }
  }

  // Save mapping
  const mappingPath = path.join(process.cwd(), 'scripts', 'hr-recruitment-images-mapping.json')
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2))

  console.log('\n✅ Upload complete!')
  console.log(`📊 Uploaded: ${successCount}/${IMAGES.length} images`)
  console.log(`📄 Mapping saved: ${mappingPath}`)
  console.log(`👉 Next: Run update-hr-recruitment-direct-sql.ts\n`)

  process.exit(0)
}

uploadViaAPI().catch((error) => {
  console.error('💥 Upload failed:', error)
  process.exit(1)
})
