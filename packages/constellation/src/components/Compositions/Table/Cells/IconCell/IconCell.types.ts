import { FC, ReactNode } from 'react'

interface Props {
  isFooter?: boolean
  isHeader?: boolean
  icon?: ReactNode
}
type Component = FC<Props>

export type { Component, Props }
