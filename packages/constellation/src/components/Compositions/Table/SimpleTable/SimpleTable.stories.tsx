import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'

import { SimpleTable as SimpleTableComponent } from '.'

export default {
  argTypes: {},
  args: {},
  component: SimpleTableComponent,
  title: 'Compositions/Table/SimpleTable',
} as ComponentMeta<FC>

const Template: ComponentStory<FC> = () => {
  return (
    <SimpleTableComponent
      header={[
        { cellType: 'text', text: 'Asset' },
        { cellType: 'text', subtext: 'Amount' },
        { cellType: 'text', subtext: 'Actions' },
      ]}
      rows={[
        [
          { cellType: 'text', subtext: 'BTC', text: 'Bitcoin' },
          { cellType: 'text', subtext: '1 BTC', text: '$32,000' },
          {
            cellType: 'button',
            primaryButton: { onClick: () => {}, text: 'Buy', variant: 'primary' },
            secondaryButton: { onClick: () => {}, text: 'Sell', variant: 'secondary' },
          },
        ],
        [
          { cellType: 'text', subtext: 'BTC', text: 'Bitcoin' },
          { cellType: 'text', subtext: '1 BTC', text: '$32,000' },
          {
            cellType: 'button',
            primaryButton: { onClick: () => {}, text: 'Buy', variant: 'primary' },
            secondaryButton: { onClick: () => {}, text: 'Sell', variant: 'secondary' },
          },
        ],
      ]}
    />
  )
}

export const SimpleTable = Template.bind({})
