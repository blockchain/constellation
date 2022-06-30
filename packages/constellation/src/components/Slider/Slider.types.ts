import { SliderProps as RadixSliderProps } from '@radix-ui/react-slider'
import { FC } from 'react'

type SliderProps = RadixSliderProps & {
  defaultValue?: number
  max: number
  min: number
  step: number
  value?: number
}

type SliderComponent = FC<SliderProps>

export type { SliderComponent, SliderProps }
