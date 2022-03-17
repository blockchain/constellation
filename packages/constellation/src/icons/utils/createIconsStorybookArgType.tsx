import * as Icons from 'icons'
import React from 'react'

const icons = Object.values(Icons)

export const createIconsStorybookArgType = () => ({
  control: {
    type: 'select',
  },
  defaultValue: 'ActivityIcon',
  mapping: Object.keys(Icons).reduce((result, iconName, index) => {
    const IconSvg = icons[index]

    return {
      ...result,
      [iconName]: <IconSvg />,
    }
  }, {}),
  options: Object.keys(Icons),
})
