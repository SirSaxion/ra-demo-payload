#!/usr/bin/env tsx
import { execSync } from 'child_process'
import path from 'path'

const dbPath = path.join(process.cwd(), 'ra-demo-payload.db')

const indicesToDrop = [
  'pages_blocks_hyp_hero_order_idx',
  '_pages_v_blocks_hyp_hero_order_idx',
  'pages_blocks_hyp_bewezen_resultaten_order_idx',
  '_pages_v_blocks_hyp_bewezen_resultaten_order_idx',
  // Also drop the international one that's causing the error
  'intl_pain_points_pain_points_order_idx'
]

console.log('🔧 Fixing Hypotheekadviseurs Schema Conflicts...\n')

for (const idx of indicesToDrop) {
  try {
    execSync(`sqlite3 "${dbPath}" "DROP INDEX IF EXISTS ${idx};"`, { stdio: 'pipe' })
    console.log(`✅ Dropped: ${idx}`)
  } catch (error) {
    console.log(`⚠️  Skip: ${idx} (doesn't exist or already dropped)`)
  }
}

console.log('\n✅ Schema conflicts fixed!')
console.log('👉 Now run: pnpm tsx scripts/migrate-hypotheekadviseurs-images.ts\n')
