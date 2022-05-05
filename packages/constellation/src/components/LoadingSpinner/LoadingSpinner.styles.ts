import styled from 'styled-components'

export const LoadingSpinnerContainer = styled.div`
  display: inline-flex;
  animation: lds-dual-ring 1.2s linear infinite;

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
