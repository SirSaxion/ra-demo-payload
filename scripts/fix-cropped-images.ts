/**
 * Fix Cropped Images - Reoptimize without forced aspect ratio
 * 
 * Fixes:
 * 1. rudyraket.png → rudyraket.webp (no crop)
 * 2. EmiroSmolders #45 → emiro_presentatie.webp (no crop)
 */

import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PROJECT_ROOT = path.resolve(__dirname, '..')

interface ImageConfig {
  source: string
  outputName: string
  description: string
}

const images: ImageConfig[] = [
  {
    source: 'public/images/rudyraket.png',
    outputName: 'rudyraket.webp',
    description: 'Rudy raket - man zwaait (was PNG, nu WebP zonder crop)',
  },
  {
    source: 'public/images/45.EmiroSmolders-Settle-DSC07258-.jpg',
    outputName: 'emiro_presentatie.webp',
    description: 'Emiro presentatie - voor "geen standaard marketingbureau"',
  },
]

async function fixCroppedImages() {
  console.log('🔧 Fixing cropped images - preserving aspect ratio\n')
  
  for (const img of images) {
    const sourcePath = path.join(PROJECT_ROOT, img.source)
    
    if (!fs.existsSync(sourcePath)) {
      console.log(`❌ Source not found: ${img.source}`)
      continue
    }
    
    console.log(`\n📸 Processing: ${img.description}`)
    console.log(`   Source: ${img.source}`)
    
    // Get original dimensions
    const metadata = await sharp(sourcePath).metadata()
    console.log(`   Original: ${metadata.width}x${metadata.height}px`)
    
    // Create optimized variants WITHOUT forcing aspect ratio
    const variants = [
      { suffix: '', maxWidth: 1920, quality: 85 },
      { suffix: '-large', maxWidth: 1200, quality: 85 },
      { suffix: '-medium', maxWidth: 800, quality: 82 },
      { suffix: '-small', maxWidth: 400, quality: 80 },
      { suffix: '-thumbnail', maxWidth: 150, quality: 75 },
    ]
    
    for (const variant of variants) {
      const baseName = path.basename(img.outputName, '.webp')
      const outputFilename = `${baseName}${variant.suffix}.webp`
      const outputPath = path.join(PROJECT_ROOT, 'public', 'images', outputFilename)
      
      await sharp(sourcePath)
        .resize(variant.maxWidth, null, {
          fit: 'inside', // Maintain aspect ratio!
          withoutEnlargement: true,
        })
        .webp({ quality: variant.quality })
        .toFile(outputPath)
      
      const stats = fs.statSync(outputPath)
      const size = (stats.size / 1024).toFixed(1)
      console.log(`   ✅ ${outputFilename} (${size} KB)`)
    }
    
    // Also copy to /public/media/ for Payload
    const mediaVariants = [
      { suffix: '', maxWidth: 1920 },
      { suffix: '-400x300', maxWidth: 400 },
      { suffix: '-640x480', maxWidth: 640 },
      { suffix: '-1024x768', maxWidth: 1024 },
      { suffix: '-1920x1440', maxWidth: 1920 },
    ]
    
    for (const variant of mediaVariants) {
      const baseName = path.basename(img.outputName, '.webp')
      const outputFilename = `${baseName}${variant.suffix}.webp`
      const outputPath = path.join(PROJECT_ROOT, 'public', 'media', outputFilename)
      
      await sharp(sourcePath)
        .resize(variant.maxWidth, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: 85 })
        .toFile(outputPath)
    }
    
    console.log(`   📁 Also copied to /public/media/`)
  }
  
  console.log('\n\n✅ Images fixed with preserved aspect ratios!')
  console.log('\n📋 Next steps:')
  console.log('1. Check images in /public/images/ and /public/media/')
  console.log('2. Update database references if needed')
  console.log('3. Test on homepage\n')
}

fixCroppedImages().catch(console.error)
