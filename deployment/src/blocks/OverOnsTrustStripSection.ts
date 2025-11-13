import type { Block } from 'payload'

export const OverOnsTrustStripSection: Block = {
  slug: 'overOnsTrustStripSection',
  interfaceName: 'OverOnsTrustStripSection',
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Items',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
  ],
}
