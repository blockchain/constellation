import { FC, ReactNode } from 'react'

type Props = {
  header?: boolean
  icon?: ReactNode
}
type Component = FC<Props>

export type { Component, Props }
