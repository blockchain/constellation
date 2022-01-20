import * as RadixTooltip from '@radix-ui/react-tooltip'
import React from 'react'

// https://www.radix-ui.com/docs/primitives/components/tooltip
const Tooltip = () => (
  <RadixTooltip.Provider>
    <RadixTooltip.Root>
      <RadixTooltip.Trigger />
      <RadixTooltip.Content>
        <RadixTooltip.Arrow />
      </RadixTooltip.Content>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
)

export default Tooltip
