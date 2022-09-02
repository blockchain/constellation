import { FC, ReactNode } from 'react'

import { Colors } from '../../Base/Colors'

type InternalLogoProps = {
  altText: string
  backgroundColor?: Colors
  circle: boolean
  className?: string
  icon: ReactNode
  iconColor?: Colors
  imgSrc?: string
  size?: 'small' | 'base' | 'large'
  text?: string | ReactNode
  variant?: 'base' | 'double' | 'badge'
}

type InternalLogoComponent = FC<InternalLogoProps>

interface TxtContent {
  backgroundColor?: Colors
  icon?: never
  iconColor?: never
  imgSrc?: never
  text: string | ReactNode
}

interface ImgContent {
  backgroundColor?: Colors
  icon?: never
  iconColor?: never
  imgSrc?: string
  text?: never
}

interface IconContent {
  backgroundColor?: Colors
  icon: ReactNode
  iconColor?: Colors
  imgSrc?: never
  text?: never
}

type Content = (TxtContent | IconContent | ImgContent) & {
  /**
   * The alt text for the logo image
   */
  altText: string
}

type LogoProps = {
  /**
   * Determines if the logo is a rounded square of a circle
   */
  circle?: boolean
  /**
   * The variant of the secondary logo
   */
  doubleVariant?: 'primary' | 'badge'
  /**
   * The primary content of the logo
   */
  primaryContent: Content
  /**
   * The secondary content of the logo displayed as either a double of badge
   */
  secondaryContent?: Content
  /**
   * The size of the logo
   */
  size?: 'base' | 'large' | 'small'
}

type LogoComponent = FC<LogoProps>

export type {
  InternalLogoComponent,
  InternalLogoProps,
  LogoComponent,
  Content as LogoContentProps,
  LogoProps,
}
