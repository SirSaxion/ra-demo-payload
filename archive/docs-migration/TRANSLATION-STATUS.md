# Translation Status

## Pagina's die vertaald moeten worden

### ✅ Homepage (/)
- [x] Nederlands content gevuld (14 blocks)
- [x] Engels volledig vertaald (14 blocks)
- Status: **COMPLEET**

### ⏳ Cases (/cases)
- [ ] Nederlands content invullen
- [ ] Engels vertalen
- Status: **IN PROGRESS**

### ⏳ Over Ons (/over-ons)
- [ ] Nederlands content invullen
- [ ] Engels vertalen  
- Status: **TODO**

### ⏸️ Andere pagina's (later)
- [ ] Makelaars
- [ ] Makelaars Buitenland
- [ ] Hypotheekadviseurs
- [ ] Projectontwikkelaars
- [ ] HR Recruitment

## Scripts

- ✅ `restore-homepage.mjs` - Homepage NL gevuld
- ✅ `translate-homepage-en.mjs` - Homepage EN vertaald
- ⏳ `restore-cases.mjs` - Cases NL vullen (TODO)
- ⏳ `translate-cases-en.mjs` - Cases EN vertalen (TODO)
- ⏳ `restore-over-ons.mjs` - Over Ons NL vullen (TODO)
- ⏳ `translate-over-ons-en.mjs` - Over Ons EN vertalen (TODO)

## Hoe te gebruiken

```bash
# 1. Homepage (DONE)
npx tsx scripts/restore-homepage.mjs
npx tsx scripts/translate-homepage-en.mjs

# 2. Cases (IN PROGRESS)
npx tsx scripts/restore-cases.mjs
npx tsx scripts/translate-cases-en.mjs

# 3. Over Ons
npx tsx scripts/restore-over-ons.mjs
npx tsx scripts/translate-over-ons-en.mjs
```

## Test URLs

- NL Homepage: http://localhost:3000/
- EN Homepage: http://localhost:3000/en/
- NL Cases: http://localhost:3000/cases
- EN Cases: http://localhost:3000/en/cases
- NL Over Ons: http://localhost:3000/over-ons
- EN Over Ons: http://localhost:3000/en/over-ons
