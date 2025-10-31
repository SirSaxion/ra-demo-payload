import type { Block } from 'payload'

export const MakelaarsInternationalTrustStrip: Block = {
  slug: 'makelaarsInternationalTrustStrip',
  interfaceName: 'MakelaarsInternationalTrustStrip',
  dbName: 'intl_trust_strip',
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
