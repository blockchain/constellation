import React from 'react'

export type Sizes = 'default' | 'large'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * Allows some styling overrides when needed
     */
    className?: string
    /**
     * The size of the button, from a range of variants.
     */
    size?: Sizes
  }
>

export type Component = <T extends React.ElementType = 'button'>(
  props: Props<T>,
) => React.ReactElement | null
