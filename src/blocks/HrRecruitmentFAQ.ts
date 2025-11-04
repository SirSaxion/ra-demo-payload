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
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'FAQ Items',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon Name (Lucide)',
        },
        {
          name: 'question',
          type: 'text',
          label: 'Question',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Answer',
          required: true,
        },
      ],
    },
    {
      name: 'contactText',
      type: 'text',
      label: 'Contact Text',
    },
    {
      name: 'phoneLabel',
      type: 'text',
      label: 'Phone Label',
    },
  ],
}
