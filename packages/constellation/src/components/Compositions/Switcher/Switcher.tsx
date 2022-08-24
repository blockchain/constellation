import cx from 'classnames'
import React, { forwardRef } from 'react'

import { Text } from '../../Base'
import { Logo } from '../index'
import { Component as ComponentType, Props } from './Switcher.types'

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
    { as, byline, disabled = false, title, type, ...otherProps }: Props<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    const Component = as || 'button'
    const fallbackType = Component === 'button' && !type ? 'button' : undefined

    return (
      <Component
        ref={ref}
        type={type || fallbackType}
        disabled={disabled}
        {...otherProps}
        className='constellation bg-background-light outline-none flex items-center rounded-full p-2 gap-2'
      >
        <Logo
          primaryContent={{
            imgSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png',
            text: 'Bitcoin',
          }}
          secondaryContent={{
            imgSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png',
            text: 'Bitcoin',
          }}
          singleVariant='small'
          doubleVariant='badge'
        />
        <div>
          <Text variant='body1'>{title}</Text>
          {byline}
        </div>
      </Component>
    )
  },
)

export default Switcher
