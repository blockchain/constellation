import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { IconApple } from '../../../Base'
import { Button as ButtonComponent, ButtonComponentType } from '.'

export default {
  argTypes: {
    as: {
      control: { type: 'select' },
      description: 'Allows for overriding the underlying DOM element ',
      options: ['button', 'div', 'a'],
    },
    disabled: { control: { type: 'boolean' } },
    icon: {
      control: { type: 'boolean' },
      description: 'An optional Icon displayed inline with button text',
    },
    inline: { control: { type: 'boolean' }, defaultValue: false },
    onClick: { action: 'click' },
    size: {
      control: { type: 'radio' },
      options: ['default', 'large', 'small'],
    },
    state: {
      control: { type: 'radio' },
      description: 'An optional visual progress indication of a tiggered button action',
      options: ['initial', 'loading', 'success'],
    },
    text: { control: { type: 'text' }, description: 'Text content of button' },
    type: {
      control: { type: 'select' },
      options: ['button', 'reset', 'submit'],
    },
    variant: {
      control: { type: 'radio' },
      description: 'The stylistic variant to use when rendering.',
      options: ['primary', 'secondary', 'minimal'],
    },
    width: {
      control: { type: 'radio' },
      options: ['auto', 'full'],
    },
  },
  args: {
    as: 'button',
    disabled: false,
    icon: true,
    size: 'large',
    state: 'initial',
    type: 'button',
    variant: 'primary',
    width: 'auto',
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
