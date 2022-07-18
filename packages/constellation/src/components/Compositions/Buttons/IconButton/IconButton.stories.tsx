import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import * as Icons from '../../../Base'
import { IconButton as IconButtonComponent, IconButtonComponentType } from '.'

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
      control: { type: 'select' },
      defaultValue: 'IconApple',
      options: Object.keys(Icons),
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
  },
  component: IconButtonComponent,
  title: 'Primitives/Buttons/IconButton',
} as ComponentMeta<IconButtonComponentType>

const Template: ComponentStory<IconButtonComponentType> = ({ icon, size = 'default', ...args }) => {
  const StoryIcon = Icons[icon as keyof typeof Icons] as React.FC

  return <IconButtonComponent icon={<StoryIcon />} {...args} size={size} />
}

export const IconButton = Template.bind({})
