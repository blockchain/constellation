import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { AlertButton as AlertButtonComponent, AlertButtonComponentType } from '.'

export default {
  argTypes: {
    as: {
      control: { type: 'select' },
      description: 'Allows for overriding the underlying DOM element ',
      options: ['button', 'div', 'a'],
    },
    disabled: { control: { type: 'boolean' } },
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
  },
  args: {
    as: 'button',
    disabled: false,
    size: 'large',
    state: 'initial',
    type: 'button',
  },
  component: AlertButtonComponent,
  title: 'Primitives/Buttons/Alert',
} as ComponentMeta<AlertButtonComponentType>

const Template: ComponentStory<AlertButtonComponentType> = ({
  size = 'default',
  text,
  ...args
}) => {
  return (
    <AlertButtonComponent
      {...args}
      size={size}
      text={text || `${size[0].toUpperCase()}${size.slice(1)}`}
    />
  )
}

export const Alert = Template.bind({})
