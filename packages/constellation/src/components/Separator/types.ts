import { HTMLAttributes } from 'react'

type SeparatorVariants = 'subtle' | 'medium' | 'distinct'

type SeparatorComponentProps = {
  orientation: 'horizontal' | 'vertical'
  variant: SeparatorVariants
} & HTMLAttributes<never>

export type { SeparatorComponentProps, SeparatorVariants }
