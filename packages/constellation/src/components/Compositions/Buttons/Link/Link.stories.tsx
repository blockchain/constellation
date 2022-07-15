import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { IconApple } from '../../../Base'
import { Component, Link as LinkComponent } from '.'

export default {
  argTypes: {
    as: {
      control: { type: 'select' },
      defaultValue: 'a',
      description: 'Allows for overriding the underlying DOM element ',
      options: ['button', 'div', 'a'],
    },
    disabled: { control: { type: 'boolean' }, defaultValue: false },
    href: { action: 'click' },
    icon: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'An optional Icon displayed inline with link text',
    },
    size: {
      control: { type: 'radio' },
      defaultValue: 'large',
      options: ['default', 'large', 'small'],
    },
    state: {
      control: { type: 'radio' },
      defaultValue: 'initial',
      description: 'An optional visual progress indication of a tiggered link action',
      options: ['initial', 'loading', 'success'],
    },
    text: { control: { type: 'text' }, description: 'Text content of link' },
  },
  component: LinkComponent,
  title: 'Primitives/Buttons/Link',
} as ComponentMeta<Component>

const Template: ComponentStory<Component> = ({ icon, size = 'default', text, ...args }) => {
  return (
    <LinkComponent
      {...args}
      size={size}
      icon={icon && <IconApple />}
      text={text || `${size[0].toUpperCase()}${size.slice(1)}`}
    />
  )
}

export const Link = Template.bind({})
