import { RadioGroupItemProps } from '@radix-ui/react-radio-group'

import { SemanticColors } from '../../Colors'

export type Props = RadioGroupItemProps & {
  /**
   * Render with error state styles
   */
  error?: boolean
  /**
   * The text content of the Radio item
   */
  label?: string
  /**
   * The semantic color of the text
   */
  labelColor?: SemanticColors
}

export type Component = React.ForwardRefExoticComponent<
  RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>
>
