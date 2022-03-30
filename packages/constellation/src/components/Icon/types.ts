import { ColorKeysType } from '../../colors/types'

export type IconSizesType = 'sm' | 'md' | 'lg'

export type IconComponentProps = {
  children: JSX.Element
  color?: ColorKeysType
  label: string
  size?: IconSizesType
}
