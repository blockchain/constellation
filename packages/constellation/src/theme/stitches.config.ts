import type * as StitchesTypes from '@stitches/react'
import { createStitches } from '@stitches/react'
import { colors } from 'colors'
import { createBaseThemeData } from 'theme/utils'

export const { config, createTheme, styled } = createStitches({
  media: {
    dark: '(prefers-color-scheme: dark)',
    hover: '(any-hover: hover)',
    laptop: '(min-width: 1023px)',
    light: '(prefers-color-scheme: light)',
    mobile: '(min-width: 479px)',
    motion: '(prefers-reduced-motion)',
    tablet: '(min-width: 767px)',
  },
  theme: createBaseThemeData({
    colors,
  }),
})

export type CSS = StitchesTypes.CSS<typeof config>
