import { FC, ReactNode } from 'react'

interface Props {
  footer?: boolean
  header?: boolean
  icon?: ReactNode
}
type Component = FC<Props>

export type { Component, Props }
