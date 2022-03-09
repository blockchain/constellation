import { colors } from 'colors'
import { createTheme } from 'theme/stitches.config'

import { CreateLightTheme } from './types'

export const createLightTheme: CreateLightTheme = () =>
  createTheme('light-theme', {
    colors,
  })
