import { ColorMode, createTheme } from '../../stitches.config'

export type ThemeMode = 'auto' | ColorMode.LIGHT | ColorMode.DARK

export type UseThemeMode = (mode: ThemeMode) => ReturnType<typeof createTheme>
