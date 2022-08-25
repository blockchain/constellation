import cx from 'classnames'
import React, { forwardRef } from 'react'

import { centsToDollarString } from '../../../../utils'
import { SemanticColors, Text } from '../../../Base'
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
    { as, balanceTotalCents = 0, subtitle, title, ...otherProps }: Props<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    const Component = as || 'header'

    return (
      <Component
        className={cx(
          'constellation flex justify-between items-center p-4 md:p-8 w-full text-title bg-background',
        )}
        ref={ref}
        {...otherProps}
      >
        <div className={cx('constellation flex flex-col')}>
          <Text variant='micro' color={SemanticColors.title}>
            Your Total |TICKER|
          </Text>
          <Text variant='paragraph1' className='mt-0 mb-0' color={SemanticColors.title}>
            {centsToDollarString(balanceTotalCents)}
          </Text>
          <Text variant='micro' color={SemanticColors.overlay}>
            0.1393819 BTC
          </Text>
        </div>
        <div>
          <span aria-label='star' role='img'>
            ⭐️
          </span>
        </div>
      </Component>
    )
  },
)

export default BalanceHeader
