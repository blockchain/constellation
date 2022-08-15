import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { IconMoneyUsd } from '../../Base'
import { Dropdown as RenderedDropdown, DropdownComponent } from '.'

export default {
  argTypes: {
    defaultValue: { type: 'string' },
    items: {
      control: { type: 'array' },
      description: 'List of Dropdown items to be displayed',
    },
  },
  args: {
    defaultValue: 'first',
    items: [
      { icon: <IconMoneyUsd />, label: 'First', value: 'first' },
      { icon: <IconMoneyUsd />, label: 'Second', value: 'second' },
    ],
  },
  component: RenderedDropdown,
  title: 'Primitives/Dropdown',
} as ComponentMeta<DropdownComponent>

const Template: ComponentStory<DropdownComponent> = (args) => {
  return <RenderedDropdown {...args} />
}

export const Dropdown = Template.bind({})
