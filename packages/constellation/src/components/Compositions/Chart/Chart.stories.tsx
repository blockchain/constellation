import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC, useState } from 'react'

import { Chart as RenderedChart, ChartComponent } from '.'
import { HeaderProps, Timeframe } from './Chart.types'
import ChartHeader from './ChartHeader'

export default {
  argTypes: {
    'header.activeCurrency': { control: { type: 'text' } },
    'header.changeInCents': { control: { type: 'number' } },
    'header.changeInDecimal': { control: { type: 'number' } },
    'header.currencies': { control: { type: 'object' } },
    'header.currentPriceInCents': { control: { type: 'number' } },
  },
  args: {
    'header.changeInCents': 1234,
    'header.changeInDecimal': 0.34,
    'header.currencies': [
      { label: 'USD', value: 'USD' },
      { label: 'CAD', value: 'CAD' },
    ],
    'header.currentPriceInCents': 123456,
  },
  component: RenderedChart,
  title: 'Compositions/Chart',
} as ComponentMeta<ChartComponent>

const Template: ComponentStory<
  FC<{
    'header.activeCurrency': HeaderProps['activeCurrency']
    'header.changeInCents': HeaderProps['changeInCents']
    'header.changeInDecimal': HeaderProps['changeInDecimal']
    'header.currencies': HeaderProps['currencies']
    'header.currentPriceInCents': HeaderProps['currentPriceInCents']
  }>
> = ({
  'header.changeInCents': changeInCents,
  'header.changeInDecimal': changeInDecimal,
  'header.currencies': currencies,
  'header.currentPriceInCents': currentPriceInCents,
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
      />
      {/* TODO: Build chart body component */}
      <div className='constellation w-full bg-background-dark p-8'>
        <p>Chart body.</p>
        <p> Active timeframe: {timeframe}</p>
      </div>
    </RenderedChart>
  )
}

export const Chart = Template.bind({})
