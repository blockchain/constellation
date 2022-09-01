import cx from 'classnames'
import React, { forwardRef } from 'react'

import { IconChevronRightV2, PaletteColors, SemanticColors, Text } from '../../Base'
import { Logo } from '../../Compositions/Logo'
import { Component as ComponentType, Props } from './Switcher.types'

/**
 * Switchers act as a button with basic info. They also be used to trigger a modal or flyout.
 */

const Switcher: ComponentType = forwardRef(
  <T extends React.ElementType = 'button'>(
    { as, byline, disabled = false, logoContent, title, type, ...otherProps }: Props<T>,
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
        className={cx(
          'constellation bg-background-light outline-none flex items-center rounded-full p-2 pr-3 gap-2 h-8 cursor-pointer',
          {
            '!h-12 !rounded-lg': byline,
          },
        )}
      >
        {logoContent?.primaryContent && (
          <Logo {...logoContent} size='small' doubleVariant='badge' />
        )}
        <div className='flex flex-col'>
          <Text variant='body1' color={SemanticColors.title} className='!m-0'>
            {title}
          </Text>
          {byline && (
            <Text variant='caption1' color={SemanticColors.body} className='!m-0'>
              {byline}
            </Text>
          )}
        </div>
        <IconChevronRightV2
          height={20}
          width={20}
          className='-ml-2'
          color={PaletteColors['grey-400']}
        />
      </Component>
    )
  },
)

export default Switcher
