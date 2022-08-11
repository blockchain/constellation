import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { Button } from '../../index'
import { Tooltip as TooltipComponent, TooltipComponent as TooltipComponentProps } from '.'

export default {
  argTypes: {
    text: {
      control: 'text',
    },
  },
  args: {
    text: 'This is a cool tooltip!',
  },
  component: TooltipComponent,
  title: 'Compositions/Tooltip',
} as ComponentMeta<TooltipComponentProps>

type StoryComponent = TooltipComponentProps

const Template: StoryComponent = ({ text }) => {
  return (
    <TooltipComponent text={text}>
      <Button text='Hover me!' />
    </TooltipComponent>
  )
}

export const Tooltip = Template.bind({})
