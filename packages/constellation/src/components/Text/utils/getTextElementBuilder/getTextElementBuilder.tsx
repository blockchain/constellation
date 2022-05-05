import { TextHtmlFor } from 'components/Text/Text.types'
import React from 'react'

import { GetTextElementBuilderUtility, TextElement } from './getTextElementBuilder.types'

const getTextElementBuilder: GetTextElementBuilderUtility = ({ as }) => {
  const mapHtmlType: Record<TextHtmlFor, TextElement> = {
    h1: ({ children, style, ...props }) => (
      <h1 style={style} {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, style, ...props }) => (
      <h2 style={style} {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, style, ...props }) => (
      <h3 style={style} {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, style, ...props }) => (
      <h4 style={style} {...props}>
        {children}
      </h4>
    ),
    h5: ({ children, style, ...props }) => (
      <h5 style={style} {...props}>
        {children}
      </h5>
    ),
    h6: ({ children, style, ...props }) => (
      <h6 style={style} {...props}>
        {children}
      </h6>
    ),
    p: ({ children, style, ...props }) => (
      <p style={style} {...props}>
        {children}
      </p>
    ),
    span: ({ children, style, ...props }) => (
      <span style={style} {...props}>
        {children}
      </span>
    ),
  }

  return mapHtmlType[as]
}

export default getTextElementBuilder
