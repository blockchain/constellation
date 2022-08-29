import React from 'react'

import { SpinningLoaderProps } from '../..'

export type ButtonVariants = 'primary' | 'secondary' | 'minimal' | 'alert' | 'icon'
export type ButtonWidths = 'auto' | 'full'
export type Sizes = 'default' | 'large' | 'small' | 'noPadding'
export type ButtonState = 'initial' | 'loading' | 'success'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * An optional Icon displayed inline with button text
     */
    icon?: React.ReactNode
    /**
     * Display the button inline with its sibling content
     */
    inline?: boolean
    /**
     * Optional override for the button's inline loader stylistic variant
     */
    loaderVariant?: SpinningLoaderProps['variant']
    /**
     * The size of the button, from a range of variants.
     */
    size?: Sizes
    /**
     * An optional visual progress indication of a tiggered button action
     */
    state?: ButtonState
    /**
     * Text content of button
     */
    text: string
    /**
     * The stylistic variant to use when rendering.
     */
    variant?: ButtonVariants
    /**
     * Normally, buttons are only as wide as needed to contain their content.
     * This prop will let you set the button to fill with width of it's parent
     * element, either via flex or width percentage.
     */
    width?: ButtonWidths
  }
>

export type Component = <T extends React.ElementType = 'button'>(
  props: Props<T>,
) => React.ReactElement | null
