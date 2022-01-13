import { HTMLProps } from 'react'

import { ColorKeysType } from '../../colors/types'
import { IconName } from '../Icon'
import { IconSizes } from '../Icon/types'

type WrappedIconProps = Omit<HTMLProps<HTMLSpanElement>, 'ref' | 'as' | 'size'> & {
  bgColor?: ColorKeysType
  color?: ColorKeysType
  name: IconName
  shape?: 'circle' | 'square'
  size?: IconSizes
}

export type { WrappedIconProps }
