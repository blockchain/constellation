import { FC } from 'react'

interface Props {
  footer?: boolean
  header?: boolean
  text: string
}
type Component = FC<Props>

export type { Component, Props }
