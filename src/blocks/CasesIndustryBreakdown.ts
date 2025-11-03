import type { Block } from 'payload'

export const CasesIndustryBreakdown: Block = {
  slug: 'casesIndustryBreakdown',
  interfaceName: 'CasesIndustryBreakdown',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      required: true,
      admin: {
        description: 'Badge text (e.g. "Live Reactie" or "Live Reaction")',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'chatHeader',
      type: 'text',
      label: 'Chat Header Name',
      required: true,
      defaultValue: 'Real Accelerate',
      admin: {
        description: 'Name shown in chat header',
      },
    },
    {
      name: 'chatStatus',
      type: 'text',
      label: 'Chat Status',
      required: true,
      defaultValue: 'online',
      admin: {
        description: 'Status text (e.g. "online" or "online")',
      },
    },
    {
      name: 'messages',
      type: 'array',
      label: 'Chat Messages',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'type',
          type: 'select',
          label: 'Message Type',
          required: true,
          options: [
            { label: 'Incoming (from RA)', value: 'incoming' },
            { label: 'Outgoing (from client)', value: 'outgoing' },
          ],
        },
        {
          name: 'text',
          type: 'textarea',
          label: 'Message Text',
          required: true,
        },
        {
          name: 'time',
          type: 'text',
          label: 'Time',
          required: true,
          admin: {
            description: 'Time format like "14:32"',
          },
        },
      ],
    },
    {
      name: 'inputPlaceholder',
      type: 'text',
      label: 'Input Placeholder',
      required: true,
      admin: {
        description: 'Placeholder text for message input (e.g. "Typ een bericht..." or "Type a message...")',
      },
    },
    {
      name: 'indicator1',
      type: 'text',
      label: 'Indicator 1 (Top Right)',
      required: true,
      admin: {
        description: 'Green pulse indicator (e.g. "+8")',
      },
    },
    {
      name: 'indicator2',
      type: 'text',
      label: 'Indicator 2 (Left)',
      required: true,
      admin: {
        description: 'Left floating indicator (e.g. "🎯 3 afspraken")',
      },
    },
    {
      name: 'indicator3',
      type: 'text',
      label: 'Indicator 3 (Right)',
      required: true,
      admin: {
        description: 'Right floating indicator (e.g. "💰 ROI 6x")',
      },
    },
    {
      name: 'footerText',
      type: 'textarea',
      label: 'Footer Text',
      required: true,
      admin: {
        description: 'Text below the chat interface',
      },
    },
    {
      name: 'footerAttribution',
      type: 'text',
      label: 'Footer Attribution',
      required: true,
      admin: {
        description: 'Attribution line (e.g. "— Gesprek met klant")',
      },
    },
  ],
}
