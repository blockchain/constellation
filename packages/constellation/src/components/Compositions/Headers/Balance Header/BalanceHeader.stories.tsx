import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Text } from '../../../Base'
import { BalanceHeader as RenderedBalanceHeader, BalanceHeaderComponent } from '.'

export default {
  argTypes: {
    children: {
      control: { type: 'boolean' },
    },
    title: {
      control: { type: 'text' },
    },
  },
  args: {},
  component: RenderedBalanceHeader,
  title: 'Compositions/Headers/BalanceHeader',
} as ComponentMeta<BalanceHeaderComponent>

const Template: ComponentStory<BalanceHeaderComponent> = ({ ...args }) => {
  return (
    <section className='constellation w-3/4 h-80 bg-background-dark'>
      <RenderedBalanceHeader {...args} />
      <div className='constellation p-8'>
        <Text variant='paragraph1'>Section content</Text>
      </div>
    </section>
  )
}

export const BalanceHeader = Template.bind({})
