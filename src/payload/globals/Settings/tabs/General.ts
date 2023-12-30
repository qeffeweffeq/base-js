import type { Tab } from 'payload/types'

export const generalTab: Tab = {
  label: {
    en: 'General',
    it: 'Generali',
  },
  fields: [
    {
      type: 'group',
      name: 'site',
      label: {
        en: 'Site',
        it: 'Sito',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: {
                en: 'Name',
                it: 'Nome',
              },
            },
            {
              name: 'vat',
              type: 'text',
              label: {
                en: 'VAT',
                it: 'P. IVA',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'contact',
      label: {
        en: 'Contact',
        it: 'Contatti',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'email',
              type: 'email',
            },
            {
              name: 'phone',
              type: 'text',
              label: {
                en: 'Phone',
                it: 'Telefono',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'address',
      label: {
        en: 'Address',
        it: 'Indirizzo',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'address',
              type: 'text',
              label: {
                en: 'Address',
                it: 'Indirizzo',
              },
              admin: {
                width: '80%',
              },
            },
            {
              name: 'zip',
              type: 'text',
              label: {
                en: 'ZIP',
                it: 'CAP',
              },
              admin: {
                width: '20%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'city',
              type: 'text',
              label: {
                en: 'City',
                it: 'Città',
              },
            },
            {
              name: 'province',
              type: 'text',
              label: {
                en: 'Province',
                it: 'Provincia',
              },
            },
            {
              name: 'state',
              type: 'text',
              label: {
                en: 'State',
                it: 'Stato',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'postsPage',
      type: 'relationship',
      relationTo: 'pages',
      label: {
        en: 'Posts page',
        it: 'Pagina dei post',
      },
    },
    {
      name: 'projectsPage',
      type: 'relationship',
      relationTo: 'pages',
      label: {
        en: 'Projects page',
        it: 'Pagina dei progetti',
      },
    },
  ],
}
