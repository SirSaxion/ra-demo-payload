#!/usr/bin/env tsx
/**
 * Update Over-ons Page Images - Connect uploaded images to page blocks
 * Run with: pnpm tsx scripts/update-over-ons-images.ts
 * 
 * Prerequisites:
 * 1. Dev server must have run once to migrate schema
 * 2. migrate-over-ons-images.ts must have run successfully
 * 3. over-ons-images-mapping.json must exist
 */

// CRITICAL: Disable schema push
process.env.PAYLOAD_DISABLE_PUSH = 'true'
process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
process.env.DATABASE_URI = 'file:./ra-demo-payload.db'

import { getPayload } from 'payload'
import config from '@/payload.config'
import fs from 'fs'
import path from 'path'

async function updateOverOnsImages() {
  console.log('🚀 Starting Over-ons Images Update...\n')

  // Load image mapping
  const mappingPath = path.join(process.cwd(), 'scripts', 'over-ons-images-mapping.json')
  
  if (!fs.existsSync(mappingPath)) {
    console.error('❌ Mapping file not found!')
    console.error('   Run: pnpm tsx scripts/migrate-over-ons-images.ts first')
    process.exit(1)
  }

  const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))
  console.log(`✅ Loaded ${Object.keys(mapping).length} image mappings\n`)

  const payload = await getPayload({ config })
  console.log('✅ Payload initialized\n')

  // Find the over-ons page
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: '/over-ons' },
    },
    limit: 1,
  })

  if (pages.docs.length === 0) {
    console.error('❌ Over-ons page not found!')
    process.exit(1)
  }

  const page = pages.docs[0]
  console.log(`✅ Found page: ${page.title} (ID: ${page.id})\n`)

  // Update blocks with image IDs
  const updatedBlocks = page.blocks?.map((block: any) => {
    console.log(`📝 Processing block: ${block.blockType}`)

    // 1. Over-ons-HeroSection
    if (block.blockType === 'overOnsHeroSection') {
      const imageId = mapping['/images/teamfoto_einde-640x480.png']
      if (imageId) {
        console.log(`   ✏️  Updating hero image → Media ID: ${imageId}`)
        return {
          ...block,
          image: imageId,
        }
      }
    }

    // 2. Over-ons-TeamSection
    if (block.blockType === 'overOnsTeamSection') {
      console.log(`   ✏️  Updating ${block.members?.length || 0} team members`)
      
      const memberImages = [
        mapping['/images/1.EmiroSmolders-Settle-DSC06894--640x480.webp'],
        mapping['/images/2.EmiroSmolders-Settle-DSC06899--640x480.webp'],
        mapping['/images/3.EmiroSmolders-Settle-DSC06907--640x480.webp'],
        mapping['/images/4.EmiroSmolders-Settle-DSC06915--640x480.webp'],
        mapping['/images/5.EmiroSmolders-Settle-DSC06927--640x480.webp'],
        mapping['/images/6.EmiroSmolders-Settle-DSC06931--640x480.webp'],
        mapping['/images/10.EmiroSmolders-Settle-DSC06970--640x480.jpg'],
        mapping['/images/placeholder.jpg'],
      ]

      return {
        ...block,
        members: block.members?.map((member: any, index: number) => ({
          ...member,
          image: memberImages[index] || member.image,
        })),
      }
    }

    // 3. Over-ons-PartnershipsSection
    if (block.blockType === 'overOnsPartnershipsSection') {
      console.log(`   ✏️  Updating ${block.partnerships?.length || 0} partnerships`)

      const partnerImages = {
        'IQI Global': mapping['/images/iqiglobal.jpg'],
        'SETTL.': mapping['/images/editbv-640x480.jpg'],
      }

      return {
        ...block,
        partnerships: block.partnerships?.map((partnership: any) => ({
          ...partnership,
          image: partnerImages[partnership.title as keyof typeof partnerImages] || partnership.image,
        })),
      }
    }

    // 4. Over-ons-OfficeSection
    if (block.blockType === 'overOnsOfficeSection') {
      const imageId = mapping['/images/joep-koffie-640x480.png']
      if (imageId) {
        console.log(`   ✏️  Updating office image → Media ID: ${imageId}`)
        return {
          ...block,
          image: imageId,
        }
      }
    }

    return block
  })

  // Save the updated page
  console.log('\n💾 Saving updated page...')
  
  await payload.update({
    collection: 'pages',
    id: page.id,
    data: { blocks: updatedBlocks },
  })

  console.log('\n' + '='.repeat(60))
  console.log('✅ SUCCESS! Over-ons page images updated!')
  console.log('='.repeat(60))
  console.log('👉 Next steps:')
  console.log('   1. Check CMS: http://localhost:3000/admin/collections/pages')
  console.log('   2. Open over-ons page and verify all blocks have Media selectors')
  console.log('   3. Test changing an image in CMS and refresh frontend')
  console.log('='.repeat(60))

  process.exit(0)
}

updateOverOnsImages().catch((error) => {
  console.error('💥 Failed:', error)
  process.exit(1)
})
