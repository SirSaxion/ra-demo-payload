import type { Block } from 'payload'

export const ProjectontwikkelaarsResultatenBentoGrid: Block = {
  slug: 'projectontwikkelaarsResultatenBentoGrid',
  interfaceName: 'ProjectontwikkelaarsResultatenBentoGridBlock',
  dbName: 'proj_results',
  labels: {
    singular: 'Projectontwikkelaars Resultaten Bento Grid',
    plural: 'Projectontwikkelaars Resultaten Bento Grids',
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
