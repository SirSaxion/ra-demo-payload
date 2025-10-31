import type { Block } from 'payload'

export const MakelaarsBewezenSysteemSection: Block = {
  slug: 'makelaarsBewezenSysteemSection',
  interfaceName: 'MakelaarsBewezenSysteemSection',
  fields: [
    {
      name: 'kicker',
      type: 'text',
      label: 'Kicker',
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
      label: 'Subtitle (HTML allowed)',
    },
    {
      name: 'imageSrc',
      type: 'text',
      label: 'Afbeelding URL',
    },
    {
      name: 'imageAlt',
      type: 'text',
      label: 'Afbeelding alt tekst',
    },
    {
      name: 'benefitsTitle',
      type: 'text',
      label: 'Benefits Titel',
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Voordelen',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
    {
      name: 'quote',
      type: 'text',
      label: 'Quote',
    },
  ],
}
