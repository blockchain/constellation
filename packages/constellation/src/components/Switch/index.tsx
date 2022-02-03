import * as RadixSwitch from '@radix-ui/react-switch'
import { styled } from '@stitches/react'
import React from 'react'

import { colors } from '../../colors'
import { SwitchComponentProps } from './types'

// https://www.radix-ui.com/docs/primitives/components/switch

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
const StyledSwitch = styled(RadixSwitch.Root, {
  all: 'unset',
  height: 24,
  width: 48,
  position: 'relative',
  backgroundColor: colors.grey300,
  borderRadius: '9999px',
  '&[data-disabled]': {
    opacity: 0.4,
    '&:hover': {
      cursor: 'not-allowed',
    },
  },
  variants: {
    color: {
      blue: {
        '&[data-state="checked"]': { backgroundColor: colors.blue600 },
      },
      green: {
        '&[data-state="checked"]': { backgroundColor: colors.green600 },
      },
    },
  },
  defaultVariants: {
    color: 'blue',
  },
})

const StyledThumb = styled(RadixSwitch.Thumb, {
  display: 'block',
  height: 20,
  width: 20,
  backgroundColor: 'white', // TODO: dark mode needs to be black
  borderRadius: '9999px',
  transform: 'translateX(2px)',
  transition: 'transform 100ms',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(26px)' },
})
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

const Switch = ({ checked = false, ...props }: SwitchComponentProps) => (
  <StyledSwitch checked={checked} {...props}>
    <StyledThumb />
  </StyledSwitch>
)

export default React.memo(Switch)
