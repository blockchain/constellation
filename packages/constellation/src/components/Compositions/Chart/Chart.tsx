import cx from 'classnames'
import React, { forwardRef } from 'react'

import { Props } from './Chart.types'

/**
 * The Chart component description
 */

const Chart = forwardRef<HTMLDivElement, Props>(({ children, ...otherProps }, ref) => {
  return (
    <div className={cx('constellation')} ref={ref} {...otherProps}>
      {children}
    </div>
  )
})

export default Chart
