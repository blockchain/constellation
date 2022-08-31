import { ReactNode } from 'react'

type ReactInputComponent = React.HTMLAttributes<HTMLInputElement>

type InputProps = ReactInputComponent & {
  disabled?: boolean
  helperText?: string | ReactNode
  id: string
  label?: string | ReactNode
  placeholder?: string | ReactNode
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

type InputComponent = (props: InputProps) => React.ReactElement | null

export type { InputComponent, InputProps, ShowPasswordProps }
