import cx from 'classnames'
import React, { forwardRef } from 'react'

import { SemanticColors, Text } from '../../../Base'
import { AlertBannerComponentType, AlertBannerProps } from '.'

/**
 * The Banner shows the user important info and allows them to take an action.
 *
 * With the as prop the banner can be used as a button or a link.
 *
 * When a `ref` prop is provided, it will be forwarded to the root element. Any
 * other properties supplied will be provided to the root element (ie, the `as`
 * prop value). This includes all appropriate HTML attributes or aria tags. This
 * component may have its underlying DOM customized via the 'as' prop.
 */

const Banner: AlertBannerComponentType = forwardRef(
  <T extends React.ElementType = 'button'>(
    {
      as,
      boldContent,
      className,
      content,
      icon,
      type,
      variant = 'default',
      ...otherProps
    }: AlertBannerProps<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    const Component = as || 'button'
    const fallbackType = Component === 'button' && !type ? 'button' : undefined

    const variantStyles = {
      default: 'bg-primary',
      error: 'bg-error',
      warning: 'bg-warning',
    }

    return (
      <Component
        className={cx(
          'constellation w-full h-[29px] mode-light:text-white-000 mode-dark:text-dark-900 cursor-pointer flex flex-row gap-1 items-center justify-center',
          variantStyles[variant],
          className,
        )}
        ref={ref}
        type={type || fallbackType}
        {...otherProps}
      >
        <Text variant='paragraph1' color={SemanticColors.background}>
          {content}
        </Text>
        {icon}
        {boldContent && (
          <Text variant='paragraph1' color={SemanticColors.background}>
            {boldContent}
          </Text>
        )}
      </Component>
    )
  },
)

export default Banner
