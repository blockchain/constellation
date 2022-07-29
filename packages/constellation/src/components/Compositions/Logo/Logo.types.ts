import { FC } from 'react'

type LogoProps = {
  defaultValue?: number
  max: number
  min: number
  step: number
  value?: number
}

type LogoComponent = FC<LogoProps>

export type { LogoComponent, LogoProps }
