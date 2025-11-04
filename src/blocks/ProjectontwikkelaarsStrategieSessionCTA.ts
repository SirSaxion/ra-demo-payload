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
    },
    {
      name: 'titleHighlight',
      type: 'text',
      label: 'Title Highlight',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
    },
    {
      name: 'bullets',
      type: 'array',
      label: 'Bullets',
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
    },
    {
      name: 'ctaSubtext',
      type: 'text',
      label: 'CTA Subtext',
    },
  ],
}
