import React from 'react'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * Secondary text content of switcher
     */
    byline?: string
    /**
     * Text content of switcher
     */
    title: string
  }
>

export type Component = <T extends React.ElementType = 'button'>(
  props: Props<T>,
) => React.ReactElement | null
