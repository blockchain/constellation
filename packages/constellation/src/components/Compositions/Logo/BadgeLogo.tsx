import React from 'react'

import { LogoComponent, Logo } from '.'

const DoubleLogo: LogoComponent = ({}) => {
  return (
    <div className='constellation w-8 h-10 relative flex justify-center items-center'>
      <Logo value='TEST' />
      <Logo
        value='CATE'
        className='!absolute !w-3 !h-3 bottom-0 right-0 border-2 border-background border-solid -mr-[2px] mb-[2px]'
      />
    </div>
  )
}

export default DoubleLogo
