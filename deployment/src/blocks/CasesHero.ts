import type { Block } from 'payload'

export const CasesHero: Block = {
  slug: 'casesHero',
  interfaceName: 'CasesHero',
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
      name: 'titleHighlight',
      type: 'text',
      label: 'Titel Highlight',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'ctaPrimary',
      type: 'text',
      label: 'Primaire CTA tekst',
      required: true,
    },
    {
      name: 'ctaSecondary',
      type: 'text',
      label: 'Secundaire CTA tekst',
      required: true,
    },
    {
      name: 'ctaSecondaryHref',
      type: 'text',
      label: 'Secundaire CTA link',
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
          name: 'value',
          type: 'number',
          label: 'Waarde',
        },
        {
          name: 'suffix',
          type: 'text',
          label: 'Suffix',
        },
      ],
    },
    {
      name: 'image',
      type: 'text',
      label: 'Afbeelding URL',
      required: true,
    },
    {
      name: 'imageAlt',
      type: 'text',
      label: 'Afbeelding alt tekst',
      required: true,
    },
  ],
}
