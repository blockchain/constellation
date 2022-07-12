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
    type: {
      control: { type: 'select' },
      options: ['button', 'reset', 'submit'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'minimal'],
    },
    width: {
      control: { type: 'select' },
      options: ['none', 'flex', 'percent'],
    },
  },
  component: ButtonComponent,
  title: 'Primitives/Buttons',
} as ComponentMeta<Component>

const Template: ComponentStory<Component> = ({ children = 'Large', ...args }) => {
  return <ButtonComponent {...args}>{children}</ButtonComponent>
}

export const Button = Template.bind({})
