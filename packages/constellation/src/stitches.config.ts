import type * as StitchesTypes from '@stitches/react'
import { createStitches } from '@stitches/react'

import { colors } from './colors'

const { config, createTheme, css, getCssText, globalCss, keyframes, styled, theme } =
  createStitches({
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
        4: '4px',
        8: '8px',
        16: '16px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
        64: '64px',
        72: '64px',
        80: '80px',
      },
      space: {
        4: '4px',
        8: '8px',
        16: '16px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
        64: '64px',
        80: '80px',
        120: '120px',
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

enum ColorMode {
  DARK = 'dark',
  LIGHT = 'light',
}

const darkTheme = createTheme(ColorMode.DARK, {
  colors: {
    ...colors,
  },
  background: {
    main: colors.smoke900,
    distinct: colors.smoke600,
    medium: colors.smoke700,
    subtle: colors.smoke800
  },
  border: {
    subtle: colors.smoke700,
    medium: colors.smoke500,
    distinct: colors.smoke300,
    blue: colors.blue400,
    green: colors.green400,
    orange: colors.orange400,
    red: colors.red400
  },
  overlay: {
    main: colors.overlay600,
    light: colors.overlay400,
    dark: colors.overlay800
  },
  text: {
    primary: colors.white900,
    secondary: colors.smoke200,
    tertiary: colors.smoke400
  },
  bluePrimary: colors.blue400,
  greenPrimary: colors.green400,
  orangePrimary: colors.orange400,
  purplePrimary: colors.purple400,
  redPrimary: colors.red400,
  tealPrimary: colors.teal400,
  success: colors.green400,
  warning: colors.orange400,
  error: colors.red400
})

const lightTheme = createTheme(ColorMode.LIGHT, {
  colors: {
    ...colors,
  },
  background: {
    main: colors.white900,
    distinct: colors.grey300,
    medium: colors.grey100,
    subtle: colors.grey000
  },
  border: {
    subtle: colors.grey000,
    medium: colors.grey100,
    distinct: colors.grey300,
    blue: colors.blue600,
    green: colors.green600,
    orange: colors.orange600,
    red: colors.red600
  },
  overlay: {
    main: colors.overlay600,
    light: colors.overlay400,
    dark: colors.overlay800
  },
  text: {
    primary: colors.grey900,
    secondary: colors.grey800,
    tertiary: colors.grey400
  },
  bluePrimary: colors.blue600,
  greenPrimary: colors.green600,
  orangePrimary: colors.orange600,
  purplePrimary: colors.purple600,
  redPrimary: colors.red600,
  tealPrimary: colors.teal600,
  success: colors.green600,
  warning: colors.orange600,
  error: colors.red600
})

const themes = {
  [ColorMode.DARK]: darkTheme,
  [ColorMode.LIGHT]: lightTheme,
}

type CSS = StitchesTypes.CSS<typeof config>

export type { CSS }

export {
  ColorMode,
  config,
  createTheme,
  css,
  darkTheme,
  getCssText,
  globalCss,
  keyframes,
  lightTheme,
  styled,
  theme,
  themes,
}
