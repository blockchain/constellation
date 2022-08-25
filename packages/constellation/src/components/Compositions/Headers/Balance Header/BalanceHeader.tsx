import cx from 'classnames'
import React, { forwardRef } from 'react'

import { Component as ComponentType, Props } from './BalanceHeader.types'

/**
 * BalanceHeaders description
 *
 * When a `ref` prop is provided, it will be forwarded to the root element. Any
 * other properties supplied will be provided to the root element (ie, the `as`
 * prop value). This includes all appropriate HTML attributes or aria tags. This
 * component may have its underlying DOM customized via the 'as' prop.
 */

const BalanceHeader: ComponentType = forwardRef(
  <T extends React.ElementType = 'header'>(
    { as, children, ...otherProps }: Props<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    const Component = as || 'header'

    return (
      <Component className={cx('constellation')} ref={ref} {...otherProps}>
        {children}
      </Component>
    )
  },
)

export default BalanceHeader
