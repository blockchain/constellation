import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { Button } from '../Buttons'
import { Tooltip as TooltipComponent, TooltipComponent as TooltipComponentProps } from '.'

export default {
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    avoidCollisions: {
      control: 'boolean',
      description:
        'When true, overrides the side andalign preferences to prevent collisions with boundary edges.',
    },
    delay: {
      control: 'number',
      description:
        'The duration from when the mouse enters a tooltip trigger until the tooltip opens.',
    },
    side: {
      control: 'select',
      description:
        'The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.',
      options: ['top', 'right', 'bottom', 'left'],
    },
    sideOffset: {
      control: 'number',
      description: 'The offset in pixels from the edge of the trigger element',
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
    avoidCollisions: true,
    delay: 700,
    side: 'top',
    sideOffset: 0,
    text: 'This is a cool tooltip!',
  },
  component: TooltipComponent,
  title: 'Primitives/Tooltip',
} as ComponentMeta<TooltipComponentProps>

type StoryComponent = TooltipComponentProps

const Template: StoryComponent = (args) => {
  return <TooltipComponent trigger={<Button text='Hover me!' />} {...args} />
}

export const Tooltip = Template.bind({})
