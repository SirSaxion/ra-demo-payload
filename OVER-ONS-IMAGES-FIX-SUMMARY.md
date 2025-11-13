# Over-ons Page - CMS Images Fix Summary

✅ **Status:** Implementation Complete - Ready for Testing

## 🎯 What Was Fixed

**4 blocks** on the over-ons page now have full CMS image support:

1. **Over-ons-HeroSection** - Hero image (team photo)
2. **Over-ons-TeamSection** - 8 team member photos
3. **Over-ons-PartnershipsSection** - 2 partnership logos (IQI Global, SETTL.)
4. **Over-ons-OfficeSection** - Office atmosphere photo

## ✅ Changes Made

### **1. Block Definitions** (4 files updated)

#### `/src/blocks/OverOnsHeroSection.ts`
- ✅ Changed `image` field from `type: 'text'` to `type: 'upload'`
- ✅ Added `relationTo: 'media'`
- ✅ Added admin description

#### `/src/blocks/OverOnsTeamSection.ts`
- ✅ Changed `members.image` field from `type: 'text'` to `type: 'upload'`
- ✅ Added `relationTo: 'media'`
- ✅ Added admin description

#### `/src/blocks/OverOnsPartnershipsSection.ts`
- ✅ Changed `partnerships.image` field from `type: 'text'` to `type: 'upload'`
- ✅ Added `relationTo: 'media'`
- ✅ Added admin description

#### `/src/blocks/OverOnsOfficeSection.ts`
- ✅ Changed `image` field from `type: 'text'` to `type: 'upload'`
- ✅ Added `relationTo: 'media'`
- ✅ Added admin description

---

### **2. React Components** (4 files updated)

#### `/src/components/sections/over-ons/HeroSection.tsx`
- ✅ Updated interface: `image?: any` (Media object from CMS)
- ✅ Updated Image tag: `src={image?.url || image || "/images/teamfoto_einde.png"}`
- ✅ Backwards compatible with fallback

#### `/src/components/sections/over-ons/TeamSection.tsx`
- ✅ Updated interface: `image: any` (Media object from CMS)
- ✅ Updated Image tag in map: `src={member.image?.url || member.image || fallback}`
- ✅ Backwards compatible with fallback

#### `/src/components/sections/over-ons/PartnershipsSection.tsx`
- ✅ Updated interface: `image: any` (Media object from CMS)
- ✅ Updated Image tag in map: `src={partnership.image?.url || partnership.image || "/images/placeholder.jpg"}`
- ✅ Backwards compatible with fallback

#### `/src/components/sections/over-ons/OfficeSection.tsx`
- ✅ Updated interface: `image?: any` (Media object from CMS)
- ✅ Updated Image tag: `src={image?.url || image || "/images/joep-koffie.png"}`
- ✅ Backwards compatible with fallback

---

### **3. BlockRenderer**
- ✅ Already passes all props automatically via `{...(block.props || {})}`
- ✅ No changes needed

---

### **4. Migration Scripts** (2 new files created)

#### `/scripts/migrate-over-ons-images.ts`
✅ Created with **12 images**:
- Hero: `teamfoto_einde-640x480.png`
- Team: 8 member photos
- Partnerships: 2 logos (`iqiglobal.jpg`, `editbv-640x480.jpg`)
- Office: `joep-koffie-640x480.png`

#### `/scripts/update-over-ons-images.ts`
✅ Created to update page blocks with Media IDs from mapping file

---

## 📋 Next Steps (To Run)

### **Step 1: Migrate Images to Media Collection**
```bash
pnpm tsx scripts/migrate-over-ons-images.ts
```

**Expected output:**
- Uploads 12 images to Media collection
- Creates `scripts/over-ons-images-mapping.json` with Media IDs
- Shows success count

---

### **Step 2: Start Dev Server (Schema Migration)**
```bash
pnpm dev
```

**Wait for:** `✓ Ready in XXXXms`

⚠️ **Important:** Dev server will migrate the database schema to include new `upload` fields

---

### **Step 3: Update Page Blocks with Images**
```bash
# In a new terminal (keep dev server running)
pnpm tsx scripts/update-over-ons-images.ts
```

**Expected output:**
- Connects images to page blocks
- Updates 4 blocks with Media IDs
- Shows success message

---

### **Step 4: Verification**

1. **Check CMS:**
   - Go to: http://localhost:3000/admin/collections/pages
   - Open "Over ons" page
   - Each block should have Media Library selectors (not text inputs!)

2. **Test in CMS:**
   - Change an image in any block
   - Save page

3. **Test Frontend:**
   - Visit: http://localhost:3000/over-ons
   - Refresh page
   - New image should be visible

4. **Check Console:**
   - No errors in browser console
   - No 404s for images

---

## 🎨 Images Inventory (12 total)

### Hero Section (1 image)
- `teamfoto_einde-640x480.png`

### Team Section (8 images)
- `1.EmiroSmolders-Settle-DSC06894--640x480.webp` - Joep
- `2.EmiroSmolders-Settle-DSC06899--640x480.webp` - Partner
- `3.EmiroSmolders-Settle-DSC06907--640x480.webp` - Nina
- `4.EmiroSmolders-Settle-DSC06915--640x480.webp` - Ravi
- `5.EmiroSmolders-Settle-DSC06927--640x480.webp` - Milo
- `6.EmiroSmolders-Settle-DSC06931--640x480.webp` - Sofie
- `10.EmiroSmolders-Settle-DSC06970--640x480.jpg` - Alex
- `placeholder.jpg` - Maya

### Partnerships Section (2 images)
- `iqiglobal.jpg` - IQI Global logo
- `editbv-640x480.jpg` - SETTL. photo

### Office Section (1 image)
- `joep-koffie-640x480.png` - Office atmosphere

---

## ✅ Success Criteria

A successful implementation means:

- [x] All 4 blocks have `type: 'upload'` fields
- [x] All 4 components accept CMS media objects
- [x] All components have fallbacks for backwards compatibility
- [x] Migration script created with 12 images
- [x] Update script created to connect images to blocks
- [ ] Images uploaded to Media collection (run script)
- [ ] Page blocks updated with Media IDs (run script)
- [ ] CMS shows Media selectors instead of text inputs
- [ ] Images changeable via CMS
- [ ] Frontend displays CMS images correctly
- [ ] No console errors

---

## 🚨 Troubleshooting

### Problem: "Index already exists" error
**Solution:** Use `PAYLOAD_DISABLE_PUSH=true` in update script (already included)

### Problem: Images not visible in CMS
**Solution:** 
1. Check if block definition has `type: 'upload'` (not `type: 'text'`)
2. Restart dev server to apply schema changes

### Problem: Frontend shows hardcoded image
**Solution:**
1. Check if update script ran successfully
2. Verify mapping file exists
3. Check if Media IDs are in page blocks
4. Verify component uses `image?.url || fallback`

### Problem: Component can't find image
**Solution:**
1. Check if image exists in `/public/images/` OR `/public/media/`
2. Check exact filename (case-sensitive!)
3. Verify Media collection has the image

---

## 📊 Deployment Ready?

After testing, this page is ready for deployment with:
- Smart package script (copy only over-ons images)
- ~12 images vs 1.3GB full media folder
- All images in BOTH `/public/media/` and `/public/images/`
- All variants copied (-small, -medium, -large, -640x480, etc.)

---

**Generated:** 2025-11-13
**Status:** ✅ Implementation Complete - Ready for Script Execution
**Follow:** CMS-IMAGES-FIX-GUIDE.md for detailed workflow
