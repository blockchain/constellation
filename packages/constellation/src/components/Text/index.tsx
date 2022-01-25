import React from 'react'

import { colors } from '../../colors'
import { ColorKeysType } from '../../colors/types'
import { styled } from '../../stitches.config'
import { TextProps } from './types'

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
const BaseText = styled('span', {
  variants: {
    color: Object.assign(
      {},
      ...Object.keys(colors).map((color) => ({
        [color]: {
          color: colors[color as ColorKeysType],
        },
      })),
    ),
    variant: {
      display: {
        fontSize: '$40',
        fontWeight: 600,
        fontFeatureSettings: "'zero' on, 'ss01' on",
      },
      'title-1': {
        fontSize: '$32',
        fontWeight: 600,
        fontFeatureSettings: "'ss01' on, 'zero' on",
      },
      'title-2': {
        fontSize: '$24',
        fontWeight: 600,
        fontFeatureSettings: "'ss01' on, 'zero' on",
      },
      'title-3': {
        fontSize: '$20',
        fontWeight: 600,
        fontFeatureSettings: "'zero' on, 'ss01' on",
      },
      subheading: {
        fontSize: '$20',
        fontWeight: 500,
        fontFeatureSettings: "'ss01' on, 'zero' on",
      },
      'body-mono': {
        fontSize: '$16',
        fontWeight: 500,
        fontFeatureSettings: "'tnum' on, 'lnum' on, 'zero' on, 'ss01' on",
      },
      'body-1': {
        fontSize: '$16',
        fontWeight: 500,
        fontFeatureSettings: "'ss01' on, 'zero' on",
      },
      'body-2': {
        fontSize: '$16',
        fontWeight: 600,
        fontFeatureSettings: "'ss01' on, 'zero' on",
      },
      'paragraph-mono': {
        fontSize: '$14',
        fontWeight: 500,
        fontFeatureSettings: "'tnum' on, 'lnum' on, 'zero' on, 'ss01' on",
      },
      'paragraph-1': {
        fontSize: '$14',
        fontWeight: 500,
        fontFeatureSettings: "'zero' on, 'ordn' on",
      },
      'paragraph-2': {
        fontSize: '$14',
        fontWeight: 600,
        fontFeatureSettings: "'zero' on, 'ss01' on",
      },
      'caption-1': {
        fontSize: '$12',
        fontWeight: 500,
        fontFeatureSettings: "'ss01' on, 'zero' on",
      },
      'caption-2': {
        fontSize: '$12',
        fontWeight: 600,
        fontFeatureSettings: "'zero' on, 'ss01' on",
      },
      overline: {
        fontSize: '$12',
        fontWeight: 600,
        fontFeatureSettings: "'zero' on, 'ss01' on",
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      },
      micro: {
        fontSize: '$10',
        fontWeight: 500,
        fontFeatureSettings: "'ss01' on, 'zero' on",
      },
    },
  },
  defaultVariants: {
    variant: 'body-1',
  },
})
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

const Text = ({ as = 'span', children, color = 'grey800', css, variant, ...props }: TextProps) => (
  <BaseText as={as} css={css} color={color} variant={variant} {...props}>
    {children}
  </BaseText>
)

export default Text
