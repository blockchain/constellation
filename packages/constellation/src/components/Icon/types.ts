import { HTMLProps } from 'react'

import { ColorKeysType } from '../../colors/types'

export type IconSizesType = 'sm' | 'md' | 'lg'

export type IconComponentProps = Omit<HTMLProps<HTMLDivElement>, 'ref' | 'as' | 'css' | 'size'> & {
  children: JSX.Element
  color?: ColorKeysType
  label: string
  size?: IconSizesType
}
