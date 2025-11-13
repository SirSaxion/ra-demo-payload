#!/usr/bin/env tsx
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
  console.log('🔧 Optimizing editbv.jpg...\n')

  const filename = 'editbv.jpg'
  const sourcePath = path.join(process.cwd(), 'public', 'images', filename)
  const outputDir = path.join(process.cwd(), 'public', 'media')

  if (!fs.existsSync(sourcePath)) {
    console.error(`❌ Source not found: ${sourcePath}`)
    process.exit(1)
  }

  const originalStats = fs.statSync(sourcePath)
  console.log(`📁 Original: ${(originalStats.size / (1024 * 1024)).toFixed(2)}MB`)

  try {
    const metadata = await sharp(sourcePath).metadata()
    console.log(`📐 Dimensions: ${metadata.width}x${metadata.height}px\n`)

    console.log(`📤 Creating optimized original...`)
    const optimizedPath = path.join(outputDir, filename)
    
    await sharp(sourcePath)
      .jpeg({ quality: 85, progressive: true })
      .toFile(optimizedPath)
    
    const optimizedStats = fs.statSync(optimizedPath)
    console.log(`✅ Optimized: ${(optimizedStats.size / (1024 * 1024)).toFixed(2)}MB\n`)

    for (const size of IMAGE_SIZES) {
      const variantFilename = filename.replace('.jpg', `-${size.width}x${size.height}.jpg`)
      const variantPath = path.join(outputDir, variantFilename)

      console.log(`📤 Creating ${size.name} (${size.width}x${size.height})...`)

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

  } catch (error) {
    console.error('❌ Failed:', error)
    process.exit(1)
  }
}

optimizeImage()
