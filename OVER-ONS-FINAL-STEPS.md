# ✅ Over-ons CMS Images - Laatste Stappen

## 🎉 Wat is KLAAR:

1. ✅ **Blocks updated** - Alle 4 blocks hebben `type: 'upload'` fields
2. ✅ **Components updated** - Accepteren CMS media objects met fallbacks  
3. ✅ **Images uploaded** - Alle 12 images staan in Media collection
4. ✅ **Mapping gemaakt** - `over-ons-images-mapping.json` bestaat
5. ✅ **Dev server draait** - http://localhost:3000

## 📋 NOG TE DOEN (Manual in CMS):

Je moet nu handmatig in het CMS de images koppelen:

### **1. Open CMS**
http://localhost:3000/admin/collections/pages

### **2. Open "Over ons" page**
Klik op de over-ons pagina

### **3. Update 4 blocks met images:**

#### **Block 1: Over-ons-HeroSection**
- ✏️ Zoek het `image` veld
- 🖼️ Selecteer: **teamfoto_einde.png** (ID: 22)

#### **Block 2: Over-ons-TeamSection** 
Update elk teamlid:
- Member 1: **1.EmiroSmolders-Settle-DSC06894-.webp** (ID: 24)
- Member 2: **2.EmiroSmolders-Settle-DSC06899-.webp** (ID: 33)
- Member 3: **3.EmiroSmolders-Settle-DSC06907-.webp** (ID: 34)
- Member 4: **4.EmiroSmolders-Settle-DSC06915-.webp** (ID: 35)
- Member 5: **5.EmiroSmolders-Settle-DSC06927-.webp** (ID: 36)
- Member 6: **6.EmiroSmolders-Settle-DSC06931-.webp** (ID: 37)
- Member 7: **10.EmiroSmolders-Settle-DSC06970-.jpg** (ID: 25)
- Member 8: **placeholder.jpg** (ID: 29)

#### **Block 3: Over-ons-PartnershipsSection**
Update partnerships:
- IQI Global: **iqiglobal.jpg** (ID: 30)
- SETTL.: **editbv.jpg** (ID: 32)

#### **Block 4: Over-ons-OfficeSection**
- ✏️ Zoek het `image` veld
- 🖼️ Selecteer: **joep-koffie.png** (ID: 38)

### **4. Save Page**
Klik op "Save"

### **5. Test Frontend**
http://localhost:3000/over-ons

---

## 🎨 Image IDs Referentie:

```json
{
  "teamfoto_einde.png": 22,
  "1.EmiroSmolders-Settle-DSC06894-.webp": 24,
  "2.EmiroSmolders-Settle-DSC06899-.webp": 33,
  "3.EmiroSmolders-Settle-DSC06907-.webp": 34,
  "4.EmiroSmolders-Settle-DSC06915-.webp": 35,
  "5.EmiroSmolders-Settle-DSC06927-.webp": 36,
  "6.EmiroSmolders-Settle-DSC06931-.webp": 37,
  "10.EmiroSmolders-Settle-DSC06970-.jpg": 25,
  "placeholder.jpg": 29,
  "iqiglobal.jpg": 30,
  "editbv.jpg": 32,
  "joep-koffie.png": 38
}
```

---

## ✅ Klaar als:

- [ ] Alle blocks hebben Media selectors (geen text inputs!)
- [ ] Je kunt een image wijzigen in CMS
- [ ] Frontend toont de nieuwe image na refresh
- [ ] Geen console errors

---

**Geschatte tijd:** 5-10 minuten 🕐

**Status:** Bijna klaar! Alleen manual CMS update nodig 🎯
