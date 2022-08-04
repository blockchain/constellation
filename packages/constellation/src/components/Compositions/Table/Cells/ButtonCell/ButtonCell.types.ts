import { FC, ReactNode } from 'react'

type Props = {
  primaryOnClick: () => void
  primaryText: string
  secondaryOnClick?: () => void
  secondaryText?: string
}
type Component = FC<Props>

export type { Component, Props }
