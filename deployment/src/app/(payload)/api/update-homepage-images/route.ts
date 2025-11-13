import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

// Media ID's van de geüploade afbeeldingen
const mediaIds = {
  caseStudyImage: 1,
  marketingMachineWebsites: 2,
  marketingMachineLeadgen: 3,
  marketingMachineSeo: 4,
  marketingMachineHeractivatie: 5,
  marketingMachineLeads: 6,
  marketingMachineBranding: 7,
  targetGroupMakelaars: 8,
  targetGroupProjectontwikkelaars: 9,
  targetGroupHypotheek: 10,
  targetGroupInternational: 11,
  testimonialBrabantLogo: 12,
  testimonialBrabantAvatar: 13,
  testimonialBinkLogo: 14,
  testimonialBinkAvatar: 15,
}

export async function POST() {
  try {
    console.log('🚀 Start update van homepage afbeeldingen...')
    
    const payload = await getPayload({ config })
    
    // Haal de huidige homepage op
    const homepage = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/',
        },
      },
    })

    if (homepage.totalDocs === 0) {
      return NextResponse.json({
        success: false,
        error: 'Homepage niet gevonden'
      }, { status: 404 })
    }

    const homepageDoc = homepage.docs[0]
    const updatedBlocks = [...homepageDoc.blocks]

    // Update CaseStudy afbeelding
    const caseStudyIndex = updatedBlocks.findIndex(b => b.blockType === 'caseStudy')
    if (caseStudyIndex !== -1) {
      updatedBlocks[caseStudyIndex] = {
        ...updatedBlocks[caseStudyIndex],
        image: mediaIds.caseStudyImage
      }
      console.log('✅ CaseStudy afbeelding bijgewerkt')
    }

    // Update MarketingMachine features afbeeldingen
    const marketingMachineIndex = updatedBlocks.findIndex(b => b.blockType === 'marketingMachine')
    if (marketingMachineIndex !== -1) {
      const features = [...updatedBlocks[marketingMachineIndex].features]
      const featureImageIds = [
        mediaIds.marketingMachineWebsites,
        mediaIds.marketingMachineLeadgen,
        mediaIds.marketingMachineSeo,
        mediaIds.marketingMachineHeractivatie,
        mediaIds.marketingMachineLeads,
        mediaIds.marketingMachineBranding,
      ]
      
      features.forEach((feature, index) => {
        if (featureImageIds[index]) {
          feature.image = featureImageIds[index]
        }
      })
      
      updatedBlocks[marketingMachineIndex] = {
        ...updatedBlocks[marketingMachineIndex],
        features
      }
      console.log('✅ MarketingMachine afbeeldingen bijgewerkt')
    }

    // Update TargetGroupsOverviewPhotos afbeeldingen
    const targetGroupsIndex = updatedBlocks.findIndex(b => b.blockType === 'targetGroupsOverviewPhotos')
    if (targetGroupsIndex !== -1) {
      const items = [...updatedBlocks[targetGroupsIndex].items]
      const itemImageIds = [
        mediaIds.targetGroupMakelaars,
        mediaIds.targetGroupProjectontwikkelaars,
        mediaIds.targetGroupHypotheek,
        mediaIds.targetGroupInternational,
      ]
      
      items.forEach((item, index) => {
        if (itemImageIds[index]) {
          item.image = itemImageIds[index]
        }
      })
      
      updatedBlocks[targetGroupsIndex] = {
        ...updatedBlocks[targetGroupsIndex],
        items
      }
      console.log('✅ TargetGroupsOverviewPhotos afbeeldingen bijgewerkt')
    }

    // Update TestimonialsSection afbeeldingen
    const testimonialsIndex = updatedBlocks.findIndex(b => b.blockType === 'testimonialsSection')
    if (testimonialsIndex !== -1) {
      const testimonials = [...updatedBlocks[testimonialsIndex].testimonials]
      
      // De Brabant Makelaar testimonial
      if (testimonials[0]) {
        testimonials[0] = {
          ...testimonials[0],
          companyLogo: mediaIds.testimonialBrabantLogo,
          author: {
            ...testimonials[0].author,
            avatar: mediaIds.testimonialBrabantAvatar
          }
        }
      }
      
      // Bink & Partners testimonial
      if (testimonials[1]) {
        testimonials[1] = {
          ...testimonials[1],
          companyLogo: mediaIds.testimonialBinkLogo,
          author: {
            ...testimonials[1].author,
            avatar: mediaIds.testimonialBinkAvatar
          }
        }
      }
      
      updatedBlocks[testimonialsIndex] = {
        ...updatedBlocks[testimonialsIndex],
        testimonials
      }
      console.log('✅ TestimonialsSection afbeeldingen bijgewerkt')
    }

    // Update de homepage met de nieuwe blocks
    const updatedHomepage = await payload.update({
      collection: 'pages',
      id: homepageDoc.id,
      data: {
        blocks: updatedBlocks
      }
    })

    console.log('🎉 Homepage afbeeldingen succesvol bijgewerkt!')
    
    return NextResponse.json({
      success: true,
      message: 'Homepage afbeeldingen bijgewerkt',
      updatedBlocks: updatedBlocks.length,
      homepage: {
        id: updatedHomepage.id,
        title: updatedHomepage.title,
        slug: updatedHomepage.slug
      }
    })
    
  } catch (error) {
    console.error('❌ Update mislukt:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
