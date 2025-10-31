import type { Block } from 'payload'

export const HypotheekadviseursTrustStrip: Block = {
  slug: 'hypotheekadviseursTrustStrip',
  dbName: 'hyp_trust_strip',
  interfaceName: 'HypotheekadviseursTrustStrip',
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
