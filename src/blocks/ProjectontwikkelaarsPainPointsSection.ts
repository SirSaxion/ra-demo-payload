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
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
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
    },
    {
      name: 'ctaDescription',
      type: 'text',
      label: 'CTA Description',
    },
  ],
}
