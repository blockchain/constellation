import { Theme } from '../../theme.types'

type ThemeSelectorUtility<T extends { [key: string]: unknown }> = (theme: Theme) => T

export type { ThemeSelectorUtility }
