import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ColorsComponent } from '.'
import Colors from './Colors'

export default {
  component: Colors,
  title: 'Base/Colors',
} as ComponentMeta<ColorsComponent>

const Template: ComponentStory<ColorsComponent> = () => {
  return <Colors />
}

export const Gallery = Template.bind({})
