import styled from 'styled-components'

export const CircularProgressIndicatorContainer = styled.div`
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
