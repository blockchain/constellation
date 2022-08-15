import React from 'react'

export type IconButtonVariants = 'primary' | 'secondary' | 'minimal'
export type IconButtonWidths = 'auto' | 'full'
export type Sizes = 'default' | 'large' | 'small'
export type ButtonState = 'initial' | 'loading' | 'success'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * The Icon to be displayed as a clickable button
     */
    icon: React.ReactNode
    /**
     * The size of the button, from a range of variants.
     */
    size: Sizes
    /**
     * An optional visual progress indication of a tiggered button action
     */
    state?: ButtonState
  }
>

export type Component = <T extends React.ElementType = 'button'>(
  props: Props<T>,
) => React.ReactElement | null
