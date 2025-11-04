import { getPayload } from 'payload'
import config from '../src/payload.config.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const payload = await getPayload({ config })

console.log('🖼️  Starting media migration...\n')

// Helper function to get MIME type from extension
function getMimeType(filename) {
  const ext = path.extname(filename).toLowerCase()
  const mimeTypes = {
    '.webp': 'image/webp',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  }
  return mimeTypes[ext] || 'application/octet-stream'
}

// Helper to generate alt text from filename
function generateAlt(filename) {
  return filename
    .replace(/\.(webp|jpg|jpeg|png|gif|svg)$/i, '')
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

// Scan public/images directory for all image files
console.log('📁 Scanning public/images directory...\n')
const imagesDir = path.join(__dirname, '..', 'public', 'images')
const allFiles = fs.readdirSync(imagesDir)

// Filter for image files and exclude size variants (--large, --medium, etc.)
const imageFiles = allFiles
  .filter(file => {
    const ext = path.extname(file).toLowerCase()
    return ['.webp', '.jpg', '.jpeg', '.png', '.gif', '.svg'].includes(ext)
  })
  .filter(file => {
    // Only include base files, not size variants
    return !file.match(/--(?:large|medium|small|thumbnail|xlarge|compressed)/)
  })
  .sort()

console.log(`Found ${imageFiles.length} base image files to process\n`)

// Priority files to process first
const priorityFiles = [
  'logorealaccelerate.webp',
  'teamfoto_einde.png',
  'emiro_working_at_desk.png',
  'herofootage_first_frame.png',
  'joep-koffie.png',
  'rudybrief.webp',
  'case-de-brabant-makelaar.webp',
  'dubai_thumb.jpg',
  'iqiglobal.jpg',
  'secondhomebeurs.jpg',
  'hypotheekvisie.jpg',
  'editbv.jpg',
  'brabantmakelaar_avatar.webp',
  'brabantmakelaar_logo.webp',
  'makelaarsvanamsterdam_logo.webp',
  'paulthijssen_avatar.webp',
  'paulthijssen_logo.webp',
  'binkpartners_avatar.webp',
  'binkpartners_logo.webp',
  'thomapost_avatar.webp',
  'thomapost_logo.png',
  'foto-video.png',
  'leadgen.webp',
  'internationaal.webp',
  'makelaars.jpg',
  'hypotheekadviseur.jpg',
  'projectontwikkelaar.webp',
  'recreatie.jpg',
  'remax.jpg',
  'thoma_thumb.png',
  'ralogosvg.svg',
]

// Sort files: priority first, then the rest
const sortedFiles = [
  ...priorityFiles.filter(f => imageFiles.includes(f)),
  ...imageFiles.filter(f => !priorityFiles.includes(f))
]

console.log(`Priority files: ${priorityFiles.filter(f => imageFiles.includes(f)).length}`)
console.log(`Other files: ${imageFiles.filter(f => !priorityFiles.includes(f)).length}\n`)
console.log('='.repeat(50))

let successCount = 0
let skipCount = 0
let errorCount = 0
let processedCount = 0

for (const filename of sortedFiles) {
  processedCount++
  const progress = `[${processedCount}/${sortedFiles.length}]`
  
  try {
    // Check if already exists
    const existing = await payload.find({
      collection: 'media',
      where: {
        filename: {
          equals: filename,
        },
      },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      console.log(`${progress} ⏭️  Skipped (exists): ${filename}`)
      skipCount++
      continue
    }

    // File path
    const filePath = path.join(imagesDir, filename)
    
    if (!fs.existsSync(filePath)) {
      console.log(`${progress} ⚠️  Not found: ${filename}`)
      errorCount++
      continue
    }

    // Get file stats
    const stats = fs.statSync(filePath)
    const mimeType = getMimeType(filename)
    const alt = generateAlt(filename)
    
    // Read file buffer
    const fileBuffer = fs.readFileSync(filePath)
    
    // Create media entry with file upload
    const media = await payload.create({
      collection: 'media',
      data: {
        alt: alt,
      },
      file: {
        data: fileBuffer,
        mimetype: mimeType,
        name: filename,
        size: stats.size,
      },
    })

    console.log(`${progress} ✅ ${filename}`)
    successCount++
    
    // Small delay to avoid overwhelming the system
    if (processedCount % 10 === 0) {
      await new Promise(resolve => setTimeout(resolve, 100))
    }
  } catch (error) {
    console.error(`${progress} ❌ ${filename}: ${error.message}`)
    errorCount++
  }
}

console.log('\n' + '='.repeat(50))
console.log('📊 Media Migration Summary:')
console.log('='.repeat(50))
console.log(`✅ Successfully migrated: ${successCount}`)
console.log(`⏭️  Skipped (already exist): ${skipCount}`)
console.log(`❌ Errors: ${errorCount}`)
console.log(`📁 Total processed: ${processedCount}`)
console.log('='.repeat(50))

if (successCount > 0) {
  console.log('\n✨ Media files are now available in Payload!')
  console.log('   Go to: http://localhost:3000/admin/collections/media')
}

if (errorCount > 0) {
  console.log('\n⚠️  Some files had errors. Check the log above.')
}

console.log('\n💡 Note: Size variants (--large, --medium, etc.) are not imported')
console.log('   Payload will generate these automatically when needed.')

process.exit(0)
