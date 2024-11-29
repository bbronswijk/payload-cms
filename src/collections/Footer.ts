import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'about',
      type: 'textarea',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      maxRows: 8,
      fields: [
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'page',
          required: true,
        },
      ],
    },
    {
      name: 'facebook',
      type: 'text',
      required: true,
    },
    {
      name: 'twitter',
      type: 'text',
      required: true,
    },
    {
      name: 'instagram',
      type: 'text',
      required: true,
    },
  ],
}
