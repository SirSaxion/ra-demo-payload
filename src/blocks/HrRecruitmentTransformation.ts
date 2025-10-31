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
      defaultValue: 'Van reactief naar proactief',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'De transformatie',
    },
  ],
}
