import {
  iconLightTheme,
  minimalLightButtonTheme,
  primaryLightButtonTheme,
  secondaryDarkButtonTheme,
  separatorLightTheme,
  shapeLightTheme,
  switchLightTheme,
  textLightTheme,
} from 'components'
import baseButtonDefaultTheme from 'components/Button/components/BaseButton/theme/BaseButton.default'
import { linkLightButtonTheme } from 'components/Button/components/LinkButton'
import { DefaultTheme } from 'styled-components'

const lightTheme: DefaultTheme = {
  baseButton: baseButtonDefaultTheme,
  icon: iconLightTheme,
  linkButton: linkLightButtonTheme,
  minimalButton: minimalLightButtonTheme,
  primaryButton: primaryLightButtonTheme,
  secondaryButton: secondaryDarkButtonTheme,
  separator: separatorLightTheme,
  shape: shapeLightTheme,
  switch: switchLightTheme,
  text: textLightTheme,
}

export { lightTheme }
