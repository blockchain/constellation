import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { TextCell, TextCellComponent } from '.'

export default {
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
    subtext: {
      control: {
        type: 'text',
      },
    },
  },
  args: {},
  component: TextCell,
  title: 'Compositions/Table/Cells/TextCell',
} as ComponentMeta<TextCellComponent>

const Template: ComponentStory<TextCellComponent> = (args) => {
  return <TextCell {...args} />
}

export const Primary = Template.bind({})
