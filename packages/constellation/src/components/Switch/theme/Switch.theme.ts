type SwitchColorConfig = {
  backgroundColor: string
  thumbColor: string
}

type SwitchSizeConfig = {
  height: number
  thumbSize: number
  width: number
}

type SwitchTheme = {
  colors: {
    primary: SwitchColorConfig
    secondary: SwitchColorConfig
  }
  disabled: SwitchColorConfig
  sizes: {
    default: SwitchSizeConfig
  }
}

export type { SwitchTheme }
