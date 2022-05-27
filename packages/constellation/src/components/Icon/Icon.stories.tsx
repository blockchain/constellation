import * as Icons from '@blockchain-com/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Icon, IconComponent } from 'components'
import React, { FC } from 'react'

import { createIconStorybookSelect } from './utils/createIconStorybookSelect'

export default {
  argTypes: {
    children: createIconStorybookSelect({
      defaultValue: 'IconActivity',
    }),
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

const args: ComponentMeta<IconComponent> = {
  argTypes: {
    color: {},
  },
}
export const Default: ComponentStory<IconComponent> = (args) => <Icon {...args} />

Default.args = {
  label: 'label',
  size: 'large',
}
