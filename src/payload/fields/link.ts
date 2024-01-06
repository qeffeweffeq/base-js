import type { Field } from 'payload/types'

import deepMerge from '../utilities/deepMerge'

export const appearanceOptions = {
  primary: {
    label: 'Primary Button',
    value: 'primary',
  },
  secondary: {
    label: 'Secondary Button',
    value: 'secondary',
  },
  default: {
    label: 'Default',
    value: 'default',
  },
}

export type LinkAppearances = 'primary' | 'secondary' | 'default'

type LinkType = (options?: {
  appearances?: LinkAppearances[] | false
  disableLabel?: boolean
  disableHeading?: boolean
  hasImage?: boolean
  hasSubMenus?: boolean
  additionalFields?: Field[]
  overrides?: Record<string, unknown>
}) => Field

const link: LinkType = (options = {}) => {
  const {
    appearances,
    disableLabel = false,
    disableHeading = false,
    hasImage = false,
    hasSubMenus = false,
    additionalFields = [],
    overrides = {},
  } = options

  const linkResult: Field = {
    name: 'link',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'hasImage',
            type: 'checkbox',
            label: {
              en: 'Image',
              it: 'Immagine',
            },
            hidden: !hasImage,
            admin: {
              style: {
                flexGrow: '0',
              },
            },
            defaultValue: false,
          },
          {
            name: 'external',
            type: 'checkbox',
            label: {
              en: 'External Link',
              it: 'Link esterno',
            },
            admin: {
              style: {
                flexGrow: '0',
              },
            },
          },
        ].filter(Boolean) as Field[],
      },
      {
        name: 'image',
        label: {
          en: 'Image',
          it: 'Immagine',
        },
        type: 'upload',
        relationTo: 'media',
        admin: {
          width: '50%',
          condition: (_: Partial<any>, siblingData: Partial<any>) => siblingData?.hasImage,
        },
        hidden: !hasImage,
      },
    ].filter(Boolean) as Field[],
  }

  if (disableHeading) {
    linkResult.admin.className = 'no-label'
    linkResult.label = false
  }

  const linkTypes: Field[] = [
    {
      name: 'reference',
      label: {
        en: 'Page',
        it: 'Pagina',
      },
      type: 'relationship',
      relationTo: ['pages'],
      required: true,
      maxDepth: 1,
      admin: {
        condition: (_, siblingData) => !siblingData?.external,
      },
    },
    {
      name: 'url',
      label: {
        en: 'URL',
        it: 'URL',
      },
      type: 'text',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.external,
      },
    },
  ]

  if (!disableLabel) {
    linkTypes.map(linkType => ({
      ...linkType,
      admin: {
        ...linkType.admin,
        width: '50%',
      },
    }))

    linkResult.fields = [
      {
        type: 'row',
        fields: [
          ...linkTypes,
          {
            name: 'label',
            label: 'Label',
            type: 'text',
            required: true,
            localized: true,
            admin: {
              width: '50%',
            },
          },
        ],
      },
      ...linkResult.fields,
    ]
  } else {
    linkResult.fields = [...linkTypes, ...linkResult.fields]
  }

  if (appearances !== false) {
    let appearanceOptionsToUse = [
      appearanceOptions.default,
      appearanceOptions.primary,
      appearanceOptions.secondary,
    ]

    if (appearances) {
      appearanceOptionsToUse = appearances.map(appearance => appearanceOptions[appearance])
    }

    linkResult.fields.push({
      name: 'appearance',
      type: 'select',
      defaultValue: 'default',
      options: appearanceOptionsToUse,
      admin: {
        description: 'Choose how the link should be rendered.',
      },
    })
  }

  if (hasSubMenus) {
    linkResult.fields.push({
      name: 'subMenu',
      label: {
        en: 'Sub Menu',
        it: 'Sottomenù',
      },
      type: 'array',
      fields: [
        link({
          ...options,
          hasSubMenus: false,
          additionalFields: [
            {
              name: 'subMenu',
              label: {
                en: 'Sub Menu',
                it: 'Sottomenù',
              },
              type: 'array',
              fields: [link({ ...options, hasSubMenus: false })],
            },
          ],
        }),
      ],
    })
  }

  if (additionalFields.length) {
    linkResult.fields = linkResult.fields.concat(additionalFields)
  }

  return deepMerge(linkResult, overrides)
}

export default link
