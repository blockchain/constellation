import { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch'
import { FC } from 'react'

import { SwitchTheme } from './theme'

type SwitchProps = RadixSwitchProps & {
  color?: keyof SwitchTheme['colors']
  size?: keyof SwitchTheme['sizes']
}

type SwitchComponent = FC<SwitchProps>

export type { SwitchComponent, SwitchProps }
