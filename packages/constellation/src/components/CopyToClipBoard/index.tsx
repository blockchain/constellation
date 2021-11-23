import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import colors from '../../colors'
import getIcon from '../Icon'
import { IconName } from '../Icon/types'
import iconColor from '../IconColor'
import { CopyToClipBoardTypes, IconProps } from './types'

const getColor = (props: IconProps) =>
  props.showSuccess
    ? css`
        fill: ${colors.blue[600]} !important;
      `
    : iconColor(props.light ? colors.white[1] : colors.dark[900])

const Icon = styled.div<IconProps>`
  svg {
    transition: fill 150ms ease;
    ${getColor};
  }

  &:hover {
    cursor: pointer;
  }
`

const CopyToClipboard = ({ customHandler, light, value }: CopyToClipBoardTypes) => {
  let timeout: ReturnType<typeof setTimeout>
  const [showSuccess, setShowSuccess] = useState<boolean>(false)

  useEffect(() => {
    return () => clearTimeout(timeout)
  })

  const handleClick = () => {
    setShowSuccess(true)
    if (customHandler) {
      customHandler()
    }

    if (document) {
      const temp = document.createElement('textarea')
      temp.value = value || ''
      temp.setAttribute('readonly', '')
      temp.style.position = 'absolute'
      temp.style.left = '-9999px'

      if (document.body) {
        document.body.appendChild(temp)
      }

      temp.select()

      try {
        const res: void | boolean = document.execCommand('copy')

        if (res === true) {
          timeout = setTimeout(() => {
            setShowSuccess(false)
          }, 1500)
        }
      } catch (err) {
        console.log(err) // eslint-disable-line
      }

      if (document.body) {
        document.body.removeChild(temp)
      }
    }
  }

  return (
    <Icon light={light} onClick={handleClick} showSuccess={showSuccess}>
      {showSuccess
        ? getIcon({ color: colors.green[600], name: IconName.CHECK, size: 'md' })
        : getIcon({ name: IconName.CLIPBOARD, size: 'md' })}
    </Icon>
  )
}

export default CopyToClipboard
