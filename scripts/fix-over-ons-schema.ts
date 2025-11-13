#!/usr/bin/env tsx
/**
 * Fix Over-ons Schema Conflicts
 * Drops conflicting indices so migration can proceed
 */

import { fileURLToPath } from 'url'
import path from 'path'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dbPath = path.join(__dirname, '..', 'ra-demo-payload.db')

console.log('🔧 Fixing over-ons schema conflicts...\n')
console.log(`📂 Database: ${dbPath}\n`)

const indicesToDrop = [
  'pages_blocks_over_ons_hero_section_order_idx',
  'pages_blocks_over_ons_team_section_members_order_idx',
  'pages_blocks_over_ons_partnerships_section_partnerships_order_idx',
  'pages_blocks_over_ons_office_section_order_idx',
  '_pages_v_blocks_over_ons_hero_section_order_idx',
  '_pages_v_blocks_over_ons_team_section_members_order_idx',
  '_pages_v_blocks_over_ons_partnerships_section_partnerships_order_idx',
  '_pages_v_blocks_over_ons_office_section_order_idx',
]

for (const idx of indicesToDrop) {
  try {
    execSync(`sqlite3 "${dbPath}" "DROP INDEX IF EXISTS ${idx};"`, { stdio: 'ignore' })
    console.log(`✅ Dropped: ${idx}`)
  } catch (error: any) {
    console.log(`⚠️  Skip: ${idx}`)
  }
}

console.log('\n✅ Schema fixed! Now run: pnpm tsx scripts/migrate-over-ons-images-safe.ts\n')
