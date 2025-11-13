import type { Block } from 'payload'

export const MakelaarsGuaranteesSection: Block = {
  slug: 'makelaarsGuaranteesSection',
  interfaceName: 'MakelaarsGuaranteesSection',
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
      name: 'cards',
      type: 'array',
      label: 'Cards',
      dbName: 'guar_cards',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtitle',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Items',
          dbName: 'card_items',
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Tekst (HTML allowed)',
            },
          ],
        },
      ],
    },
  ],
}
