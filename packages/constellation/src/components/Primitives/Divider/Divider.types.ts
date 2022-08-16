import { SeparatorProps } from '@radix-ui/react-separator'
import { FC } from 'react'

export type DividerVariants = 'subtle' | 'medium' | 'distinct'
export type DividerOrientations = 'horizontal' | 'vertical'

export type Props = {
  orientation?: DividerOrientations
  variant?: DividerVariants
} & SeparatorProps

export type Component = FC<Props>
