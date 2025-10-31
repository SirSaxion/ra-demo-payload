import type { Block } from 'payload'

export const HrRecruitmentWatJeKrijgt: Block = {
  slug: 'hrRecruitmentWatJeKrijgt',
  interfaceName: 'HrRecruitmentWatJeKrijgtBlock',
  labels: {
    singular: 'HR Recruitment Wat Je Krijgt',
    plural: 'HR Recruitment Wat Je Krijgt',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      defaultValue: 'Wat je krijgt',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'Complete HR recruitment transformatie',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
  ],
}
