import type { Block } from 'payload'

export const MarketingMachine: Block = {
  slug: 'marketingMachine',
  labels: {
    singular: 'Marketing Machine',
    plural: 'Marketing Machines',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitel',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      required: true,
      minRows: 6,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam (Lucide)',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          label: 'Naam',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschrijving',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link',
        },
        {
          name: 'cta',
          type: 'text',
          label: 'CTA tekst',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Afbeelding (upload)',
          admin: {
            description: 'Upload afbeelding vanuit media library',
          },
        },
        {
          name: 'imageSrc',
          type: 'text',
          label: 'Afbeelding URL (alternatief)',
          admin: {
            description: 'Of gebruik een directe URL zoals /images/foto.webp',
          },
        },
      ],
    },
  ],
}
