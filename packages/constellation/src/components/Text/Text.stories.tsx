import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Text, TextComponent } from '.'

export default {
  component: Text,
  title: 'Components/Text',
} as ComponentMeta<TextComponent>

const Template: ComponentStory<TextComponent> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'The quick brown fox jumps over the lazy dog 0123456789',
}
