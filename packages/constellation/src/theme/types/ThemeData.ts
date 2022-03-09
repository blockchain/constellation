import { ConfigType } from '@stitches/react/types/config'
import { Colors } from 'colors'
import { CSSProperties } from 'react'

export type ThemeData = ConfigType.Theme<{
  colors: Colors
  fontSizes: {
    10: CSSProperties['fontSize']
    12: CSSProperties['fontSize']
    14: CSSProperties['fontSize']
    16: CSSProperties['fontSize']
    20: CSSProperties['fontSize']
    24: CSSProperties['fontSize']
    32: CSSProperties['fontSize']
    40: CSSProperties['fontSize']
  }
}>
