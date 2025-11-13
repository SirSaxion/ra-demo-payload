import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: 'public/media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'small',
        width: 640,
        height: 480,
        position: 'centre',
      },
      {
        name: 'medium',
        width: 1024,
        height: 768,
        position: 'centre',
      },
      {
        name: 'large',
        width: 1920,
        height: 1440,
        position: 'centre',
      },
    ],
    mimeTypes: ['image/*'],
  },
}
