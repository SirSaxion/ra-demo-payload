/**
 * Update Homepage Images via REST API
 * 
 * Dit script werkt ALLEEN als de dev server al draait!
 * Start eerst: pnpm dev
 * Dan run: pnpm tsx scripts/update-homepage-images-api.ts
 * 
 * Dit script UPDATE alleen de homepage blocks met de juiste image IDs.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Lees de image mapping
const mappingPath = path.join(__dirname, 'homepage-images-mapping.json')
const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8')).mapping

const API_URL = 'http://localhost:3001/api'

async function updateHomepageImagesViaAPI() {
  console.log('🚀 Starting Homepage Images Update via API...\n')
  console.log('⚠️  Zorg dat de dev server draait op http://localhost:3001\n')
  
  try {
    // Find homepage
    console.log('🔍 Zoeken naar homepage...')
    const pagesResponse = await fetch(`${API_URL}/pages?where[slug][equals]=/&limit=1`)
    
    if (!pagesResponse.ok) {
      throw new Error(`Failed to fetch pages: ${pagesResponse.statusText}`)
    }
    
    const pagesData = await pagesResponse.json()
    
    if (pagesData.docs.length === 0) {
      console.error('❌ Homepage niet gevonden!')
      process.exit(1)
    }
    
    const homepage = pagesData.docs[0]
    console.log(`✅ Homepage gevonden (ID: ${homepage.id})\n`)
    
    // Check current blocks
    console.log('📋 Huidige blocks:')
    if (homepage.blocks && Array.isArray(homepage.blocks)) {
      homepage.blocks.forEach((block: any, index: number) => {
        console.log(`   ${index + 1}. ${block.blockType}`)
      })
      console.log('')
    }
    
    // Update blocks met images
    console.log('🔧 Updaten van blocks met images...\n')
    
    const updatedBlocks = homepage.blocks?.map((block: any) => {
      // HeroSection - voeg images toe
      if (block.blockType === 'heroSection') {
        console.log('   ✏️  Updating HeroSection:')
        console.log(`      - Video poster: ${mapping['/images/herofootage_first_frame.webp']}`)
        console.log(`      - Avatar 1: ${mapping['/images/brabantmakelaar_avatar.webp']}`)
        console.log(`      - Avatar 2: ${mapping['/images/thomapost_avatar.webp']}`)
        console.log(`      - Avatar 3: ${mapping['/images/paulthijssen_avatar.webp']}`)
        
        return {
          ...block,
          heroVideo: '/videos/herofootage_34s.mp4',
          heroVideoPoster: mapping['/images/herofootage_first_frame.webp'],
          avatar1: mapping['/images/brabantmakelaar_avatar.webp'],
          avatar1Alt: 'Amory - De Brabant Makelaar',
          avatar2: mapping['/images/thomapost_avatar.webp'],
          avatar2Alt: 'Marlies - Thoma Post',
          avatar3: mapping['/images/paulthijssen_avatar.webp'],
          avatar3Alt: 'Paul - Paul Thijssen Makelaardij',
        }
      }
      
      // CaseStudy - update image
      if (block.blockType === 'caseStudy') {
        console.log('   ✏️  Updating CaseStudy:')
        console.log(`      - Image: ${mapping['/images/case-de-brabant-makelaar.webp']}`)
        
        return {
          ...block,
          image: mapping['/images/case-de-brabant-makelaar.webp'],
          imageAlt: 'Team De Brabant Makelaar',
        }
      }
      
      // MarketingMachine - update feature images
      if (block.blockType === 'marketingMachine') {
        console.log('   ✏️  Updating MarketingMachine features:')
        
        const imageMapping: Record<string, number> = {
          'Websites': mapping['/images/32.EmiroSmolders-Settle-DSC07215--compressed.webp'],
          'Leadgeneratie': mapping['/images/leadgen.webp'],
          'Vindbaarheid': mapping['/images/42.EmiroSmolders-Settle-DSC07252--compressed.webp'],
          'Heractivatie': mapping['/images/rudybrief.webp'],
          'Leads opvolgen': mapping['/images/joeptelefoon.webp'],
          'Branding': mapping['/images/47.EmiroSmolders-Settle-DSC07264--compressed.webp'],
        }
        
        const updatedFeatures = block.features?.map((feature: any) => {
          const imageId = imageMapping[feature.name]
          if (imageId) {
            console.log(`      - ${feature.name}: ${imageId}`)
            return {
              ...feature,
              image: imageId,
            }
          }
          return feature
        })
        
        return {
          ...block,
          features: updatedFeatures,
        }
      }
      
      // TargetGroupsOverviewPhotos - update item images
      if (block.blockType === 'targetGroupsOverviewPhotos') {
        console.log('   ✏️  Updating TargetGroupsOverviewPhotos:')
        
        const imageMapping: Record<string, number> = {
          'Makelaars': mapping['/images/remax.jpg'],
          'Projectontwikkelaars': mapping['/images/recreatie.jpg'],
          'Hypotheekadviseurs': mapping['/images/hypotheekvisie.jpg'],
          'Buitenland': mapping['/images/secondhomebeurs.jpg'],
        }
        
        const updatedItems = block.items?.map((item: any) => {
          const imageId = imageMapping[item.name]
          if (imageId) {
            console.log(`      - ${item.name}: ${imageId}`)
            return {
              ...item,
              image: imageId,
            }
          }
          return item
        })
        
        return {
          ...block,
          items: updatedItems,
        }
      }
      
      // TestimonialsSection - update testimonial images
      if (block.blockType === 'testimonialsSection') {
        console.log('   ✏️  Updating TestimonialsSection:')
        
        const updatedTestimonials = block.testimonials?.map((testimonial: any) => {
          // Update company logo
          if (testimonial.company === 'De Brabant Makelaar') {
            console.log(`      - ${testimonial.company} logo: ${mapping['/images/brabantmakelaar_logo.webp']}`)
            return {
              ...testimonial,
              companyLogo: mapping['/images/brabantmakelaar_logo.webp'],
            }
          }
          if (testimonial.company === 'Bink & Partners') {
            console.log(`      - ${testimonial.company} logo: ${mapping['/images/binkpartners_logo.webp']}`)
            console.log(`      - ${testimonial.author?.name} avatar: ${mapping['/images/binkpartners_avatar.webp']}`)
            return {
              ...testimonial,
              companyLogo: mapping['/images/binkpartners_logo.webp'],
              author: {
                ...testimonial.author,
                avatar: mapping['/images/binkpartners_avatar.webp'],
              },
            }
          }
          return testimonial
        })
        
        return {
          ...block,
          testimonials: updatedTestimonials,
        }
      }
      
      // Return unchanged voor andere blocks
      return block
    })
    
    console.log('\n💾 Opslaan van updates via API...')
    
    // Update de homepage via API
    const updateResponse = await fetch(`${API_URL}/pages/${homepage.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blocks: updatedBlocks,
      }),
    })
    
    if (!updateResponse.ok) {
      const errorText = await updateResponse.text()
      throw new Error(`Failed to update page: ${updateResponse.statusText}\n${errorText}`)
    }
    
    const updated = await updateResponse.json()
    console.log('✅ Homepage succesvol geupdate!\n')
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    console.log('🎉 UPDATE COMPLEET!\n')
    console.log('👉 Volgende stappen:')
    console.log('   1. Ga naar http://localhost:3001/admin/collections/pages')
    console.log('   2. Open de homepage')
    console.log('   3. Check of alle images correct zijn gekoppeld')
    console.log('   4. Publish de pagina opnieuw als nodig\n')
    console.log('💡 TIP: Je kunt nu images in het CMS aanpassen!')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    
    process.exit(0)
  } catch (error: any) {
    console.error('\n❌ Update failed:', error.message)
    if (error.message.includes('ECONNREFUSED')) {
      console.error('\n💡 TIP: Zorg dat de dev server draait!')
      console.error('   Run eerst: pnpm dev')
      console.error('   Dan in een andere terminal: pnpm tsx scripts/update-homepage-images-api.ts\n')
    }
    process.exit(1)
  }
}

updateHomepageImagesViaAPI()
