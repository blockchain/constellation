import { FC, ReactNode } from 'react'

interface Props {
  icon?: ReactNode
  isFooter?: boolean
  isHeader?: boolean
}
type Component = FC<Props>

export type { Component, Props }
