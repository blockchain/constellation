import { ComponentMeta, ComponentStory } from '@storybook/react'
import { createIconsStorybookArgType } from 'icons/utils/createIconsStorybookArgType'
import React from 'react'

import { colors } from '../../colors'
import Icon from '.'

const meta: ComponentMeta<typeof Icon> = {
  argTypes: {
    children: createIconsStorybookArgType(),
    color: {
      control: {
        type: 'select',
      },
      description: 'The rendering color of the icon.',
      options: Object.keys(colors),
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
}

const Default: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

Default.args = {
  color: 'grey800',
  label: 'label',
  size: 'lg',
}

export default meta

export { Default }
