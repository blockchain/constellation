import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { Button } from '../../index'
import { Tooltip as TooltipComponent, TooltipComponent as TooltipComponentProps } from '.'

export default {
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    delay: {
      control: 'number',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
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
    alignOffset: 0,
    avoidCollisions: true,
    delay: 700,
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
