import type { GlobalConfig } from 'payload/types'

import { advancedTab } from './tabs/Advanced'
import { generalTab } from './tabs/General'
import { linksTab } from './tabs/Links'

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
      tabs: [generalTab, linksTab, advancedTab],
    },
  ],
}
