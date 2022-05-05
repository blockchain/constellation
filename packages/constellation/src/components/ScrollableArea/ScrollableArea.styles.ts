import styled, { css } from 'styled-components'

const StyledScrollArea = styled.div<{ b: number; backgroundColor: string; g: number; r: number }>`
  ${({ b, backgroundColor, g, r }) => css`
    overflow: auto;
    height: 100%;
    width: 100%;

    background:
            /* Shadow covers */ linear-gradient(
        ${backgroundColor} 30%,
        rgba(0, 0, 0, 0)
      ),
      linear-gradient(rgba(0, 0, 0, 0), ${backgroundColor} 70%) 0 100%,
      /* Shadows */ radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)),
      radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) 0 100%;
    background:
            /* Shadow covers */ linear-gradient(
        ${backgroundColor} 30%,
        rgba(0, 0, 0, 0)
      ),
      linear-gradient(rgba(0, 0, 0, 0), ${backgroundColor} 70%) 0 100%,
      /* Shadows */
        radial-gradient(farthest-side at 50% 0, rgba(${r}, ${g}, ${b}, 0.2), rgba(0, 0, 0, 0)),
      radial-gradient(farthest-side at 50% 100%, rgba(${r}, ${g}, ${b}, 0.2), rgba(0, 0, 0, 0)) 0
        100%;
    background-repeat: no-repeat;
    background-color: ${backgroundColor};
    background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;

    background-attachment: local, local, scroll, scroll;
  `}
`

export { StyledScrollArea }
