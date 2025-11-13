import type { Block } from 'payload'

export const HrRecruitmentStrategieSessionCTA: Block = {
  slug: 'hrRecruitmentStrategieSessionCTA',
  interfaceName: 'HrRecruitmentStrategieSessionCTABlock',
  labels: {
    singular: 'HR Recruitment Strategie Session CTA',
    plural: 'HR Recruitment Strategie Session CTAs',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'Klaar voor meer sollicitaties?',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'ctaLabel',
      type: 'text',
      label: 'CTA Label',
      defaultValue: 'Plan gratis analyse',
    },
  ],
}
