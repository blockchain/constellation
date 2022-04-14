import * as RadixSeparator from '@radix-ui/react-separator'
import React from 'react'
import { styled } from 'stitches-nonce/packages/react'

import { SeparatorComponentProps } from './types'

const StyledSeparator = styled(RadixSeparator.Root, {
  '&[data-orientation=horizontal]': { height: 1, margin: '24px 0', width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', margin: '0 24px', width: 1 },
  defaultVariants: {
    variant: 'medium',
  },
  variants: {
    variant: {
      distinct: {
        backgroundColor: '$grey300',
      },
      medium: {
        backgroundColor: '$grey200',
      },
      subtle: {
        backgroundColor: '$grey100',
      },
    },
  },
})

const Separator = ({ orientation = 'horizontal', ...props }: SeparatorComponentProps) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <StyledSeparator decorative orientation={orientation} {...props} />
)

export default React.memo(Separator)
