import { FC, ReactNode } from 'react'

import { Colors } from '../../Base/Colors'

type InternalLogoProps = {
  circle: boolean
  className?: string
  color?: Colors
  icon: ReactNode
  iconColor?: Colors
  imgAlt?: string
  imgSrc?: string
  text?: string
}

type InternalLogoComponent = FC<InternalLogoProps>

interface PrimaryImage {
  primaryIcon?: never
  primaryImgAlt: string
  primaryImgSrc: string
  primaryText?: never
}

interface PrimaryIcon {
  primaryIcon: ReactNode
  primaryImgAlt?: never
  primaryImgSrc?: never
  primaryText?: never
}

interface PrimaryText {
  primaryIcon?: never
  primaryImgAlt?: never
  primaryImgSrc?: never
  primaryText: string
}

interface SecondaryImage {
  secondaryIcon?: never
  secondaryImgAlt: string
  secondaryImgSrc: string
  secondaryText?: never
}

interface SecondaryIcon {
  iconColor?: Colors
  secondaryIcon: ReactNode
  secondaryImgAlt?: never
  secondaryImgSrc?: never
  secondaryText?: never
}

interface SecondaryText {
  secondaryIcon?: never
  secondaryImgAlt?: never
  secondaryImgSrc?: never
  secondaryText: string
}

// allow the logo component to now have any secondary props
interface SecondaryOptional {
  secondaryIcon?: never
  secondaryImgAlt?: never
  secondaryImgSrc?: never
  secondaryText?: never
}

// the extra interfaces here are used to make impossible to have both more than value in each logo
type LogoProps = {
  backgroundColor?: Colors
  circle?: boolean
  iconColor?: Colors
  secondaryVariant?: 'primary' | 'badge'
} & (PrimaryImage | PrimaryIcon | PrimaryText) &
  (SecondaryImage | SecondaryIcon | SecondaryText | SecondaryOptional)

type LogoComponent = FC<LogoProps>

export type { InternalLogoComponent, InternalLogoProps, LogoComponent, LogoProps }
