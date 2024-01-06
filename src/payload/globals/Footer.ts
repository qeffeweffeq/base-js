import type { GlobalConfig } from 'payload/types'

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
      localized: true,
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
