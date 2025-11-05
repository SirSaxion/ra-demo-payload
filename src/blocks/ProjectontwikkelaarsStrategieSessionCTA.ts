import type { Block } from 'payload'

export const ProjectontwikkelaarsStrategieSessionCTA: Block = {
  slug: 'projectontwikkelaarsStrategieSessionCTA',
  interfaceName: 'ProjectontwikkelaarsStrategieSessionCTABlock',
  dbName: 'proj_cta',
  labels: {
    singular: 'Projectontwikkelaars Strategie Session CTA',
    plural: 'Projectontwikkelaars Strategie Session CTAs',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      localized: true,
    },
    {
      name: 'titleHighlight',
      type: 'text',
      label: 'Title Highlight',
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
      localized: true,
    },
    {
      name: 'bullets',
      type: 'array',
      label: 'Bullets',
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
      name: 'ctaLabel',
      type: 'text',
      label: 'CTA Label',
      localized: true,
    },
    {
      name: 'ctaSubtext',
      type: 'text',
      label: 'CTA Subtext',
      localized: true,
    },
  ],
}
