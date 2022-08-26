import cx from 'classnames'
import React, { forwardRef } from 'react'

import { centsToDollarString } from '../../../../utils'
import { SemanticColors, Text } from '../../../Base'
import { IconButton } from '../../../Primitives'
import { SectionHeader, SectionHeaderComponent } from '../Section Header'
import { Component as ComponentType, Props } from './BalanceHeader.types'

/**
 * BalanceHeaders description
 *
 * When a `ref` prop is provided, it will be forwarded to the root element. Any
 * other properties supplied will be provided to the root element (ie, the `as`
 * prop value). This includes all appropriate HTML attributes or aria tags. This
 * component may have its underlying DOM customized via the 'as' prop.
 */

const BalanceHeader: ComponentType = forwardRef(
  <T extends SectionHeaderComponent>(
    { balanceTotalCents = 0, icon, onIconClick, subtitle, title, ...otherProps }: Props<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    return (
      <SectionHeader ref={ref} {...otherProps}>
        <div className={cx('constellation flex flex-col')}>
          <Text variant='caption2' color={SemanticColors.title}>
            {title}
          </Text>
          <Text variant='subheading' className='mt-0 mb-0' color={SemanticColors.title}>
            {centsToDollarString(balanceTotalCents, 2)}
          </Text>
          <Text variant='paragraph-mono' color={SemanticColors.muted}>
            {subtitle}
          </Text>
        </div>
        <IconButton size='default' icon={icon} onClick={onIconClick} />
      </SectionHeader>
    )
  },
)

export default BalanceHeader
