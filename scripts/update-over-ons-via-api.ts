#!/usr/bin/env tsx
/**
 * Update Over-ons Page via HTTP API
 * Uses the running dev server instead of direct database access
 * Run with: pnpm tsx scripts/update-over-ons-via-api.ts
 */

import fs from 'fs'
import path from 'path'

const API_URL = 'http://localhost:3000/api'

async function updatePage() {
  console.log('🚀 Updating Over-ons Page via API...\n')

  // Load mapping
  const mappingPath = path.join(process.cwd(), 'scripts', 'over-ons-images-mapping.json')
  const { mapping } = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))
  console.log(`✅ Loaded ${Object.keys(mapping).length} mappings\n`)

  // Find page
  console.log('📄 Finding over-ons page...')
  const pageResponse = await fetch(`${API_URL}/pages?where[slug][equals]=/over-ons&limit=1`)
  const pageData: any = await pageResponse.json()

  if (!pageData.docs || pageData.docs.length === 0) {
    console.error('❌ Page not found!')
    process.exit(1)
  }

  const page = pageData.docs[0]
  console.log(`✅ Found page (ID: ${page.id})\n`)

  // Update blocks
  console.log('🔄 Updating blocks...\n')
  
  const updatedBlocks = page.blocks?.map((block: any) => {
    console.log(`📝 ${block.blockType}`)

    // Hero
    if (block.blockType === 'overOnsHeroSection') {
      const imageId = mapping['/images/teamfoto_einde.png']
      if (imageId) {
        console.log(`   ✏️  Setting hero image → ${imageId}`)
        return { ...block, image: imageId }
      }
    }

    // Team
    if (block.blockType === 'overOnsTeamSection') {
      const memberImages = [
        mapping['/images/1.EmiroSmolders-Settle-DSC06894-.webp'],
        mapping['/images/2.EmiroSmolders-Settle-DSC06899-.webp'],
        mapping['/images/3.EmiroSmolders-Settle-DSC06907-.webp'],
        mapping['/images/4.EmiroSmolders-Settle-DSC06915-.webp'],
        mapping['/images/5.EmiroSmolders-Settle-DSC06927-.webp'],
        mapping['/images/6.EmiroSmolders-Settle-DSC06931-.webp'],
        mapping['/images/10.EmiroSmolders-Settle-DSC06970-.jpg'],
        mapping['/images/placeholder.jpg'],
      ]
      console.log(`   ✏️  Updating ${block.members?.length} members`)
      return {
        ...block,
        members: block.members?.map((member: any, i: number) => ({
          ...member,
          image: memberImages[i] || member.image,
        })),
      }
    }

    // Partnerships
    if (block.blockType === 'overOnsPartnershipsSection') {
      const partnerImages: Record<string, string> = {
        'IQI Global': mapping['/images/iqiglobal.jpg'],
        'SETTL.': mapping['/images/editbv.jpg'],
      }
      console.log(`   ✏️  Updating ${block.partnerships?.length} partnerships`)
      return {
        ...block,
        partnerships: block.partnerships?.map((p: any) => ({
          ...p,
          image: partnerImages[p.title] || p.image,
        })),
      }
    }

    // Office
    if (block.blockType === 'overOnsOfficeSection') {
      const imageId = mapping['/images/joep-koffie.png']
      if (imageId) {
        console.log(`   ✏️  Setting office image → ${imageId}`)
        return { ...block, image: imageId }
      }
    }

    return block
  })

  // Save via API
  console.log('\n💾 Saving page...')
  
  const updateResponse = await fetch(`${API_URL}/pages/${page.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ blocks: updatedBlocks }),
  })

  if (!updateResponse.ok) {
    throw new Error(`HTTP ${updateResponse.status}: ${updateResponse.statusText}`)
  }

  console.log('\n✅ SUCCESS! Page updated!\n')
  console.log('👉 Check CMS: http://localhost:3000/admin/collections/pages')
  console.log('👉 Check frontend: http://localhost:3000/over-ons\n')
  
  process.exit(0)
}

updatePage().catch((error) => {
  console.error('\n❌ Error:', error.message)
  process.exit(1)
})
