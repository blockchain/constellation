import * as RadixTooltip from '@radix-ui/react-tooltip'
import React from 'react'

import { PaletteColors } from '../../Base'
import { TooltipComponent } from '.'

const Tooltip: TooltipComponent = ({ children, content, text }) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger className='constellation border-none outline-none bg-transparent p-0'>
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className='constellation bg-grey-800 p-3 rounded-lg'>
            <RadixTooltip.Arrow fill={PaletteColors['grey-800']} />
            {content}
            {text && <p className='text-xs font-medium text-white-000'>{text}</p>}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

export default Tooltip
