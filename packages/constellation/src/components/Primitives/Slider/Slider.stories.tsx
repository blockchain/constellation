import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Slider as RenderedSlider, SliderComponent } from '.'

export default {
  argTypes: {
    value: {
      control: { type: 'number' },
      description: 'Number indicating the value of the slider',
    },
  },
  component: RenderedSlider,
  title: 'Primitives/Slider',
} as ComponentMeta<SliderComponent>

const Template: ComponentStory<SliderComponent> = () => {
  return <RenderedSlider min={0} max={100} step={1} />
}

export const Slider = Template.bind({})
