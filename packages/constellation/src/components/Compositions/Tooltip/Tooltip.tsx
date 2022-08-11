import * as RadixTooltip from '@radix-ui/react-tooltip'
import React from 'react'

import { PaletteColors } from '../../Base'
import { TooltipComponent } from '.'

/**
 * The Tooltip component allows users to get more info about an element by
 * hovering over it.
 */

const Tooltip: TooltipComponent = ({
  allowCollision = false,
  children,
  delay = 700,
  offset = 0,
  side = 'top',
  text,
  trigger,
}) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={delay}>
        <RadixTooltip.Trigger className='constellation border-none outline-none bg-transparent p-0'>
          {trigger}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className='constellation bg-grey-800 p-3 rounded-lg'
            side={side}
            sideOffset={offset}
            avoidCollisions={!allowCollision}
          >
            <RadixTooltip.Arrow fill={PaletteColors['grey-800']} />
            {children}
            {text && <p className='text-xs font-medium text-white-000'>{text}</p>}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

export default Tooltip
