import React, { forwardRef } from 'react'

import { IconAlert, PaletteColors, SemanticColors } from '../../../Base'
import { Button } from '../Button'
import { Component as ComponentType, Props } from './Alert.types'

/**
 * Alert Buttons extend off of the Button component, and provide a consistent way
 * to alert users while giving them an appropriate action to take
 *
 * When a `ref` prop is provided, it will be forwarded to the root element. Any
 * other properties supplied will be provided to the root element (ie, the `as`
 * prop value). This includes all appropriate HTML attributes or aria tags. This
 * component may have its underlying DOM customized via the 'as' prop.
 */

const AlertButton: ComponentType = forwardRef(
  <T extends React.ElementType = 'button'>(props: Props<T>, ref?: PolymorphicRef<T>) => {
    return (
      <Button
        className='constellation rounded-full bg-grey-900 active:bg-grey-900 focus:bg-grey-900 hover:bg-grey-700 disabled:bg-grey-500'
        ref={ref}
        icon={
          <IconAlert
            color={props.disabled ? PaletteColors['orange-300'] : SemanticColors.warning}
          />
        }
        {...props}
      />
    )
  },
)

export default AlertButton
