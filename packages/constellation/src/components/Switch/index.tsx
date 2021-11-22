import styled from 'styled-components'
import colors from '../../colors'

const SwitchWrapper = styled.div<{ background?: string }>`
  position: relative;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  background: ${(p) => p.background ?? colors.dark[700]};
  border-radius: 8px;
  margin: 0;
`

type SwitchLabelState = 'regular' | 'hover' | 'active'
type SwitchLabelProps = {
  active?: boolean // optional prop to disable switch
  activeColor?: string // not selected, click over
  disabled?: boolean
  disabledColor?: string // disabled text color
  hoverColor?: string // not selected, mouse over
  regularColor?: string // not selected, no mouse event
  selected: boolean
  selectedActiveColor?: string // selected, click over
  selectedColor?: string // selected, no mouse event
  selectedHoverColor?: string // selected, mouse over
  selectedTextColor?: string
  textColor?: string
}
const getSwitchColor = (state: SwitchLabelState) => (props: SwitchLabelProps) => {
  if (props.disabled) {
    return props.disabledColor ?? colors.dark[400]
  }
  if (props.selected || state === 'hover') {
    return props.selectedTextColor ?? colors.white[1]
  }
  return props.textColor ?? colors.dark[200]
}

const getSwitchBGColor = (state: SwitchLabelState) => (props: SwitchLabelProps) => {
  if (props.disabled) {
    return props.regularColor ?? 'transparent'
  }

  if ((props.active ?? true) && props.selected) {
    if (state === 'active') {
      return props.selectedActiveColor ?? props.selectedColor ?? colors.white[1]
    }
    if (state === 'hover') {
      return props.selectedHoverColor ?? props.selectedColor ?? colors.white[1]
    }
    return props.selectedColor ?? colors.white[1]
  }

  if (state === 'active') {
    return props.activeColor ?? props.regularColor ?? colors.dark[900]
  }
  if (state === 'hover') {
    return props.hoverColor ?? props.regularColor ?? colors.dark[800]
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
  transition: background-color ${(p) => p.theme.transition.medium},
    color ${(p) => p.theme.transition.medium};

  &:hover {
    color: ${getSwitchColor('hover')};
    background-color: ${getSwitchBGColor('hover')};
  }

  &:active {
    background-color: ${getSwitchBGColor('active')};
  }
`

export { SwitchLabel, SwitchWrapper }
