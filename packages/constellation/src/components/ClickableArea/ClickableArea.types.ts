import { FC, MouseEventHandler } from 'react'

type ClickableAreaProps = {
  hoverBackgroundColor?: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

type ClickableAreaComponent = FC<ClickableAreaProps>

export type { ClickableAreaComponent, ClickableAreaProps }
