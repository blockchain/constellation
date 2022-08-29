import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { AlertDot, AlertDotComponentType } from '.'

export default {
  argTypes: {},
  args: {
    variant: 'default',
  },
  component: AlertDot,
  title: 'Compositions/Alert/Dot',
} as ComponentMeta<AlertDotComponentType>

const Template: ComponentStory<AlertDotComponentType> = ({ ...args }) => {
  return <AlertDot {...args} />
}

export const Dot = Template.bind({})
