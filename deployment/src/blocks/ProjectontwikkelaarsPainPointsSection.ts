import type { Block } from 'payload'

export const ProjectontwikkelaarsPainPointsSection: Block = {
  slug: 'projectontwikkelaarsPainPointsSection',
  interfaceName: 'ProjectontwikkelaarsPainPointsSectionBlock',
  dbName: 'proj_pain',
  labels: {
    singular: 'Projectontwikkelaars Pain Points Section',
    plural: 'Projectontwikkelaars Pain Points Sections',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      localized: true,
    },
    {
      name: 'challenges',
      type: 'array',
      label: 'Challenges',
      localized: true,
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
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
      label: 'CTA Title',
      localized: true,
    },
    {
      name: 'ctaDescription',
      type: 'text',
      label: 'CTA Description',
      localized: true,
    },
  ],
}
