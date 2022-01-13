import React from 'react'
import styled, { css } from 'styled-components'

import { colors } from '../../colors'
import Icon, { iconSizes } from '../Icon'
import { WrappedIconProps } from './types'

const defaultColor = 'dark800'

const defaultSize = 'md'

const IconWrapper = styled.span<{
  $bgColor: WrappedIconProps['bgColor']
  $shape: WrappedIconProps['shape']
  $size: WrappedIconProps['size']
}>`
  background-color: ${(props) => (props.$bgColor ? colors[props.$bgColor] : colors[defaultColor])};

  width: ${(props) => (props.$size ? iconSizes[props.$size] : iconSizes[defaultSize])}px;
  height: ${(props) => (props.$size ? iconSizes[props.$size] : iconSizes[defaultSize])}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  ${(props) =>
    props.$shape === 'circle'
      ? css`
          border-radius: ${props.$size ? iconSizes[props.$size] : iconSizes[defaultSize]}px;
        `
      : null}

  & > * {
    width: ${(props) => (props.$size ? iconSizes[props.$size] : iconSizes[defaultSize]) - 8}px;
    height: ${(props) => (props.$size ? iconSizes[props.$size] : iconSizes[defaultSize]) - 8}px;
  }
`

const WrappedIcon = ({
  bgColor = 'grey900',
  color,
  name,
  shape = 'circle',
  size = 'md',
  ...props
}: WrappedIconProps) => {
  return (
    <IconWrapper $size={size} $bgColor={bgColor} $shape={shape} {...props}>
      <Icon name={name} color={color} size={size} />
    </IconWrapper>
  )
}

export default WrappedIcon
