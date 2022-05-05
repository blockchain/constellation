import { FC } from 'react'
import { IconColors } from 'theme'
import { LiteralStringUnion } from 'utils/LiteralUnion'

export type IconSizesType = 'small' | 'medium' | 'large'

export type IconProps = {
  children: JSX.Element
  color?: LiteralStringUnion<IconColors>
  label: string
  size?: IconSizesType | number
}

export type IconComponent = FC<IconProps>
