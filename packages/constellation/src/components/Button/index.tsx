import React from 'react'

import { ButtonComponentProps } from './types'

const Button = ({ children, ...props }: ButtonComponentProps) => (
  <button {...props}>{children}</button>
)

export default Button
