import React from 'react'

import { LogoProps } from '../Logo/Logo.types'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * Secondary text content of switcher
     */
    byline?: string
    logoContent: LogoProps
    /**
     * Text content of switcher
     */
    title: string
  }
>

export type Component = <T extends React.ElementType = 'button'>(
  props: Props<T>,
) => React.ReactElement | null

export type WalletProps<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    id: string
    status: 'success' | 'warning' | 'error'
    ticker: string
  }
>

export type WalletComponent = <T extends React.ElementType = 'button'>(
  props: WalletProps<T>,
) => React.ReactElement | null
