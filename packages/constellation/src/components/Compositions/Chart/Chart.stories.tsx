import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Chart as RenderedChart, ChartComponent } from '.'
import ChartHeader from './ChartHeader'

export default {
  argTypes: {
    orientation: { control: { type: 'radio' } },
    variant: { control: { options: ['subtle', 'medium', 'distinct'], type: 'radio' } },
  },
  args: {
    orientation: 'horizontal',
    variant: 'distinct',
  },
  component: RenderedChart,
  title: 'Compositions/Chart',
} as ComponentMeta<ChartComponent>

const Template: ComponentStory<ChartComponent> = ({ ...args }) => {
  return (
    <div className='constellation w-full h-40'>
      <RenderedChart>
        <ChartHeader />
        <div className='constellation w-full bg-background-dark p-8'>Chart body</div>
      </RenderedChart>
    </div>
  )
}

export const Chart = Template.bind({})
