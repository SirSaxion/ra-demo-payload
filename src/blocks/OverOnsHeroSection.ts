import type { Block } from 'payload'

export const OverOnsHeroSection: Block = {
  slug: 'overOnsHeroSection',
  interfaceName: 'OverOnsHeroSection',
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
      name: 'highlightedWord',
      type: 'text',
      label: 'Highlighted Word',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschrijving',
      required: true,
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
          name: 'value',
          type: 'text',
          label: 'Waarde',
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
        },
      ],
    },
  ],
}
