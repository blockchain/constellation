import { ColorKeysType } from '../../colors/types'
import { iconSize } from '../Icon'

export type CopyToClipboardTypes = {
  color?: ColorKeysType
  customHandler?: () => void
  hoverColor?: ColorKeysType
  size?: keyof typeof iconSize
  successColor?: ColorKeysType
  successHoverColor?: ColorKeysType
  value: string
}

export type IconProps = {
  color?: ColorKeysType
  hoverColor?: ColorKeysType
  light?: boolean
  showSuccess: boolean
  successColor?: ColorKeysType
  successHoverColor?: ColorKeysType
}
