import { IconLoading } from '@blockchain-com/icons'
import { Icon } from 'components/Icon'
import React from 'react'

import { LoadingSpinnerContainer } from './LoadingSpinner.styles'
import { LoadingSpinnerComponent } from './LoadingSpinner.types'

const LoadingSpinner: LoadingSpinnerComponent = ({ color, size }) => (
  <LoadingSpinnerContainer>
    <Icon label='loading' color={color} size={size}>
      <IconLoading />
    </Icon>
  </LoadingSpinnerContainer>
)

export default LoadingSpinner
