import { IconProps } from 'components/Icon'
import { FC } from 'react'

type LoadingSpinnerProps = Pick<IconProps, 'color' | 'size'>

type LoadingSpinnerComponent = FC<LoadingSpinnerProps>

export type { LoadingSpinnerComponent, LoadingSpinnerProps }
