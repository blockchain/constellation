import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { IconName } from './types'

import Icon from './index'

export default {
  argTypes: {
    color: {
      control: 'color',
      description: 'color of the icon',
      required: false
    },
    height: {
      defaultValue: '24px',
      description: 'string value of the height of the icon',
      required: false,
      type: 'string'
    },
    name: {
      description: 'name of the icon',
      options: Object.values(IconName),
      required: true,
      type: 'select'
    },
    width: {
      defaultValue: '24px',
      description: 'string value of the width of the icon',
      required: false,
      type: 'string'
    }
  },
  component: Icon,
  title: 'Components/Icon'
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  name: IconName.BLOCKCHAIN_CIRCLE
}
