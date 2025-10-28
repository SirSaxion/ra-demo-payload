import type { Block } from 'payload'

export const TrustStrip: Block = {
  slug: 'trustStrip',
  labels: {
    singular: 'Trust Strip',
    plural: 'Trust Strips',
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Trust Items',
      required: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
          required: true,
        },
      ],
    },
    {
      name: 'ariaLabel',
      type: 'text',
      label: 'Aria Label (toegankelijkheid)',
      defaultValue: 'Vertrouwen en ervaring',
    },
  ],
}
