#!/usr/bin/env tsx
import { getPayload } from 'payload'
import config from '@/payload.config'
import fs from 'fs'
import path from 'path'

async function updatePageImages() {
  console.log('🚀 Starting Hypotheekadviseurs Images Update...\n')

  const payload = await getPayload({ config })
  
  // Load mapping
  const mappingPath = path.join(process.cwd(), 'scripts', 'hypotheekadviseurs-images-mapping.json')
  if (!fs.existsSync(mappingPath)) {
    console.error('❌ ERROR: Mapping file not found!')
    console.error('   Run migrate-hypotheekadviseurs-images.ts first')
    process.exit(1)
  }
  
  const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))
  console.log('✅ Loaded image mapping\n')

  // Find the page
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: '/hypotheekadviseurs' }
    },
    limit: 1
  })

  if (pages.docs.length === 0) {
    console.error('❌ ERROR: Hypotheekadviseurs page not found!')
    process.exit(1)
  }

  const page = pages.docs[0]
  console.log(`✅ Found page: ${page.slug} (ID: ${page.id})\n`)

  // Update blocks with images
  let updateCount = 0
  const updatedBlocks = page.blocks?.map((block: any) => {
    if (block.blockType === 'hypotheekadviseursHero') {
      console.log('📝 Updating hypotheekadviseursHero block...')
      const editBVImageId = mapping['/images/editbv.jpg']
      if (editBVImageId) {
        console.log(`   ✅ Setting editBVImage to Media ID: ${editBVImageId}`)
        updateCount++
        return {
          ...block,
          editBVImage: editBVImageId,
          editBVImageAlt: 'Edit BV - Duurzaamheid expertise partner'
        }
      }
    }
    
    if (block.blockType === 'hypotheekadviseursBewezenResultatenSection') {
      console.log('📝 Updating hypotheekadviseursBewezenResultatenSection block...')
      const caseStudyImageId = mapping['/images/case-de-brabant-makelaar.webp']
      if (caseStudyImageId) {
        console.log(`   ✅ Setting caseStudyImage to Media ID: ${caseStudyImageId}`)
        updateCount++
        return {
          ...block,
          caseStudyImage: caseStudyImageId,
          caseStudyImageAlt: 'Hypotheekadviseur Edit BV Partnership case study'
        }
      }
    }
    
    return block
  })

  // Save updated page
  await payload.update({
    collection: 'pages',
    id: page.id,
    data: {
      blocks: updatedBlocks
    }
  })

  console.log('\n' + '='.repeat(60))
  console.log('📊 UPDATE COMPLETE!')
  console.log('='.repeat(60))
  console.log(`✅ Updated ${updateCount} blocks with images`)
  console.log(`🌐 Check CMS: http://localhost:3000/admin/collections/pages`)
  console.log('='.repeat(60))

  process.exit(0)
}

updatePageImages().catch((error) => {
  console.error('💥 Update failed:', error)
  process.exit(1)
})
