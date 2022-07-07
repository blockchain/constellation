import cx from 'classnames'
import React from 'react'

import {
  SpinningLoaderComponent,
  SpinningLoaderSizes,
  SpinningLoaderVariants,
  SpinningLoaderWidths,
} from './SpinningLoader.types'

const variantClasses: Record<SpinningLoaderVariants, string> = {
  default: 'border-t-overlay-light-900 border-overlay-light-200',
  minimal: 'border-t-primary border-blue-100 dark:border-white-200',
}

const sizeClasses: Record<SpinningLoaderSizes, string> = {
  default: 'h-16 w-16',
  full: 'h-full w-full',
  large: 'h-32 w-32',
  small: 'h-6 w-6',
}

const borderWidthClasses: Record<SpinningLoaderWidths, string> = {
  default: 'border-8',
  large: 'border-[12px]',
  small: 'border-4',
}

const SpinningLoader: SpinningLoaderComponent = ({
  borderWidth = 'default',
  size = 'default',
  variant = 'default',
}) => {
  return (
    <div
      className={cx([
        sizeClasses[size],
        variantClasses[variant],
        borderWidthClasses[borderWidth],
        'relative overflow-hidden rounded-[50%] animate-spin-fast',
      ])}
    />
  )
}

export default SpinningLoader
