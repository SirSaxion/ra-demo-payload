import type { Block } from 'payload'

export const HypotheekadviseursPainPointsSection: Block = {
  slug: 'hypotheekadviseursPainPointsSection',
  dbName: 'hyp_pain_points',
  interfaceName: 'HypotheekadviseursPainPointsSection',
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
      name: 'challenges',
      type: 'array',
      label: 'Challenges',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon',
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
      ],
    },
    {
      name: 'ctaIcon',
      type: 'text',
      label: 'CTA Icon',
    },
    {
      name: 'ctaTitle',
      type: 'text',
      label: 'CTA Titel',
    },
    {
      name: 'ctaDescription',
      type: 'textarea',
      label: 'CTA Beschrijving',
    },
  ],
}
