import { SwitchProps } from '@radix-ui/react-switch'
import { FC } from 'react'

import { TagVariants } from '../../Primitives/Tag/Tag.types'
import { LogoProps } from '../Logo'

type imgProps =
  | {
      imgAlt: string
      imgSrc: string
    }
  | {
      imgAlt?: never
      imgSrc?: never
    }

type ListRowProps = imgProps & {
  description?: string
  icon?: React.ReactNode
  leftByline?: string
  leftTitle: string
  logoProps?: LogoProps
  onClick?: () => void
  onToggleChange?: SwitchProps['onCheckedChange']
  rightByline?: string
  rightTitle?: string
  showArrow?: boolean
  tagText?: string
  tagVariant?: TagVariants
  titleIcon?: React.ReactNode
}

type ListRowComponent = FC<ListRowProps>

export type { ListRowComponent, ListRowProps }
