import { FC, MouseEventHandler } from 'react'

type BaseCardProps = {
  /**
   * Overrides the default border colour.
   */
  accentColor?: string
  /**
   * Determins if the card has a border or not.
   */
  border?: boolean
  /**
   * The className for the body of the card
   */
  className?: string
  /**
   * The function called when the card iteself is clicked.
   */
  onCardClick?: MouseEventHandler<HTMLButtonElement> & MouseEventHandler<HTMLDivElement>
  /**
   * The function called when the close button is clicked.
   */
  onCloseClick?: MouseEventHandler<HTMLButtonElement>
}

type BaseCardComponent = FC<BaseCardProps>

export type { BaseCardComponent, BaseCardProps }
