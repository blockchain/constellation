import React from 'react'

import { ButtonComponentProps } from './types'

const Button = ({ children, type = 'button', ...props }: ButtonComponentProps) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
