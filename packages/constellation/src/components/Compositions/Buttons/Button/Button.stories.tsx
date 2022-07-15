import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { IconApple } from '../../../Base'
import { Button as ButtonComponent, ButtonComponentType } from '.'

export default {
  argTypes: {
    as: {
      control: { type: 'select' },
      defaultValue: 'button',
      description: 'Allows for overriding the underlying DOM element ',
      options: ['button', 'div', 'a'],
    },
    disabled: { control: { type: 'boolean' }, defaultValue: false },
    icon: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'An optional Icon displayed inline with button text',
    },
    onClick: { action: 'click' },
    size: {
      control: { type: 'radio' },
      defaultValue: 'large',
      options: ['default', 'large', 'small'],
    },
    state: {
      control: { type: 'radio' },
      defaultValue: 'initial',
      description: 'An optional visual progress indication of a tiggered button action',
      options: ['initial', 'loading', 'success'],
    },
    text: { control: { type: 'text' }, description: 'Text content of button' },
    type: {
      control: { type: 'select' },
      defaultValue: 'button',
      options: ['button', 'reset', 'submit'],
    },
    variant: {
      control: { type: 'radio' },
      defaultValue: 'primary',
      description: 'The stylistic variant to use when rendering.',
      options: ['primary', 'secondary', 'minimal'],
    },
    width: {
      control: { type: 'radio' },
      defaultValue: 'auto',
      options: ['auto', 'full'],
    },
  },
  component: ButtonComponent,
  title: 'Primitives/Buttons/Button',
} as ComponentMeta<ButtonComponentType>

const Template: ComponentStory<ButtonComponentType> = ({
  icon,
  size = 'default',
  text,
  ...args
}) => {
  return (
    <ButtonComponent
      {...args}
      size={size}
      icon={icon && <IconApple />}
      text={text || `${size[0].toUpperCase()}${size.slice(1)}`}
    />
  )
}

export const Button = Template.bind({})
