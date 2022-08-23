import { SwitchProps } from '@radix-ui/react-switch'
import { FC } from 'react'

import { TagVariants } from '../../Primitives/Tag/Tag.types'
import { LogoProps } from '../Logo'

// Makes the alt text required when an image is displayed
type imgProps =
  | {
      /**
       * The alt text to display when the image is not available
       */
      imgAlt: string
      /**
       * src of the image to display
       */
      imgSrc: string
    }
  | {
      imgAlt?: never
      imgSrc?: never
    }

type ListRowProps = imgProps & {
  /**
   * can override the onClick prop and force the row to either
   * be a button or a div. This is useful when you want the row
   * to have an onClick function but also want a switch as a switch
   * cannot be the child of a button.
   */
  as: 'button' | 'div'
  /**
   * Description is the main content of a Large list row
   * weather of not a list row has a "large" layout is
   * based on if description exists.
   */
  description?: string
  /**
   * The icon displayed before the left title and byline
   */
  icon?: React.ReactNode
  /**
   * The main byline on the left side fo the row
   */
  leftByline?: string
  /**
   * The left title is the main title of the row, it is required
   */
  leftTitle: string
  /**
   * Props passed on to the Logo component displayed on the left
   * side of the row
   */
  logoProps?: LogoProps
  /**
   * onClick is the function that is triggered when the row is clicked
   * it also changes the type of the row to a button however this can be overriden
   * by the "as" prop.
   */
  onClick?: () => void
  /**
   * The function called when the switch is toggled. This prop existing enables the switch.
   */
  onToggleChange?: SwitchProps['onCheckedChange']
  /**
   * The secondary byline displated on the right side of the row
   */
  rightByline?: string
  /**
   * The secondary title displayed on the right side of the row
   */
  rightTitle?: string
  /**
   * By default the arrow is displated when the onClick prop exists.
   * However showArrow and override this.
   */
  showArrow?: boolean
  /**
   * The text to be displayed in the tag. This prop existing displays the tag.
   */
  tagText?: string
  /**
   * The color variant of the tag.
   */
  tagVariant?: TagVariants
  /**
   * The icon displayed on the right side of the main title (leftTitle)
   */
  titleIcon?: React.ReactNode
}

type ListRowComponent = FC<ListRowProps>

export type { ListRowComponent, ListRowProps }
