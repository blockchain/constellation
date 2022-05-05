import * as Icons from '@blockchain-com/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Icon } from 'components'
import React, { FC } from 'react'

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
      description: 'The size of the rendered the icon.',
    },
  },
  component: Icon,
  title: 'Components/Icon',
} as ComponentMeta<typeof Icon>

const Default: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

Default.args = {
  label: 'label',
  size: 'large',
}

export default meta

export { Default }
