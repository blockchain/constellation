import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'
import { ButtonSizes } from 'theme'

type BaseButtonProps = {
  disabled?: boolean
  endIcon?: JSX.Element
  fullWidth?: boolean
  isLoading?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  size?: ButtonSizes
  startIcon?: JSX.Element
  title: ReactNode
} & Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick' | 'onFocus' | 'onBlur' | 'onDoubleClick' | 'autoFocus' | 'type'
>

export type { BaseButtonProps }
