import mongoose, { Schema, Document } from 'mongoose'

export interface IBlock {
  id: string
  type: string
  order: number
  props: Record<string, any>
}

// Simple PageData type for static page definitions (legacy structure)
export interface PageData {
  slug: string
  title: string
  description: string
  published?: boolean
  blocks: IBlock[]
}

// New CMS structure with metadata
export interface PageDataWithMetadata {
  metadata?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: string
    canonicalUrl?: string
  }
  content: {
    nl: IPageContent
    en?: IPageContent
  }
}

export interface IPageContent {
  blocks: IBlock[]
}

export interface IPage extends Document {
  slug: string
  title: string
  metadata: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: string
    canonicalUrl?: string  // Optional override for canonical URL
    // Service Schema (for target group pages)
    serviceSchema?: {
      enabled: boolean
      serviceName?: string
      serviceDescription?: string
      serviceType?: string
      areaServed?: string
    }
  }
  content: {
    nl: IPageContent
    en?: IPageContent
  }
  status: 'draft' | 'published'
  publishedAt?: Date
  updatedBy: string
  createdAt: Date
  updatedAt: Date
}

const BlockSchema = new Schema({
  id: { type: String, required: true },
  type: { type: String, required: true },
  order: { type: Number, required: true },
  props: { type: Schema.Types.Mixed, default: {} },
}, { _id: false })

const PageContentSchema = new Schema({
  blocks: [BlockSchema],
}, { _id: false })

const PageSchema = new Schema<IPage>(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
    },
    metadata: {
      metaTitle: String,
      metaDescription: String,
      ogImage: String,
      canonicalUrl: String,
      // Service Schema
      serviceSchema: {
        enabled: { type: Boolean, default: false },
        serviceName: String,
        serviceDescription: String,
        serviceType: { type: String, default: 'Online Marketing' },
        areaServed: { type: String, default: 'Nederland' },
      },
    },
    content: {
      nl: {
        type: PageContentSchema,
        required: true,
      },
      en: PageContentSchema,
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'published',
    },
    publishedAt: Date,
    updatedBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Page || mongoose.model<IPage>('Page', PageSchema)
