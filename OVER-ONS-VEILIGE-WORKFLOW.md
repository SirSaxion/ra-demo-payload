# Over-ons Images Fix - Veilige Workflow

## ⚠️ Situatie

De database heeft een gedeeltelijke schema migration die conflicten veroorzaakt.
Dit komt doordat de block definities al zijn aangepast maar de dev server nog niet volledig is gemigreerd.

## ✅ Veilige Oplossing (zoals bij homepage)

### **Optie 1: Via Dev Server** (AANBEVOLEN)

```bash
# 1. Start dev server
pnpm dev

# Server zal vragen om schema changes te accepteren
# → Kies "yes" om de migratie te voltooien
# → Dit voegt image_id columns toe

# 2. Wacht tot server klaar is
# ✓ Ready in XXXXms

# 3. In nieuwe terminal: Upload images
pnpm tsx scripts/migrate-over-ons-images-safe.ts

# 4. Update page blocks
pnpm tsx scripts/update-over-ons-images.ts
```

###  **Optie 2: Database Reset** (ALS OPTIE 1 NIET WERKT)

⚠️ **ALLEEN als je een backup hebt!**

```bash
# Backup huidige database
cp ra-demo-payload.db ra-demo-payload.db.backup-$(date +%Y%m%d)

# Reset naar laatste werkende versie
cp ra-demo-payload.db-stable-copy-maarwelveelNL ra-demo-payload.db

# Dan optie 1 volgen
```

## 🎯 Wat er MET gebeurt:

✅ Nieuwe `image_id` columns worden toegevoegd
✅ Oude `image` text columns blijven bestaan (backwards compatible)
✅ Components werken met beide: `image?.url || image || fallback`
✅ Geen data loss

## ❌ Wat er NIET gebeurt:

❌ Database drop/reset
❌ Data wordt niet verwijderd  
❌ Andere pages worden niet aangepast
❌ Bestaande images verdwijnen niet

## 📋 Checklist

- [ ] Dev server gestart: `pnpm dev`
- [ ] Schema migration geaccepteerd (yes)
- [ ] Server klaar (✓ Ready)
- [ ] Images uploaded: `pnpm tsx scripts/migrate-over-ons-images-safe.ts`
- [ ] Mapping file bestaat: `scripts/over-ons-images-mapping.json`
- [ ] Page updated: `pnpm tsx scripts/update-over-ons-images.ts`
- [ ] Test in CMS: http://localhost:3000/admin/collections/pages
- [ ] Test frontend: http://localhost:3000/over-ons

## 🚨 Als je vastzit

Stop alles en laat me weten! We kunnen altijd:
1. Database terugzetten naar backup
2. Andere aanpak kiezen
3. Components aanpassen om dubbele fields te ondersteunen

**Geen paniek = geen data loss!** 🛡️
