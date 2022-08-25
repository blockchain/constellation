import React from 'react'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * Children content rendered in two column format by the Section header
     */
    children: React.ReactNode
  }
>

export type Component = <T extends React.ElementType = 'header'>(
  props: Props<T>,
) => React.ReactElement | null
