import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site settings',
  access: {
    read: () => true,
  },
  fields: [
    // Company Information
    {
      type: 'collapsible',
      label: 'Company information',
      fields: [
        {
          name: 'companyName',
          type: 'text',
          label: 'Company name',
          required: true,
          localized: true,
        },
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline',
          required: true,
          localized: true,
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo',
          required: false,
        },
        {
          name: 'badge',
          type: 'text',
          label: 'Badge/Partner text',
          localized: true,
        },
        {
          type: 'group',
          name: 'address',
          label: 'Address',
          fields: [
            {
              name: 'street',
              type: 'text',
              label: 'Street',
              required: true,
            },
            {
              name: 'postalCode',
              type: 'text',
              label: 'Postal code',
              required: true,
            },
            {
              name: 'city',
              type: 'text',
              label: 'City',
              required: true,
            },
            {
              name: 'country',
              type: 'text',
              label: 'Country',
              localized: true,
            },
          ],
        },
      ],
    },

    // Contact Information
    {
      type: 'collapsible',
      label: 'Contact information',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Phone number (display)',
          required: true,
          localized: true,
          admin: {
            description: 'Format: 085 060 2989 (NL) or +31 85 060 2989 (EN)',
          },
        },
        {
          name: 'phoneLink',
          type: 'text',
          label: 'Phone link (tel:)',
          required: true,
          admin: {
            description: 'Format: tel:+31850602989 (same for all languages)',
          },
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email address',
          required: true,
        },
        {
          name: 'emailLink',
          type: 'text',
          label: 'Email link (mailto:)',
          required: true,
          admin: {
            description: 'Format: mailto:info@realaccelerate.nl',
          },
        },
      ],
    },

    // Social Media
    {
      type: 'collapsible',
      label: 'Social media',
      fields: [
        {
          name: 'social',
          type: 'group',
          label: 'Social media links',
          fields: [
            {
              name: 'linkedin',
              type: 'text',
              label: 'LinkedIn URL',
            },
            {
              name: 'facebook',
              type: 'text',
              label: 'Facebook URL',
            },
            {
              name: 'instagram',
              type: 'text',
              label: 'Instagram URL',
            },
            {
              name: 'twitter',
              type: 'text',
              label: 'Twitter/X URL',
            },
          ],
        },
      ],
    },
  ],
}
