# Header & Footer configuratie via Payload CMS

## Overzicht

De navbar en footer zijn nu volledig aanpasbaar via Payload CMS **Globals**. Dit betekent dat je de navigatie, contactgegevens, social media links en meer kunt bewerken zonder code te hoeven aanpassen.

## Waar vind je de instellingen?

1. Open de Payload Admin interface: `http://localhost:3000/admin`
2. Klik in het linkermenu op **Globals**
3. Je ziet nu twee opties:
   - **Header** - Voor de navbar/bovenste balk
   - **Footer** - Voor de footer/onderste balk

## Header configuratie

### Velden:

#### **Logo**
- Upload een logo afbeelding
- Verschijnt linksboven in de navbar

#### **Contactgegevens**
- **Telefoonnummer (display)**: Het zichtbare nummer (bijv. "085 060 2989")
- **Telefoonnummer (link)**: De tel: link (bijv. "tel:+31850602989")
- **E-mailadres**: Het zichtbare e-mailadres
- **E-mail (link)**: De mailto: link

#### **Hoofdnavigatie**
Een array van links die bovenin verschijnen:
- Home
- Cases
- Over ons
- Contact

Elk item heeft:
- **Naam**: De tekst die getoond wordt
- **Link**: De URL (bijv. "/cases")

#### **Doelgroepen ("Voor wie?" menu)**
Het uitklapmenu met doelgroepen. Elk item heeft:
- **Naam**: Bijv. "Makelaars"
- **Link**: Bijv. "/makelaars"
- **Icoon**: Kies uit:
  - Building2 (gebouw - voor makelaars)
  - Globe2 (wereldbol - voor internationaal)
  - PiggyBank (spaarvarken - voor hypotheek)
  - Factory (fabriek - voor projectontwikkelaars)
  - Users (gebruikers - voor HR)
- **Beschrijving**: Korte beschrijving van de doelgroep
- **Highlights**: 2-4 bullet points met voordelen

## Footer configuratie

### Velden:

#### **Logo & Branding**
- **Logo**: Upload logo voor footer
- **Bedrijfsnaam**: "Real Accelerate"
- **Tagline**: Beschrijving onder het logo

#### **Adresgegevens**
- **Adres tonen**: Checkbox om adres wel/niet te tonen
- **Straat + huisnummer**
- **Postcode**
- **Plaats**
- **Badge tekst**: Bijv. "IQI Global Partner"

#### **Contactgegevens**
- **Telefoonnummer**
- **E-mailadres**

#### **Navigatie**
Twee kolommen met links:

1. **Pagina links**: Home, Cases, Over ons
2. **Doelgroep links**: Makelaars, Hypotheekadviseurs, etc.

Elk item heeft:
- **Naam**: De tekst
- **Link**: De URL

#### **Social Media**
- **Social media tonen**: Checkbox om social icons wel/niet te tonen
- **LinkedIn URL**: Link naar LinkedIn profiel
- **Facebook URL**: Link naar Facebook pagina
- **Instagram URL**: Link naar Instagram profiel

#### **Copyright**
- **Copyright tekst**: Gebruik `{year}` voor automatisch het huidige jaar

## Hoe te gebruiken in je frontend

### Header in Next.js page/component:

```typescript
import { getPayload } from 'payload'
import config from '@/payload.config'
import Navbar from '@/components/Navbar'

export default async function Layout() {
  const payload = await getPayload({ config })
  
  const header = await payload.findGlobal({
    slug: 'header',
  })
  
  return (
    <Navbar
      logo={header.logo?.url}
      phone={header.phone}
      phoneLink={header.phoneLink}
      email={header.email}
      emailLink={header.emailLink}
      mainLinks={header.mainLinks}
      targetGroups={header.targetGroups.map(group => ({
        name: group.name,
        href: group.href,
        icon: group.icon,
        description: group.description,
        highlights: group.highlights.map(h => h.text),
      }))}
    />
  )
}
```

### Footer in Next.js page/component:

```typescript
import { getPayload } from 'payload'
import config from '@/payload.config'
import Footer from '@/components/Footer'

export default async function Layout() {
  const payload = await getPayload({ config })
  
  const footer = await payload.findGlobal({
    slug: 'footer',
  })
  
  return (
    <Footer
      logo={footer.logo?.url}
      companyName={footer.companyName}
      tagline={footer.tagline}
      address={footer.showAddress ? footer.address : undefined}
      badge={footer.badge}
      phone={footer.phone}
      email={footer.email}
      mainLinks={footer.mainLinks}
      targetGroups={footer.targetGroups}
      social={footer.showSocial ? footer.social : undefined}
      copyrightText={footer.copyrightText}
      showAddress={footer.showAddress}
      showSocial={footer.showSocial}
    />
  )
}
```

## Voordelen

✅ **Geen code aanpassingen nodig** - Alles is aanpasbaar via de admin interface
✅ **Type-safe** - Payload genereert TypeScript types
✅ **Centraal beheer** - Eén plek om alle navigatie en footer links te beheren
✅ **Meertalig klaar** - Kan later uitgebreid worden met localization
✅ **Versie beheer** - Payload houdt automatisch historie bij van wijzigingen

## Best practices

1. **Test wijzigingen eerst**: Maak een kopie van je productie database voor testen
2. **Korte links**: Houd link teksten kort en duidelijk
3. **Consistentie**: Gebruik dezelfde naamgeving in Header en Footer
4. **Iconen**: Kies logische iconen die passen bij de doelgroep
5. **Highlights**: Maximaal 3-4 bullets per doelgroep voor overzichtelijkheid

## Troubleshooting

**Q: Mijn wijzigingen zijn niet zichtbaar?**
A: Zorg dat je de page refresh doet of de Next.js cache leegt (bij development mode).

**Q: Logo wordt niet getoond?**
A: Controleer of:
1. De afbeelding correct is geüpload in Media
2. De media item correct is gelinkt in het Header/Footer global
3. De URL correct is (check de developer console)

**Q: Links werken niet?**
A: Controleer of de href start met een `/` voor interne links of `http://` voor externe links.
