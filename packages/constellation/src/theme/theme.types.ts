import { BaseButtonStyle, IconSizesType, PaddingProps, TextProps } from 'components'

type Theme = {
  background: {
    colors: {
      default: string
      light: string
    }
  }
  button: {
    minimal: {
      active: BaseButtonStyle
      default: BaseButtonStyle
      disabled: BaseButtonStyle
      focus: BaseButtonStyle
      hover: BaseButtonStyle
      loading: BaseButtonStyle
    }
    primary: {
      active: BaseButtonStyle
      default: BaseButtonStyle
      disabled: BaseButtonStyle
      focus: BaseButtonStyle
      hover: BaseButtonStyle
      loading: BaseButtonStyle
    }
    secondary: {
      active: BaseButtonStyle
      default: BaseButtonStyle
      disabled: BaseButtonStyle
      focus: BaseButtonStyle
      hover: BaseButtonStyle
      loading: BaseButtonStyle
    }
    sizes: {
      default: {
        borderRadius: number
        icon: {
          size: number | IconSizesType
        }
        loadingSpinner: {
          size: number | IconSizesType
        }
        padding: PaddingProps
        text: TextProps
      }
      large: {
        borderRadius: number
        icon: {
          size: number | IconSizesType
        }
        loadingSpinner: {
          size: number | IconSizesType
        }
        padding: PaddingProps
        text: TextProps
      }
      small: {
        borderRadius: number
        icon: {
          size: number | IconSizesType
        }
        loadingSpinner: {
          size: number | IconSizesType
        }
        padding: PaddingProps
        text: TextProps
      }
    }
  }
  clickableArea: {
    hover: {
      backgroundColor: string
    }
  }
  icon: {
    colors: {
      primary: string
    }
    sizes: {
      large: number
      medium: number
      small: number
    }
  }
  scrollArea: {
    backgroundColor: string
    shadowColor: { b: number; g: number; r: number }
  }
  separator: {
    colors: {
      default: string
    }
  }
  shape: {
    borderColor: {
      regular: string
    }
    borderRadius: {
      medium: number
    }
    borderWidth: {
      small: number
    }
    boxShadow: {
      elevation1: string
    }
  }
  text: {
    colors: {
      error: string
      info: string
      primary: string
      secondary: string
      success: string
      warning: string
    }
    loading: {
      backgroundColor: string
      borderRadius: number
      maxWidth: number
    }
    weights: {
      medium: number
      regular: number
      semibold: number
    }
  }
}

type IconColors<T extends Theme = Theme> = keyof T['icon']['colors']
type IconSizes<T extends Theme = Theme> = keyof T['icon']['sizes']

type TextColors<T extends Theme = Theme> = keyof T['text']['colors']
type TextWeights<T extends Theme = Theme> = keyof T['text']['weights']

type ButtonSizes<T extends Theme = Theme> = keyof T['button']['sizes']

export type { ButtonSizes, IconColors, IconSizes, TextColors, TextWeights, Theme }
