import { colorsDark } from 'colors'
import { createTheme } from 'theme/stitches.config'

import { CreateDarkTheme } from './types'

export const createDarkTheme: CreateDarkTheme = () =>
  createTheme('dark-theme', {
    colors: colorsDark,
  })
