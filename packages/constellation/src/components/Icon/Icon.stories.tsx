import * as Icons from '@blockchain-com/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Icon, IconComponent } from 'components'
import React, { FC } from 'react'

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

export default {
  argTypes: {
    children: {
      control: {
        type: 'select',
      },
      defaultValue: 'IconActivity',
      mapping: iconsMapped,
      options: iconNames,
    },
    color: {
      control: { type: 'color' },
      description: 'The rendering color of the icon.',
    },
    label: {
      description: 'The label of the icon.',
      type: 'string',
    },
    size: {
      control: { type: 'radio' },
      defaultValue: 'large',
      description: 'The size of the rendered the icon.',
      options: ['small', 'medium', 'large'],
    },
  },
  component: Icon,
  title: 'Components/Icon',
} as ComponentMeta<IconComponent>

export const Default: ComponentStory<IconComponent> = (args) => <Icon {...args} />

Default.args = {
  label: 'label',
  size: 'large',
}
