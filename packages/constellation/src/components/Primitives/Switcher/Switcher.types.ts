import React, { ReactNode } from 'react'

import { LogoProps } from '../../Compositions/Logo/Logo.types'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * Secondary text content of switcher
     */
    byline?: string | ReactNode
    /**
     * The logo to display in the switcher.
     */
    logoContent: LogoProps
    /**
     * Text content of switcher
     */
    title: string | ReactNode
  }
>

export type Component = <T extends React.ElementType = 'button'>(
  props: Props<T>,
) => React.ReactElement | null

export type WalletProps<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * The primary content to be displayed in the switcher.
     * if the id is longer than 8 characters, it will be truncated
     * in the middle with 4 characters either side otherwise
     * the full id will be displayed.
     */
    id: string
    /**
     * Changes the color of the dot
     */
    status: 'success' | 'warning' | 'error'
    /**
     * The the secondary content of the switcher.
     */
    ticker: string | ReactNode
  }
>

export type WalletComponent = <T extends React.ElementType = 'button'>(
  props: WalletProps<T>,
) => React.ReactElement | null
