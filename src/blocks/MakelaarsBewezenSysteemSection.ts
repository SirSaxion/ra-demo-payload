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
      name: 'decorativeImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Decoratieve afbeelding (upload)',
      admin: {
        description: 'Upload een decoratieve afbeelding voor deze sectie',
      },
    },
    {
      name: 'imageSrc',
      type: 'text',
      label: 'Afbeelding URL (alternatief)',
      admin: {
        description: 'Of gebruik een directe URL (backwards compatibility)',
      },
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
