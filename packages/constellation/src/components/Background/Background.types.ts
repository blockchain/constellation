import { FC } from 'react'
import { Theme } from 'theme'
import { LiteralStringUnion } from 'utils/LiteralUnion'

type BackgroundProps = {
  color?: LiteralStringUnion<keyof Theme['background']['colors']>
}

type BackgroundComponent = FC<BackgroundProps>

export type { BackgroundComponent, BackgroundProps }
