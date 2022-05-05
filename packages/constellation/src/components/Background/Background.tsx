import React from 'react'
import { isBackgroundColor, useTheme } from 'theme'

import { BackgroundComponent } from './Background.types'

const Background: BackgroundComponent = ({ children, color = 'default' }) => {
  const theme = useTheme()

  const backgroundColor = isBackgroundColor(color) ? theme.background.colors[color] : color

  return <div style={{ backgroundColor, height: '100%', width: '100%' }}>{children}</div>
}

export default Background
