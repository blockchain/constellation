import { ColorKeysType } from '../../colors/types'

export type CopyToClipboardTypes = {
  customHandler?: () => void
  color?: ColorKeysType
  hoverColor?: ColorKeysType
  successColor?: ColorKeysType
  successHoverColor?: ColorKeysType
  value: string
}

export type IconProps = {
  color?: ColorKeysType
  hoverColor?: ColorKeysType
  light?: boolean
  successColor?: ColorKeysType
  successHoverColor?: ColorKeysType
  showSuccess: boolean
}
