import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Switcher as SwitcherComponent, SwitcherComponentType } from '.'

export default {
  argTypes: {},
  args: {
    title: 'BTC',
  },
  component: SwitcherComponent,
  title: 'Compositions/Switcher',
} as ComponentMeta<SwitcherComponentType>

const Template: ComponentStory<SwitcherComponentType> = ({ ...args }) => {
  return <SwitcherComponent {...args} />
}

export const Switcher = Template.bind({})
