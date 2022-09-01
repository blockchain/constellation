import { ComponentMeta, ComponentStory } from '@storybook/react'
import appleStock from '@visx/mock-data/lib/mocks/appleStock'
import React, { FC, useState } from 'react'

import Dot from '../Alerts/Dot/Dot'
import { Chart as RenderedChart } from '.'
import { HeaderProps, Timeframe } from './Chart.types'
import ChartBody from './ChartBody'
import ChartHeader from './ChartHeader'
import { getTrend } from './utils'

type ComposedChartComponent = FC<{
  'header.activeCurrency': HeaderProps['activeCurrency']
  'header.changeInCents': HeaderProps['changeInCents']
  'header.changeInDecimal': HeaderProps['changeInDecimal']
  'header.currencies': HeaderProps['currencies']
  'header.currentPriceInCents': HeaderProps['currentPriceInCents']
  'header.timeframeTabs': HeaderProps['timeframeTabs']
}>

export default {
  argTypes: {
    'header.activeCurrency': { control: { type: 'text' } },
    'header.changeInCents': { control: { type: 'number' } },
    'header.changeInDecimal': { control: { type: 'number' } },
    'header.currencies': { control: { type: 'object' } },
    'header.currentPriceInCents': { control: { type: 'number' } },
  },
  args: {
    'header.activeCurrency': 'USD',
    'header.changeInCents': 1234,
    'header.changeInDecimal': 0.34,
    'header.currencies': [
      { label: 'USD', value: 'USD' },
      { label: 'CAD', value: 'CAD' },
    ],
    'header.currentPriceInCents': 123456,
    'header.timeframeTabs': [
      {
        key: 'live',
        titleContent: (
          <span className='constellation inline-flex items-center gap-1 h-full'>
            <Dot variant='green' />
            <span>Live</span>
          </span>
        ),
      },
      { key: 'day', titleContent: '1D' },
      { key: 'week', titleContent: '1W' },
      { key: 'month', titleContent: '1M' },
      { key: 'year', titleContent: '1Y' },
      { key: 'all', titleContent: 'All' },
    ],
  },
  component: RenderedChart,
  title: 'Compositions/Chart',
} as ComponentMeta<ComposedChartComponent>

const timeframeLabels: Record<Timeframe, React.ReactNode> = {
  all: 'All',
  day: 'Past day',
  live: 'Past hour',
  month: 'Past month',
  week: 'Past week',
  year: 'Past year',
}

const Template: ComponentStory<ComposedChartComponent> = ({
  'header.changeInCents': changeInCents,
  'header.changeInDecimal': changeInDecimal,
  'header.currencies': currencies,
  'header.currentPriceInCents': currentPriceInCents,
  'header.timeframeTabs': timeframeTabs,
}) => {
  const [timeframe, setTimeframe] = useState<Timeframe>('day')
  const [activeCurrency, setActiveCurrency] = useState('USD')
  return (
    <RenderedChart>
      <ChartHeader
        activeTimeframe={timeframe}
        setActiveTimeframe={setTimeframe}
        activeCurrency={activeCurrency}
        setActiveCurrency={setActiveCurrency}
        changeInCents={changeInCents}
        changeInDecimal={changeInDecimal}
        currencies={currencies}
        currentPriceInCents={currentPriceInCents}
        timeframeTabs={timeframeTabs}
        timeframeLabel={timeframeLabels[timeframe]}
      />
      <ChartBody
        chartData={appleStock.slice(500, 750)}
        axisTimescale={timeframe === 'live' ? 'hour' : 'date'}
        trend={getTrend(changeInDecimal)}
      />
    </RenderedChart>
  )
}

export const Chart = Template.bind({})
