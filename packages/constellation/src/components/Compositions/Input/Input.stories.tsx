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
      description: 'Error state of the input',
    },
  },
  component: Input,
  title: 'Compositions/Input',
} as ComponentMeta<InputComponent>

const PrimaryComponent: ComponentStory<InputComponent> = ({
  disabled,
  helperText,
  label,
  placeholder,
  prefix,
  state,
}) => {
  return (
    <Input
      id='test'
      placeholder={placeholder}
      prefix={prefix}
      state={state}
      disabled={disabled}
      label={label}
      helperText={helperText}
    />
  )
}

const PasswordComponent: ComponentStory<InputComponent> = ({
  disabled,
  helperText,
  label,
  placeholder,
  state,
}) => {
  return (
    <Input
      id='password'
      placeholder={placeholder}
      state={state}
      disabled={disabled}
      label={label}
      helperText={helperText}
      password
    />
  )
}

export const Primary = PrimaryComponent.bind({})
export const Password = PasswordComponent.bind({})
