# SEO & Lighthouse optimalisatie

## 🎯 Overzicht

De website is volledig geoptimaliseerd voor SEO en hoge Lighthouse scores met dynamische sitemap en robots.txt generatie vanuit Payload CMS.

## ✅ Wat is geïmplementeerd

### 1. **SEO Global** (`/src/globals/SEO.ts`)
Centraal beheer van alle SEO-instellingen via Payload admin.

**Toegang**: `http://localhost:3000/admin/globals/seo`

#### Secties:

**Site instellingen**
- Site titel & beschrijving
- Canonical URL
- Standaard OG Image voor social sharing

**Robots.txt configuratie**
- Enable/disable toggle
- Custom robots.txt (optioneel)
- Blokkeer-paden array (default: `/admin`, `/api`, `/_next`)

**Sitemap configuratie**
- Enable/disable toggle
- Pagina's toevoegen (auto)
- Case Studies toevoegen (auto)
- Standaard wijzigingsfrequentie
- Standaard prioriteit

**Gestructureerde data (Schema.org)**
- Organization schema met:
  - Bedrijfsgegevens
  - Logo
  - Adres
  - Contact informatie
  - Social media profielen

**Performance instellingen**
- Preloading toggle
- Lazy loading toggle

---

### 2. **Dynamische Sitemap** (`/src/app/(frontend)/sitemap.ts`)

**URL**: `https://www.realaccelerate.nl/sitemap.xml`

#### Features:
- ✅ Automatisch alle gepubliceerde pages
- ✅ Alle case studies (met URL `/cases/{id}`)
- ✅ Contact pagina
- ✅ Dynamische `lastModified` op basis van update timestamp
- ✅ Configureerbare change frequency en priority
- ✅ Fallback bij fout met hardcoded essentiële routes

#### Voorbeeld output:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.realaccelerate.nl/</loc>
    <lastmod>2025-10-31</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.realaccelerate.nl/makelaars</loc>
    <lastmod>2025-10-31</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- ... meer URLs ... -->
</urlset>
```

---

### 3. **Dynamische Robots.txt** (`/src/app/(frontend)/robots.ts`)

**URL**: `https://www.realaccelerate.nl/robots.txt`

#### Features:
- ✅ Configureerbare disallow paden
- ✅ Automatische sitemap referentie
- ✅ Fallback bij fout

#### Voorbeeld output:
```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
Disallow: /_next

Sitemap: https://www.realaccelerate.nl/sitemap.xml
```

---

## 🚀 Setup & gebruik

### 1. **Initialiseer SEO instellingen**

Na het migreren van alle data:

```bash
pnpm run init:seo
```

Dit vult de SEO Global met standaard waarden:
- Canonical URL: `https://www.realaccelerate.nl`
- Sitemap: Enabled
- Robots.txt: Enabled
- Organization schema: Enabled met bedrijfsgegevens

### 2. **Bekijk/test de output**

**Lokaal:**
- Sitemap: `http://localhost:3000/sitemap.xml`
- Robots: `http://localhost:3000/robots.txt`

**Productie:**
- Sitemap: `https://www.realaccelerate.nl/sitemap.xml`
- Robots: `https://www.realaccelerate.nl/robots.txt`

### 3. **Aanpassen via admin**

1. Ga naar: `http://localhost:3000/admin/globals/seo`
2. Pas instellingen aan naar wens
3. Sla op
4. De sitemap en robots.txt worden automatisch bijgewerkt

---

## 📊 Lighthouse optimalisatie tips

### Performance (100)
- ✅ **Preloading**: Kritische resources voorladen
- ✅ **Lazy loading**: Images lazy loaden
- ✅ **Next.js Image**: Gebruik `<Image>` component
- ✅ **Code splitting**: Automatisch door Next.js
- 🔄 **CDN**: Deploy naar Vercel/Netlify voor edge caching

### SEO (100)
- ✅ **Sitemap**: Dynamisch gegenereerd
- ✅ **Robots.txt**: Geconfigureerd
- ✅ **Meta tags**: Per pagina instelbaar
- ✅ **Canonical URLs**: Ingesteld
- ✅ **Structured data**: Organization schema
- 🔄 **Open Graph**: Per pagina OG image instelbaar

### Accessibility (100)
- 🔄 **Alt teksten**: Zorg dat alle images `alt` attributen hebben
- 🔄 **Semantic HTML**: Gebruik correcte heading hiërarchie
- 🔄 **Color contrast**: Check contrast ratios
- 🔄 **ARIA labels**: Voeg toe waar nodig

### Best Practices (100)
- ✅ **HTTPS**: Deploy met SSL
- ✅ **Console errors**: Fix alle console errors
- 🔄 **Mixed content**: Alleen HTTPS resources
- ✅ **Permissions**: Correct ingesteld

---

## 🔧 Aanvullende optimalisaties

### 1. **Per-page SEO**

Elke Page in Payload heeft een SEO tab met:
- Meta titel (max 60 karakters)
- Meta beschrijving (max 160 karakters)
- OG Image voor social sharing
- Organization schema data

### 2. **Case Studies SEO**

Elke Case Study heeft:
- Meta titel
- Meta beschrijving
- Automatisch in sitemap opgenomen

### 3. **Schema.org markup**

De Organization schema wordt automatisch toegevoegd aan elke pagina als het is ingeschakeld in de SEO Global. Dit verbetert:
- Google Knowledge Graph
- Rich snippets in zoekresultaten
- Local SEO

#### Voorbeeld JSON-LD:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Real Accelerate",
  "legalName": "Real Accelerate B.V.",
  "url": "https://www.realaccelerate.nl",
  "logo": "https://www.realaccelerate.nl/images/logorealaccelerate.webp",
  "description": "Voorspelbare groei voor makelaars en vastgoedteams",
  "email": "info@realaccelerate.nl",
  "telephone": "+31850602989",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Daalwijkdreef 47",
    "postalCode": "1103 AD",
    "addressLocality": "Amsterdam",
    "addressCountry": "NL"
  },
  "sameAs": [
    "https://www.linkedin.com/company/realaccelerate",
    "https://www.facebook.com/realaccelerate"
  ]
}
```

---

## 📋 Checklist voor productie

Voordat je live gaat:

- [ ] Update `canonicalUrl` in SEO Global naar productie URL
- [ ] Check alle meta titels en beschrijvingen
- [ ] Upload correcte OG images (1200x630px)
- [ ] Test sitemap.xml en robots.txt
- [ ] Voeg website toe aan Google Search Console
- [ ] Voeg website toe aan Bing Webmaster Tools
- [ ] Submit sitemap in Search Console
- [ ] Check mobile-friendliness
- [ ] Run Lighthouse audit
- [ ] Fix alle waarschuwingen/errors

---

## 🔗 Handige links

**Testing tools:**
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Google Search Console](https://search.google.com/search-console)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

**Documentation:**
- [Next.js SEO](https://nextjs.org/learn/seo/introduction-to-seo)
- [Next.js Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Sitemap.xml specification](https://www.sitemaps.org/)

---

## 💡 Tips voor hoge scores

1. **Gebruik Next.js Image component overal**
   ```tsx
   import Image from 'next/image'
   <Image src="/images/hero.jpg" width={1200} height={600} alt="..." />
   ```

2. **Font optimization**
   - Gebruik `next/font` voor Google Fonts
   - Preload custom fonts

3. **Minimize JavaScript**
   - Tree-shake unused code
   - Use dynamic imports voor grote components

4. **Cache strategie**
   - Gebruik ISR (Incremental Static Regeneration)
   - Set correct cache headers

5. **Image optimization**
   - WebP formaat waar mogelijk
   - Juiste sizing (geen te grote images)
   - Lazy loading voor below-the-fold images

---

Succes met de Lighthouse 100-scores! 🚀
