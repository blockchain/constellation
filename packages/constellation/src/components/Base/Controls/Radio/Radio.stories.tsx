import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Radio as RenderedRadio, RadioComponent, RadioGroup as RenderedRadioGroup } from '.'

export default {
  argTypes: {
    error: {
      control: { type: 'boolean' },
    },
    id: { control: { type: 'text' } },
    label: {
      control: { type: 'text' },
      description: 'The content of the radio button label',
    },
  },
  args: {
    error: 'false',
    id: 'option1',
    label: 'Option 1',
  },
  component: RenderedRadio,
  title: 'Compositions/Controls/Radio',
} as ComponentMeta<RadioComponent>

const Template: ComponentStory<RadioComponent> = ({ ...args }) => {
  return (
    <RenderedRadioGroup orientation='vertical' onChange={() => false} defaultValue=''>
      <RenderedRadio {...args} />
    </RenderedRadioGroup>
  )
}

export const Radio = Template.bind({})
