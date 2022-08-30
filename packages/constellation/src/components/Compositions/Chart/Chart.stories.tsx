import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { Chart as RenderedChart, ChartComponent } from '.'
import { Timeframe } from './Chart.types'

export default {
  argTypes: {
    activeCurrency: { control: { type: 'text' } },
    changeInCents: { control: { type: 'number' } },
    changeInDecimal: { control: { type: 'number' } },
    currencies: { control: { type: 'object' } },
    currentPriceInCents: { control: { type: 'number' } },
  },
  args: {
    changeInCents: 1234,
    changeInDecimal: 0.34,
    currencies: [
      { label: 'USD', value: 'USD' },
      { label: 'CAD', value: 'CAD' },
    ],
    currentPriceInCents: 123456,
  },
  component: RenderedChart,
  title: 'Compositions/Chart',
} as ComponentMeta<ChartComponent>

const Template: ComponentStory<ChartComponent> = ({ ...args }) => {
  const [timeframe, setTimeframe] = useState<Timeframe>('day')
  const [activeCurrency, setActiveCurrency] = useState('USD')
  return (
    <RenderedChart
      {...args}
      activeTimeframe={timeframe}
      setActiveTimeframe={setTimeframe}
      activeCurrency={activeCurrency}
      setActiveCurrency={setActiveCurrency}
    />
  )
}

export const Chart = Template.bind({})
