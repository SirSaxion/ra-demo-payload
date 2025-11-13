import type { Block } from 'payload'

export const ProjectontwikkelaarsWatJeKrijgtSection: Block = {
  slug: 'projectontwikkelaarsWatJeKrijgtSection',
  interfaceName: 'ProjectontwikkelaarsWatJeKrijgtSectionBlock',
  dbName: 'proj_wat_je_krijgt',
  labels: {
    singular: 'Projectontwikkelaars Wat Je Krijgt Section',
    plural: 'Projectontwikkelaars Wat Je Krijgt Sections',
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
      name: 'tabs',
      type: 'array',
      label: 'Tabs',
      localized: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Tab Label',
          required: true,
          localized: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          localized: true,
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          localized: true,
          fields: [
            {
              name: 'icon',
              type: 'text',
              label: 'Icon (Lucide icon name)',
              localized: false,
            },
            {
              name: 'title',
              type: 'text',
              label: 'Feature Title',
              localized: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Feature Description',
              localized: true,
            },
          ],
        },
      ],
    },
  ],
}
