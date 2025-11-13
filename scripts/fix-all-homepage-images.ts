/**
 * Complete Homepage Images Fix - Final Version
 * 
 * Dit script update ALLE homepage blocks met de juiste image IDs.
 * Het reset NIETS en behoudt alle bestaande content.
 * 
 * Run met: pnpm tsx scripts/fix-all-homepage-images.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: '.env' })

// Lees de image mapping
const mappingPath = path.join(__dirname, 'homepage-images-mapping.json')
const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8')).mapping

async function fixAllHomepageImages() {
  console.log('🚀 Starting COMPLETE Homepage Images Fix...\n')
  console.log('⚠️  Dit script UPDATE alleen de homepage')
  console.log('⚠️  Alle bestaande content blijft behouden\n')
  
  try {
    // Set defaults if not in environment
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    // Disable schema push to avoid index conflicts
    process.env.PAYLOAD_DISABLE_PUSH = 'true'
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Find homepage
    console.log('🔍 Zoeken naar homepage...')
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/',
        },
      },
      limit: 1,
    })
    
    if (pages.docs.length === 0) {
      console.error('❌ Homepage niet gevonden!')
      process.exit(1)
    }
    
    const homepage = pages.docs[0]
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
    console.log('🔧 Updaten van ALLE blocks met images...\n')
    
    const updatedBlocks = homepage.blocks?.map((block: any) => {
      // HeroSection - voeg images toe
      if (block.blockType === 'heroSection') {
        console.log('   ✏️  Updating HeroSection:')
        console.log(`      - Video: /videos/herofootage_34s.mp4`)
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
      
      // UniqueApproach - update decorative image
      if (block.blockType === 'uniqueApproach') {
        console.log('   ✏️  Updating UniqueApproach:')
        console.log(`      - Decorative image: ${mapping['/images/emiro_pointing_right.png']}`)
        
        return {
          ...block,
          decorativeImage: mapping['/images/emiro_pointing_right.png'],
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
              imageSrc: undefined, // Remove old URL field
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
      
      // HowItWorksSection - update decorative image
      if (block.blockType === 'howItWorksSection') {
        console.log('   ✏️  Updating HowItWorksSection:')
        console.log(`      - Decorative image (Rudy raket): ${mapping['/images/rudyraket.png']}`)
        
        return {
          ...block,
          decorativeImage: mapping['/images/rudyraket.png'],
        }
      }
      
      // FinalCTA - update team image
      if (block.blockType === 'finalCTA') {
        console.log('   ✏️  Updating FinalCTA:')
        console.log(`      - Team image: ${mapping['/images/teamfoto_einde.png']}`)
        
        return {
          ...block,
          teamImage: mapping['/images/teamfoto_einde.png'],
        }
      }
      
      // Return unchanged voor andere blocks
      return block
    })
    
    console.log('\n💾 Opslaan van updates...')
    
    // Update de homepage
    const updated = await payload.update({
      collection: 'pages',
      id: homepage.id,
      data: {
        blocks: updatedBlocks,
      },
    })
    
    console.log('✅ Homepage succesvol geupdate!\n')
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    console.log('🎉 COMPLETE FIX DONE!\n')
    console.log('📊 Updated blocks:')
    console.log('   ✅ HeroSection (video poster + 3 avatars)')
    console.log('   ✅ CaseStudy (main image)')
    console.log('   ✅ UniqueApproach (decorative image)')
    console.log('   ✅ MarketingMachine (6 feature images)')
    console.log('   ✅ TargetGroupsOverviewPhotos (4 category images)')
    console.log('   ✅ TestimonialsSection (company logos + avatars)')
    console.log('   ✅ HowItWorksSection (decorative image)')
    console.log('   ✅ FinalCTA (team photo)\n')
    console.log('👉 Volgende stappen:')
    console.log('   1. Refresh de homepage - alle images komen nu uit het CMS!')
    console.log('   2. Ga naar http://localhost:3001/admin/collections/pages')
    console.log('   3. Open de homepage en check alle blocks')
    console.log('   4. Test: wijzig een image in het CMS en check of het werkt!\n')
    console.log('💡 TIP: Je kunt nu ALLE images aanpassen in het CMS!')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    
    process.exit(0)
  } catch (error: any) {
    console.error('\n❌ Update failed:', error)
    console.error(error?.stack)
    process.exit(1)
  }
}

fixAllHomepageImages()
