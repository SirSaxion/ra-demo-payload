#!/usr/bin/env tsx
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const IMAGES = [
  'rudy-thumbs-up.png',
  'thoma_thumb.png',
  'dubai_thumb.jpg',
  'videothumb1.jpeg',
  'videothumb2.jpeg',
  'videothumb3.jpeg'
]

const SIZES = [
  { name: 'thumbnail', width: 400, height: 300 },
  { name: 'small', width: 640, height: 480 },
  { name: 'medium', width: 1024, height: 768 },
  { name: 'large', width: 1920, height: 1440 },
]

async function optimizeImages() {
  console.log('🔧 Optimizing Cases Images...\n')

  const sourceDir = path.join(process.cwd(), 'public', 'images')
  const outputDir = path.join(process.cwd(), 'public', 'media')

  for (const filename of IMAGES) {
    const sourcePath = path.join(sourceDir, filename)
    
    if (!fs.existsSync(sourcePath)) {
      console.log(`⚠️  SKIP: ${filename}`)
      continue
    }

    const ext = path.extname(filename)
    const baseName = path.basename(filename, ext)
    
    const originalStats = fs.statSync(sourcePath)
    console.log(`📁 ${filename}: ${(originalStats.size / (1024 * 1024)).toFixed(2)}MB`)

    try {
      // Optimized original
      const optimizedPath = path.join(outputDir, filename)
      const format = ext === '.png' ? 'png' : 'jpeg'
      
      if (format === 'png') {
        await sharp(sourcePath).png({ quality: 85, compressionLevel: 8 }).toFile(optimizedPath)
      } else {
        await sharp(sourcePath).jpeg({ quality: 85, progressive: true }).toFile(optimizedPath)
      }
      
      const optimizedStats = fs.statSync(optimizedPath)
      console.log(`✅ Optimized: ${(optimizedStats.size / (1024 * 1024)).toFixed(2)}MB`)

      // Variants
      for (const size of SIZES) {
        const variantFilename = `${baseName}-${size.width}x${size.height}${ext === '.png' ? '.png' : '.jpg'}`
        const variantPath = path.join(outputDir, variantFilename)

        if (format === 'png') {
          await sharp(sourcePath)
            .resize(size.width, size.height, { fit: 'cover', position: 'center' })
            .png({ quality: 82, compressionLevel: 8 })
            .toFile(variantPath)
        } else {
          await sharp(sourcePath)
            .resize(size.width, size.height, { fit: 'cover', position: 'center' })
            .jpeg({ quality: 82, progressive: true })
            .toFile(variantPath)
        }

        const variantStats = fs.statSync(variantPath)
        console.log(`  ${size.name}: ${(variantStats.size / 1024).toFixed(0)}KB`)
      }
      
      console.log('')
    } catch (error) {
      console.error(`❌ Failed ${filename}:`, error)
    }
  }

  console.log('='.repeat(60))
  console.log('🎉 COMPLETE!')
  console.log('='.repeat(60))
}

optimizeImages()
