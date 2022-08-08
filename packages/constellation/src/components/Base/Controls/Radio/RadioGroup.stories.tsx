import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { RadioGroup as RenderedRadioGroup, RadioGroupComponent } from '.'
import Radio from './Radio'

export default {
  argTypes: {
    defaultValue: {
      control: { type: 'text' },
      description: 'The default value selected in the radio group',
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onChange: {
      action: 'click',
    },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    defaultValue: 'Option2',
    orientation: 'vertical',
  },
  component: RenderedRadioGroup,
  title: 'Compositions/Controls/RadioGroup',
} as ComponentMeta<RadioGroupComponent>

const Template: ComponentStory<RadioGroupComponent> = ({ orientation, ...args }) => {
  return (
    <RenderedRadioGroup orientation={orientation} {...args}>
      <Radio label='Option 1' value='Option1' id='Option1' />
      <Radio label='Option 2' value='Option2' id='Option2' />
      <Radio label='Option 3' value='Option3' id='Option3' />
    </RenderedRadioGroup>
  )
}

export const RadioGroup = Template.bind({})
