import React, { FC, ReactNode } from 'react'

type InternalLogoProps = {
  circle: boolean
  className?: string
  value: string | ReactNode
}

type InternalLogoComponent = FC<InternalLogoProps>

type LogoProps = {
  circle?: boolean
  primary: string | ReactNode
  secondary?: string | ReactNode
  secondaryVariant?: 'primary' | 'badge'
}

type LogoComponent = FC<LogoProps>

export type { InternalLogoComponent, InternalLogoProps, LogoComponent, LogoProps }
