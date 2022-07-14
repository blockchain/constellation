import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { IconActivity } from '../../Base'
import { Button as ButtonComponent, Component } from '.'

export default {
  argTypes: {
    as: {
      control: { type: 'select' },
      defaultValue: 'button',
      options: ['button', 'div', 'a'],
    },
    disabled: { control: { type: 'boolean' }, defaultValue: false },
    onClick: { action: 'click' },
    size: {
      control: { type: 'radio' },
      defaultValue: 'large',
      options: ['default', 'large', 'small'],
    },
    state: {
      control: { type: 'radio' },
      defaultValue: 'initial',
      options: ['initial', 'loading', 'success'],
    },
    text: { control: { type: 'text' } },
    type: {
      control: { type: 'select' },
      defaultValue: 'button',
      options: ['button', 'reset', 'submit'],
    },
    variant: {
      control: { type: 'radio' },
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'minimal'],
    },
    width: {
      control: { type: 'radio' },
      defaultValue: 'auto',
      options: ['auto', 'full'],
    },
  },
  component: ButtonComponent,
  title: 'Primitives/Buttons',
} as ComponentMeta<Component>

const Template: ComponentStory<Component> = ({ size = 'default', ...args }) => {
  return (
    <ButtonComponent
      {...args}
      size={size}
      icon={<IconActivity />}
      text={`${size[0].toUpperCase()}${size.slice(1)}`}
    />
  )
}

export const Button = Template.bind({})
