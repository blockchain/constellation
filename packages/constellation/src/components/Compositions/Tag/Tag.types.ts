import React from 'react'

export type TagVariants = 'default' | 'alt' | 'success' | 'warning' | 'error'
export type TagSizes = 'default' | 'large'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * Text content of tag
     */
    content: string

    /**
     * The size of the tag, from a range of variants.
     */
    size?: TagSizes

    /**
     * The stylistic variant to use when rendering.
     */
    variant?: TagVariants
  }
>

export type Component = <T extends React.ElementType = 'div'>(
  props: Props<T>,
) => React.ReactElement | null
