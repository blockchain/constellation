import { FC } from 'react'
import { LiteralStringUnion } from 'utils'

import { IconTheme } from './theme'

export type IconProps = {
  children: JSX.Element
  color?: LiteralStringUnion<keyof IconTheme['colors']>
  label: string
  size?: keyof IconTheme['sizes'] | number
}

export type IconComponent = FC<IconProps>
