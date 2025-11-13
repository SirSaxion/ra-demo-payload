#!/usr/bin/env tsx
/**
 * Update Over-ons Page - Direct SQL (bypasses auth issues)
 * Run with: pnpm tsx scripts/update-over-ons-direct-sql.ts
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const dbPath = path.join(process.cwd(), 'ra-demo-payload.db')

console.log('🚀 Updating Over-ons Page (Direct SQL)...\n')

// Load mapping
const mappingPath = path.join(process.cwd(), 'scripts', 'over-ons-images-mapping.json')
const { mapping } = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))

console.log('✅ Loaded mappings\n')

// Image IDs
const heroImageId = mapping['/images/teamfoto_einde.png']
const teamImages = [
  mapping['/images/1.EmiroSmolders-Settle-DSC06894-.webp'],
  mapping['/images/2.EmiroSmolders-Settle-DSC06899-.webp'],
  mapping['/images/3.EmiroSmolders-Settle-DSC06907-.webp'],
  mapping['/images/4.EmiroSmolders-Settle-DSC06915-.webp'],
  mapping['/images/5.EmiroSmolders-Settle-DSC06927-.webp'],
  mapping['/images/6.EmiroSmolders-Settle-DSC06931-.webp'],
  mapping['/images/10.EmiroSmolders-Settle-DSC06970-.jpg'],
  mapping['/images/placeholder.jpg'],
]
const iqiImageId = mapping['/images/iqiglobal.jpg']
const editbvImageId = mapping['/images/editbv.jpg']
const officeImageId = mapping['/images/joep-koffie.png']

console.log('📝 Updating blocks...\n')

// 1. Hero Section
console.log('1️⃣  Hero Section')
execSync(`sqlite3 "${dbPath}" "UPDATE pages_blocks_over_ons_hero_section SET image_id = ${heroImageId} WHERE image_id IS NULL OR image_id != ${heroImageId};"`)
console.log(`   ✅ Set hero image → ${heroImageId}`)

// 2. Team Members (update each member)
console.log('\n2️⃣  Team Section')
for (let i = 0; i < teamImages.length; i++) {
  const imageId = teamImages[i]
  // Update by _order (assuming members are in order 0-7)
  execSync(`sqlite3 "${dbPath}" "UPDATE pages_blocks_over_ons_team_section_members SET image_id = ${imageId} WHERE _order = '${i}';"`)
  console.log(`   ✅ Member ${i + 1} → ${imageId}`)
}

// 3. Partnerships
console.log('\n3️⃣  Partnerships Section')
// IQI Global is usually first (_order = '0')
execSync(`sqlite3 "${dbPath}" "UPDATE pages_blocks_over_ons_partnerships_section_partnerships SET image_id = ${iqiImageId} WHERE _order = '0';"`)
console.log(`   ✅ IQI Global → ${iqiImageId}`)
// SETTL is second (_order = '1')
execSync(`sqlite3 "${dbPath}" "UPDATE pages_blocks_over_ons_partnerships_section_partnerships SET image_id = ${editbvImageId} WHERE _order = '1';"`)
console.log(`   ✅ SETTL. → ${editbvImageId}`)

// 4. Office Section
console.log('\n4️⃣  Office Section')
execSync(`sqlite3 "${dbPath}" "UPDATE pages_blocks_over_ons_office_section SET image_id = ${officeImageId} WHERE image_id IS NULL OR image_id != ${officeImageId};"`)
console.log(`   ✅ Set office image → ${officeImageId}`)

console.log('\n✅ SUCCESS! Page updated!\n')
console.log('👉 Reload CMS: http://localhost:3000/admin/collections/pages')
console.log('👉 Check frontend: http://localhost:3000/over-ons\n')

process.exit(0)
