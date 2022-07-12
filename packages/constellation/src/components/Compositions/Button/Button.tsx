import cx from 'classnames'
import React, { forwardRef } from 'react'

import { IconCheck, SpinningLoader } from '../../Base'
import {
  ButtonState,
  ButtonVariants,
  Component as ComponentType,
  Props,
  Sizes,
} from './Button.types'

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 *
 * When a `ref` prop is provided, it will be forwarded to the root element. Any
 * other properties supplied will be provided to the root element (ie, the `as`
 * prop value). This includes all appropriate HTML attributes or aria tags. This
 * component may have its underlying DOM customized via the 'as' prop.
 */

const variantStyles: Record<ButtonVariants, string> = {
  minimal:
    'bg-background text-primary dark:text-blue-300 border border-grey-100 dark:hover:border-dark-500 dark:hover:bg-dark-800 hover:bg-blue-000 hover:border-blue-400 dark:border-dark-500 active:bg-blue-000 active:border-primary focus:bg-blue-000 focus:border-primary disabled:text-muted disabled:bg-background disabled:border-grey-100',
  primary:
    'text-white-000 bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-900  disabled:bg-blue-300 disabled:text-overlay-light-600',
  secondary:
    'text-white-000 bg-grey-800 hover:bg-grey-700 focus:bg-grey-900 active:bg-grey-900 disabled:bg-grey-500  disabled:text-overlay-light-600',
}

const sizeStyles: Record<Sizes, string> = {
  default: 'px-6 py-3 text-base h-12',
  large: 'px-10 py-4 text-xl h-16',
  small: 'px-3 py-1.5 text-sm h-8',
}

const stateStyles: Record<ButtonState, Record<Sizes, string>> = {
  initial: {
    default: '',
    large: '',
    small: '',
  },
  loading: {
    default: 'px-14 py-3',
    large: 'px-16 py-5',
    small: 'px-8 py-2',
  },
  success: {
    default: 'px-14 py-3',
    large: 'px-16 py-5',
    small: 'px-8 py-2',
  },
}

const Button: ComponentType = forwardRef(
  <T extends React.ElementType = 'button'>(
    {
      as,
      children,
      disabled = false,
      size = 'default',
      state = 'initial',
      type,
      variant = 'primary',
      ...otherProps
    }: Props<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    const Component = as || 'button'
    const fallbackType = Component === 'button' && !type ? 'button' : undefined

    return (
      <Component
        className={cx(
          variantStyles[variant],
          sizeStyles[size],
          stateStyles[state][size],
          'rounded-lg font-semibold box-border',
        )}
        ref={ref}
        type={type || fallbackType}
        disabled={disabled}
        {...otherProps}
      >
        {state === 'initial' && children}
        {state === 'loading' && (
          <SpinningLoader
            size='full'
            borderWidth={size === 'small' ? 'xsmall' : 'small'}
            variant={variant === 'minimal' ? 'color' : 'monotone'}
          />
        )}
        {state === 'success' && <IconCheck />}
      </Component>
    )
  },
)

export default Button
