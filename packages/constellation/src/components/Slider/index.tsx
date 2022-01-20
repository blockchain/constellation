import * as RadixSlider from '@radix-ui/react-slider'
import React from 'react'

// https://www.radix-ui.com/docs/primitives/components/slider
const Slider = () => (
  <RadixSlider.Root>
    <RadixSlider.Track>
      <RadixSlider.Range />
    </RadixSlider.Track>
    <RadixSlider.Thumb />
  </RadixSlider.Root>
)

export default Slider
