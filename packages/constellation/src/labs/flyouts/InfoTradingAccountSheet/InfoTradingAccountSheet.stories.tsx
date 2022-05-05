import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import InfoTradingAccountSheet from './InfoTradingAccountSheet'

export default {
  component: InfoTradingAccountSheet,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Labs/Flyouts/InfoTradingAccountSheet',
} as ComponentMeta<typeof InfoTradingAccountSheet>

export const Preview: ComponentStory<typeof InfoTradingAccountSheet> = (args) => {
  return (
    <div style={{ height: '100vh' }}>
      <InfoTradingAccountSheet {...args} />
    </div>
  )
}
