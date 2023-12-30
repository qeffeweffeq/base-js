import type { Tab } from 'payload/types'

export const advancedTab: Tab = {
  label: {
    en: 'Advanced',
    it: 'Avanzate',
  },
  fields: [
    {
      type: 'group',
      name: 'devMode',
      label: {
        en: 'Dev Mode',
        it: 'Modalità Dev',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'enable',
              type: 'checkbox',
              label: {
                en: 'Enable Dev Mode',
                it: 'Modalità Dev',
              },
              admin: {
                width: '20%',
              },
            },
            {
              name: 'redirect',
              type: 'text',
              label: {
                en: 'URL Redirect',
                it: 'URL Redirect',
              },
              admin: {
                condition: (_, siblingData) => siblingData?.enable,
                width: '80%',
              },
            },
          ],
          admin: {
            style: {
              alignItems: 'center',
            },
          },
        },
      ],
    },
  ],
}
