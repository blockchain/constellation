import { FC, ReactNode } from 'react'

import { Colors } from '../../Base/Colors'

type InternalLogoProps = {
  backgroundColor?: Colors
  circle: boolean
  className?: string
  icon: ReactNode
  iconColor?: Colors
  imgSrc?: string
  size?: 'base' | 'double' | 'badge' | 'large' | 'small'
  text?: string
}

type InternalLogoComponent = FC<InternalLogoProps>

interface ImgTxtContent {
  backgroundColor?: Colors
  icon?: never
  iconColor?: never
  imgSrc?: string
  text: string
}

interface IconContent {
  backgroundColor?: Colors
  icon: ReactNode
  iconColor?: Colors
  imgSrc?: never
  text?: never
}

type Content = ImgTxtContent | IconContent

type LogoProps = {
  circle?: boolean
  doubleVariant?: 'primary' | 'badge'
  primaryContent: Content
  secondaryContent?: Content
  singleVariant?: 'base' | 'large' | 'small'
}

type LogoComponent = FC<LogoProps>

export type {
  InternalLogoComponent,
  InternalLogoProps,
  LogoComponent,
  Content as LogoContentProps,
  LogoProps,
}
