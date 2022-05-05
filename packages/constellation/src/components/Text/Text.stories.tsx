import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Text, TextComponent } from 'components'
import React from 'react'

export default {
  component: Text,
  title: 'Components/Text',
} as ComponentMeta<TextComponent>

const Template: ComponentStory<TextComponent> = (args) => <Text {...args} data-e2e='w' />

export const Default = Template.bind({})
Default.args = {
  children: 'The quick brown fox jumps over the lazy dog 0123456789',
}
