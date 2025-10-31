/**
 * Check if all images used in homepage exist
 * Run with: npx tsx scripts/check-images.mjs
 */

import fs from 'fs'
import path from 'path'

const imagesToCheck = [
  '/images/case-de-brabant-makelaar.webp',
  '/images/32.EmiroSmolders-Settle-DSC07215--compressed.webp',
  '/images/leadgen.webp',
  '/images/42.EmiroSmolders-Settle-DSC07252--compressed.webp',
  '/images/rudybrief.webp',
  '/images/joeptelefoon.webp',
  '/images/47.EmiroSmolders-Settle-DSC07264--compressed.webp',
  '/images/remax.jpg',
  '/images/recreatie.jpg',
  '/images/hypotheekvisie.jpg',
  '/images/secondhomebeurs.jpg',
  '/images/brabantmakelaar_logo.webp',
  '/images/brabantmakelaar_avatar.webp',
  '/images/binkpartners_logo.webp',
  '/images/binkpartners_avatar.webp'
]

console.log('🖼️  Checking homepage images...\n')

let allExist = true

imagesToCheck.forEach((img) => {
  const fullPath = path.join(process.cwd(), 'public', img)
  const exists = fs.existsSync(fullPath)
  
  if (exists) {
    console.log(`✅ ${img}`)
  } else {
    console.log(`❌ MISSING: ${img}`)
    allExist = false
  }
})

console.log(`\n${allExist ? '✅ All images exist!' : '❌ Some images are missing'}`)

process.exit(allExist ? 0 : 1)
