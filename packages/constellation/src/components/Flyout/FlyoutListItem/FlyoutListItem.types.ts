import { FC, ReactNode } from 'react'

type FlyoutListItemProps = {
  endIcon?: ReactNode
  icon: ReactNode
  onClick?: () => void
  subtitle?: ReactNode
  title: ReactNode
}

type FlyoutListItemComponent = FC<FlyoutListItemProps>

export type { FlyoutListItemComponent, FlyoutListItemProps }
