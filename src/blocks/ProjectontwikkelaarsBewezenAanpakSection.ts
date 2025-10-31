import type { Block } from 'payload'

export const ProjectontwikkelaarsBewezenAanpakSection: Block = {
  slug: 'projectontwikkelaarsBewezenAanpakSection',
  interfaceName: 'ProjectontwikkelaarsBewezenAanpakSectionBlock',
  dbName: 'proj_bewezen',
  labels: {
    singular: 'Projectontwikkelaars Bewezen Aanpak Section',
    plural: 'Projectontwikkelaars Bewezen Aanpak Sections',
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
