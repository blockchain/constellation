import React, { forwardRef } from 'react'

import { Props } from './Chart.types'
import ChartHeader from './ChartHeader'

/**
 * The Chart component displays currency data across multiple different timeframes.
 *
 * When a `ref` prop is provided, it will be forwarded to the Chart's body element.
 */

const Chart = forwardRef<HTMLDivElement, Props>(
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
      <div className='constellation' ref={ref} {...otherProps}>
        <ChartHeader
          {...{
            activeCurrency,
            activeTimeframe,
            changeInCents,
            changeInDecimal,
            currencies,
            currentPriceInCents,
            setActiveCurrency,
            setActiveTimeframe,
          }}
        />
        {/* TODO: Build chart body component */}
        <div className='constellation w-full bg-background-dark p-8'>
          <p>Chart body.</p>
          <p> Active timeframe: {activeTimeframe}</p>
        </div>
      </div>
    )
  },
)

export default Chart
