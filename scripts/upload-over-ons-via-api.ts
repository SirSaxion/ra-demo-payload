#!/usr/bin/env tsx
/**
 * Upload Over-ons Images via HTTP API
 * Uses the running dev server instead of direct database access
 * Run with: pnpm tsx scripts/upload-over-ons-via-api.ts
 */

import fs from 'fs'
import path from 'path'

const API_URL = 'http://localhost:3000/api'

const IMAGES = [
  { filename: 'teamfoto_einde.png', alt: 'Team Real Accelerate' },
  { filename: '1.EmiroSmolders-Settle-DSC06894-.webp', alt: 'Joep - Founder & CEO' },
  { filename: '2.EmiroSmolders-Settle-DSC06899-.webp', alt: 'Partner Naam - Co-Founder & CTO' },
  { filename: '3.EmiroSmolders-Settle-DSC06907-.webp', alt: 'Nina - Klant succes baas' },
  { filename: '4.EmiroSmolders-Settle-DSC06915-.webp', alt: 'Ravi - Sales tijger' },
  { filename: '5.EmiroSmolders-Settle-DSC06927-.webp', alt: 'Milo - Creatieve baas' },
  { filename: '6.EmiroSmolders-Settle-DSC06931-.webp', alt: 'Sofie - Data baas' },
  { filename: '10.EmiroSmolders-Settle-DSC06970-.jpg', alt: 'Alex - Product owner' },
  { filename: 'placeholder.jpg', alt: 'Maya - Design lead' },
  { filename: 'iqiglobal.jpg', alt: 'IQI Global - International partner' },
  { filename: 'editbv.jpg', alt: 'SETTL. - Ons eigen makelaarskantoor' },
  { filename: 'joep-koffie.png', alt: 'Joep met koffie' },
]

async function uploadImages() {
  console.log('🚀 Uploading Over-ons Images via API...\n')
  console.log(`🌐 API: ${API_URL}\n`)

  const imagesDir = path.join(process.cwd(), 'public', 'images')
  const mapping: Record<string, string> = {}
  const results: any[] = []

  for (const [index, image] of IMAGES.entries()) {
    const imagePath = path.join(imagesDir, image.filename)
    
    console.log(`[${index + 1}/${IMAGES.length}] ${image.filename}`)

    // Check if file exists
    if (!fs.existsSync(imagePath)) {
      console.log(`   ⚠️  File not found`)
      results.push({ ...image, status: 'skipped' })
      continue
    }

    // Check if already exists
    try {
      const checkResponse = await fetch(`${API_URL}/media?where[filename][equals]=${image.filename}&limit=1`)
      const checkData: any = await checkResponse.json()
      
      if (checkData.docs && checkData.docs.length > 0) {
        console.log(`   ℹ️  Already exists (ID: ${checkData.docs[0].id})`)
        mapping[`/images/${image.filename}`] = checkData.docs[0].id
        results.push({ ...image, status: 'exists', id: checkData.docs[0].id })
        continue
      }
    } catch (error: any) {
      console.log(`   ⚠️  Could not check: ${error.message}`)
    }

    // Upload via API
    try {
      const fileBuffer = fs.readFileSync(imagePath)
      const blob = new Blob([fileBuffer], { type: 'image/*' })
      
      const formData = new FormData()
      formData.append('file', blob, image.filename)
      formData.append('alt', image.alt)

      const response = await fetch(`${API_URL}/media`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data: any = await response.json()
      console.log(`   ✅ Uploaded (ID: ${data.doc.id})`)
      mapping[`/images/${image.filename}`] = data.doc.id
      results.push({ ...image, status: 'success', id: data.doc.id })
    } catch (error: any) {
      console.log(`   ❌ Failed: ${error.message}`)
      results.push({ ...image, status: 'failed', error: error.message })
    }
  }

  // Save mapping
  const mappingPath = path.join(process.cwd(), 'scripts', 'over-ons-images-mapping.json')
  fs.writeFileSync(
    mappingPath,
    JSON.stringify({ mapping, timestamp: new Date().toISOString() }, null, 2)
  )

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

  const success = results.filter(r => r.status === 'success').length
  const exists = results.filter(r => r.status === 'exists').length
  const failed = results.filter(r => r.status === 'failed').length
  const skipped = results.filter(r => r.status === 'skipped').length

  console.log(`✅ Uploaded: ${success}`)
  console.log(`ℹ️  Existed: ${exists}`)
  console.log(`❌ Failed: ${failed}`)
  console.log(`⚠️  Skipped: ${skipped}`)
  console.log(`📦 Total: ${IMAGES.length}\n`)

  console.log('💾 Mapping: over-ons-images-mapping.json')
  console.log('\n👉 Next: pnpm tsx scripts/update-over-ons-images.ts\n')

  process.exit(failed > 0 ? 1 : 0)
}

uploadImages()
