# Projectontwikkelaars localization fix

## Probleem
De projectontwikkelaars blocks hebben **GEEN `localized: true`** op hun velden. Hierdoor wordt content niet per locale opgeslagen en tonen beide `/projectontwikkelaars` en `/en/projectontwikkelaars` dezelfde content.

## Oplossing
Voeg `localized: true` toe aan ALLE text, textarea en array velden in de volgende blocks:

### ✅ Already fixed:
1. `ProjectontwikkelaarsResultatenBentoGrid.ts` - badge, title, subtitle
2. `ProjectontwikkelaarsWatJeKrijgtSection.ts` - badge, title, subtitle  
3. `ProjectontwikkelaarsFAQSection.ts` - kicker, title, subtitle, questions array, contactLinkText, phoneLabel

### ⚠️ Still need to fix:

#### 1. ProjectontwikkelaarsHero.ts
Add `localized: true` to:
- badge
- title
- titleHighlight
- subtitle
- bullets (array)
- ctaPrimary.label
- ctaSecondary.label
- showcaseImageAlt
- showcaseTitle
- showcaseSubtitle
- showcaseStats (array)
- floatingStat.value
- floatingStat.label
- showcaseNote

**DON'T localize:** showcaseImage (path), ctaSecondary.href (URL), showcaseIcon (icon name)

#### 2. ProjectontwikkelaarsTrustStrip.ts
Add `localized: true` to:
- trustItems (array)

#### 3. ProjectontwikkelaarsPainPointsSection.ts
Need to check structure and add `localized: true` to all text fields

#### 4. ProjectontwikkelaarsMethodologySection.ts
Need to check structure and add `localized: true` to all text fields

#### 5. ProjectontwikkelaarsBewezenAanpakSection.ts
Need to check structure and add `localized: true` to all text fields

#### 6. ProjectontwikkelaarsDubaiSuccessStorySection.ts
Need to check structure and add `localized: true` to all text fields

#### 7. ProjectontwikkelaarsVoorWieIsDitSection.ts
Need to check structure and add `localized: true` to all text fields

#### 8. ProjectontwikkelaarsStrategieSessionCTA.ts
Need to check structure and add `localized: true` to all text fields

## Na het fixen van blocks:

1. **Herstart de dev server** - Payload moet de schema changes oppikken
2. **Run een nieuwe migratie** met de correcte block types en content
3. **Test beide locales** in de browser

## Regel van duim:
- ✅ `localized: true` voor: text, textarea, richText, arrays met text content
- ❌ NIET localized: image paths, URLs (href), icon names, technical identifiers
