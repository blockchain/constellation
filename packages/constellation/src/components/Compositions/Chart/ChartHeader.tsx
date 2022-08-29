import cx from 'classnames'
import React, { forwardRef } from 'react'

import { IconArrowDown, IconArrowUp, SemanticColors, Text } from '../../Base'
import { Dropdown, Tabs } from '../../Primitives'
import { HeaderProps } from './Chart.types'

/**
 * The Chart Header component description
 */

const PercentageRow = ({
  amountInCents,
  decimalChange,
  timeframeLabel,
  trend,
}: {
  amountInCents: number
  decimalChange: number
  timeframeLabel: string
  trend: 'up' | 'down'
}) => {
  const trendColor = trend === 'up' ? SemanticColors.success : SemanticColors.error
  return (
    <div className='constellation flex items-center gap-2'>
      {trend === 'up' ? <IconArrowUp color={trendColor} /> : <IconArrowDown color={trendColor} />}
      <Text color={trendColor}>
        {amountInCents} ({decimalChange})
      </Text>
      <Text color={SemanticColors.body}>{timeframeLabel}</Text>
    </div>
  )
}

const PriceInfo = () => (
  <div className='constellation flex flex-col'>
    <Text variant='caption1'>Current Price</Text>
    <Text variant='display' className='mt-0 mb-0'>
      1234
    </Text>
    <PercentageRow
      amountInCents={12345}
      decimalChange={0.25}
      trend='up'
      timeframeLabel='Past hour'
    />
  </div>
)

const ChartHeader = forwardRef<HTMLDivElement, HeaderProps>(({ ...otherProps }, ref) => {
  return (
    <header className={cx('constellation flex justify-between')} ref={ref} {...otherProps}>
      <PriceInfo />
      <Tabs
        size='small'
        tabs={[
          { key: 'Live', titleContent: 'Live' },
          { key: '1D', titleContent: '1D' },
          { key: '1W', titleContent: '1W' },
          { key: '1M', titleContent: '1M' },
          { key: '1Y', titleContent: '1Y' },
          { key: 'All', titleContent: 'All' },
        ]}
        defaultActiveTab='1D'
      />
      <div className='constellation h-fit'>
        <Dropdown
          setValue={() => false}
          items={[{ label: 'USD', value: 'USD' }]}
          currentValue='USD'
        />
      </div>
    </header>
  )
})

export default ChartHeader
