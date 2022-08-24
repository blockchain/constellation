import { FC } from 'react'

interface NavigationProps {
  title: string
}

type NavigationComponent = FC<NavigationProps>

export type { NavigationComponent, NavigationProps }
