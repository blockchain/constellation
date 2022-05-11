import { useFont } from 'components/Font'
import React from 'react'

import { BaseText, BaseTextProps, Ellipsis, LoadingText } from './components'
import { TextComponent } from './Text.types'

const Text: TextComponent = ({
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
  const { fontStyles, style } = useFont()

  const textProps: BaseTextProps = {
    color,
    fontSize,
    fontWeigth,
    lineHeight,
    textAlign,
  }

  const finalFontStyle = {
    ...style,
    ...fontStyles[fontStyle],
  }

  if (isLoading) {
    return (
      <BaseText {...textProps} {...props} style={finalFontStyle}>
        <LoadingText />
      </BaseText>
    )
  }

  const text = (
    <BaseText {...textProps} {...props} style={finalFontStyle}>
      {children}
    </BaseText>
  )

  if (ellipsis) {
    return <Ellipsis>{text}</Ellipsis>
  }

  return text
}

export default Text
