import type { Block } from 'payload'

export const HypotheekadviseursBewezenResultatenSection: Block = {
  slug: 'hypotheekadviseursBewezenResultatenSection',
  dbName: 'hyp_bewezen_resultaten',
  interfaceName: 'HypotheekadviseursBewezenResultatenSection',
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
      label: 'Titel',
      required: true,
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
      localized: true,
    },
    {
      name: 'caseStudyImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Case Study Afbeelding',
      admin: {
        description: 'Afbeelding voor de case study',
      },
    },
    {
      name: 'caseStudyImageAlt',
      type: 'text',
      label: 'Case Study Afbeelding Alt Text',
      localized: true,
      admin: {
        description: 'Alt text voor de case study afbeelding',
      },
    },
    {
      name: 'kpis',
      type: 'array',
      label: 'KPIs',
      localized: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
        },
        {
          name: 'from',
          type: 'number',
          label: 'From',
          required: true,
        },
        {
          name: 'to',
          type: 'number',
          label: 'To',
          required: true,
        },
        {
          name: 'unit',
          type: 'text',
          label: 'Unit',
        },
        {
          name: 'sublabel',
          type: 'text',
          label: 'Sublabel',
        },
        {
          name: 'span',
          type: 'number',
          label: 'Span',
        },
      ],
    },
    {
      name: 'bullets',
      type: 'array',
      label: 'Bullets',
      localized: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
          required: true,
        },
      ],
    },
  ],
}
