import React from 'react'

import { LoadingSpinner } from '../LoadingSpinner'
import { ChildrenContainer, LoadingContainer } from './LoadingArea.styles'
import { LoadingAreaComponent } from './LoadingArea.types'

const LoadingArea: LoadingAreaComponent = ({ children, isLoading, icon = <LoadingSpinner /> }) => {
  return (
    <div style={{ position: 'relative' }}>
      <LoadingContainer visible={isLoading}>{icon}</LoadingContainer>

      <ChildrenContainer visible={!isLoading}>{children}</ChildrenContainer>
    </div>
  )
}

export default LoadingArea
