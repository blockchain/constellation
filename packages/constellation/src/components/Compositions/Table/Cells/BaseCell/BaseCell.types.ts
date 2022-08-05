import { FC, ReactNode } from 'react'

type Props = {
  footer?: boolean
  header?: boolean
  postfix?: ReactNode
  prefix?: ReactNode
}
type Component = FC<Props>

export type { Component, Props }
