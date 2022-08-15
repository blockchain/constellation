import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Tag } from '../../Primitives'
import { Input, InputComponent } from '.'

export default {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the input',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    prefix: {
      control: { type: 'text' },
      description: 'Prefix text',
    },
    state: {
      control: { options: ['default', 'success', 'error', 'warning'], type: 'radio' },
      description: 'State of the input',
    },
  },
  args: {
    disabled: false,
    helperText: 'Helper text',
    label: 'Label',
    placeholder: 'Placeholder',
    prefix: 'Prefix',
    state: 'default',
  },
  component: Input,
  title: 'Compositions/Input',
} as ComponentMeta<InputComponent>

const Template: ComponentStory<InputComponent> = (args) => <Input {...args} />

export const PrimaryInput = Template.bind({})
PrimaryInput.args = {
  id: 'primary',
  type: 'text',
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
  id: 'password',
  type: 'password',
}

export const TagInput = Template.bind({})
TagInput.args = {
  id: 'tag',
  postfix: <Tag content='Success' variant='success' />,
  type: 'text',
}
