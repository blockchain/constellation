import { GetFontSizeStyleFromSizeUtility } from './getFontSizeStyleFromSize.types'

const getFontSizeStyleFromSize: GetFontSizeStyleFromSizeUtility = ({ fontSize, lineHeight }) => {
  return {
    fontSize: `${fontSize}rem`,
    lineHeight: lineHeight ? `${lineHeight}rem` : `${fontSize * 1.5}rem`,
  }
}

export default getFontSizeStyleFromSize
