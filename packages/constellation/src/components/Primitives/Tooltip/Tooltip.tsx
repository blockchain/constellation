import * as RadixTooltip from '@radix-ui/react-tooltip'
import React from 'react'

import { PaletteColors } from '../../Base'
import { TooltipComponent } from '.'

/**
 * The Tooltip component allows users to get more info about an element by
 * hovering over it.
 *
 * For extra info and the full list of tooltip content props see the
 * [Context section of the Radix tooltip docs](https://www.radix-ui.com/docs/primitives/components/tooltip#content)
 */

const Tooltip: TooltipComponent = ({ children, delay, text, trigger, ...tooltipContentProps }) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={delay}>
        <RadixTooltip.Trigger className='constellation border-none outline-none bg-transparent p-0'>
          {trigger}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className='constellation bg-grey-800 p-3 rounded-lg'
            {...tooltipContentProps}
            asChild={false}
          >
            <RadixTooltip.Arrow fill={PaletteColors['grey-800']} width={16} height={8} />
            {children}
            {text && <p className='text-xs font-medium text-white-000'>{text}</p>}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

export default Tooltip
