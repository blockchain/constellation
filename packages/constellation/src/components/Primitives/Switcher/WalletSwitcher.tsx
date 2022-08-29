import cx from 'classnames'
import React, { forwardRef, useMemo } from 'react'

import { truncateId } from '../../../utils'
import { Text } from '../../Base'
import { WalletComponent as ComponentType, WalletProps } from './Switcher.types'

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

    const truncatedId = useMemo(() => truncateId(id, 11), [id])

    return (
      <Component
        ref={ref}
        type={type || fallbackType}
        disabled={disabled}
        {...otherProps}
        className='constellation flex items-center rounded-lg bg-background-light gap-2 p-[3px] pl-2 cursor-pointer'
      >
        <Text variant='caption1' className='!m-0 text-body'>
          {truncatedId}
        </Text>
        <div className='flex flex-row items-center gap-1 bg-medium px-2 rounded-md'>
          <Text variant='caption1' className='!m-0'>
            {ticker}
          </Text>
          <div className={cx('w-[6px] h-[6px] rounded-full', statusColor[status])} />
        </div>
      </Component>
    )
  },
)

export default Switcher
