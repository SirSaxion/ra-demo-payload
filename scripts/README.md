# Migration Scripts

Deze folder bevat alle **actieve** migration scripts voor het migreren van content naar Payload CMS.

## 🚀 Actieve Migraties

Run deze scripts om content te migreren naar de database:

### 1. Homepage
```bash
pnpm tsx scripts/migrate-homepage.ts
```
- **Slug:** `/`
- **Blocks:** 9 (NL) + 9 (EN)
- **Status:** ✅ Actief

### 2. Over Ons
```bash
pnpm tsx scripts/migrate-over-ons.ts
```
- **Slug:** `/over-ons`
- **Blocks:** 10 (NL) + 10 (EN)
- **Status:** ✅ Actief

### 3. Cases
```bash
pnpm tsx scripts/migrate-cases.ts
```
- **Slug:** `/cases`
- **Blocks:** 8 (NL) + 8 (EN)
- **Status:** ✅ Actief

### 4. Makelaars
```bash
pnpm tsx scripts/migrate-makelaars.ts
```
- **Slug:** `/makelaars`
- **Blocks:** 11 (NL) + 11 (EN)
- **Status:** ✅ Actief

### 5. Makelaars Buitenland
```bash
pnpm tsx scripts/migrate-buitenland.ts
```
- **Slug:** `/makelaars-buitenland`
- **Blocks:** 10 (NL) + 10 (EN)
- **Status:** ✅ Actief

### 6. Hypotheekadviseurs
```bash
pnpm tsx scripts/migrate-hypotheekadviseurs.ts
```
- **Slug:** `/hypotheekadviseurs`
- **Blocks:** 11 (NL) + 11 (EN)
- **Status:** ✅ Actief

## 🔄 Alle Pagina's Migreren

Run alle migraties in één keer:

```bash
pnpm tsx scripts/migrate-homepage.ts && \
pnpm tsx scripts/migrate-over-ons.ts && \
pnpm tsx scripts/migrate-cases.ts && \
pnpm tsx scripts/migrate-makelaars.ts && \
pnpm tsx scripts/migrate-buitenland.ts && \
pnpm tsx scripts/migrate-hypotheekadviseurs.ts
```

## 📁 Folder Structuur

```
scripts/
├── README.md                      # Deze file
├── TEMPLATE-migrate-page.ts       # Template voor nieuwe migraties
├── migrate-homepage.ts            # ✅ Homepage migratie
├── migrate-over-ons.ts            # ✅ Over Ons migratie
├── migrate-cases.ts               # ✅ Cases migratie
├── migrate-makelaars.ts           # ✅ Makelaars migratie
├── migrate-buitenland.ts          # ✅ Buitenland migratie
├── migrate-hypotheekadviseurs.ts  # ✅ Hypotheekadviseurs migratie
└── archive/                       # 📦 Oude/tijdelijke scripts
```

## 🎯 Payload CMS Admin

Na het draaien van de migraties, bekijk de content in:
- **Admin:** http://localhost:3001/admin/collections/pages

## ⚠️ Let op

- Scripts zijn **idempotent** - je kunt ze veilig meerdere keren draaien
- Bestaande content wordt **geüpdatet**, niet overschreven
- Check altijd de output voor errors
- Alle oude/experimentele scripts staan in `/archive/`

## 📝 Nieuwe Migratie Toevoegen

Gebruik `TEMPLATE-migrate-page.ts` als startpunt voor nieuwe pagina migraties.
