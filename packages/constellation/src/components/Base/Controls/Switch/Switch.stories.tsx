import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Switch as RenderedSwitch, SwitchComponent } from '.'

export default {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state of the switch',
    },
    id: { control: { type: 'text' } },
    label: {
      control: { type: 'text' },
      description: 'The content of the Switch button label',
    },
    orientation: {
      control: { type: 'radio' },
      options: ['vertical', 'horizontal'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'success'],
    },
  },
  args: {
    disabled: false,
    id: 'option1',
    label: '',
    orientation: 'horizontal',
    variant: 'primary',
  },
  component: RenderedSwitch,
  title: 'Compositions/Controls/Switch',
} as ComponentMeta<SwitchComponent>

const Template: ComponentStory<SwitchComponent> = ({ ...args }) => {
  return <RenderedSwitch {...args} />
}

export const Switch = Template.bind({})
