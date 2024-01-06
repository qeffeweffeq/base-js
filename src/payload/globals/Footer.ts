import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'menus',
      label: {
        en: 'Menus',
        it: 'Menù',
      },
      type: 'array',
      fields: [
        {
          name: 'menu',
          type: 'relationship',
          relationTo: 'menu',
        },
      ],
    },
  ],
}
