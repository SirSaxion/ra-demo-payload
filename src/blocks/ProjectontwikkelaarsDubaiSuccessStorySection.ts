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
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Benefits',
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
