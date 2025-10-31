import type { Block } from 'payload'

export const ProjectontwikkelaarsVoorWieIsDitSection: Block = {
  slug: 'projectontwikkelaarsVoorWieIsDitSection',
  interfaceName: 'ProjectontwikkelaarsVoorWieIsDitSectionBlock',
  dbName: 'proj_voor_wie',
  labels: {
    singular: 'Projectontwikkelaars Voor Wie Is Dit Section',
    plural: 'Projectontwikkelaars Voor Wie Is Dit Sections',
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
