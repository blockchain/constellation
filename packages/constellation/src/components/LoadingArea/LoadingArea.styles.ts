import styled, { css } from 'styled-components'

const ChildrenContainer = styled.div<{ visible: boolean }>`
  transition: opacity 300ms;

  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`

const LoadingContainer = styled.div<{ visible: boolean }>`
  transition: opacity 300ms;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;

  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
          z-index: 1000;
        `
      : css`
          opacity: 0;
          z-index: -1;
        `}
`

export { ChildrenContainer, LoadingContainer }
