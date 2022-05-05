import { FC, ReactNode } from 'react'

type LoadingAreaProps = {
  icon?: ReactNode
  isLoading: boolean
}

type LoadingAreaComponent = FC<LoadingAreaProps>

export type { LoadingAreaComponent, LoadingAreaProps }
