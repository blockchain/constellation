import React, { forwardRef } from 'react'

import { IconAlert, PaletteColors, SemanticColors } from '../../../Base'
import { Button, ButtonComponentType, ButtonProps } from '../Button'
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
  <T extends ButtonComponentType>(props: Props<T> & ButtonProps<T>, ref?: PolymorphicRef<T>) => {
    return (
      <Button
        {...props}
        ref={ref}
        variant='alert'
        icon={
          <IconAlert
            color={props.disabled ? PaletteColors['orange-300'] : SemanticColors.warning}
          />
        }
      />
    )
  },
)

export default AlertButton
