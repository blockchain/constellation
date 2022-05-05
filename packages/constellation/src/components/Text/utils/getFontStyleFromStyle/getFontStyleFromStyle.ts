import { TextFontStyle } from 'components/Text/Text.types'
import { CSSProperties } from 'react'

import { GetFontStyleFromStyleUtility } from './getFontStyleFromStyle.types'

const stylesMap: Record<TextFontStyle, CSSProperties> = {
  italic: {
    fontFeatureSettings: "'zero' on, 'ss01' on",
    fontStyle: 'italic',
  },
  numeric: {
    fontFeatureSettings: "'tnum' on, 'lnum' on, 'zero' on, 'ss01' on",
    fontStyle: 'normal',
  },
  regular: {
    fontFeatureSettings: "'zero' on, 'ss01' on",
    fontStyle: 'normal',
  },
}

const getFontStyleFromStyle: GetFontStyleFromStyleUtility = ({ fontStyle }) => {
  return stylesMap[fontStyle]
}

export default getFontStyleFromStyle
