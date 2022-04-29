import { useFontStyle } from 'components/Font'
import React from 'react'
import { CSS } from 'stitches-nonce/packages/react'

import { styled } from '../../stitches.config'
import {
  TextComponent,
  TextFontColor,
  TextFontSize,
  TextFontStyle,
  TextFontWeigth,
} from './Text.types'

const colorVariants: Record<TextFontColor, CSS> = {
  error: {
    color: '$red900',
  },
  info: {
    color: '$blue900',
  },
  primary: {
    color: '$grey900',
  },
  secondary: {
    color: '$grey600',
  },
  success: {
    color: '$green900',
  },
  warning: {
    color: '$orange900',
  },
}

const sizeVariants: Record<TextFontSize, CSS> = {
  '12': { fontSize: '12px', lineHeight: '20px' },
  '14': { fontSize: '14px', lineHeight: '22px' },
  '16': { fontSize: '16px', lineHeight: '24px' },
  '20': { fontSize: '20px', lineHeight: '28px' },
  '24': { fontSize: '24px', lineHeight: '32px' },
  '32': { fontSize: '32px', lineHeight: '40px' },
  '40': { fontSize: '40px', lineHeight: '48px' },
}

const weigthVariants: Record<TextFontWeigth, CSS> = {
  medium: {
    fontWeight: 500,
  },
  regular: {
    fontWeight: 400,
  },
  semibold: {
    fontWeight: 600,
  },
}

const styleVariants: Record<TextFontStyle, CSS> = {
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

const BaseText = styled('span', {
  color: 'primary',
  variants: {
    color: colorVariants,
    fontSize: sizeVariants,
    fontStyle: styleVariants,
    fontWeigth: weigthVariants,
  },
})

const Text: TextComponent = ({
  as = 'span',
  children,
  color = 'primary',
  ellipsis,
  fontSize,
  fontStyle = 'regular',
  fontWeigth = 'regular',
}) => {
  const fontStyles = useFontStyle()

  const text = (
    <BaseText
      as={as}
      color={color}
      fontSize={fontSize}
      fontWeigth={fontWeigth}
      fontStyle={fontStyle}
      css={{
        ...fontStyles,
      }}
    >
      {children}
    </BaseText>
  )

  if (ellipsis) {
    return (
      <div
        style={{
          display: 'block',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '100%',
        }}
      >
        {text}
      </div>
    )
  }

  return text
}

export default Text
