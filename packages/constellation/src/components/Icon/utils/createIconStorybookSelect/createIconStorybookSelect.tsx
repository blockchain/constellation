import * as Icons from '@blockchain-com/icons'
import React, { FC } from 'react'

import { CreateIconStorybookSelectUtility } from './createIconStorybookSelect.types'

export const createIconStorybookSelect: CreateIconStorybookSelectUtility = (props = {}) => {
  const iconNames: string[] = Object.keys(Icons)
  const icons: FC[] = Object.values(Icons)

  const iconsMapped = iconNames.reduce((mapped, iconName, index) => {
    const IconItem = icons[index]

    if (!IconItem) {
      return mapped
    }

    return {
      ...mapped,
      [iconName]: <IconItem />,
    }
  }, {})

  return {
    ...props,
    control: {
      type: 'select',
    },
    mapping: iconsMapped,

    options: iconNames,
  }
}
