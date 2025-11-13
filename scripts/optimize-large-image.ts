#!/usr/bin/env tsx
/**
 * Optimize Large Image: Marco van Barneveld (19MB)
 * 
 * This script manually optimizes the 10.EmiroSmolders-Settle-DSC06970-.jpg
 * which is too large (6336x9504px, 19MB) for Payload to auto-process.
 * 
 * Generates optimized variants:
 * - 400x300 (thumbnail)
 * - 640x480 (small)
 * - 1024x768 (medium)
 * - 1920x1440 (large)
 */

import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const IMAGE_SIZES = [
  { name: 'thumbnail', width: 400, height: 300 },
  { name: 'small', width: 640, height: 480 },
  { name: 'medium', width: 1024, height: 768 },
  { name: 'large', width: 1920, height: 1440 },
]

async function optimizeImage() {
  console.log('🔧 Starting Manual Image Optimization...\n')

  const filename = '10.EmiroSmolders-Settle-DSC06970-.jpg'
  const sourcePath = path.join(process.cwd(), 'public', 'images', filename)
  const outputDir = path.join(process.cwd(), 'public', 'media')

  // Check if source exists
  if (!fs.existsSync(sourcePath)) {
    console.error(`❌ Source file not found: ${sourcePath}`)
    process.exit(1)
  }

  // Get original file info
  const originalStats = fs.statSync(sourcePath)
  console.log(`📁 Original file: ${(originalStats.size / (1024 * 1024)).toFixed(2)}MB`)

  try {
    // Get image metadata
    const metadata = await sharp(sourcePath).metadata()
    console.log(`📐 Original dimensions: ${metadata.width}x${metadata.height}px\n`)

    // First, create a reasonably compressed "original" for /media
    console.log(`📤 Creating optimized original...`)
    const optimizedOriginalPath = path.join(outputDir, filename)
    
    await sharp(sourcePath)
      .jpeg({ quality: 85, progressive: true }) // Compress to 85% quality
      .toFile(optimizedOriginalPath)
    
    const optimizedStats = fs.statSync(optimizedOriginalPath)
    const savedOriginal = originalStats.size - optimizedStats.size
    console.log(`✅ Optimized original: ${(optimizedStats.size / (1024 * 1024)).toFixed(2)}MB (saved ${(savedOriginal / (1024 * 1024)).toFixed(2)}MB)\n`)

    // Generate size variants
    for (const size of IMAGE_SIZES) {
      const variantFilename = filename.replace('.jpg', `-${size.width}x${size.height}.jpg`)
      const variantPath = path.join(outputDir, variantFilename)

      console.log(`📤 Creating ${size.name} variant (${size.width}x${size.height})...`)

      await sharp(sourcePath)
        .resize(size.width, size.height, {
          fit: 'cover',
          position: 'center',
        })
        .jpeg({ quality: 82, progressive: true })
        .toFile(variantPath)

      const variantStats = fs.statSync(variantPath)
      console.log(`✅ ${size.name}: ${(variantStats.size / 1024).toFixed(0)}KB`)
    }

    console.log('\n' + '='.repeat(60))
    console.log('🎉 OPTIMIZATION COMPLETE!')
    console.log('='.repeat(60))
    console.log(`✅ Generated 5 files (1 optimized original + 4 variants)`)
    console.log(`📂 Location: ${outputDir}`)
    console.log('='.repeat(60))

  } catch (error) {
    console.error('❌ Optimization failed:', error)
    process.exit(1)
  }
}

optimizeImage()
