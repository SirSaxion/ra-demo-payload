import type { Block } from 'payload'

export const MakelaarsHero: Block = {
  slug: 'makelaarsHero',
  interfaceName: 'MakelaarsHero',
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
      required: true,
    },
    {
      name: 'ctaPrimary',
      type: 'group',
      label: 'Primaire CTA',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link',
        },
      ],
    },
    {
      name: 'ctaSecondary',
      type: 'group',
      label: 'Secundaire CTA',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link',
        },
      ],
    },
    {
      name: 'trustIndicators',
      type: 'array',
      label: 'Trust Indicators',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
    {
      name: 'avatarsTitle',
      type: 'text',
      label: 'Avatars Title',
    },
    {
      name: 'avatars',
      type: 'array',
      label: 'Avatars',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Avatar afbeelding (upload)',
          admin: {
            description: 'Upload een avatar afbeelding',
          },
        },
        {
          name: 'src',
          type: 'text',
          label: 'Afbeelding URL (alternatief)',
          admin: {
            description: 'Of gebruik een directe URL (backwards compatibility)',
          },
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Alt tekst',
        },
        {
          name: 'tilt',
          type: 'text',
          label: 'Tilt CSS Class',
        },
      ],
    },
    {
      name: 'floatingStats',
      type: 'array',
      label: 'Floating Stats',
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
      ],
    },
    {
      name: 'testimonialQuote',
      type: 'text',
      label: 'Testimonial Quote',
    },
  ],
}
