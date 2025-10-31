import type { Block } from 'payload'

export const HrRecruitmentTrustStrip: Block = {
  slug: 'hrRecruitmentTrustStrip',
  interfaceName: 'HrRecruitmentTrustStripBlock',
  labels: {
    singular: 'HR Recruitment Trust Strip',
    plural: 'HR Recruitment Trust Strips',
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Trust Items',
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
      name: 'ariaLabel',
      type: 'text',
      label: 'Aria Label',
      defaultValue: 'Vertrouwen en ervaring',
    },
  ],
}
