import { HTMLAttributes } from 'react'

type SwitchComponentProps = {
  checked: boolean
  color?: 'blue' | 'green'
  disabled?: boolean
} & HTMLAttributes<never>

export type { SwitchComponentProps }
