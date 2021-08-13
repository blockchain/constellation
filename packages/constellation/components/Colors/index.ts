import { DefaultTheme } from 'styled-components'

import DarkMode from './DarkMode'
import Default from './Default'

const Color = (color: string, theme: string) => {
  switch (theme) {
    case 'default':
      return Default[color]
    case 'darkmode':
      return DarkMode[color]

    default:
      return Default[color]
  }
}

const Palette = (theme: string): DefaultTheme => {
  switch (theme) {
    case 'default':
      return Default
    case 'darkmode':
      return DarkMode
    default:
      return Default
  }
}

export { Color, Palette }
