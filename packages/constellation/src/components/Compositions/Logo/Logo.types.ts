import { FC, ReactNode } from 'react'

import { Colors } from '../../Base/Colors'

type InternalLogoProps = {
  circle: boolean
  className?: string
  color?: Colors
  value: string | ReactNode
}

type InternalLogoComponent = FC<InternalLogoProps>

type LogoProps = {
  backgroundColor?: Colors
  /**
   * Displays the logo as either a circle or rounded square. Defaults to true.
   */
  circle?: boolean
  /**
   * The content of the primary logo.
   * If a string is provided, it will be rendered as text in the primary logo.
   * If a React node is provided, it will be rendered at full width and height.
   * in the primary logo.
   */
  primary: string | ReactNode
  /**
   * The content of the secondary logo.
   * If a string is provided, it will be rendered as text in the secondary logo.
   * If a React node is provided, it will be rendered at full width and height.
   * in the secondary logo.
   */
  secondary?: string | ReactNode
  /**
   * The style of the secondary logo. Defaults to "primary". If primary then both
   * logos will be rendered at 24px slightly overlapping. If badge the secondary logo
   * will be rendered at 16px in the bottom right corner and the primary logo at full size.
   */
  secondaryVariant?: 'primary' | 'badge'
}

type LogoComponent = FC<LogoProps>

export type { InternalLogoComponent, InternalLogoProps, LogoComponent, LogoProps }
