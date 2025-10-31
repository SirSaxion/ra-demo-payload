import type { Block } from 'payload'

export const HrRecruitmentMethodology: Block = {
  slug: 'hrRecruitmentMethodology',
  interfaceName: 'HrRecruitmentMethodologyBlock',
  labels: {
    singular: 'HR Recruitment Methodology',
    plural: 'HR Recruitment Methodologies',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      defaultValue: 'Onze bewezen aanpak',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'Hoe we dit aanpakken',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
  ],
}
