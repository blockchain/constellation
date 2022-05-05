import { useFontStyle } from 'components/Font'
import React, { CSSProperties, useMemo } from 'react'
import { isTextColor, useTheme } from 'theme'

import { Ellipsis, LoadingText } from './compnents'
import { TextComponent } from './Text.types'
import { getFontSizeStyleFromSize, getFontStyleFromStyle } from './utils'
import getTextElementBuilder from './utils/getTextElementBuilder/getTextElementBuilder'

const Text: TextComponent = ({
  as = 'span',
  children,
  color = 'primary',
  ellipsis,
  fontSize = 1,
  fontStyle = 'regular',
  fontWeigth = 'regular',
  isLoading,
  lineHeight,
  textAlign,
  ...props
}) => {
  const fontStyles = useFontStyle()
  const theme = useTheme()

  const textColor = useMemo(
    () => (isTextColor(color) ? theme.text.colors[color] : color),
    [color, theme],
  )

  const textWeight = useMemo(() => theme.text.weights[fontWeigth], [theme, fontWeigth])
  const textStyle = useMemo(() => getFontStyleFromStyle({ fontStyle }), [fontStyle])

  const textSize = useMemo(
    () => getFontSizeStyleFromSize({ fontSize, lineHeight }),
    [fontSize, lineHeight],
  )
  const style: CSSProperties = useMemo(
    () => ({
      ...textStyle,
      ...fontStyles,
      ...textSize,
      color: textColor,
      fontWeight: textWeight,
      textAlign,
    }),
    [textColor, textWeight, textSize, textStyle, fontStyles, textAlign],
  )

  const TextElement = useMemo(() => getTextElementBuilder({ as }), [as])

  if (isLoading) {
    return (
      <TextElement style={style} {...props}>
        <LoadingText />
      </TextElement>
    )
  }

  const text = (
    <TextElement style={style} {...props}>
      {children}
    </TextElement>
  )

  if (ellipsis) {
    return <Ellipsis>{text}</Ellipsis>
  }

  return text
}

export default Text
