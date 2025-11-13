import type { Block } from 'payload'

export const HrRecruitmentTransformation: Block = {
  slug: 'hrRecruitmentTransformation',
  interfaceName: 'HrRecruitmentTransformationBlock',
  labels: {
    singular: 'HR Recruitment Transformation',
    plural: 'HR Recruitment Transformations',
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
      name: 'oldWayTitle',
      type: 'text',
      label: 'Old Way Title',
    },
    {
      name: 'oldWaySubtitle',
      type: 'text',
      label: 'Old Way Subtitle',
    },
    {
      name: 'oldWayItems',
      type: 'array',
      label: 'Old Way Items',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
          required: true,
        },
      ],
    },
    {
      name: 'newWayTitle',
      type: 'text',
      label: 'New Way Title',
    },
    {
      name: 'newWaySubtitle',
      type: 'text',
      label: 'New Way Subtitle',
    },
    {
      name: 'newWayItems',
      type: 'array',
      label: 'New Way Items',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
          required: true,
        },
      ],
    },
  ],
}
