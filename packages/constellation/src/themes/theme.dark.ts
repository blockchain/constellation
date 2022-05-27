import {
  iconDarkTheme,
  minimalDarkButtonTheme,
  primaryDarkButtonTheme,
  secondaryDarkButtonTheme,
  separatorDarkTheme,
  shapeDarkTheme,
  switchDarkTheme,
  textDarkTheme,
} from 'components'
import baseButtonDefaultTheme from 'components/Button/components/BaseButton/theme/BaseButton.default'
import { linkDarkButtonTheme } from 'components/Button/components/LinkButton'
import { DefaultTheme } from 'styled-components'
import { lightTheme } from 'themes'

const darkTheme: DefaultTheme = {
  ...lightTheme,
  baseButton: baseButtonDefaultTheme,
  icon: iconDarkTheme,
  linkButton: linkDarkButtonTheme,
  minimalButton: minimalDarkButtonTheme,
  primaryButton: primaryDarkButtonTheme,
  secondaryButton: secondaryDarkButtonTheme,
  separator: separatorDarkTheme,
  shape: shapeDarkTheme,
  switch: switchDarkTheme,
  text: textDarkTheme,
}

export { darkTheme }
