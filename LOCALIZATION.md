# Meertaligheid in ra-demo-payload

Dit project ondersteunt nu meertaligheid (Nederlands en Engels) via Payload CMS localization.

## Configuratie

### Talen
- **Nederlands (nl)**: Standaard/voertaal
- **Engels (en)**: Tweede taal

### Payload CMS Configuratie
In `payload.config.ts` is localization geconfigureerd:
```typescript
localization: {
  locales: [
    { label: 'Nederlands', code: 'nl' },
    { label: 'English', code: 'en' },
  ],
  defaultLocale: 'nl',
  fallback: true,
}
```

## Vertaalbare Content

### Collections
De volgende collections hebben vertaalbare velden:

#### Pages
- `title` - Pagina titel
- `blocks` - Alle blokken (volledige content)
- `seo.metaTitle` - Meta titel
- `seo.metaDescription` - Meta beschrijving

#### Case Studies
- `title` - Titel
- `subtitle` - Ondertitel
- `description` - Beschrijving
- `category` - Categorie
- `results` - Resultaten array
- `testimonial` - Testimonial groep

### Globals
De volgende globals hebben vertaalbare velden:

#### Header
- `mainLinks` - Hoofdnavigatie links
- `targetGroups` - Doelgroepen menu items

#### Footer
- `tagline` - Tagline
- `badge` - Badge tekst
- `mainLinks` - Pagina links
- `targetGroups` - Doelgroep links
- `copyrightText` - Copyright tekst

#### SEO
- `siteSettings.siteTitle` - Site titel
- `siteSettings.siteDescription` - Site beschrijving

## Frontend Implementatie

### Language Selector
Er is een language selector toegevoegd aan de Navbar:
- **Desktop**: Icon met "NL" of "EN" rechtsboven in de navbar
- **Mobile**: Volledige button in het mobile menu

De language selector schakelt tussen routes:
- Nederlands: `/` (geen prefix)
- Engels: `/en/` (met prefix)

### URL Structuur
- Nederlands (default): `https://example.com/makelaars`
- Engels: `https://example.com/en/makelaars`

### Middleware
Het `middleware.ts` bestand handelt af:
- Locale detectie uit URL
- Fallback naar Accept-Language header
- Redirects voor niet-gelokaliseerde URLs
- Exclusion van admin/api routes

## Content Beheren

### In Payload CMS Admin Panel

1. **Nieuwe content aanmaken**:
   - Maak content aan in Nederlands (default)
   - Klik op de locale selector rechtsboven in het admin panel
   - Schakel naar Engels
   - Vertaal alle vertaalbare velden

2. **Bestaande content vertalen**:
   - Open een bestaand document/global
   - Klik op de locale selector (NL/EN toggle rechtsboven)
   - Schakel naar Engels
   - Vul de Engelse vertalingen in
   - Sla op

3. **Fallback gedrag**:
   - Als een Engels veld leeg is, wordt de Nederlandse versie getoond
   - Dit kan aangepast worden via `fallback: true/false` in de config

## API Calls met Locale

### GraphQL
```graphql
query {
  Pages(locale: "en") {
    docs {
      title
      blocks
    }
  }
}
```

### REST API
```javascript
// Fetch with specific locale
fetch('http://localhost:3000/api/pages?locale=en')

// Fetch with fallback disabled
fetch('http://localhost:3000/api/pages?locale=en&fallback-locale=none')

// Fetch all locales
fetch('http://localhost:3000/api/pages?locale=all')
```

### Local API (Server-side)
```typescript
const page = await payload.find({
  collection: 'pages',
  locale: 'en',
  fallbackLocale: 'nl',
})
```

## Blocks

Blocks zijn automatisch vertaalbaar omdat het `blocks` veld zelf als `localized: true` is gemarkeerd. Dit betekent dat:
- Elke locale zijn eigen set blocks kan hebben
- Je verschillende content layouts per taal kunt gebruiken
- Alle tekst binnen blocks automatisch per locale wordt opgeslagen

Als je specifieke block velden ook vertaalbaar wilt maken binnen één block, markeer die velden in de block definitie met `localized: true`.

## Toekomstige Uitbreidingen

### Meer talen toevoegen
1. Voeg toe aan `payload.config.ts`:
```typescript
localization: {
  locales: [
    { label: 'Nederlands', code: 'nl' },
    { label: 'English', code: 'en' },
    { label: 'Français', code: 'fr' }, // Nieuw
  ],
  defaultLocale: 'nl',
  fallback: true,
}
```

2. Update `middleware.ts`:
```typescript
const locales = ['nl', 'en', 'fr']
```

3. Update language selector in `Navbar.tsx`

### Custom locale picker
Je kunt een uitgebreidere locale picker maken met een dropdown die alle beschikbare talen toont.

## Troubleshooting

### "Content niet zichtbaar in Engels"
- Controleer of je de Engelse versie hebt opgeslagen in Payload admin
- Check of `fallback: true` staat in de config
- Verifieer dat het veld `localized: true` heeft

### "Language selector werkt niet"
- Check browser console voor errors
- Verifieer dat middleware.ts correct is geconfigureerd
- Controleer of de routes correct zijn ingesteld

### "SEO meta tags niet vertaald"
- Zorg dat je in de page template de locale doorgeeft aan metadata generation
- Check of seo velden `localized: true` hebben in Pages.ts

## Best Practices

1. **Altijd Nederlandse content eerst**: Begin met Nederlandse content, vertaal daarna naar Engels
2. **Consistente terminologie**: Gebruik consistente vertalingen voor terugkerende termen
3. **Test beide talen**: Test altijd beide taalversies voor je publiceert
4. **SEO per taal**: Optimaliseer SEO content specifiek per taal, niet letterlijk vertalen
5. **Fallback gebruik**: Laat fallback aan staan zodat incomplete vertalingen geen lege pagina's tonen
