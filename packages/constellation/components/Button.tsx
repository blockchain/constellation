import React, { ButtonHTMLAttributes, CSSProperties } from 'react'
import { darken } from 'polished'
import styled from 'styled-components'

export enum Nature {
  DARK = 'dark',
  DARD_GREY = 'dark-grey',
  EMPTY = 'empty',
  EMPTY_BLUE = 'empty-blue',
  EMPTY_SECONDARY = 'empty-secondary',
  GRAY = 'gray',
  GREY_800 = 'grey800',
  LIGHT = 'light',
  LIGHT_RED = 'light-red',
  EXCHANGE_TURQOISE = 'exchangeTurquoise',
  PRIMARY = 'primary',
  PURPLE = 'purple',
  SECONDARY = 'secondary',
  RECEIVED = 'received',
  SENT = 'sent',
  SUCCESS = 'success',
  TRANSFERRED = 'transferred',
  WARNING = 'warning',
  WHITE_TRANSPARENT = 'white-transparent',
  WHITE_BLUE = 'white-blue',
  GREEN = 'green'
}

export type ColorSelection = {
  backgroundColor: string,
  borderColor: string,
  hoverBorderColor: string,
}

const BaseButton = styled.button.attrs((props: Props & ColorSelection) => ({
  nature: props.nature || Nature.EMPTY,
  fullwidth: props.fullwidth || false,
  disabled: props.disabled || false,
  small: props.small || false,
  rounded: props.rounded || false,
  bold: props.bold || false,
  size: props.size || '14px',
  uppercase: props.uppercase || false,
  capitalize: props.capitalize || false,
  height: props.height || '40px',
  type: props.type || 'button'
}))<Props & ColorSelection>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${props =>
    props.fullwidth ? '100%' : props.width ? props.width : 'auto'};
  min-width: ${props => (props.width ? props.width : '140px')};
  height: ${props => (props.jumbo ? '56px' : props.height)};
  padding: ${props => (props.padding ? props.padding : '10px 15px')};
  margin: ${props => props.margin};
  box-sizing: border-box;
  user-select: none;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  letter-spacing: normal;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  line-height: 1;
  text-transform: ${props =>
    props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none'};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: ${props => (props.jumbo ? '16px' : props.size)};
  font-weight: ${props => (props.jumbo ? '600' : '600')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  color: ${props => props.theme[props.color]};
  background-color: ${props =>
    props.backgroundColor ? props.theme[props.backgroundColor] : 'transparent'};
  border-radius: ${props => (props.rounded ? '20px' : '8px')};
  border-style: solid;
  border-width: ${props => (props.rounded ? '2px' : '1px')};
  border-color: ${props => props.theme[props.borderColor]};

  &:hover {
    border-color: ${props =>
      props.disabled
        ? 'none'
        : props.hoverBorderColor
        ? props.theme[props.hoverBorderColor]
        : darken(0.1, props.theme[props.borderColor])};
    background-color: ${props =>
      props.disabled
        ? 'none'
        : props.backgroundColor
        ? darken(0.1, props.theme[props.backgroundColor])
        : 'transparent'};
  }

  &:focus {
    outline: 0;
  }
`

const selectColor = (nature: Nature, small: boolean) => {
  switch (nature) {
    case 'dark':
      return {
        color: 'white',
        backgroundColor: 'grey800',
        borderColor: 'grey800'
      }
    case 'dark-grey':
      return {
        color: 'white',
        backgroundColor: 'grey800',
        borderColor: 'grey800'
      }
    case 'empty':
      return {
        color: small ? 'blue600' : 'grey800',
        backgroundColor: 'white',
        borderColor: 'grey000',
        hoverBorderColor: 'white'
      }

    case 'empty-blue': {
      return {
        color: 'blue600',
        backgroundColor: 'white',
        borderColor: 'grey100',
        hoverBorderColor: 'blue600'
      }
    }

    case 'empty-secondary':
      return {
        color: 'blue600',
        backgroundColor: 'white',
        borderColor: 'blue600'
      }

    case 'gray':
      return {
        color: 'white',
        backgroundColor: 'grey500',
        borderColor: 'grey500'
      }
    case 'light':
      return {
        color: 'blue600',
        backgroundColor: 'white',
        borderColor: 'grey000'
      }
    case 'light-red':
      return {
        color: 'red400',
        backgroundColor: 'white',
        borderColor: 'grey000'
      }
    case 'exchangeTurquoise':
      return {
        color: 'exchangeNight',
        backgroundColor: 'exchangeTurquoise',
        borderColor: 'exchangeTurquoise'
      }
    case 'primary':
      return {
        color: 'white',
        backgroundColor: 'blue600',
        borderColor: 'blue600'
      }
    case 'purple':
      return {
        color: 'white',
        backgroundColor: 'purple',
        borderColor: 'purple'
      }
    case 'secondary':
      return {
        color: 'white',
        backgroundColor: 'blue900',
        borderColor: 'blue900'
      }
    case 'received':
      return {
        color: 'white',
        backgroundColor: 'received',
        borderColor: 'received'
      }
    case 'sent':
      return { color: 'white', backgroundColor: 'sent', borderColor: 'sent' }
    case 'success':
      return {
        color: 'white',
        backgroundColor: 'success',
        borderColor: 'success'
      }
    case 'transferred':
      return {
        color: 'white',
        backgroundColor: 'transferred',
        borderColor: 'transferred'
      }
    case 'warning':
      return { color: 'white', backgroundColor: 'error', borderColor: 'error' }
    case 'white-transparent':
      return {
        color: 'white',
        borderColor: 'white'
      }
    case 'white-blue':
      return {
        color: 'blue600',
        backgroundColor: 'white',
        borderColor: 'white'
      }
    case 'green':
      return {
        color: 'white',
        backgroundColor: 'green600',
        borderColor: 'green600'
      }
    case 'grey800':
      return {
        color: 'white',
        backgroundColor: 'grey800',
        borderColor: 'grey800'
      }
    default:
      return {
        color: 'grey800',
        backgroundColor: 'grey000',
        borderColor: 'grey200',
        hoverBorderColor: 'white'
      }
  }
}

export const Button = (props: Props) => {
  const { children, disabled, nature, small, ...rest } = props
  const { backgroundColor, borderColor, color, hoverBorderColor } = selectColor(
    nature,
    small
  )

  return (
    <BaseButton
      {...rest}
      disabled={disabled}
      color={color}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      hoverBorderColor={hoverBorderColor}
    >
      {children}
    </BaseButton>
  )
}

type Props = {
  bold?: boolean
  capitalize?: boolean
  children?: React.ReactNode | string,
  className?: string
  'data-e2e': string
  disabled?: boolean
  fullwidth?: boolean
  height?: string
  jumbo?: boolean
  nature: Nature,
  margin?: string
  onClick?: () => void
  padding?: string
  rounded?: boolean
  size?: string
  small?: boolean
  style?: CSSProperties
  uppercase?: boolean
  width?: string
} & ButtonHTMLAttributes<{}>
