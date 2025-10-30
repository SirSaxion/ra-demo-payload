import type { Block } from 'payload'

export const CasesBestVariants: Block = {
  slug: 'casesBestVariants',
  interfaceName: 'CasesBestVariants',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      required: true,
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
      required: true,
    },
    {
      name: 'featuredBadge',
      type: 'text',
      label: 'Featured Badge',
      required: true,
    },
    {
      name: 'featuredCompany',
      type: 'text',
      label: 'Featured Bedrijfsnaam',
      required: true,
    },
    {
      name: 'featuredSubtitle',
      type: 'text',
      label: 'Featured Subtitle',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'text',
      label: 'Featured Afbeelding URL',
      required: true,
    },
    {
      name: 'featuredImageAlt',
      type: 'text',
      label: 'Featured Afbeelding Alt',
      required: true,
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistieken',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam',
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
        },
        {
          name: 'from',
          type: 'text',
          label: 'Van',
        },
        {
          name: 'to',
          type: 'text',
          label: 'Naar',
        },
        {
          name: 'suffix',
          type: 'text',
          label: 'Suffix',
        },
      ],
    },
    {
      name: 'results',
      type: 'array',
      label: 'Resultaten',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam',
        },
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
    {
      name: 'otherCases',
      type: 'array',
      label: 'Andere Cases',
      fields: [
        {
          name: 'company',
          type: 'text',
          label: 'Bedrijfsnaam',
        },
        {
          name: 'sector',
          type: 'text',
          label: 'Sector',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam',
        },
        {
          name: 'highlight',
          type: 'text',
          label: 'Highlight',
        },
        {
          name: 'bullets',
          type: 'array',
          label: 'Bullet points',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Tekst',
            },
          ],
        },
        {
          name: 'image',
          type: 'text',
          label: 'Afbeelding URL',
        },
      ],
    },
  ],
}
