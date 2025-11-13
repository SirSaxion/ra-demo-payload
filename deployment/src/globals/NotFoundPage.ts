import type { GlobalConfig } from 'payload'

export const NotFoundPage: GlobalConfig = {
  slug: 'not-found-page',
  label: '404 Page',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'collapsible',
      label: 'Content',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          localized: true,
          admin: {
            description: 'Main heading on the 404 page',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
          localized: true,
          admin: {
            description: 'Text below the title',
          },
        },
        {
          name: 'helpText',
          type: 'text',
          label: 'Help text',
          required: true,
          localized: true,
          admin: {
            description: 'Text above contact info (e.g., "Need help? Contact us directly:")',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Buttons',
      fields: [
        {
          name: 'primaryButton',
          type: 'group',
          label: 'Primary button',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Button text',
              required: true,
              localized: true,
            },
            {
              name: 'href',
              type: 'text',
              label: 'Link',
              required: true,
              admin: {
                description: 'URL to navigate to (e.g., /)',
              },
            },
          ],
        },
        {
          name: 'secondaryButton',
          type: 'group',
          label: 'Secondary button',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Button text',
              required: true,
              localized: true,
            },
            {
              name: 'href',
              type: 'text',
              label: 'Link',
              required: true,
              admin: {
                description: 'URL to navigate to (e.g., /cases)',
              },
            },
          ],
        },
      ],
    },
  ],
}
