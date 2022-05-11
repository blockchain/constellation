import * as RadixSwitch from '@radix-ui/react-switch'
import React from 'react'
import styled, { css } from 'styled-components'

const StyledSwitch = styled(
  ({
    backgroundColor,
    height,
    width,
    ...props
  }: {
    backgroundColor: string
    height: number
    width: number
  } & RadixSwitch.SwitchProps) => <RadixSwitch.Root {...props} />,
)`
  ${({ backgroundColor, height, theme, width }) => css`
    all: unset;
    background-color: ${backgroundColor};
    border-radius: 9999px;
    position: relative;
    width: ${width}rem;
    height: ${height}rem;

    &:hover {
      cursor: pointer;
    }

    &[data-disabled] {
      background-color: ${theme.switch.disabled.backgroundColor};

      &:hover: {
        cursor: not-allowed;
      }
    }
  `}
`

const StyledThumb = styled(
  ({ backgroundColor, size, ...props }: { backgroundColor: string; size: number }) => (
    <RadixSwitch.Thumb {...props} />
  ),
)`
  ${({ backgroundColor, size, theme }) => css`
    display: block;
    height: ${size}rem;
    width: ${size}rem;
    border-radius: ${size / 2}rem;
    background-color: ${backgroundColor};
    transform: translateX(2px);
    transition: transform 100ms;
    will-change: transform;

    &[data-state='checked'] {
      transform: translateX(26px);
    }

    &[data-disabled] {
      background-color: ${theme.switch.disabled.thumbColor};
    }
  `}
`

export { StyledSwitch, StyledThumb }
