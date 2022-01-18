import * as RadixToggleGroup from '@radix-ui/react-toggle-group'
import React from 'react'

// https://www.radix-ui.com/docs/primitives/components/toggle-group
const ToggleGroup = () => (
  <RadixToggleGroup.Root type='single'>
    <RadixToggleGroup.Item value='left' />
    <RadixToggleGroup.Item value='center' />
    <RadixToggleGroup.Item value='right' />
  </RadixToggleGroup.Root>
)

export default ToggleGroup
