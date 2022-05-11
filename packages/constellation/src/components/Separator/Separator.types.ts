import { SeparatorProps as RadixSeparatorProps } from '@radix-ui/react-separator'
import { FC } from 'react'

type SeparatorProps = Pick<RadixSeparatorProps, 'orientation' | 'decorative'>

type SeparatorComponent = FC<SeparatorProps>

export type { SeparatorComponent, SeparatorProps }
