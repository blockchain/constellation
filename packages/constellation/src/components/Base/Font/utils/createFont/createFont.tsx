import React from 'react'

import { fontContext } from '../../Font.context'
import { CreateFontUtility } from './createFont.types'

const createFont: CreateFontUtility = (css) => {
  const { Provider } = fontContext

  return {
    Provider: ({ children }) => <Provider value={css}>{children}</Provider>,
  }
}

export default createFont
