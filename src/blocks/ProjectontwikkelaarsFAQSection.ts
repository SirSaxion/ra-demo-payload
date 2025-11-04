import type { Block } from 'payload'

export const ProjectontwikkelaarsFAQSection: Block = {
  slug: 'projectontwikkelaarsFAQSection',
  interfaceName: 'ProjectontwikkelaarsFAQSectionBlock',
  dbName: 'proj_faq',
  labels: {
    singular: 'Projectontwikkelaars FAQ Section',
    plural: 'Projectontwikkelaars FAQ Sections',
  },
  fields: [
    {
      name: 'kicker',
      type: 'text',
      label: 'Kicker',
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
      name: 'questions',
      type: 'array',
      label: 'Questions',
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Question',
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Answer',
        },
      ],
    },
    {
      name: 'contactLinkText',
      type: 'text',
      label: 'Contact Link Text',
    },
    {
      name: 'contactLinkHref',
      type: 'text',
      label: 'Contact Link Href',
    },
    {
      name: 'phoneLabel',
      type: 'text',
      label: 'Phone Label',
    },
    {
      name: 'phoneNumber',
      type: 'text',
      label: 'Phone Number',
    },
  ],
}
