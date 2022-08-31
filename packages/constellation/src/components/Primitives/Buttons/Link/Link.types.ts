import React from 'react'

export type Sizes = 'default' | 'large' | 'small'
export type LinkState = 'initial' | 'loading' | 'success'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * An optional Icon displayed inline with link text
     */
    icon?: React.ReactNode
    /**
     * The size of the link, from a range of variants.
     */
    size?: Sizes
    /**
     * An optional visual progress indication of a tiggered link action
     */
    state?: LinkState
    /**
     * Text content of link
     */
    text: string | React.ReactNode
  }
>

export type Component = <T extends React.ElementType = 'a'>(
  props: Props<T>,
) => React.ReactElement | null
