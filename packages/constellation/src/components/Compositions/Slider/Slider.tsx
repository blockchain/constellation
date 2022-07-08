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
      className='relative flex h-5 w-64 touch-none items-center'
    >
      <Track className='relative h-1 w-full grow rounded-full bg-medium'>
        <Range className='absolute h-full rounded-full bg-primary' />
      </Track>
      <Thumb className='block h-5 w-5 rounded-full bg-background border-background-light focus:outline-none drop-shadow-control mode-dark:bg-dark-500' />
    </Root>
  )
}

export default Slider
