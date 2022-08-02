import cx from 'classnames'
import React from 'react'

import { LogoComponent } from './Logo.types'
import { Textfit } from 'react-textfit'

const Logo: LogoComponent = ({ className }) => {
  return (
    <div
      className={cx(
        'w-8 h-8 rounded-full flex justify-center items-center bg-primary relative',
        className,
      )}
    >
      <Textfit mode='single' className='text-white-000 w-[80%]'>
        CATE
      </Textfit>
    </div>
  )
}

export default Logo
