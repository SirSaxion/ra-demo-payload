#!/usr/bin/env tsx
/**
 * Drop all HR Recruitment related indices
 * Fixes schema migration conflicts
 * Run with: pnpm tsx scripts/drop-hr-recruitment-indices.ts
 */

import { execSync } from 'child_process'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'ra-demo-payload.db')

console.log('🔧 Dropping HR Recruitment indices...\n')

try {
  // Get all HR recruitment related indices
  const indices = execSync(
    `sqlite3 "${DB_PATH}" "SELECT name FROM sqlite_master WHERE type='index' AND (name LIKE '%hr_recruitment%' OR name LIKE '%hr%recruitment%');"`,
    { encoding: 'utf-8' }
  )
    .trim()
    .split('\n')
    .filter(Boolean)
    .filter(name => !name.startsWith('sqlite_autoindex')) // Skip auto indices

  console.log(`Found ${indices.length} indices to drop\n`)

  if (indices.length === 0) {
    console.log('✅ No indices to drop')
    process.exit(0)
  }

  for (const index of indices) {
    console.log(`Dropping: ${index}`)
    execSync(`sqlite3 "${DB_PATH}" "DROP INDEX IF EXISTS ${index};"`)
  }

  console.log('\n✅ Done! All HR recruitment indices dropped')
  console.log('👉 Restart dev server to allow schema migration')
  process.exit(0)

} catch (error: any) {
  console.error('❌ ERROR:', error.message)
  process.exit(1)
}
