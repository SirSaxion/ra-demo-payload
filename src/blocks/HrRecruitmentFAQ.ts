import type { Block } from 'payload'

export const HrRecruitmentFAQ: Block = {
  slug: 'hrRecruitmentFAQ',
  interfaceName: 'HrRecruitmentFAQBlock',
  labels: {
    singular: 'HR Recruitment FAQ',
    plural: 'HR Recruitment FAQs',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      defaultValue: 'Veelgestelde Vragen',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'Vragen van HR-professionals',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
  ],
}
