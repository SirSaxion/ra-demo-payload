import type { Block } from 'payload'

export const InternationalPainPointsSection: Block = {
  slug: 'internationalPainPointsSection',
  interfaceName: 'InternationalPainPointsSection',
  dbName: 'intl_pain_points',
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
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
    },
    {
      name: 'painPoints',
      type: 'array',
      label: 'Pain Points',
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
          name: 'description',
          type: 'textarea',
          label: 'Beschrijving',
        },
        {
          name: 'image',
          type: 'text',
          label: 'Afbeelding URL',
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
