import { IconLoading } from '@blockchain-com/icons'
import { Icon } from 'components/Icon'
import React from 'react'
import { useTheme } from 'theme'

import { isProgressIndicatorThemeColor } from '../utils'
import { CircularProgressIndicatorContainer } from './CircularProgressIndicator.styles'
import { CircularProgressIndicatorComponent } from './CircularProgressIndicator.types'

const CircularProgressIndicator: CircularProgressIndicatorComponent = ({
  color = 'primary',
  size = 1.5,
}) => {
  const theme = useTheme()

  const finalColor = isProgressIndicatorThemeColor(theme, color)
    ? theme.progressIndicator.colors[color]
    : color

  return (
    <CircularProgressIndicatorContainer>
      <Icon label='loading' color={finalColor} size={size}>
        <IconLoading />
      </Icon>
    </CircularProgressIndicatorContainer>
  )
}

export default CircularProgressIndicator
