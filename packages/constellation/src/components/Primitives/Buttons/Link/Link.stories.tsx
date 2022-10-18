import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { IconApple } from '../../../Base'
import { Link as LinkComponent, LinkComponentType } from '.'

export default {
  argTypes: {
    as: {
      control: { type: 'select' },
      description: 'Allows for overriding the underlying DOM element ',
      options: ['button', 'div', 'a'],
    },
    disabled: { control: { type: 'boolean' } },
    href: { action: 'click' },
    icon: {
      control: { type: 'boolean' },
      description: 'An optional Icon displayed inline with link text',
    },
    size: {
      control: { type: 'radio' },
      options: ['default', 'large', 'small'],
    },
    state: {
      control: { type: 'radio' },
      description: 'An optional visual progress indication of a tiggered link action',
      options: ['initial', 'loading', 'success'],
    },
    text: { control: { type: 'text' }, description: 'Text content of link' },
  },
  args: {
    disabled: false,
    icon: true,
    size: 'large',
    state: 'initial',
  },
  component: LinkComponent,
  title: 'Primitives/Buttons/Link',
} as ComponentMeta<LinkComponentType>

const Template: ComponentStory<LinkComponentType> = ({ icon, size = 'default', text, ...args }) => {
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
