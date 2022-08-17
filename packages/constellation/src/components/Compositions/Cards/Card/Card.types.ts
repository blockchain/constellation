import { FC, ReactNode } from 'react'

import { Colors } from '../../../Base/Colors'
import { LogoContentProps } from '../../index'

type CardProps = {
  /**
   * Use primarily for the CTA announcement card this will change the
   * colour of both the button and the border to whatever hex value is
   * reuqired.
   */
  accentColor?: string
  /**
   * Determins if the card has a border or not.
   */
  border?: boolean
  /**
   * Used to show or hide the button. CTA cards will always have a button.
   */
  button?: boolean
  /**
   * The content of the button
   */
  buttonContent?: string
  className?: string
  /**
   * The main body content of the card
   */
  content: string
  /**
   * Used by the CTA card to add the token info, header allows any ReactNode
   * to be added next to the logo at the top of the card.
   */
  header?: ReactNode
  /**
   * The background colour of the logo when using text or an icon
   */
  logoBackground?: Colors
  /**
   * The content of the Logo, could be an image, icon, or text.
   */
  logoContent?: LogoContentProps
  /**
   * The function called when the button is clicked.
   */
  onButtonClick?: () => void
  /**
   * The function called when the card iteself is clicked.
   */
  onCardClick?: () => void
  /**
   * The function called when the close button is clicked.
   */
  onCloseClick?: () => void
  /**
   * The title of the card
   */
  title: string
  /**
   * The variant of the card to render. This determines the layout and text sizing.
   */
  variant?: 'default' | 'announcement' | 'callout' | 'cta'
}

type CardComponent = FC<CardProps>

export type { CardComponent, CardProps }
