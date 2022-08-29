import cx from 'classnames'
import React from 'react'

import { AlertDotComponentType } from '.'

const Dot: AlertDotComponentType = ({ className, variant = 'default' }) => {
  const variantStyles = {
    blue: 'bg-primary',
    default: 'mode-light:bg-pink-500 mode-dark:bg-pink-400',
    green: 'mode-light:bg-new-green-500 mode-dark:bg-new-green-400',
  }

  return (
    <div
      className={cx(
        'constellation w-2 h-2 rounded-full outline-1 outline outline-background',
        variantStyles[variant],
        className,
      )}
    />
  )
}

export default Dot
