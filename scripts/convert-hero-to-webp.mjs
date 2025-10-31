import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectRoot = path.join(__dirname, '..')
const pngPath = path.join(projectRoot, 'public/images/herofootage_first_frame.png')
const webpPath = path.join(projectRoot, 'public/images/herofootage_first_frame.webp')

console.log('🖼️  Converting hero image to WebP...\n')

async function convertImage() {
  try {
    // Check if PNG exists
    if (!fs.existsSync(pngPath)) {
      console.error('❌ PNG file not found:', pngPath)
      process.exit(1)
    }

    console.log('📥 Reading PNG:', pngPath)
    const stats = fs.statSync(pngPath)
    console.log(`   Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB\n`)

    // Convert to WebP
    console.log('⚙️  Converting to WebP (quality 85)...')
    await sharp(pngPath)
      .webp({ quality: 85 })
      .toFile(webpPath)

    const webpStats = fs.statSync(webpPath)
    const savings = stats.size - webpStats.size
    const savingsPercent = ((savings / stats.size) * 100).toFixed(1)

    console.log('✅ Conversion successful!')
    console.log(`   Output: ${webpPath}`)
    console.log(`   Size: ${(webpStats.size / 1024 / 1024).toFixed(2)} MB`)
    console.log(`   Saved: ${(savings / 1024 / 1024).toFixed(2)} MB (${savingsPercent}%)\n`)

    // Delete original PNG
    console.log('🗑️  Deleting original PNG...')
    fs.unlinkSync(pngPath)
    console.log('✅ PNG deleted\n')

    console.log('📝 Now updating file references...\n')

    // Update layout.tsx
    const layoutPath = path.join(projectRoot, 'src/app/layout.tsx')
    let layoutContent = fs.readFileSync(layoutPath, 'utf8')
    layoutContent = layoutContent.replace(
      '/images/herofootage_first_frame.png',
      '/images/herofootage_first_frame.webp'
    )
    fs.writeFileSync(layoutPath, layoutContent)
    console.log('✅ Updated: src/app/layout.tsx')

    // Update HeroSection.tsx
    const heroPath = path.join(projectRoot, 'src/components/sections/home/HeroSection.tsx')
    let heroContent = fs.readFileSync(heroPath, 'utf8')
    heroContent = heroContent.replace(
      '/images/herofootage_first_frame.png',
      '/images/herofootage_first_frame.webp'
    )
    fs.writeFileSync(heroPath, heroContent)
    console.log('✅ Updated: src/components/sections/home/HeroSection.tsx')

    console.log('\n' + '='.repeat(50))
    console.log('🎉 SUCCESS! Hero image optimized!')
    console.log('='.repeat(50))
    console.log('\n💡 Next steps:')
    console.log('   1. Restart dev server: pnpm run dev')
    console.log('   2. Open: http://localhost:3001')
    console.log('   3. Run Lighthouse in Incognito mode')
    console.log('\n🎯 Expected Performance improvement: +25-30 points')
    console.log('   From: 51 → To: 75-85')

  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

convertImage()
