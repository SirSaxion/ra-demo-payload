import type { Block } from 'payload'

export const InternationalGlobeSection: Block = {
  slug: 'internationalGlobeSection',
  interfaceName: 'InternationalGlobeSection',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
    },
    {
      name: 'title',
      type: 'textarea',
      label: 'Titel (HTML allowed)',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
    },
  ],
}
