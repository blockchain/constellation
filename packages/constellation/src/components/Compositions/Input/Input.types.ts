import { ReactNode } from 'react'

type ReactInputComponent = React.HTMLAttributes<HTMLInputElement>

type InputProps = ReactInputComponent & {
  disabled?: boolean
  helperText?: string
  id: string
  label?: string
  placeholder?: string
  postfix?: ReactNode
  prefix?: string | ReactNode
  state?: 'error' | 'success' | 'warning' | 'default'
  type: 'text' | 'password' | 'number' | 'email'
}

type ShowPasswordProps = {
  disabled?: boolean
  onClick: () => void
  showPassword: boolean
}

export type { InputProps, ShowPasswordProps }
