# CMS Images Fix Guide - Complete Workflow

## 📖 Quick Reference

**Voor een nieuwe chat:** Lees deze hele guide om homepage images te fixen en deployment te maken!

**Belangrijkste takeaways:**
1. ✅ Blocks moeten `type: 'upload'` fields hebben
2. ✅ Components moeten CMS props gebruiken met fallbacks
3. ✅ Images moeten naar `/public/media/` EN `/public/images/` (BEIDE!)
4. ✅ Kopieer ALLE variants (-small, -medium, -large, -400x300, etc.)
5. ✅ Vergeet layout assets niet (navbar/footer logos)
6. ✅ Deployment: ~120MB vs 1.3GB (scan blocks voor media IDs)

**Script locatie:** `/scripts/prepare-deployment-homepage-only.ts` ← Working example!

---

## 🎯 Het Probleem

Images waren hardcoded in de React components en **NIET** aanpasbaar via het Payload CMS. Wanneer je in het CMS een image probeerde te wijzigen, gebeurde er niets op de frontend omdat:

1. **Block definities misten upload velden** - Geen `type: 'upload'` fields in de block schemas
2. **Components hadden hardcoded paths** - Bijvoorbeeld: `src="/media/teamfoto.png"`
3. **Geen media selectors in CMS** - Alleen handmatige URL inputs of helemaal geen image velden
4. **Images niet gekoppeld aan blocks** - Zelfs als images in Media collection stonden, waren ze niet gekoppeld

## ✅ De Oplossing (Stap-voor-Stap)

### **STAP 1: Identificeer alle blocks met hardcoded images**

**Werkwijze:**
```bash
# Zoek in components naar hardcoded image paths
grep -r "src=\"/" src/components/sections/[pagina-naam]/
grep -r "/media/" src/components/sections/[pagina-naam]/
grep -r "/images/" src/components/sections/[pagina-naam]/
```

**Voor homepage vonden we:**
- `HeroSection` → video poster + 3 avatars
- `UniqueApproach` → decoratieve image (Emiro)
- `MarketingMachine` → 6 feature images
- `HowItWorksSection` → decoratieve image (Rudy raket)
- `FinalCTA` → team photo
- `CaseStudy` → main image
- `TargetGroupsOverviewPhotos` → 4 category images
- `TestimonialsSection` → company logos + avatars

### **STAP 2: Update block definities met upload velden**

**Locatie:** `/src/blocks/[BlockName].ts`

**Voorbeeld 1 - Enkele image:**
```typescript
// FinalCTA.ts
{
  name: 'teamImage',
  type: 'upload',
  relationTo: 'media',
  label: 'Team foto',
  admin: {
    description: 'Foto van het team',
  },
}
```

**Voorbeeld 2 - Multiple images:**
```typescript
// HeroSection.ts
{
  name: 'heroVideoPoster',
  type: 'upload',
  relationTo: 'media',
  label: 'Hero Video Poster (thumbnail)',
},
{
  name: 'avatar1',
  type: 'upload',
  relationTo: 'media',
  label: 'Avatar 1',
},
{
  name: 'avatar1Alt',
  type: 'text',
  label: 'Avatar 1 Alt tekst',
},
// Herhaal voor avatar2, avatar3, etc.
```

**Voorbeeld 3 - Array met images:**
```typescript
// MarketingMachine.ts - in features array
{
  name: 'image',
  type: 'upload',
  relationTo: 'media',
  label: 'Afbeelding (upload)',
},
{
  name: 'imageSrc',  // Backwards compatibility
  type: 'text',
  label: 'Afbeelding URL (alternatief)',
  admin: {
    description: 'Of gebruik een directe URL',
  },
}
```

### **STAP 3: Update React components**

**Locatie:** `/src/components/sections/[pagina-naam]/[ComponentName].tsx`

#### 3A. Update Interface
```typescript
interface ComponentProps {
  // ... existing props
  teamImage?: any; // Media object from CMS
  decorativeImage?: any; // Media object from CMS
}
```

#### 3B. Update Function Signature
```typescript
export default function Component({
  // ... existing props
  teamImage,
  decorativeImage,
}: ComponentProps = {}) {
```

#### 3C. Update Image Tags
**Van:**
```tsx
<Image 
  src="/media/hardcoded-image.png"
  alt="Hardcoded alt"
/>
```

**Naar:**
```tsx
<Image 
  src={teamImage?.url || "/media/hardcoded-image.png"}
  alt={teamImage?.alt || "Fallback alt text"}
/>
```

**⚠️ BELANGRIJK:** Houd altijd fallback voor backwards compatibility!

### **STAP 4: Update PayloadBlockRenderer**

**Locatie:** `/src/components/PayloadBlockRenderer.tsx`

**Voor elk block, voeg image props toe:**

```typescript
case 'finalCTA':
  return (
    <FinalCTA
      key={index}
      title={block.title}
      subtitle={block.subtitle}
      // ... existing props
      teamImage={block.teamImage}  // ← NIEUW!
    />
  )

case 'uniqueApproach':
  return (
    <UniqueApproach
      key={index}
      // ... existing props
      decorativeImage={block.decorativeImage}  // ← NIEUW!
    />
  )
```

**Voor nested components (zoals in HowItWorksSection):**
```typescript
// Als een sub-component images gebruikt, geef prop door:
function SubComponent({ decorativeImage }: { decorativeImage?: any }) {
  return <Image src={decorativeImage?.url || "/fallback.png"} />
}

// En gebruik hem:
<SubComponent decorativeImage={decorativeImage} />
```

### **STAP 5: Migreer bestaande images naar Media collection**

#### 5A. Check welke images al in Media staan
```bash
# Bekijk de mapping file (als die bestaat)
cat scripts/[pagina]-images-mapping.json
```

#### 5B. Maak migrate script voor ontbrekende images
```typescript
// scripts/migrate-[pagina]-images.ts
const images = [
  {
    filename: 'teamfoto.webp',
    alt: 'Team foto',
    priority: 'high',
    usage: 'Final CTA section',
  },
  // ... meer images
]

// Loop through en upload naar Media collection
for (const image of images) {
  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: image.filename } },
  })
  
  if (existing.docs.length === 0) {
    await payload.create({
      collection: 'media',
      data: { alt: image.alt },
      filePath: path.join(imagesDir, image.filename),
    })
  }
}
```

### **STAP 6: Koppel images aan page blocks**

**⚠️ KRITIEK:** Doe dit NADAT de dev server de nieuwe block fields heeft gemigreerd!

#### 6A. Start dev server (migreert schema automatisch)
```bash
pnpm dev
# Wacht tot: "✓ Ready in XXXXms"
```

#### 6B. Run update script
```typescript
// scripts/update-[pagina]-images.ts
const mapping = {
  '/images/teamfoto.png': 22,  // Media ID
  '/images/avatar1.webp': 2,
  // etc.
}

const updatedBlocks = page.blocks?.map((block: any) => {
  if (block.blockType === 'finalCTA') {
    return {
      ...block,
      teamImage: mapping['/images/teamfoto.png'],
    }
  }
  
  if (block.blockType === 'uniqueApproach') {
    return {
      ...block,
      decorativeImage: mapping['/images/emiro.png'],
    }
  }
  
  // Voor arrays (MarketingMachine features):
  if (block.blockType === 'marketingMachine') {
    return {
      ...block,
      features: block.features?.map((feature: any) => ({
        ...feature,
        image: imageMapping[feature.name],
        imageSrc: undefined, // Verwijder oude URL
      }))
    }
  }
  
  return block
})

await payload.update({
  collection: 'pages',
  id: page.id,
  data: { blocks: updatedBlocks },
})
```

## 📋 Complete Checklist Per Pagina

### Voorbereiding
- [ ] Identificeer pagina slug (bijv. `/makelaars`)
- [ ] List alle blocks op de pagina
- [ ] Grep alle hardcoded image paths

### Voor elk block met images:
- [ ] Update block definitie (`/src/blocks/[Block].ts`)
  - [ ] Voeg `type: 'upload'` velden toe
  - [ ] Voeg alt text velden toe
- [ ] Update component (`/src/components/sections/[pagina]/[Component].tsx`)
  - [ ] Update interface met image props
  - [ ] Update function signature
  - [ ] Replace hardcoded `src` met CMS prop + fallback
- [ ] Update PayloadBlockRenderer
  - [ ] Pass image props door aan component

### Images migreren:
- [ ] Check welke images ontbreken in Media collection
- [ ] Maak migrate script voor nieuwe images
- [ ] Run migrate script: `pnpm tsx scripts/migrate-[pagina]-images.ts`
- [ ] Maak mapping file met Media IDs

### Schema & Data update:
- [ ] Start dev server: `pnpm dev` (migreert schema)
- [ ] Maak update script voor page blocks
- [ ] Run update script: `pnpm tsx scripts/update-[pagina]-images.ts`

### Verification:
- [ ] Ga naar CMS: `http://localhost:3000/admin/collections/pages`
- [ ] Open de pagina
- [ ] Check elk block heeft Media selector (geen handmatige URLs!)
- [ ] Test: verander een image in CMS
- [ ] Refresh frontend en check of nieuwe image werkt

## 🎯 Template Scripts

### Template 1: Migrate Images Script
```typescript
/**
 * [Pagina] Images Migration to Payload Media Collection
 * Run with: pnpm tsx scripts/migrate-[pagina]-images.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: '.env' })

const images = [
  {
    filename: 'example.webp',
    alt: 'Example image',
    priority: 'high',
    usage: 'Block name - purpose',
  },
  // Add more images
]

async function migrateImages() {
  console.log('🚀 Starting [Pagina] Images Migration...\n')
  
  if (!process.env.PAYLOAD_SECRET) {
    process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
  }
  if (!process.env.DATABASE_URI) {
    process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
  }
  
  const payload = await getPayload({ config })
  console.log('✅ Payload initialized\n')
  
  const projectRoot = path.resolve(__dirname, '..')
  const imagesDir = path.join(projectRoot, 'public', 'images')
  const mapping: Record<string, string | number> = {}
  
  for (const [index, image] of images.entries()) {
    const imagePath = path.join(imagesDir, image.filename)
    console.log(`[${index + 1}/${images.length}] Processing: ${image.filename}`)
    
    if (!fs.existsSync(imagePath)) {
      console.log(`   ⚠️  File not found, skipping...`)
      continue
    }
    
    const existing = await payload.find({
      collection: 'media',
      where: { filename: { equals: image.filename } },
      limit: 1,
    })
    
    if (existing.docs.length > 0) {
      console.log(`   ℹ️  Already exists (ID: ${existing.docs[0].id})`)
      mapping[`/images/${image.filename}`] = existing.docs[0].id
      continue
    }
    
    try {
      const created = await payload.create({
        collection: 'media',
        data: { alt: image.alt },
        filePath: imagePath,
      })
      console.log(`   ✅ Uploaded (ID: ${created.id})`)
      mapping[`/images/${image.filename}`] = created.id
    } catch (error: any) {
      console.log(`   ❌ Failed: ${error?.message}`)
    }
  }
  
  // Save mapping
  const mappingPath = path.join(__dirname, '[pagina]-images-mapping.json')
  fs.writeFileSync(
    mappingPath,
    JSON.stringify({ mapping, timestamp: new Date().toISOString() }, null, 2)
  )
  
  console.log('\n✅ Migration complete!')
  console.log(`💾 Mapping saved to: [pagina]-images-mapping.json\n`)
  process.exit(0)
}

migrateImages()
```

### Template 2: Update Page Blocks Script
```typescript
/**
 * Update [Pagina] Images - Connect images to blocks
 * Run with: pnpm tsx scripts/update-[pagina]-images.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: '.env' })

// Load image mapping
const mappingPath = path.join(__dirname, '[pagina]-images-mapping.json')
const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8')).mapping

async function updatePageImages() {
  console.log('🚀 Starting [Pagina] Images Update...\n')
  
  if (!process.env.PAYLOAD_SECRET) {
    process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
  }
  if (!process.env.DATABASE_URI) {
    process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
  }
  
  process.env.PAYLOAD_DISABLE_PUSH = 'true'
  
  const payload = await getPayload({ config })
  console.log('✅ Payload initialized\n')
  
  // Find page
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: '/[pagina-slug]' },
    },
    limit: 1,
  })
  
  if (pages.docs.length === 0) {
    console.error('❌ Page not found!')
    process.exit(1)
  }
  
  const page = pages.docs[0]
  console.log(`✅ Page found (ID: ${page.id})\n`)
  
  // Update blocks with images
  const updatedBlocks = page.blocks?.map((block: any) => {
    // Example: Update specific block type
    if (block.blockType === 'heroSection') {
      console.log('   ✏️  Updating HeroSection')
      return {
        ...block,
        mainImage: mapping['/images/hero.webp'],
        // Add more image fields
      }
    }
    
    // Example: Update array of items
    if (block.blockType === 'gallery') {
      console.log('   ✏️  Updating Gallery')
      return {
        ...block,
        items: block.items?.map((item: any) => ({
          ...item,
          image: mapping[`/images/${item.imageName}.webp`],
        })),
      }
    }
    
    return block
  })
  
  // Save
  await payload.update({
    collection: 'pages',
    id: page.id,
    data: { blocks: updatedBlocks },
  })
  
  console.log('\n✅ Update complete!')
  console.log('👉 Check CMS: http://localhost:3000/admin/collections/pages\n')
  process.exit(0)
}

updatePageImages()
```

## 🚨 Common Pitfalls & Solutions

### Problem 1: "Index already exists" error
**Oplossing:** Dev server heeft schema al gemigreerd. Gebruik `PAYLOAD_DISABLE_PUSH=true` in scripts.

### Problem 2: Images niet zichtbaar in CMS
**Oplossing:** Check of block definitie `type: 'upload'` heeft (NIET `type: 'text'`).

### Problem 3: Frontend toont nog steeds hardcoded image
**Oplossing:** 
1. Check of PayloadBlockRenderer de prop doorgeeft
2. Check of component de prop gebruikt: `image?.url`
3. Check of image daadwerkelijk in CMS is gekoppeld

### Problem 4: Nested components krijgen geen image
**Oplossing:** Pass prop expliciet door:
```typescript
<SubComponent decorativeImage={decorativeImage} />
```

### Problem 5: Array items missen images
**Oplossing:** Map over array en voeg image toe:
```typescript
items: block.items?.map(item => ({
  ...item,
  image: mapping[item.name],
}))
```

## 📊 Homepage Example (Volledig uitgevoerd)

**Blocks gefixed:**
1. ✅ HeroSection - video poster + 3 avatars  
2. ✅ UniqueApproach - decorative image  
3. ✅ MarketingMachine - 6 feature images  
4. ✅ HowItWorksSection - decorative image  
5. ✅ FinalCTA - team photo  
6. ✅ CaseStudy - main image  
7. ✅ TargetGroupsOverviewPhotos - 4 category images  
8. ✅ TestimonialsSection - logos + avatars  

**Resultaat:**
- Alle images zijn Media Library selectors in CMS
- Geen handmatige URL inputs meer
- Direct aanpasbaar via CMS
- Backwards compatible met fallbacks

## 🎯 Next Pages To Fix

Gebruik deze guide voor:
- [ ] `/makelaars` pagina
- [ ] `/hypotheekadviseurs` pagina
- [ ] `/projectontwikkelaars` pagina
- [ ] `/makelaars-buitenland` pagina
- [ ] `/hr-recruitment` pagina
- [ ] `/cases` pagina
- [ ] `/over-ons` pagina

## 💡 Tips

1. **Doe één block tegelijk** - Makkelijker te debuggen
2. **Test na elke wijziging** - Check CMS én frontend
3. **Bewaar fallbacks** - Voor backwards compatibility
4. **Document image IDs** - Maak mapping files
5. **Commit tussen stappen** - Voor easy rollback

## 🎉 Success Criteria

Een pagina is "fixed" wanneer:
- [ ] Alle blocks hebben Media Library selectors (geen text inputs voor images!)
- [ ] Je een image kunt wijzigen in CMS
- [ ] Frontend direct de nieuwe image toont na refresh
- [ ] Geen console errors
- [ ] Fallbacks werken nog steeds

---

## 🚀 DEPLOYMENT: Smart Package Creation

### **Het Deployment Probleem**

Na het fixen van de homepage images moet je een deployment package maken. **NIET** alle 1.3GB aan media meenemen, alleen wat de homepage gebruikt!

### **KRITIEKE Lessons Learned**

#### 1. **Images moeten in BEIDE folders** ❗
```
/public/media/     ← Voor Payload CMS
/public/images/    ← Voor component fallbacks
```

**Waarom?** Components gebruiken fallbacks zoals `/images/foto.webp`, maar Payload genereert URLs naar `/media/`. Zonder beide folders krijg je 404 errors!

#### 2. **Twee soorten optimized variants** 🎨

**Name-based variants:**
- `image-small.webp` (mobile)
- `image-medium.webp` (tablet)
- `image-large.webp` (desktop)
- `image-thumbnail.webp` (preview)

**Size-based variants:**
- `image-400x300.png`
- `image-640x480.png`
- `image-1024x768.png`
- `image-1920x1440.png`

**⚠️ Ze kunnen in verschillende folders staan!**
- Name-based vaak in `/public/images/`
- Size-based vaak in `/public/media/`

#### 3. **Layout assets zijn NIET in blocks** 📐

Navbar, footer, en andere layout components gebruiken images die NIET in de page blocks zitten:
- `logorealaccelerate.webp` (navbar logo)
- `brabantmakelaar_logo.webp` (testimonials)
- `binkpartners_logo.webp`
- `paulthijssen_logo.webp`
- `thomapost_logo.webp`
- `ralogosvg.svg`

**Deze moet je APART meenemen!**

### **Smart Deployment Script Template**

Gebruik dit script om ALLEEN homepage media te pakken (van 1.3GB → ~120MB):

```typescript
// scripts/prepare-deployment-[pagina]-only.ts

import { getPayload } from 'payload'
import config from '../src/payload.config.js'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

async function prepareSmartDeployment() {
  const payload = await getPayload({ config })
  
  // 1. Find the page
  const pages = await payload.find({
    collection: 'pages',
    where: { slug: { equals: '/[pagina-slug]' } },
    limit: 1,
  })
  
  const page = pages.docs[0]
  
  // 2. Collect ALL media IDs from blocks
  const mediaIds = new Set<number>()
  
  const collectMediaIds = (obj: any) => {
    if (!obj) return
    
    if (typeof obj === 'object') {
      // Check for media references
      if (typeof obj === 'number') mediaIds.add(obj)
      if (obj.id && typeof obj.id === 'number') mediaIds.add(obj.id)
      
      // Check common field names
      const mediaFields = [
        'image', 'companyLogo', 'avatar', 'heroVideoPoster',
        'avatar1', 'avatar2', 'avatar3', 'decorativeImage', 'teamImage'
      ]
      
      mediaFields.forEach(field => {
        if (obj[field] && typeof obj[field] === 'number') {
          mediaIds.add(obj[field])
        }
      })
      
      // Recurse
      Object.values(obj).forEach(value => {
        if (Array.isArray(value)) {
          value.forEach(item => collectMediaIds(item))
        } else if (typeof value === 'object' && value !== null) {
          collectMediaIds(value)
        }
      })
    }
  }
  
  page.blocks?.forEach((block: any) => collectMediaIds(block))
  
  // 3. Fetch media records
  const mediaRecords = await payload.find({
    collection: 'media',
    where: { id: { in: Array.from(mediaIds) } },
    limit: 100,
  })
  
  // 4. Copy files with ALL variants to BOTH locations
  for (const media of mediaRecords.docs) {
    const filename = media.filename as string
    if (!filename) continue
    
    const ext = path.extname(filename)
    const baseName = path.basename(filename, ext)
    
    // Find source file
    const possiblePaths = [
      path.join(PROJECT_ROOT, 'public', 'media', filename),
      path.join(PROJECT_ROOT, 'public', 'images', filename),
    ]
    
    let sourcePath = ''
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        sourcePath = p
        break
      }
    }
    
    if (!sourcePath) continue
    
    // Copy main file to BOTH locations
    fs.copyFileSync(sourcePath, path.join(DEPLOY_DIR, 'public', 'media', filename))
    fs.copyFileSync(sourcePath, path.join(DEPLOY_DIR, 'public', 'images', filename))
    
    // Copy ALL optimized variants
    const nameVariants = ['-small', '-medium', '-large', '-thumbnail']
    const sizeVariants = ['-400x300', '-640x480', '-1024x768', '-1920x1440']
    const extensions = ['.webp', '.png', '.jpg', '.jpeg']
    
    const possibleDirs = [
      path.join(PROJECT_ROOT, 'public', 'images'),
      path.join(PROJECT_ROOT, 'public', 'media'),
    ]
    
    // Name-based variants
    nameVariants.forEach(variant => {
      for (const dir of possibleDirs) {
        for (const tryExt of extensions) {
          const variantFile = `${baseName}${variant}${tryExt}`
          const variantPath = path.join(dir, variantFile)
          
          if (fs.existsSync(variantPath)) {
            // Copy to BOTH locations
            fs.copyFileSync(variantPath, path.join(DEPLOY_DIR, 'public', 'media', variantFile))
            fs.copyFileSync(variantPath, path.join(DEPLOY_DIR, 'public', 'images', variantFile))
            break
          }
        }
      }
    })
    
    // Size-based variants
    sizeVariants.forEach(variant => {
      for (const dir of possibleDirs) {
        for (const tryExt of extensions) {
          const variantFile = `${baseName}${variant}${tryExt}`
          const variantPath = path.join(dir, variantFile)
          
          if (fs.existsSync(variantPath)) {
            // Copy to BOTH locations
            fs.copyFileSync(variantPath, path.join(DEPLOY_DIR, 'public', 'media', variantFile))
            fs.copyFileSync(variantPath, path.join(DEPLOY_DIR, 'public', 'images', variantFile))
            break
          }
        }
      }
    })
  }
  
  // 5. Copy static layout assets
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
    const source = path.join(PROJECT_ROOT, 'public', 'images', logo)
    if (fs.existsSync(source)) {
      fs.copyFileSync(source, path.join(DEPLOY_DIR, 'public', 'media', logo))
      fs.copyFileSync(source, path.join(DEPLOY_DIR, 'public', 'images', logo))
    }
  })
  
  // 6. Copy database, source, config, etc.
  // ... (rest of deployment script)
}
```

### **Deployment Checklist**

Voor elke pagina deployment:

- [ ] **Scan blocks** voor media IDs
- [ ] **Copy main files** naar `/public/media/` EN `/public/images/`
- [ ] **Copy ALL variants** (name-based + size-based)
- [ ] **Check beide folders** voor variants (images/ én media/)
- [ ] **Add static layout assets** (navbar, footer logos)
- [ ] **Copy database** (bevat alle media relations)
- [ ] **Test deployment** zonder errors

### **Deployment Package Sizes**

**Voorbeeld (Homepage):**
```
Database:      11 MB
Media files:   103 MB (15 images × ~7 variants each)
Hero video:    29 MB
Source code:   3 MB
Total:         ~120 MB ✅ (vs 1.3GB origineel!)
```

### **Common Deployment Errors**

#### Error: "The requested resource isn't a valid image for /images/..."
**Oorzaak:** Files staan alleen in `/public/media/`, niet in `/public/images/`  
**Oplossing:** Kopieer naar BEIDE folders!

#### Error: Images load but are not optimized
**Oorzaak:** Alleen main files gekopieerd, geen variants  
**Oplossing:** Kopieer ALLE variants (-small, -medium, -large, -400x300, etc.)

#### Error: Navbar/footer logos 404
**Oorzaak:** Layout assets niet meegenomen (zitten niet in blocks)  
**Oplossing:** Maak lijst met static assets en kopieer apart

### **Verification na Deployment**

```bash
# Test deployment package
cd deployment
npm install
npm run build
npm start

# Check for errors
# ✅ Geen "requested resource isn't a valid image" errors
# ✅ Alle images laden (inclusief responsive variants)
# ✅ Navbar/footer logos laden
# ✅ CMS admin werkt op /admin
```

---

## 📦 Complete Deployment Workflow

1. **Fix CMS images** (blocks + components) ✅
2. **Run smart deployment script** → `/deployment` folder
3. **Verify deployment package locally** (test with `npm start`)
4. **Compress**: `tar -czf deployment.tar.gz deployment/`
5. **Upload to VPS**: `scp deployment.tar.gz user@vps:/var/www/`
6. **Deploy on VPS**:
   ```bash
   tar -xzf deployment.tar.gz
   cd deployment
   cp .env.example .env
   # Configure .env
   pnpm install
   pnpm build
   pnpm start
   ```

---

**Last Updated:** 13 november 2025  
**Status:** Homepage 100% compleet + Deployment ready ✅  
**Template ready voor alle andere pagina's** 🚀
