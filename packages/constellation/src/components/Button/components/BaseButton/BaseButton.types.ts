import { FC, MouseEventHandler, ReactNode } from 'react'

import { BaseButtonTheme } from './theme'

type BaseButtonProps = {
  className?: string
  disabled?: boolean
  endIcon?: JSX.Element
  fullWidth?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  overlay?: ReactNode
  rounded?: boolean
  size?: keyof BaseButtonTheme['sizes']
  startIcon?: JSX.Element
}

type BaseButtonComponent = FC<BaseButtonProps>

export type { BaseButtonComponent, BaseButtonProps }
