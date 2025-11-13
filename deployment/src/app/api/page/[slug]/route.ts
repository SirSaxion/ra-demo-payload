import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const payload = await getPayload({ config })
    
    // Find page by slug
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: params.slug === 'home' ? '/' : params.slug,
        },
        status: {
          equals: 'published',
        },
      },
    })
    
    if (pages.docs.length === 0) {
      return NextResponse.json(
        { error: 'Page not found' },
        { status: 404 }
      )
    }
    
    const page = pages.docs[0]
    
    return NextResponse.json(page)
    
  } catch (error) {
    console.error('Error fetching page:', error)
    return NextResponse.json(
      { error: 'Failed to fetch page' },
      { status: 500 }
    )
  }
}
