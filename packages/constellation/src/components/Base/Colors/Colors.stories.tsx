import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Colors, ColorsComponent } from '.'

export default {
  argTypes: {
    value: {
      control: { type: 'number' },
      description: 'Number indicating the value of the slider',
    },
  },
  component: Colors,
  title: 'Base/Colors',
} as ComponentMeta<ColorsComponent>

const Template: ComponentStory<ColorsComponent> = () => {
  return <Colors />
}

export const Primary = Template.bind({})
