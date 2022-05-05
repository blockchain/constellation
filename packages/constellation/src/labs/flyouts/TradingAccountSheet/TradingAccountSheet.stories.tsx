import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { TradingAccountSheet } from './TradingAccountSheet'

export default {
  component: TradingAccountSheet,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Labs/Flyouts/Trading Account Sheet',
} as ComponentMeta<typeof TradingAccountSheet>

const Template: ComponentStory<typeof TradingAccountSheet> = (args) => (
  <div style={{ height: '100vh' }}>
    <TradingAccountSheet {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
