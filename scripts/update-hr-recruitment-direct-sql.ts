#!/usr/bin/env tsx
/**
 * Update HR Recruitment page blocks with images - Direct SQL approach
 * Avoids schema migration issues by updating database directly
 * Run with: pnpm tsx scripts/update-hr-recruitment-direct-sql.ts
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'ra-demo-payload.db')

// Load mapping
const mappingPath = path.join(process.cwd(), 'scripts', 'hr-recruitment-images-mapping.json')
if (!fs.existsSync(mappingPath)) {
  console.error('❌ ERROR: Mapping file not found!')
  console.error('   Run upload-hr-recruitment-via-api.ts first')
  process.exit(1)
}

const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))
console.log('🚀 Starting Direct SQL Update for HR Recruitment...\n')

// Find the page ID
console.log('📍 Finding hr-recruitment page...')
const pageQueryResult = execSync(
  `sqlite3 "${DB_PATH}" "SELECT id FROM pages WHERE slug = '/hr-recruitment';"`,
  { encoding: 'utf-8' }
).trim()

if (!pageQueryResult) {
  console.error('❌ ERROR: HR Recruitment page not found!')
  process.exit(1)
}

const pageId = pageQueryResult
console.log(`✅ Found page ID: ${pageId}\n`)

// Helper function to get media ID from mapping
function getMediaId(usage: string, filename: string): string | null {
  const key = `${usage}-${filename}`
  return mapping[key] || null
}

try {
  // Update Hero block
  console.log('📝 Updating HrRecruitmentHero block...')
  const heroImageId = getMediaId('HrRecruitmentHero - main hero image', 'teamfoto_einde.png')
  if (heroImageId) {
    execSync(
      `sqlite3 "${DB_PATH}" "UPDATE pages_blocks_hr_recruitment_hero SET image_id = ${heroImageId}, image_alt = 'HR team at work' WHERE _parent_id = '${pageId}';"`,
      { encoding: 'utf-8' }
    )
    console.log(`✅ Updated Hero: image → Media ID ${heroImageId}`)
  }

  // Update PainPoints block - 3 images in array
  console.log('\n📝 Updating HrRecruitmentPainPoints block...')
  const painPointImages = [
    { mediaId: getMediaId('HrRecruitmentPainPoints - pain point 1', 'placeholder-medium.jpg'), order: '1', alt: 'Recruitment challenge 1' },
    { mediaId: getMediaId('HrRecruitmentPainPoints - pain point 2', 'placeholder-large.jpg'), order: '2', alt: 'Recruitment challenge 2' },
    { mediaId: getMediaId('HrRecruitmentPainPoints - pain point 3', 'placeholder-small.jpg'), order: '3', alt: 'Recruitment challenge 3' },
  ]

  // First, find the parent block ID
  const painPointsBlockId = execSync(
    `sqlite3 "${DB_PATH}" "SELECT id FROM pages_blocks_hr_recruitment_pain_points WHERE _parent_id = '${pageId}' LIMIT 1;"`,
    { encoding: 'utf-8' }
  ).trim()

  if (painPointsBlockId) {
    for (const painPoint of painPointImages) {
      if (painPoint.mediaId) {
        execSync(
          `sqlite3 "${DB_PATH}" "UPDATE pages_blocks_hr_recruitment_pain_points_pain_points SET image_id = ${painPoint.mediaId}, image_alt = '${painPoint.alt}' WHERE _parent_id = '${painPointsBlockId}' AND _order = '${painPoint.order}';"`,
          { encoding: 'utf-8' }
        )
        console.log(`✅ Updated PainPoint ${painPoint.order}: image → Media ID ${painPoint.mediaId}`)
      }
    }
  }

  // Update Transformation block - 2 images
  console.log('\n📝 Updating HrRecruitmentTransformation block...')
  const oldWayImageId = getMediaId('HrRecruitmentTransformation - old way', 'placeholder-thumbnail.jpg')
  const newWayImageId = getMediaId('HrRecruitmentTransformation - new way', 'placeholder-xlarge.jpg')
  
  if (oldWayImageId && newWayImageId) {
    execSync(
      `sqlite3 "${DB_PATH}" "UPDATE pages_blocks_hr_recruitment_transformation SET old_way_image_id = ${oldWayImageId}, new_way_image_id = ${newWayImageId} WHERE _parent_id = '${pageId}';"`,
      { encoding: 'utf-8' }
    )
    console.log(`✅ Updated Transformation: oldWayImage → Media ID ${oldWayImageId}`)
    console.log(`✅ Updated Transformation: newWayImage → Media ID ${newWayImageId}`)
  }

  // Update Methodology block - 1 image
  console.log('\n📝 Updating HrRecruitmentMethodology block...')
  const methodologyImageId = getMediaId('HrRecruitmentMethodology - visual element', 'placeholder.jpg')
  if (methodologyImageId) {
    execSync(
      `sqlite3 "${DB_PATH}" "UPDATE pages_blocks_hr_recruitment_methodology SET methodology_image_id = ${methodologyImageId} WHERE _parent_id = '${pageId}';"`,
      { encoding: 'utf-8' }
    )
    console.log(`✅ Updated Methodology: methodologyImage → Media ID ${methodologyImageId}`)
  }

  // Update WatJeKrijgt block - 4 images in features array
  console.log('\n📝 Updating HrRecruitmentWatJeKrijgt block...')
  const featureImages = [
    { mediaId: getMediaId('HrRecruitmentWatJeKrijgt - feature 1', 'placeholder-medium.jpg'), order: '1' },
    { mediaId: getMediaId('HrRecruitmentWatJeKrijgt - feature 2', 'placeholder-large.jpg'), order: '2' },
    { mediaId: getMediaId('HrRecruitmentWatJeKrijgt - feature 3', 'placeholder-small.jpg'), order: '3' },
    { mediaId: getMediaId('HrRecruitmentWatJeKrijgt - feature 4', 'placeholder-thumbnail.jpg'), order: '4' },
  ]

  // Find the parent block ID
  const watJeKrijgtBlockId = execSync(
    `sqlite3 "${DB_PATH}" "SELECT id FROM pages_blocks_hr_recruitment_wat_je_krijgt WHERE _parent_id = '${pageId}' LIMIT 1;"`,
    { encoding: 'utf-8' }
  ).trim()

  if (watJeKrijgtBlockId) {
    for (const feature of featureImages) {
      if (feature.mediaId) {
        execSync(
          `sqlite3 "${DB_PATH}" "UPDATE pages_blocks_hr_recruitment_wat_je_krijgt_features SET image_id = ${feature.mediaId} WHERE _parent_id = '${watJeKrijgtBlockId}' AND _order = '${feature.order}';"`,
          { encoding: 'utf-8' }
        )
        console.log(`✅ Updated Feature ${feature.order}: image → Media ID ${feature.mediaId}`)
      }
    }
  }

  console.log('\n✅ Direct SQL update complete!')
  console.log('🌐 Check CMS: http://localhost:3000/admin/collections/pages')
  console.log('🌐 Check frontend: http://localhost:3000/hr-recruitment')
  process.exit(0)

} catch (error: any) {
  console.error(`❌ ERROR during SQL updates:`, error.message)
  console.log('\n💡 TIP: Check table names with:')
  console.log(`   sqlite3 "${DB_PATH}" ".tables" | grep hr_recruitment`)
  console.log('\n💡 Check _order values with:')
  console.log(`   sqlite3 "${DB_PATH}" "SELECT _order, title FROM pages_blocks_hr_recruitment_pain_points_pain_points WHERE _parent_id = 'BLOCK_ID';"`)
  process.exit(1)
}
