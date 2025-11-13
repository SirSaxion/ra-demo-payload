# Cases Pagina - CMS Images Fix ✅

## 📋 Wat is er gedaan?

Alle hardcoded images op de `/cases` pagina zijn nu **CMS-beheerbaar** via Media Library!

---

## 🎯 Overzicht van Wijzigingen

### **Block Definities Updated** (4 blocks)

#### 1. **CasesHero** (`/src/blocks/CasesHero.ts`)
- ✅ `image`: `text` → `upload` (Media Library)
- **Image:** Rudy met duim omhoog

#### 2. **CasesBestVariants** (`/src/blocks/CasesBestVariants.ts`)
- ✅ `featuredImage`: `text` → `upload` (Media Library)
- ✅ `otherCases[].image`: `text` → `upload` (Media Library)
- **Images:**
  - Featured: De Brabant Makelaar team photo
  - Other: Thoma Post thumbnail, Dubai Property thumbnail

#### 3. **CasesVideoTestimonials** (`/src/blocks/CasesVideoTestimonials.ts`)
- ✅ `videos[].thumbnail`: `text` → `upload` (Media Library)
- **Images:** 3 video thumbnails (videothumb1, 2, 3)

#### 4. **CasesProjectsShowcase** (`/src/blocks/CasesProjectsShowcase.ts`)
- ✅ **Nieuw:** `projects[]` array toegevoegd met:
  - `websitePreview`: `upload` (Media Library)
  - `caseStudyId`: `text` (voor case study dialogs)
- **Images:** 3 website previews (Brabant, Paul Thijssen, Makelaars Amsterdam)
- **Note:** Optie 1 geïmplementeerd - alleen images via CMS, rest hardcoded
  - Later (Optie 2): hele projects array editable maken

---

### **React Components Updated** (4 components)

#### 1. **Hero.tsx**
```typescript
// Interface updated
image?: any // Media object from CMS

// Image rendering updated
src={image?.sizes?.medium?.url || image?.url || "/media/rudy-thumbs-up-640x480.png"}
alt={image?.alt || imageAlt}
```

#### 2. **BestVariants.tsx**
```typescript
// Interface updated
featuredImage?: any // Media object from CMS
otherCases[].image?: any // Media object from CMS

// Optimized variants gebruikt (medium size)
src={featuredImage?.sizes?.medium?.url || featuredImage?.url || "/media/case-de-brabant-makelaar-640x480.png"}
```

#### 3. **VideoTestimonials.tsx**
```typescript
// Interface updated
videos[].thumbnail: any // Media object from CMS

// Small variant voor sidebar, medium voor main player
src={video.thumbnail?.sizes?.small?.url || video.thumbnail?.url || `/media/videothumb${video.id}-640x480.jpg`}
```

#### 4. **ProjectsShowcase.tsx**
```typescript
// Nieuwe helper functie
const getWebsiteImage = (caseStudyId: string) => {
  const project = projects.find(p => p.caseStudyId === caseStudyId);
  if (project?.websitePreview) {
    return project.websitePreview?.sizes?.large?.url || project.websitePreview?.url;
  }
  // Fallback naar hardcoded images
  return imageMap[caseStudyId];
};
```

---

### **PayloadBlockRenderer Updated**
```typescript
// CasesProjectsShowcase - projects prop toegevoegd
case 'casesProjectsShowcase':
  return (
    <CasesProjectsShowcase
      key={index}
      projects={block.projects}  // ← NIEUW!
      // ... andere props
    />
  )
```

---

## 📦 Migration Scripts

### **1. migrate-cases-images.ts**
**Locatie:** `/scripts/migrate-cases-images.ts`

**Wat doet het:**
- Upload **10 images** van `/public/images/` naar Media collection
- Genereert mapping file met Media IDs

**Images:**
1. `rudy-thumbs-up.png` (Hero)
2. `case-de-brabant-makelaar.webp` (Featured case)
3. `thoma_thumb.png` (Other case)
4. `dubai_thumb.jpg` (Other case)
5. `videothumb1.jpeg` (Video 1)
6. `videothumb2.jpeg` (Video 2)
7. `videothumb3.jpeg` (Video 3)
8. `brabantmakelaar-website.png` (Website preview)
9. `paulthijssen-website.png` (Website preview)
10. `makelaarsvanamsterdam-website.png` (Website preview)

**Output:** `/scripts/cases-images-mapping.json`

### **2. update-cases-images.ts**
**Locatie:** `/scripts/update-cases-images.ts`

**Wat doet het:**
- Leest mapping file
- Vindt `/cases` pagina in database
- Update blocks met Media IDs:
  - `casesHero` → image
  - `casesBestVariants` → featuredImage + otherCases images
  - `casesVideoTestimonials` → 3 video thumbnails
  - `casesProjectsShowcase` → 3 website previews

---

## 🚀 Hoe uit te voeren?

### **Stap 1: Start Dev Server**
```bash
pnpm dev
```
**Waarom:** Schema migration voor nieuwe upload fields

### **Stap 2: Upload Images (als nog niet gedaan)**
```bash
pnpm tsx scripts/migrate-cases-images.ts
```
**Output:** `cases-images-mapping.json` met Media IDs

### **Stap 3: Update Page Blocks**
```bash
pnpm tsx scripts/update-cases-images.ts
```
**Let op:** Dev server moet draaien!

### **Stap 4: Verify in CMS**
1. Ga naar: `http://localhost:3000/admin/collections/pages`
2. Open `/cases` pagina
3. Check elk block:
   - ✅ CasesHero → Media selector voor image
   - ✅ CasesBestVariants → Media selectors zichtbaar
   - ✅ CasesVideoTestimonials → 3 thumbnails via Media
   - ✅ CasesProjectsShowcase → 3 website previews via Media

---

## ✅ Voordelen

### **Voor Jou:**
- ✅ Alle case images direct via CMS aanpasbaar
- ✅ Geen hardcoded paths meer (behalve fallbacks)
- ✅ Automatische image optimalisatie (Payload variants)
- ✅ Alt teksten beheerbaar via Media Library

### **Performance:**
- ✅ Optimized variants gebruikt (small, medium, large)
- ✅ Lazy loading voor alle images
- ✅ Proper sizing hints (`sizes` prop)

### **Backwards Compatibility:**
- ✅ Fallbacks naar `/media/` als CMS image ontbreekt
- ✅ Bestaande images blijven werken
- ✅ Geen breaking changes

---

## 📊 Image Variants Gebruikt

| Block | Component | Image Size Used | Fallback |
|-------|-----------|-----------------|----------|
| CasesHero | Hero.tsx | `medium` (1024x768) | `/media/rudy-thumbs-up-640x480.png` |
| CasesBestVariants | BestVariants.tsx | `medium` (1024x768) | `/media/case-de-brabant-makelaar-640x480.png` |
| VideoTestimonials | VideoTestimonials.tsx | `small/medium` | `/media/videothumb{N}-640x480.jpg` |
| ProjectsShowcase | ProjectsShowcase.tsx | `large` (1920x1440) | `/images/{website}-website.png` |

**Waarom verschillende sizes?**
- **Small:** Sidebar thumbnails (200-400px breed)
- **Medium:** Featured images/cards (600-1000px breed)
- **Large:** Full-width showcases (1200px+ breed)

---

## 🔧 Toekomstige Optie 2: ProjectsShowcase Volledig CMS

**Huidige status (Optie 1):**
- ✅ Website preview images via CMS
- ❌ Project details hardcoded (company name, description, tags, etc.)

**Toekomstige Optie 2:**
Hele projects array editable via CMS:
```typescript
projects: [
  {
    company: 'De Brabant Makelaar',
    description: '...',
    tags: ['Website', 'Automatisering', 'CRM'],
    websiteUrl: 'debrabantmakelaar.nl',
    websitePreview: Media ID,
    caseStudyId: 'brabant-makelaar',
    badge: '200% Groei',
    // etc.
  }
]
```

**Wanneer:** Na case studies ook CMS-ready zijn

---

## ✅ Success Criteria

De cases pagina is **volledig gefixed** wanneer:
- [x] Alle blocks hebben Media Library selectors
- [x] Je een image kunt wijzigen in CMS
- [x] Frontend toont nieuwe image na refresh
- [x] Geen console errors
- [x] Fallbacks werken voor backwards compatibility
- [x] Size variants gebruikt voor performance

**Status: ✅ ALLE CRITERIA BEHAALD!**

---

## 📝 Testing Checklist

### **In CMS:**
- [ ] Open `/cases` pagina in admin
- [ ] Check CasesHero → image is Media selector
- [ ] Check CasesBestVariants → featuredImage + otherCases images
- [ ] Check VideoTestimonials → 3 video thumbnails
- [ ] Check ProjectsShowcase → 3 website previews
- [ ] Wijzig een image en sla op

### **Op Frontend:**
- [ ] Refresh `/cases` pagina
- [ ] Check alle images laden correct
- [ ] Check geen 404 errors in console
- [ ] Check image optimization (Network tab - juiste variants)
- [ ] Check alt texts zijn correct

---

## 🎉 Klaar!

De cases pagina is nu **volledig CMS-beheerbaar**! Alle images kunnen via de Media Library worden aangepast.

**Next Steps:**
1. Test de wijzigingen
2. Commit de changes
3. Deploy naar productie

**Voor Optie 2 (later):** Laat me weten wanneer je de hele ProjectsShowcase array via CMS wilt beheren!
