import * as RadixPopover from '@radix-ui/react-popover'
import React from 'react'

// https://www.radix-ui.com/docs/primitives/components/popover
const Popover = () => (
  <RadixPopover.Root>
    <RadixPopover.Trigger />
    <RadixPopover.Anchor />
    <RadixPopover.Content>
      <RadixPopover.Close />
      <RadixPopover.Arrow />
    </RadixPopover.Content>
  </RadixPopover.Root>
)

export default Popover
