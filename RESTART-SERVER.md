# Server herstarten nodig! 🔄

De `/en/` route is nu toegevoegd. Herstart de dev server:

```bash
# Stop de huidige server (Ctrl+C)
# Start opnieuw:
npm run dev
```

## Test URLs:
- Nederlands (default): http://localhost:3000/
- Engels: http://localhost:3000/en/
- Nederlands expliciet: http://localhost:3000/nl/

## Wat is er veranderd:
1. ✅ Nieuwe `[locale]/page.tsx` route toegevoegd voor `/en/` en `/nl/`
2. ✅ Homepage gebruikt nu expliciet locale 'nl'
3. ✅ Middleware vereenvoudigd - geen automatische redirects meer
4. ✅ Language selector in navbar werkt nu correct

Na herstart zou alles moeten werken! 🎉
