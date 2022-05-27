import { IconLoading } from '@blockchain-com/icons'
import React from 'react'
import styled from 'styled-components'

export const ButtonLoadingOverlay = styled((props) => <IconLoading {...props} />)`
  display: inline-flex;
  animation: completeCircularAnimation 1.2s linear infinite;

  @keyframes completeCircularAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
