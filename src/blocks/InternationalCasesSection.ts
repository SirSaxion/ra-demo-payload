import type { Block } from 'payload'

export const InternationalCasesSection: Block = {
  slug: 'internationalCasesSection',
  interfaceName: 'InternationalCasesSection',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
    },
    {
      name: 'cases',
      type: 'array',
      label: 'Cases',
      fields: [
        {
          name: 'id',
          type: 'number',
          label: 'ID',
        },
        {
          name: 'name',
          type: 'text',
          label: 'Naam',
        },
        {
          name: 'role',
          type: 'text',
          label: 'Rol',
        },
        {
          name: 'company',
          type: 'text',
          label: 'Bedrijf',
        },
        {
          name: 'story',
          type: 'textarea',
          label: 'Verhaal',
        },
        {
          name: 'achievement',
          type: 'text',
          label: 'Prestatie',
        },
        {
          name: 'metric',
          type: 'text',
          label: 'Metric',
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          label: 'Avatar afbeelding',
          admin: {
            description: 'Avatar afbeelding voor case',
          },
        },
        {
          name: 'rating',
          type: 'number',
          label: 'Rating',
        },
        {
          name: 'country',
          type: 'text',
          label: 'Land',
        },
        {
          name: 'projectValue',
          type: 'text',
          label: 'Project waarde',
        },
        {
          name: 'span',
          type: 'text',
          label: 'Span (CSS class)',
        },
      ],
    },
    {
      name: 'bottomInsightIcon',
      type: 'text',
      label: 'Bottom Insight Icon',
    },
    {
      name: 'bottomInsightText',
      type: 'textarea',
      label: 'Bottom Insight Text (HTML allowed)',
    },
  ],
}
