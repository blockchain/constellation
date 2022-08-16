import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { IconMoneyUsd, IconWallet, SemanticColors } from '../../Base'
import { Dropdown as RenderedDropdown, DropdownComponent } from '.'

export default {
  argTypes: {
    currentValue: { type: 'string' },
    items: {
      control: { type: 'array' },
      description: 'List of Dropdown items to be displayed',
    },
  },
  args: {
    currentValue: 'allwallets',
    items: [
      {
        icon: <IconWallet color={SemanticColors.primary} />,
        label: 'All Wallets',
        value: 'allwallets',
      },
      { icon: <IconMoneyUsd />, label: 'Second', value: 'second' },
      { icon: <IconMoneyUsd color={SemanticColors.success} />, label: 'Third', value: 'third' },
    ],
  },
  component: RenderedDropdown,
  title: 'Primitives/Dropdown',
} as ComponentMeta<DropdownComponent>

const Template: ComponentStory<DropdownComponent> = ({ currentValue, ...args }) => {
  const [value, setValue] = useState(currentValue)
  return (
    <div className='constellation p-6'>
      <RenderedDropdown {...args} currentValue={value} setValue={setValue} />
    </div>
  )
}

export const Dropdown = Template.bind({})
