import * as RadixSeparator from '@radix-ui/react-separator'
import { styled } from '@stitches/react'
import React from 'react'

import { colors } from '../../colors'
import { SeparatorComponentProps } from './types'

// https://www.radix-ui.com/docs/primitives/components/separator

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
const StyledSeparator = styled(RadixSeparator.Root, {
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
  variants: {
    variant: {
      subtle: {
        backgroundColor: colors.grey100,
      },
      medium: {
        backgroundColor: colors.grey0,
      },
      distinct: {
        backgroundColor: colors.grey300,
      },
    },
  },
  defaultVariants: {
    variant: 'medium',
  },
})
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

const Separator = ({ orientation = 'horizontal', ...props }: SeparatorComponentProps) => (
  <StyledSeparator decorative orientation={orientation} {...props} />
)

export default React.memo(Separator)
