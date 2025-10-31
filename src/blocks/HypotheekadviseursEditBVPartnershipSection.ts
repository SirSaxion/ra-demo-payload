import type { Block } from 'payload'

export const HypotheekadviseursEditBVPartnershipSection: Block = {
  slug: 'hypotheekadviseursEditBVPartnershipSection',
  dbName: 'hyp_editbv_partnership',
  interfaceName: 'HypotheekadviseursEditBVPartnershipSection',
  fields: [
    {
      name: 'kicker',
      type: 'text',
      label: 'Kicker',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Benefits',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon',
        },
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
    {
      name: 'oldWayTitle',
      type: 'text',
      label: 'Old Way Titel',
    },
    {
      name: 'newWayTitle',
      type: 'text',
      label: 'New Way Titel',
    },
    {
      name: 'newWaySubtitle',
      type: 'text',
      label: 'New Way Subtitle',
    },
    {
      name: 'bottomInsight',
      type: 'textarea',
      label: 'Bottom Insight',
    },
  ],
}
