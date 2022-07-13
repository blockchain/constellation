import { FC } from 'react'

type ReactInputComponent = React.HTMLAttributes<HTMLInputElement>

type InputProps = ReactInputComponent & {
  disabled?: boolean
  helperText?: string
  id: string
  label?: string
  password?: boolean
  placeholder?: string
  prefix?: string
  state?: 'error' | 'success' | 'default'
}

type InputComponent = FC<InputProps>

export type { InputComponent, InputProps }
