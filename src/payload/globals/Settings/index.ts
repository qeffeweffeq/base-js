import type { GlobalConfig } from 'payload/types'

import { advancedTab } from './tabs/Advanced'
import { generalTab } from './tabs/General'
import { legalTab } from './tabs/Legal'

export const Settings: GlobalConfig = {
  slug: 'settings',
  typescript: {
    interface: 'Settings',
  },
  graphQL: {
    name: 'Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [generalTab, legalTab, advancedTab],
    },
  ],
}
