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

## 🔥 CRITICAL LESSONS LEARNED (Over-ons Page Fix)

### **Lesson 1: VERWIJDER FALLBACKS tijdens development!** ⚠️

**WAAROM?** Fallbacks verbergen problemen - je ziet nooit of CMS images echt laden!

**VERKEERD:**
```tsx
<Image 
  src={image?.sizes?.large?.url || image?.url || "/images/fallback.png"}
  alt={image?.alt || "Fallback"}
/>
```

**GOED (tijdens development):**
```tsx
<Image 
  src={image?.sizes?.large?.url || image?.url}
  alt={image?.alt || "Image"}
/>
```

Als het breekt → je ziet het direct!  
Na fix → voeg fallback toe voor backwards compatibility.

---

### **Lesson 2: Gebruik IMAGE SIZE VARIANTS voor performance!** 🚀

Payload maakt automatisch **geoptimaliseerde variants**, maar je moet ze wel gebruiken!

**File sizes (Voorbeeld over-ons team photos):**
```
Original:   1.9 - 2.8 MB  😱
thumbnail:  230 KB        ✅ (400x300)
small:      560 KB        ✅ (640x480)
medium:     94-98 KB      ✅ (1024x768)
large:      130-158 KB    ✅ (1920x1440)
```

**Component patterns:**

```tsx
// Small avatars (team photos, testimonials)
<Image 
  src={member.image?.sizes?.thumbnail?.url || member.image?.url}
  alt={member.name}
/>

// Medium images (partnerships, features)
<Image 
  src={partnership.image?.sizes?.medium?.url || partnership.image?.url}
  alt={partnership.title}
/>

// Large hero images
<Image 
  src={heroImage?.sizes?.large?.url || heroImage?.url}
  alt={heroImage?.alt}
/>
```

**Besparing:** Van 20MB naar 2MB voor 8 team photos! 🎉

---

### **Lesson 3: Schema Migration Conflicts - Direct SQL Fix** 🔧

**Problem:** `DrizzleQueryError: index already exists`

**Oorzaak:** Dev server heeft partial schema migration gedaan.

**Oplossing:** Drop conflicting indices met sqlite3:

```typescript
// scripts/fix-schema-conflicts.ts
import { execSync } from 'child_process'

const dbPath = 'ra-demo-payload.db'

const indicesToDrop = [
  'pages_blocks_[block_name]_order_idx',
  '_pages_v_blocks_[block_name]_order_idx',
  // ... meer indices
]

for (const idx of indicesToDrop) {
  execSync(`sqlite3 "${dbPath}" "DROP INDEX IF EXISTS ${idx};"`)
  console.log(`✅ Dropped: ${idx}`)
}
```

**Wanneer gebruiken:**
- Na failed schema migrations
- Bij "index already exists" errors
- Voor partial migration rollbacks

---

### **Lesson 4: Upload via HTTP API > getPayload** 🌐

**Problem:** `getPayload()` triggert schema push zelfs met `PAYLOAD_DISABLE_PUSH=true`

**Oplossing:** Upload via HTTP API (met running dev server):

```typescript
// scripts/upload-images-via-api.ts
const API_URL = 'http://localhost:3000/api'

// Check if exists
const checkResponse = await fetch(
  `${API_URL}/media?where[filename][equals]=${filename}&limit=1`
)
const existing = await checkResponse.json()

if (existing.docs.length === 0) {
  // Upload
  const fileBuffer = fs.readFileSync(imagePath)
  const blob = new Blob([fileBuffer], { type: 'image/*' })
  
  const formData = new FormData()
  formData.append('file', blob, filename)
  formData.append('alt', altText)

  const response = await fetch(`${API_URL}/media`, {
    method: 'POST',
    body: formData,
  })
}
```

**Voordelen:**
- ✅ Geen schema conflicts
- ✅ Gebruikt existing dev server
- ✅ Geen PAYLOAD_DISABLE_PUSH nodig
- ✅ Real-time feedback in CMS

---

### **Lesson 5: Direct SQL Updates als API auth faalt** 🔐

**Problem:** `HTTP 403: Forbidden` bij PATCH naar `/api/pages/:id`

**Oplossing:** Update direct via SQL:

```typescript
// scripts/update-page-direct-sql.ts
import { execSync } from 'child_process'

const dbPath = 'ra-demo-payload.db'

// Single image field
execSync(`sqlite3 "${dbPath}" "UPDATE pages_blocks_hero_section SET image_id = ${mediaId};"`)

// Array items (let op: _order kan 1-based zijn!)
execSync(`sqlite3 "${dbPath}" "UPDATE pages_blocks_team_section_members SET image_id = ${memberId} WHERE _order = '${index + 1}';"`)

// Partnerships (check eerst wat _order values zijn!)
execSync(`sqlite3 "${dbPath}" "SELECT _order, title FROM pages_blocks_partnerships WHERE _parent_id = X;"`)
// Dan pas updaten
execSync(`sqlite3 "${dbPath}" "UPDATE pages_blocks_partnerships SET image_id = ${id} WHERE _order = '${actualOrder}';"`)
```

**BELANGRIJK:** Check altijd eerst `_order` values! Ze zijn vaak 1-based, niet 0-based!

```sql
-- Check eerst
SELECT _order, title, image_id FROM pages_blocks_partnerships;

-- Output voorbeeld:
1|IQI Global|NULL
2|SETTL.|NULL

-- Dan update met juiste order
UPDATE pages_blocks_partnerships SET image_id = 30 WHERE _order = '1';
UPDATE pages_blocks_partnerships SET image_id = 32 WHERE _order = '2';
```

---

### **Lesson 6: Payload Image Upload gedrag** 📸

Wanneer je een image upload naar Media collection:

**Wat Payload automatisch doet:**
1. ✅ Upload originele file naar `/public/media/[filename]`
2. ✅ Genereer variants in `/public/media/`:
   - `[name]-thumbnail.ext` (400x300)
   - `[name]-small.ext` (640x480)
   - `[name]-medium.ext` (1024x768)
   - `[name]-large.ext` (1920x1440)
   - `[name]-xlarge.ext` (grotere sizes)
3. ✅ Sla metadata op in database (sizes, urls, dimensions)

**Wat je ZELF moet doen:**
1. ❗ Gebruik de variants in components (`image?.sizes?.medium?.url`)
2. ❗ Copy naar `/public/images/` als component fallbacks gebruikt
3. ❗ Update component code om variants te gebruiken i.p.v. originele

---

### **Lesson 7: Dev Workflow Best Practices** 🛠️

**Volgorde die ALTIJD werkt:**

```bash
# 1. Start dev server EERST
pnpm dev
# → Wacht op schema migration complete

# 2. In nieuwe terminal: Upload images via API
pnpm tsx scripts/upload-[page]-via-api.ts

# 3. Update page blocks via SQL (als API auth faalt)
pnpm tsx scripts/update-[page]-direct-sql.ts

# 4. Verify in CMS
open http://localhost:3000/admin/collections/pages

# 5. Test frontend
open http://localhost:3000/[page-slug]

# 6. Check console for errors
# ✅ Geen 404s
# ✅ Geen "invalid image" errors
# ✅ Images laden snel (check file sizes)
```

**Bij schema conflicts:**
```bash
# 1. Stop dev server
# 2. Fix schema
pnpm tsx scripts/fix-schema-conflicts.ts
# 3. Restart dev server
pnpm dev
```

---

### **Lesson 8: Testing & Verification** ✅

**Na elke image fix, test:**

1. **CMS Admin:**
   - [ ] Block heeft Media selector (niet text input!)
   - [ ] Je kunt image selecteren uit Media Library
   - [ ] Preview toont correct image
   - [ ] Save werkt zonder errors

2. **Frontend:**
   - [ ] Image laadt (geen broken icon)
   - [ ] Check Network tab: welke size wordt geladen?
   - [ ] File size is klein (< 200KB ideaal)
   - [ ] Responsive images werken (mobile, tablet, desktop)

3. **Console:**
   - [ ] Geen "Failed to load resource" errors
   - [ ] Geen "invalid image" warnings
   - [ ] Geen 404s in network tab

4. **Performance:**
   ```bash
   # Check welke variant wordt gebruikt
   # In browser Network tab, filter op 'Img'
   # Klik op image request → Headers → Request URL
   # ✅ Moet variant zijn: -thumbnail.webp, -medium.jpg, etc.
   # ❌ NIET originele: teamfoto.png (1.1MB)
   ```

---

### **Lesson 9: Common Mistakes & Fixes** 🚫→✅

#### Mistake 1: "Images laden maar zijn 2MB+"
**Fix:** Gebruik size variants in component:
```tsx
// VERKEERD
<Image src={image?.url} />

// GOED
<Image src={image?.sizes?.medium?.url || image?.url} />
```

#### Mistake 2: "Een partnership image mist"
**Fix:** Check SQL `_order` values:
```sql
-- Check eerst de orders
SELECT _order, title FROM pages_blocks_partnerships;

-- Update met JUISTE order (niet altijd 0-based!)
UPDATE pages_blocks_partnerships SET image_id = X WHERE _order = 'Y';
```

#### Mistake 3: "Schema push blijft falen"
**Fix:** Drop conflicting indices:
```bash
pnpm tsx scripts/fix-schema-conflicts.ts
```

#### Mistake 4: "Upload werkt maar update faalt met 403"
**Fix:** Gebruik direct SQL i.p.v. API:
```bash
pnpm tsx scripts/update-[page]-direct-sql.ts
```

#### Mistake 5: "Images werken in CMS maar niet op frontend"
**Fix:** Check of component variant gebruikt:
```tsx
// Component moet variant ondersteunen
image?.sizes?.medium?.url || image?.url
```

---

### **Lesson 8: Image Cropping met Variants** ⚠️ **KRITIEK!**

**PROBLEEM:** Payload variants worden **automatisch gecropped** naar vaste aspect ratios!

```typescript
// Payload genereert deze variants:
- thumbnail: 400x300   (4:3 ratio) ⚠️ CROPPED!
- small:     640x480   (4:3 ratio) ⚠️ CROPPED!
- medium:    1024x768  (4:3 ratio) ⚠️ CROPPED!
- large:     1920x1440 (4:3 ratio) ⚠️ CROPPED!
```

**Als je originele image een andere aspect ratio heeft** (bijv. portrait/vertical zoals een staande foto):
- ❌ Top/bottom wordt afgesneden bij landscape variants
- ❌ Belangrijke content verdwijnt (gezichten, voeten, etc.)

**SYMPTOOM:**
```
Hero image toont alleen arm + duim, niet hele persoon
Featured case toont team zonder voeten/vloer
```

**OPLOSSING:**

```typescript
// ❌ FOUT - gebruikt gecropte variant
<Image src={image?.sizes?.medium?.url || image?.url} />

// ✅ GOED - gebruikt originele image
<Image src={image?.url} />
```

**WANNEER welke gebruiken:**

| Scenario | Gebruik | Reden |
|----------|---------|-------|
| Portrait/vertical images | `image?.url` | Voorkom cropping |
| Square/landscape thumbnails | `image?.sizes?.small?.url` | Performance |
| Hero images (full frame) | `image?.url` | Volledige compositie |
| Icon/logo images | `image?.sizes?.thumbnail?.url` | Performance |
| Grid cards | `image?.sizes?.medium?.url` | Als aspect ratio klopt |

**BEST PRACTICE:**
```typescript
// Voor belangrijke hero/featured images
src={image?.url || fallbackUrl}

// Voor thumbnails/cards waar cropping OK is
src={image?.sizes?.medium?.url || image?.url || fallbackUrl}
```

---

### **Lesson 9: Index Conflicts bij Schema Migrations** 🔧

**PROBLEEM:** SQLite index conflicts blokkeren Payload init:
```
SQLITE_ERROR: index pages_blocks_cases_hero_order_idx already exists
```

**OORZAAK:**
- Payload probeert indices opnieuw te maken bij schema changes
- Oude indices bestaan nog in database
- Nested blocks hebben VEEL indices (100+)

**SNELLE FIX:**

```bash
# Drop ALLE gerelateerde indices
pnpm tsx scripts/drop-all-[page]-indices.ts
```

**Script template:**
```typescript
#!/usr/bin/env tsx
import { execSync } from 'child_process'

const DB_PATH = 'ra-demo-payload.db'

// Get ALL page-related indices (niet alleen _order_idx!)
const indices = execSync(
  `sqlite3 ${DB_PATH} "SELECT name FROM sqlite_master WHERE type='index' AND (name LIKE '%cases%' OR name LIKE '%international_cases%');"`,
  { encoding: 'utf-8' }
)
  .trim()
  .split('\n')
  .filter(Boolean)
  .filter(name => !name.startsWith('sqlite_autoindex')) // Skip auto indices

console.log(`Found ${indices.length} indices to drop\n`)

for (const index of indices) {
  console.log(`Dropping: ${index}`)
  execSync(`sqlite3 ${DB_PATH} "DROP INDEX IF EXISTS ${index};"`)
}

console.log('\n✅ Done!')
```

**Cases page voorbeeld:**
- Moest **138 indices** droppen (niet alleen 23 `_order_idx`!)
- Includes: `_locale_idx`, `_parent_id_idx`, `_path_idx`, `image_idx`, etc.

**GOLDEN RULE:**
> Bij schema changes: drop ALLE indices voor die block, niet alleen order indices!

---

### **Lesson 10: Nested Arrays & SQL Updates** 💾

**PROBLEEM:** Payload API timeouts/auth issues bij complexe updates

**OPLOSSING:** Direct SQL voor nested array inserts

**Cases Page Voorbeeld - ProjectsShowcase:**

```typescript
// Block definitie heeft nieuwe nested array:
{
  name: 'projects',
  type: 'array',
  fields: [
    { name: 'websitePreview', type: 'upload' },
    { name: 'caseStudyId', type: 'text' }
  ]
}
```

**SQL Insert Pattern:**
```sql
-- CRITICAL: Altijd id, _locale en _parent_id meegeven!
INSERT INTO pages_blocks_cases_projects_showcase_projects 
  (id, _order, _parent_id, _locale, case_study_id, website_preview_id)
VALUES 
  (lower(hex(randomblob(12))), '1', (SELECT id FROM pages_blocks_cases_projects_showcase WHERE _parent_id = 3 LIMIT 1), 'nl', 'brabant-makelaar', 53),
  (lower(hex(randomblob(12))), '2', (SELECT id FROM pages_blocks_cases_projects_showcase WHERE _parent_id = 3 LIMIT 1), 'nl', 'paul-thijssen', 54);
```

**CRITICAL Requirements:**
1. ✅ `id` = `lower(hex(randomblob(12)))` (24 char hex)
2. ✅ `_locale` = 'nl' (of 'en', nooit NULL!)
3. ✅ `_parent_id` = parent block id (via SELECT subquery)
4. ✅ `_order` = string! ('1', '2', niet 1, 2)

**Foutmeldingen betekenis:**
```
NOT NULL constraint failed: table._locale
→ Vergeten _locale='nl' toe te voegen

NOT NULL constraint failed: table.id  
→ Vergeten id=lower(hex(randomblob(12)))
```

---

### **Lesson 11: Cases Page Specifieke Learnings** 📚

**Unieke challenges:**
1. **10 images** (meer dan homepage/over-ons)
2. **4 nested arrays** (videos, otherCases, projects, stats)
3. **Mixed aspect ratios** (portrait hero + landscape cards)

**Oplossingen:**
1. ✅ Originele URLs voor hero/featured (geen variants)
2. ✅ Direct SQL voor alle nested updates
3. ✅ 138 indices gedropped (meest ooit)
4. ✅ Dedicated drop-indices script

**Performance result:**
```
✅ 10 images uploaded (Media IDs 46-55)
✅ All blocks updated via SQL
✅ No cropping issues
✅ Lazy loading werkt perfect
```

**Script flow:**
```bash
# 1. Upload images
pnpm tsx scripts/migrate-cases-images.ts
# → Output: cases-images-mapping.json

# 2. Drop ALL indices
pnpm tsx scripts/drop-all-cases-indices.ts  
# → 138 indices dropped

# 3. Start dev server
pnpm dev
# → Schema migration succeeds

# 4. Update blocks (SQL)
sqlite3 ra-demo-payload.db < scripts/update-cases-blocks.sql
```

---

## 📊 Over-ons Page: Complete Example

**Fixed blocks:**
1. ✅ OverOnsHeroSection - 1 hero image
2. ✅ OverOnsTeamSection - 8 team member photos
3. ✅ OverOnsPartnershipsSection - 2 partnership logos
4. ✅ OverOnsOfficeSection - 1 office photo

**Performance improvement:**
```
Before (originals):  ~15 MB total
After (variants):    ~2 MB total
Improvement:         87% reduction! 🎉
```

**Scripts used:**
- `fix-over-ons-schema.ts` - Drop conflicting indices
- `upload-over-ons-via-api.ts` - Upload 12 images via HTTP
- `update-over-ons-direct-sql.ts` - Link images to blocks

**Final checklist:**
- [x] All 4 blocks have upload fields
- [x] All 4 components use size variants
- [x] No fallback URLs (development)
- [x] All images < 200KB (except hero)
- [x] SQL updates used correct _order values
- [x] CMS shows Media selectors
- [x] Frontend loads optimized images

---

## 📊 Cases Page: Complete Example

**Fixed blocks:**
1. ✅ CasesHero - 1 hero image (portrait - no cropping!)
2. ✅ CasesBestVariants - 3 images (1 featured + 2 other cases)
3. ✅ CasesVideoTestimonials - 3 video thumbnails
4. ✅ CasesProjectsShowcase - 3 website previews (large variant)

**Complexiteit:**
```
Images:         10 (meest tot nu toe)
Nested arrays:  4 (videos, otherCases, projects, stats)
Indices dropped: 138 (record!)
Aspect ratios:  Mixed (portrait + landscape)
```

**Kritieke oplossingen:**
- ✅ Originele URLs voor portrait images (geen cropping)
- ✅ Direct SQL voor alle nested array inserts
- ✅ Drop-all-indices script voor 138 conflicting indices
- ✅ ID generation met `lower(hex(randomblob(12)))`

**Scripts gebruikt:**
- `migrate-cases-images.ts` - Upload 10 images (IDs 46-55)
- `drop-all-cases-indices.ts` - Drop 138 indices
- Direct SQL updates voor nested arrays

**Final checklist:**
- [x] All 4 blocks have upload fields
- [x] Hero/featured use original URLs (no cropping)
- [x] Other images use appropriate variants
- [x] No console errors
- [x] Lazy loading works
- [x] 138 indices dropped successfully
- [x] CMS shows Media selectors
- [x] Frontend loads images perfectly

---

**Last Updated:** 13 november 2025  
**Status:** Homepage + Over-ons + Cases 100% compleet ✅  
**Template + Lessons Learned ready voor alle andere pagina's** 🚀

---

## 🎯 Quick Command Reference

```bash
# Schema fixes
pnpm tsx scripts/fix-[page]-schema.ts

# Upload images (via API - preferred)
pnpm tsx scripts/upload-[page]-via-api.ts

# Update blocks (direct SQL if API fails)
pnpm tsx scripts/update-[page]-direct-sql.ts

# Check SQL data
sqlite3 ra-demo-payload.db "SELECT * FROM pages_blocks_[block_name];"

# Verify images
ls -lh public/images/[filename]*.{webp,jpg,png}

# Test deployment
cd deployment && pnpm install && pnpm build && pnpm start
```
