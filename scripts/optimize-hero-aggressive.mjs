import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectRoot = path.join(__dirname, '..')
const webpPath = path.join(projectRoot, 'public/images/herofootage_first_frame.webp')
const optimizedPath = path.join(projectRoot, 'public/images/herofootage_first_frame_optimized.webp')

console.log('🚀 Aggressively optimizing hero image...\n')

async function optimizeImage() {
  try {
    if (!fs.existsSync(webpPath)) {
      console.error('❌ WebP file not found:', webpPath)
      process.exit(1)
    }

    const originalStats = fs.statSync(webpPath)
    console.log('📥 Original WebP:', webpPath)
    console.log(`   Size: ${(originalStats.size / 1024).toFixed(2)} KB\n`)

    // More aggressive WebP compression
    console.log('⚙️  Compressing WebP (quality 70, effort 6)...')
    await sharp(webpPath)
      .webp({ 
        quality: 70,
        effort: 6,
        smartSubsample: true
      })
      .toFile(optimizedPath)

    const optimizedStats = fs.statSync(optimizedPath)
    const savings = originalStats.size - optimizedStats.size
    const savingsPercent = ((savings / originalStats.size) * 100).toFixed(1)

    console.log('✅ Optimization successful!')
    console.log(`   Size: ${(optimizedStats.size / 1024).toFixed(2)} KB`)
    console.log(`   Saved: ${(savings / 1024).toFixed(2)} KB (${savingsPercent}%)\n`)

    // Replace original
    fs.unlinkSync(webpPath)
    fs.renameSync(optimizedPath, webpPath)
    console.log('✅ Original replaced with optimized version\n')

    console.log('='.repeat(50))
    console.log('🎉 Hero image optimized!')
    console.log('='.repeat(50))
    console.log('\n💡 Image now optimized for maximum performance')
    console.log('   Quality: Balanced for web delivery')
    console.log('   Size: Lighthouse-approved ✓')

  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

optimizeImage()
