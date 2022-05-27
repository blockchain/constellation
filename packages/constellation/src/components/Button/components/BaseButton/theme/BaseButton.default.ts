import { colors } from '../../../../../colors'
import { BaseButtonTheme } from './BaseButton.theme'

const baseButtonDefaultTheme: BaseButtonTheme = {
  onClickTransformationDurationInMilliseconds: 300,

  overlay: {
    color: colors.white800,
    transitionTimeInMilliseconds: 300,
  },

  sizes: {
    large: {
      fontSize: 1.25,
      fontWeight: 600,
      gap: 0.5,
      horizontalPadding: 2.5,
      iconSize: 2.25,
      lineHeight: 1.875,
      overlaySize: 1.5,
      verticalPadding: 1,
    },
    medium: {
      fontSize: 1,
      fontWeight: 600,
      gap: 0.5,
      horizontalPadding: 1.5,
      iconSize: 1.5,
      lineHeight: 1.5,
      overlaySize: 1.5,
      verticalPadding: 0.75,
    },
    small: {
      fontSize: 0.875,
      fontWeight: 600,
      gap: 0.5,
      horizontalPadding: 0.75,
      iconSize: 1,
      lineHeight: 1.25,
      overlaySize: 1,
      verticalPadding: 0.375,
    },
  },
}

export default baseButtonDefaultTheme
