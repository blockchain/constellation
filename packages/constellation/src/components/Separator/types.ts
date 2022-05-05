import { FC } from 'react'

type SeparatorProps = {
  decorative?: boolean
  orientation?: 'vertical' | 'horizontal'
}

type SeparatorComponent = FC<SeparatorProps>

export type { SeparatorComponent, SeparatorProps }
