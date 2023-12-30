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
  overrides?: Record<string, unknown>
}) => Field

const link: LinkType = ({
  appearances,
  disableLabel = false,
  disableHeading = false,
  overrides = {},
} = {}) => {
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
            name: 'type',
            type: 'radio',
            options: [
              {
                label: 'Internal link',
                value: 'reference',
              },
              {
                label: 'Custom URL',
                value: 'custom',
              },
            ],
            defaultValue: 'reference',
            admin: {
              layout: 'horizontal',
              width: '50%',
            },
            hidden: true,
          },
          {
            name: 'external',
            type: 'checkbox',
            label: {
              en: 'External Link',
              it: 'Link esterno',
            },
          },
        ],
      },
    ],
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

  return deepMerge(linkResult, overrides)
}

export default link
