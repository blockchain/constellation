import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import React from 'react'

import { SliderComponent } from './Slider.types'

const Slider: SliderComponent = ({ max, min, step = 1, value, ...props }) => {
  return (
    <Root
      value={value}
      step={step}
      min={min}
      max={max}
      {...props}
      aria-label='value'
      className='constellation relative flex h-5 w-64 touch-none items-center'
    >
      <Track className='relative h-[2px] w-full grow rounded-full bg-medium'>
        <Range className='absolute h-full rounded-full bg-primary' />
      </Track>
      <Thumb className='block h-6 w-6 rounded-full bg-background border border-solid border-grey-000 mode-dark:border-dark-900 focus:outline-none drop-shadow-control mode-dark:bg-dark-500' />
    </Root>
  )
}

export default Slider
