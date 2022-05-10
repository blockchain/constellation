import React from 'react'
import { useTheme } from 'theme'

import { StyledLoadingText } from './LoadingText.styles'
import { LoadingTextComponent } from './LoadingText.types'

const LoadingText: LoadingTextComponent = () => {
  const theme = useTheme()

  return (
    <StyledLoadingText
      backgroundColor={theme.text.loading.backgroundColor}
      borderRadius={theme.text.loading.borderRadius}
      maxWidth={theme.text.loading.maxWidth}
    >
      &nbsp;
    </StyledLoadingText>
  )
}

export default LoadingText
