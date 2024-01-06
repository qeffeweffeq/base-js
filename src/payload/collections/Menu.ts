import type { CollectionConfig } from 'payload/types'
import link from '../fields/link'

export const Menu: CollectionConfig = {
  slug: 'menu',
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      en: 'Menu',
      it: 'Menù',
    },
    plural: {
      en: 'Menus',
      it: 'Menù',
    },
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        en: 'Name',
        it: 'Nome',
      },
    },
    {
      name: 'items',
      label: {
        en: 'Items',
        it: 'Elementi',
      },
      type: 'array',
      fields: [
        link({
          appearances: false,
          hasImage: true,
          hasSubMenus: true,
        }),
      ],
    },
  ],
}
