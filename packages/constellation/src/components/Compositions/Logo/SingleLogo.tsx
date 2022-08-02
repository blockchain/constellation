import React from 'react'

import { Logo, LogoComponent } from '.'

const SingleLogo: LogoComponent = ({}) => {
  return (
    <div className='constellation w-8 h-10 relative flex justify-center items-center'>
      <Logo />
    </div>
  )
}

export default SingleLogo
