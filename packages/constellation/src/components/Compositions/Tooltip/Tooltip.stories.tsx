import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { Button } from '../../index'
import { Tooltip as TooltipComponent, TooltipComponent as TooltipComponentProps } from '.'

export default {
  argTypes: {
    delay: {
      control: 'number',
    },
    text: {
      control: 'text',
    },
    trigger: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    allowCollision: false,
    delay: 700,
    offset: 0,
    side: 'top',
    text: 'This is a cool tooltip!',
  },
  component: TooltipComponent,
  title: 'Compositions/Tooltip',
} as ComponentMeta<TooltipComponentProps>

type StoryComponent = TooltipComponentProps

const Template: StoryComponent = (args) => {
  return <TooltipComponent trigger={<Button text='Hover me!' />} {...args} />
}

export const Tooltip = Template.bind({})
