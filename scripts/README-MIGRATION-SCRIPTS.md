# Migration Scripts Overview

## ✅ Active Migration Scripts (Keep These)

These are the **production-ready TypeScript migration scripts** that follow best practices:

### Modern Pattern (TypeScript + Full Localization)
- ✅ **`migrate-cases.ts`** - Cases page (28.6 KB) - **GOLD STANDARD**
- ✅ **`migrate-over-ons.ts`** - About page (29.2 KB) - Same pattern
- ✅ **`TEMPLATE-migrate-page.ts`** - Template for new migrations

### Features:
- ✅ TypeScript with type safety
- ✅ Full NL + EN localization
- ✅ Update-or-create logic
- ✅ Proper error handling
- ✅ Beautiful console output with emoji
- ✅ Auto-publish functionality
- ✅ Consistent structure

## ❌ Deprecated Scripts (Safe to Delete)

These are **old experiments and inconsistent scripts** that should be removed:

### Old JavaScript Scripts (.mjs)
```bash
# Safe to delete - these are old versions without proper localization
migrate-cases.mjs
migrate-case-studies.mjs
migrate-homepage-full.mjs
migrate-hr-recruitment.mjs
migrate-hypotheekadviseurs.mjs
migrate-makelaars-buitenland.mjs
migrate-makelaars.mjs
migrate-media.mjs
migrate-over-ons.mjs
migrate-projectontwikkelaars.mjs
```

### Old Check/Fix Scripts (.mjs)
```bash
# These were debugging tools - no longer needed
check-homepage.mjs
check-hr-recruitment.mjs
check-images.mjs
check-kicker-translations.mjs
check-over-ons-page.mjs
check-projectontwikkelaars.mjs
fix-homepage-complete.mjs
fix-homepage-en-complete.mjs
fix-page-status.mjs
```

### Old Utility Scripts (.mjs)
```bash
# One-time utility scripts - no longer relevant
convert-hero-to-webp.mjs
create-user.mjs
init-seo-settings.mjs
inspect-all-pages.mjs
inspect-homepage-en.mjs
inspect-homepage.mjs
optimize-hero-aggressive.mjs
restore-homepage.mjs
translate-home-en.mjs
translate-homepage-en.mjs
translate-testimonial-badges.mjs
```

### Legacy TypeScript Scripts
```bash
# Older/incomplete TypeScript versions
migrate-home.ts              # Incomplete - use cases.ts pattern instead
migrate-homepage-full.ts     # Old version - cases.ts is better
```

## 🗑️ How to Clean Up

**Recommended approach:**

```bash
# 1. Create a backup first (just in case)
mkdir scripts/archive
mv scripts/*.mjs scripts/archive/
mv scripts/migrate-home.ts scripts/archive/
mv scripts/migrate-homepage-full.ts scripts/archive/

# 2. Or just delete them (they're in git anyway)
rm scripts/*.mjs
rm scripts/migrate-home.ts
rm scripts/migrate-homepage-full.ts
```

## 📝 Creating New Migration Scripts

**Always use the template:**

1. Copy the template:
   ```bash
   cp scripts/TEMPLATE-migrate-page.ts scripts/migrate-[page-name].ts
   ```

2. Update these sections:
   - `PAGE_SLUG` constant
   - `pageData.nl` object (Dutch content)
   - `pageData.en` object (English content)
   - Console.log messages (optional)

3. Run the migration:
   ```bash
   pnpm tsx scripts/migrate-[page-name].ts
   ```

## 🎯 Migration Script Quality Checklist

✅ Your migration script should have:
- [ ] TypeScript (.ts extension)
- [ ] Both `nl` and `en` locales
- [ ] SEO metadata (title, description)
- [ ] All block fields filled
- [ ] Update-or-create logic
- [ ] Error handling
- [ ] Clear console output
- [ ] Auto-publish functionality

## 📚 Examples

**Good examples to reference:**
- `migrate-cases.ts` - Full-featured with 8 blocks
- `migrate-over-ons.ts` - Complex blocks with arrays
- `TEMPLATE-migrate-page.ts` - Starting point for new pages

## 🚀 Best Practices

1. **Always test locally first** before deploying
2. **Keep blocks in sync** - NL and EN should have same structure
3. **Use meaningful field names** from your block definitions
4. **Validate data** - check required fields are filled
5. **Run multiple times** - scripts should be idempotent (safe to re-run)

## 📊 Current Status

| Script | Status | Purpose |
|--------|--------|---------|
| `migrate-cases.ts` | ✅ Active | Cases page migration |
| `migrate-over-ons.ts` | ✅ Active | About page migration |
| `TEMPLATE-migrate-page.ts` | ✅ Template | Starting point for new pages |
| All `.mjs` files | ❌ Deprecated | Old experiments |
| `migrate-home.ts` | ❌ Deprecated | Incomplete |
| `migrate-homepage-full.ts` | ❌ Deprecated | Old pattern |

---

**Last Updated:** November 4, 2025  
**Maintained By:** Development Team  
**Questions?** Check `migrate-cases.ts` for the gold standard implementation.
