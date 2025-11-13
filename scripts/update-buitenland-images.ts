/**
 * Update Buitenland Page Images - Connect images to blocks
 * Run with: pnpm tsx scripts/update-buitenland-images.ts
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dbPath = path.resolve(__dirname, '..', 'ra-demo-payload.db')

// Load image mapping
const mappingPath = path.join(__dirname, 'buitenland-images-mapping.json')
if (!fs.existsSync(mappingPath)) {
  console.error('❌ Mapping file not found! Run upload-buitenland-images-via-api.ts first.')
  process.exit(1)
}

const mappingData = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))
const mapping = mappingData.mapping

console.log('🚀 Starting Buitenland Images Update...\n')
console.log('📊 Available images:', Object.keys(mapping).length)

// First, find the page ID for makelaars-buitenland
console.log('\n🔍 Finding makelaars-buitenland page...')
const pageQuery = `SELECT id FROM pages WHERE slug = '/makelaars-buitenland' LIMIT 1;`
const pageResult = execSync(`sqlite3 "${dbPath}" "${pageQuery}"`, { encoding: 'utf-8' }).trim()

if (!pageResult) {
  console.error('❌ Makelaars-buitenland page not found!')
  process.exit(1)
}

const pageId = pageResult
console.log(`✅ Page found (ID: ${pageId})`)

// Update IQI Partnership Section
console.log('\n📝 Updating IQI Partnership Section...')
const iqiLeftId = mapping['/media/placeholder.jpg'] || mapping['/images/placeholder.jpg']
const iqiRightId = mapping['/media/iqiglobal.jpg'] || mapping['/images/iqiglobal.jpg']

if (iqiLeftId && iqiRightId) {
  // Find the block
  const findIqiBlock = `SELECT id FROM pages_blocks_iqi_partnership_section WHERE _parent_id = '${pageId}';`
  const iqiBlockId = execSync(`sqlite3 "${dbPath}" "${findIqiBlock}"`, { encoding: 'utf-8' }).trim()
  
  if (iqiBlockId) {
    execSync(`sqlite3 "${dbPath}" "UPDATE pages_blocks_iqi_partnership_section SET left_image_id = ${iqiLeftId}, right_image_id = ${iqiRightId} WHERE id = '${iqiBlockId}';"`)
    console.log(`   ✅ Updated IQI Partnership Section (left: ${iqiLeftId}, right: ${iqiRightId})`)
  } else {
    console.log('   ⚠️  IQI Partnership Section block not found')
  }
} else {
  console.log('   ⚠️  IQI images not found in mapping')
}

// Update International Pain Points Section
console.log('\n📝 Updating International Pain Points Section...')

const painPointImages = [
  { 
    title: 'Markten & cultuurverschillen',
    mediaId: mapping['/media/dubai_thumb.jpg'] || mapping['/images/dubai_thumb.jpg']
  },
  { 
    title: 'Beperkt bereik onder kopers',
    mediaId: mapping['/media/cat1-640x480.jpg'] || mapping['/images/cat1-640x480.jpg']
  },
  { 
    title: 'Gebrek aan lokale opvolging',
    mediaId: mapping['/media/cat2-640x480.jpg'] || mapping['/images/cat2-640x480.jpg']
  },
  { 
    title: 'Geen grip op marketingkosten',
    mediaId: mapping['/media/editbv.jpg'] || mapping['/images/editbv.jpg']
  },
]

// First, get the pain points block ID
const findPainBlock = `SELECT id FROM intl_pain_points WHERE _parent_id = '${pageId}';`
const painBlockId = execSync(`sqlite3 "${dbPath}" "${findPainBlock}"`, { encoding: 'utf-8' }).trim()

if (painBlockId) {
  // Get current pain points
  const getPainPoints = `SELECT id, title FROM intl_pain_points_pain_points WHERE _parent_id = '${painBlockId}' ORDER BY _order;`
  const painPointsResult = execSync(`sqlite3 "${dbPath}" "${getPainPoints}"`, { encoding: 'utf-8' }).trim()
  
  if (painPointsResult) {
    const painPointRows = painPointsResult.split('\n')
    console.log(`   Found ${painPointRows.length} pain points`)
    
    painPointRows.forEach((row, index) => {
      const [id, title] = row.split('|')
      const imageData = painPointImages[index]
      
      if (imageData && imageData.mediaId) {
        execSync(`sqlite3 "${dbPath}" "UPDATE intl_pain_points_pain_points SET image_id = ${imageData.mediaId} WHERE id = '${id}';"`)
        console.log(`   ✅ Updated pain point "${title}" with image ${imageData.mediaId}`)
      }
    })
  }
} else {
  console.log('   ⚠️  Pain Points Section block not found')
}

// Update International Cases Section (avatars)
console.log('\n📝 Updating International Cases Section...')

const caseAvatarId = mapping['/media/10.EmiroSmolders-Settle-DSC06970-.jpg'] || mapping['/images/10.EmiroSmolders-Settle-DSC06970-.jpg']

// Find the cases block
const findCasesBlock = `SELECT id FROM pages_blocks_international_cases_section WHERE _parent_id = '${pageId}';`
const casesBlockId = execSync(`sqlite3 "${dbPath}" "${findCasesBlock}"`, { encoding: 'utf-8' }).trim()

if (casesBlockId && caseAvatarId) {
  // Get current cases
  const getCases = `SELECT id, name FROM pages_blocks_international_cases_section_cases WHERE _parent_id = '${casesBlockId}' ORDER BY _order LIMIT 1;`
  const casesResult = execSync(`sqlite3 "${dbPath}" "${getCases}"`, { encoding: 'utf-8' }).trim()
  
  if (casesResult) {
    const [caseId, caseName] = casesResult.split('|')
    execSync(`sqlite3 "${dbPath}" "UPDATE pages_blocks_international_cases_section_cases SET avatar_id = ${caseAvatarId} WHERE id = '${caseId}';"`)
    console.log(`   ✅ Updated case "${caseName}" with avatar ${caseAvatarId}`)
  }
} else {
  console.log('   ⚠️  Cases Section block or avatar not found')
}

console.log('\n' + '='.repeat(60))
console.log('✅ Update complete!')
console.log('👉 Check CMS: http://localhost:3000/admin/collections/pages')
console.log('👉 View page: http://localhost:3000/nl/makelaars-buitenland\n')

process.exit(0)
