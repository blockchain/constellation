import { FC } from 'react'

type InputProps = {
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
