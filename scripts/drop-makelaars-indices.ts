#!/usr/bin/env tsx
/**
 * Drop all Makelaars-related indices to allow schema migration
 * Run with: pnpm tsx scripts/drop-makelaars-indices.ts
 */

import { execSync } from 'child_process'

const DB_PATH = 'ra-demo-payload.db'

console.log('🔧 Dropping Makelaars-related indices...\n')

// Get all makelaars-related indices
const indicesOutput = execSync(
  `sqlite3 ${DB_PATH} "SELECT name FROM sqlite_master WHERE type='index' AND name LIKE '%makelaars%';"`,
  { encoding: 'utf-8' }
)

const indices = indicesOutput
  .trim()
  .split('\n')
  .filter(Boolean)
  .filter(name => !name.startsWith('sqlite_autoindex')) // Skip auto indices

console.log(`Found ${indices.length} indices to drop\n`)

let dropCount = 0
for (const index of indices) {
  try {
    console.log(`Dropping: ${index}`)
    execSync(`sqlite3 ${DB_PATH} "DROP INDEX IF EXISTS ${index};"`)
    dropCount++
  } catch (error) {
    console.error(`Error dropping ${index}:`, error)
  }
}

console.log(`\n✅ Successfully dropped ${dropCount}/${indices.length} indices`)
console.log('🔄 Now restart the dev server: pnpm dev\n')
