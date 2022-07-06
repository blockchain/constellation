import { createContext } from 'react'

import { FontSettings } from './Font.types'

const fontContext = createContext<FontSettings>({} as FontSettings)

export { fontContext }
