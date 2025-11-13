# CMS Images Fix Guide - Complete Workflow

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

**Last Updated:** 13 november 2025  
**Status:** Homepage 100% compleet ✅  
**Template ready voor alle andere pagina's** 🚀
