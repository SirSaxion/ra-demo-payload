/**
 * Smart Deployment Prep - Homepage Only
 * 
 * Analyzes homepage blocks in database and copies ONLY the media files
 * that are actually used on the homepage.
 * 
 * Run: pnpm tsx scripts/prepare-deployment-homepage-only.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: '.env' })

const PROJECT_ROOT = path.resolve(__dirname, '..')
const DEPLOY_DIR = path.join(PROJECT_ROOT, 'deployment')

async function prepareSmartDeployment() {
  console.log('🚀 Starting SMART Deployment Preparation (Homepage Only)...\n')
  
  try {
    // Set defaults
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    process.env.PAYLOAD_DISABLE_PUSH = 'true'
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Find homepage
    console.log('🔍 Finding homepage...')
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: { equals: '/' },
      },
      limit: 1,
    })
    
    if (pages.docs.length === 0) {
      console.error('❌ Homepage not found!')
      process.exit(1)
    }
    
    const homepage = pages.docs[0]
    console.log(`✅ Homepage found (ID: ${homepage.id})\n`)
    
    // Collect all media IDs used on homepage
    console.log('📊 Analyzing homepage media usage...')
    const mediaIds = new Set<number>()
    
    // Recursive function to find all media IDs in blocks
    const collectMediaIds = (obj: any) => {
      if (!obj) return
      
      if (typeof obj === 'object') {
        // Check if it's a media reference (number or object with id)
        if (typeof obj === 'number') {
          mediaIds.add(obj)
        } else if (obj.id && typeof obj.id === 'number') {
          mediaIds.add(obj.id)
        }
        
        // Check common media field names
        if (obj.image && typeof obj.image === 'number') {
          mediaIds.add(obj.image)
        }
        if (obj.companyLogo && typeof obj.companyLogo === 'number') {
          mediaIds.add(obj.companyLogo)
        }
        if (obj.avatar && typeof obj.avatar === 'number') {
          mediaIds.add(obj.avatar)
        }
        if (obj.heroVideoPoster && typeof obj.heroVideoPoster === 'number') {
          mediaIds.add(obj.heroVideoPoster)
        }
        if (obj.avatar1 && typeof obj.avatar1 === 'number') {
          mediaIds.add(obj.avatar1)
        }
        if (obj.avatar2 && typeof obj.avatar2 === 'number') {
          mediaIds.add(obj.avatar2)
        }
        if (obj.avatar3 && typeof obj.avatar3 === 'number') {
          mediaIds.add(obj.avatar3)
        }
        if (obj.decorativeImage && typeof obj.decorativeImage === 'number') {
          mediaIds.add(obj.decorativeImage)
        }
        if (obj.teamImage && typeof obj.teamImage === 'number') {
          mediaIds.add(obj.teamImage)
        }
        
        // Recursively check nested objects and arrays
        Object.values(obj).forEach(value => {
          if (Array.isArray(value)) {
            value.forEach(item => collectMediaIds(item))
          } else if (typeof value === 'object' && value !== null) {
            collectMediaIds(value)
          }
        })
      }
    }
    
    // Scan all homepage blocks
    if (homepage.blocks && Array.isArray(homepage.blocks)) {
      homepage.blocks.forEach((block: any) => {
        console.log(`  📋 Scanning block: ${block.blockType}`)
        collectMediaIds(block)
      })
    }
    
    console.log(`\n✅ Found ${mediaIds.size} unique media files used on homepage\n`)
    
    // Fetch actual media records
    console.log('🔍 Fetching media records from database...')
    const mediaRecords = await payload.find({
      collection: 'media',
      where: {
        id: {
          in: Array.from(mediaIds),
        },
      },
      limit: 100,
    })
    
    console.log(`✅ Found ${mediaRecords.docs.length} media records\n`)
    
    // Print media list
    console.log('📸 Homepage Media Files:')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    mediaRecords.docs.forEach((media: any, idx: number) => {
      console.log(`  ${idx + 1}. ${media.filename} (ID: ${media.id})`)
    })
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    
    // Create deployment structure
    console.log('📁 Creating deployment structure...')
    if (fs.existsSync(DEPLOY_DIR)) {
      execSync(`rm -rf "${DEPLOY_DIR}"`)
    }
    
    fs.mkdirSync(DEPLOY_DIR, { recursive: true })
    fs.mkdirSync(path.join(DEPLOY_DIR, 'public'), { recursive: true })
    fs.mkdirSync(path.join(DEPLOY_DIR, 'public', 'media'), { recursive: true })
    fs.mkdirSync(path.join(DEPLOY_DIR, 'public', 'images'), { recursive: true })
    fs.mkdirSync(path.join(DEPLOY_DIR, 'public', 'videos'), { recursive: true })
    fs.mkdirSync(path.join(DEPLOY_DIR, 'src'), { recursive: true })
    
    // Copy essential files
    console.log('📄 Copying essential files...')
    const filesToCopy = [
      'package.json',
      'pnpm-lock.yaml',
      '.npmrc',
      '.yarnrc',
      'tsconfig.json',
      'next.config.mjs',
      'postcss.config.mjs',
      'components.json',
      'middleware.ts',
      'eslint.config.mjs',
      '.env.example',
      'Dockerfile',
      'docker-compose.yml',
      'docker-compose.prod.yml',
      'README.md',
      'DEPLOY-VPS.md',
      'DEPLOY-VPS-GUIDE.md',
    ]
    
    filesToCopy.forEach(file => {
      const source = path.join(PROJECT_ROOT, file)
      const dest = path.join(DEPLOY_DIR, file)
      if (fs.existsSync(source)) {
        fs.copyFileSync(source, dest)
        console.log(`  ✅ ${file}`)
      }
    })
    
    // Copy src directory
    console.log('\n📦 Copying source code...')
    execSync(`cp -r "${path.join(PROJECT_ROOT, 'src')}" "${DEPLOY_DIR}/"`)
    console.log('  ✅ src/ copied')
    
    // Copy database
    console.log('\n🗄️  Copying database...')
    const dbSource = path.join(PROJECT_ROOT, 'ra-demo-payload.db')
    const dbDest = path.join(DEPLOY_DIR, 'ra-demo-payload.db')
    if (fs.existsSync(dbSource)) {
      fs.copyFileSync(dbSource, dbDest)
      const dbSize = fs.statSync(dbDest).size
      console.log(`  ✅ Database copied (${(dbSize / 1024 / 1024).toFixed(2)} MB)`)
    } else {
      console.log('  ❌ Database not found!')
    }
    
    // Copy ONLY homepage media files + optimized variants
    console.log('\n🖼️  Copying homepage media files (with optimized variants)...')
    let copiedCount = 0
    let totalSize = 0
    
    for (const media of mediaRecords.docs) {
      const filename = media.filename as string
      
      if (!filename) continue
      
      // Get base name without extension for variants
      const ext = path.extname(filename)
      const baseName = path.basename(filename, ext)
      
      // Try different possible locations
      const possiblePaths = [
        path.join(PROJECT_ROOT, 'public', 'media', filename),
        path.join(PROJECT_ROOT, 'public', 'images', filename),
        path.join(PROJECT_ROOT, 'media', filename),
      ]
      
      let found = false
      for (const sourcePath of possiblePaths) {
        if (fs.existsSync(sourcePath)) {
          // Copy main file to BOTH locations
          const destMediaPath = path.join(DEPLOY_DIR, 'public', 'media', filename)
          const destImagesPath = path.join(DEPLOY_DIR, 'public', 'images', filename)
          
          fs.copyFileSync(sourcePath, destMediaPath)
          fs.copyFileSync(sourcePath, destImagesPath)
          
          const size = fs.statSync(destMediaPath).size
          totalSize += size * 2
          console.log(`  ✅ ${filename} (${(size / 1024).toFixed(1)} KB)`)
          
          // Also copy optimized variants (TWO types: name-based and size-based)
          const nameVariants = ['-small', '-medium', '-large', '-thumbnail']
          const sizeVariants = ['-400x300', '-640x480', '-1024x768', '-1920x1440']
          const extensions = ['.webp', '.png', '.jpg', '.jpeg']
          
          // Check both /public/images/ and /public/media/ for variants
          const possibleDirs = [
            path.join(PROJECT_ROOT, 'public', 'images'),
            path.join(PROJECT_ROOT, 'public', 'media'),
          ]
          
          // Copy name-based variants (-small, -medium, etc.)
          nameVariants.forEach(variant => {
            for (const dir of possibleDirs) {
              for (const tryExt of extensions) {
                const variantFilename = `${baseName}${variant}${tryExt}`
                const variantSource = path.join(dir, variantFilename)
                
                if (fs.existsSync(variantSource)) {
                  const variantDestMedia = path.join(DEPLOY_DIR, 'public', 'media', variantFilename)
                  const variantDestImages = path.join(DEPLOY_DIR, 'public', 'images', variantFilename)
                  
                  fs.copyFileSync(variantSource, variantDestMedia)
                  fs.copyFileSync(variantSource, variantDestImages)
                  
                  const variantSize = fs.statSync(variantDestMedia).size
                  totalSize += variantSize * 2
                  console.log(`     ↳ ${variantFilename} (${(variantSize / 1024).toFixed(1)} KB)`)
                  break // Found it, stop searching
                }
              }
            }
          })
          
          // Copy size-based variants (-400x300, -640x480, etc.)
          sizeVariants.forEach(variant => {
            for (const dir of possibleDirs) {
              for (const tryExt of extensions) {
                const variantFilename = `${baseName}${variant}${tryExt}`
                const variantSource = path.join(dir, variantFilename)
                
                if (fs.existsSync(variantSource)) {
                  const variantDestMedia = path.join(DEPLOY_DIR, 'public', 'media', variantFilename)
                  const variantDestImages = path.join(DEPLOY_DIR, 'public', 'images', variantFilename)
                  
                  fs.copyFileSync(variantSource, variantDestMedia)
                  fs.copyFileSync(variantSource, variantDestImages)
                  
                  const variantSize = fs.statSync(variantDestMedia).size
                  totalSize += variantSize * 2
                  console.log(`     ↳ ${variantFilename} (${(variantSize / 1024).toFixed(1)} KB)`)
                  break // Found it, stop searching
                }
              }
            }
          })
          
          copiedCount++
          found = true
          break
        }
      }
      
      if (!found) {
        console.log(`  ⚠️  ${filename} - not found in any location`)
      }
    }
    
    // Copy static layout logos (navbar, footer, etc.)
    console.log('\n🎨 Copying static layout assets (logos, etc.)...')
    const staticLogos = [
      'logorealaccelerate.webp',
      'logorealaccelerate-small.webp',
      'logorealaccelerate-medium.webp',
      'logorealaccelerate-large.webp',
      'logorealaccelerate-thumbnail.webp',
      'brabantmakelaar_logo.webp',
      'brabantmakelaar_logo-small.webp',
      'brabantmakelaar_logo-thumbnail.webp',
      'binkpartners_logo.webp',
      'binkpartners_logo-small.webp',
      'binkpartners_logo-thumbnail.webp',
      'paulthijssen_logo.webp',
      'paulthijssen_logo-small.webp',
      'paulthijssen_logo-thumbnail.webp',
      'thomapost_logo.webp',
      'thomapost_logo-medium.png',
      'thomapost_logo-small.png',
      'ralogosvg.svg',
    ]
    
    staticLogos.forEach(logo => {
      const sourcePath = path.join(PROJECT_ROOT, 'public', 'images', logo)
      if (fs.existsSync(sourcePath)) {
        const destMedia = path.join(DEPLOY_DIR, 'public', 'media', logo)
        const destImages = path.join(DEPLOY_DIR, 'public', 'images', logo)
        
        fs.copyFileSync(sourcePath, destMedia)
        fs.copyFileSync(sourcePath, destImages)
        
        const size = fs.statSync(destMedia).size
        totalSize += size * 2
        console.log(`  ✅ ${logo} (${(size / 1024).toFixed(1)} KB)`)
      }
    })
    
    console.log(`\n  📊 Copied ${copiedCount}/${mediaRecords.docs.length} files`)
    console.log(`  📦 Total media size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`)
    
    // Copy hero video
    console.log('\n🎬 Copying hero video...')
    const videoSource = path.join(PROJECT_ROOT, 'public', 'videos', 'herofootage_34s.mp4')
    if (fs.existsSync(videoSource)) {
      const videoDest = path.join(DEPLOY_DIR, 'public', 'videos', 'herofootage_34s.mp4')
      fs.copyFileSync(videoSource, videoDest)
      const videoSize = fs.statSync(videoDest).size
      console.log(`  ✅ herofootage_34s.mp4 (${(videoSize / 1024 / 1024).toFixed(2)} MB)`)
      totalSize += videoSize
    } else {
      console.log('  ⚠️  Hero video not found')
    }
    
    // Copy static assets (favicon, icons, etc)
    console.log('\n🎨 Copying static assets...')
    const staticFiles = [
      'favicon.ico',
      'ralogosvg.svg',
      'ra_white_logo.svg',
      'ra_golden_logo.svg',
      'realaccelerate_goldenlogo.svg',
      'logoblack.svg',
    ]
    
    staticFiles.forEach(file => {
      const source = path.join(PROJECT_ROOT, 'public', file)
      if (fs.existsSync(source)) {
        const dest = path.join(DEPLOY_DIR, 'public', file)
        fs.copyFileSync(source, dest)
        console.log(`  ✅ ${file}`)
      }
    })
    
    // Create deployment info
    console.log('\n📝 Creating deployment info...')
    
    const dbSize = fs.existsSync(dbDest) ? (fs.statSync(dbDest).size / 1024 / 1024).toFixed(2) : '0'
    const mediaSizeMB = (totalSize / 1024 / 1024).toFixed(2)
    const totalSizeMB = ((fs.existsSync(dbDest) ? fs.statSync(dbDest).size : 0) + totalSize + 3000000) / 1024 / 1024
    const mediaList = mediaRecords.docs.map((m: any, i: number) => `${i + 1}. ${m.filename} (ID: ${m.id})`).join('\n')
    
    const deployInfo = `
========================================
SMART DEPLOYMENT - HOMEPAGE ONLY
========================================

Created: ${new Date().toISOString()}
Package: Real Accelerate Demo - Payload CMS

========================================
INCLUDED FILES
========================================

✅ Database: ra-demo-payload.db
✅ Source code: /src
✅ Homepage media: ${copiedCount} files (${mediaSizeMB} MB)
✅ Hero video: herofootage_34s.mp4
✅ Static assets: favicons, logos

========================================
HOMEPAGE MEDIA FILES
========================================

${mediaList}

========================================
NOT INCLUDED (Other Pages)
========================================

❌ Makelaars page media
❌ Hypotheekadviseurs page media
❌ Cases page media
❌ Over-ons page media
❌ Other page media

These will be added after migration!

========================================
DEPLOYMENT INSTRUCTIONS
========================================

1. Copy .env.example to .env
2. Configure environment variables
3. Run: pnpm install
4. Run: pnpm build
5. Run: pnpm start

OR with Docker:
docker-compose up -d

========================================
VERIFICATION CHECKLIST
========================================

After deployment:
□ Homepage loads at /
□ All homepage images load
□ Hero video plays
□ CMS accessible at /admin
□ Database readable

Known limitations:
• Other pages will have placeholder/missing images
• Migrate other pages separately later

========================================
TOTAL PACKAGE SIZE
========================================

Database: ${dbSize} MB
Media: ${mediaSizeMB} MB
Source: ~3 MB
Total: ~${totalSizeMB.toFixed(2)} MB

========================================
`
    
    fs.writeFileSync(path.join(DEPLOY_DIR, 'DEPLOYMENT-INFO.txt'), deployInfo)
    
    // Create .gitignore
    fs.writeFileSync(path.join(DEPLOY_DIR, '.gitignore'), `
node_modules
.next
.env
.env.local
*.log
.DS_Store
!ra-demo-payload.db
`.trim())
    
    // Final summary
    console.log('\n')
    console.log('╔════════════════════════════════════════╗')
    console.log('║   ✅ SMART DEPLOYMENT READY!           ║')
    console.log('╚════════════════════════════════════════╝')
    console.log('')
    console.log('📊 Package Summary:')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('  Database: ' + dbSize + ' MB')
    console.log('  Media: ' + mediaSizeMB + ' MB (' + copiedCount + ' files)')
    console.log('  Total: ~' + totalSizeMB.toFixed(2) + ' MB')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('')
    console.log('📦 Location: ' + DEPLOY_DIR)
    console.log('')
    console.log('🎯 Next steps:')
    console.log('  1. tar -czf deployment.tar.gz deployment/')
    console.log('  2. Upload to VPS')
    console.log('  3. Deploy!')
    console.log('')
    console.log('💡 Only homepage will work - migrate other pages later!')
    console.log('')
    
    process.exit(0)
  } catch (error: any) {
    console.error('\n❌ Error:', error)
    console.error(error?.stack)
    process.exit(1)
  }
}

prepareSmartDeployment()
