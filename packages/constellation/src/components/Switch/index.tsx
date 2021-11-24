import { useState } from 'react'
import styled from 'styled-components'

import colors from '../../colors'
import { SwitchLabelProps, SwitchLabelState, SwitchProps, SwitchWrapperProps } from './types'

const SwitchWrapper = styled.div<SwitchWrapperProps>`
  position: relative;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  background: ${({ background }) => background ?? colors.dark700};
  border-radius: 8px;
  margin: 0;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'fit-content')};
`

const getSwitchColor = (state: SwitchLabelState) => (props: SwitchLabelProps) => {
  if (props.disabled) {
    return props.disabledColor ?? colors.dark400
  }
  if (props.selected || state === 'hover') {
    return props.selectedTextColor ?? colors.white1
  }
  return props.textColor ?? colors.white1
}

const getSwitchBGColor = (state: SwitchLabelState) => (props: SwitchLabelProps) => {
  if (props.disabled) {
    return props.regularColor ?? 'transparent'
  }

  if (props.selected) {
    if (state === 'active') {
      return props.selectedActiveColor ?? props.selectedColor ?? colors.dark700
    }
    if (state === 'hover') {
      return props.selectedHoverColor ?? props.selectedColor ?? colors.dark700
    }
    return props.selectedColor ?? colors.dark700
  }

  if (state === 'active') {
    return props.activeColor ?? props.regularColor ?? colors.dark900
  }
  if (state === 'hover') {
    return props.hoverColor ?? props.regularColor ?? colors.dark800
  }
  return props.regularColor ?? 'transparent'
}

const SwitchLabel = styled.div<SwitchLabelProps>`
  flex: 1;
  text-align: center;
  cursor: ${({ disabled }) => (disabled ?? false ? 'not-allowed' : 'pointer')};
  line-height: 150%;
  font-weight: 600;
  font-size: 16px;
  border-radius: 6px;
  margin: 2px;
  padding: 0.5rem;
  background-color: ${getSwitchBGColor('regular')};
  color: ${getSwitchColor('regular')};
  transition: background-color 300, color 300;
  width: fit-content;

  &:hover {
    color: ${getSwitchColor('hover')};
    background-color: ${getSwitchBGColor('hover')};
  }

  &:active {
    background-color: ${getSwitchBGColor('active')};
  }
`

const Switch = ({
  activeColor,
  disabled,
  disabledColor,
  firstItem,
  hoverColor,
  isFullWidth,
  regularColor,
  secondItem,
  selectedActiveColor,
  selectedColor,
  selectedHoverColor,
  selectedTextColor,
  textColor,
}: SwitchProps) => {
  const [firstItemActive, setFirstItemActive] = useState(true)

  return (
    <SwitchWrapper isFullWidth={isFullWidth}>
      <SwitchLabel
        activeColor={activeColor}
        disabled={disabled}
        disabledColor={disabledColor}
        hoverColor={hoverColor}
        onClick={() => setFirstItemActive(true)}
        regularColor={regularColor}
        selectedActiveColor={selectedActiveColor}
        selectedColor={selectedColor}
        selectedHoverColor={selectedHoverColor}
        selectedTextColor={selectedTextColor}
        selected={firstItemActive}
        textColor={textColor}
      >
        {firstItem}
      </SwitchLabel>
      <SwitchLabel
        activeColor={activeColor}
        disabled={disabled}
        disabledColor={disabledColor}
        hoverColor={hoverColor}
        onClick={() => setFirstItemActive(false)}
        regularColor={regularColor}
        selectedActiveColor={selectedActiveColor}
        selectedColor={selectedColor}
        selectedHoverColor={selectedHoverColor}
        selectedTextColor={selectedTextColor}
        selected={!firstItemActive}
        textColor={textColor}
      >
        {secondItem}
      </SwitchLabel>
    </SwitchWrapper>
  )
}

export default Switch
