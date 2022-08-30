import cx from 'classnames'
import React, { forwardRef } from 'react'

import { Props } from './Chart.types'
import ChartHeader from './ChartHeader'

/**
 * The Chart component description
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
      <div className={cx('constellation')} ref={ref} {...otherProps}>
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
