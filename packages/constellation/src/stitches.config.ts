import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

import { colors } from './colors'

/* eslint-disable */
export const { config, createTheme, css, getCssText, globalCss, keyframes, styled, theme } =
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
        max: '999',
      },
    }
  })

export const darkTheme = createTheme('dark-theme', {
  color: {
    ...colors,
  },
})

// https://stitches.dev/docs/styling#font-face-rules
export const setGlobalCss = globalCss({
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video": {
    margin: "0",
    padding: "0",
    border: "0",
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    'font-feature-settings': '"zero", "ss01"'
  },
  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section": {
    display: "block",
  },
  "*[hidden]": {
    display: "none",
  },
  body: {
    lineHeight: "1",
  },
  "ol, ul": {
    listStyle: "none",
  },
  "blockquote, q": {
    quotes: "none",
  },
  "blockquote:before, blockquote:after, q:before, q:after": {
    content: "",
    // @ts-ignore
    content: "none",
  },
  table: {
    borderSpacing: "0",
  },
})

/* eslint-enable */

export type CSS = Stitches.CSS<typeof config>
