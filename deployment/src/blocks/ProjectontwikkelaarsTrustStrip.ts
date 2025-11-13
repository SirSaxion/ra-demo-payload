import type { Block } from 'payload'

export const ProjectontwikkelaarsTrustStrip: Block = {
  slug: 'projectontwikkelaarsTrustStrip',
  interfaceName: 'ProjectontwikkelaarsTrustStripBlock',
  dbName: 'proj_trust',
  labels: {
    singular: 'Projectontwikkelaars Trust Strip',
    plural: 'Projectontwikkelaars Trust Strips',
  },
  fields: [
    {
      name: 'trustItems',
      type: 'array',
      label: 'Trust Items',
      localized: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
        },
      ],
    },
  ],
}
