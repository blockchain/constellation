import { Story } from '@storybook/react'

import Component from '.'
import { SwitchProps } from './types'

export default {
  argTypes: {
    activeColor: {
      control: 'color',
      description: 'Active color',
    },
    disabled: {
      control: 'boolean',
      description: 'Should be disabled?',
    },
    disabledColor: {
      control: 'color',
      description: 'Disabled color',
    },
    firstItem: {
      description: 'Enter first option',
      type: 'text',
    },
    isFullWidth: {
      control: 'boolean',
      description: 'Is full width?',
    },
    hoverColor: {
      control: 'color',
      description: 'Hover color',
    },
    regularColor: {
      control: 'color',
      description: 'regular color',
    },
    secondItem: {
      description: 'Enter second option',
      type: 'text',
    },
    selectedActiveColor: {
      control: 'color',
      description: 'Selected active color',
    },
    selectedColor: {
      control: 'color',
      description: 'Selectd color',
    },
    selectedHoverColor: {
      control: 'color',
      description: 'Selected hover color',
    },
    selectedTextColor: {
      control: 'color',
      description: 'Selected text color',
    },
    textColor: {
      control: 'color',
      description: 'text color',
    },
  },
  component: Component,
  title: 'Components/Switch',
}

const Template: Story<SwitchProps> = (args) => <Component {...args} />

export const Switch = Template.bind({})

Switch.args = {
  firstItem: 'Android',
  secondItem: 'IOS',
  disabled: false,
  isFullWidth: false,
}
