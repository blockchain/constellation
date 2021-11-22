import React, { useCallback, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import getIcon from 'components/Icon'
import { IconName } from 'components/Icon/types'
import colors from 'colors'

import iconColor from 'components/iconColor'

type OwnPropsType = {
  customHandler?: () => void
  light?: boolean
  value: string
}

type IconProps = { light?: boolean; showSuccess: boolean }

const getColor = (props: IconProps) =>
  props.showSuccess
    ? css`
        fill: ${colors.blue[600]} !important;
      `
    : iconColor(props.light === true ? colors.white[1] : colors.dark[900])

const Icon = styled.div<IconProps>`
  svg {
    transition: fill 150ms ease;
    ${getColor};
  }
`

const CopyToClipboard = ({ customHandler, light, value }: OwnPropsType) => {
  let timeout: ReturnType<typeof setTimeout>
  const [showSuccess, setShowSuccess] = useState(false)
  useEffect(() => {
    ;() => clearTimeout(timeout)
  }, [])

  const handleClick = useCallback(() => {
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
          }, 500)
        }
      } catch (err) {}

      if (document.body) {
        document.body.removeChild(temp)
      }
    }
  }, [customHandler, document])

  return (
    <Icon light={light} onClick={handleClick} showSuccess={showSuccess}>
      {getIcon({ name: IconName.CLIPBOARD, size: 'md' })}
    </Icon>
  )
}

export default CopyToClipboard
