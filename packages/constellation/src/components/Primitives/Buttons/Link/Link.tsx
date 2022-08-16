import cx from 'classnames'
import React, { forwardRef } from 'react'

import { IconCheck } from '../../../Base'
import { SpinningLoader } from '../..'
import { Component as ComponentType, LinkState, Props, Sizes } from './Link.types'

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 *
 * When a `ref` prop is provided, it will be forwarded to the root element. Any
 * other properties supplied will be provided to the root element (ie, the `as`
 * prop value). This includes all appropriate HTML attributes or aria tags. This
 * component may have its underlying DOM customized via the 'as' prop.
 */
const sizeStyles: Record<Sizes, string> = {
  default: 'px-6 py-3 text-base h-12',
  large: 'px-10 py-4 text-xl h-16',
  small: 'px-3 py-1.5 text-sm h-8',
}

const stateStyles: Record<LinkState, Record<Sizes, string>> = {
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

const Link: ComponentType = forwardRef(
  <T extends React.ElementType = 'link'>(
    {
      as,
      disabled = false,
      icon,
      size = 'default',
      state = 'initial',
      text,
      ...otherProps
    }: Props<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    const Component = as || 'link'

    return (
      <Component
        className={cx(
          'constellation w-fit text-primary hover:underline hover:underline-offset-[3px] hover:text-blue-700 focus:text-blue-700 font-semibold cursor-pointer transition-all flex items-center justify-center gap-2',
          'mode-dark:hover:text-blue-300 mode-dark:focus:text-blue-300',
          {
            'text-blue-700 no-underline hover:no-underline cursor-not-allowed opacity-60 mode-dark:text-blue-300':
              disabled,
          },
          sizeStyles[size],
          stateStyles[state][size],
        )}
        ref={ref}
        aria-disabled={disabled ? 'false' : 'true'}
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
            variant='color'
          />
        )}
        {state === 'success' && <IconCheck />}
      </Component>
    )
  },
)

export default Link
