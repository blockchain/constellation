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

enum ColorMode {
  DARK = 'dark',
  LIGHT = 'light',
}

const darkTheme = createTheme(ColorMode.DARK, {
  colors: {
    ...colors,
  },
  common: { black: '', white: '' },
  error: {
    contrastText: '',
    dark: '',
    light: '',
    main: '',
  },
  info: {
    contrastText: '',
    dark: '',
    light: '',
    main: '',
  },
  primary: {
    contrastText: '',
    dark: '',
    light: '',
    main: '',
  },
  secondary: {
    contrastText: '',
    dark: '',
    light: '',
    main: '',
  },
  success: {
    contrastText: '',
    dark: '',
    light: '',
    main: '',
  },
  text: { disabled: '', primary: '', secondary: '' },
  warning: {
    contrastText: '',
    dark: '',
    light: '',
    main: '',
  },
})

const lightTheme = createTheme(ColorMode.LIGHT, {
  colors: {
    ...colors,
  },
  common: { black: '', white: '' },
  error: {
    contrastText: '',
    dark: '',
    light: '',
    main: '',
  },
  info: {
    contrastText: '',
    dark: '',
    light: '',
    main: '',
  },
  primary: {
    contrastText: '',
    dark: '',
    light: '',
    main: '',
  },
  secondary: {
    contrastText: '',
    dark: '',
    light: '',
    main: '',
  },
  success: {
    contrastText: '',
    dark: '',
    light: '',
    main: '',
  },
  text: { disabled: '', primary: '', secondary: '' },
  warning: {
    contrastText: '',
    dark: '',
    light: '',
    main: '',
  },
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
