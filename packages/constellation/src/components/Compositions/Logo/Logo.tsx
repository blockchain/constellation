import React from 'react'

import { LogoComponent } from './Logo.types'

const Slider: LogoComponent = ({}) => {
  return (
    <div className='constellation w-8 h-10 relative flex justify-center items-center'>
      <div className='w-8 h-8 rounded-full flex justify-center items-center bg-primary'>
        <span className='text-white-000 text-[10px]'>CATE</span>
      </div>
    </div>
  )
}

export default Slider
