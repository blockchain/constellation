import React from 'react'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * The second part of the banner message that is displaed in bold.
     */
    boldContent?: string
    /**
     * The first part of the banner message that is displayed in regular font weight.
     */
    content: string
    /**
     * The color of the banner.
     */
    variant: 'default' | 'warning' | 'error'
  }
>

export type Component = <T extends React.ElementType = 'button'>(
  props: Props<T>,
) => React.ReactElement | null
