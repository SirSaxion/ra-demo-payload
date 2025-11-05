# 🚀 Lighthouse performance fixes

## Huidige scores
- Performance: **51** → Target: **90+**
- Accessibility: **92** → Target: **100**
- Best Practices: **100** ✅
- SEO: **91** → Target: **100**

## 🔴 KRITIEKE fixes (grootste impact)

### 1. Hero image optimalisatie (LCP -6.5s)

**Probleem**: `herofootage_first_frame.png` is 1.2MB

**Oplossing**:
```bash
# Converteer PNG naar WebP met compressie
# Via online tool: https://squoosh.app/
# Of via command line:
npm install -g @squoosh/cli
squoosh-cli --webp auto public/images/herofootage_first_frame.png

# Target: < 100KB
# Verwachte besparing: 1.1MB → ~80KB
```

**Na conversie**: Update references in:
- `/src/app/layout.tsx` - preload link
- `/src/components/sections/home/HeroSection.tsx` - video poster

### 2. Video optimalisatie (grootste payload)

**Probleem**: `herofootage_34s.mp4` is 40+MB totaal

**Oplossingen**:

**A. Comprimeer video**
```bash
# Via FFmpeg
ffmpeg -i public/videos/herofootage_34s.mp4 \
  -c:v libx264 -crf 28 \
  -preset slow \
  -c:a aac -b:a 128k \
  public/videos/herofootage_34s_compressed.mp4

# Target: < 5MB voor 34 seconden
```

**B. Lazy load video** - Alleen laden na hero viewport
```tsx
// In HeroSection.tsx
<video 
  loading="lazy"  // Add this
  preload="none"  // Change from "auto"
  ...
/>
```

**C. Use poster image alleen op mobile**
```tsx
<video
  poster={isMobile ? "/images/herofootage_first_frame.webp" : undefined}
  ...
/>
```

### 3. Next.js Image component gebruiken

**Probleem**: Logo is 14.8KB maar displayed als 269x72 (origineel 640x171)

**Fix in alle components**:
```tsx
// VOOR:
<img src="/images/logorealaccelerate.webp" alt="..." />

// NA:
import Image from 'next/image'
<Image 
  src="/images/logorealaccelerate.webp" 
  width={269} 
  height={72}
  alt="Real Accelerate"
  priority // Voor above-the-fold images
/>
```

### 4. Code splitting & bundle size

**Probleem**: 
- `layout.js`: 1.2MB
- `page.js`: 1.3MB  
- JavaScript execution: 7.2s

**Oplossingen**:

**A. Dynamic imports voor heavy components**
```tsx
// In page components
import dynamic from 'next/dynamic'

const HowItWorksSection = dynamic(
  () => import('@/components/sections/home/HowItWorksSection'),
  { loading: () => <div>Loading...</div> }
)

const TestimonialsSection = dynamic(
  () => import('@/components/sections/home/TestimonialsSection')
)
```

**B. next.config.mjs optimalisatie**
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizations
  productionBrowserSourceMaps: false,
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Webpack optimizations
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Client-side optimizations
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )?.[1]
              return `npm.${packageName?.replace('@', '')}`
            },
            priority: 20,
          },
        },
      }
    }
    return config
  },
}

export default nextConfig
```

### 5. CSS optimalisatie (render blocking)

**Probleem**: 
- `app/layout.css`: 39.7KB blocking
- `(frontend)/layout.css`: 1.5KB blocking

**Oplossing A: Inline critical CSS**
```tsx
// In layout.tsx
export default function Layout({ children }) {
  return (
    <html>
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      </head>
      <body>
        {children}
        <link rel="stylesheet" href="/styles/non-critical.css" media="print" onLoad="this.media='all'" />
      </body>
    </html>
  )
}
```

**Oplossing B: Use Tailwind JIT only**
- Verwijder ongebruikte Tailwind classes
- Optimize `tailwind.config.ts`

---

## 🟡 MEDIUM priority fixes

### 6. Accessibility: HTML lang attribute

**Fix in `app/layout.tsx`**:
```tsx
// VOOR:
<html className="dark">

// NA:
<html lang="nl" className="dark">
```

### 7. Accessibility: Links zonder namen

**Scan all link components**:
```tsx
// Bad:
<Link href="/contact"><ChevronRight /></Link>

// Good:
<Link href="/contact" aria-label="Ga naar contact pagina">
  <ChevronRight />
</Link>
```

### 8. SEO: Meta descriptions

**Add to all page components**:
```tsx
export const metadata: Metadata = {
  title: 'Pagina Titel',
  description: 'Pagina beschrijving (max 160 karakters)', // ADD THIS
}
```

---

## 🟢 OPTIONAL optimizations

### 9. Preconnect to external domains

```tsx
// In layout.tsx head
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

### 10. Service Worker voor caching

```tsx
// public/sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/images/logorealaccelerate.webp',
        '/styles/main.css',
      ])
    })
  )
})
```

### 11. Lazy load images below fold

```tsx
<Image 
  src="/images/example.jpg"
  loading="lazy"  // Add for below-the-fold images
  ...
/>
```

---

## 📊 Verwachte impact

| Fix | Current | Expected | Improvement |
|-----|---------|----------|-------------|
| Hero image WebP | 1.2MB | 80KB | -1.1MB |
| Video compression | 40MB | 5MB | -35MB |
| Code splitting | 2.5MB JS | 800KB initial | -1.7MB |
| CSS optimization | 41KB blocking | 0KB blocking | +0.3s FCP |
| **Total Performance** | **51** | **85-95** | **+34-44** |

---

## 🛠️ Implementation order

1. ✅ Convert hero image to WebP (< 5 min)
2. ✅ Add `lang="nl"` to HTML (< 1 min)
3. ✅ Add meta descriptions to pages (< 10 min)
4. ✅ Add Next.js Image components (< 30 min)
5. ⏳ Compress & lazy load video (< 15 min)
6. ⏳ Implement code splitting (< 1 hour)
7. ⏳ Optimize next.config.mjs (< 15 min)
8. ⏳ CSS optimization (< 30 min)

---

## 🎯 Quick wins (< 30 min implementation)

Run these commands:

```bash
cd ra-demo-payload

# 1. Install squoosh for image optimization
npm install -g @squoosh/cli

# 2. Optimize hero image
squoosh-cli --webp '{"quality":85}' public/images/herofootage_first_frame.png

# 3. Update image references (manual)
# - src/app/layout.tsx line 73
# - src/components/sections/home/HeroSection.tsx line 43

# 4. Test
pnpm run dev
# Check: http://localhost:3001
# Run Lighthouse again

# Expected new scores:
# Performance: 75-85 (up from 51)
# Accessibility: 100 (up from 92)
# SEO: 100 (up from 91)
```

---

## 📝 Checklist

- [ ] Convert hero image to WebP
- [ ] Update image references
- [ ] Add `lang="nl"` attribute
- [ ] Add meta descriptions
- [ ] Use Next.js Image component for logo
- [ ] Lazy load video
- [ ] Compress video file
- [ ] Implement code splitting
- [ ] Optimize next.config.mjs
- [ ] Run Lighthouse again
- [ ] Deploy to production

---

## 🚨 Test tegen Chrome extensions

Lighthouse meldt dat extensions de score beïnvloeden. Test in:
- Chrome Incognito mode
- Chrome Guest profile
- Run: `lighthouse https://yoursite.com --view --only-categories=performance`

Voor de meest accurate resultaten!
