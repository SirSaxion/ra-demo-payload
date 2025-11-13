#!/usr/bin/env tsx
/**
 * Update Hypotheekadviseurs page blocks with images - Direct SQL approach
 * Avoids schema migration issues by updating database directly
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const dbPath = path.join(process.cwd(), 'ra-demo-payload.db')

// Load mapping
const mappingPath = path.join(process.cwd(), 'scripts', 'hypotheekadviseurs-images-mapping.json')
if (!fs.existsSync(mappingPath)) {
  console.error('❌ ERROR: Mapping file not found!')
  console.error('   Run upload-hypotheekadviseurs-via-api.ts first')
  process.exit(1)
}

const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))
console.log('🚀 Starting Direct SQL Update for Hypotheekadviseurs...\n')
console.log('✅ Loaded image mapping:')
console.log(`   editbv.jpg → Media ID: ${mapping['/images/editbv.jpg']}`)
console.log(`   case-de-brabant-makelaar.webp → Media ID: ${mapping['/images/case-de-brabant-makelaar.webp']}`)
console.log('')

// First, find the page ID
console.log('📍 Finding hypotheekadviseurs page...')
const pageQueryResult = execSync(
  `sqlite3 "${dbPath}" "SELECT id FROM pages WHERE slug = '/hypotheekadviseurs';"`,
  { encoding: 'utf-8' }
).trim()

if (!pageQueryResult) {
  console.error('❌ ERROR: Hypotheekadviseurs page not found!')
  process.exit(1)
}

const pageId = pageQueryResult
console.log(`✅ Found page ID: ${pageId}\n`)

// Update Hero block (editBVImage)
console.log('📝 Updating HypotheekadviseursHero block...')
const heroImageId = mapping['/images/editbv.jpg']
try {
  execSync(
    `sqlite3 "${dbPath}" "UPDATE hyp_hero SET edit_b_v_image_id = ${heroImageId}, edit_b_v_image_alt = 'Edit BV - Duurzaamheid expertise partner' WHERE _parent_id = '${pageId}';"`,
    { encoding: 'utf-8' }
  )
  console.log(`✅ Updated Hero: editBVImage → Media ID ${heroImageId}`)
} catch (error: any) {
  console.error(`❌ ERROR updating Hero:`, error.message)
}

// Update BewezenResultaten block (caseStudyImage)
console.log('\n📝 Updating HypotheekadviseursBewezenResultatenSection block...')
const caseStudyImageId = mapping['/images/case-de-brabant-makelaar.webp']
try {
  execSync(
    `sqlite3 "${dbPath}" "UPDATE hyp_bewezen_resultaten SET case_study_image_id = ${caseStudyImageId}, case_study_image_alt = 'Hypotheekadviseur Edit BV Partnership case study' WHERE _parent_id = '${pageId}';"`,
    { encoding: 'utf-8' }
  )
  console.log(`✅ Updated BewezenResultaten: caseStudyImage → Media ID ${caseStudyImageId}`)
} catch (error: any) {
  console.error(`❌ ERROR updating BewezenResultaten:`, error.message)
}

console.log('\n' + '='.repeat(60))
console.log('📊 DIRECT SQL UPDATE COMPLETE!')
console.log('='.repeat(60))
console.log(`✅ Updated 2 blocks with images`)
console.log(`🌐 Check CMS: http://localhost:3000/admin/collections/pages`)
console.log(`🌐 Check frontend: http://localhost:3000/hypotheekadviseurs`)
console.log('='.repeat(60))
