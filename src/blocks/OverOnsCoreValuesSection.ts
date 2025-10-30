import type { Block } from 'payload'

export const OverOnsCoreValuesSection: Block = {
  slug: 'overOnsCoreValuesSection',
  interfaceName: 'OverOnsCoreValuesSection',
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
      type: 'textarea',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'values',
      type: 'array',
      label: 'Core Values',
      fields: [
        {
          name: 'id',
          type: 'text',
          label: 'ID',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschrijving',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam',
        },
        {
          name: 'color',
          type: 'text',
          label: 'Color gradient',
        },
        {
          name: 'bgGradient',
          type: 'text',
          label: 'Background gradient',
        },
      ],
    },
  ],
}
