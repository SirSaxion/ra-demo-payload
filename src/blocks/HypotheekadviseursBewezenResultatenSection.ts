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
  ],
}
