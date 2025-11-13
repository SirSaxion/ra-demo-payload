# Homepage Images Update Instructies

## ✅ Wat is al gedaan:

1. **HeroSection block definitie** - Image velden toegevoegd in `/src/blocks/HeroSection.ts`
2. **Component** - Updated om CMS images te gebruiken in `/src/components/sections/home/HeroSection.tsx`
3. **PayloadBlockRenderer** - Updated om image props door te geven
4. **Update script** - Gemaakt in `/scripts/update-homepage-images.ts`

## 🚀 Stappen om af te ronden:

### Stap 1: Start de dev server om schema te migreren

```bash
pnpm dev
```

Dit zal de database schema auto-updaten met de nieuwe image velden.

### Stap 2: Wanneer de server draait, run het update script

Open een nieuwe terminal en run:

```bash
pnpm tsx scripts/update-homepage-images.ts
```

Dit script zal:
- De homepage vinden in het CMS
- Alle blocks updaten met de juiste image IDs
- Niets resetten of verwijderen

### Alternatief: Handmatig via CMS UI

Als je liever handmatig werkt:

1. Ga naar http://localhost:3001/admin/collections/pages
2. Open de homepage (slug: `/`)
3. Bewerk het "Hero Section" block
4. Koppel de volgende images (ze staan al in Media collection):
   - **Hero Video Poster**: herofootage_first_frame.webp
   - **Avatar 1**: brabantmakelaar_avatar.webp (Amory - De Brabant Makelaar)
   - **Avatar 2**: thomapost_avatar.webp (Marlies - Thoma Post)
   - **Avatar 3**: paulthijssen_avatar.webp (Paul - Paul Thijssen Makelaardij)
5. Save & Publish

## 📊 Image Mapping

Alle images zijn al gemigreerd op 13 nov 2025. De mapping:

| File | Media ID | Gebruik |
|------|----------|---------|
| herofootage_first_frame.webp | 1 | Hero video poster |
| brabantmakelaar_avatar.webp | 2 | Avatar 1 |
| thomapost_avatar.webp | 3 | Avatar 2 |
| paulthijssen_avatar.webp | 4 | Avatar 3 |

## ✨ Result

Na het uitvoeren van deze stappen:
- Images zijn niet meer hardcoded
- Je kunt ze aanpassen in het CMS
- De homepage werkt direct vanuit het CMS
