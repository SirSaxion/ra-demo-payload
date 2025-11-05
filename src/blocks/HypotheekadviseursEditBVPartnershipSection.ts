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
      localized: true,
    },
    {
      name: 'oldWaySubtitle',
      type: 'text',
      label: 'Old Way Subtitle',
      localized: true,
    },
    {
      name: 'oldWayItems',
      type: 'array',
      label: 'Old Way Items',
      localized: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
        },
      ],
    },
    {
      name: 'transformLabel',
      type: 'text',
      label: 'Transform Label',
      localized: true,
    },
    {
      name: 'newWayTitle',
      type: 'text',
      label: 'New Way Titel',
      localized: true,
    },
    {
      name: 'newWaySubtitle',
      type: 'text',
      label: 'New Way Subtitle',
      localized: true,
    },
    {
      name: 'newWayItems',
      type: 'array',
      label: 'New Way Items',
      localized: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
        },
      ],
    },
    {
      name: 'bottomInsight',
      type: 'textarea',
      label: 'Bottom Insight',
      localized: true,
    },
  ],
}
