import { FC } from 'react'

export type SpinningLoaderVariants = 'monotone' | 'color'
export type SpinningLoaderSizes = 'default' | 'full' | 'large' | 'small'
export type SpinningLoaderWidths = 'default' | 'large' | 'small'

export interface SpinningLoaderProps {
  borderWidth?: SpinningLoaderWidths
  size?: SpinningLoaderSizes
  variant?: SpinningLoaderVariants
}

export type SpinningLoaderComponent = FC<SpinningLoaderProps>
