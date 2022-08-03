import cx from 'classnames'
import React, { forwardRef } from 'react'

import { IconCheck, SpinningLoader } from '../../../Base'
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
  alert:
    'text-white-000 rounded-full bg-grey-900 active:bg-grey-900 focus:bg-grey-900 hover:bg-grey-700 disabled:bg-grey-500 ',
  icon: 'bg-transparent hover:bg-transparent focus:bg-transparent disabled:bg-transparent active:bg-transparent text-primary hover:text-blue-700 mode-dark:hover:text-blue-300 active:text-blue-900 mode-dark:active:text-blue-200 focus:text-blue-800 mode-dark:focus:text-blue-200 disabled:text-blue-200 mode-dark:disabled:text-blue-500',
  minimal:
    'rounded-lg bg-white-000 mode-dark:bg-dark-900 text-blue-600 mode-dark:text-blue-300 border border-grey-100 active:bg-blue-000 active:border-primary focus:bg-blue-000 focus:border-primary disabled:text-muted disabled:bg-background disabled:border-grey-100 hover:bg-blue-000 hover:border-blue-400 mode-dark:hover:border-dark-400 mode-dark:hover:bg-dark-800 mode-dark:border-dark-500 mode-dark:active:bg-dark-700 mode-dark:active:border-blue-400 mode-dark:focus:bg-dark-700 mode-dark:focus:border-blue-400 mode-dark:disabled:text-grey-600 mode-dark:disabled:bg-background mode-dark:disabled:border-grey-700',
  primary:
    'rounded-lg text-white-000 bg-blue-600 border border-transparent mode-dark:border-transparent hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-900 disabled:bg-blue-300 disabled:text-overlay-light-600',
  secondary:
    'rounded-lg text-white-000 bg-grey-800 border border-transparent mode-dark:border-transparent hover:bg-grey-700 focus:bg-grey-900 active:bg-grey-900 disabled:bg-grey-500 disabled:text-overlay-light-600',
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
      className,
      disabled = false,
      icon,
      inline = false,
      loaderVariant,
      size = 'default',
      state = 'initial',
      text,
      type,
      variant = 'primary',
      width = 'auto',
      ...otherProps
    }: Props<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    const Component = as || 'button'
    const fallbackType = Component === 'button' && !type ? 'button' : undefined

    return (
      <Component
        className={cx(
          className,
          variantStyles[variant],
          sizeStyles[size],
          stateStyles[state][size],
          {
            'constellation font-semibold cursor-pointer disabled:cursor-not-allowed transition-all items-center justify-center gap-2':
              !className,
            flex: !inline,
            'inline-flex': inline,
            'w-fit': width === 'auto',
            'w-full': width === 'full',
          },
        )}
        ref={ref}
        type={type || fallbackType}
        disabled={disabled}
        {...otherProps}
      >
        {state === 'initial' && (
          <>
            {icon && icon}
            {text}
          </>
        )}
        {state === 'loading' && (
          <SpinningLoader
            size='full'
            borderWidth={size === 'small' ? 'xsmall' : 'small'}
            variant={loaderVariant || variant === 'minimal' ? 'color' : 'monotone'}
          />
        )}
        {state === 'success' && <IconCheck />}
      </Component>
    )
  },
)

export default Button
