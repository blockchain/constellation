import { FC, ReactNode } from 'react'

type Props = {
  isFooter?: boolean
  isHeader?: boolean
  postfix?: ReactNode
  prefix?: ReactNode
}
type Component = FC<Props>

export type { Component, Props }
