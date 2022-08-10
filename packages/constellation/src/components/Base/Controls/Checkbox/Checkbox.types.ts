import { CheckboxProps } from '@radix-ui/react-checkbox'

import { SemanticColors } from '../../Colors'

export type Props = CheckboxProps & {
  /**
   * Render with error state styles
   */
  error?: boolean
  /**
   * The text content of the Checkbox item
   */
  label?: string
  /**
   * The semantic color of the text
   */
  labelColor?: SemanticColors
  onCheckedChange?: (checked: boolean) => void
}

export type Component = React.ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLButtonElement>
>
