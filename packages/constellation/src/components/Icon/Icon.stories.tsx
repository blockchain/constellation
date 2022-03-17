import { ComponentMeta, ComponentStory } from '@storybook/react'
import { createIconsStorybookArgType } from 'icons/utils/createIconsStorybookArgType'
import React from 'react'

import { colors } from '../../colors'
import Icon from '.'

const meta = {
  argTypes: {
    children: createIconsStorybookArgType(),
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
  name: 'blockchainCircle',
  size: 'lg',
}

export default meta

export { Default }
