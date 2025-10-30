import type { Block } from 'payload'

export const TestimonialsSection: Block = {
  slug: 'testimonialsSection',
  labels: {
    singular: 'Testimonials Section',
    plural: 'Testimonials Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Beschrijving',
    },
    {
      name: 'durationSec',
      type: 'number',
      label: 'Animatie duur (seconden)',
      defaultValue: 70,
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Bedrijfsnaam',
          required: true,
        },
        {
          name: 'imageSrc',
          type: 'text',
          label: 'Bedrijfslogo URL',
        },
        {
          name: 'badges',
          type: 'array',
          label: 'Badges',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Badge tekst',
            },
          ],
        },
        {
          name: 'author',
          type: 'group',
          label: 'Auteur',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Naam',
              required: true,
            },
            {
              name: 'handle',
              type: 'text',
              label: 'Functie/Bedrijf',
            },
            {
              name: 'avatar',
              type: 'text',
              label: 'Profielfoto URL',
            },
          ],
        },
        {
          name: 'text',
          type: 'textarea',
          label: 'Testimonial tekst',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link naar case',
        },
      ],
    },
  ],
}
