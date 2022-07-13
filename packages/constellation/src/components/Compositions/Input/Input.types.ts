import { FC } from 'react'

type InputProps = {
  placeholder?: string
  prefix?: string
  state?: 'error' | 'success' | 'default'
  disabled?: boolean
  label?: string
  helperText?: string
  password?: boolean
}

type InputComponent = FC<InputProps>

export type { InputComponent, InputProps }
