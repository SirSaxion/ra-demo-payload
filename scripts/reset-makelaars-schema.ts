#!/usr/bin/env tsx
/**
 * Reset Makelaars Schema - Drop all makelaars tables and indices for fresh migration
 * Run with: pnpm tsx scripts/reset-makelaars-schema.ts
 * DANGER: This will delete all makelaars block data! Backup first!
 */

import { execSync } from 'child_process'
import fs from 'fs'

const DB_PATH = 'ra-demo-payload.db'
const BACKUP_PATH = 'ra-demo-payload.db.before-schema-reset'

console.log('⚠️  WARNING: This will delete all makelaars blocks!')
console.log('📦 Creating backup...\n')

// Create backup
if (!fs.existsSync(BACKUP_PATH)) {
  execSync(`cp ${DB_PATH} ${BACKUP_PATH}`)
  console.log(`✅ Backup created: ${BACKUP_PATH}\n`)
}

console.log('🔧 Dropping all makelaars-related tables...\n')

// Get all makelaars tables (both main and versioned)
const tablesOutput = execSync(
  `sqlite3 ${DB_PATH} "SELECT name FROM sqlite_master WHERE type='table' AND name LIKE '%makelaars%';"`,
  { encoding: 'utf-8' }
)

const tables = tablesOutput.trim().split('\n').filter(Boolean)

console.log(`Found ${tables.length} tables to drop\n`)

for (const table of tables) {
  try {
    console.log(`Dropping table: ${table}`)
    execSync(`sqlite3 ${DB_PATH} "DROP TABLE IF EXISTS ${table};"`)
  } catch (error) {
    console.error(`Error dropping ${table}:`, error)
  }
}

console.log(`\n✅ All makelaars tables dropped`)
console.log('🔄 Now start dev server to recreate schema: pnpm dev\n')
console.log(`💡 To restore backup: cp ${BACKUP_PATH} ${DB_PATH}\n`)
