import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Divider as RenderedDivider, DividerComponent } from '.'

export default {
  argTypes: {
    orientation: { control: { type: 'radio' } },
    variant: { control: { options: ['subtle', 'medium', 'distinct'], type: 'radio' } },
  },
  args: {
    orientation: 'horizontal',
    variant: 'distinct',
  },
  component: RenderedDivider,
  title: 'Primitives/Divider',
} as ComponentMeta<DividerComponent>

const Template: ComponentStory<DividerComponent> = ({ ...args }) => {
  return (
    <div className='constellation w-full h-40'>
      <RenderedDivider {...args} />
    </div>
  )
}

export const Divider = Template.bind({})
