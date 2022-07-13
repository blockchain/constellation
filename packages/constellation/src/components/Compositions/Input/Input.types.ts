import { ReactNode } from 'react'

type ReactInputComponent = React.HTMLAttributes<HTMLInputElement>

type InputProps = ReactInputComponent & {
  disabled?: boolean
  helperText?: string
  id: string
  label?: string
  placeholder?: string
  prefix?: string | ReactNode
  state?: 'error' | 'success' | 'default'
  type: 'text' | 'password'
}

export type { InputProps }
