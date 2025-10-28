import mongoose, { Schema, Document } from 'mongoose'

export interface IVersion extends Document {
  pageId: mongoose.Types.ObjectId
  versionNumber: number
  snapshot: Record<string, any>
  author: string
  message?: string
  createdAt: Date
}

const VersionSchema = new Schema<IVersion>(
  {
    pageId: {
      type: Schema.Types.ObjectId,
      ref: 'Page',
      required: true,
      index: true,
    },
    versionNumber: {
      type: Number,
      required: true,
    },
    snapshot: {
      type: Schema.Types.Mixed,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    message: String,
  },
  {
    timestamps: true,
  }
)

VersionSchema.index({ pageId: 1, versionNumber: -1 })

export default mongoose.models.Version || mongoose.model<IVersion>('Version', VersionSchema)
