import type { GlobalConfig } from 'payload/types'

export const Header: GlobalConfig = {
  slug: 'header',
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
      maxRows: 2,
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
