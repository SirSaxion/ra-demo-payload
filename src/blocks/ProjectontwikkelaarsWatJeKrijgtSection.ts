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
  ],
}
