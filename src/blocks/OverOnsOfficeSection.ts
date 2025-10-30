import type { Block } from 'payload'

export const OverOnsOfficeSection: Block = {
  slug: 'overOnsOfficeSection',
  interfaceName: 'OverOnsOfficeSection',
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
      type: 'text',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'latitude',
      type: 'number',
      label: 'Latitude',
      required: true,
    },
    {
      name: 'longitude',
      type: 'number',
      label: 'Longitude',
      required: true,
    },
    {
      name: 'address',
      type: 'group',
      label: 'Adres',
      fields: [
        {
          name: 'street',
          type: 'text',
          label: 'Straat + nummer',
        },
        {
          name: 'city',
          type: 'text',
          label: 'Postcode + plaats',
        },
      ],
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefoonnummer',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
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
  ],
}
