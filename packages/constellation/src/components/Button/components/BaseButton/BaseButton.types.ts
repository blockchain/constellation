import { IconProps } from 'components/Icon'
import { TextProps } from 'components/Text'

type BaseButtonStyle = {
  backgroundColor?: string
  border?: string
  borderRadius?: number
  icon?: Partial<IconProps>
  text?: Partial<TextProps>
}

type BaseButtonProps = {
  activeStyle?: BaseButtonStyle
  defaultStyle?: BaseButtonStyle
  disabledStyle?: BaseButtonStyle
  focusedStyle?: BaseButtonStyle
  fullWidth?: boolean
  hoverStyle?: BaseButtonStyle
  isLoading?: boolean
  loadingStyle?: BaseButtonStyle
}

export type { BaseButtonProps, BaseButtonStyle }
