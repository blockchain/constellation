import { Theme } from 'theme'

type ThemeMode = 'auto' | 'light' | 'dark'

type ThemeModeHook = (mode: ThemeMode) => Theme

export type { ThemeMode, ThemeModeHook }
