import type { Block } from 'payload'

export const MakelaarsProblemSection: Block = {
  slug: 'makelaarsProblemSection',
  interfaceName: 'MakelaarsProblemSection',
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
      label: 'Subtitle',
    },
    {
      name: 'oldWayTitle',
      type: 'text',
      label: 'Oude Manier Titel',
    },
    {
      name: 'oldWaySubtitle',
      type: 'text',
      label: 'Oude Manier Subtitle',
    },
    {
      name: 'problems',
      type: 'array',
      label: 'Problemen',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam',
        },
      ],
    },
    {
      name: 'newWayTitle',
      type: 'text',
      label: 'Nieuwe Manier Titel',
    },
    {
      name: 'newWaySubtitle',
      type: 'text',
      label: 'Nieuwe Manier Subtitle',
    },
    {
      name: 'solutions',
      type: 'array',
      label: 'Oplossingen',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam',
        },
      ],
    },
    {
      name: 'bottomInsight',
      type: 'textarea',
      label: 'Bottom Insight (HTML allowed)',
    },
  ],
}
