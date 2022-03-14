import React from 'react'

import { ButtonComponentProps } from './types'

const Button = ({ children, type = 'button', ...props }: ButtonComponentProps) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
