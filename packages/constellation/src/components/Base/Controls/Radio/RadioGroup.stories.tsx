import { ComponentMeta, ComponentStory } from '@storybook/react'
import cx from 'classnames'
import React from 'react'

import { Radio, RadioGroup as RenderedRadioGroup, RadioGroupComponent } from '.'

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
    defaultValue: 'hello',
    orientation: 'vertical',
  },
  component: RenderedRadioGroup,
  title: 'Compositions/Controls/RadioGroup',
} as ComponentMeta<RadioGroupComponent>

const Template: ComponentStory<RadioGroupComponent> = ({ orientation, ...args }) => {
  return (
    <RenderedRadioGroup
      className={cx('constellation flex gap-1', {
        'flex-col': orientation === 'vertical',
        'flex-row': orientation === 'horizontal',
      })}
      orientation={orientation}
      {...args}
    >
      <Radio label='Hello' value='hello' id='hello' />
      <Radio label='Good Morning' value='goodMorning' id='goodMorning' />
      <Radio label='Goodbye' value='Goodbye' id='Goodbye' />
    </RenderedRadioGroup>
  )
}

export const RadioGroup = Template.bind({})
