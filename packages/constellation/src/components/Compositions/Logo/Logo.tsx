import cx from 'classnames'
import React from 'react'

import { LogoComponent } from './Logo.types'
import { Textfit } from 'react-textfit'

const Logo: LogoComponent = ({ className, value }) => {
  return (
    <div
      className={cx(
        'w-8 h-8 rounded-full flex justify-center items-center bg-primary relative',
        className,
      )}
    >
      <div className='w-[80%]'>
        <Textfit mode='single' className='text-white-000' forceSingleModeWidth={false}>
          {value}
        </Textfit>
      </div>
    </div>
  )
}

export default Logo
