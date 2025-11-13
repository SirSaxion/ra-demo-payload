#!/usr/bin/env tsx
import { execSync } from 'child_process'

const DB_PATH = 'ra-demo-payload.db'

// Get ALL cases-related indices (not just order_idx)
const indices = execSync(
  `sqlite3 ${DB_PATH} "SELECT name FROM sqlite_master WHERE type='index' AND (name LIKE '%cases%' OR name LIKE '%international_cases%');"`,
  { encoding: 'utf-8' }
)
  .trim()
  .split('\n')
  .filter(Boolean)
  .filter(name => !name.startsWith('sqlite_autoindex')) // Skip auto indices

console.log(`Found ${indices.length} indices to drop\n`)

for (const index of indices) {
  console.log(`Dropping: ${index}`)
  try {
    execSync(`sqlite3 ${DB_PATH} "DROP INDEX IF EXISTS ${index};"`)
  } catch (error) {
    console.error(`Failed to drop ${index}:`, error)
  }
}

console.log('\n✅ Done!')
