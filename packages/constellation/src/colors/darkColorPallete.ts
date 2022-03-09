import { defaultColorPallete } from './defaultColorPallete'
import greyDark from './palettes/greyDark'
import whiteDark from './palettes/whiteDark'
import { Colors } from './types'

export const darkColorPallete: Colors = {
  ...defaultColorPallete,
  ...greyDark,
  ...whiteDark,
}
