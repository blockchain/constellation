import { CSS, styled } from '@stitches/react'
import React from 'react'

import { TextSize, TextWeigth } from '.'
import { TextColor, TextComponent, TextStyle } from './types'

const colorVariants: Record<TextColor, CSS> = {
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

const sizeVariants: Record<TextSize, CSS> = {
  '12': { fontSize: '12px', lineHeight: '20px' },
  '14': { fontSize: '14px', lineHeight: '22px' },
  '16': { fontSize: '16px', lineHeight: '24px' },
  '20': { fontSize: '20px', lineHeight: '28px' },
  '24': { fontSize: '24px', lineHeight: '32px' },
  '32': { fontSize: '32px', lineHeight: '40px' },
  '40': { fontSize: '40px', lineHeight: '48px' },
}

const weigthVariants: Record<TextWeigth, CSS> = {
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

const styleVariants: Record<TextStyle, CSS> = {
  italic: {
    fontFeatureSettings: "'zero' on, 'ss01' on",
    fontStyle: 'italic',
  },
  normal: {
    fontFeatureSettings: "'zero' on, 'ss01' on",
    fontStyle: 'normal',
  },
  numeric: {
    fontFeatureSettings: "'tnum' on, 'lnum' on, 'zero' on, 'ss01' on",
    fontStyle: 'normal',
  },
}

const BaseText = styled('span', {
  color: 'primary',
  variants: {
    color: colorVariants,
    size: sizeVariants,
    style: styleVariants,
    weigth: weigthVariants,
  },
})

export const Text: TextComponent = ({
  as = 'span',
  children,
  color = 'primary',
  ellipsis,
  fontSize,
  fontStyle = 'normal',
  fontWeigth = 'regular',
}) => {
  const text = (
    <BaseText as={as} color={color} size={fontSize} weigth={fontWeigth} style={fontStyle}>
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
