import cx from 'classnames'
import React, { forwardRef } from 'react'

import { centsToDollarString, decimalToPercentString } from '../../../utils'
import { IconArrowDown, IconArrowUp, SemanticColors, Text } from '../../Base'
import { Dropdown, Tabs } from '../../Primitives'
import { HeaderProps, Timeframe } from './Chart.types'

/**
 * The Chart Header component description
 */

const timeframeLabels: Record<Timeframe, string> = {
  all: 'All',
  day: 'Past day',
  live: 'Past hour',
  month: 'Past month',
  week: 'Past week',
  year: 'Past year',
}

const PercentageRow = ({
  activeTimeframe,
  changeInCents,
  changeInDecimal,
}: {
  activeTimeframe: Timeframe
  changeInCents: number
  changeInDecimal: number
}) => {
  const trendColor = changeInDecimal < 0 ? SemanticColors.error : SemanticColors.success
  return (
    <div className='constellation flex items-center gap-2'>
      {changeInDecimal < 0 ? (
        <IconArrowDown color={trendColor} />
      ) : (
        <IconArrowUp color={trendColor} />
      )}
      <Text color={trendColor}>
        {centsToDollarString(changeInCents, 2)} ({decimalToPercentString(changeInDecimal)})
      </Text>
      <div className='constellation w-24'>
        <Text color={SemanticColors.body}>{timeframeLabels[activeTimeframe]}</Text>
      </div>
    </div>
  )
}

const PriceInfo = ({
  activeTimeframe,
  changeInCents,
  changeInDecimal,
  currentPriceInCents,
}: {
  activeTimeframe: Timeframe
  changeInCents: number
  changeInDecimal: number
  currentPriceInCents: number
}) => (
  <div className='constellation flex flex-col'>
    <Text variant='caption1'>Current Price</Text>
    <Text color={SemanticColors.title} variant='display' className='mt-0 mb-0'>
      {centsToDollarString(currentPriceInCents, 2)}
    </Text>
    <PercentageRow {...{ activeTimeframe, changeInCents, changeInDecimal }} />
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
      ...otherProps
    },
    ref,
  ) => {
    return (
      <header
        className={cx(
          'constellation flex flex-col lg:flex-row lg:justify-between lg:items-center py-10 gap-4',
        )}
        ref={ref}
        {...otherProps}
      >
        <PriceInfo {...{ activeTimeframe, changeInCents, changeInDecimal, currentPriceInCents }} />
        <Tabs
          variant='default'
          size='small'
          tabs={[
            {
              key: 'live',
              titleContent: (
                <span className='constellation inline-flex items-center h-full'>
                  <Text color={SemanticColors.success} variant='title1' className='mt-0 mb-0 pb-1'>
                    •
                  </Text>
                  <span> Live</span>
                </span>
              ),
            },
            { key: 'day', titleContent: '1D' },
            { key: 'week', titleContent: '1W' },
            { key: 'month', titleContent: '1M' },
            { key: 'year', titleContent: '1Y' },
            { key: 'all', titleContent: 'All' },
          ]}
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
