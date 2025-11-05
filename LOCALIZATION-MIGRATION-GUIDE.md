# Localization migration guide

Deze guide legt uit hoe je hardcoded content in componenten kunt migreren naar Payload CMS met volledige localisatie ondersteuning (NL/EN).

## Probleem scenario

Je hebt een component/sectie die:
- Nog hardcoded teksten bevat (direct in de JSX/TSX code)
- Alleen in het Nederlands is geschreven
- Of alleen in het Engels is geschreven
- Niet dynamisch is vanuit Payload CMS

**Resultaat:** De `/en` route toont dezelfde taal als de `/nl` route omdat de content niet gelokaliseerd is.

## Oplossing: migratie naar Payload CMS met localisatie

### Stap 1: identificeer hardcoded content

Zoek naar componenten met hardcoded strings:

```tsx
// ❌ FOUT - Hardcoded
export default function MySection() {
  return (
    <div>
      <h1>Dit is een Nederlandse titel</h1>
      <p>Dit is Nederlandse content</p>
    </div>
  )
}
```

### Stap 2: maak het component dynamisch

Pas het component aan om props te accepteren:

```tsx
// ✅ GOED - Dynamisch met props
interface MySectionProps {
  title?: string
  description?: string
  kicker?: string
  items?: Array<{ text: string }>
  // ... andere props
}

export default function MySection({ 
  title = "Fallback title",
  description,
  kicker,
  items = []
}: MySectionProps) {
  return (
    <div>
      {kicker && <span>{kicker}</span>}
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {items.map((item, i) => (
        <div key={i}>{item.text}</div>
      ))}
    </div>
  )
}
```

### Stap 3: voeg het block toe aan Payload CMS

Maak een block definitie in `/src/blocks/`:

```typescript
// src/blocks/MySection.ts
import type { Block } from 'payload'

export const MySection: Block = {
  slug: 'mySection',
  interfaceName: 'MySectionBlock',
  fields: [
    {
      name: 'kicker',
      type: 'text',
      localized: true, // ← BELANGRIJK voor vertalingen
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true, // ← BELANGRIJK voor vertalingen
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'items',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
```

**Cruciale punten:**
- Gebruik `localized: true` op ALLE velden die vertaald moeten worden
- Text, textarea, richText, en array velden kunnen `localized` zijn
- Gebruik duidelijke field namen die de content beschrijven

### Stap 4: registreer het block

Voeg het block toe aan de Pages collection:

```typescript
// src/collections/Pages.ts
import { MySection } from '../blocks/MySection'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    // ... andere velden
    {
      name: 'blocks',
      type: 'blocks',
      localized: true, // ← BELANGRIJK
      blocks: [
        HeroSection,
        TrustStrip,
        MySection, // ← Voeg je nieuwe block toe
        // ... andere blocks
      ],
    },
  ],
}
```

### Stap 5: voeg rendering toe aan PayloadBlockRenderer

Update `/src/components/PayloadBlockRenderer.tsx`:

```tsx
// Import je component
import MySection from '@/components/sections/MySection'

// In de renderBlock functie:
switch (blockType) {
  // ... andere cases
  
  case 'mySection':
    return (
      <MySection
        key={index}
        kicker={block.kicker}
        title={block.title}
        description={block.description}
        items={block.items?.map((item: any) => ({
          text: item.text
        })) || []}
      />
    )
    
  // ... andere cases
}
```

### Stap 6: maak een migratie script

Maak een script in `/scripts/migrate-[page-name].ts`:

```typescript
// scripts/migrate-my-page.ts
import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

// Nederlandse content
const pageDataNL = {
  blocks: [
    {
      blockType: 'mySection',
      kicker: 'Nederlandse kicker',
      title: 'Nederlandse titel',
      description: 'Nederlandse beschrijving',
      items: [
        { text: 'Nederlands item 1' },
        { text: 'Nederlands item 2' },
      ]
    }
  ]
}

// Engelse content
const pageDataEN = {
  blocks: [
    {
      blockType: 'mySection',
      kicker: 'English kicker',
      title: 'English title',
      description: 'English description',
      items: [
        { text: 'English item 1' },
        { text: 'English item 2' },
      ]
    }
  ]
}

async function migrate() {
  console.log('🚀 Starting migration...\n')
  
  try {
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Check if page exists
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: '/my-page' } },
      locale: 'nl',
    })
    
    let pageId: string | number
    
    if (existing.docs.length > 0) {
      pageId = existing.docs[0].id
      console.log('📝 Page exists, updating...')
    } else {
      console.log('📝 Creating new page...')
      const created = await payload.create({
        collection: 'pages',
        data: {
          title: 'My Page',
          slug: '/my-page',
          status: 'published',
          blocks: pageDataNL.blocks as any,
        },
        locale: 'nl',
      })
      pageId = created.id
    }
    
    // Update Dutch version
    console.log('📝 Updating Dutch content...')
    await payload.update({
      collection: 'pages',
      id: pageId,
      data: {
        title: 'My Page',
        blocks: pageDataNL.blocks as any,
      },
      locale: 'nl',
    })
    
    // Update English version
    console.log('📝 Updating English content...')
    await payload.update({
      collection: 'pages',
      id: pageId,
      data: {
        title: 'My Page',
        blocks: pageDataEN.blocks as any,
      },
      locale: 'en',
    })
    
    console.log('✅ Migration completed!\n')
    console.log(`👉 Visit http://localhost:3001/my-page (NL)`)
    console.log(`👉 Visit http://localhost:3001/en/my-page (EN)`)
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
```

### Stap 7: voer het migratie script uit

```bash
pnpm tsx scripts/migrate-my-page.ts
```

## Checklist voor elke migratie

- [ ] Component accepteert props met fallback waardes
- [ ] Block definitie gemaakt met `localized: true` op alle text velden
- [ ] Block geregistreerd in Pages collection
- [ ] PayloadBlockRenderer case toegevoegd
- [ ] Migratie script gemaakt met NL én EN content
- [ ] Migratie script uitgevoerd
- [ ] Getest op `/nl/[route]` en `/en/[route]`
- [ ] Gecontroleerd in Payload CMS admin (`http://localhost:3001/admin`)

## Veelvoorkomende valkuilen

### ❌ Vergeten `localized: true` toe te voegen

```typescript
// FOUT
{
  name: 'title',
  type: 'text',
  // localized: true vergeten!
}
```

**Gevolg:** Content wordt niet per taal opgeslagen, beide locales tonen dezelfde content.

### ❌ Alleen NL content migreren

```typescript
// FOUT - Alleen Nederlands gemigreerd
await payload.update({
  collection: 'pages',
  id: pageId,
  data: { blocks: pageDataNL.blocks },
  locale: 'nl', // Alleen NL!
})
// Engels vergeten!
```

**Gevolg:** `/en` route valt terug op NL content door de `fallback: true` setting.

### ❌ Block niet toevoegen aan PayloadBlockRenderer

**Gevolg:** Block wordt niet gerenderd op de frontend, lege ruimte of error.

### ❌ TypeScript type errors negeren

```typescript
// Gebruik 'as any' tijdelijk voor migratie scripts
blocks: pageData.blocks as any
```

Dit is OK voor migratie scripts, maar voor productie code moet je de juiste types gebruiken.

## Extra: migreren van bestaande pages met content

Als je een pagina hebt die al NL content heeft maar geen EN:

```typescript
// Stap 1: Haal bestaande NL content op
const existingNL = await payload.find({
  collection: 'pages',
  where: { slug: { equals: '/my-page' } },
  locale: 'nl',
})

const pageId = existingNL.docs[0].id

// Stap 2: Voeg alleen EN content toe (NL blijft behouden)
await payload.update({
  collection: 'pages',
  id: pageId,
  data: {
    blocks: pageDataEN.blocks as any,
  },
  locale: 'en', // Alleen Engels updaten
})
```

## Testen

### Test beide locales:

1. **Dutch:** `http://localhost:3001/my-page`
2. **English:** `http://localhost:3001/en/my-page`

### Test in Payload CMS:

1. Ga naar `http://localhost:3001/admin/collections/pages`
2. Open je pagina
3. Gebruik de locale selector (NL/EN toggle) rechtsboven
4. Controleer dat elke locale zijn eigen content heeft

### Test locale switcher in navbar:

- Klik op de taal toggle in de navbar
- Content moet volledig wisselen tussen NL en EN

## Hulp nodig?

- Bekijk bestaande migratie scripts in `/scripts/`
- Bekijk bestaande block definities in `/src/blocks/`
- Bekijk `PayloadBlockRenderer.tsx` voor rendering voorbeelden
- Check de Payload CMS docs: https://payloadcms.com/docs/configuration/localization

##Voorbeeld: volledige migratie

Zie `/scripts/migrate-homepage-en.ts` voor een compleet voorbeeld van:
- Vinden van bestaande pagina
- Updaten met NL content
- Toevoegen van EN content
- Error handling
- Console output

Dit is de blueprint voor alle nieuwe migraties.
