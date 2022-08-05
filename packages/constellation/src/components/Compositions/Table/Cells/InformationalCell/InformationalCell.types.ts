import { FC } from 'react'

interface Props {
  isFooter?: boolean
  isHeader?: boolean
  text: string
}
type Component = FC<Props>

export type { Component, Props }
