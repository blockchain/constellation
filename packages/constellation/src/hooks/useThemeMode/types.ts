import { Theme } from 'theme'

type ThemeMode = 'auto' | 'dark' | 'light'

type UseThemeMode = (mode: ThemeMode) => Theme

export type { ThemeMode, UseThemeMode }
