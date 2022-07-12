import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Button as ButtonComponent, Component } from '.'

export default {
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['button', 'div', 'a'],
    },
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    onClick: { action: 'click' },
    size: {
      control: { type: 'radio' },
      options: ['default', 'large', 'small'],
    },
    state: {
      control: { type: 'radio' },
      options: ['initial', 'loading', 'success'],
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'reset', 'submit'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'minimal'],
    },
  },
  component: ButtonComponent,
  title: 'Primitives/Buttons',
} as ComponentMeta<Component>

const Template: ComponentStory<Component> = ({ children = 'Large', size = 'default', ...args }) => {
  return (
    <ButtonComponent size={size} {...args}>{`${size[0].toUpperCase()}${size.slice(
      1,
    )}`}</ButtonComponent>
  )
}

export const Button = Template.bind({})
