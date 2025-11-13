#!/usr/bin/env tsx
/**
 * Update Projectontwikkelaars page blocks with images - Direct SQL approach
 * Avoids schema migration issues by updating database directly
 * Run with: pnpm tsx scripts/update-projectontwikkelaars-direct-sql.ts
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const dbPath = path.join(process.cwd(), 'ra-demo-payload.db')

// Load mapping
const mappingPath = path.join(process.cwd(), 'scripts', 'projectontwikkelaars-images-mapping.json')
if (!fs.existsSync(mappingPath)) {
  console.error('❌ ERROR: Mapping file not found!')
  console.error('   Run upload-projectontwikkelaars-via-api.ts first')
  process.exit(1)
}

const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))
console.log('🚀 Starting Direct SQL Update for Projectontwikkelaars...\n')

// Find the page ID
console.log('📍 Finding projectontwikkelaars page...')
const pageQueryResult = execSync(
  `sqlite3 "${dbPath}" "SELECT id FROM pages WHERE slug = '/projectontwikkelaars';"`,
  { encoding: 'utf-8' }
).trim()

if (!pageQueryResult) {
  console.error('❌ ERROR: Page not found!')
  process.exit(1)
}

const pageId = pageQueryResult
console.log(`✅ Found page ID: ${pageId}\n`)

// Get image IDs from mapping
const heroImageId = mapping['/images/projectontwikkelaar.webp']
const bewezenImageId = mapping['/images/emiro_working_at_desk.png']

console.log('📊 Image Mapping:')
console.log(`   Hero showcase image: Media ID ${heroImageId}`)
console.log(`   Bewezen aanpak image: Media ID ${bewezenImageId}\n`)

// Update Hero block (both locales)
console.log('📝 Updating Hero blocks...')
try {
  execSync(
    `sqlite3 "${dbPath}" "UPDATE proj_hero SET showcase_image_id = ${heroImageId} WHERE _parent_id = '${pageId}';"`,
    { encoding: 'utf-8' }
  )
  const count = execSync(
    `sqlite3 "${dbPath}" "SELECT COUNT(*) FROM proj_hero WHERE _parent_id = '${pageId}' AND showcase_image_id = ${heroImageId};"`,
    { encoding: 'utf-8' }
  ).trim()
  console.log(`✅ Updated ${count} Hero block(s): showcase_image → Media ID ${heroImageId}`)
} catch (error: any) {
  console.error(`❌ ERROR updating Hero:`, error.message)
}

// Update Bewezen Aanpak block (both locales)
console.log('\n📝 Updating Bewezen Aanpak blocks...')
try {
  execSync(
    `sqlite3 "${dbPath}" "UPDATE proj_bewezen SET image_id = ${bewezenImageId} WHERE _parent_id = '${pageId}';"`,
    { encoding: 'utf-8' }
  )
  const count = execSync(
    `sqlite3 "${dbPath}" "SELECT COUNT(*) FROM proj_bewezen WHERE _parent_id = '${pageId}' AND image_id = ${bewezenImageId};"`,
    { encoding: 'utf-8' }
  ).trim()
  console.log(`✅ Updated ${count} Bewezen Aanpak block(s): image → Media ID ${bewezenImageId}`)
} catch (error: any) {
  console.error(`❌ ERROR updating Bewezen Aanpak:`, error.message)
}

console.log('\n✅ Direct SQL update complete!')
console.log('🌐 Check CMS: http://localhost:3000/admin/collections/pages')
console.log('🌐 Check frontend: http://localhost:3000/projectontwikkelaars')
console.log('\n👉 Next: Verify with Playwright MCP')
