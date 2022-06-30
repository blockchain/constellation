import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Slider, SliderComponent } from '.'

export default {
  argTypes: {
    value: {
      control: { type: 'number' },
      description: 'Number indicating the value of the slider',
    },
  },
  component: Slider,
  title: 'Components/Slider',
} as ComponentMeta<SliderComponent>

const Template: ComponentStory<SliderComponent> = ({ value: defaultValue = 0, ...args }) => {
  return <Slider min={0} max={100} step={1} />
}

export const Primary = Template.bind({})
