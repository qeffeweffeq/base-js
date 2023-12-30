import type { Tab } from 'payload/types'

import link from '../../../fields/link'

export const legalTab: Tab = {
  label: {
    en: 'Legal',
    it: 'Legale',
  },
  fields: [
    {
      type: 'array',
      name: 'legalLinks',
      label: {
        en: 'Legal Links',
        it: 'Link Legali',
      },
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
                    en: 'Terms and Conditions',
                    it: 'Termini e Condizioni',
                  },
                  value: 'terms',
                },
              ],
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
    },
  ],
}
