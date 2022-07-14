import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Colors, ColorsComponent } from '.'

export default {
  component: Colors,
  title: 'Base/Colors',
} as ComponentMeta<ColorsComponent>

const Template: ComponentStory<ColorsComponent> = () => {
  return <Colors />
}

export const Primary = Template.bind({})
