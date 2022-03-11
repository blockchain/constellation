import { ColorMode, createTheme } from '../../stitches.config'

type ThemeMode = 'auto' | ColorMode

type UseThemeMode = (mode: ThemeMode) => ReturnType<typeof createTheme>

export type { ThemeMode, UseThemeMode }
