export type SwitchLabelState = 'regular' | 'hover' | 'active'

export type SwitchWrapperProps = { background?: string; isFullWidth?: boolean }

export type SwitchLabelProps = {
  activeColor?: string // not selected, click over
  disabled?: boolean
  disabledColor?: string // disabled text color
  hoverColor?: string
  isFullWidth?: boolean
  // not selected, mouse over
  regularColor?: string
  // not selected, no mouse event
  selected: boolean
  selectedActiveColor?: string
  // selected, click over
  selectedColor?: string
  // selected, no mouse event
  selectedHoverColor?: string
  // selected, mouse over
  selectedTextColor?: string
  textColor?: string // make the toggle component full width
}

export type SwitchProps = {
  activeColor?: string // not selected, click over
  disabled?: boolean
  disabledColor?: string // disabled text color
  firstItem: string
  handleFirstItemClicked: () => void
  handleSecondItemClicked: () => void
  hoverColor?: string
  isFirstItemActive: boolean
  isFullWidth?: boolean
  // not selected, mouse over
  regularColor?: string
  // not selected, no mouse event
  secondItem: string
  selectedActiveColor?: string // selected, click over
  selectedColor?: string // selected, no mouse event
  selectedHoverColor?: string // selected, mouse over
  selectedTextColor?: string
  textColor?: string
}
