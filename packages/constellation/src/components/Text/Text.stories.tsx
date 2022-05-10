import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Text, TextComponent } from 'components'
import React from 'react'

export default {
  argTypes: {
    color: {
      defaultValue: 'secondary',
      options: ['error', 'info', 'primary', 'secondary', 'success', 'warning'],
    },
    ellipsis: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    fontSize: {
      control: { type: 'number' },
      defaultValue: 1,
    },
  },
  component: Text,
  title: 'Components/Text',
} as ComponentMeta<TextComponent>

const Template: ComponentStory<TextComponent> = (args) => <Text {...args} data-e2e='w' />

export const Default = Template.bind({})
Default.args = {
  children: 'The quick brown fox jumps over the lazy dog 0123456789',
}

export const Ellipses = Template.bind({})
Ellipses.args = {
  children: 'The quick brown fox jumps over the lazy dog 0123456789',
  ellipsis: true,
}
