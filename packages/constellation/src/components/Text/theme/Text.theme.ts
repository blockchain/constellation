type TextTheme = {
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

export type { TextTheme }
