import { FC } from 'react'

import { FontSettings } from '../../Font.types'

type CreateFontUtility = (settings: FontSettings) => {
  Provider: FC
}

export type { CreateFontUtility }
