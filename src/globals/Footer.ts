import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
      required: true,
    },
    {
      name: 'companyName',
      type: 'text',
      label: 'Bedrijfsnaam',
      required: true,
      defaultValue: 'Real Accelerate',
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: true,
      localized: true,
      defaultValue: 'Voorspelbare groei voor makelaars en vastgoedteams.',
    },
    {
      name: 'showAddress',
      type: 'checkbox',
      label: 'Adres tonen',
      defaultValue: true,
    },
    {
      name: 'address',
      type: 'group',
      label: 'Adresgegevens',
      admin: {
        condition: (data) => data.showAddress,
      },
      fields: [
        {
          name: 'street',
          type: 'text',
          label: 'Straat + huisnummer',
          required: true,
          defaultValue: 'Daalwijkdreef 47',
        },
        {
          name: 'postalCode',
          type: 'text',
          label: 'Postcode',
          required: true,
          defaultValue: '1103 AD',
        },
        {
          name: 'city',
          type: 'text',
          label: 'Plaats',
          required: true,
          defaultValue: 'Amsterdam',
        },
      ],
    },
    {
      name: 'badge',
      type: 'text',
      label: 'Badge tekst (bijv. "IQI Global Partner")',
      localized: true,
      defaultValue: 'IQI Global Partner',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefoonnummer',
      required: true,
      defaultValue: '085 060 2989',
    },
    {
      name: 'email',
      type: 'text',
      label: 'E-mailadres',
      required: true,
      defaultValue: 'info@realaccelerate.nl',
    },
    {
      name: 'mainLinks',
      type: 'array',
      label: 'Pagina links',
      localized: true,
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Naam',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link',
          required: true,
        },
      ],
      defaultValue: [
        { name: 'Home', href: '/' },
        { name: 'Cases', href: '/cases' },
        { name: 'Over ons', href: '/over-ons' },
      ],
    },
    {
      name: 'targetGroups',
      type: 'array',
      label: 'Doelgroep links ("Voor wie?")',
      localized: true,
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Naam',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link',
          required: true,
        },
      ],
      defaultValue: [
        { name: 'Makelaars', href: '/makelaars' },
        { name: 'Hypotheekadviseurs', href: '/hypotheekadviseurs' },
        { name: 'Makelaars buitenland', href: '/makelaars-buitenland' },
        { name: 'Projectontwikkelaars', href: '/projectontwikkelaars' },
        { name: 'HR & Recruitment', href: '/hr-recruitment' },
      ],
    },
    {
      name: 'showSocial',
      type: 'checkbox',
      label: 'Social media tonen',
      defaultValue: true,
    },
    {
      name: 'social',
      type: 'group',
      label: 'Social media',
      admin: {
        condition: (data) => data.showSocial,
      },
      fields: [
        {
          name: 'linkedin',
          type: 'text',
          label: 'LinkedIn URL',
          defaultValue: 'https://www.linkedin.com/company/realaccelerate',
        },
        {
          name: 'facebook',
          type: 'text',
          label: 'Facebook URL',
          defaultValue: 'https://www.facebook.com/realaccelerate',
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram URL',
        },
      ],
    },
    {
      name: 'copyrightText',
      type: 'text',
      label: 'Copyright tekst (gebruik {year} voor huidige jaar)',
      localized: true,
      defaultValue: '© {year} Real Accelerate. Alle rechten voorbehouden.',
    },
  ],
}
