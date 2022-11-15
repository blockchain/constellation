import cx from 'classnames'
import React, { forwardRef } from 'react'

import { PolymorphicRef } from '../../../../typings/polymorphic-ref'
import { Text } from '../../../Base'
import { Button, buttonSizeStyles, rootButtonStyles } from '../../../Primitives'
import { SectionHeader, SectionHeaderComponent } from '../Section Header'
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
  <T extends SectionHeaderComponent>(
    {
      cancelLabel = 'Cancel',
      editLabel = 'Edit',
      mode = 'initial',
      onCancel,
      onEditClick,
      onSave,
      saveLabel = 'Save',
      title = 'Account',
      ...otherProps
    }: Props<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    return (
      <SectionHeader ref={ref} {...otherProps}>
        <Text variant='title2' className='text-xl md:text-2xl'>
          {title}
        </Text>
        {mode === 'initial' && (
          <Button
            className={cx(
              rootButtonStyles,
              buttonSizeStyles.small,
              'md:px-6 md:py-3 md:text-base md:h-12',
            )}
            onClick={onEditClick}
            text={editLabel}
            variant='secondary'
          />
        )}
        {mode === 'unsaved' && (
          <div className='constellation flex gap-2 md:gap-8'>
            <Button
              className={cx(
                rootButtonStyles,
                buttonSizeStyles.small,
                'md:px-6 md:py-3 md:text-base md:h-12',
              )}
              onClick={onSave}
              text={saveLabel}
            />
            <Button
              className={cx(
                rootButtonStyles,
                buttonSizeStyles.small,
                'md:px-6 md:py-3 md:text-base md:h-12',
              )}
              onClick={onCancel}
              text={cancelLabel}
              variant='minimal'
            />
          </div>
        )}
      </SectionHeader>
    )
  },
)

export default SettingsHeader
