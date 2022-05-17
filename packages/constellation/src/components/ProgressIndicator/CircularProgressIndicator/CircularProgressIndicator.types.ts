import { FC } from 'react'
import { LiteralStringUnion } from 'utils'

import { ProgressIndicatorTheme } from '../theme'

type CircularProgressIndicatorProps = {
  color?: LiteralStringUnion<keyof ProgressIndicatorTheme['colors']>
  size?: number
}

type CircularProgressIndicatorComponent = FC<CircularProgressIndicatorProps>

export type { CircularProgressIndicatorComponent, CircularProgressIndicatorProps }
