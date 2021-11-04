import { ComponentStory } from '@storybook/react'
import React from 'react'

import Icon, { iconSize } from '.'
import { IconName } from './types'

export default {
  argTypes: {
    color: {
      control: 'color',
      description: 'color of the icon',
    },
    name: {
      description: 'name of the icon',
      options: Object.values(IconName),
      type: 'select',
    },
    size: {
      description: 'size of the icon',
      options: Object.keys(iconSize),
      type: 'select',
    },
  },
  component: Icon,
  title: 'Components/Icon',
}

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})

Default.args = {
  name: IconName.BLOCKCHAIN_CIRCLE,
}
