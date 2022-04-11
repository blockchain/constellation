import * as RadixSeparator from '@radix-ui/react-separator'
import React from 'react'
import { styled } from 'stitches-nonce/packages/react'

import { SeparatorComponentProps } from './types'

// https://www.radix-ui.com/docs/primitives/components/separator

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
const StyledSeparator = styled(RadixSeparator.Root, {
  '&[data-orientation=horizontal]': { height: 1, width: '100%', margin: '24px 0' },
  '&[data-orientation=vertical]': { height: '100%', width: 1, margin: '0 24px' },
  variants: {
    variant: {
      subtle: {
        backgroundColor: '$grey100',
      },
      medium: {
        backgroundColor: '$grey200',
      },
      distinct: {
        backgroundColor: '$grey300',
      },
    },
  },
  defaultVariants: {
    variant: 'medium',
  },
})
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

const Separator = ({ orientation = 'horizontal', ...props }: SeparatorComponentProps) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <StyledSeparator decorative orientation={orientation} {...props} />
)

export default React.memo(Separator)
