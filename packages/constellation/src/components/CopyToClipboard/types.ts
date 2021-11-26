import { ColorKeysType } from '../../colors/types'

export type CopyToClipboardTypes = {
  color?: ColorKeysType
  customHandler?: () => void
  hoverColor?: ColorKeysType
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
