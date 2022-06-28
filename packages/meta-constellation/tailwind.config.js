/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable sort-keys */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const radix = require('tailwindcss-radix')()

module.exports = {
  content: ['./src/**/*.{ts,js,tsx,jsx}'],
  plugins: [
    radix,
    plugin(({ addVariant }) => {
      addVariant('theme-dark', '.theme-dark &')
      addVariant('theme-light', '.theme-light &')
    }),
  ],
  theme: {
    colors: {
      // semantic colors
      title: 'var(--color-title)',
      body: 'var(--color-body)',
      overlay: 'var(--color-overlay)',
      muted: 'var(--color-muted)',
      medium: 'var(--color-medium)',
      primary: 'var(--color-primary)',
      success: 'var(--color-success)',
      warning: 'var(--color-warning)',
      error: 'var(--color-error)',
      background: 'var(--color-background)',
      'background-dark': 'var(--color-dark)',
      'background-light': 'var(--color-background-light)',
      'background-blue': 'var(--color-background-blue)',
      'background-green': 'var(--color-background-green)',
      'background-red': 'var(--color-background-red)',
      'background-orange': 'var(--color-background-orange)',

      'overlay-dark': {
        '000': 'var(--color-overlay-dark-000)',
        100: 'var(--color-overlay-dark-100)',
        200: 'var(--color-overlay-dark-200)',
        400: 'var(--color-overlay-dark-400)',
        600: 'var(--color-overlay-dark-600)',
        800: 'var(--color-overlay-dark-800)',
      },
      'overlay-light': {
        '060': 'var(--color-overlay-light-060)',
        100: 'var(--color-overlay-light-100)',
        200: 'var(--color-overlay-light-200)',
        400: 'var(--color-overlay-light-400)',
        600: 'var(--color-overlay-light-600)',
        800: 'var(--color-overlay-light-800)',
        900: 'var(--color-overlay-light-900)',
      },
      blue: {
        '000': 'var(--color-blue-000)',
        100: 'var(--color-blue-100)',
        200: 'var(--color-blue-200)',
        300: 'var(--color-blue-300)',
        400: 'var(--color-blue-400)',
        500: 'var(--color-blue-500)',
        600: 'var(--color-blue-600)',
        700: 'var(--color-blue-700)',
        800: 'var(--color-blue-800)',
        900: 'var(--color-blue-900)',
      },
      green: {
        '000': 'var(--color-green-000)',
        100: 'var(--color-green-100)',
        200: 'var(--color-green-200)',
        300: 'var(--color-green-300)',
        400: 'var(--color-green-400)',
        500: 'var(--color-green-500)',
        600: 'var(--color-green-600)',
        700: 'var(--color-green-700)',
        800: 'var(--color-green-800)',
        900: 'var(--color-green-900)',
      },
      red: {
        '000': 'var(--color-red-000)',
        100: 'var(--color-red-100)',
        200: 'var(--color-red-200)',
        300: 'var(--color-red-300)',
        400: 'var(--color-red-400)',
        500: 'var(--color-red-500)',
        600: 'var(--color-red-600)',
        700: 'var(--color-red-700)',
        800: 'var(--color-red-800)',
        900: 'var(--color-red-900)',
      },
      orange: {
        '000': 'var(--color-orange-000)',
        100: 'var(--color-orange-100)',
        200: 'var(--color-orange-200)',
        300: 'var(--color-orange-300)',
        400: 'var(--color-orange-400)',
        500: 'var(--color-orange-500)',
        600: 'var(--color-orange-600)',
        700: 'var(--color-orange-700)',
        800: 'var(--color-orange-800)',
        900: 'var(--color-orange-900)',
      },
      purple: {
        '000': 'var(--color-purple-000)',
        100: 'var(--color-purple-100)',
        200: 'var(--color-purple-200)',
        300: 'var(--color-purple-300)',
        400: 'var(--color-purple-400)',
        500: 'var(--color-purple-500)',
        600: 'var(--color-purple-600)',
        700: 'var(--color-purple-700)',
        800: 'var(--color-purple-800)',
        900: 'var(--color-purple-900)',
      },
      teal: {
        '000': 'var(--color-teal-000)',
        100: 'var(--color-teal-100)',
        200: 'var(--color-teal-200)',
        300: 'var(--color-teal-300)',
        400: 'var(--color-teal-400)',
        500: 'var(--color-teal-500)',
        600: 'var(--color-teal-600)',
        700: 'var(--color-teal-700)',
        800: 'var(--color-teal-800)',
        900: 'var(--color-teal-900)',
      },
      grey: {
        '000': 'var(--color-grey-000)',
        100: 'var(--color-grey-100)',
        200: 'var(--color-grey-200)',
        300: 'var(--color-grey-300)',
        400: 'var(--color-grey-400)',
        500: 'var(--color-grey-500)',
        600: 'var(--color-grey-600)',
        700: 'var(--color-grey-700)',
        800: 'var(--color-grey-800)',
        900: 'var(--color-grey-900)',
      },
      dark: {
        '000': 'var(--color-dark-000)',
        100: 'var(--color-dark-100)',
        200: 'var(--color-dark-200)',
        300: 'var(--color-dark-300)',
        400: 'var(--color-dark-400)',
        500: 'var(--color-dark-500)',
        600: 'var(--color-dark-600)',
        700: 'var(--color-dark-700)',
        800: 'var(--color-dark-800)',
        900: 'var(--color-dark-900)',
      },
      tiers: {
        silver: 'var(--color-tiers-silver)',
        gold: 'var(--color-tiers-gold)',
      },

      extend: {
        dropShadow: {
          control: ['var(--color-shadow-control)', 'var(--color-shadow-control-sm)'],
        },
      },
    },
  },
}
