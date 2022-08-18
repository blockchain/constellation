import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { CloseButton as CloseButtonComponent, CloseButtonComponentType } from '.'

export default {
  argTypes: {
    as: {
      control: { type: 'select' },
      description: 'Allows for overriding the underlying DOM element ',
      options: ['button', 'div', 'a'],
    },
    onClick: { action: 'click' },
    size: {
      control: { type: 'radio' },
      options: ['default', 'large'],
    },
  },
  args: {
    as: 'button',
    size: 'default',
  },
  component: CloseButtonComponent,
  title: 'Primitives/Buttons/Close',
} as ComponentMeta<CloseButtonComponentType>

const Template: ComponentStory<CloseButtonComponentType> = (args) => {
  return <CloseButtonComponent {...args} />
}

export const Close = Template.bind({})
