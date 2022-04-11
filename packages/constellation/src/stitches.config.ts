import type * as StitchesTypes from 'stitches-nonce/packages/react'
import { createStitches } from 'stitches-nonce/packages/react'

import { colors } from './colors'

const { config, createTheme, css, getCssText, keyframes, styled, theme } = createStitches({
  media: {
    dark: '(prefers-color-scheme: dark)',
    hover: '(any-hover: hover)',
    laptop: '(min-width: 1023px)',
    light: '(prefers-color-scheme: light)',
    mobile: '(min-width: 479px)',
    motion: '(prefers-reduced-motion)',
    tablet: '(min-width: 767px)',
  },
  theme: {
    colors: {
      ...colors,
    },
    fontSizes: {
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      20: '20px',
      24: '24px',
      32: '32px',
      40: '40px',
    },
    fonts: {
      inter:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    radii: {
      1: '4px',
      2: '8px',
      3: '16px',
      pill: '20%',
      round: '50%',
    },
    sizes: {
      16: '16px',
      24: '24px',
      32: '32px',
      4: '4px',
      40: '40px',
      48: '48px',
      64: '64px',
      72: '64px',
      8: '8px',
      80: '80px',
    },
    space: {
      120: '120px',
      16: '16px',
      24: '24px',
      32: '32px',
      4: '4px',
      40: '40px',
      48: '48px',
      64: '64px',
      8: '8px',
      80: '80px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      6: '600',
      7: '700',
      8: '800',
      9: '900',
      max: '9999',
    },
  },
})

type ColorMode = 'light' | 'dark'

const darkTheme = createTheme('dark', {
  background: {
    distinct: colors.smoke600,
    main: colors.smoke900,
    medium: colors.smoke700,
    subtle: colors.smoke800,
  },
  blue: { main: colors.blue400 },
  border: {
    blue: colors.blue400,
    distinct: colors.smoke300,
    green: colors.green400,
    medium: colors.smoke500,
    orange: colors.orange400,
    red: colors.red400,
    subtle: colors.smoke700,
  },
  colors: {
    ...colors,
  },
  error: { main: colors.red400 },
  green: { main: colors.green400 },
  orange: { main: colors.orange400 },
  overlay: {
    dark: colors.overlay800,
    light: colors.overlay400,
    main: colors.overlay600,
  },
  purple: { main: colors.purple400 },
  red: { main: colors.red400 },
  success: { main: colors.green400 },
  teal: { main: colors.teal400 },
  text: {
    primary: colors.white900,
    secondary: colors.smoke200,
    tertiary: colors.smoke400,
  },
  warning: { main: colors.orange400 },
})

const lightTheme = createTheme('light', {
  background: {
    distinct: colors.grey300,
    main: colors.white900,
    medium: colors.grey100,
    subtle: colors.grey000,
  },
  blue: { main: colors.blue600 },
  border: {
    blue: colors.blue600,
    distinct: colors.grey300,
    green: colors.green600,
    medium: colors.grey100,
    orange: colors.orange600,
    red: colors.red600,
    subtle: colors.grey000,
  },
  colors: {
    ...colors,
  },
  error: { main: colors.red600 },
  green: { main: colors.green600 },
  orange: { main: colors.orange600 },
  overlay: {
    dark: colors.overlay800,
    light: colors.overlay400,
    main: colors.overlay600,
  },
  purple: { main: colors.purple600 },
  red: { main: colors.red600 },
  success: { main: colors.green600 },
  teal: { main: colors.teal600 },
  text: {
    primary: colors.grey900,
    secondary: colors.grey800,
    tertiary: colors.grey400,
  },
  warning: { main: colors.orange600 },
})

const themes = {
  dark: darkTheme,
  light: lightTheme,
}

type CSS = StitchesTypes.CSS<typeof config>

export type { ColorMode, CSS }

export {
  config,
  createTheme,
  css,
  darkTheme,
  getCssText,
  keyframes,
  lightTheme,
  styled,
  theme,
  themes,
}
