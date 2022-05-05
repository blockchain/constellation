import { ComponentMeta } from '@storybook/react'
import { FlyoutHeader, FlyoutScaffold, FlyoutScaffoldComponent, Typography } from 'components'
import React from 'react'

export default {
  component: FlyoutScaffold,
  title: 'Components/Flyout/FlyoutScaffold',
} as ComponentMeta<FlyoutScaffoldComponent>

export const Preview = () => (
  <FlyoutScaffold
    header={
      <FlyoutHeader>
        <Typography.Title3>Header</Typography.Title3>
      </FlyoutHeader>
    }
  />
)
