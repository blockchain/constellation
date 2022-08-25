import cx from 'classnames'
import React, { forwardRef } from 'react'

import { Text } from '../../../Base'
import { Button } from '../../../Primitives'
import { Component as ComponentType, Props } from './SettingsHeader.types'

/**
 * SettingsHeaders description
 *
 * When a `ref` prop is provided, it will be forwarded to the root element. Any
 * other properties supplied will be provided to the root element (ie, the `as`
 * prop value). This includes all appropriate HTML attributes or aria tags. This
 * component may have its underlying DOM customized via the 'as' prop.
 */

const SettingsHeader: ComponentType = forwardRef(
  <T extends React.ElementType = 'header'>(
    {
      as,
      mode = 'initial',
      onCancel,
      onEditClick,
      onSave,
      title = 'Account',
      ...otherProps
    }: Props<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    const Component = as || 'header'

    return (
      <Component
        className={cx(
          'constellation flex justify-between items-center p-8 w-full text-title bg-background',
        )}
        ref={ref}
        {...otherProps}
      >
        <Text variant='title2' className='mt-0 mb-0'>
          {title}
        </Text>
        {mode === 'initial' && <Button onClick={onEditClick} text='Edit' variant='secondary' />}
        {mode === 'unsaved' && (
          <div className='constellation flex gap-8'>
            <Button onClick={onSave} text='Save' />
            <Button onClick={onCancel} text='Cancel' variant='minimal' />
          </div>
        )}
      </Component>
    )
  },
)

export default SettingsHeader
