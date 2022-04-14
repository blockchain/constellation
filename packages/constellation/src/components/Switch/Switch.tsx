import * as RadixSwitch from '@radix-ui/react-switch'
import React from 'react'
import { styled } from 'stitches-nonce/packages/react'

import { SwitchComponentProps } from './types'

const StyledSwitch = styled(RadixSwitch.Root, {
  '&:hover': {
    cursor: 'pointer',
  },
  '&[data-disabled]': {
    '&:hover': {
      cursor: 'not-allowed',
    },
    opacity: 0.4,
  },
  all: 'unset',
  backgroundColor: '$grey300',
  borderRadius: '9999px',
  defaultVariants: {
    color: 'blue',
  },
  height: 24,
  position: 'relative',
  variants: {
    color: {
      blue: {
        '&[data-state="checked"]': { backgroundColor: '$blue600' },
      },
      green: {
        '&[data-state="checked"]': { backgroundColor: '$green600' },
      },
    },
  },
  width: 48,
})

const StyledThumb = styled(RadixSwitch.Thumb, {
  '&[data-state="checked"]': { transform: 'translateX(26px)' },
  backgroundColor: '$white900',
  borderRadius: '9999px',
  display: 'block',
  height: 20,
  transform: 'translateX(2px)',
  transition: 'transform 100ms',
  width: 20,
  willChange: 'transform',
})

const Switch = ({ checked = false, ...props }: SwitchComponentProps) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <StyledSwitch checked={checked} {...props}>
    <StyledThumb />
  </StyledSwitch>
)

export default React.memo(Switch)
