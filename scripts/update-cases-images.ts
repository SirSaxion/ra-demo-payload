#!/usr/bin/env tsx
/**
 * Update Cases Page Images - Connect images to blocks
 * Run with: pnpm tsx scripts/update-cases-images.ts
 */

import { getPayload } from 'payload'
import config from '@/payload.config'
import fs from 'fs'
import path from 'path'

async function updatePageImages() {
  console.log('🚀 Starting Cases Images Update...\n')

  if (!process.env.PAYLOAD_SECRET) {
    process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
  }
  if (!process.env.DATABASE_URI) {
    process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
  }

  process.env.PAYLOAD_DISABLE_PUSH = 'true'

  const payload = await getPayload({ config })
  console.log('✅ Payload initialized\n')

  // Load image mapping
  const mappingPath = path.join(process.cwd(), 'scripts', 'cases-images-mapping.json')
  if (!fs.existsSync(mappingPath)) {
    console.error('❌ Mapping file not found! Run migrate-cases-images.ts first.')
    process.exit(1)
  }

  const mapping: Record<string, string> = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))
  console.log('📄 Loaded mapping:', Object.keys(mapping).length, 'images\n')

  // Find the cases page
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: '/cases' },
    },
    limit: 1,
  })

  if (pages.docs.length === 0) {
    console.error('❌ Cases page not found!')
    process.exit(1)
  }

  const page = pages.docs[0]
  console.log(`✅ Page found (ID: ${page.id})\n`)

  // Update blocks with images
  const updatedBlocks = page.blocks?.map((block: any) => {
    // CasesHero
    if (block.blockType === 'casesHero') {
      console.log('   ✏️  Updating CasesHero')
      return {
        ...block,
        image: mapping['/images/rudy-thumbs-up.png'],
      }
    }

    // CasesBestVariants
    if (block.blockType === 'casesBestVariants') {
      console.log('   ✏️  Updating CasesBestVariants')
      return {
        ...block,
        featuredImage: mapping['/images/case-de-brabant-makelaar.webp'],
        otherCases: block.otherCases?.map((c: any) => {
          if (c.company === 'Thoma Post') {
            return { ...c, image: mapping['/images/thoma_thumb.png'] }
          }
          if (c.company === 'Dubai Property') {
            return { ...c, image: mapping['/images/dubai_thumb.jpg'] }
          }
          return c
        }),
      }
    }

    // CasesVideoTestimonials
    if (block.blockType === 'casesVideoTestimonials') {
      console.log('   ✏️  Updating CasesVideoTestimonials')
      return {
        ...block,
        videos: block.videos?.map((video: any) => ({
          ...video,
          thumbnail: mapping[`/images/videothumb${video.id}.jpeg`],
        })),
      }
    }

    // CasesProjectsShowcase
    if (block.blockType === 'casesProjectsShowcase') {
      console.log('   ✏️  Updating CasesProjectsShowcase')
      return {
        ...block,
        projects: [
          {
            caseStudyId: 'brabant-makelaar',
            websitePreview: mapping['/images/brabantmakelaar-website.png'],
          },
          {
            caseStudyId: 'paul-thijssen',
            websitePreview: mapping['/images/paulthijssen-website.png'],
          },
          {
            caseStudyId: 'makelaars-amsterdam',
            websitePreview: mapping['/images/makelaarsvanamsterdam-website.png'],
          },
        ],
      }
    }

    return block
  })

  // Save
  await payload.update({
    collection: 'pages',
    id: page.id,
    data: { blocks: updatedBlocks },
  })

  console.log('\n✅ Update complete!')
  console.log('👉 Check CMS: http://localhost:3000/admin/collections/pages\n')
  process.exit(0)
}

updatePageImages().catch((error) => {
  console.error('💥 Failed:', error)
  process.exit(1)
})
