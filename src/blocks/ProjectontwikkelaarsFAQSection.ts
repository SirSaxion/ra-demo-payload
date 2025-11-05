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
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      localized: true,
    },
    {
      name: 'questions',
      type: 'array',
      label: 'Questions',
      localized: true,
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon (Lucide icon name)',
          localized: false,
        },
        {
          name: 'question',
          type: 'text',
          label: 'Question',
          localized: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Answer',
          localized: true,
        },
      ],
    },
    {
      name: 'contactLinkText',
      type: 'text',
      label: 'Contact Link Text',
      localized: true,
    },
    {
      name: 'contactLinkHref',
      type: 'text',
      label: 'Contact Link Href',
    },
    {
      name: 'contactCtaText',
      type: 'text',
      label: 'Contact CTA Text (after link)',
      localized: true,
    },
    {
      name: 'phoneLabel',
      type: 'text',
      label: 'Phone Label',
      localized: true,
    },
    {
      name: 'phoneNumber',
      type: 'text',
      label: 'Phone Number',
    },
    {
      name: 'phoneCallText',
      type: 'text',
      label: 'Phone Call Text',
      localized: true,
    },
  ],
}
