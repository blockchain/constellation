import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconName } from './types'

import Icon from './index'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      description: 'name of the icon',
      type: 'select',
      options: Object.values(IconName),
      required: true
    },
    height: {
      defaultValue: '24px',
      description: 'string value of the height of the icon',
      type: 'string',
      required: false
    },
    width: {
      defaultValue: '24px',
      description: 'string value of the width of the icon',
      required: false,
      type: 'string'
    },
    color: {
      description: 'color of the icon',
      control: 'color',
      required: false
    }
  }
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  name: IconName.BLOCKCHAIN_CIRCLE
}
