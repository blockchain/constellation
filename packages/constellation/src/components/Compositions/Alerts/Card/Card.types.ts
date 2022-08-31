import { FC } from 'react'

import { BaseCardProps } from '../../Cards'

export type CardCta = {
  onClick: () => void
  text: string
}

export type Props = Pick<BaseCardProps, 'onCardClick' | 'onCloseClick'> & {
  /**
   * The body text of the card the color is not influenced by the variant
   */
  content: string | React.ReactNode
  /**
   * The primary call to action button
   */
  primaryCta?: CardCta
  /**
   * The optional secondary call to action button
   */
  secondaryCta?: CardCta
  /**
   * The title of the card rendered at the top and the color is influenced by the variant
   */
  title: string | React.ReactNode
  /**
   * The variant of the card, this changes the color of the title and the border
   */
  variant?: 'default' | 'success' | 'warning' | 'error'
}

export type Component = FC<Props>
