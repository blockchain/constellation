import { useEffect, useState } from 'react'
import styled from 'styled-components'

import colors from '../../colors'
import getIcon from '../Icon'
import { IconName } from '../Icon/types'
import iconColor from '../IconColor'
import { CopyToClipboardTypes, IconProps } from './types'

const getIconColor = ({
  color = 'red600',
  hoverColor = 'dark600',
  showSuccess,
  successColor = 'green600',
  successHoverColor = 'green400',
}: IconProps) =>
  showSuccess ? iconColor(successColor, successHoverColor) : iconColor(color, hoverColor)

const Icon = styled.div<IconProps>`
  width: fit-content;
  svg {
    & > path {
      transition: fill 150ms ease;
    }
  }

  ${(props) => getIconColor(props)};

  &:hover {
    cursor: pointer;
  }
`

const CopyToClipboard = ({
  color,
  customHandler,
  hoverColor,
  size,
  successColor,
  successHoverColor,
  value,
}: CopyToClipboardTypes) => {
  let timeout: ReturnType<typeof setTimeout>
  const [showSuccess, setShowSuccess] = useState<boolean>(false)

  useEffect(() => {
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    <Icon
      color={color}
      hoverColor={hoverColor}
      onClick={handleClick}
      showSuccess={showSuccess}
      successColor={successColor}
      successHoverColor={successHoverColor}
    >
      {showSuccess
        ? getIcon({ color: colors.green600, name: IconName.CHECK, size: size ?? 'md' })
        : getIcon({ name: IconName.CLIPBOARD, size: size ?? 'md' })}
    </Icon>
  )
}

export default CopyToClipboard
