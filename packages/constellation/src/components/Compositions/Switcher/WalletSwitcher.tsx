import cx from 'classnames'
import React, { forwardRef } from 'react'

import { IconChevronRightV2, PaletteColors, SemanticColors, Text } from '../../Base'
import { Logo } from '../index'
import { WalletComponent as ComponentType, WalletProps } from './Switcher.types'

/**
 * Switchers allow users to take actions, and make choices, with a single tap.
 *
 * When a `ref` prop is provided, it will be forwarded to the root element. Any
 * other properties supplied will be provided to the root element (ie, the `as`
 * prop value). This includes all appropriate HTML attributes or aria tags. This
 * component may have its underlying DOM customized via the 'as' prop.
 */

const Switcher: ComponentType = forwardRef(
  <T extends React.ElementType = 'button'>(
    { as, disabled = false, id, status, ticker, type, ...otherProps }: WalletProps<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    const Component = as || 'button'
    const fallbackType = Component === 'button' && !type ? 'button' : undefined

    const statusColor = {
      error: 'bg-error',
      success: 'bg-success',
      warning: 'bg-warning',
    }

    return (
      <Component
        ref={ref}
        type={type || fallbackType}
        disabled={disabled}
        {...otherProps}
        className='constellation'
      >
        <Text>{id}</Text>
        <div>
          <Text>{ticker}</Text>
          <div className={cx('w-[6px] h-[6px] rounded-full', statusColor[status])} />
        </div>
      </Component>
    )
  },
)

export default Switcher
