import React from 'react'

import { BaseCell } from '../'
import { TextCellComponentType } from '.'

const TextCell: TextCellComponentType = ({ footer, header, icon, iconPosition, subtext, text }) => {
  return (
    <BaseCell
      footer={footer}
      header={header}
      prefix={iconPosition === 'left' && icon}
      postfix={iconPosition === 'right' && icon}
    >
      <div className='flex flex-col justify-center'>
        <span className='text-title text-sm'>{text}</span>
        <span className='text-body !mode-light:text-background-dark text-sm'>{subtext}</span>
      </div>
    </BaseCell>
  )
}

export default TextCell
