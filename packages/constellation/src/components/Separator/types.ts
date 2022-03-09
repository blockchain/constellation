import { SeparatorProps as RadixSeparatorProps } from '@radix-ui/react-separator'
import { FC } from 'react'

export type SeparatorVariants = 'subtle' | 'default' | 'distinct'

export type SeparatorProps = {
  orientation?: RadixSeparatorProps['orientation']
  variant?: SeparatorVariants
}

export type SeparatorComponent = FC<SeparatorProps>
