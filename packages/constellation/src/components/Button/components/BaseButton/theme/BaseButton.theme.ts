type ButtonSize = {
  fontSize: number
  fontWeight: number
  gap: number
  horizontalPadding: number
  iconSize: number
  lineHeight: number
  overlaySize: number
  verticalPadding: number
}

type BaseButtonTheme = {
  onClickTransformationDurationInMilliseconds: number

  overlay: {
    color: string
    transitionTimeInMilliseconds: number
  }
  sizes: {
    large: ButtonSize
    medium: ButtonSize
    small: ButtonSize
  }
}

export type { BaseButtonTheme }
