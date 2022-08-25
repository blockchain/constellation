import React from 'react'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * An optional Icon displayed inline with button text
     */
    children: React.ReactNode
  }
>

export type Component = <T extends React.ElementType = 'header'>(
  props: Props<T>,
) => React.ReactElement | null
