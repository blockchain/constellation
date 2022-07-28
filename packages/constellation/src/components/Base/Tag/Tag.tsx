import cx from 'classnames'
import React from 'react'

import { TagComponentType } from '.'

const Tag: TagComponentType = ({ as, content, size, variant }) => {
  const Component = as || 'div'

  const variantStyles = {
    alt: 'bg-transparent border-background-light text-body',
    default: 'bg-background-light border-background-light text-title',
    error:
      'bg-background-red border-background-red text-error mode-dark:bg-error mode-dark:text-dark-900',
    success:
      'bg-background-green border-background-green text-success mode-dark:bg-success mode-dark:text-dark-900',
    warning:
      'bg-background-orange border-background-orange text-warning mode-dark:bg-warning mode-dark:text-dark-900',
  }

  const sizeStyles = {
    default: 'py-0.5 px-[7px] text-xs',
    large: 'px-[10px] py-[4.5px] text-sm',
  }

  return (
    <Component
      className={cx(
        'constellation w-fit rounded font-semibold align-middle border',
        size && sizeStyles[size],
        variant && variantStyles[variant],
      )}
    >
      {content}
    </Component>
  )
}

export default Tag
