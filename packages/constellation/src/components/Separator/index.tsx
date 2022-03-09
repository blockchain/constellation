import { Root } from '@radix-ui/react-separator'
import { styled } from '@stitches/react'
import React from 'react'

import { SeparatorComponent } from './types'

// https://www.radix-ui.com/docs/primitives/components/separator

const StyledSeparator = styled(Root, {
  '&[data-orientation=horizontal]': { height: 1, margin: '24px 0', width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', margin: '0 24px', width: 1 },
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: {
        backgroundColor: '$separator.colors.medium',
      },
      distinct: {
        backgroundColor: '$separator.colors.distict',
      },
      subtle: {
        backgroundColor: '$separator.colors.subtle',
      },
    },
  },
})

const Separator: SeparatorComponent = ({ orientation = 'horizontal', variant = 'default' }) => (
  <StyledSeparator decorative orientation={orientation} variant={variant} />
)

export default React.memo(Separator)
