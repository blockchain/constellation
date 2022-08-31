import React, { forwardRef } from 'react'

import { centsToDollarString, decimalToPercentString } from '../../../utils'
import { IconArrowDown, IconArrowRight, IconArrowUp, SemanticColors, Text } from '../../Base'
import { Dropdown, Tabs } from '../../Primitives'
import { HeaderProps, Timeframe, Trend } from './Chart.types'
import { getTrend } from './utils'

/**
 * The Chart Header component description
 */

const trendColors: Record<Trend, SemanticColors> = {
  down: SemanticColors.pink,
  neutral: SemanticColors.primary,
  up: SemanticColors.success,
}

const PercentageRow = ({
  changeInCents,
  changeInDecimal,
  timeframeLabel,
}: {
  changeInCents: number
  changeInDecimal: number
  timeframeLabel: React.ReactNode
}) => {
  const trend = getTrend(changeInDecimal)
  const trendColor = trendColors[trend]
  return (
    <div className='constellation flex items-center gap-2'>
      {trend === 'down' && <IconArrowDown color={trendColor} />}
      {trend === 'up' && <IconArrowUp color={trendColor} />}
      {trend === 'neutral' && <IconArrowRight color={trendColor} />}

      <Text color={trendColor}>
        {centsToDollarString(changeInCents, 2)} ({decimalToPercentString(changeInDecimal)})
      </Text>
      <div className='constellation w-24'>
        <Text color={SemanticColors.body}>{timeframeLabel}</Text>
      </div>
    </div>
  )
}

const PriceInfo = ({
  activeTimeframe,
  changeInCents,
  changeInDecimal,
  currentPriceInCents,
  timeframeLabel,
}: {
  activeTimeframe: Timeframe
  changeInCents: number
  changeInDecimal: number
  currentPriceInCents: number
  timeframeLabel: React.ReactNode
}) => (
  <div className='constellation flex flex-col'>
    <Text variant='caption1'>Current Price</Text>
    <Text color={SemanticColors.title} variant='display' className='mt-0 mb-0'>
      {centsToDollarString(currentPriceInCents, 2)}
    </Text>
    <PercentageRow {...{ activeTimeframe, changeInCents, changeInDecimal, timeframeLabel }} />
  </div>
)

const ChartHeader = forwardRef<HTMLDivElement, HeaderProps>(
  (
    {
      activeCurrency,
      activeTimeframe,
      changeInCents,
      changeInDecimal,
      currencies,
      currentPriceInCents,
      setActiveCurrency,
      setActiveTimeframe,
      timeframeLabel,
      timeframeTabs,
      ...otherProps
    },
    ref,
  ) => {
    return (
      <header
        className='constellation flex flex-col lg:flex-row lg:justify-between lg:items-center py-10 gap-4'
        ref={ref}
        {...otherProps}
      >
        <PriceInfo
          {...{
            activeTimeframe,
            changeInCents,
            changeInDecimal,
            currentPriceInCents,
            timeframeLabel,
          }}
        />
        <Tabs
          variant='default'
          size='small'
          tabs={timeframeTabs}
          defaultActiveTab={activeTimeframe}
          onTabChange={(value) => setActiveTimeframe(value as Timeframe)}
        />
        <div className='constellation h-fit'>
          <Dropdown setValue={setActiveCurrency} items={currencies} currentValue={activeCurrency} />
        </div>
      </header>
    )
  },
)

export default ChartHeader
