import { SemanticColors } from 'components/Base/Colors'

const colorClasses: Record<SemanticColors, string> = {
  'var(--color-background)': 'text-background',
  'var(--color-background-blue)': 'text-background-blue',
  'var(--color-background-green)': 'text-background-green',
  'var(--color-background-light)': 'text-background-light',
  'var(--color-background-orange)': 'text-background-orange',
  'var(--color-background-red)': 'text-background-red',
  'var(--color-background-ultra-light)': 'text-background-ultra-light',
  'var(--color-body)': 'text-body',
  'var(--color-dark)': 'text-dark',
  'var(--color-error)': 'text-error',
  'var(--color-medium)': 'text-medium',
  'var(--color-muted)': 'text-muted',
  'var(--color-overlay)': 'text-overlay',
  'var(--color-primary)': 'text-primary',
  'var(--color-success)': 'text-success',
  'var(--color-title)': 'text-title',
  'var(--color-warning)': 'text-warning',
}

export const getTextColorClass = (color: SemanticColors): string => {
  return colorClasses[color]
}
