import React from 'react'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * An optional Icon displayed inline with button text
     */
    balanceTotalCents: number
    /**
     * An optional Icon displayed inline with button text
     */
    subtitle: string
    /**
     * An optional Icon displayed inline with button text
     */
    title?: string
  }
>

export type Component = <T extends React.ElementType = 'header'>(
  props: Props<T>,
) => React.ReactElement | null
