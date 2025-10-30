import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'
import fs from 'fs'
import path from 'path'

// Lijst van alle benodigde foto's met hun paden en alt teksten
const requiredImages = [
  // Case Study afbeelding
  {
    filePath: '/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/public/images/case-de-brabant-makelaar.webp',
    alt: 'Team De Brabant Makelaar',
    reference: 'caseStudyImage'
  },
  
  // Marketing Machine afbeeldingen
  {
    filePath: '/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/public/images/32.EmiroSmolders-Settle-DSC07215--compressed.webp',
    alt: 'Website voorbeeld',
    reference: 'marketingMachineWebsites'
  },
  {
    filePath: '/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/public/images/leadgen.webp',
    alt: 'Leadgeneratie dashboard',
    reference: 'marketingMachineLeadgen'
  },
  {
    filePath: '/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/public/images/42.EmiroSmolders-Settle-DSC07252--compressed.webp',
    alt: 'SEO en vindbaarheid',
    reference: 'marketingMachineSeo'
  },
  {
    filePath: '/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/public/images/rudybrief.webp',
    alt: 'Email marketing voorbeeld',
    reference: 'marketingMachineHeractivatie'
  },
  {
    filePath: '/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/public/images/joeptelefoon.webp',
    alt: 'CRM en leads opvolgen',
    reference: 'marketingMachineLeads'
  },
  {
    filePath: '/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/public/images/47.EmiroSmolders-Settle-DSC07264--compressed.webp',
    alt: 'Branding en huisstijl',
    reference: 'marketingMachineBranding'
  },
  
  // Target Groups afbeeldingen
  {
    filePath: '/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/public/images/remax.jpg',
    alt: 'Re/max makelaars',
    reference: 'targetGroupMakelaars'
  },
  {
    filePath: '/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/public/images/recreatie.jpg',
    alt: 'Recreatie projectontwikkeling',
    reference: 'targetGroupProjectontwikkelaars'
  },
  {
    filePath: '/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/public/images/hypotheekvisie.jpg',
    alt: 'Hypotheekvisie kantoor',
    reference: 'targetGroupHypotheek'
  },
  {
    filePath: '/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/public/images/secondhomebeurs.jpg',
    alt: 'Second Home Beurs',
    reference: 'targetGroupInternational'
  },
  
  // Testimonials afbeeldingen
  {
    filePath: '/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/public/images/brabantmakelaar_logo.webp',
    alt: 'De Brabant Makelaar logo',
    reference: 'testimonialBrabantLogo'
  },
  {
    filePath: '/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/public/images/brabantmakelaar_avatar.webp',
    alt: 'Amory - De Brabant Makelaar',
    reference: 'testimonialBrabantAvatar'
  },
  {
    filePath: '/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/public/images/binkpartners_logo.webp',
    alt: 'Bink & Partners logo',
    reference: 'testimonialBinkLogo'
  },
  {
    filePath: '/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/public/images/binkpartners_avatar.webp',
    alt: 'Pieter - Bink & Partners',
    reference: 'testimonialBinkAvatar'
  }
]

async function uploadImageToPayload(payload: any, imagePath: string, alt: string) {
  try {
    if (!fs.existsSync(imagePath)) {
      console.log(`⚠️  Bestand niet gevonden: ${imagePath}`)
      return null
    }

    const fileBuffer = fs.readFileSync(imagePath)
    const fileName = path.basename(imagePath)
    
    const result = await payload.create({
      collection: 'media',
      data: {
        alt: alt,
      },
      file: {
        data: fileBuffer,
        mimetype: 'image/webp',
        name: fileName,
      },
    })

    console.log(`✅ Afbeelding uploaded: ${fileName} -> ID: ${result.id}`)
    return result
  } catch (error) {
    console.error(`❌ Upload mislukt voor ${imagePath}:`, error)
    return null
  }
}

export async function POST() {
  try {
    console.log('🚀 Start upload van alle afbeeldingen...')
    
    const payload = await getPayload({ config })
    const uploadedImages: Record<string, any> = {}
    
    // Upload alle afbeeldingen
    for (const image of requiredImages) {
      const uploaded = await uploadImageToPayload(payload, image.filePath, image.alt)
      if (uploaded) {
        uploadedImages[image.reference] = uploaded
      }
    }
    
    console.log(`📊 ${Object.keys(uploadedImages).length} afbeeldingen succesvol uploaded`)
    
    // Genereer een overzicht met ID's voor handmatige update
    const imageOverview = {
      message: "Gebruik deze ID's om de homepage bij te werken",
      images: Object.entries(uploadedImages).map(([reference, media]) => ({
        reference,
        id: media.id,
        url: media.url,
        alt: media.alt
      }))
    }
    
    return NextResponse.json({
      success: true,
      uploadedCount: Object.keys(uploadedImages).length,
      images: uploadedImages,
      overview: imageOverview
    })
    
  } catch (error) {
    console.error('❌ Upload proces mislukt:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
