import { createTheme } from '../../stitches.config'

export type ThemeMode = 'auto' | 'light' | 'dark'

export type UseThemeMode = (mode: ThemeMode) => ReturnType<typeof createTheme>
