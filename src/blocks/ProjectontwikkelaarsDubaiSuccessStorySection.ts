import type { Block } from 'payload'

export const ProjectontwikkelaarsDubaiSuccessStorySection: Block = {
  slug: 'projectontwikkelaarsDubaiSuccessStorySection',
  interfaceName: 'ProjectontwikkelaarsDubaiSuccessStorySectionBlock',
  dbName: 'proj_dubai_success',
  labels: {
    singular: 'Projectontwikkelaars Dubai Success Story Section',
    plural: 'Projectontwikkelaars Dubai Success Story Sections',
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
      type: 'textarea',
      label: 'Subtitle',
      localized: true,
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Benefits',
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
  ],
}
