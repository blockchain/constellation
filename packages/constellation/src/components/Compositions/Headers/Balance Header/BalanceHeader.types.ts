import React from 'react'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * The total balance in cents, converted and displayed by the header in dollars
     */
    balanceTotalCents: number
    /**
     * A clickable icon that will be displayed on the righthand side of the header
     */
    icon: React.ReactNode
    /**
     * Click handler for righthand side icon
     */
    onIconClick: () => void
    /**
     * Text displayed below total balance
     */
    subtitle: string
    /**
     * Text displayed above total balance
     */
    title: string
  }
>

export type Component = <T extends React.ElementType = 'header'>(
  props: Props<T>,
) => React.ReactElement | null
