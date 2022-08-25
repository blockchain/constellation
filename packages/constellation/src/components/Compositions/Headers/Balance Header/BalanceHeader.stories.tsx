import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { BalanceHeader as RenderedBalanceHeader, BalanceHeaderComponent } from '.'

export default {
  argTypes: {
    children: {
      control: { type: 'boolean' },
    },
  },
  args: {},
  component: RenderedBalanceHeader,
  title: 'Compositions/Headers/BalanceHeader',
} as ComponentMeta<BalanceHeaderComponent>

const Template: ComponentStory<BalanceHeaderComponent> = ({ ...args }) => {
  return <RenderedBalanceHeader {...args} />
}

export const BalanceHeader = Template.bind({})
