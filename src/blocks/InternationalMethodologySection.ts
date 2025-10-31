import type { Block } from 'payload'

export const InternationalMethodologySection: Block = {
  slug: 'internationalMethodologySection',
  interfaceName: 'InternationalMethodologySection',
  dbName: 'intl_methodology',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Stappen',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
        },
        {
          name: 'stepLabel',
          type: 'text',
          label: 'Step Label',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschrijving',
        },
      ],
    },
    {
      name: 'bottomInsightIcon',
      type: 'text',
      label: 'Bottom Insight Icon',
    },
    {
      name: 'bottomInsightText',
      type: 'textarea',
      label: 'Bottom Insight Text (HTML allowed)',
    },
  ],
}
