import { FC, ReactNode } from 'react'

type Props = {
  isHeader?: boolean
  postfix?: ReactNode
  prefix?: ReactNode
}
type Component = FC<Props>

export type { Component, Props }
