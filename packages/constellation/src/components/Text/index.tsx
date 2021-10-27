import { forwardRef, HTMLProps, ReactNode, Ref } from 'react'
import styled, { css } from 'styled-components'

type VariantType =
  | 'display'
  | 'title-1'
  | 'title-2'
  | 'title-3'
  | 'subheading'
  | 'body-mono'
  | 'body-1'
  | 'body-2'
  | 'paragraph-mono'
  | 'paragraph-1'
  | 'paragraph-2'
  | 'caption-1'
  | 'caption-2'
  | 'overline'
  | 'micro'

type ComponentType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type TextProps = Omit<HTMLProps<HTMLHeadingElement | HTMLParagraphElement>, 'ref' | 'as'> & {
  children: ReactNode
  component?: ComponentType
  variant?: VariantType
}

const StyledText = styled.p<{ $variant: VariantType }>`
  font-family: 'Inter', sans-serif;

  ${(props) =>
    props.$variant === 'display'
      ? css`
          font-size: 2.5rem;
          font-weight: 600;
          font-feature-settings: 'zero' on, 'ss01' on;
        `
      : null}

  ${(props) =>
    props.$variant === 'title-1'
      ? css`
          font-size: 2rem;
          font-weight: 600;
          font-feature-settings: 'ss01' on, 'zero' on;
        `
      : null}
      
  ${(props) =>
    props.$variant === 'title-2'
      ? css`
          font-size: 1.5rem;
          font-weight: 600;
          font-feature-settings: 'ss01' on, 'zero' on;
        `
      : null}
      
  ${(props) =>
    props.$variant === 'title-3'
      ? css`
          font-size: 1.5rem;
          font-weight: 600;
          font-feature-settings: 'zero' on, 'ss01' on;
        `
      : null}
      
  ${(props) =>
    props.$variant === 'subheading'
      ? css`
          font-size: 1.5rem;
          font-weight: 500;
          font-feature-settings: 'ss01' on, 'zero' on;
        `
      : null}
      
  ${(props) =>
    props.$variant === 'body-mono'
      ? css`
          font-size: 1rem;
          font-weight: 500;
          font-feature-settings: 'tnum' on, 'lnum' on, 'zero' on, 'ss01' on;
        `
      : null}
      
  ${(props) =>
    props.$variant === 'body-1'
      ? css`
          font-size: 1rem;
          font-weight: 500;
          font-feature-settings: 'ss01' on, 'zero' on;
        `
      : null}
      
  ${(props) =>
    props.$variant === 'body-2'
      ? css`
          font-size: 1rem;
          font-weight: 600;
          font-feature-settings: 'ss01' on, 'zero' on;
        `
      : null}
      
  ${(props) =>
    props.$variant === 'paragraph-1'
      ? css`
          font-size: 0.875rem;
          font-weight: 500;
          font-feature-settings: 'zero' on, 'ordn' on;
        `
      : null}

  ${(props) =>
    props.$variant === 'paragraph-2'
      ? css`
          font-size: 0.875rem;
          font-weight: 600;
          font-feature-settings: 'zero' on, 'ss01' on;
        `
      : null}

  ${(props) =>
    props.$variant === 'caption-1'
      ? css`
          font-size: 0.75rem;
          font-weight: 500;
          font-feature-settings: 'ss01' on, 'zero' on;
        `
      : null}

  ${(props) =>
    props.$variant === 'caption-2'
      ? css`
          font-size: 0.75rem;
          font-weight: 600;
          font-feature-settings: 'zero' on, 'ss01' on;
        `
      : null}

  ${(props) =>
    props.$variant === 'overline'
      ? css`
          font-size: 0.75rem;
          font-weight: 600;
          font-feature-settings: 'ss01' on, 'zero' on;
          text-transform: uppercase;
        `
      : null}

  ${(props) =>
    props.$variant === 'micro'
      ? css`
          font-size: 0.625rem;
          font-weight: 500;
          font-feature-settings: 'ss01' on, 'zero' on;
        `
      : null}
`

const Text = forwardRef(
  (
    { children, component = 'span', variant = 'body-1', ...props }: TextProps,
    ref: Ref<HTMLHeadingElement | HTMLParagraphElement>
  ) => {
    return (
      <StyledText as={component} $variant={variant} ref={ref} {...props}>
        {children}
      </StyledText>
    )
  }
)

export default Text
