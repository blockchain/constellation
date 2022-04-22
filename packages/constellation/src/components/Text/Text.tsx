import React from 'react'
import { styled } from 'stitches-nonce/packages/react'

import { ColorKeysType } from '../../colors/types'
import { theme } from '../../stitches.config'
import { TextComponentProps } from './types'

const BaseText = styled('span', {
  color: '$grey800',
  fontFamily: '$inter',
  fontFeatureSettings: '"zero", "ss01"',
  variants: {
    color: Object.assign(
      {},
      ...Object.keys(theme.colors).map((color) => ({
        [color]: {
          color: theme.colors[color as ColorKeysType],
        },
      })),
    ),
    variant: {
      'body-1': {
        fontFeatureSettings: "'ss01' on, 'zero' on",
        fontSize: '$16',
        fontWeight: 500,
      },
      'body-2': {
        fontFeatureSettings: "'ss01' on, 'zero' on",
        fontSize: '$16',
        fontWeight: 600,
      },
      'body-mono': {
        fontFeatureSettings: "'tnum' on, 'lnum' on, 'zero' on, 'ss01' on",
        fontSize: '$16',
        fontWeight: 500,
      },
      'caption-1': {
        fontFeatureSettings: "'ss01' on, 'zero' on",
        fontSize: '$12',
        fontWeight: 500,
      },
      'caption-2': {
        fontFeatureSettings: "'zero' on, 'ss01' on",
        fontSize: '$12',
        fontWeight: 600,
      },
      display: {
        fontFeatureSettings: "'zero' on, 'ss01' on",
        fontSize: '$40',
        fontWeight: 600,
      },
      micro: {
        fontFeatureSettings: "'ss01' on, 'zero' on",
        fontSize: '$10',
        fontWeight: 500,
      },
      overline: {
        fontFeatureSettings: "'zero' on, 'ss01' on",
        fontSize: '$12',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      },
      'paragraph-1': {
        fontFeatureSettings: "'zero' on, 'ordn' on",
        fontSize: '$14',
        fontWeight: 500,
      },
      'paragraph-2': {
        fontFeatureSettings: "'zero' on, 'ss01' on",
        fontSize: '$14',
        fontWeight: 600,
      },
      'paragraph-mono': {
        fontFeatureSettings: "'tnum' on, 'lnum' on, 'zero' on, 'ss01' on",
        fontSize: '$14',
        fontWeight: 500,
      },
      subheading: {
        fontFeatureSettings: "'ss01' on, 'zero' on",
        fontSize: '$20',
        fontWeight: 500,
      },
      'title-1': {
        fontFeatureSettings: "'ss01' on, 'zero' on",
        fontSize: '$32',
        fontWeight: 600,
      },
      'title-2': {
        fontFeatureSettings: "'ss01' on, 'zero' on",
        fontSize: '$24',
        fontWeight: 600,
      },
      'title-3': {
        fontFeatureSettings: "'zero' on, 'ss01' on",
        fontSize: '$20',
        fontWeight: 600,
      },
    },
  },
})

const Text = ({
  as = 'span',
  children,
  color = 'grey800',
  variant = 'body-1',
  ...props
}: TextComponentProps) => (
  <BaseText as={as} color={color} variant={variant} {...props}>
    {children}
  </BaseText>
)

export default React.memo(Text)
