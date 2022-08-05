import { FC } from 'react'

interface ButtonProps {
  onClick: () => void
  text: string
  variant?: 'primary' | 'secondary' | 'minimal'
}

interface Props {
  isFooter?: boolean
  isHeader?: boolean
  primaryButton: ButtonProps
  secondaryButton?: ButtonProps
}
type Component = FC<Props>

export type { Component, Props }
