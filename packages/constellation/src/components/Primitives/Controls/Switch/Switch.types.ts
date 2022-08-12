import { SwitchProps } from '@radix-ui/react-switch'

import { SemanticColors } from '../../../Base/Colors'

export type Variants = 'primary' | 'success'

export type Props = SwitchProps & {
  /**
   * The text content of the Switch
   */
  label?: string
  /**
   * The semantic color of the text
   */
  labelColor?: SemanticColors
  onCheckedChange?: (checked: boolean) => void
  /**
   * Orientation of the label and switch when the label is present
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * Stylistic variants for the component
   */
  variant?: Variants
}

export type Component = React.ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLButtonElement>
>
