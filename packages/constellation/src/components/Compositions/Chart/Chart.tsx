import React, { forwardRef } from 'react'

import { Props } from './Chart.types'

/**
 * The Chart component displays currency data across multiple different timeframes.
 *
 * When a `ref` prop is provided, it will be forwarded to the Chart's body element.
 */

const Chart = forwardRef<HTMLDivElement, Props>(({ children, ...otherProps }, ref) => {
  return (
    <div className='constellation' ref={ref} {...otherProps}>
      {children}
    </div>
  )
})

export default Chart
