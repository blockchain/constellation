import * as Icons from '@blockchain-com/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'

import { colors } from '../../colors'
import Icon from '.'

const iconNames: string[] = Object.keys(Icons)
const icons: FC[] = Object.values(Icons)

const iconsMapped = iconNames.reduce((mapped, iconName, index) => {
  const IconItem = icons[index]

  if (!IconItem) {
    return mapped
  }

  return {
    [iconName]: <IconItem />,
    ...mapped,
  }
}, {})

const meta = {
  argTypes: {
    children: {
      control: {
        type: 'select',
      },
      defaultValue: 'Activity',
      mapping: iconsMapped,
      options: iconNames,
    },
    color: {
      description: 'The rendering color of the icon.',
      options: Object.keys(colors),
      type: 'select',
    },
    label: {
      description: 'The label of the icon.',
      type: 'string',
    },
    size: {
      control: { type: 'radio' },
      description: 'The size of the rendered the icon.',
    },
  },
  component: Icon,
  title: 'Components/Icon',
} as unknown as ComponentMeta<typeof Icon>

const Default: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

Default.args = {
  color: 'grey800',
  label: 'label',
  size: 'lg',
}

export default meta

export { Default }
