import { SeparatorProps } from '@radix-ui/react-separator'

type SeparatorVariants = 'subtle' | 'medium' | 'distinct'

type SeparatorComponentProps = SeparatorProps & {
  variant: SeparatorVariants
}

export type { SeparatorComponentProps, SeparatorVariants }
