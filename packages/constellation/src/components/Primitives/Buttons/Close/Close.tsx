import cx from 'classnames'
import React, { forwardRef } from 'react'

import { IconCloseV2, PaletteColors } from '../../../Base'
import { Button, ButtonComponentType, ButtonProps } from '../Button'
import { Component as ComponentType, Props } from './Close.types'

/**
 * Close Buttons extend off of the Button component, and provide a consistent way
 * for users to close, cards, podals, alerts, etc.
 *
 * When a `ref` prop is provided, it will be forwarded to the root element. Any
 * other properties supplied will be provided to the root element (ie, the `as`
 * prop value). This includes all appropriate HTML attributes or aria tags. This
 * component may have its underlying DOM customized via the 'as' prop.
 */

const CloseButton: ComponentType = forwardRef(
  <T extends ButtonComponentType>(
    { size = 'default', className, ...props }: Props<T> & ButtonProps<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    const sizeStyles = {
      default: '!w-6 !h-6',
      large: '!w-8 !h-8',
    }

    const iconSize = {
      default: 12,
      large: 16,
    }

    return (
      <Button
        {...props}
        variant='icon'
        ref={ref}
        size='noPadding'
        className={cx(
          'constellation !bg-background-light mode-dark:!bg-grey-800 rounded-full !p-0 flex justify-center items-center',
          sizeStyles[size],
          className,
        )}
        icon={<IconCloseV2 color={PaletteColors['grey-400']} width={iconSize[size]} />}
      />
    )
  },
)

export default CloseButton
