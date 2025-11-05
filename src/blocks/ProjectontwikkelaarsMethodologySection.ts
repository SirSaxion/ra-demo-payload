import type { Block } from 'payload'

export const ProjectontwikkelaarsMethodologySection: Block = {
  slug: 'projectontwikkelaarsMethodologySection',
  interfaceName: 'ProjectontwikkelaarsMethodologySectionBlock',
  dbName: 'proj_method',
  labels: {
    singular: 'Projectontwikkelaars Methodology Section',
    plural: 'Projectontwikkelaars Methodology Sections',
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
      name: 'steps',
      type: 'array',
      label: 'Steps',
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
      name: 'bottomText',
      type: 'text',
      label: 'Bottom Text',
      localized: true,
    },
  ],
}
