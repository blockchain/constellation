import { SeparatorProps } from '@radix-ui/react-separator'
import { FC } from 'react'

export type DividerVariants = 'subtle' | 'medium' | 'distinct'
export type DividerOrientations = 'horizontal' | 'vertical'

export type Props = {
  /**
   * The orientation of the divider
   */
  orientation?: DividerOrientations
  /**
   * The stylistic variant of the divider
   */
  variant?: DividerVariants
} & SeparatorProps

export type Component = FC<Props>
