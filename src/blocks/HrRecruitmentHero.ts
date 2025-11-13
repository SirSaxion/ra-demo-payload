import type { Block } from 'payload'

export const HrRecruitmentHero: Block = {
  slug: 'hrRecruitmentHero',
  interfaceName: 'HrRecruitmentHeroBlock',
  labels: {
    singular: 'HR Recruitment Hero',
    plural: 'HR Recruitment Heroes',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      defaultValue: 'Voor HR-professionals',
    },
    {
      name: 'titleBefore',
      type: 'text',
      label: 'Title Before',
      defaultValue: 'Stop met jagen op',
    },
    {
      name: 'titleHighlight',
      type: 'text',
      label: 'Title Highlight',
      defaultValue: 'kandidaten',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
      admin: {
        description: 'Supports HTML for bold text',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
      admin: {
        description: 'Main hero image',
      },
    },
    {
      name: 'imageAlt',
      type: 'text',
      label: 'Image Alt Text',
      defaultValue: 'HR team at work',
    },
  ],
}
