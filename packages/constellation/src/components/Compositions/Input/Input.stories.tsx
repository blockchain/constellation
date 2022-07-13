import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Input, InputComponent } from '.'

export default {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Disable the input',
    },
    helperText: {
      control: { type: 'text' },
      defaultValue: 'Helper text',
      description: 'Helper text',
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Label',
      description: 'Label text',
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: 'Placeholder',
      description: 'Placeholder text',
    },
    prefix: {
      control: { type: 'text' },
      defaultValue: 'Prefix',
      description: 'Prefix text',
    },
    state: {
      control: { options: ['default', 'success', 'error'], type: 'radio' },
      defaultValue: 'default',
      description: 'State of the input',
    },
  },
  component: Input,
  title: 'Compositions/Input',
} as ComponentMeta<InputComponent>

const Template: ComponentStory<InputComponent> = (args) => <Input {...args} />

export const PrimaryComponent = Template.bind({})
PrimaryComponent.args = {
  id: 'test',
  type: 'text',
}

export const PasswordComponent = Template.bind({})
PasswordComponent.args = {
  id: 'password',
  type: 'password',
}
