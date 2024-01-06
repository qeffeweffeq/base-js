import type { Field, Option, Tab } from 'payload/types'

import link from '../../../fields/link'
import deepMerge from '../../../utilities/deepMerge'

interface LinksArrayParams {
  name: string
  label: Record<string, string> | string
  options: Option[]
  overrides?: Record<string, unknown>
}

function linksArray(params: LinksArrayParams): Field {
  const field: Field = {
    type: 'array',
    name: params.name,
    label: params.label,
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'select',
            label: {
              en: 'Type',
              it: 'Tipo',
            },
            required: true,
            options: params.options,
          },
          link({
            overrides: {
              admin: {
                condition: (_: Partial<any>, siblingData: Partial<any>) => siblingData?.type,
              },
              required: true,
            },
            disableHeading: true,
            appearances: false,
            disableLabel: true,
          }),
        ],
      },
    ],
  }

  return deepMerge(field, params.overrides)
}

export const linksTab: Tab = {
  label: {
    en: 'Links',
    it: 'Links',
  },
  fields: [
    linksArray({
      name: 'legalLinks',
      label: {
        en: 'Legal Links',
        it: 'Link Legali',
      },
      options: [
        {
          label: {
            en: 'Privacy Policy',
            it: 'Privacy Policy',
          },
          value: 'privacy',
        },
        {
          label: {
            en: 'Cookie Policy',
            it: 'Cookie Policy',
          },
          value: 'cookie',
        },
        {
          label: {
            en: 'Terms & Conditions',
            it: 'Termini & Condizioni',
          },
          value: 'terms',
        },
      ],
    }),
    linksArray({
      name: 'socialLinks',
      label: {
        en: 'Social Links',
        it: 'Link Social',
      },
      options: [
        {
          label: 'X / Twitter',
          value: 'x',
        },
        {
          label: 'Instagram',
          value: 'instagram',
        },
        {
          label: 'Facebook',
          value: 'facebook',
        },
        {
          label: 'YouTube',
          value: 'youtube',
        },
        {
          label: 'Vimeo',
          value: 'vimeo',
        },
        {
          label: 'TikTok',
          value: 'tiktok',
        },
        {
          label: 'Pinterest',
          value: 'pinterest',
        },
      ],
      overrides: {
        admin: {
          className: 'divider-top',
        },
      },
    }),
  ],
}
