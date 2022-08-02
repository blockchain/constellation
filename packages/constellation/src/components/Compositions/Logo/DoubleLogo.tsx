import React from 'react'

import { LogoComponent, Logo } from '.'

const DoubleLogo: LogoComponent = ({}) => {
  return (
    <div className='constellation w-8 h-10 relative flex justify-center items-center'>
      <Logo className='!absolute w-6 h-6 bottom-0 right-0' />
      <Logo className='!absolute w-6 h-6 top-0 left-0 border-2 border-background border-solid -ml-[2px] -mt-[2px]' />
    </div>
  )
}

export default DoubleLogo
