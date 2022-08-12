import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Checkbox as RenderedCheckbox, CheckboxComponent } from '.'

export default {
  argTypes: {
    error: {
      control: { type: 'boolean' },
    },
    id: { control: { type: 'text' } },
    label: {
      control: { type: 'text' },
      description: 'The content of the Checkbox button label',
    },
    onCheckedChange: {
      action: 'clicked',
    },
  },
  args: {
    error: false,
    id: 'option1',
    label: 'Option 1',
  },
  component: RenderedCheckbox,
  title: 'Primitives/Controls/Checkbox',
} as ComponentMeta<CheckboxComponent>

const Template: ComponentStory<CheckboxComponent> = ({ ...args }) => {
  return <RenderedCheckbox {...args} />
}

export const Checkbox = Template.bind({})
