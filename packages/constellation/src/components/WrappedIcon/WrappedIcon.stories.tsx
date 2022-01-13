import { ComponentStory } from '@storybook/react'
import React from 'react'

import { colors } from '../../colors'
import { iconSizes } from '../Icon'
import { IconName } from '../Icon/types'
import Component from '.'

export default {
  argTypes: {
    bgColor: {
      description: 'background color of the icon',
      options: Object.keys(colors),
      type: 'select',
    },
    color: {
      description: 'color of the icon',
      options: Object.keys(colors),
      type: 'select',
    },
    name: {
      description: 'name of the icon',
      options: Object.values(IconName),
      type: 'select',
    },
    shape: {
      description: 'name of the icon',
      options: ['circle', 'square'],
      type: 'select',
    },
    size: {
      description: 'size of the icon',
      options: Object.keys(iconSizes),
      type: 'select',
    },
  },
  component: Component,
  title: 'Components/WrappedIcon',
}

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />

export const WrappedIcon = Template.bind({})

WrappedIcon.args = {
  color: 'white1',
  name: IconName.BLOCKCHAIN,
  size: 'md',
}
