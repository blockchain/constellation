import { FC, ReactNode } from 'react'

type FlyoutScaffoldProps = {
  footer?: ReactNode
  header: ReactNode
}

type FlyoutScaffoldComponent = FC<FlyoutScaffoldProps>

export type { FlyoutScaffoldComponent, FlyoutScaffoldProps }
