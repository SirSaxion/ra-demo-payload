import type { Block } from 'payload'

export const MakelaarsTrustStrip: Block = {
  slug: 'makelaarsTrustStrip',
  interfaceName: 'MakelaarsTrustStrip',
  fields: [
    {
      name: 'trustItems',
      type: 'array',
      label: 'Trust Items',
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
