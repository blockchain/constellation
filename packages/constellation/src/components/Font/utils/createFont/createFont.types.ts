import { FontSettings } from 'components/Font/Font.types'
import { FC } from 'react'

type CreateFontUtility = (settings: FontSettings) => {
  Provider: FC
}

export type { CreateFontUtility }
