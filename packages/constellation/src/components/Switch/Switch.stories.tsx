import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { Switch, SwitchComponent } from '.'

export default {
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Boolean indicating if the switch is activated/checked or not.',
    },
    color: {
      control: { type: 'select' },
      defaultValue: 'primary',
      description: 'The rendering color of the switch.',
      options: ['primary', 'secondary'],
    },
    disabled: {
      description: 'Boolean indicated if the switch is disabled in the context of a form',
    },
  },
  component: Switch,
  title: 'Components/Switch',
} as ComponentMeta<SwitchComponent>

const Template: ComponentStory<SwitchComponent> = ({
  checked: defaultChecked = false,
  ...args
}) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked)

  return <Switch checked={checked} onCheckedChange={setChecked} {...args} />
}

export const Primary = Template.bind({})
Primary.args = { color: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { color: 'secondary' }
